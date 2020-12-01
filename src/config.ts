import { config } from "dotenv";

config();

export default {
  app: {
    id: process.env.REACT_APP_ID,
    name: process.env.npm_package_name,
    url: process.env.REACT_APP_URL,

    isDevelopment: process.env.NODE_ENV === "development"
  },

  urls: {
    graphqlServer: process.env.REACT_APP_URLS_GRAPHQL_SERVER,
    identityServer: process.env.REACT_APP_URLS_IDENTITY_SERVER
  }
};
