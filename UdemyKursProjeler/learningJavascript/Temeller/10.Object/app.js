let value;

const programmer = {
    name: "Edanur Batum",
    age: 25,
    email: "ornekmail@gmail.com",
    langs: ["Java", "C#", "Javascript"],

    address: {
        city: "Samsun",
        street:"�lkad�m"
    },

    work: function () {
        console.log("Programc� �al���yor..");
    }
}
value = programmer;
//value = programmer["email"];
value = programmer.email;

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    { name: "Engin Demiro�", age: 25 },
    { name: "Mustafa Murat", age: 25 }
];

value = programmers[0].name;



console.log(value);