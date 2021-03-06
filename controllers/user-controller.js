const { User } = require('../models');

const userController = {
    
    createUser({ body }, res) {
        User.create(body)
        .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
        },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(user => {
            if (!user) {
            res.status(404).json({ message: 'Pleasae try agin!' });
            return;
        }
        res.json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getAllUsers(req, res) {
        User.find({})
        .then(user => res.json(user))
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(user => {
            if (!user) {
            res.status(404).json({ message: 'Please Try Again!' });
            return;
        }
        res.json(user);
        })
        .catch(err => res.status(400).json(err));
    },

    //delete a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id})
        .then(user => {
            if (!user) {
            res.status(404).json({ message: 'Please Try Again!' });
            return;
        }
        res.json(user);
        })
        .catch(err => res.status(400).json(err));
    }

}
module.exports = userController;