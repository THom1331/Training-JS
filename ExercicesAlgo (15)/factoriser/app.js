function factoriser(num) {
    for(let i=1; num > 1; num--){
        // -- = -1 
        // ++ = +1
        i = num * i;
        // i = 1 
        // 1 = 5 * 1
        // 5 = 4 * 5
        // 20 = 3 * 20
        // 60 = 2 * 60
        // 120 = 1 * 120
    }

}

// function factoriser(5){
//     for(i = 1; 5 > 1; 5--){
//         1 = 5 * 1;
//         5 = 4 * 5; //(num = 4 parce que 5-- (ou 5 - 1))
//     }
// }

console.log(factoriser(5));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5 = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// La boucle "for" est ton amie.




