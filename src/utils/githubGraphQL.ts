import axios from 'axios'

export const githubGraphQL = async(query: string) => {
    const accessToken = process.env.ACCESS_TOKEN
    const response = await axios.post("https://api.github.com/graphql", {
        query: query
    }, {
        headers: {
            'Authorization': 'bearer ' + accessToken
        }
    });

    console.log(JSON.stringify(response.data, null, 2));
};