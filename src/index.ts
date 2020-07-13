import {githubGraphQL} from './graphQL/githubGraphQL'
import {startDate} from './utils/timeStamp'
import {todayCommitCount, userDetails} from './graphQL/query'
import {userParser} from './parser/user'
import {todayCommitParser} from './parser/todayCommit'

(async () => {
    const userId: any = process.env.USER_ID;
    const since: string = startDate().toISOString();
    const user = userParser(await githubGraphQL(userDetails()));
    console.log(user);

    const todayCommit = todayCommitParser(await githubGraphQL(todayCommitCount(userId, since)));
    console.log(todayCommit);
})().catch(e => {
    console.error(e);
});