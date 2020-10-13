const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

const commentaireCtrl = require("../controllers/commentaire");

router.post("/", auth, multer, commentaireCtrl.createCommentaire);
router.get("/", auth, commentaireCtrl.getAllCommentaires);
router.delete("/:id", auth, commentaireCtrl.deleteCommentaire);

module.exports = router;