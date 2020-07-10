export const startDate = (): Date => {
    const date: Date = new Date();
    date.setUTCHours(0)
    date.setUTCMinutes(0)
    date.setUTCSeconds(0)

    return date;
}