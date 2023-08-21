const pool = require("../../config/database");

module.exports = {
  user_order: (body, callBack) => {
    const query = `INSERT INTO orders (UserID, ProductID,Quantity,Total) VALUES (?,?,?,?)`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(
        query,
        [body.UserID, body.ProductID,body.Quantity,body.Total*body.Quantity],
        (err, results) => {
          connection.release();
          if (err) callBack(err);
          else callBack(null, results);
        }
      );
    });
  },

  get_order: (callBack) => {
    const query = `SELECT * FROM orders`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, null, (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results);
      });
    });
  },

  get_order_by_id: (ID, callBack) => {
    const query = `SELECT * FROM orders WHERE ID = ?`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, [ID], (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results[0]);
      });
    });
  },

  delete_order:(ID,callBack)=>{
    const query = `delete From orders where ID=?`
    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, [ID], (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results[0]);
      });
    });
  }

};
