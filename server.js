const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3001
const uri = process.env.URI;

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
    id: Number,
    slug: String,
    name: String,
    price: Number,
    cartName: String,
    new: Boolean,
    image: {
        desktop: String,
    },
    includes: [{
        quantity: Number,
        item: String
    }]
})

const orderSchema = mongoose.Schema({
    name: String, 
    email: String, 
    phoneNumber: Number,
    address: String,
    zipCode: Number,
    city: String,
    country: String,
    paymentMethod: String, 
    eMoneyNumber: Number,
    eMoneyPin: Number,
    cart:[{
        name: String,
        price: Number, 
        quantity: Number,
    }],
    grandTotal: Number,
    createdAt: { type: Date, default: Date.now }
})

const Item = mongoose.model("items", ItemSchema)
const Order = mongoose.model("Orders", orderSchema)

app.get('/products/get', (req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(500).send(err));
})

app.post('/submit/checkout', (req, res) => {
    console.log('Received form data: ', req.body)
    const formData = req.body;
    const newOrder = new Order(formData);
    newOrder.save((error) => {
        if(error){
            res.status(500).send(error)
        } else {
            res.send("Order saved successfully")
        }
    })
})


app.listen(port, () => {
    console.log("server started on port 3001")
});
