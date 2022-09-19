class Cliente {
    public nome: string;
    public idade: number;
    public dataDeNascimento: string;

}

    const cliente = new Cliente();

        console.log('Class Cliente: ');
        
        const nome = cliente.nome = 'Daniel Corrêa';
        const idade = cliente.idade = 21;
        const dataDeNascimetno = cliente.dataDeNascimento = '21-07-2001';

        console.log(`Seu nome é: ${nome}`);
        console.log(`Sua idade é: ${idade}`);
        console.log(`Sua data de Nacimento é: ${dataDeNascimetno}`);