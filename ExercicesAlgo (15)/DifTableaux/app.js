function difTab(arr1, arr2) {
    let reponse = [];
    // On va créer une fonction checkDiff qui va prendre 2 tableaux à comparer
    function checkDiff(premier, second){
        // On va itérer sur le premier tableau 
        for(let i = 0; i < premier.length ; i++){
            // SI la valeur de l'index courant n'est pas présent dans le second tableau, on va retourner la réponse dans notre tableau vide
            if(second.indexOf(premier[i])=== -1){
                reponse.push(premier[i]);
            }
        }
    }
    checkDiff(arr1, arr2);
    console.log(checkDiff(arr1, arr2));
    checkDiff(arr2, arr1);
    console.log(checkDiff(arr2, arr1));
    return reponse;
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();