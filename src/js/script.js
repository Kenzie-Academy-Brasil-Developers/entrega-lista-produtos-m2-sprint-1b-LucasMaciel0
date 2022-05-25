function criarLi (viagem) {
    const ul = document.querySelector('ul')

    const li = document.createElement('li')

    const image = criarImage(viagem)
    const h3 = criarH3(viagem)
    const preco = criarPreco(viagem)
    const secao = criarSecao(viagem)

    li.append(image,h3,preco,secao)
    ul.append(li)
}

function criarImage (viagem) {
    const image = document.createElement('img');
    image.src = viagem.img;

    return image
}

function criarH3 (viagem) {
    const h3 = document.createElement('h3')
    h3.innerText = viagem.nome;

    return h3
}

function criarPreco (viagem) {
    const preco = document.createElement('p')
    preco.innerText = viagem.preco;

    return preco
}

function criarSecao (viagem) {
    const secao = document.createElement('span')
    secao.innerText = viagem.secao;

    return secao
}

function percorrerProdutos (listaViagens) {
    for (let contagem = 0; contagem < listaViagens.length; contagem++){
        const viagem = listaViagens[contagem]

        criarLi(viagem)
    }
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
        return elem.secao === 'Laticínio'
    })
    return laticinios
}

const botaoLaticinios = document.querySelector('.estiloGeralBotoes--filtrarLaticínios')
botaoLaticinios.addEventListener('click',function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    const laticinios = filtrarLaticionios(listaDeProdutos)
    percorrerProdutos(laticinios)

})




const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodos.addEventListener('click', function(){

    const div = document.querySelector('.containerListaProdutos > ul')
    div.innerHTML = ''

    percorrerProdutos(listaDeProdutos)
})


