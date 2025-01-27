import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { server, app, express  } from "./socket/socket.js";
import path from "path"

const PORT = process.env.PORT || 5000
const __dirname = path.resolve();
dotenv.config()
app.use(express.json()) // parse incoming req.body with jason payloads
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"))
})

server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)  
})