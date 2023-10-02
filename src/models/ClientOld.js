import mongoose from "mongoose";

// Client for Dashboard user
const ClientSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    clientName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: false
    },
    fullName: {
        type: String,
        required: true
    },
    documentIdNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    maritalStatus: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    wallet: [],
});

const Client = mongoose.model('Client', ClientSchema);
export default Client;
