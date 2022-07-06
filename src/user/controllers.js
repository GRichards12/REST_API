const { findOneAndDelete } = require("./model");
const User = require("./model");

exports.signUp = async(req, res) => {
    try{
        const newUser = await User.create(req.body); //req.body has k/v pairs that match 
        res.send({User:newUser});
    } catch(error) {
        console.log(error);
        res.send({error});
    }
}

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
      });
      if (!user) {
        throw new Error("login failed");
      } else {
        res.send({ user });
      }
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };

exports.changed = async (req,res) => {
    try{
        console.log(req.body);
        res.end();
    } catch(error){
        console.log(error);
        res.send({error});
    }
}

exports.deleteUser = async (req,res) => {
    try{
        await User.findOneAndDelete({
            username:req.params.username,
        });
        res.end();
    } catch(error){
        console.log(error);
        res.send({error});
    }
}

exports.changePass = async (req,res) => {
    try{
        await User.findOneAndUpdate({
            username:req.body.username,
        },
        {$set:{
            password:req.body.password,
        }});
        res.end();
    }
    catch(error){
        console.log(error);
        res.send({error});
    }
}