const fs = require("fs");
const db = require("../index.js");

const seedBooks = () => {
  fs.readFile(
    "./lib/fakerData.json",
    { encoding: "utf-8", flag: "rs" },
    (err, data) => {
      // error handling
      if (err) {
        console.log(err);
      }
      const books = JSON.parse(data).books;
      const columns =
        "book_name,author,photo,book_description,votes,ratings,likes,genre,popular";
      //iterate through the books array
      books.forEach(book => {
        // create the variables for each column
        let {
          name,
          author,
          photo,
          description,
          votes,
          ratings,
          likes,
          genre,
          popular
        } = book;

        // postgres format for arrays
        likes = `{${likes.join(",")}}`;

        return db
          .query(
            `INSERT INTO books(${columns}) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
            [
              name,
              author,
              photo,
              description,
              votes,
              ratings,
              likes,
              genre,
              popular
            ]
          )
          .catch(err => {
            console.log(err);
          });
      });
      console.log("Data loaded");
    }
  );
};

module.exports = seedBooks;
