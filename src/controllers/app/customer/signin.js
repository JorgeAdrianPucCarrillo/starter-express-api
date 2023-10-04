import bcrypt, { compareSync } from 'bcrypt'
import Customer from '../../../models/CustomersModel.js';
import  {asyncMiddleware}  from '../../../middlewares/async.js';
import {encode} from '../../../helpers/jwtHelpers.js';
//import { logger } from '../helpers/loggerHelpers';
import dotenv from "dotenv";
import APIError from '../../../helpers/APIError.js';
dotenv.config();
const signinController = asyncMiddleware(async (req, res) => {
    const { email, password } = req.body;
    const data = await Customer.findOne({ email:email });
    if (!data) {
      //logger.warn('Authentication failed. Customer not found.');
      throw new APIError('Autenticación Failed', 'Customer or Password are wrong ', 505, true);
    }
    if (!(await bcrypt.compare(password, data.password))) {
    //  //logger.warn('Authentication failed. Wrong password.');
      throw new APIError('Autenticación fallida', 'Customer or Password are wrong ', 505, true);
    }
    // Create a token with only our given payload
    const token = encode({ id: data._id, email, type: data.type }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ success: true, data, token });
  });

export default signinController;