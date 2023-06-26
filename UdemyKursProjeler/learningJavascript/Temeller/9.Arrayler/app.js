let value;

const numbers = [43, 56, 23, 78, 68, 5];

//const numbers = new Array[43, 56, 23, 78, 68, 5];

const langs = ["Python", "Java", "C#", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

//Uzunluk
value = numbers.length;

//Indeksleme
value = numbers[0];
value = numbers[numbers.length - 1];//son eleman

//Herhangi bir indeksteki degeri degistirme
numbers[2] = 7;

value = numbers;

//Index Of

value = numbers.indexOf(7);//7 kacýnci eleman bakiyoruz

//Arrayin sonuna ve baþýna deger ekleme 
numbers.push(2000);

numbers.unshift(3000);

value = numbers;

//Sonundan ve baþýndan deðer atma
numbers.pop();

numbers.shift();

value = numbers;

//Belli bir aralýktan atma
numbers.splice(0, 3);

value = numbers;

//Reverse ters çevirme
numbers.reverse();

value = numbers;

value = numbers.sort();

//Küçükten büyüðe sýralama
value = numbers.sort(function (x, y) {
    return x - y;
});

// Büyükten küçüðe sýralama
value = numbers.sort(function (x, y) {
    return y - x;
});
console.log(value);