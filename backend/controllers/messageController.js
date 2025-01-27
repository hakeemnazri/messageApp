import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import mongoose from "mongoose";
import { io, shareSocketId } from "../socket/socket.js";

export const sendMessage = async(req, res) =>{
    try {
        const { message } = req.body; 
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId] },
        })

        if(!conversation){
            conversation = new Conversation({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = shareSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in message controller", error.message)
        res.status(500).json({error: "Internal server error"})

    }
}

export const getMessage = async(req, res) =>{
    try {
        const {id: selectedId} = req.params;
        const userToChatId = new mongoose.Types.ObjectId(selectedId);
        const senderId = req.user._id;


        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }
        console.log(conversation)

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("Error in message controller", error.message)
        res.status(500).json({error: "Internal server error"})

    }
}