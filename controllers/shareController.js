const Share = require('../db/models/Share');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


const getAllShares = catchAsync(async (req, res, next) => {
    const shares = await Share.findAll({
        order: [['createdAt', 'DESC']],
    })
    return res.json({
        status: 'Success',
        data: shares,
    });
});

const saveShare = catchAsync(async (req, res, next) => {
    const {symbol, price} = req.body;
    try {
        await validateFields(symbol, price);

        const share = await Share.create(req.body);

        return res.status(201).json({
            status: 'Success',
            data: share,
        });
    } catch (error) {
        return next(error);
    }
});

const getShareById = catchAsync(async (req, res, next) => {
    const shareId = req.params.id;
    const share = await findShareById(shareId, next)
    return res.json({
        status: 'success',
        data: share,
    });
});

const updateShare = catchAsync(async (req, res, next) => {
    const shareId = req.params.id;
    const {symbol, price, quantity} = req.body;
    await validateFields(symbol, price);
    const share = await findShareById(shareId, next)
    share.symbol = symbol;
    share.price = price;
    share.quantity = quantity;
    const updatedShare = await share.save();
    return res.json({
        status: 'Success',
        data: updatedShare,
    });
});

const deleteShare = catchAsync(async (req, res, next) => {
    const shareId = req.params.id;
    const share = await findShareById(shareId, next)

    await share.destroy();

    return res.json({
        status: 'Success',
        message: `Share deleted successfully with id: ${userId}`,
    });
});

const findShareById = async (id, next) => {
    const share = await Share.findByPk(id);
    if (!share) throw new AppError(`Share not found with ID: ${id}`, 400);
    return share;
};

const validateFields = async (symbol, price) => {
    if (!symbol || symbol.length !== 3) throw new AppError(`Share symbol must be exactly 3 characters long.`, 400);
    const regex = /^[A-Z]{3}$/;
    if (!regex.test(symbol)) throw new AppError(`Share symbol must contain only uppercase letters.`, 400);
    if (price === null || price === undefined) throw new AppError(`price cannot be null or undefined.`, 400);
    if (typeof price !== 'number') throw new AppError(`Input must be a number.`, 400);
    const regexPrice = /^\d+(\.\d{1,2})?$/;
    if (!regexPrice.test(price.toString())) throw new AppError(`Number must have at most two decimal places.`, 400);
};

module.exports = {
    saveShare,
    getAllShares,
    deleteShare,
    getShareById,
    updateShare,
    findShareById,
};