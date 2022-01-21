// WHILE 
// function repete(str, num) {
//     let final = '';
//     while(num > 0){
//         final += str;// final = final + str
//         num--; // num = num - 1;
//     }
//   return final;
// }

// Recursion
// function repete(str, num){
//     if(num < 1){
//         return '';
//     } else {
//         // A chaque fois que la fonction va se rappeler, elle va retourner la str + rappellera la fonction en décrémentant le num tour par tour.
//         return str + repete(str, num - 1);
//         // 'abc' + 'abc' + 'abc' + 'abc' + '';
//     }
// }

// Ternaire 
function repete(str, num){
    return (num > 0) ? str.repeat(num) : '' ;
    // () ? : 
}
console.log(repete('abc', 4));

// ----------------- ÉNONCÉ -----------------

// Repetez la chaine(premier parametre) un certain nombre de fois(second parametre).
// Cette algorithme est relativement facile, c'est pourquoi je vais vous demander de
// trouver au moins trois façon différentes de le réaliser.
// Trouver différentes solutions à un algorithme est un bon moyen de progresser.


// ----------------- CONSEILS -----------------

// Recursion.
// opérateur ternaire.
// While;