const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('../crowdsourcing/routes/authRoutes');
const port = process.env.PORT || 3000;
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_LOCAL;
app.use(express.json());

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));


app.use('/api', authRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
