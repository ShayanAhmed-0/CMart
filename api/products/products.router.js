const router = require("express").Router();

const {
    get_products,
    create_products,
    get_products_by_id,
    product_change
} = require("./products.controller")

router.get("/getproducts",get_products);
router.post("/createproduct",create_products);
router.get("/:ID",get_products_by_id);
router.patch("/productchange/:ID",product_change)

module.exports = router;