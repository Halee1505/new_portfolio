const MACs = require("../model/macs.model.js");
const MacUsers = require("../model/macuser.model.js");
class MacsController {
  index(req, res, next) {
    //find and reverse the order of the MACss
    MACs.find({}, function (err, key) {
      if (!err) {
        const data = key.map((item) => {
          return item;
        });
        res.send(data.reverse());
      } else {
        res.json("error");
      }
    });
  }

  userVote(req, res, next) {
    const { email, category } = req.body;
    MacUsers.findOne({ email: email, category: category }, function (err, key) {
      if (!err) {
        res.send(key);
      } else {
        res.json("error");
      }
    });
  }

  vote(req, res, next) {
    const { id } = req.params;
    const { email, category } = req.body;
    MacUsers.find({ email: email, category: category }, function (err, key) {
      if (key.length === 0) {
        const macuser = new MacUsers({
          email: email,
          category: category,
          vote: [id],
        });
        macuser.save().then((key) => {
          MACs.findById(id, function (err, song) {
            if (!err) {
              let currentVote = song.vote_counts.find((item) => item.category === category);
              if (currentVote) {
                currentVote.counts = currentVote.counts + 1;
              } else {
                song.vote_counts.push({ category: category, counts: 1 });
              }
              song.save().then((key) => {
                res.json("Updated");
              });
            } else {
              res.json("error");
            }
          });
        });
      } else if (key[0].vote.length >= 3) {
        res.status(400).json("Bạn đã vote quá 3 lần rồi!");
      } else {
        if (key[0].vote.indexOf(id) === -1) {
          key[0].vote.push(id);
          key[0].save().then((key) => {
            MACs.findById(id, function (err, song) {
              if (!err) {
                let currentVote = song.vote_counts.find((item) => item.category === category);
                if (currentVote) {
                  currentVote.counts = currentVote.counts + 1;
                } else {
                  song.vote_counts.push({ category: category, counts: 1 });
                }
                song.save().then((key) => {
                  res.json("Updated");
                });
              } else {
                res.json("error");
              }
            });
          });
        } else {
          res.json("Already Voted");
        }
      }
    });
  }
  unVote(req, res, next) {
    const { id } = req.params;
    const { email, category } = req.body;
    MacUsers.findOne({ email: email, category: category }, function (err, key) {
      if (!err) {
        if (key.vote.indexOf(id) !== -1) {
          key.vote.splice(key.vote.indexOf(id), 1);
          key.save().then((key) => {
            MACs.findById(id, function (err, song) {
              if (!err) {
                let currentVote = song.vote_counts.find((item) => item.category === category);
                if (currentVote) {
                  currentVote.counts = currentVote.counts - 1 > 0 ? currentVote.counts - 1 : 0;
                }

                song.save().then((key) => {
                  res.json("Updated");
                });
              } else {
                res.json("error");
              }
            });
          });
        } else {
          res.json("Not Voted");
        }
      } else {
        res.json("error");
      }
    });
  }
}
module.exports = new MacsController();
