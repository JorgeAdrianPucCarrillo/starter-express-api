
const getWalletNfts = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Get Wallet NFTs"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getWalletNfts;