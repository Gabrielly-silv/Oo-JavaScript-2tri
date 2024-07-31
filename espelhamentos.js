const cliente = {
    nome :"João",
    idade: 24,
    email:"Joao@escola.br.gov",
    telefone:["(41) 9988-8899","(41) 8899-9988"],
};

cliente.enderecos = [
{
    rua : "R. joseph Climber",
    numero : 1337,
    apartamento : true,
    apartamento : "Ap 934",
},  
];

function ligarParaCliente (telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligarParaCliente(...cliente.telefone);

const encomenda ={
    detinatario : cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);