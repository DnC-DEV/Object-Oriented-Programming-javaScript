var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico() {
    }
    return ProdutoEletronico;
}());
var produtoEletronico = new ProdutoEletronico();
console.log('Class Produto Eletronico: ');
var nomeProduto = produtoEletronico.nomeProduto = 'Smart TV 43"';
var tipoProduto = produtoEletronico.tipoProduto = 'Eletrônico';
var preco = produtoEletronico.preco = 1.826;
var fabricante = produtoEletronico.fabricante = 'LG';
console.log("\t ".concat(nomeProduto));
console.log("\t ".concat(tipoProduto));
console.log("\t Valor: ".concat(preco));
console.log("\t Fabricante: ".concat(fabricante));
