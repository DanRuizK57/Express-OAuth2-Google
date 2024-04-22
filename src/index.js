import express from "express";
import cors from "cors";
import { loginRouter } from "./routes/login.routes.js";
import passport from "passport";
import session from "express-session";
import "./middlewares/google.middleware.js"
import envs from "./configs/environments.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(
  session({
    secret: "secret", // Cambia 'secret' por una cadena de texto segura
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/auth", passport.authenticate("auth-google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
    session: false
}), loginRouter);

app.listen(envs.PORT, () => {
  console.log(`Server is running on PORT: 3000`);
});
