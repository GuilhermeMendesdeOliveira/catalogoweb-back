import multer from "multer";
import path from "path";
import crypto from "crypto";

export class UploadProvider {
  constructor() {
    this.uploadFolder = path.resolve("uploads");

    this.storage = multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, this.uploadFolder);
      },

      filename: (req, file, callback) => {
        const hash = crypto.randomBytes(8).toString("hex");
        const ext = path.extname(file.originalname);
        const filename = `${hash}-${Date.now()}${ext}`;
        callback(null, filename);
      }
    });

    this.uploader = multer({ storage: this.storage });
  }

  single(fieldName) {
    return this.uploader.single(fieldName);
  }

  array(fieldName) {
    return this.uploader.array(fieldName);
  }
}
export default UploadProvider;
