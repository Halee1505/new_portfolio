const Transaction = require("./my_money.model");
class MyMoneyController {
    async getTransactions(req, res, next) {
        const {userId} = req.params;
        Transaction.find({
            user: userId
        }, function (err, key) {
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
        });
    }
    async newTransaction(req, res, next) {
        console.log(req.body);
       res.send(req.body);
    }
}

module.exports = new MyMoneyController();