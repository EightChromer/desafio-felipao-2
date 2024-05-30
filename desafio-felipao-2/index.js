const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let vitorias, derrotas;

function lerVitorias() {
    rl.question('Insira o número de vitórias: ', function(resposta) {
        vitorias = parseInt(resposta);
        
        while (vitorias < 0 || isNaN(vitorias)) {
            console.log('Valor inválido! O número de vitórias deve ser um número inteiro positivo.');
            rl.prompt();
            return lerVitorias();
        }
        lerDerrotas();
    });
}
function lerDerrotas() {
    rl.question('Insira o número de derrotas: ', function(resposta) {
        derrotas = parseInt(resposta);
        
        while (derrotas < 0 || isNaN(derrotas)) {
            console.log('Valor inválido! O número de derrotas deve ser um número inteiro positivo.');
            rl.prompt();
            return lerDerrotas();
        }

        let saldoDeVitorias = vitorias - derrotas;
        let nivel = "";

        if (vitorias <= 10) {
            nivel = "Ferro";
        } else if (vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }

        console.log("O herói tem saldo de " + saldoDeVitorias + " está no nível de " + nivel);

        rl.close();
    });
}

lerVitorias();
