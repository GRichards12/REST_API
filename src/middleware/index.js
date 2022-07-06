const bcrypt = require("bcryptjs");
const User = require("../user/model");

exports.hashPass = async (req,res,next) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8); 
        next();
    } catch(error){
        console.log(error);
        res.send({error});
    }
}

exports.checkPass = async (req,res,next) => {
    try{
        const userCheck = await User.findOne({ 
            username: req.body.username, 
          console.log(userCheck);
        const check = await bcrypt.compare(req.body.password, userCheck.password); 
        if(check){ 
            next(); 
        }
        else{
            throw new Error("incorrect details");
        }
    } catch(error){
        console.log(error);
        res.send({error})
    }
};
// exports.changePass = async (req,res,next) => {
//     try{
//         req.body.password = await bcrypt.hash(req.body.password,8);
//         await User.findOneAndUpdate({
//             username:req.body.username,
//         },
//         {$set:{
//             password:req.body.password,
//         }});
//         next();
//     }
//     catch(error){
//         console.log(error);
//         res.send({error});
//     }
// }