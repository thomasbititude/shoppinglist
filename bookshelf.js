const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "thomas",
    password: "password",
    database: "shoppinglist",
    charset: "utf8",
  },
  debug: true,
});
module.exports = require("bookshelf")(knex);
