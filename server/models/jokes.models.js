const mongoose = require('mongoose');

const jokes_schema = new mongoose.Schema(
    {
        setup: {
            type: String
        },
        punchline: {
            type: String
        } 

    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", jokes_schema);

module.exports = Joke; 