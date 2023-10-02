
const deleteClientController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'deleteClientController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'deleteClientController'
        });
    }
}

export default deleteClientController;