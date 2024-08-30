/*Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

let livros = {
    
      titulo: "Só sei que foi assim",
      autor: "Ed",
      anoPublicacao: 1999,
      genero: "romance",  
      }


for(let livro in livros){
    if(livro === 'editora'){
        console.log("Existe editora")
    }
}

  if(!livros.editora){
      livros.editora = 'Blanc'
      console.log("Nao existia editora, foi atribuida  a editora.")
  }
console.log(livros)