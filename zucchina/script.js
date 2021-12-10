// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const arrayZucchine = [
    {
        varieta : 'Ascolana',
        peso : 1,
        lunghezza : 6
    },
    {
        varieta : 'Piacentina',
        peso : 11,
        lunghezza : 2
    },
    {
        varieta : 'Rumena',
        peso : 16,
        lunghezza : 3
    },
    {
        varieta : 'Portoricana',
        peso : 3,
        lunghezza : 6
    },
    {
        varieta : 'Marziana',
        peso : 1,
        lunghezza : 12
    },
    {
        varieta : 'Inglese',
        peso : 1,
        lunghezza : 1
    },
    {
        varieta : 'Francese',
        peso : 1,
        lunghezza : 1
    },
    {
        varieta : 'Africana',
        peso : 25,
        lunghezza : 60
    },
    {
        varieta : 'Nordica',
        peso : 18,
        lunghezza : 16
    },
    {
        varieta : 'Sudicia',
        peso : 4,
        lunghezza : 8
    },
    {
        varieta : 'Suina',
        peso : 8,
        lunghezza : 7
    }
];
// console.log(arrayZucchine);
// let sum = 0;
// for (let i = 0; i < arrayZucchine.length; i++) {
//     const element = arrayZucchine[i];
//     sum += element.peso;
// }
// console.log(sum);

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchineSmall = [];
const zucchineBig = [];
for (let i = 0; i < arrayZucchine.length; i++) {
    const element = arrayZucchine[i];
    if (element.peso >= 15) {
        zucchineBig.push(element);
    } else {
        zucchineSmall.push(element);
    }
}
console.log(zucchineSmall);
console.log(zucchineBig);