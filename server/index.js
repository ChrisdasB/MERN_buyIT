import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import Items from "./models/Item.js";
import initItems from "./INITDATA.js";
import { getAllItems, getCartItems } from "./controllers/items.js";
import { validateApiKey} from "./middelware/accessAuth.js";
import {Stripe} from 'stripe';


// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Stripe
const stripe = new Stripe(process.env.STRIPE_API_KEY);

// Routes
app.get('/', validateApiKey,  (req, res) => {
    res.status(200).json({message: "Hello World!"});
  });

app.get('/items/all', validateApiKey, getAllItems);
app.post('/items/cart', validateApiKey, getCartItems);
app.post('/create-checkout-session', validateApiKey, async (req, res)  => {
    try 
    {

    

    // Get Data from request body
    const {items} = req.body;
    if(items.length < 1)
    {
        res.status(400).json({message: "No items transfered!"});
    }

    // Update data from database
    var response = [];
    for( var i = 0; i < items.length; i++)
        {
            const currentResponse = await Items.findOne({_id: items[i]["_id"]});     
            response.push(currentResponse);            
        }
        

    // Add Quantitiys
    for(var i = 0; i < response.length; i++)
        {
            for(var ii  = 0; ii < items.length; ii++)
            {
                if(response[i]["_id"] == items[ii]["_id"])
                {
                    response[i].quantity = items[ii]["quantity"];
                }
            }
        }

    if(response.length < 1)
    {
        res.status(404).json({message: "Could not find items ..."});
    }
    
    // Create session
    const session = await stripe.checkout.sessions.create({
        line_items: response.map(item => {  
        return{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.brandName + " - " + item.itemName
                },
                unit_amount: (item.price *100).toFixed(0),                
            },
            quantity: item.quantity
        }       
        }),
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: process.env.CLIENT_URL + '/success',
        cancel_url: process.env.CLIENT_URL + '/cart'
    })

    res.status(200).json({session});
    } catch (err) {
        res.status(500).json({message: "We are sorry. Something went wrong :(. Please try again later! Error: " + err.message});
    }
})


// DB POPULATING
Items.insertMany(initItems);

// Mongoose setup
const PORT = process.env.PORT || 6001; // Get the saved port vom .env file, fallback: 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log("Server listening on Port: " + PORT));

    /* User.insertMany(users);
    Post.insertMany(posts); */
}).catch((error) => console.log("Did not connect! " + error));