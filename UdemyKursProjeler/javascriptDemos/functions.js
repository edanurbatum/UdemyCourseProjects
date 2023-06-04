function sayiUret(ustlimit=49) {
    return Math.ceil(Math.random() * ustlimit)
}


var sayi1 = sayiUret(60)
var sayi2 = sayiUret(60)
var sayi3 = sayiUret(60)
var sayi4 = sayiUret(60)
var sayi5 = sayiUret(60)
var sayi6 = sayiUret(60)

console.log('Kolon: ' + sayi1 + ' ' + sayi2 + ' '
    + sayi3 + ' ' + sayi4 + ' ' + sayi5 + ' '+ sayi6)