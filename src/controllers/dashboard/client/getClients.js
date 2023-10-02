
const getClientsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'getClientsController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'getClientsController'
        });
    }
}

export default getClientsController;