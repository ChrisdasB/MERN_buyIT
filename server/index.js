import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import Items from "./models/Item.js";
import initItems from "./INITDATA.js";
import { getAllItems, getCartItems } from "./controllers/items.js";
import { validateApiKey} from "./middelware/accessAuth.js"


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

// Routes
app.get('/', validateApiKey,  (req, res) => {
    console.log("Ja Moin!");
    res.status(200).json({message: "Hello World!"});
  });

app.get('/items/all', validateApiKey, getAllItems);
app.post('/items/cart', validateApiKey, getCartItems);


// DB POPULATING
// Items.insertMany(initItems);

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