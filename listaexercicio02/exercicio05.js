/* 5. Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

let alunos = [
    { nome: "ray",
      nota1: 5,
      nota2: 7,
    }, 
    { nome: "rayson",
      nota1: 4,
      nota2: 9,
    }, 
    { nome: "ray",
      nota1: 2,
      nota2: 5,
    }, 
  ]
    for(let aluno of alunos){
      console.log(`aluno ${aluno.nome} : tirou a média igual a: ${(aluno.nota1 + aluno.nota2)/2}`)  
    }

