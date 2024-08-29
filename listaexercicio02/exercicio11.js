/* 11. Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

pedido = [
    {cliente: "a", produto:"arroz", quantidade: 5},
    {cliente: "b", produto:"feijão",quantidade: 3},
    {cliente: "c", produto:"açucar",quantidade: 10},
    {cliente: "d", produto:"farinha",quantidade: 6},
    {cliente: "a", produto:"flokão", quantidade:4},
    {cliente: "c", produto:"farinha",quantidade:8},
]

//
const novoObjeto = {}

pedido.forEach((somatorio) => {
    if(!novoObjeto[somatorio.cliente]) {
       novoObjeto[somatorio.cliente]= 0
    } 
    novoObjeto[somatorio.cliente]+=somatorio.quantidade
    
})
console.log(novoObjeto)