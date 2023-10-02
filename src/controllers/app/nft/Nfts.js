import mintNFT from '../../../../scripts/mint-nft.js';
import NftMetaData from '../../../models/NftMetaDataModel.js';
import NFTModel from '../../../models/NFTModel.js';
import Client from '../../../models/ClientModel.js';
import User from '../../../models/UserModel.js';
import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
const SELF_HOST  = process.env.SELF_HOST;

const mintNftController = async (req, res) => {
    try {
        const body = req.body ? req.body : {};
        //req.body tiene que tener la imagen del NFT
        //salvamos en Mongo la imagen
        //salvamos en Mongo el nft Metadata
        //en lugar de enviar 'https://yebobacktest.web.app/nft-metadata.json' enviaremos 
        //  el endpoint para pedir el NFT Json que salvamos
        const imageFuture64 = req.file
        const image = imageFuture64? Buffer.from(imageFuture64).toString('base64') : "data:image/jpeg;base64,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";
        const name = body.name;
        const description = body.description;
        const trait_type = "Test1";
        const value = "Maltipoo";
        const attributes = body.attributes;
        const client_id = body.client_id;//"asdadasdaqweqwe";
        const user_id = body.user_id;//"asdadasdaqweqwe";
        const customer_id = body.customer_id;//"asdadasdaqweqwe";
        //const { image, name, description, trait_type, value } = req.body;
        const metadaNFT = {
            attributes:attributes, // [{trait_type: trait_type,value: value}],
            description: description,
            image: image,
            name: name,
        }
        const NFTNew = {
            asset: image,
            title: "",
            description:"",
            price: 0,
            persistenLoyalty: 0,
            geoLocation: 0,
            endDate: 0,
            currency: 0,
            metadataUrl:"",
            metadataId:"",
            tags: ["#algo","#algo"],
            minted: true,
            mintedDate: new Date(),
            isActive: true, //este puede ser false cuando el cliente lo decida o cuando un futuro endpoinv vea que ese nft no esta en su wallet
            isDeleted: false,
            client: client_id,
            customer: customer_id,
            YeboUser: user_id,
        };
        const NFTObj = await NftMetaData.create(metadaNFT);
        const NFT_id = NFTObj._id;
        const NftURLMetaData = SELF_HOST+'v1/nft/get/'+NFT_id;
        NFTNew.metadataUrl=SELF_HOST+'v1/nft/get/'+NFT_id;
        NFTNew.metadataId=NFT_id;
        await NFTModel.create(NFTNew);
        const updateUser = await User.findById("")//este es el ID de YEBO, este ID es inamobible
        const updateClient = await Client.findById(req.body.client_id)//este es el ID del cliente que crea el NFT
        updateClient.nfts.push(mongoose.Types.ObjectId(NFT_id))
        updateUser.nfts.push(mongoose.Types.ObjectId(NFT_id))
        await updateClient.save();
        await updateUser.save();

        mintNFT(NftURLMetaData);
        res.status(200).json({
            ok: true,
            message: "NFT minted"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const createNftController = async (req, res) => {
    try {
        const body = req.body ? req.body : {};
        //req.body tiene que tener la imagen del NFT
        //salvamos en Mongo la imagen
        //salvamos en Mongo el nft Metadata
        //en lugar de enviar 'https://yebobacktest.web.app/nft-metadata.json' enviaremos 
        //  el endpoint para pedir el NFT Json que salvamos
        const imageFuture64 = req.file
        const image = imageFuture64? Buffer.from(imageFuture64).toString('base64') : "data:image/jpeg;base64,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";
        const name = body.name;
        const description = body.description;
        const trait_type = "Test1";
        const value = "Maltipoo";
        const attributes = body.attributes;
        const client_id = body.client_id;//"asdadasdaqweqwe";
        const user_id = body.user_id;//"asdadasdaqweqwe";
        const customer_id = body.customer_id;//"asdadasdaqweqwe";
        //const { image, name, description, trait_type, value } = req.body;
        const metadaNFT = {
            attributes:attributes, // [{trait_type: trait_type,value: value}],
            description: description,
            image: image,
            name: name,
        }
        const NFTNew = {
            asset: image,
            title: "",
            description:"",
            price: 0,
            persistenLoyalty: 0,
            geoLocation: 0,
            endDate: 0,
            currency: 0,
            metadataUrl:"",
            metadataId:"",
            tags: ["#algo","#algo"],
            minted: true,
            mintedDate: new Date(),
            isActive: true, //este puede ser false cuando el cliente lo decida o cuando un futuro endpoinv vea que ese nft no esta en su wallet
            isDeleted: false,
            client: client_id,
            customer: customer_id,
            YeboUser: user_id,
        };
        await NFTModel.create(NFTNew);
        const updateUser = await User.findById("")//este es el ID de YEBO, este ID es inamobible
        const updateClient = await Client.findById(req.body.client_id)//este es el ID del cliente que crea el NFT
        updateClient.nfts.push(mongoose.Types.ObjectId(NFT_id))
        updateUser.nfts.push(mongoose.Types.ObjectId(NFT_id))
        await updateClient.save();
        await updateUser.save();
        res.status(200).json({
            ok: true,
            message: "NFT base created"
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

const getLiveNftsController = async (req, res) => {
    const  page  = req.params.page;
    const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
    const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta
    //const data = await NftModel.aggregate([
    //    {
    //        $match: { active: true } // Filtra solo los elementos con active: true
    //    },
    //    {
    //        $group: {
    //            _id: "$nombre",
    //            count: { $sum: 1 }
    //        }
    //    },
    //    {
    //        $skip:skip // Opcional: omite los primeros 2 resultados
    //    },
    //    {
    //        $limit:limit // Opcional: muestra un máximo de 5 resultados
    //    }
    //])
    const data = await NFTModel.find({isActive:true, minted:true}).skip(skip).limit(limit);
    
    const nftAux = data.reduce((acumulador, obj) => {
        const title = obj.title;
        const description = obj.description;
        const existtitle = acumulador.some(item => item.title === title);
        const existdescription = acumulador.some(item => item.description === description);
        const exist = existdescription === existtitle;
        if (!exist) {
            acumulador.push(obj);
        }
        return acumulador;
    }, []);
    const NFTCount=[];
    nftAux.forEach(obj => {
        const total = arrayDeObjetos.filter(objeto => objeto.name === nombreABuscar);
        obj.total = total;
        NFTCount.push(obj)
    })
    try {
        res.status(200).json(NFTCount);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}
const getUpcomingNftsController = async (req, res) => {
    const  page  = req.params.page;
    const skip = page-1*30 // si es la pagina 1 entonces hace 30*0 y salta 0 elementos
    const limit = 30 //30 es por el numero de elementos que se plantean tener, si 30 llegara a ser una variable, entonces seria sustituido por esta

    const data = await NFTModel.find({isActive:true, minted:false}).skip(skip).limit(limit);
    
    const nftAux = data.reduce((acumulador, obj) => {
        const title = obj.title;
        const description = obj.description;
        const existtitle = acumulador.some(item => item.title === title);
        const existdescription = acumulador.some(item => item.description === description);
        const exist = existdescription === existtitle;
        if (!exist) {
            acumulador.push(obj);
        }
        return acumulador;
    }, []);
    const NFTCount=[];
    nftAux.forEach(obj => {
        const total = arrayDeObjetos.filter(objeto => objeto.name === nombreABuscar);
        obj.total = total;
        NFTCount.push(obj)
    })
    try {
        res.status(200).json(NFTCount);
    } catch (error) {
        res.status(500).json({ 
            ok: false,
            message: error.message 
        });
    }
}

export {createNftController,mintNftController,getLiveNftsController}