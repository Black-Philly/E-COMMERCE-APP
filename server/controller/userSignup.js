import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'


export const userSignupController = async() => {

    try{

        const {email, password, name} = req.body;

    if (!email || !password || !name){
        throw new Error('Please provide email, password and name');
    };
const salt = bcrypt.genSaltSync(10);
const hashPassword = await bcrypt.hashSync(password, salt);

if(!hashPassword) {
    throw new Error('Something went wrong with the password hashing')
}

const payload = {
    ...req.body, 
    password : hashPassword
}

const userData = new userModel (payload)

const savedUser = await userData.save();
res.status(201).json({
    data: savedUser,
    success: true,
    error: false,
    message: 'User created successfully'
})

    }catch(err){
        res.status(500).json({
            message: err || err.message,
            error: true,
            success: false
        })
    }
}