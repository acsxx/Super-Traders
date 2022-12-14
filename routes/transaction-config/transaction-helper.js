const Portfolios = require("../../models/Portfolios");
const Shares = require("../../models/Shares");

const findPortfolioById = async (userid, shareid) => {
  const userPortfolio = await Portfolios.findOne({
    where: { userid: userid, share_id: shareid },
  });

  if (userPortfolio != null) {
    return userPortfolio;
  }
};

const updatePortfolio = async (userid, quantity, sellPrice, share_id) => {
  await Portfolios.update(
    { quantity, total: quantity * sellPrice },
    {
      where: {
        userid,
        share_id,
      },
    }
  );
};

const checkPortfolioExists =(buyerPortfolio, sellerPortfolio) =>{

    if(buyerPortfolio && sellerPortfolio){
        return true
    }else{
        return false
    }

}

const updateShareRate = async (newRate, shereId) => {
  await Shares.update(
    { rate: newRate },
    {
      where: {
        shareid: shereId,
      },
    }
  );
};

const checkShareExists = async (share_id) => {
  const share = await Shares.findByPk(share_id);
    console.log(share)
  if (!share) {
    return false;
  } else {
    return true;
  }
};

const checkQuantitySufficienct = (sellerQuantity, quantity) => sellerQuantity < quantity ? false : true;




module.exports = {
  findPortfolioById,
  updatePortfolio,
  updateShareRate,
  checkShareExists,
  checkQuantitySufficienct,
  checkPortfolioExists
};
