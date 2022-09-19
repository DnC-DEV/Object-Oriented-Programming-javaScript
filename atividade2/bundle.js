var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());
var aviao = new Aviao();
console.log('Class Avião: ');
var passageiro = aviao.passageiro = 'Daniel Corrêa';
var numeroDoVoo = aviao.numeroDoVoo = 166;
var dataDeNascimetno = aviao.dataDeNascimento = '21-07-2001';
var acento = aviao.acento = 51;
console.log("O passageiro se chama: ".concat(passageiro));
console.log("Seu numero de voo \u00E9 o seguinte: ".concat(numeroDoVoo));
console.log("Sua data de Nacimento \u00E9: ".concat(dataDeNascimetno));
console.log("O seu acento reservado \u00E9 o de numero: ".concat(acento));
