const [node, fichscripting, phrase1] = process.argv;


var phraseModif = phrase1.split('');

for(var i = 0; i< phraseModif.length; i++){
    
    if (i % 2 == 0){
        phraseModif[i] = phraseModif[i].charAt(0).toLocaleLowerCase();
        
    }
    
    else {
        phraseModif[i] = phraseModif[i].charAt(0).toLocaleUpperCase();        
    }    

}
phraseModif = phraseModif.toString();

console.log(phraseModif); 
