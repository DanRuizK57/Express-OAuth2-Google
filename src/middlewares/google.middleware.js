import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import envs from "../configs/environments.js";

let emails = ["d.ruiz03@ufromail.cl"];

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
      const response = emails.includes(profile.emails[0].value);

      if (response) {
        done(null, profile);
      } else {
        emails.push(profile.emails[0].value);
        done(null, profile);
      }
    }
  )
);