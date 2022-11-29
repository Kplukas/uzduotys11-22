// 1. pinigine
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let pinigine = Array.from({ length: Random(10, 30) }, () => Math.floor(Random(0, 10)))
console.log('pinigines turinys:', pinigine)
// 2. suma
let suma = 0;
for (i = 0; i < pinigine.length; i++) {
    suma += pinigine[i];
}
console.log('pinigines suma:',suma);
// 3. popieriniu suma
let sumaPopier = 0;
for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2){
        sumaPopier += pinigine[i]
    }
}
console.log('popieriniu suma:', sumaPopier)
// 4. metaliniai lygus 0
for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2){
        pinigine[i] = 0
    }
}
console.log('pinigine be metaliniu:',pinigine)
// 5. didziausia reiksme ir kiek ju yra
const didziausias = Math.max(...pinigine);
const didziausi = [];
for (i = 0; i < pinigine.length; i++) {
    if(pinigine[i] = didziausias){
        didziausi.push(pinigine[i])
    }
}
console.log(didziausi)
//suma random

const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const isNeedle = (element) => element = "needle";
const indexas = haystack.findIndex(isNeedle);
console.log(indexas);