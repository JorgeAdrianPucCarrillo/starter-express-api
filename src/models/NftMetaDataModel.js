import mongoose from 'mongoose';

const NftMetaDataSchema = new mongoose.Schema({
    attributes: [],
        /*{
          "trait_type": "Test1",
          "value": "Maltipoo"
        },
        {
          "trait_type": "test1-2",
          "value": "Mocha"
        }*///eso es un ejemplo de lo que puede ir entraibutos
    description: String,
    image: String,
    name: String,
    date_creation: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now },
});

const NftMetaData = mongoose.model('NftMetaData', NftMetaDataSchema);
export default NftMetaData;
