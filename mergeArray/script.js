// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arrayOne = ['a', 'b', 'c', 'd', 'e'];
const arrayTwo = [1, 2, 3, 4, 5];
let mergeArrays = [];

for (let i = 0; i < arrayOne.length; i++) {
    mergeArrays.push(arrayOne[i]);
    mergeArrays.push(arrayTwo[i]);
}
console.log(mergeArrays);