
const mintController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'mintController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'mintController'
        });
    }
}

export default mintController;