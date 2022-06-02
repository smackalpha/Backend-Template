import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from './router.js'



const app = express();

app.use(cors())

const port = 3002


//body-parser

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))




app.get("/",(req,res)=> {
    res.json("Router is working");
});

app.use('/api', router);




// db server creation

// mongoose.connect("mongodb://localhost:27017/tailoringDB", (err) => {
//     if (err) {
//       console.log("db not connect");
//     }
//     console.log("!!! Please Check S3 Bucket !!!")
//     console.log("connected");
//   });


app.listen(port, () => console.log("Backend Running..."))

