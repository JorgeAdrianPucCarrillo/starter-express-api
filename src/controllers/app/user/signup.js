
import Client from '../../../models/ClientModel.js'
import  {asyncMiddleware}  from '../../../middlewares/async.js';

const signupController = asyncMiddleware(async (req, res) => {
    const { body } = req;
    //const address = await Address(body.address).save();
    //const contact = await Contact(body.contact).save();
    //body.address = address._id;
    ///body.contact = contact._id;
    const Cliente = await Client.create(body);
    //const data = await User.findById(user._id).populate('address contact');
    res.status(201).json({ success: true, Cliente });
  });

export default signupController;