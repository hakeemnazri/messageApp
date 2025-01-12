import User from "../models/userModel.js";

export const getUsersForSidebar = async(req, res)=>{
    try {

        const loggedInUserId = req.user._id;
        const user = await User.find({ _id: { $ne: loggedInUserId}})

        res.status(200).json(user)
        
    } catch (error) {
        console.log("Error is user getUsersForSidebar: ", error.message)
        res.status(501).json({Error: "internal server error"})
    }
}