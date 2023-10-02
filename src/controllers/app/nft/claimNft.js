// Move NFT from contract to user wallet
const claimNftController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Claim NFT"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default claimNftController;