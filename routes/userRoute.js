const {saveUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/userController');

const router = require('express').Router();

router.route('/').get(getAllUsers);
router.route('/').post(saveUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);


module.exports = router;