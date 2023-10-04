import express from 'express';
import sendNftController from '../../controllers/app/nft/sendNft.js';
import claimNftController from '../../controllers/app/nft/claimNft.js';
import {createNftController,mintNftController,getLiveNftsController} from '../../controllers/app/nft/Nfts.js';
import {getNFTMetaDataController,getNFTUserMetaDataController,getNFTClientMetaDataController,getNFTCustomersMetaDataController} from '../../controllers/app/nft/getNFTMetaData.js';
const router = express.Router();
router.get('/get/one/:nft', getNFTMetaDataController); //nft metadata ID
router.get('/get/live/:page', getLiveNftsController);
router.get('/get/client/:type/:client/:page', getNFTClientMetaDataController);//type => {redeemed, notredeemed, all} => default = all
router.get('/get/user/:type/:user/:page', getNFTUserMetaDataController);//type => {redeemed, notredeemed, all} => default = all
router.get('/get/customer/:type/:customer/:page', getNFTCustomersMetaDataController);//type => {redeemed, notredeemed, all} => default = all
router.post('/create', createNftController); //crea la base para un nft, sin agregarlo a la bloc chain
//router.post('/mint', mintNftController);//agrega un nft creado a la blokchain
router.post('/mint', mintNftController);//crea y agrega un nft creado a la blokchain 
router.post('/transfer', sendNftController);
router.post('/claim', claimNftController);

export default router;