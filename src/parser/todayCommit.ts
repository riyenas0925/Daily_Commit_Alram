import { report } from "process";

export const todayCommitParser = (json: any) => {
    let repositories = json.data.user.repositories.nodes;

    repositories.forEach( (repository: any) => {
        repository.refs.edges.forEach((edge: any) => {
            const branchName = edge.node.name;
            const commitCount = edge.node.target.history.totalCount;

            if(commitCount > 0) {
                console.log(repository.name);
                console.log(branchName + ' : ' + commitCount);
            }
        });
    });

    return JSON.stringify(json, null, 2);
}