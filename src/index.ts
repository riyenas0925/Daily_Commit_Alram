import {githubGraphQL} from './graphQL/githubGraphQL'
import {startDate} from './utils/timeStamp'
import {todayCommitCount, userDetails} from './graphQL/query'
import {userParser} from './parser/user'

(async () => {
    const userId: any = process.env.USER_ID;
    const since: string = startDate().toISOString();

    const userDetailsResponse = await githubGraphQL(userDetails());
    const user = userParser(userDetailsResponse);

    console.log('user : ' + user.id + ', email : ' + user.email);

    const todayCommitCountRes = await githubGraphQL(todayCommitCount(userId, since));
    console.log(todayCommitCountRes);
})().catch(e => {
    console.error(e);
});