const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const LaunchAPI = require('./datasource');
const resolvers = require('./resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        launchAPI: new LaunchAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});