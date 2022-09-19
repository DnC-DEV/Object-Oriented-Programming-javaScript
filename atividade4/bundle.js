var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var funcionario = new Funcionario();
console.log('Class Funcionario: ');
var nomeFuncionario = funcionario.nomeFuncionario = 'Daniel Corrêa';
var setorAlocado = funcionario.setorAlocado = 'Vendas';
var salario = funcionario.salario = 1.853;
var tempoDeCasa = funcionario.tempoDeCasa = 3;
console.log("O funcionario: ".concat(nomeFuncionario));
console.log("Est\u00E1 alocado no setor: ".concat(setorAlocado));
console.log("Seu salario \u00E9: ".concat(salario));
console.log("Est\u00E1 na empresa a ".concat(tempoDeCasa, " anos"));
