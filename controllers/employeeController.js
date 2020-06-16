const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log(req.query)
        db.Employee.find(req.query)
            .then(dbEmployee => res.json(dbEmployee))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.Employee.create(req.body)
            .then(dbEmployee => res.json(dbEmployee))
            .catch(err => res.status(422).json(err));
    }
}