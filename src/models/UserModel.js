import mongoose from 'mongoose';
//este schema es creado como el usuario principal de yebo
//este schema nos permite saber los NFT creados y usados.
//al menos dentro de la propia aplicacion YEBO
const UserSchema = new mongoose.Schema({
    wallets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }],
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    }],
    nfts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT'
    }],
    notifiacations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notifiacations'
    }],
    // Shoper or Seller/Creator
    type: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
export default User;


