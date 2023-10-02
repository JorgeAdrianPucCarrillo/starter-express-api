
// Should return a list of hot nfts
// What's a hot nft?
const getHotNftsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            hotNfts: [ 'dummy' ]
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getHotNftsController;