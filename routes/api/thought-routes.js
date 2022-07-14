const router = require('express').Router();
const { getAllThought, createThought, getThoughtById } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought);


router
    .route('/:id')
    .get(getThoughtById)

module.exports = router;