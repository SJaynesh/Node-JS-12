const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

console.log("Cloud Name : ", process.env.CLOUD_NAME);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Movies',
        allowedFormats: ['jpeg', 'png', 'jpg', 'webp'],
    }
});

module.exports = {
    storage
};