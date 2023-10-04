import express from 'express';
import signupController from '../../controllers/app/customer/signup.js';
import signinController from '../../controllers/app/customer/signin.js';
import changePasswordController from '../../controllers/app/customer/changePassword.js';
import recoverPasswordController from '../../controllers/app/customer/recoverPassword.js';
import {getAutoDrops,getMyNftsController} from '../../controllers/app/customer/getMyNfts.js';
import {getMyProfileClientController} from '../../controllers/app/customer/getMyProfile.js';
import {getMyNotificationCustomerController} from '../../controllers/app/customer/getMyNotifications.js';


const customer = express.Router();
customer.post('/signup',signupController);
customer.post('/signin',signinController);
customer.post('/change-password', changePasswordController);
customer.post('/recover-password', recoverPasswordController);
customer.post('/auto/drops/', getAutoDrops);
customer.post('/addwallet', getAutoDrops);
customer.get('/notifiactions/:id/:page', getMyNotificationCustomerController);
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