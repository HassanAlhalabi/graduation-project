import ENV from 'dotenv';
ENV.config();

export default (keys = {
  cloudinaryUploadPreset: process.env.CLOUDINARY,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY
});
