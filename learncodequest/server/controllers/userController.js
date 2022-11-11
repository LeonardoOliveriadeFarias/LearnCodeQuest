const express = require('express');
const userModel = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async(request, response) => {
    console.log(request);
    const {email} = request.body;

    try{
        if(await userModel.findOne({ email }))
            return response.status(400).send({ error: 'User already exists.'});

        const user = await userModel.create(request.body);

        return response.status(200).send({ 
            id: user._id,
            name: user.name,
            learnPoints: user.learnPoints,
            level: user.level,
            purchasesHistoric: user.purchasesHistoric    
        });
    } catch(err){
        console.log(err);
        return response.status(400).send({ error: 'Registration failed'});
    }
})

router.get('/login', async(request, response) => {
    const {email, password} = request.query;

    console.log(email, password);
    
    try{
        const user = await userModel.findOne({ email }).select('+password');

        if(!user)
            return response.status(400).send({ error: 'User not found' });

        if(!await bcrypt.compare(password, user.password))
            return response.status(400).send({ error: 'Invalid password! '});

        user.password = undefined;

        return response.status(200).send({
            id: user._id,
            name: user.name,
            learnPoints: user.learnPoints,
            level: user.level,
            purchasesHistoric: user.purchasesHistoric
        });
    } catch {
        return response.status(404).send({ error: 'Unexpected error ocurred. Please try again later. '});
    }
})

module.exports = app => app.use('/auth', router);