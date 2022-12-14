const Shares = require("../../models/Shares");

const listShares = (req, res, next) => {
  // Get the all shares from table.
  Shares.findAll()
    .then((shares) => {
      res.send(shares);
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

const createShare = (req, res, next) => {

  // get data from req.body and create.
  const { shareid, rate } = req.body;

  Shares.create({
    shareid,
    rate,
  })
    .then((share) => {
      res.json({
        message: "success",
        data: share,
        status: 200,
      });
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

const deleteShare = async (req, res, next) => {
  //get data using req.params and store it.
  const data = await Shares.findByPk(req.params.shareid);

  // if data exists, delete it
  if (data) {
    Shares.destroy({
      where: { shareid: req.params.shareid },
    });
    res.json({
      message: "success",
      status: 200,
    });
    next();
  } else {
    res.json({
      message: "Data not found",
      status: 404,
    });
    next();
  }
};

module.exports = { listShares, createShare, deleteShare };
