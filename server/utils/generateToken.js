import jwt from 'jsonwebtoken';

const generateToken = (res, user, message) => {
    const token = jwt.sign({ userid: user._id },
        process.env.SECRET_KEY,
        { expiresIn: '1d' }
    );
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        path: '/'
    });
    res.status(200).json({
        success: true,
        message,
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        }
    });
};

export default generateToken;