import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000
dotenv.config()
app.use(express.json()) // parse incoming req.body with jason payloads
app.use(cookieParser())

// app.get("/", (req, res)=>{
//     res.send("Hello World")
// });

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
})