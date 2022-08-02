function verificaPalindromo(frase){

    var reverseFrase = frase.split("").reverse().join("");
    //var reverseFrase = splitFrase.reverse();

    if(frase == reverseFrase){
        return console.log(" Palindromo"); 
    }else{
        return console.log("NAO é");
    }


}

frase = "amor a roma";
verificaPalindromo(frase);

//Solução 2

function verificaPalindromo2(frase){
    if(!frase) return "frase inexistente"; // verifica se tem algo escrito na frase

    for(let i = 0; i < frase.length/2; i++ ){
        
        if(frase[i] !== frase[frase.length - 1- i] ){
                return false;
        }

    }

    return true;
}

console.log(verificaPalindromo2('abba'));

