const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

const registerschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    // pic:{
    //     type:String,
    //     required:true
    // },
    messages:[
        {
            firstname:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            message:{
                type:String,
                required:true
            },
            phone:{
                type:String,
                required:true
            },
        }
    ],
    tokens: [
        {
            token:
            {
                type: String,
                required: true
            }
        }
    ]
});



registerschema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
    }
    next();
})
// create authenticate token
registerschema.methods.generateAuthToken=async function()
{
    try{
        let token=jwt.sign({_id:this._id},
            process.env.SECRET_KEY);
            this.tokens=this.tokens.concat({token:token});
            await this.save();
            return token;
    }catch (err){
        console.log(err);
    }
};



registerschema.methods.addMessage=async function(firstname,email,phone,message)
{
    try{

        this.messages=this.messages.concat({firstname,email,phone,message });

        await this.save();
        return this.message;
    }catch(error){
        console.log(error)
    }

}

const signupModel = mongoose.model('signup', registerschema)

module.exports = signupModel;