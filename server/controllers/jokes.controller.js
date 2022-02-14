const Joke = require("../models/jokes.models");

const getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({_id: params._id})
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then(newJoke => res.json(newJoke))
    .catch(err => console.log(err))
};



module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
}