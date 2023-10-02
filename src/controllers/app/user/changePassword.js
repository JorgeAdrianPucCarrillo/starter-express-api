
const changePasswordController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Change Password"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default changePasswordController;