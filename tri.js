//ce qui permet d'utiliser valeur du terminal
const [fichNode, fichscripting, chiffre1] = process.argv;

chiffre1 == '';
//transform string -> integer
var n = chiffre1.split(' ').map(function(item) {
    return parseInt(item, 10);
});
var memoir = 0;
var triFini = false; 
while (!triFini){
    
    triFini = true;

    for (var i = 0 ; i < n.length ; i++){
        
        if (n[i] < n[i+1]){
        triFini = false;
        memoir = n[i+1];
        n[i+1] = n[i]; 
        n[i] = memoir;
        } 
    }   
}
console.log(n);



