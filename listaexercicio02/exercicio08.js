/*8. Criando Novos Arrays a Partir de Objetos
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/ 

 let filmes  = [ 
 {
    titulo: "naosei",
    diretor:"ed",
    anoLancamento: 1900
 },

 {
    titulo: "jasei",
    diretor: "de",
    anoLancamento: 2000
 },
 
]

filmes.forEach (filme => console.log(filme.titulo))  