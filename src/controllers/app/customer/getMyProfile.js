
import Client from '../../../models/ClientModel.js';
import Customers from '../../../models/CustomersModel.js';
import user from '../../../models/UserModel.js';
const getMyProfileUserController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const data = await user.findById(id,{nfts:false, notifiacations:false,customeres:false});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getMyProfileClientController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const data = await Client.findById(id,{nfts:false, notifiacations:false,clients:false,customers:false});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getMyProfileCustomerController = async (req, res) => {
    try {
        const  id  = req.params.id;
        const data = await Customers.findById(id,{nfts:false, notifiacations:false});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

const ClientGetMyCustomersController = async (req, res) => {
    try {
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const data = await Client.findById(id,{customers:true}).populate({path:'customers', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.customers);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const AdminGetMyCustomersController = async (req, res) => {
    try {
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const data = await user.findById(id,{customers:true}).populate({path:'customers', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.customers);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getMyClientsController = async (req, res) => {
    try {
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const data = await user.findById(id,{clients:false}).populate({path:'clients', options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.clients);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export  {getMyProfileUserController, getMyProfileClientController,getMyProfileCustomerController,ClientGetMyCustomersController,AdminGetMyCustomersController,getMyClientsController};