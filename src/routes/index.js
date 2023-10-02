import express from 'express';
//import { getAuthorize } from '../middlewares/authMiddleware';
import  client  from './app/client.js';
import  admin  from './app/admin.js';
import  banner  from './app/banner.js';
import  nft  from './app/nft.js';

//import { authenticate, signInAdmin} from '../controllers/app/user';
const indexRouter = express.Router();
indexRouter.use('/admin', admin);
indexRouter.use('/client', client);
indexRouter.use('/nft', nft);
indexRouter.use('/banner', banner);
//indexRouter.use('/customers', router);

export default indexRouter;