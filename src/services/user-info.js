export async function getUsersInfo() {
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

export async function getUsersAddresses() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    let addresses = [];
    await fetch(apiUrl).then(response => response.json())
        .then(data => {
            addresses = data.map((info) => ({
                id: info.id,
                city: info.address.city,
                geo: info.address.geo,
                street: info.address.street,
                suite: info.address.suite,
                zipcode: info.address.zipcode
            }))
        });
    return addresses;
}