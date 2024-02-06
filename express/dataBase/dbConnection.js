
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivekkumar6200168007:l1t3fFKYS6zHR5Wc@cluster0.3uiyntp.mongodb.net/todo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log("Database connected")
});


