const express = require("express");

const router = express.Router();
//API FOR BLOG CONTROLLER
const blogController = require("../controllers/blogController");

router.get("/blogCreate", blogController.create);
router.get("/blogRead", blogController.read);
router.get("/blogDelete", blogController.delete);
router.get("/blogUpdate", blogController.update);

//API FOR COMMENT CONTROLLER

const commentController = require("../controllers/commentController");

router.get("/commentCreate", commentController.create);
router.get("/commentRead", commentController.read);
router.get("/commentDelete", commentController.delete);
router.get("/commentUpdate", commentController.update);

//API FOR COMMENT CONTROLLER

const messageController = require("../controllers/messageController");

router.get("/messageCreate", messageController.create);
router.get("/messageRead", messageController.read);
router.get("/messageDelete", messageController.delete);
router.get("/messageUpdate", messageController.update);

//API FOR PORTFOLIO CONTROLLER
const portfolioController = require("../controllers/portfolioController");

router.get("/portfolioCreate", portfolioController.create);
router.get("/portfolioRead", portfolioController.read);
router.get("/portfolioDelete", portfolioController.delete);
router.get("/portfolioUpdate", portfolioController.update);

//API FOR PRODUCT CONTROLLER
const productController = require("../controllers/productController");

router.get("/productCreate", productController.create);
router.get("/productRead", productController.read);
router.get("/productDelete", productController.delete);
router.get("/productUpdate", productController.update);

module.exports = router;
