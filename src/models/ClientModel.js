import mongoose from 'mongoose';
//este schema es creado como la informacion de los clientes llevo (llamese NIKE, PUMA, ETC)
//esto con el fin tener un historico por aparte de los NFT de este usuario.
const ClientSchema = new mongoose.Schema({
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

const Client = mongoose.model('Client', ClientSchema);
export default Client;


