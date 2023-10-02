import express from 'express';
import signupController from '../../controllers/app/user/signup.js';
import signinController from '../../controllers/app/user/signin.js';
import changePasswordController from '../../controllers/app/user/changePassword.js';
import recoverPasswordController from '../../controllers/app/user/recoverPassword.js';
import getMyNftsController from '../../controllers/app/user/getMyNfts.js';
import {getMyProfileUserController, getMyProfileClientController,getMyProfileCustomerController} from '../../controllers/app/user/getMyProfile.js';
import {markMyNotificationController,getMyNotificationUserController, getMyNotificationClientController,getMyNotificationCustomerController} from '../../controllers/app/user/getMyNotifications.js';


const client = express.Router();
client.post('/signup',signupController);
client.post('/signin',signinController);
client.post('/change-password', changePasswordController);
client.post('/recover-password', recoverPasswordController);
client.get('/my-nfts', getMyNftsController);
client.get('/profile/Client/:id', getMyProfileClientController);
client.get('/profile/Customer/:id', getMyProfileCustomerController);
client.get('/profile/User/:id', getMyProfileUserController);
client.get('/notifiactions/Client/:id/:page', getMyNotificationClientController);
client.get('/notifiactions/Customer/:id/:page', getMyNotificationCustomerController);
client.get('/notifiactions/User/:id/:page', getMyNotificationUserController);
client.get('/notifiactions/mark/:id', markMyNotificationController);

export default client;