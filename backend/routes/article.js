const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

const articleCtrl = require("../controllers/article");

router.post("/",auth, articleCtrl.createArticle);
router.get("/", auth, articleCtrl.getAllArticles);
router.get("/:id", auth, articleCtrl.getOneArticle);
router.patch("/:id", auth, multer, articleCtrl.updateOneArticle);
router.delete("/:id",  auth, articleCtrl.deleteArticle);

module.exports = router;