
import Client from '../../../models/ClientModel.js';
import Customers from '../../../models/CustomersModel.js';
import user from '../../../models/UserModel.js';
import NotifiacationsData from '../../../models/NotifiactionModel.js';
const getMyNotificationUserController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 
        const data = await user.findById(id,{notifiacations:true}).populate({path:'notifiacations', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getMyNotificationClientController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 
        const data = await Client.findById(id,{nfts:false, notifiacations:false}).populate({path:'notifiacations', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getMyNotificationCustomerController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 
        const data = await Customers.findById(id,{nfts:false, notifiacations:false}).populate({path:'notifiacations', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const markMyNotificationController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const data = await NotifiacationsData.findById(id);
        data.viewed = true;
        await data.save()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export {markMyNotificationController,getMyNotificationUserController, getMyNotificationClientController,getMyNotificationCustomerController};