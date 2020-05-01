const resolvers = {
    Query: {
      launches: (_, { rocketName, siteName, launchYear }, { dataSources }) => dataSources.launchAPI.getAllLaunches(rocketName, siteName, launchYear)
    }
};

module.exports = resolvers;