let value;

const value1 = 10;
const value2 = 4;

//Aritmetik Operatörler

value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;

value = Math.PI;//PI sayýsýný alýr
value = Math.E;

value = Math.round(3.6);//yuvarlama
value = Math.round(3.5);
value = Math.round(3.2);

value = Math.ceil(3.2);//yukarý yuvarlar
value = Math.ceil(3.7);

value = Math.floor(3.2);//aþaðý yuvarlar
value = Math.floor(3.7);

value = Math.sqrt(16);//karekök alma
value = Math.sqrt(31);

value = Math.abs(-10);//mutlak deðer alma

value = Math.pow(8, 3);//8'in 3'üncü kuvveti
value = Math.pow(4, 2);

value = Math.max(10, -1, 100, 32);
value = Math.min(10, -1, 100, 32);

value = Math.random();
value = Math.random() * 20; //0-20arasý deðerler
value = Math.floor(Math.random() * 20 + 1); //1-20 arasý deðerler

console.log(value);