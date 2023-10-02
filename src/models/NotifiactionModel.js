import mongoose from 'mongoose';

const NotifiacationsDataSchema = new mongoose.Schema({
    tittle:{type: String,required: true},
    description:{type: String, required: true},
    viewed:{type: Boolean, default:false},
    date_creation: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now },
});

const NotifiacationsData = mongoose.model('Notifiacations', NotifiacationsDataSchema);
export default NotifiacationsData;
