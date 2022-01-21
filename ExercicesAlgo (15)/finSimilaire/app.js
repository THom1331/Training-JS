function finSimilaire(str, fin) {
    // On coupe la fin du mot en premier paramètre en fonction de la longueur de la str passé en 2nd paramètre
    var finDuMot = str.slice(-fin.length);

    // Maintenant qu'on a isolé la fin du mot, on a plus qu'à comparer
    if(finDuMot === fin){
        return "La fin est similaire";
    } else {
        return "La fin ne correspond pas";
    }
}

console.log(finSimilaire("ours", "rs"));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


// ----------------- CONSEILS -----------------


// La fonction "slice" permet de découper une chaine de caractère.
// Essayez cela : 
// console.log("hello".slice(2));

// La méthode length permet de donner la longueur d'une chaine.
// Essayez cela :
// console.log("hello".length);

// Mais il y a des dizaines de façon de résoudre cet algorithme(et les autres...),
// N'hésitez pas à le faire à votre façon et à TESTER vos idées(c'est important). 


