export default async function getUsersInfo() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    let users = [];
    await fetch(apiUrl).then(response => response.json())
        .then(data => {
            users = data.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            }))
        });
    return users;
}