import express from 'express';
import signupController from '../../controllers/app/user/signup.js';
import signinController from '../../controllers/app/user/signin.js';
import changePasswordController from '../../controllers/app/user/changePassword.js';
import recoverPasswordController from '../../controllers/app/user/recoverPassword.js';
//import getMyNftsController from '../../controllers/app/user/getMyNfts.js';
import {getMyProfileUserController,AdminGetMyCustomersController,getMyClientsController} from '../../controllers/app/user/getMyProfile.js';
import {getMyNotificationUserController} from '../../controllers/app/user/getMyNotifications.js';
import {getAllNfts} from '../../controllers/app/nft/getNFTMetaData.js';


const admin = express.Router();
admin.post('/signup',signupController);
admin.post('/signin',signinController);
admin.post('/change-password', changePasswordController);
admin.post('/recover-password', recoverPasswordController);
//admin.get('/my-nfts', getMyNftsController);
admin.get('/profile/:id', getMyProfileUserController);
admin.get('/clients/:id/:page', getMyClientsController);
admin.get('/customers/:id/:page', AdminGetMyCustomersController);
admin.get('/notifiactions/:id/:page', getMyNotificationUserController);
admin.get('/nft/all/:page', getAllNfts);

export default admin;