let maisbarato = 0;

for(let atual = 0;atual < livro.letngth; atual++){
    if (livro[atual] < livro[maisbarato]){
        maisbarato = atual;
    }
    console.log(maisbarato);
}

console.log (`O livro mais barato é ${livro[maisbarato]}`)