
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // agar password hash karte ho register/login mein
import jwt from "jsonwebtoken"; // agar JWT use karte ho
import { uploadMedia, deleteMediaFromCloudinary } from "../utils/cloudinary.js";

// ====================== REGISTER USER ======================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Basic validation (tumhare according add kar lena)
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "student", // default role
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

// ====================== LOGIN ======================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT token (agar use karte ho)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        photoUrl: user.photoUrl || "",
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// ====================== GET USER PROFILE ======================
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id || req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ====================== LOGOUT ======================
// Note: Logout usually frontend se token delete kar deta hai
// Backend pe kuch karne ki zaroorat nahi hoti (stateless JWT)
export const logout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

// ====================== UPDATE USER PROFILE ======================
export const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const user = await User.findById(req.user._id || req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update name
    if (name && name.trim() !== "") {
      user.name = name;
    }

    // Update photo
    if (file) {
      let uploadResponse;

      // Memory storage (recommended)
      if (file.buffer) {
        const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        uploadResponse = await uploadMedia(base64);
      }
      // Disk storage
      else if (file.path) {
        uploadResponse = await uploadMedia(file.path);
      }

      if (uploadResponse?.secure_url) {
        // Delete old photo from Cloudinary (optional but good)
        if (user.photoUrl) {
          const publicId = user.photoUrl.split("/").pop().split(".")[0];
          await deleteMediaFromCloudinary(publicId);
        }

        user.photoUrl = uploadResponse.secure_url;
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};
