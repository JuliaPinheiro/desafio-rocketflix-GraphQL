const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    overview: String
    poster_path: String
  }

  type Query {
    movie(id: ID): Movie
    movies: [Movie]
    moviesByTitle(title: String): [Movie]
  }
`;

const resolvers = {
  Query: {
    movie: async (_, { id }) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=41f411540855ae0cf4f9b57fcb28d441&language=pt-BR`
      );
      return response.data;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
