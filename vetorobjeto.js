function funcao(){
   
    var vet = []

    for (var i=0; i<5; i++){
        var objeto = {}
        // coloca os dados no objeto
        objeto.codigo = Number(prompt("Código"))
        objeto.nome = prompt("Nome")
        objeto.quantidade = Number(prompt("Quantidade"))
        objeto.preco = Number(prompt("Preço"))
    
    // coloca os dados no vetor
    vet.push(objeto)

    }

    var estoque = 0
    for (i=0; i<5; i++){
        soma = soma + vet[i].quantidade 
    }

    alert("Quantidade em estoque: " + estoque)



}