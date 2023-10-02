
const getClientController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'getClientController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'getClientController'
        });
    }
}

export default getClientController;