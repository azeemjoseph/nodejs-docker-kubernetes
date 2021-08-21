const path = require("path");

const Woodfrog = require("../models/woodfrog");

exports.index = function (req, res) {
  res.sendFile(path.resolve("views/wood-frog.html"));
};

exports.create = function (req, res) {
  var newWoodfrog = new Woodfrog(req.body);
  console.log(req.body);
  newWoodfrog.save(function (err) {
    if (err) {
      res.status(400).send("Unable to save woodfrog to database");
    } else {
      res.redirect("/woodfrog/getwoodfrog");
    }
  });
};

exports.list = function (req, res) {
    Woodfrog.find({}).exec(function (err, woodfrogs) {
            if (err) {
                    return res.send(500, err);
            }
            res.render('getwoodfrog', {
              woodfrogs: woodfrogs
         });
    });
};
