
const bulkMintController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'bulkMintController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'bulkMintController'
        });
    }
}

export default bulkMintController;