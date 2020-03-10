SELECT 'CREATE DATABASE bookstore'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'bookstore')\gexec
\c bookstore;

-- ---
-- Table 'Books'
-- 
-- ---
DROP TABLE IF EXISTS books CASCADE;
CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  book_name VARCHAR(250) NOT NULL,
  author VARCHAR(60) NOT NULL,
  photo VARCHAR NULL,
  book_description VARCHAR(1000) NULL,
  votes INTEGER NULL,
  ratings DECIMAL NULL,
  likes INTEGER ARRAY,
  genre VARCHAR NULL,
  popular BOOLEAN NULL
);

-- ---
-- Table 'Users'
-- 
-- ---
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(60) NOT NULL,
  photo VARCHAR NULL
);

-- ---
-- Table 'Authors'
-- 
-- ---

DROP TABLE IF EXISTS authors;
CREATE TABLE authors (
  id SERIAL PRIMARY KEY NOT NULL,
  author_name VARCHAR(60) NOT NULL,
  photo VARCHAR NULL
);

CREATE INDEX user_id_index ON users (id);
CREATE INDEX book_id_index ON books (id);