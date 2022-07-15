const router = require('express').Router();
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../../controllers/user-controller');

router
    .route('/:id')
    .put(updateUser)
    .delete(deleteUser)
    .get(getUserById);

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;