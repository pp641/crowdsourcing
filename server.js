const express = require('express');
const app = express();
const cors = require('cors');
const chatModel =  require('./models/chatModel')
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
require('dotenv').config();
const server = http.createServer(app);
const io = socketIo(server ,  {cors : {
    origin: "*",
    methods: ["GET", "POST"]
  }})
const authRouter = require('../crowdsourcing/routes/authRoutes');
const projectRouter =  require('../crowdsourcing/routes/ProjectRoutes');
const InvestmentRouter = require('../crowdsourcing/routes/investmentRoutes'); 
const userRouter = require('../crowdsourcing/routes/userRoutes')
const port = process.env.PORT || 5000;
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_LOCAL;
app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

io.on('connection',  (socket) => {
    console.log('New client connected');
  
    socket.on('join', ({ userId }) => {
      socket.join(userId);
      console.log(`User ${userId} joined`);
    });
  
    socket.on('sendMessage', async ({ senderId, receiverId, message }) => {
        const createdChat =  new chatModel({sender : senderId , receiver: receiverId , content :  message })
        await createdChat.save()
        console.log("chat", createdChat);
      io.to(receiverId).emit('receiveMessage', { senderId, message });
    });
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  

app.use('/api', userRouter);
app.use('/api', authRouter);
app.use('/api', projectRouter);
app.use('/api', InvestmentRouter);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
