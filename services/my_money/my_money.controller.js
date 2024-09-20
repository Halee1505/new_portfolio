const {
  TransactionModel,
  UserModel,
  CategoryModel,
  LocationModel,
} = require("./my_money.model");
class MyMoneyController {
  async login(req, res, next) {
    const { email, password } = req.body;

    UserModel.findOne({ email: email }, function (err, key) {
      if (!err) {
        if (key) {
          if (key.password === password) {
            res.send(key);
          } else {
            res.send("wrong password");
          }
        } else {
          res.send("wrong email");
        }
      } else {
        res.send("error");
      }
    });
  }
  async createUser(req, res, next) {
    const { name, email, password, avatar } = req.body;
    UserModel.create(
      {
        name: name,
        email: email,
        password: password,
        avatar: avatar,
      },
      function (err, key) {
        if (!err) {
          res.send(key);
        } else {
          res.send("error");
        }
      }
    );
  }
  async getTransactions(req, res, next) {
    const { userId } = req.body;
    TransactionModel.find(
      {
        user: userId,
      },
      function (err, key) {
        if (!err) {
          const data = key.map((item) => {
            return {
              _id: item._id,
              amount: item.amount,
              image: item.image,
              note: item.note,
              category: item.category,
              location: item.location,
              user: item.user,
              created_at: item.created_at,
              updated_at: item.updated_at,
            };
          });
          res.send(data);
        } else {
          res.json("error");
        }
      }
    );
  }
  async newTransaction(req, res, next) {
    console.log(req.body);
    res.send(req.body);
  }
}

module.exports = new MyMoneyController();
