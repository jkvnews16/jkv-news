module.exports = ({ env }) => ({
  proxy: true,
  url: "https://jkvback.herokuapp.com",
  app: {
    keys: ["tk1"],
  },
});
