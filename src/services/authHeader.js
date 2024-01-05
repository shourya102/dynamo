export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("session"));

    if (user && user.accessToken) {
        return {Authorization: "Bearer " + user.accessToken};
    } else {
        return {};
    }
}