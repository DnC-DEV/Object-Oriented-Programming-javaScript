class ProdutoEletronico {
    public nomeProduto: string;
    public tipoProduto: string;
    public preco: number;
    public fabricante: string;

}

    const produtoEletronico = new ProdutoEletronico();

        console.log('Class Produto Eletronico: ');
        
        const nomeProduto = produtoEletronico.nomeProduto = 'Smart TV 43"';
        const tipoProduto = produtoEletronico.tipoProduto = 'Eletrônico';
        const preco = produtoEletronico.preco = 1.826;
        const fabricante = produtoEletronico.fabricante = 'LG';

        console.log(`\t ${nomeProduto}`);
        console.log(`\t ${tipoProduto}`);
        console.log(`\t Valor: ${preco}`);
        console.log(`\t Fabricante: ${fabricante}`);