import axios from 'axios'

const accessToken: string = '2f4ef526a1585e50c289611defff848b1fcd6e80'

export const githubGraphQL = async(query: string) => {
    const response = await axios.post("https://api.github.com/graphql", {
        query: query
    }, {
        headers: {
            'Authorization': 'bearer ' + accessToken
        }
    });

    console.log(JSON.stringify(response.data, null, 2));
};