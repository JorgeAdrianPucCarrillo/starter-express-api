
const singupDashboardController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'singupController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'singupController'
        });
    }
}

export default singupDashboardController;