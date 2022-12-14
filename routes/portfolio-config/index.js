const Portfolios = require("../../models/Portfolios");
const Shares = require("../../models/Shares");

const addPortfolio = async (req, res, next) => {

  const { userid, share_id, quantity } = req.body;

  const share = await Shares.findByPk(share_id);
  const sharePrice = share.rate;
  const total = quantity * sharePrice;

  Portfolios.create({
    userid,
    share_id,
    quantity,
    total,
  })
    .then((portfolio) => {
      res.json({
        message: "success",
        data: portfolio,
        status: 200,
      });
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

const findPortfolioById = async (req, res ,next) => {
  const userPortfolio = await Portfolios.findAll({
    where: { userid: req.params.userId },
  });
  if (userPortfolio === null) {
    res.json({
      message: "user not found",
      status: 404,
    });
    next();
  } else {
    res.json({
      message: "success",
      data: userPortfolio,
      status: 200,
    });
    next();
  }
};

module.exports = { findPortfolioById, addPortfolio };
