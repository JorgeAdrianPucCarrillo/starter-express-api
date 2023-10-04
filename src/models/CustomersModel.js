import mongoose from 'mongoose';
//CustomersModel
//este modelo ha sido creado con la intencion de tener la informacion de los NFT pertenecientes a un customer
//si el customer ha hecho un tradding fuera de Yebo, entonces esta informacion quedaria depreciada...
const CustomersSchema = new mongoose.Schema({
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
        default:"regular"
    }
});

const Customers = mongoose.model('Customers', CustomersSchema);
export default Customers;


