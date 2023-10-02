import express from 'express';

import getHotNftsController from '../../controllers/app/list/getHotNfts.js';
import getLiveDropsController from '../../controllers/app/list/getLiveDrops.js';
import getBannerController from '../../controllers/app/list/getBanner.js';
import getGalleryController from '../../controllers/app/list/getGallery.js';
import getUpcomingDropsController from '../../controllers/app/list/getUpcomingDrops.js';

const router = express.Router();
router.get('/hot', getHotNftsController);
router.get('/live', getLiveDropsController);
router.get('/upcoming', getUpcomingDropsController);
router.get('/banner/:screenName', getBannerController);
router.get('/gallery/', getGalleryController);

export default router;

