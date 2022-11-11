const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    level: {
        type: Number,
        default: 0
    },
    learnPoints: {
        type: Number,
        default: 0
    },
    purchasesHistoric: [
        {
            productId: {
                type: String
            },
            productName: {
                type: String
            },
            productActivationCode: {
                type: String
            },
            purchaseDate: {
                type: Date
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;