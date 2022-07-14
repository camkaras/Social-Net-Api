const { Schema, model,Types } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        requried: true,
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
},
{
    toJSON: {
        getters: true,
        virtuals: true
    },
        id: false
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;