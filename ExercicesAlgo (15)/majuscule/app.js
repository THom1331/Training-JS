function maj(str) {
    // Ici on a transformé notre str en minuscule et en tableau.
    var tableauMinuscule = str.toLowerCase().split(' ');
    console.log(tableauMinuscule);
    // Regarder la méthode map()
    var resultat = tableauMinuscule.map(
        function(val){
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        }
    )
        console.log(resultat);
        return resultat.join(' '); // Retourner le tableau en string
  
}

console.log(maj("Les sanglots longs des violons de l'automne..."));

// - On veut tout mettre en minuscule
// On transforme notre str en tableau
// Si on casse notre str en tableau -> Un tableau d'autant de cellule qu'il y aura de mot on pourra récupérer le caractère 0 de chaque mot pour travailler sur la majuscule. 
// Remplacer la première lettre minuscule par une maj
// Retourner le tableau en chaîne de caractère (join'')

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends une phrase en argument et qui retourne cette meme
// phrase avec la premiere lettre de chaque mots en Majuscule.

// ----------------- CONSEILS -----------------

// Fonctions utiles : 
// map(); méthode "callback", qui permet de traiter chaque élément d'un tableau et
// d'en retourner un nouveau avec les éléments modifiés.
// toUpperCase(); transforme en majuscule.
// toLowerCase(); pour transformer en minuscule.
// charAt(); pour sélectionner un caratère.
// split(); pour transformer string->tableau.
// replace(); pour remplacer une partie d'une chaine.

