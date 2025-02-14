let totalGeral = 0;

limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(quantidade);

    if (!nomeProduto || nomeProduto.length <= 0) {
        alert('Nome do produto inválido. Verifique!');
        
        return;
    }


    if (!quantidade || quantidade <= 0) {
        alert('Quantidade inválida. Verifique!');

        return;
    }
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //alert(preco);

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
                          </section>`

    //atualizar o valor total
    totalGeral += preco;

    let campoTotal = document.getElementById('valor-total');

    campoTotal.textContent = `R$${totalGeral}`;

    document.getElementById('quantidade').value = 0;
}

function limpar() {    
    totalGeral = 0;

    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';	
}