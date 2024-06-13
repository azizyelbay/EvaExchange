const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const portfolioController = require('../controllers/portfolioController');
const shareController = require('../controllers/shareController');
const PortfolioShare = require('../db/models/PortfolioShare');

const sell = catchAsync(async (req, res, next) => {
    const {portfolioId, shareId, quantity} = req.body;

    try {
        const portfolio = await portfolioController.findPortfolioById(portfolioId);
        const share = await shareController.findShareById(shareId, next);
        const porfolioShareList = await PortfolioShare.findAll({
            where: {
                portfolioId: portfolioId,
                shareId: shareId
            }
        });
        if (porfolioShareList.length == 0) return next(new AppError('The selected share was not found in the selected portfolio', 400));
        if (porfolioShareList[0].quantity < quantity) return next(new AppError('The quantity of selected stock is not enough', 400));
        const cost = share.price * quantity

        const updatedPortfolio = await portfolio.increment('amount', {by: (cost)});
        const updatedPortfolioShare = await porfolioShareList[0].increment('quantity', {by: (quantity * -1)});
        const updatedShare = await share.increment('quantity', {by: (quantity)})

        return res.status(200).json({
            status: 'Success',
            data: {updatedPortfolio, updatedShare, updatedPortfolioShare},
        });
    } catch (error) {
        return next(error);
    }
});

const buy = catchAsync(async (req, res, next) => {
    const {portfolioId, shareId, quantity} = req.body;
    try {
        const portfolio = await portfolioController.findPortfolioById(portfolioId);
        const share = await shareController.findShareById(shareId);
        if (share.quantity < quantity) return next(new AppError('There is not enough quantity in the market', 400));
        const cost = share.price * quantity;
        if (portfolio.amount < cost) return next(new AppError('There is not enough money in the selected portfolio', 400));

        const updatedPortfolio = await portfolio.increment('amount', {by: (cost * -1)});
        const updatedShare = await share.increment('quantity', {by: (quantity * -1)})


        const porfolioShareList = await PortfolioShare.findAll({
            where: {
                portfolioId: portfolioId,
                shareId: shareId
            }
        });
        let updatedPortfolioShare;
        if (porfolioShareList.length == 0) {
            updatedPortfolioShare = PortfolioShare.create({
                portfolioId: portfolio.id,
                shareId: share.id,
                quantity: quantity
            });
        } else {
            updatedPortfolioShare = await porfolioShareList[0].increment('quantity', {by: quantity});
        }

        return res.json({
            status: 'Success',
            data: {updatedPortfolio, updatedShare, updatedPortfolioShare},
        });
    } catch (error) {
        return next(error);
    }
});
module.exports = {
    sell,
    buy,
};