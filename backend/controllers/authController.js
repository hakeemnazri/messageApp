import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "../utils/generateToken.js";

export const signupUser = async(req, res) => {
    try {
        const {fullName, userName, password, confirmedPassword, gender} = req.body;

        if(password !== confirmedPassword){
            return res.status(400).json({error: "Passwords don't match"})
        }

        const user = await User.findOne({userName});

        if (user){
            return res.status(400).json({error: "Username already exists"})
        }

        // hash password!
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const profilePicBoy = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const profilePicGirl = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({ 
            fullName, 
            userName,
            password: hashedPassword,
            profilePic: gender === "male" ? profilePicBoy : profilePicGirl,
            gender,
        })

        if(newUser){
        await generateTokenAndCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })
        } else{
            return res.status(400).json({ error: "Invalid user data" })
        }


    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export const loginUser = async(req, res) => {
    try {
        const {userName, password} = req.body;

        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "invalid username or password"})
        }

        if(isPasswordCorrect){
            generateTokenAndCookie(user._id, res);
            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                gender: user.gender,
                profilePic: user.profilePic
            })
    
        }


    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal server error"})

    }
}
