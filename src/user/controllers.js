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