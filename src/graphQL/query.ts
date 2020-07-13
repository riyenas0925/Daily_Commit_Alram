export const todayCommitCount = (userId: string, since: string) => {
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
                                            nodes {
                                                commitUrl
                                                messageHeadline
                                                committedDate
                                            }
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
    }`

    return query;
}

export const userDetails = () => {
    const query: string = `
    query { 
        viewer { 
            login
            email
        }
    }`

    return query;
}