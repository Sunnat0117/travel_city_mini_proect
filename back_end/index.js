const express = require(`express`);
const cors = require('cors')
require("dotenv").config();
const connectDB = require('./config/db')
const router = require('./routers/trevelRouters')
connectDB();
const app = express();


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended : false}))
app.use('/api/travel', router )

// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     next()
// })




const PORT = process.env.PORT||2000;
app.listen(2000, console.log(`server is running on ${PORT}`));