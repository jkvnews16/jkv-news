const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://coctmdoaggtsjr:d4097426e0519961d8663f9e8036289f25469d77a4cb4b4ac7baddb4fddcd48b@ec2-52-22-136-117.compute-1.amazonaws.com:5432/d9vhk7mkungrli"
);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
