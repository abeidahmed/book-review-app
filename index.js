require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require("lodash");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const userResolver = require("./resolvers/user");
const User = require("./models/user");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(userResolver)
});

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const header = req.headers.authorization || "";

    if (header === "") {
      return {
        isAuth: false,
        userId: null,
        token: null
      };
    }

    const token = header.replace("Bearer ", "");
    if (!token) {
      return {
        isAuth: false,
        userId: null,
        token: null
      };
    }

    const decoded = jwt.verify(token, process.env.AUTH_SECRET_KEY);
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });
    if (!user) {
      return {
        isAuth: false,
        userId: null,
        token: null
      };
    }

    return {
      isAuth: true,
      userId: decoded._id,
      token
    };
  }
});

/**
 * set up mongoDB and start the server if mongo connects successfully.
 */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(err => console.log(err));
