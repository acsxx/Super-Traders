const express = require("express");
const router = express.Router();
const {findPortfolioById,addPortfolio} = require("./portfolio-config");
const { listShares, createShare, deleteShare } = require("./share-config");
const { trade } = require("./transaction-config");
const { listUsers, createUsers } = require("./user-config");

//GET ROUTES
router.get("/shares", listShares);
router.get("/users", listUsers);
router.get("/getPortfolio/:userId",findPortfolioById)

//POST ROUTES
router.post("/createShare", createShare);
router.post("/createUser", createUsers);
router.post("/trade", trade)
router.post("/addPortfolio", addPortfolio)

//DELETE ROUTES
router.delete("/deleteShare/:shareid", deleteShare);

module.exports = router;
