export const todayCommitParser = (json: any) => {
    let repositoryMap : any = new Map<string, object>();

    json.data.user.repositories.nodes.forEach((repository: any) => {
        let branchMap = new Map<string, object>();

        repository.refs.edges.forEach((edge: any) => {
            const branchName = edge.node.name;
            const commitCount = edge.node.target.history.totalCount;

            if(commitCount > 0) {
                let commitList = new Set<string>();

                edge.node.target.history.nodes.forEach((node: any) => {
                    commitList.add('msg : ' +  node.messageHeadline + ', date : ' + node.committedDate + ', url : ' + node.commitUrl);
                });

                branchMap.set(branchName, commitList);
                repositoryMap.set(repository.name, branchMap);
            }
        });
    });

    return repositoryMap;
}