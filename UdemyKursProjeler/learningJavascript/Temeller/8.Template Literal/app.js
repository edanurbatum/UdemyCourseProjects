const name = "Edanur Batum";
const department = "Yaz�l�m";
const salary = 15000;

//const a = "�sim: " + name + "\n" + "Departman: " + department + "\n" + "Maa� " + salary;

const a = `�sim:${name}\nDepartman:${department}\nMaa�:${salary}`;

//const html = "<ul" +
//    "<li>" + name + "</li>" +
//    "<li>" + department + "</li>" +
//    "<li>" + salary + "</li>" +
//    "</ul>";

function email() {
    return "E-mail";
}

const html = `
<ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${email()}</li>
</ul>`;



document.body.innerHTML = html;

//console.log(a);