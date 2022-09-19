var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var cliente = new Cliente();
console.log('Class Cliente: ');
var nome = cliente.nome = 'Daniel Corrêa';
var idade = cliente.idade = 21;
var dataDeNascimetno = cliente.dataDeNascimento = '21-07-2001';
console.log("Seu nome \u00E9: ".concat(nome));
console.log("Sua idade \u00E9: ".concat(idade));
console.log("Sua data de Nacimento \u00E9: ".concat(dataDeNascimetno));
