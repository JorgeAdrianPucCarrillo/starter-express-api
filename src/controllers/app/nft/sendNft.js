
const sendNftController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Send NFT"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default sendNftController;