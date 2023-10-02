import express from 'express';
import signupController from '../../controllers/app/user/signup.js';
import signinController from '../../controllers/app/user/signin.js';
import changePasswordController from '../../controllers/app/user/changePassword.js';
import recoverPasswordController from '../../controllers/app/user/recoverPassword.js';
import getMyNftsController from '../../controllers/app/user/getMyNfts.js';
import {ClientGetMyCustomersController, getMyProfileClientController} from '../../controllers/app/user/getMyProfile.js';
import {getMyNotificationClientController} from '../../controllers/app/user/getMyNotifications.js';


const client = express.Router();
client.post('/signup',signupController);
client.post('/signin',signinController);
client.post('/change-password', changePasswordController);
client.post('/recover-password', recoverPasswordController);
client.get('/my-nfts', getMyNftsController);
client.get('/profile/:id', getMyProfileClientController);
client.get('/customers/:id/:page', ClientGetMyCustomersController);
client.get('/notifiactions/:id/:page', getMyNotificationClientController);

export default client;