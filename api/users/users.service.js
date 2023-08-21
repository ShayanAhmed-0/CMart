const pool = require("../../config/database");

module.exports = {
  create_user: (body, callBack) => {
    const query = `INSERT INTO users (UserName, Password) VALUES (?, ?)`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(
        query,
        [body.UserName, body.Password],
        (err, results) => {
          connection.release();
          if (err) callBack(err);
          else callBack(null, results);
        }
      );
    });
  },

  get_users: (callBack) => {
    const query = `SELECT * FROM users`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, null, (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results);
      });
    });
  },

  user_login:(body,callBack)=>{
    const query = `select * from users where UserName=? && Password=?`
    pool.getConnection((err,connection)=>{
        if(err)return callBack(err)
        connection.query(
    query,[body.UserName,body.Password],
    (err,results)=>{
        connection.release()
        if(err) callBack(err)
        else callBack(null,results)
    }
    )
    })
  }
};
