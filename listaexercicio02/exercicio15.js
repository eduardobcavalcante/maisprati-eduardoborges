/*Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/


let transacoes = [
    { tipo: 'entrada', valor: 10 }, 
    { tipo: 'saida', valor: 35 },   
    { tipo: 'entrada', valor: 50 },
    { tipo: 'saida', valor: 28 },
];

let saldo = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldo += transacao.valor; // Adiciona o valor da entrada
    } else if (transacao.tipo === 'saida') {
        saldo -= transacao.valor; // Subtrai o valor da saída
    }
});

// Exibe o saldo final
console.log(`Saldo final: ${saldo}`);
