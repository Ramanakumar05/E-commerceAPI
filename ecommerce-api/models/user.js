const mongoose=require('mongoose')

const bcrypt=require('bcryptjs')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

userSchema.pre('save',async function(next)
{
    // the parameter next is the callback function that is called for moving or proceeding to next middlewares

    if(!this.isModified('password'))
    {
        return next;
        // this.isModified('password'): This checks if the password field has been modified. If it hasn't been modified, the function calls next() and exits. This ensures that the password is only hashed if it has been changed
    }
    else{
        // hash the password
        this.password=await bcrypt.hash(this.password,10)
        // 10 is the salt factor
        next()
    }
})


module.exports=mongoose.model('User',userSchema)