// import multer from 'multer';

// const upload = multer({
//     dest:"uploads/"}
// );
// export default upload;
import multer from 'multer';

const storage = multer.memoryStorage();   // ← yeh 1 line add kar di

const upload = multer({
    storage: storage,                     // ← yeh line add kar di
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB tak photo allowed (optional)
});

export default upload;
