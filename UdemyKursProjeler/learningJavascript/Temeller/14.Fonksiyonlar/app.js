//Fonksiyon Tan�mlama

//function merhaba(name="Bilgi Yok", age="Bilgi Yok") {

//    //if (typeof name === "undefined") name = "Bilgi Yok";
//    //if (typeof age === "undefined") age = "Bilgi Yok";

//    console.log(`�sim:${name} Ya�:${age}`);
//}

//merhaba("Edanur", 24);//Fonksiyon �a�r�s� (Function Call)

//merhaba("Kadir");

//function square(x) {
//    return x * x;
//    console.log("Bu �al��maz");//return den sonra yaz�lanlar �al��maz
//}
//function cube(x) {
//    return x * x * x;
//}

//let a = cube(square(12));

//console.log(a);

//function merhaba() {
//    return "Merhaba";
//}

//console.log(merhaba());

//Function Expression

//const merhaba = function (name) {
//    console.log("Merhaba "+name);
//};

//merhaba("Edanur");

//Immediately Invoked Function Expression (IIFE)

(function (name) {
    console.log("Merhaba " + name);
})("Edanur");

const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde Edildi");
    },
    update: function (id) {
        console.log(`Id:${id} G�ncellendi`);
    },
    delete: function (id) {
        console.log(`Id:${id} Silindi`);
    }
}

console.log(database.host);

database.add();

database.delete(10);

