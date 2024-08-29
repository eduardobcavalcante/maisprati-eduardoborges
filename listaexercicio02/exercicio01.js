/*Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/

let carro = {
    marca: "Wolkwagen",
    modelo: "fusca",
    ano: 1956,
    cor: "preta",
   } 

for(let atributos in carro) {
    console.log(`${atributos} : ${carro[atributos]} `)
}