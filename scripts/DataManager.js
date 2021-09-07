export const getRandomUser = () => {
    return fetch("https://randomuser.me/api/")
    .then(login => login.json())
}