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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
            console.error("Erro. É necessário ter um cadastro de endereço")}