const Transaction = require('../models/Transaction');

// @desc Gets all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find()

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transacitons
    })
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: 'Server Error'
    })
  }
};

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  const { Text, amount } = req.body;
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE Transactions');
};
