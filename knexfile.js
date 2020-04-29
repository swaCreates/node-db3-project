// Update with your config settings.

module.exports = {
  client: 'sqlite3', // specifies DBMS
  useNullAsDefault: true, // helps sqlite & knex work properly with null values
  connection: {
    filename: './data/schemes.db3', // location of our DB file
  }
};
