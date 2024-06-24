const User = require("../models/userModel")
const Chat = require("../models/chatModel")

const getAllDevelopers = async (req,res)=>{
    try{
        const developers = await User.find({});
        console.log("iok", developers);
        res.status(200).json(developers);
    } catch(error){
        console.error(error);
        res.status(500).json({message: 'Server Error. Please try again later'})
    }
}

const getAllInvestors = async (req,res) => {
    try {
        console.log("ok gettt")
        const investors = await User.find({ backedProjects: { $exists: true, $ne: [] } })
        res.status(200).json(investors)
    } catch(error){
        console.error(error);
        res.status(500).json({message : 'Server Error . Please Try again later'})
    }
}


const getAllChats = async (req, res) => {
    try {
        console.log("okre", req.params);
        const { senderId, receiverId } = req.params;
        const chats = await Chat.find({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId }
            ]
        });
        console.log("Total chats", chats);
        res.status(200).json({ chats: chats });
    } catch (error) {
        console.error("Error fetching chats:", error);
        res.status(500).json({ message: "Error fetching chats" });
    }
}




module.exports = {getAllDevelopers, getAllChats , getAllInvestors}