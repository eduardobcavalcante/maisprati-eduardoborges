/*Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
z'e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

let empresa = {
    departamentos: [
        {
            nome: "comercial",
            funcionarios: ["joao", "raquel", "plinio", "cabral"]
        },

        {
            nome: "rh",
            funcionarios: ["antony", "cristofer", "sedra", "rino"]
        },
        {
            nome: "logistica",
            funcionarios: ["tony", "fran", "mavia", "cristina"]
        },


    ]

}

for (const i in empresa.departamentos) {
    const departamento = empresa.departamentos[i]

for (const funcionario of departamento.funcionarios){

    console.log(`Funcionário: ${funcionario} - Departamento: ${departamento.nome}`)
}

}