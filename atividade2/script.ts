class Aviao {
    public passageiro: string;
    public numeroDoVoo: number;
    public dataDeNascimento: string;
    public acento: number

}

    const aviao = new Aviao();

        console.log('Class Avião: ');
        
        const passageiro = aviao.passageiro = 'Daniel Corrêa';
        const numeroDoVoo = aviao.numeroDoVoo = 166;
        const dataDeNascimetno = aviao.dataDeNascimento = '21-07-2001';
        const acento = aviao.acento = 51;

        console.log(`O passageiro se chama: ${passageiro}`);
        console.log(`Seu numero de voo é o seguinte: ${numeroDoVoo}`);
        console.log(`Sua data de Nacimento é: ${dataDeNascimetno}`);
        console.log(`O seu acento reservado é o de numero: ${acento}`);