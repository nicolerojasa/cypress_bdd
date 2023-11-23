const { defineConfig } = require("cypress");
const mysql = require("mysql2");

const db = {
  host: "127.0.0.1",
  user: "root",
  password: "",
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
    },
  },
});

function queryTestDb(query, config) {
  const connection = mysql.createConnection(db);
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}
