const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Produção
/*mongoose.connect("mongodb+srv://admin-matheuslm:1OoZc8w6JbrSgLld@cluster0.kguwi9x.mongodb.net/test",{
    useNewUrlParser: true
})
.then(() => console.log('Connected to DB'))
.catch(console.error);*/

const app = express();

mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true
})
.then(() => console.log('Connected to DB'))
.catch(console.error);

app.use(cors());
app.use(express.json());

require('./controllers/userController')(app);
//require('./controllers/projectController')(app);

app.listen(80, () => {
    console.log('Server is running at port 80');
});