import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    isActive:boolean,
    createdAt: { type: Date, default: Date.now },
});

const Banner = mongoose.model('Banner', BannerSchema);
export default Banner;
