function additionner(arr) {
    let max = Math.max(arr[0], arr[1]); // On s'assure de prendre en compte la valeur max quelle que soit sa place dans le tableau.
    let min = Math.min(arr[0], arr[1]); // IDEM 
    let accumulateur = 0;

    // On va itérer du minimum vers le maximum
    for(let i = min; i <= max; i++){
        accumulateur = accumulateur + i;
        // 1er passage : accumulateur = 0 + 4
        // 2eme passage = accumulateur = 4 + 5 
        // 3eme passage accumulateur = 9 + 6 
        // 4eme passage accumulateur = 15 + 7 
        // 5eme passage accumulateur = 22 + 8
        // 5eme passage accumulateur = 30 + 9
        // 5eme passage accumulateur = 39 + 10
    }

    return accumulateur;

}

console.log(additionner([54, 10]));
// 4 + 5 + 6 + 7 + 8 + 9 + 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs. Retourner le résultat. 

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.mix


