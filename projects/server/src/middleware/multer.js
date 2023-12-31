const multer = require('multer');
const fs = require('fs');

module.exports = {
    multerUpload: (directory = "./src/public", name = "PIMG") => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, directory)
            },
            filename: (req, file, cb) => {
                cb(null,
                    name +
                    "-" + 
                    Date.now() +
                    Math.round(Math.random() * 100000) +
                    "." +
                    file.mimetype.split('/')[1]
                    );
            }
        });
        
        const fileFilter = (req, file, cb) => {
            const extFilter = ['jpg', 'jpeg', 'png', 'gif'];
            const checkExt = extFilter.includes(file.mimetype.split('/')[1].toLowerCase());
            
            if (!checkExt) {
                cb(new Error("Doesn't support file type"), false);
            } else {
                cb(null, true);
            };
        };

        const fileLimit = 1024 *1024;
        return multer({ storage, fileFilter, limits: { fileSize: fileLimit } });
    }
};