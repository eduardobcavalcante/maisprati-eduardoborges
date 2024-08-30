/* Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

let funcionarios = [

{nome: "já-fui",
cargo: "laterninha",
 salario: 1500,
},
{nome: "já-era",
cargo: "ascensorista",
 salario: 1200,
},
{nome: "já-deu",
cargo: "caixa",
 salario: 900,
},
{nome: "jabour",
cargo: "puxadordesaco",
 salario: 1500,
},
]
for (let funcionario of funcionarios){
    if(funcionario.salario <= 1200){
         console.log(funcionario )
    }
    }
