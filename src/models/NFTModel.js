import mongoose from 'mongoose';
const NFTSchema = new mongoose.Schema({
    asset: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    persistenLoyalty: {
        type: Number,
        required: true
    },
    geoLocation: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    currency: {
        type: String,
        required: true
    },
    tags: [{ type: String, required: false }],
    minted: {
        type: Boolean,
        required: true
    },
    mintedDate: {
        type: Date,
        required: false
    },
    /*mintedTx: {
        type: String,
        required: false
    },
    mintedTxUrl: {
        type: String,
        required: false
    },*/
    metadataUrl: {
        type: String,
        required: true
    },
    metadataId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NftMetaData',
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    redemed: {
        type: Boolean,
        required: true,
        default: false
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    deletedAt: {
        type: Date,
        required: false
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: false
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: false
    },
    YeboUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    /*user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DashboardUser',
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }*/
});

const NFT = mongoose.model('NFT', NFTSchema);
export default NFT;