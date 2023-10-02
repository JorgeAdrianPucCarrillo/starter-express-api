
const recoverPasswordController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            message: "Recover Password"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default recoverPasswordController;