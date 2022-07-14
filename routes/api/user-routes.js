const router = require('express').Router();
const { getAllUsers, createUser, getUserById, } = require('../../controllers/user-controller');

router
    .route('/:id')
    .get(getUserById)
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;