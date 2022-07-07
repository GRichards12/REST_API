const { Router } = require("express"); 
const { signUp, login, changePass, deleteUser, getEmail, displayUsers } = require("./controllers"); 
const userRouter = Router();
const { hashPass, checkPass } = require("../middleware");

userRouter.post("/user", hashPass, signUp); 
userRouter.post("/login", checkPass, login); 
userRouter.post("/changepass", hashPass, changePass);
userRouter.delete("/user/:username",deleteUser);
userRouter.get("/user/:username", getEmail)
userRouter.get("/users",displayUsers);
userRouter.get("/token", tokenCheck, login);

module.exports = userRouter;