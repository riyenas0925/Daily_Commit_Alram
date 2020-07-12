export const userParser = (json: any) => {
    let id: string = json.data.viewer.login;
    let email: string = json.data.viewer.email;

    return {
        id: id,
        email: email
    }
}