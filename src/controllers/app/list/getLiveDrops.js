
// Should return a list of live drops
// What's a live drop?
const getLiveDropsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            liveDrops: [ 'dummy' ]
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getLiveDropsController;