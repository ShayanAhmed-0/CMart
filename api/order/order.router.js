const router = require("express").Router();

const {
    get_order,
    user_order,
    get_order_by_id,
    delete_order
} = require("./order.controller")

router.get("/getorder",get_order);
router.post("/yourorder",user_order);
router.get("/:ID",get_order_by_id);
router.delete("/deleteproduct/:ID",delete_order)

module.exports = router;