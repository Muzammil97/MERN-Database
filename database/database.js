const mongoose = require('mongoose');

exports.connectDB = async ()=>{

    mongoose.connect('mongodb+srv://admin:admin@cluster0.ifu0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

mongoose.connection.on("connected",()=>{
    console.log('connected');
    
})

