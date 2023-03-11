const Money = require('../models/moneySchema');

exports.createMoney = (req, res) => {
  // console.log(req.body)
  const newMoney = new Money({
    description: req.body.description,
    amount: req.body.amount
  });
  newMoney.save()
    .then(money => res.json(money))
    .catch(err => console.error(err));
};

exports.getAllMoney = (req, res) => {
  Money.find()
    .sort({ date: -1 })
    .then(money => res.json(money))
    .catch(err => console.error(err));
};

exports.updateMoney = (req, res) => {
  Money.updateOne({ _id: req.params.id }, {
    $set: {
      description: req.body.description,
      amount: req.body.amount
    }
  })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};

exports.deleteMoney = (req, res) => {
  Money.deleteOne({ _id: req.params.id })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};
