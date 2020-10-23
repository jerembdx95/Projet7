const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const commentaireCtrl = require("../controllers/commentaire");
console.log("test2")
router.post("/",auth, commentaireCtrl.createCommentaire);
router.get("/", auth, commentaireCtrl.getAllCommentaires);
router.delete("/:id", auth, commentaireCtrl.deleteCommentaire);

module.exports = router;