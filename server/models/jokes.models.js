const mongoose = require("mongoose");

const jokes_schema = new mongoose.Schema(
    {
        setup: String,
        punchline: String

    },
    { timestamp: true }
);

const Joke = mongoose.model("Joke", jokes_schema);

module.exports = Joke; 