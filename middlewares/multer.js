// const multer = require("multer");
// const { UPLOAD_PATH } = require("../configs/app.config");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(req.body, file);
//     cb(null, UPLOAD_PATH);
//   },
//   filename: function (req, file, cb) {
//     console.log(req.body, file);
//     cb(null, `${Date.now()}.${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// module.exports = upload;
const multer = require("multer");
const path = require("path");

const STATIC_PATH = path.resolve(__dirname, "../public/images");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, STATIC_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
