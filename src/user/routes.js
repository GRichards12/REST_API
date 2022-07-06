const { Router } = require("express"); //import Router method only from express
const { signUp, login, changed } = require("./controllers"); //import only signUp from controllers file
const userRouter = Router(); //create a router that can have endpoints added to it
const { hashPass, checkPass, changePass } = require("../middleware");

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
userRouter.post("/login", checkPass, login);
userRouter.post("/changepass", changePass, changed);

module.exports = userRouter;