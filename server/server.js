const express = require('express');
const mongoose = require('mongoose');
const app = express();

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
    image: {
        desktop: String,
    }
})

const Item = mongoose.model("items", ItemSchema)

app.get('/products/get', (req, res) => {
    Item.find({}, (err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            const images = items.map((item) => item.image.desktop);
            res.json({ images });
        }
    })
})

app.listen(3001, () => {
    console.log("server started on port 3001")
});
