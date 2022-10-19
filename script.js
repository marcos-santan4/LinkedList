const lista = new LinkedList();
const no = new Node();
const res = document.querySelector('#res');

function adicionar() {
    const nomeProduto = document.querySelector('#product');
    lista.push(nomeProduto.value);
    res.innerHTML = `Nome adicionado: ${nomeProduto.value} <br> <br>`;
    console.log(nomeProduto.value);
    alert('funcionou');
}