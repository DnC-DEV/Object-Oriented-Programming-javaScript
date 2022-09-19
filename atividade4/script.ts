class Funcionario {
    public nomeFuncionario: string;
    public setorAlocado: string;
    public salario: number;
    public tempoDeCasa: number;

}

    const funcionario = new Funcionario();

        console.log('Class Funcionario: ');
        
        const nomeFuncionario = funcionario.nomeFuncionario = 'Daniel Corrêa';
        const setorAlocado = funcionario.setorAlocado = 'Vendas';
        const salario = funcionario.salario = 1.853;
        const tempoDeCasa = funcionario.tempoDeCasa = 3;

        console.log(`O funcionario: ${nomeFuncionario}`);
        console.log(`Está alocado no setor: ${setorAlocado}`);
        console.log(`Seu salario é: ${salario}`);
        console.log(`Está na empresa a ${tempoDeCasa} anos`);