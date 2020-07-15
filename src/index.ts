import { githubGraphQL } from './graphQL/githubGraphQL'
import { startDate } from './utils/timeStamp'
import { todayCommitCount } from './graphQL/query'
import { todayCommitParser } from './parser/todayCommit'
import { sendEmail } from './utils/sendEmail'

(async () => {
    const userId: any = process.env.USER_ID;
    const since: string = startDate().toISOString();
    
    const todayCommit = todayCommitParser(await githubGraphQL(todayCommitCount(userId, since)));
    console.log(todayCommit);

    const info = await sendEmail(since , todayCommit.toString());
    console.log(info);
})().catch(e => {
    console.error(e);
});