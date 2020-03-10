const models = require("../models/models.js");

module.exports = {
  allBooks: (req, res) => {
    models.getBooks().then(books => {
      res.status(200).send(books);
    });
  },
  popularBooks: (req, res) => {
    models.getPopularBooks().then(popularBooks => {
      res.status(200).send(popularBooks);
    });
  },
  allAuthors: (req, res) => {
    models.getAuthors().then(authors => {
      res.status(200).send(authors);
    });
  }
};
