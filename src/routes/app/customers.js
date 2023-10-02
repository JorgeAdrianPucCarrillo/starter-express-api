import express from 'express';
import signupController from '../../controllers/app/user/signup.js';
import signinController from '../../controllers/app/user/signin.js';
import changePasswordController from '../../controllers/app/user/changePassword.js';
import recoverPasswordController from '../../controllers/app/user/recoverPassword.js';
import {getAutoDrops,getMyNftsController} from '../../controllers/app/user/getMyNfts.js';
import {getMyProfileClientController} from '../../controllers/app/user/getMyProfile.js';
import {getMyNotificationClientController} from '../../controllers/app/user/getMyNotifications.js';


const customer = express.Router();
customer.post('/signup',signupController);
customer.post('/signin',signinController);
customer.post('/change-password', changePasswordController);
customer.post('/recover-password', recoverPasswordController);
customer.post('/auto/drops/', getAutoDrops);
/*
/auto/drops/
body={
    lat:number,
    lng:number,
    id:customer_id,
    birtday:customer_birthday,
    keys:[idKey related to any loyalty event],
    events_id:[id events that the customer are subcripted],
}
*/
customer.get('/my-nfts', getMyNftsController);
customer.get('/profile/:id', getMyProfileClientController);
customer.get('/notifiactions/:id/:page', getMyNotificationClientController);

export default customer;