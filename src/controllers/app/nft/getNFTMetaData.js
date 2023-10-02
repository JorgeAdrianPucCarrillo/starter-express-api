// Move NFT from contract to user wallet
import Client from '../../../models/ClientModel.js';
import Customers from '../../../models/CustomersModel.js';
import user from '../../../models/UserModel.js';
import NftMetaData from '../../../models/NftMetaDataModel.js';
import NftModel from '../../../models/NFTModel.js';
const getNFTMetaDataController = async (req, res) => {
    try {
        const  id  = req.params.nftMetadata;
        const data = await NftMetaData.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

const getNFTUserMetaDataController = async (req, res) => {
    try {
        //las paginas cargan de 40 en 40 
        // se envia el id de usuario y el numero de pagina
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const redeemed = {}
        if (req.params.type == 'redeemed'){
            redeemed.redeemed = true
        }
        if (req.params.type == 'notredeemed'){
            redeemed.redeemed = false
        }
        const data = await user.findById(id).populate({path:'nfts',  match: redeemed, options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.nfts);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getNFTClientMetaDataController = async (req, res) => {
    try {
        //las paginas cargan de 40 en 40 
        // se envia el id de usuario y el numero de pagina
        const  id  = req.params.user;
        const  page  = req.params.page;
        const redeemed = {}
        if (req.params.type == 'redeemed'){
            redeemed.redeemed = true
        }
        if (req.params.type == 'notredeemed'){
            redeemed.redeemed = false
        }
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const data = await Client.findById(id).populate({path:'nfts',  match: redeemed, options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.nfts);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getNFTCustomersMetaDataController = async (req, res) => {
    try {
        //las paginas cargan de 40 en 40 
        // se envia el id de usuario y el numero de pagina
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const redeemed = {}
        if (req.params.type == 'redeemed'){
            redeemed.redeemed = true
        }
        if (req.params.type == 'notredeemed'){
            redeemed.redeemed = false
        }
        const data = await Customers.findById(id).populate({path:'nfts',  match: redeemed, options: {
            skip: skip,  // Saltar los primeros 2 elementos
            limit: limit  // Mostrar un máximo de 4 elementos (hasta la posición 5)
          }});
        res.status(200).json(data.nfts);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getAllNfts = async (req, res) => {
    try {
        //las paginas cargan de 40 en 40 
        // se envia el id de usuario y el numero de pagina
        const  id  = req.params.user;
        const  page  = req.params.page;
        const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
        const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
        const data = await NftModel.find({}).skip(skip).limit(limit)
        res.status(200).json(data.nfts);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export {getNFTMetaDataController,getNFTUserMetaDataController,getNFTClientMetaDataController,getNFTCustomersMetaDataController,getAllNfts};