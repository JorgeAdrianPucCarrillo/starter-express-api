
import bcrypt from 'bcrypt'
import Customer from '../../../models/CustomersModel.js'
import  {asyncMiddleware}  from '../../../middlewares/async.js';

const signupController = asyncMiddleware(async (req, res) => {
    try{
      const  body = req.body;
      body.password = await bcrypt.hash(body.password, 10);
      //const address = await Address(body.address).save();
      //const contact = await Contact(body.contact).save();
      //body.address = address._id;
      ///body.contact = contact._id;
      const customer = await Customer.create(body);
      //const data = await User.findById(user._id).populate('address contact');
      res.status(201).json({ success: true, customer });

    }catch(e){
      res.status(500).json({ 
        ok: false,
        message: e.message 
      });
    }
  });

export default signupController;