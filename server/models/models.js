const db = require("../../db/index.js");

module.exports = {
  getBooks: () => {
    return db.query(`SELECT * FROM books`).then(({ rows }) => {
      let books = rows.map(async book => {
        book.likes = await db
          .query(`SELECT * FROM users WHERE id IN(${book.likes.join(",")})`)
          .then(({ rows }) => {
            return rows;
          });
        return book;
      });
      books = Promise.all(books);
      return books;
    });
  },
  getPopularBooks: () => {
    return db
      .query(
        `SELECT id,book_name,author,photo,book_description,ratings,votes FROM books WHERE popular=true`
      )
      .then(({ rows }) => {
        return rows;
      });
  },
  getAuthors: () => {
    return db.query(`SELECT * FROM authors`).then(({ rows }) => {
      return rows;
    });
  }
};
