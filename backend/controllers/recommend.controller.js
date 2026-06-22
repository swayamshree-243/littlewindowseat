const recommend = (req, res) => {
    console.log(req.file);

    res.json({
        success: true
    });
};

module.exports = recommend;