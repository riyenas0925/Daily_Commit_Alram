import {githubGraphQL} from './utils/githubGraphQL'

const userId: string = 'riyenas0925';
const todayDate: string = '2020-07-04T00:00:00Z';
const query: string = `
query {
    user(login: "${userId}") {
        repositories(last: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
            totalCount
            nodes {
                name
                refs(first: 100, refPrefix: "refs/heads/", after: "") {
                    edges {
                        node {
                            name
                            target {
                                ... on Commit {
                                    history(since: "${todayDate}") {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

console.log(githubGraphQL(query));