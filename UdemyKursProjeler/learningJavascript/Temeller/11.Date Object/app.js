let value;

const now = new Date();//Þimdiki zaman

const date1 = new Date("11-08-1998 17:00:07");

const date2 = new Date("November 08 1998");

const date3 = new Date("11/08/1998");

value = date1;

value = date1.getMonth();//0 dan baþlar
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

//Deðiþtirme
date1.setMonth(6);
date1.setDate(7);
date1.setFullYear(1999);
date1.setHours(1);
date1.setMinutes(23);
date1.setSeconds(0);

value = date1;

console.log(value);