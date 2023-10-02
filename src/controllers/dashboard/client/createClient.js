
const createClientController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'createClientController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'createClientController'
        });
    }
}

export default createClientController;