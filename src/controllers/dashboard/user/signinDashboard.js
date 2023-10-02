
const singinDashboardController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'singinController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'singinController'
        });
    }
}

export default singinDashboardController;