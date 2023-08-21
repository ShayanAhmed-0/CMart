const { get_order_by_id, get_order , user_order ,delete_order} = require("./order.service");

module.exports = {
  user_order: (req, res) => {
    const body = req.body;
    user_order(body, (err, results) => {
      if (err) return res.status(500).json({message: "Database Connection Error",
        });
      return res.status(200).json({data: results});
    });
  },

  get_order: (req, res) => {
    get_order((err, results) => {
      if (err) return res.json({ message: "Error in connection" });
      if (!results) return res.json({ message: "failed to get any users" });
      return res.json({ message: results });
    });
  },

  get_order_by_id:(req,res)=>{
    const ID = req.params.ID;
    get_order_by_id(ID,(err,results)=>{
        if(err) return
        if(!results) return res.status(500).json({message:"No Record Found"})
        return res.status(200).json({data:results})
    })
},

delete_order:(req,res)=>{
  const ID = req.params.ID;
  delete_order(ID,(err,results)=>{
      if(err) return
      if(!results) return res.status(500).json({message:"No Record Found"})
      return res.status(200).json({data:results})
  })
},

};