const recommend = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({
                success: false,
                message: "Please upload only images."
            });
        }

        if (req.file.size > 5242880) {
            return res.status(400).json({
                success: false,
                message: "Image size must be less than 5MB"
            });
        }

        console.log(req.file);

        return res.json({
            success: true,
            file: {
                originalname: req.file.originalname,
                mimetype: req.file.mimetype,
                size: req.file.size
            }
        });
    }

    catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = recommend;