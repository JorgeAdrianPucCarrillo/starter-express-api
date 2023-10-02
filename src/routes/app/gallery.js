import express from 'express';
import getWalletBalanceController from '../../controllers/app/wallets/getWalletBalance.js';
import getWalletNfts from '../../controllers/app/wallets/getWalletNfts.js';
import verifyWalletController from '../../controllers/app/wallets/verifyWallet.js';

const router = express.Router();
router.get('/balance', getWalletBalanceController);
router.get('/nfts', getWalletNfts);
router.post('/verify', verifyWalletController);

export default router;

