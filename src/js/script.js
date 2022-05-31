function criarLi (viagem) {
    const ul = document.querySelector('ul')

    const li = document.createElement('li')

    const image = criarImage(viagem)
    const h3 = criarH3(viagem)
    const preco = criarPreco(viagem)
    const secao = criarSecao(viagem)

    li.append(image,h3,secao,preco)
    ul.append(li)
}

function criarImage (viagem) {
    const image = document.createElement('img');
    image.src = viagem.img;

    return image
}

function criarH3 (viagem) {
    const h5 = document.createElement('h5')
    h5.innerText = viagem.nome;

    return h5
}

function criarPreco (viagem) {
    const preco = document.createElement('p')
    preco.innerText = viagem.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return preco
}

function criarSecao (viagem) {
    const secao = document.createElement('span')
    secao.innerText = viagem.secao;

    return secao
}

function percorrerProdutos (listaViagens) {
    const total = document.querySelector('#precoTotal')
    
    let soma = 0
    for (let contagem = 0; contagem < listaViagens.length; contagem++){
        const viagem = listaViagens[contagem]
        criarLi(viagem)
        let numero = viagem.preco
        soma += numero
    }
    total.innerText = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
percorrerProdutos(listaDeProdutos)





function filtrarHortifruti (listaViagens) {
    const hortifruti = listaViagens.filter(function(elem){
        return elem.secao === 'Hortifruti'
    })
    return hortifruti
}
const botaoHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoHortifruti.addEventListener("click",function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    const  retornoHortifruti = filtrarHortifruti(listaDeProdutos)
    percorrerProdutos(retornoHortifruti)

    
    

})




function filtrarPanificadora (listaViagens) {
    const panificadora = listaViagens.filter(function(elem){
        return elem.secao === 'Panificadora'
    })
    return panificadora
}
const botaoPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora')
botaoPanificadora.addEventListener('click', function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    const retornoPanificadora = filtrarPanificadora(listaDeProdutos)
    percorrerProdutos(retornoPanificadora)

})




function filtrarLaticionios (listaViagens) {
    const laticinios = listaViagens.filter(function(elem){
        return elem.secao === 'Laticinio'
    })
    return laticinios
}
const botaoLaticinios = document.querySelector('.estiloGeralBotoes--filtrarLaticínios')
botaoLaticinios.addEventListener('click',function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    const retornolaticinios = filtrarLaticionios(listaDeProdutos)
    percorrerProdutos(retornolaticinios)

})




const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodos.addEventListener('click', function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    percorrerProdutos(listaDeProdutos)
})





function filtrarBanana (listaViagens) {
    const banana = listaViagens.filter(function(elem){
        return elem.nome === 'Banana'
    })
    return banana
}

function filtrarMorango (listaViagens) {
    const morango = listaViagens.filter(function(elem){
        return elem.nome === 'Morango'
    })
    return morango
}

function filtrarMaca (listaViagens) {
    const maca = listaViagens.filter(function(elem){
        return elem.nome == "Maçã"
    })
    return maca
}

function filtrarPao (listaViagens) {
    const pao = listaViagens.filter(function(elem){
        return elem.nome == "Pão"
    })
   return pao
}

function filtrarLeite(listaViagens){
    const leite = listaViagens.filter(function(elem){
        return elem.nome == "Leite"
    })
    return leite
}


const input = document.querySelector('.campoBuscaPorNome')

const botaoBuscar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
botaoBuscar.addEventListener('click', function(){

        if(input.value == "Banana" || input.value == "banana"){
            const div = document.querySelector('.containerListaProdutos > ul')
            div.innerHTML = ''

            const banana = filtrarBanana(listaDeProdutos)
            percorrerProdutos(banana)
        }
        else if (input.value == "Morango" || input.value == "morango" ){
            const div = document.querySelector('.containerListaProdutos > ul')
            div.innerHTML = ''

            const morango = filtrarMorango(listaDeProdutos)
            percorrerProdutos(morango)
        }
        else if (input.value == "Maçã" || input.value == "maçã" || input.value == "maca"){
            const div = document.querySelector('.containerListaProdutos > ul')
            div.innerHTML = ''

            const maca = filtrarMaca(listaDeProdutos)
            percorrerProdutos(maca)

        }
        else if (input.value == "Pão" || input.value == "pão" || input.value == "pao"){
            const div = document.querySelector('.containerListaProdutos > ul')
            div.innerHTML = ''

            const pao = filtrarPao(listaDeProdutos)
            percorrerProdutos(pao)
        }
        else if (input.value == "Leite" || input.value == "leite"){
            const div = document.querySelector('.containerListaProdutos > ul')
            div.innerHTML = ''

            const leite = filtrarLeite(listaDeProdutos)
            percorrerProdutos(leite)
        }

        
    }
    
)