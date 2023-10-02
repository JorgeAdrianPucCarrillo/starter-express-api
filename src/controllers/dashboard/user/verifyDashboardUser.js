
const verifyDashboardUserController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'verifyController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'verifyController'
        });
    }
}

export default verifyDashboardUserController;