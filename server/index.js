// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import connectDB from './database/db.js';
// import userRoute from './routes/user.route.js';
// dotenv.config({});
// //databse connection
// connectDB();
// const app = express();
// const PORT = process.env.PORT || 8080;
// //middlewares
// app.use(express.json());
// app.use(cookieParser());
// // Catch JSON parse errors
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ error: 'Invalid JSON format' });
//   }
//   next();
// });
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
// }));

// //apis
// app.use("/api/v1/users", userRoute);

// app.listen(PORT, () => {
//     console.log(`Server listen at port ${PORT}`);
// });
// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import connectDB from './database/db.js';
// import userRoute from './routes/user.route.js';

// dotenv.config({});
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 8080;

// // YE SABSE UPAR HONA CHAHIYE — CORS PEHLE!!!
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
// }));

// app.use(express.json());
// app.use(cookieParser());

// // Ye error handler bilkul safe hai — rakh do (line 16-19)
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ error: 'Invalid JSON format' });
//   }
//   next();
// });

// // Routes last mein
// app.use("/api/v1/users", userRoute);

// app.listen(PORT, () => {
//     console.log(`Server listen at port ${PORT}`);
// });
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';

dotenv.config({});
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS SABSE UPAR LAGA DO (yehi ek line galat thi bhai)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Baki sab same
app.use(express.json());
app.use(cookieParser());

// Ye error handler rakh sakta hai, koi dikkat nahi
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

// Routes last mein
app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});