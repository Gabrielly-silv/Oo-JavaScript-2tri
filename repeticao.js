const cliente = {
    nome :"João",
    idade : 24,
    email :"Joao@escola.br.gov",
    telefone:["(41) 9988-8899","(41) 8899-9988"],
};

cliente.enderecos = [
{
    rua : "R. joseph Climber",
    numero : 1337,
    apartamento : "Ap 934",
},  
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};
