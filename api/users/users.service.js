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

  get_user_by_id: (ID,callBack) => {
    const query = `SELECT * FROM users where ID=?`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query,[ID], (err, results) => {
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
