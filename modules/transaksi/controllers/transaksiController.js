const Transaction = require('../models/transactionSchema');

exports.create = (req, res) => {
  // console.log(req.body)
  const newTransaction = new Transaction(req.body);
  newTransaction.save()
    .then(money => res.json(money))
    .catch(err => console.error(err));
};

exports.getAll = (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then(money => res.json(money))
    .catch(err => console.error(err));
};

exports.update = (req, res) => {
  Transaction.updateOne({ _id: req.params.id }, {
    $set: {
      typetransaciton:req.body.typetransaciton,
      description: req.body.description,
      total: req.body.total
    }
  })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};

exports.delete = (req, res) => {
  Transaction.deleteOne({ _id: req.params.id })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};
