var convertisseurRomain = function(num) {
		
    var valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var chiffreRomains = 
    [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    var chiffreRomain = '';
		// On itère sur notre tableau de valeur Décimale
    for (var index = 0; index < valeurDecimale.length; index++) {
				// Tant que num passé en paramètre de la fonction est inférieur
				// A la valeur courante de du tableau valeurDécimale, 
        while(num >= valeurDecimale[index]){
						// On ajoute le chiffreRomain au même index que la valeurD à notre
						// variable chiffreRomain
            chiffreRomain += chiffreRomains[index];
            num -= valeurDecimale[index]; 
					// Puis on enlève la valeur courante à notre num avant de poursuivre.
					// Si 2000, on stock un M dans chiffreRomain, reste 1000 à num, on recommence
        }

    }

    return chiffreRomain;

}
console.log(convertisseurRomain(36));

// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir des le nombre passé en parametre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;