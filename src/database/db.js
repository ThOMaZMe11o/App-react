const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('Wait connecting to the database');

    mongoose
        .connect (
        'mongodb+srv://root:root@cluster0.x3bo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'   
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase; 