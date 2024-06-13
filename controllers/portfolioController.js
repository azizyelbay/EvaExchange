const Portfolio = require('../db/models/Portfolio');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const userController = require('../controllers/userController');

const savePortfolio = catchAsync(async (req, res, next) => {
    try {
        const user = await userController.findUserById(req.body.userId, next);
        if (!user) return next(new AppError('User does not exist', 400));
        const portfolio = await Portfolio.create(req.body);
        return res.status(201).json({
            status: 'Success',
            data: portfolio,
        });
    } catch (error) {
        return next(error);
    }
});

const getPortfolioById = catchAsync(async (req, res, next) => {
    const portfolioId = req.params.id;
    try {
        const portfolio = await findPortfolioById(portfolioId, next)
        return res.json({
            status: 'success',
            data: portfolio,
        });
    } catch (error) {
        return next(error);
    }
});

const getPortfolioByUserId = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;

    const portfolios = await Portfolio.findAll({
        where: {userId},
    });

    if (portfolios.length == 0) return next(new AppError('Portfolio does not exist', 400));

    return res.json({
        status: 'success',
        data: portfolios,
    });
});

const findPortfolioById = async (id, next) => {
    const portfolio = await Portfolio.findByPk(id);
    if (!portfolio) throw new AppError(`portfolio not found with ID: ${id}`, 400);
    return portfolio;
};

module.exports = {
    savePortfolio,
    getPortfolioById,
    getPortfolioByUserId,
    findPortfolioById,
};