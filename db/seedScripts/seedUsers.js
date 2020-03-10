const fs = require("fs");
const db = require("../index.js");

const seedUsers = () => {
  fs.readFile(
    "./lib/fakerData.json",
    { encoding: "utf-8", flag: "rs" },
    (err, data) => {
      // error handling
      if (err) {
        console.log(err);
      }
      const users = JSON.parse(data).users;
      //iterate through the users array
      users.forEach(book => {
        // create the variables for each column
        let { name, photo } = book;
        return db
          .query(`INSERT INTO users(user_name,photo) VALUES ($1,$2)`, [
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

module.exports = seedUsers;
