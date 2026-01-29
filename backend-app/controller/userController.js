const User = require("../model/authModel");
function getAllUsers(req, res) {
  const loggedInUserId = req.params.id;

  User.find({ _id: { $ne: loggedInUserId } })
    .then((users) => {
      res.json({ ok: true, result: users });
    })
    .catch((error) => {
      res.json({ ok: false, error: "Failed to Access All Users Data" });
    });
}

module.exports = { getAllUsers };