//ce qui permet d'utiliser valeur du terminal
const [fichNode, fichscripting, chiffre1] = process.argv;

function factoriel(chiffre1){
    if (chiffre1 == 1){
        return 1;
    }
    else{
        return chiffre1 * factoriel(chiffre1 - 1);
    }
}
console.log(factoriel(chiffre1));