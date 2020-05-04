require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require("lodash");
const mongoose = require("mongoose");
const User = require("./models/user");

const typeDefs = require("./schema");
const bookResolver = require("./resolvers/book");
const categoryResolver = require("./resolvers/category");
const userResolver = require("./resolvers/user");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(userResolver, categoryResolver, bookResolver)
});

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const header = req.headers.authorization;

    if (!header) {
      return {
        isAdmin: false,
        isAuth: false,
        userId: null,
        token: null
      };
    }

    const token = header.replace("Bearer ", "");

    if (!token) {
      return {
        isAdmin: false,
        isAuth: false,
        userId: null,
        token: null
      };
    }

    const decoded = jwt.verify(token, process.env.AUTH_SECRET_KEY);
    const user = await User.findOne({ _id: decoded._id });
    if (user) {
      if (user.role === "User") {
        return {
          isAdmin: false,
          isAuth: true,
          userId: decoded._id,
          token
        };
      } else if (user.role === "Admin") {
        return {
          isAdmin: true,
          isAuth: true,
          userId: decoded._id,
          token
        };
      }
    }
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
      console.log(`Server is ready at ${url}`);
    });
  })
  .catch(err => console.log(err));
