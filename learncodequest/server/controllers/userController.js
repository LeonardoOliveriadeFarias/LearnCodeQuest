const express = require('express');
const userModel = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async(request, response) => {
    const { email, password, name, lastname, keyword } = request.body
     
    try{
        if(await userModel.findOne({ email }))
            return response.status(400).send({ error: 'User already exists.'});

        const registerData = {
            email: email,
            password: await bcrypt.hash(password, 10),
            name: name,
            lastname: lastname,
            keyword: keyword
        }

        const user = await userModel.create(registerData);

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
    } catch(err) {
        return response.status(404).send({ error: 'Unexpected error ocurred. Please try again later. '});
    }
})

router.post('/changepassword', async(request, response) => {
    const {email, name, lastname, keyword, password} = request.body;        

    try {
        const user = await userModel.findOne({ email })
        if(
            user.email !== email ||
            user.name !== name ||
            user.lastname !== lastname ||
            user.keyword !== keyword
        )
            return response.status(404).send({ error: 'Invalid data!'})
        
        const newPass = await bcrypt.hash(password, 10)

        userModel.findOneAndUpdate({_id: user._id}, { password: newPass }, err => {
            if(err) return response.status(400).send({ error: 'Error to update user account'})
            return response.status(200).send({ error: 'Account updated'})            
        })
    } catch (err) {
        console.log(err)
        return response.status(404).send({ error: 'Unexpected error ocurred. Please try again later.'})
    }
})

router.post('/shop', async(request, response) => {
    const { email, productId, productName, productPrice } = request.body;

    try {
        const user = await userModel.findOne({ email })

        if(user.learnPoints < productPrice)
            return response.status(400).send({ error: 'Insufficient balance for purchase'})

        const newHistoric = {
            productId: productId,
            productName: productName,
            productActivationCode: 'XXX',
            purchaseDate: Date.now()
        }
        const updateHistoric = [...user.purchasesHistoric, newHistoric]

        userModel.findOneAndUpdate({_id: user._id}, {
            purchasesHistoric: updateHistoric,
            learnPoints: user.learnPoints - productPrice
        }, err => {
            if(err) return response.status(400).send({ error: 'Error to complete purchase'})
            return response.status(200).send({ message: 'Purchase completed', learnPoints: user.learnPoints - productPrice })            
        })
    } catch (error) {
        return response.status(404).send({ error: 'Unexpected error ocurred. Please try again later'})
    }
})

module.exports = app => app.use('/store', router);