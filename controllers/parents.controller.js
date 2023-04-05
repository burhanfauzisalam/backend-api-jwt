const db = require("../models/model.js");
const parents = db.parents;

exports.parent = (req, res) => {
  parents
    .findOne({
      where: { p_email: req.email },
    })
    .then((parents) => {
      res.send({
        parents: parents,
      });
    });
};

exports.all = (req, res) => {
  parents.findAll().then((parents) => {
    res.send({
      parents: parents,
    });
  });
};
