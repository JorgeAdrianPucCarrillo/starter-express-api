import express from 'express';
import getWalletBalanceController from '../../controllers/app/wallets/getWalletBalance.js';

const router = express.Router();
router.get('/info', getWalletBalanceController);

export default router;

