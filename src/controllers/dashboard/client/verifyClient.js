
const verifyClientController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'verifyClientController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'verifyClientController'
        });
    }
}

export default verifyClientController;