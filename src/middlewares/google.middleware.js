import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import envs from "../configs/environments.js";

passport.use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google",
      scope: ["profile"],
    },
    function verify(issuer, profile, done) {
      done(null, profile);
    }
  )
);