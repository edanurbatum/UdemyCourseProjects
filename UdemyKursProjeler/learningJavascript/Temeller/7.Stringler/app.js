let value;

const firstName = "Edanur";
const lastName = "Batum";

const langs = "Java, C#, Python"

value = firstName + " " + lastName;

value = "K�bra";
value += " �zdemir";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Yazar");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[3];
value = firstName[5];

value = firstName[firstName.length - 1];//son karakteri al�r

value = firstName.indexOf("a");//a ka��nc� karakter
value = firstName.indexOf("e");//k���k e yok -1 d�ner

//Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);//son karakteri al�r

//Split

value = langs.split(",");//Virg�llere g�re ay�r�p array'e atar

//Replace

value = langs.replace("Python", "CSS");//Python yerine CSS yazar

//Includes

value = langs.includes("Java");
value = langs.includes("C++");

console.log(value);