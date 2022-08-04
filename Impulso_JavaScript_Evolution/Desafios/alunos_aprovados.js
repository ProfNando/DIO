function alunosAprovados(array,media){
    

    let aprovados = [];

    for(let i = 0; i < array.length; i++){
        
        const {nota, nome} = array[i];
        
        if(nota >= media ){
            aprovados.push(nome);
        }
    }

    return aprovados;
}




const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '18' 
    },

    {
        nome: 'Pedro',
        nota: 7,
        turma: '32'
    },
    {
        nome: 'Mario',
        nota: 3,
        turma: '24'
    },
];
    
console.log(alunosAprovados(alunos,5));