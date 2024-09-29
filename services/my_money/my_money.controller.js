const {
  TransactionModel,
  UserModel,
  CategoryModel,
  LocationModel,
} = require("./my_money.model");
class MyMoneyController {
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.status(200).json(user);
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  }
  async createUser(req, res, next) {
    const { name, email, password, avatar } = req.body;

    const user = new UserModel({
      name: name,
      email: email,
      password: password,
      avatar: avatar,
      money_goal: 0,
      created_at: new Date(),
      updated_at: new Date(),
    });
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the image.",
        });
      });
  }
  async getCategories(req, res, next) {
    try {
      const categories = await CategoryModel.find();
      return res.status(200).json(categories);
    } catch (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the image.",
      });
    }
  }
  async getAllTransactions(req, res, next) {
    try {
      const transactions = await TransactionModel.find();
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the image.",
      });
    }
  }
  async getTransactions(req, res, next) {
    try {
      const { userId, categoryId, startDate, endDate } = req.body;
      if (!userId) {
        return res.status(404).send({ message: "User not found" });
      }
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const query = {
        user: userId,
      };

      if (categoryId) {
        query.category = categoryId;
      }
      if (startDate || endDate) {
        query.created_at = {};
        if (startDate) {
          query.created_at.$gte = startDate;
        }
        if (endDate) {
          query.created_at.$lte = endDate;
        }
      }
      const transactions = await TransactionModel.find(query)
        .sort({ created_at: -1 })
        .populate("category",{name:1})
        .select({
          name: 1,
          created_at: 1,
          amount: 1,
          image: 1,
          note: 1,
          location: {
            city: 1,
            district: 1,
            street: 1,
            streetNumber: 1,
          },
          category: 1,
          created_at: 1,
        });
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the image.",
      });
    }
  }
  async updateTransaction(req, res, next) {
    res.send("Need to implement");
  }
  async newTransaction(req, res, next) {
    const { location, amount, image, note, category, user } = req.body;
    const userExist = await UserModel.findOne({ email: user.email });
    if (!userExist) {
      return res.status(404).send({ message: "User not found" });
    }
    let categoryExist = await CategoryModel.findOne({ name: category.name });
    if (!categoryExist) {
      categoryExist = new CategoryModel({
        name: category.name,
        icon: category.icon,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      categoryExist.save().catch((err) => {
        return res.status(500).send({
          message:
            err.message || "Some error occurred while creating the image.",
        });
      });
    }

    const transaction = new TransactionModel({
      location: location,
      amount: amount,
      image: image,
      note: note,
      category: categoryExist,
      user: userExist._id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    transaction
      .save()
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(500).send({
          message:
            err.message || "Some error occurred while creating the image.",
        });
      });
  }
}

module.exports = new MyMoneyController();
