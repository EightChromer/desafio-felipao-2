const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

let nivel = ""
let saldoDeVitorias = vitorias - derrotas

if (vitorias <= 10){
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20 ){
    nivel = "Bronze";
}else if (vitorias >= 11 && vitorias <= 20 ){
    nivel = "Prata";
}else if (vitorias >= 21 && vitorias <= 50 ){
    nivel = "Ouro";
}else if (vitorias >= 51 && vitorias <= 80 ){
    nivel = "Diamante";
}else if (vitorias >= 81 && vitorias <= 90 ){
    nivel = "Lendário";
}else if (vitorias >= 91 && vitorias <= 100 ){
    nivel = "Imortal";
}

print("O herói tem saldo de " + saldoDeVitorias + " está no nível de " + nivel)