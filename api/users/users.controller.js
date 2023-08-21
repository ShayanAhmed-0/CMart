const { create_user, get_users , user_login } = require("./users.service");

module.exports = {
  create_user: (req, res) => {
    const body = req.body;

    create_user(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  get_users: (req, res) => {
    get_users((err, results) => {
      if (err) return res.json({ message: "Error in connection" });
      if (!results) return res.json({ message: "failed to get any users" });
      return res.json({ message: results });
    });
  },

  user_login: (req, res) => {
    const body = req.body;
    user_login(body,(err, results) => {
      if (err) return res.json({ message: "Error in connection" });
      if (!results) return res.json({ message: "failed to get users" });
      return res.json({ message: results });
    });
  },

};
