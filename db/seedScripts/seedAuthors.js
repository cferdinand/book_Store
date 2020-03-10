const fs = require("fs");
const db = require("../index.js");

const seedAuthors = () => {
  fs.readFile(
    "./lib/fakerData.json",
    { encoding: "utf-8", flag: "rs" },
    (err, data) => {
      // error handling
      if (err) {
        console.log(err);
      }
      const authors = JSON.parse(data).authors;
      //iterate through the authors array
      authors.forEach(book => {
        // create the variables for each column
        let { name, photo } = book;
        return db
          .query(`INSERT INTO authors(author_name,photo) VALUES ($1,$2)`, [
            name,
            photo
          ])
          .catch(err => {
            console.log(err);
          });
      });
      console.log("Data loaded");
    }
  );
};

module.exports = seedAuthors;
