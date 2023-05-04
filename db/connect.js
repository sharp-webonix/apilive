const mongoose = require('mongoose');



// console.log("gya iske andar");

const connectDB = (uri) =>{
    return mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports  = connectDB;