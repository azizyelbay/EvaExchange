const {buy, sell} = require("../controllers/transactionController");

const router = require('express').Router();

router.route('/buy').post(buy);
router.route('/sell').post(sell);

module.exports = router;