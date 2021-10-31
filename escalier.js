//ce qui permet d'utiliser valeur du terminal
const [fichNode, fichscripting, chiffre1] = process.argv;

 
var repetition = 0;;
var hastag = "" 
//optionnel
if (chiffre1 == 0 || chiffre1 < 0){
    console.log("choisir valeur > 0");
} 
// ce qui est demandé
while (repetition < chiffre1) {
    hastag = hastag + " # "; 

    repetition++;
    console.log(hastag);
}