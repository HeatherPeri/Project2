var db = require("../models");

module.exports = function(app) {
  // Get all wikipedia
  app.get("/api/wikipedia", function(req, res) {
    db.Example.findAll().then(function(dbwikipedia) {
      res.json(dbwikipedia);
    });
  });

  app.get("/api/wikipedia/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(
      function(dbwikipedia) {
        res.json(dbwikipedia);
      }
    );
  });

  // Create a new example
  app.post("/api/wikipedia", function(req, res) {
    db.Example.create(req.body).then(
      function(dbExample) {
        res.json(dbExample);
      }
    );
  });

  // Delete an example by id
  app.delete("/api/wikipedia/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(
      function(dbExample) {
        res.json(dbExample);
      }
    );
  });
};
