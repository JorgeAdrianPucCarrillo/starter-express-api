
import banner from '../../../models/Banner.js';
const getBannerController = async (req, res) => {
    try {
        const banners = banner.find({isActive:true})
        res.status(200).json(banners);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export {getBannerController};