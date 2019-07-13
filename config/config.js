require('dotenv').config();

module.exports ={
  "development": {
    "username": "root",
    "password": "root",
    "database": "pryia_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.JAWSDB_USR,
    "password": process.env.JAWSDB_PWD,
    "database": process.env.JAWSDB_DTB,
    "host": process.env.JAWSDB_Host,
    "dialect": "mysql",
    "operatorsAliases": false
  }
};
