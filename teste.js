
const { cifrar, decifrar } = require("./vernam");

const mensagem = "OLA";
const chave = "CHT";

const resultadoCifra = cifrar(mensagem, chave);
console.log("Cifrado:", resultadoCifra);

const resultadoDecifra = decifrar(
  resultadoCifra.textoCifrado,
  chave
);

console.log("Decifrado:", resultadoDecifra);
