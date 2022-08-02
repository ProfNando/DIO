function calculadora(){
   const opera = prompt('Escolha uma opção:\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão real \n 5 - Divisão Inteira \n 6 - Potenciação');

    //console.log(operacao);
    let num1 = prompt('Insira um valor');
    let num2 = prompt('Insira outro valor');
    let res;
}



function soma(){
    
    res = num1 + num2;
    alert(`${num1} + ${num1} = ${res}`);

}


 if (opera == 1) {
     soma();
 } else if (opera == 2) {
     subtracao();
 } else if (opera == 3) {
     multiplicacao();
 } else if (opera == 4) {
     divisaoReal();
 } else if (opera == 5) {
     divisaoInteira();
 } else if (opera == 6) {
     potenciacao();
 }
calculadora();
