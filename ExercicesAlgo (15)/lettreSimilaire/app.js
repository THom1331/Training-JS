function memeLettres(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    // On vient itérer à travers chaque lettre du second mot
    for(let i = 0; i < secondWord.length ; i++){
        
        if(firstWord.indexOf(secondWord[i]) === -1){
            console.log("Bonjour".indexOf('k'));
            console.log("Bonjour".indexOf('j'));// 3 : Donc équivalence.
            return false;
            // Fin algo
        }
    }
    // Sinon on retourne true
    return true;
}
console.log(memeLettres(["concupiscence", "sens"]));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();


