const router = require("express").Router();

const {
    create_user,
    get_user_by_id,
    user_login
} = require("./users.controller")



router.post("/signin",create_user);
router.get("/getuser/:ID",get_user_by_id);
router.post("/login",user_login);

module.exports = router;