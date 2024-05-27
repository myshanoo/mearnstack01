const User =require('../moddels/user')


const test=(req,res)=>{
    res.json('test is working')
}

const registerUser=(req,res)=>{
    try {
        const {name,email,password}=req.body;
        //check if name email and password
        if(!name || !email || !pasword){
            return res.json({
                error:'name is required'
            })
        }

        
    } catch (error) {
        
    }

}

module.exports={
    test,
    registerUser
}

