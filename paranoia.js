var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName: "",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const validatedMails = /^[a-zA-Z0-9.]+@(gmail\.com|yahoo\.com)$/;
const filteredMails = arr.filter(item => validatedMails.test(item.email))

console.log(filteredMails)