import UserModel from "../models/user.model.js";

const login = async(req, res) => {
    
    try {

    const user = req.user;

        let existingUsers = await UserModel.find({
          $or: [{ email: user.emails[0].value }],
        });

        if (existingUsers && existingUsers.length >= 1) {
          res.send(user);
        } else {
            let userToSave = new UserModel({
                name: req.user.displayName,
                email: req.user.emails[0].value
          });

          await userToSave.save();
          res.send(user);
        }
    } catch (err) {
      return res
        .status(500)
        .send({ error: "Ha ocurrido un error en la base de datos" });
    }
}

export { login };