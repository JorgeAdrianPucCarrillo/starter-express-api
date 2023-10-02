
const getNftsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'getNftsController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'getNftsController'
        });
    }
}

export default getNftsController;