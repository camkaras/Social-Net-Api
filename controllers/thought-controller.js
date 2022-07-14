const { Thought, User } = require('../models');

const thoughtController = {
    
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id }},
                    { new: true }
                );
            })
            .then(thought => res.json(thought))
            .catch(err => res.status(400).json(err));
        },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(Thought => {
            if (!Thought) {
            res.status(404).json({ message: 'Please Try Again!' });
            return;
        }
        res.json(Thought);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getAllThought(req, res) {
        Thought.find({})
        .then(Thought => res.json(Thought))
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    },
}
module.exports = thoughtController;