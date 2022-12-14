const Users = require("../../models/Users");

const listUsers = (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.send(users);
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

const createUsers = (req, res, next) => {
  const { name } = req.body;

  Users.create({
    name,
  })
    .then((user) => {
      res.json({
        message: "success",
        data: user,
        status: 200,
      });
      next();
    })
    .catch((err) => {
      res.send(err);
      next();
    });
};

module.exports = { listUsers, createUsers };
