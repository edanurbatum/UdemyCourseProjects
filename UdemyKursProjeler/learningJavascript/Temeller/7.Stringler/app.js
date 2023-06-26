let value;

const firstName = "Edanur";
const lastName = "Batum";

const langs = "Java, C#, Python"

value = firstName + " " + lastName;

value = "Kübra";
value += " Özdemir";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Yazar");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[3];
value = firstName[5];

value = firstName[firstName.length - 1];//son karakteri alýr

value = firstName.indexOf("a");//a kaçýncý karakter
value = firstName.indexOf("e");//küçük e yok -1 döner

//Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);//son karakteri alýr

//Split

value = langs.split(",");//Virgüllere göre ayýrýp array'e atar

//Replace

value = langs.replace("Python", "CSS");//Python yerine CSS yazar

//Includes

value = langs.includes("Java");
value = langs.includes("C++");

console.log(value);