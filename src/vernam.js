
function validarTextoEChave(texto, chave) {
    if (typeof texto !== "string" || typeof chave !== "string") {
        throw new Error("O texto e a chave devem ser strings.");
    }

    if (texto.length === 0 || chave.length === 0) {
        throw new Error("O texto e a chave não podem estar vazios.");
    }

    if (texto.length !== chave.length) {
        throw new Error("A chave deve ter o mesmo tamanho do texto.");
    }

    for (const caractere of texto + chave) {
        if (caractere.charCodeAt(0) > 127) {
            throw new Error("Utilize apenas caracteres ASCII.");
        }
    }
}

function cifrar(textoClaro, chave) {
    validarTextoEChave(textoClaro, chave);

    let textoCifrado = "";

    for (let i = 0; i < textoClaro.length; i++) {
        const codigoTexto = textoClaro.charCodeAt(i);
        const codigoChave = chave.charCodeAt(i);
        //CharCode retorna  o numero do caractere
        const resultadoXOR = codigoTexto ^ codigoChave;
        //O Javascript tem um operador XOR = ^

        const binario = resultadoXOR.toString(2).padStart(8, "0");

        textoCifrado += binario;
    }

    return { textoCifrado };
}


function decifrar(textoCifrado, chave) {
    if (typeof textoCifrado !== "string" || typeof chave !== "string") {
        throw new Error("O texto cifrado e a chave devem ser strings.");
    }

    if (textoCifrado.length === 0 || chave.length === 0) {
        throw new Error("O texto cifrado e a chave não podem estar vazios.");
    }

    if (textoCifrado.length !== chave.length * 8) {
        throw new Error("A chave deve ter o tamanho correto.");
    }

    let textoClaro = "";

    for (let i = 0; i < chave.length; i++) {
        const binario = textoCifrado.slice(i * 8, (i + 1) * 8);

        for (let j = 0; j < binario.length; j++) {
            if (binario[j] !== "0" && binario[j] !== "1") {
                throw new Error("O texto cifrado deve conter apenas 0 e 1.");
            }
        }

        const codigoTexto = parseInt(binario, 2);
        const codigoChave = chave.charCodeAt(i);

        if (codigoChave > 127) {
            throw new Error("Utilize apenas caracteres ASCII na chave.");
        }

        const resultadoXOR = codigoTexto ^ codigoChave;

        if (resultadoXOR > 127) {
            throw new Error("Resultado fora da faixa ASCII.");
        }

        textoClaro += String.fromCharCode(resultadoXOR);
    }

    return { textoClaro };
}


export { cifrar, decifrar };
