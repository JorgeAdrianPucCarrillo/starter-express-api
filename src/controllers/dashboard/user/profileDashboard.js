
const profileDashboardController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: 'profileController'
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'profileController'
        });
    }
}

export default profileDashboardController;