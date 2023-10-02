
const editClientController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'editClientController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'editClientController'
        });
    }
}

export default editClientController;