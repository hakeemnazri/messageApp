import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async(req, res, next) => {   
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error: "Unauthorized - No token provided"})
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({ error: "Unauthorized - Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password") //it's called useId because we define it in jwtGenerator

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export default protectRoute;