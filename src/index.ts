import {githubGraphQL} from './utils/githubGraphQL'
import {startDate} from './utils/timeStamp'

const userId: any = process.env.USER_ID;
const since: string = startDate().toISOString();
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
                                    history(since: "${since}") {
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