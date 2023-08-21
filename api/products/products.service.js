const pool = require("../../config/database");

module.exports = {
  create_products: (body, callBack) => {
    const query = `INSERT INTO products (ProductName,ProductDesc,ProductPrice,Category) VALUES (?,?,?,?)`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(
        query,
        [body.ProductName, body.ProductDesc, body.ProductPrice, body.Category],
        (err, results) => {
          connection.release();
          if (err) callBack(err);
          else callBack(null, results);
        }
      );
    });
  },

  get_products: (callBack) => {
    const query = `SELECT * FROM products`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, null, (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results);
      });
    });
  },

  get_products_by_id: (ID, callBack) => {
    const query = `SELECT * FROM products WHERE ID = ?`;

    pool.getConnection((err, connection) => {
      if (err) return callBack(err);
      connection.query(query, [ID], (err, results) => {
        connection.release();
        if (err) callBack(err);
        else callBack(null, results[0]);
      });
    });
  },

  product_change:([data,ID],callBack)=>{
    var query;
    query = `update products set ProductName= ? , ProductPrice=? ,ProductDesc=? ,Category=? where ID= `+ID,
    pool.getConnection((err, connection)=> {
        if (err) throw err;
        connection.query(query,[data.ProductName,data.ProductPrice,data.ProductDesc,data.Category],(err, results)=>{
            connection.release();
            if (err) callBack(error);
            else callBack(null, results);
        });
    })
    }

};
