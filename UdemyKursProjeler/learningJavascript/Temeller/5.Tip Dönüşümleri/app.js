let value;

//Veritiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () { console.log() });
value = String([1, 2, 3, 4]);

value = (10).toString();
value = (3.14).toString();

//Veritiplerini Sayýlara Çevirme

//Sadece sayý olanlar çevriliyor diðerleri NaN oluyor

value = Number("123");
value = Number(null);
value = Number(undefined);//NaN yani not a number döndürür
value = Number("Hello World");
value = Number(function () { console.log() });
value = Number([1, 2, 3, 4]);

value = Number("3.14");
value = parseFloat("3.14");

value = parseFloat("3");

console.log(value);
console.log(typeof value);

/*const a = "34" + 53;*/ //sonucu "3453"

const a = Number("34") + 53; 

console.log(a);
console.log(typeof a);