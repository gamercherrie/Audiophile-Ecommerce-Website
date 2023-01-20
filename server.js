const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());


const uri = "mongodb+srv://charisse_audiophile:uA0TNyPdtpyP57IY@cluster0.4hfu2qw.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch(error){
        console.log(error);
    }
}

connect();

const ItemSchema = mongoose.Schema({
    name: String,
    price: Number,
    slug: String,
    cartName: String,
    image: {
        desktop: String,
    },
})

const Item = mongoose.model("items", ItemSchema)

app.get('/products/get', (req, res) => {
    Item.find().select('image.desktop name price slug cartName')
    .then(items => res.json(items))
    .catch(err => res.status(500).send(err));
})

app.listen(3001, () => {
    console.log("server started on port 3001")
});
