const precosLivro = [25, 15 , 30, 50, 45, 20];

let maisbarato = 0;

for(let atual = 0;atual < precosLivro.letngth; atual++){
    if (precosLivro[atual] < precosLivro[maisbarato]){
        maisbarato = atual;
    }
    console.log(maisbarato);
}

console.log (`O livro mais barato é ${precosLivro[maisbarato]}`)