function substPares(array){

    for(let i = 0; i < array.length; i++ ){
            
        if(array[i] % 2 == 0){
            array[i] = 0;
        }

        array[i] = array[i];
    }

    return array;
}

var array = [3, 5, 7, 3, 5, 6, 74, 2, 6];

console.log(substPares(array));