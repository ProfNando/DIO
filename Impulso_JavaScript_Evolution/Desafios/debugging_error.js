
function validaArray(array, num){
    
     
    
    try {
        
        if(!array && !num ) throw new ReferenceError("Envie os parâmetros!"); 
        
        if(typeof array !== 'object') throw new TypeError("O array precisa ser do tipo object")
    
        if(typeof num !== 'number' ) throw new TypeError("O numero precisa ser do tipo number");
       
        if(array.length != num) throw new RangeError("O array nao tem a mesma quantidade de elementos do nuero");
        
        return array;


    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError ");
            console.log(e.stack);

        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.stack);

        } else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.stack);
        } else{
            console.log("Tipo de erro nao esperado:" + e);
        }
    }
}

console.log(validaArray([0,1,2,3],4));
