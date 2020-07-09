import axios from 'axios'

const accessToken: string = '87a3f7a3e7ae630dd5e199aa7f2cdc88a47e8946'

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