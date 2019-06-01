var db = require("../models");

module.exports = function(app) {
  // Get all wikipedia
  app.get("/api/wikipedia", function(req, res) {
    db.wikipedia.findAll().then(function(dbwikipedia) {
      res.json(dbwikipedia);
    });
  });

  app.get("/api/wikipedia/:id", function(req, res) {
    db.wikipedia.findOne({
      where: {
        id: req.params.id
      }
    }).then(
      function(dbwikipedia) {
        res.json(dbwikipedia);
      }
    );
  });

  // Create a new wikipedia
  app.post("/api/wikipedia", function(req, res) {
    db.wikipedia.create(req.body).then(
      function(dbwikipedia) {
        res.json(dbwikipedia);
      }
    );
  });

  // Delete an wikipedia by id
  app.delete("/api/wikipedia/:id", function(req, res) {
    db.wikipedia.destroy({ where: { id: req.params.id } }).then(
      function(dbwikipedia) {
        res.json(dbwikipedia);
      }
    );
  });
};
