/* Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

let celular = {
    valor1 : 100,
    valor2 : 200,
    valor3 : 400,
    valor4 : 500,
    valor5 : 800,
    
}
    
function filtrar(objeto) {
    let novoObjeto = {}
    for (let chave in objeto) {
        if( objeto[chave] >= 350)[
            novoObjeto[chave] = objeto[chave]
        ]
    }
console.log(novoObjeto)
}
filtrar(celular)
