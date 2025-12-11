export class UploadController {
  constructor(uploadService) {
    this.uploadService = uploadService;
  }

  upload = async (req, res) => {
    try {
      const result = await this.uploadService.saveFile(req.file);

      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }
  };
}

export default UploadController;