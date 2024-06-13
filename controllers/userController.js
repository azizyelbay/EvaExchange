const User = require('../db/models/User');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.findAll({
        order: [['createdAt', 'DESC']],
    })
    return res.json({
        status: 'Success',
        data: users,
    });
});

const saveUser = catchAsync(async (req, res, next) => {
    const {email} = req.body;

    const userExists = await User.findOne({
        where: {email},
    });

    if (userExists) return next(new AppError('email already exist', 400));

    const body = req.body;
    const user = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
    });

    return res.status(201).json({
        status: 'Success',
        data: user,
    });
});

const getUserById = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const user = await findUserById(userId, next)
    return res.json({
        status: 'success',
        data: user,
    });
});

const updateUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const user = await findUserById(userId, next)
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    const updatedUser = await user.save();
    return res.json({
        status: 'Success',
        data: updatedUser,
    });
});

const deleteUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const user = await findUserById(userId, next)

    await user.destroy();

    return res.json({
        status: 'Success',
        message: `User deleted successfully with id: ${userId}`,
    });
});

const findUserById = async (id, next) => {
    const user = await User.findByPk(id);
    if (!user) return next(new AppError(`User not found with ID: ${id}`, 404));
    return user;
};

module.exports = {
    saveUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUser,
    findUserById,
};