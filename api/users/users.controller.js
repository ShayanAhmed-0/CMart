const { create_user, get_user_by_id , user_login } = require("./users.service");

module.exports = {
  create_user: (req, res) => {
    const body = req.body;

    create_user(body, (err, results) => {
      if (err) return res.status(500).json({message: "Database Connection Error"});
      return res.status(200).json({data: results});
    });
  },

  get_user_by_id: (req, res) => {
    const ID=req.params.ID
    get_user_by_id(ID,(err, results) => {
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
