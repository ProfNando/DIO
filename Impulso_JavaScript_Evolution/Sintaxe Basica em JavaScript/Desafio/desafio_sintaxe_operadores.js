
function soma( a, b ){

    if(a === b){
        return console.log('Os numeros ',a, ' e ', b, 'sao iguais');
    }else{
        return console.log('Os numeros ',a,' e ',b,'  NÃO são iguais');    
    }

}

 a = prompt('Digite um numero: ');
 b = prompt('Digite outro numero: ');

 s = soma(a, b);

 proalert(s);
