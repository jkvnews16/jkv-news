const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://jkaxiakekxauqy:7cba1cfc2297e811a7d7e865d64f2f2d31b705befcdc332d493f9359f755dad8@ec2-34-200-35-222.compute-1.amazonaws.com:5432/d52169ra6uj6j7"
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
