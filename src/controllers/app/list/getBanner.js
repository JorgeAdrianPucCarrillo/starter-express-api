const getBannerController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            banner: [ 'dummy' ]
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getBannerController;
