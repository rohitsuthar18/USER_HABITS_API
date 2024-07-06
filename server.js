const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();
const port = 3000;

app.use(bodyParser.json());

try {
    mongoose.connect('mongodb+srv://sutharrohit555:chouhan0900@cluster0.jtzgjyb.mongodb.net/Project1?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Connected");
    
} catch (error) {
    console.log(error);
    
}

app.get('/', (req, res) => {
    res.send('User Habits API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
