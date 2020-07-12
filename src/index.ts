import {githubGraphQL} from './graphQL/githubGraphQL'
import {startDate} from './utils/timeStamp'
import {todayCommitCount, userDetails} from './graphQL/query'

(async () => {
    const userId: any = process.env.USER_ID;
    const since: string = startDate().toISOString();

    const response1 = await githubGraphQL(userDetails());
    console.log(response1);

    const response2 = await githubGraphQL(todayCommitCount(userId, since));
    console.log(response2);
})().catch(e => {
    console.error(e);
});