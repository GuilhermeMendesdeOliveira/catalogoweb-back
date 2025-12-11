export class UploadService {
  async saveFile(file) {
    if (!file) {
      throw new Error("Nenhum arquivo enviado.");
    }

    return {
      fileName: file.filename,
      filePath: `/uploads/${file.filename}`
    };
  }
}
export default UploadService;
