
// Should return a list of available NFTs
const getGalleryController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            gallery: [ 'dummy' ]
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getGalleryController;
