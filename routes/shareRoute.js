const {getAllShares, saveShare, getShareById, updateShare, deleteShare} = require("../controllers/shareController");

const router = require('express').Router();

router.route('/').get(getAllShares);
router.route('/').post(saveShare);
router.route('/:id').get(getShareById);
router.route('/:id').put(updateShare);
router.route('/:id').delete(deleteShare);


module.exports = router;