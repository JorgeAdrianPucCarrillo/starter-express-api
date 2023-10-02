// Should return a list of upcoming drops
const getUpcomingDropsController = async (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            upcomingDrops: [ 'dummy' ]
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export default getUpcomingDropsController;