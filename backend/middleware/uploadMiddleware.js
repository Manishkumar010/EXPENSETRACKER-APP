const fs = require('fs');
const multer = require("multer");

const path = './upload';
if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  allowedTypes.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error('Only .jpeg and .png formats are allowed'), false);
};

const upload = multer({ storage, fileFilter });
module.exports = upload;

