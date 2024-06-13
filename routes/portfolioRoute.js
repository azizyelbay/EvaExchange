const {getPortfolioByUserId, savePortfolio, getPortfolioById, } = require("../controllers/portfolioController");

const router = require('express').Router();

router.route('/get-by-user-id/:userId').get(getPortfolioByUserId);
router.route('/').post(savePortfolio);
router.route('/:id').get(getPortfolioById);

module.exports = router;