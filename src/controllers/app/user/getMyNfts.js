
const getMyNftsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Get My NFTs"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getAutoDrops = async (req, res) => {
    try {
        const body = req.body;
        if (body.lat)
        res.status(200).json({
            ok: true,
            message: "Get My NFTs"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export {getAutoDrops,getMyNftsController}