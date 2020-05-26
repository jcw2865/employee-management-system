const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log(req.query)
    db.Employees.find(req.query)
      .then(dbEmployee => res.json(dbEmployee))
      .catch(err => res.status(422).json(err));
  },
  // findById: function (req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  find: function (req, res) {
    db.Employee.find({ email: req.params.email })
      .then(dbEmployee => res.json(dbEmployee))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Employee.create(req.body)
      .then(dbEmployee => res.json(dbEmployee))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log("bam")
    db.Employee.find({ _id: req.params.id })
      .remove({ _id: req.params.id })
      // .then(dbBook => {
      //   console.log(dbBook);
      //   dbBook.remove()
      // })
      // .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
}