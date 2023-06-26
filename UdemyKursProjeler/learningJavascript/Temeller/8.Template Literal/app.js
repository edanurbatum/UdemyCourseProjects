const name = "Edanur Batum";
const department = "Yazýlým";
const salary = 15000;

//const a = "Ýsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaþ " + salary;

const a = `Ìsim:${name}\nDepartman:${department}\nMaaþ:${salary}`;

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