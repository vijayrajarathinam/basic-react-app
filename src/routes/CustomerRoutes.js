const router = require("express").Router();
const { create, all, getOne, update, remove } = require("../controllers/customerController");

router.route("/customer").get(all).post(create);

router.route("/customer/:id").get(getOne).put(update).delete(remove);

module.exports = router;
