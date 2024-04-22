import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const loginRouter = Router();

loginRouter.get("/google", login);

export { loginRouter };