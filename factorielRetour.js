//ce qui permet d'utiliser valeur du terminal
const [node, fichscripting, chiffre1] = process.argv;

var resultat ;
var factoriel = 1;

for (resultat = 1 ; factoriel <= chiffre1 ; factoriel++){
    resultat = resultat * factoriel;
}
console.log(resultat.toLocaleString()); // toLocalString() arrondie à la 16e decimal
