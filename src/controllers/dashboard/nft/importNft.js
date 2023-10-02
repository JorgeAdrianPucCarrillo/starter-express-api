
const importNftsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'importNftsController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'importNftsController'
        });
    }
}

export default importNftsController;