let multer = require("multer");
let path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/imgs-product");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

let uploadFile = multer({ storage });

module.exports = uploadFile;
