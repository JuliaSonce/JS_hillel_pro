var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

function emailFilter(users) {
    let result = [];
    const regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    for (let i = 0; i < users.length; i++) {
        if (regex.test(users[i].email) == true) {
            result.push(users[i])
        }
    }
    return result;
}

emailFilter(arr);