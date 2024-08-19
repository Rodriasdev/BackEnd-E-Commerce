import  UserController  from "../controllers/User.controllers.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/user', UserController.createUser)


export default userRouter