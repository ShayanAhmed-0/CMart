const { create_products, get_products , get_products_by_id ,product_change} = require("./products.service");

module.exports = {
  create_products: (req, res) => {
    const body = req.body;

    create_products(body, (err, results) => {
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

  get_products: (req, res) => {
    get_products((err, results) => {
      if (err) return res.json({ message: "Error in connection" });
      if (!results) return res.json({ message: "failed to get any users" });
      return res.json({ message: results });
    });
  },

  get_products_by_id:(req,res)=>{
    const ID = req.params.ID;
    get_products_by_id(ID,(err,results)=>{
        if(err) return
        if(!results) return res.status(500).json({message:"No Record Found"})
        return res.status(200).json({data:results})
    })
},

product_change:(req,res)=>{
  const body = req.body;
  const ID = req.params.ID;
  product_change([body,ID],(err,results)=>{
      if(err) return res.status(500).json({message: "Database Connection Error"});
      if(results.affectedRows == 0)return res.json({message: "Unable To Updatee Password ",
          });
      return res.status(200).json({
          data:results,
      });
  })
}

};
