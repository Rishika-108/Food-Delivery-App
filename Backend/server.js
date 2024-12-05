import express from  "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouter from "./Routes/foodRoute.js"
import userRouter from "./Routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./Routes/cartRoute.js"
import orderRouter from "./Routes/orderRoute.js"

//App Config
const app = express()
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//API endpoint
app.use ("/api/food",foodRouter)
app.use ("/images", express.static ('uploads'))
app.use ( "/api/user", userRouter)
app.use ( "/api/cart",cartRouter)
app.use ( "/api/order" , orderRouter)

app.get("/", (req,res)=> {
    res.send("API working")
})

app.listen(port, ()=> {
    console.log (`Server Started on http://localhost:${port}`)
})

//mongodb+srv://rishikathakur334:Rishi108@cluster0.vnyit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0