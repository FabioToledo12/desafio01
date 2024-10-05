// biome-ignore lint/style/useConst: <explanation>
let nomeHeroi = "Super Loko";
// biome-ignore lint/style/useConst: <explanation>
let meuXP = 15000;
let nivelXP = "";

if (meuXP <= 1000) {
	nivelXP = "Ferro";
} else if (meuXP > 1000 && meuXP <= 2000) {
	nivelXP = "Bronze";
} else if (meuXP > 2000 && meuXP <= 5000) {
	nivelXP = "Prata";
} else if (meuXP > 5000 && meuXP <= 7000) {
	nivelXP = "Ouro";
} else if (meuXP > 7000 && meuXP <= 8000) {
	nivelXP = "Platina";
} else if (meuXP > 8000 && meuXP <= 9000) {
	nivelXP = "Ascendente";
} else if (meuXP > 9000 && meuXP <= 10000) {
	nivelXP = "Imortal";
} else {
	nivelXP = "Radiante";
}

console.log("O Herói de nome: " + nomeHeroi + " está no nível de: " + nivelXP);
