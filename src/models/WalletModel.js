// Wallet model with mongoose

const WalletSchema = new mongoose.Schema({
    address: String,
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nfts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
});

const Wallet = mongoose.model('Wallet', WalletSchema);
export default Wallet;