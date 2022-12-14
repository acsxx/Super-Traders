const Transactions = require("../../models/Transactions");

// I seperated the helper functions to make it more readable.
const {
  findPortfolioById,
  updatePortfolio,
  updateShareRate,
  checkShareExists,
  checkQuantitySufficienct,
  checkPortfolioExists
} = require("./transaction-helper");

const trade = async (req, res, next) => {
  const { buyer_id, seller_id, quantity, share_id, sellPrice } = req.body;

  // Find the relevant portfolios of the buyer and seller
  const buyerPortfolio = await findPortfolioById(buyer_id, share_id);
  const sellerPortfolio = await findPortfolioById(seller_id, share_id);

  //Check the share exists.
   if (! await checkShareExists(share_id)) {
    res.json({
      message: "The share you are trying to sell/buy, Was not found",
      status: 400,
    });
    return;
  }

  //Check the portfolio exists.
  if(!checkPortfolioExists(buyerPortfolio, sellerPortfolio)){
    res.json({
        message: "The Portfolio is not exists, Create a portfolio first.",
        status: 400,
      });
      return;
  }

  // Get the quantities of the buyer and seller's shares to be traded
  const buyerShares = buyerPortfolio.quantity;
  const sellerShares = sellerPortfolio.quantity;

  // Get the sell price of the share and calculate the cost of the trade.
  const price = sellPrice * quantity;

  // chek the seller has a enough share quantity to trade
  if (!checkQuantitySufficienct(sellerPortfolio.quantity, quantity)) {
    res.json({
      message: "you don't have enough share to sell",
      status: 400,
    });
    return;
  }

  //Update the rate of share using the price of the last trade on the DB
  await updateShareRate(sellPrice, share_id);

  // Update the quantity of the buyer's and seller's shares
  buyerPortfolio.quantity = buyerShares + quantity;
  sellerPortfolio.quantity = sellerShares - quantity;

  updatePortfolio(buyer_id, buyerPortfolio.quantity, sellPrice, share_id);
  updatePortfolio(seller_id, sellerPortfolio.quantity, sellPrice, share_id);

  // insert the Buy&Sel transaction
  Transactions.create({
    seller_id,
    buyer_id,
    price,
    share_id,
    quantity,
  })
    .then((transaction) => {
      res.json({
        message: "success",
        data: transaction,
        status: 200,
      });
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

module.exports = { trade };
