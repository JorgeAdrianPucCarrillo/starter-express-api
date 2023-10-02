import express from 'express';

import mintController from '../../controllers/dashboard/nft/mint.js';
import bulkMintController from '../../controllers/dashboard/nft/bulkMint.js';
import importNftsController from '../../controllers/dashboard/nft/importNft.js';
import getNftsController from '../../controllers/dashboard/nft/getNfts.js';

const router = express.Router();
router.post('/mint', mintController);
router.post('/bulk-mint', bulkMintController);
router.post('/import-nfts', importNftsController);
router.get('/list', getNftsController);

export default router;