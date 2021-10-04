const express = require("express");
const { add, get } = require("../controllers/customers.controller");
const NOTAVALIABLE = (_, res) => {
  return res.status(200).send("RECURSO NÂO USADO NO MOCK");
};

const router = express.Router();
router.post("/hc", (_, res) => {
  return res.status(200).send("TUDO OK");
});
router.post("/customers/add", add);
router.post("/customers/subscription/notifications", NOTAVALIABLE);
router.get("/customers", get);

router.get("/customers/:id", NOTAVALIABLE);
router.put("/customers/:id", NOTAVALIABLE);
router.delete("/customers/:id", NOTAVALIABLE);

module.exports = {
  routes: router,
};
