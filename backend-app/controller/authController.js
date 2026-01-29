const User = require("../model/authModel.js");

function createUser(req, res) {
  //receive the data of request
  const data = req.body;

  //Create a object for Model Class
  const user = new User(data);

  //save the user data
  user
    .save()
    .then(() => {
      res.send({ ok: true, result: "User Account Created Successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, error: "Failed to Create Account For User" });
      console.log(error);
    });
}

function signin(req, res) {
  //Access the data from request
  const { email, password } = req.body;

  //Validate the data

  //access the collection / User Model Class
  User.findOne({ email })
    .then((userdata) => {
      if (userdata) {
        if (userdata.password === password) {
          // JWT Token
          res.send({ ok: true, result: "Valid User", user: userdata });
        } else {
          throw Error("Password is Incorrect");
        }
      } else {
        throw Error("User Does not exit");
      }
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });
}

module.exports = { createUser, signin };