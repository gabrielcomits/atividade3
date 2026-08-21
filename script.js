function calcularTroco() {
    const precoUnitario = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const dinheiroRecebido = parseFloat(document.getElementById('dinheiro').value);
    const divResultado = document.getElementById('resultado');

    if (isNaN(precoUnitario) || isNaN(quantidade) || isNaN(dinheiroRecebido)) {
        divResultado.className = "resultado erro";
        divResultado.innerText = "Por favor, preencha todos os campos.";
        divResultado.style.display = "block";
        return;
    }

    const totalCompra = precoUnitario * quantidade;

    divResultado.className = "resultado";

    if (dinheiroRecebido >= totalCompra) {
        const troco = dinheiroRecebido - totalCompra;
        divResultado.classList.add('sucesso');
        divResultado.innerText = `TROCO = ${troco.toFixed(2)}`;
    } else {
        const falta = totalCompra - dinheiroRecebido;
        divResultado.classList.add('erro');
        divResultado.innerText = `Dinheiro insuficiente. Faltam ${falta.toFixed(2)} R$`;
    }

    divResultado.style.display = "block";
}