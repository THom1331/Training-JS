function regex(str) {
    // Deux / pour mettre les limites de notre Regex
    // On ajoute un g à la fin pour "recherche globale"
    // [] pour rechercher les occurences, ici on cherche les symboles spéciaux % - / et chiffres de 0 à 9
    let regex = /[%-/0-9]/g;
    // On remplace les éléments récupérés par la regex par rien.
    return str.replace(regex, '');
}


console.log(regex('I4l est te-mp///s de %sav/oir u845til85iser 6le re%gex !'));


// ----------------- ÉNONCÉ -----------------

// Entrainons-nous au Regex !
// Vous devez créer un algorithme qui reçoit une chaine de caractères et qui va
// supprimer tous les chiffres, et les caractère (%-/) de cette chaine
// grace à un regex.

// le resultat est : il est temps de savoir utiliser le regex !
// ----------------- CONSEILS -----------------

// Le regex permet de selectionner facilement certains caractères et donc de les
// remplacer facilement avec la méthode replace();
