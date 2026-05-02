const multer = require('multer');
const uuid = require('uuid').v4; // Using require for uuid

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads');
  },
  filename: function (req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split('.').pop();
    callback(null, `${id}.${extName}`);
  }
});

const singleUpload = multer({ storage }).single('photo'); // Using single for single file upload

module.exports = singleUpload;