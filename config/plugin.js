module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    introspection: true,
    apolloServer: {
      tracing: false,
    },
  },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "jkv",
      api_key: "856194613969161",
      api_secret: "Hd2rV0hiR7R5vyeXxRXCpPU0gMU",
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
