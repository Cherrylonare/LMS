
import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { _id: decoded.userid }; // ← YE FIX HAI

        next();
    } catch (error) {
        console.log("Auth Middleware Error:", error);
        return res.status(401).json({
            success: false,
            message: "Token expired or invalid"
        });
    }
};

export default isAuthenticated;