const router = require('express').Router();
const { getAllThought, createThought, getThoughtById, updateThought, deleteThought, createReaction } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:id/reactions')
    .post(createReaction);

module.exports = router;