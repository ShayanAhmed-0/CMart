const router = require("express").Router();


const {
  
    create_user,
    get_users,
    user_login
    // get_admin_by_id,
    // admin_login,
    // admin_forget_password,
    // admin_update_password
} = require("./users.controller")



router.post("/signin",create_user);
router.get("/getusers",get_users);
router.post("/login",user_login);

// router.get("/:admin_id",get_admin_by_id);
// router.post("/admin_forget_password",admin_forget_password)
// router.patch("/admin_update_password/:admin_id",admin_update_password)



module.exports = router;