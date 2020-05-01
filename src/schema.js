const { gql } = require('apollo-server');

const typeDefs = gql`
    type Launch {
        flightNumber: Int!
        rocketName: String!
        siteName: String!
        launchDate: Int!
    }

    type Query {
        launches(rocketName: String, siteName: String, launchYear: Int): [Launch]!
    }
`;

module.exports = typeDefs;