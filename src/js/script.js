const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {
    
    ul.innerHTML = ''

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const botaoCarrinho = document.createElement('button')
        const nutrientes = document.createElement('p')
        
        
        li.id = produto.id
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        span.innerText = produto.secao;

        botaoCarrinho.classList.add('botaocarrinho')
        botaoCarrinho.innerText = 'Comprar'

        nutrientes.innerText = produto.componentes;
        nutrientes.classList.add('listaNutrientes')

        li.append(img,h3,p,span,botaoCarrinho,nutrientes)

        ul.appendChild(li)
          
        
    });
}montarListaProdutos(listaDeProdutos)



function filtrarTodosProdutos(){
    montarListaProdutos(listaDeProdutos)
}

function filtrarPorHortifruti() {
    const listaHortifruti = listaDeProdutos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti);

}

function filtrarPorPanificadora(){
    const filtraPanificadora = listaDeProdutos.filter((produto)=>{
        return produto.secao === "Panificadora"
    })
    montarListaProdutos(filtraPanificadora)

}

function filtrarPorLaticinios() {
    const filtraLaticionios = listaDeProdutos.filter((produto)=>{
        return produto.secao === "Laticinio"
    })
    montarListaProdutos(filtraLaticionios)
}


const botaoMostrarTodosOsProdutos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodosOsProdutos.addEventListener('click', filtrarTodosProdutos)

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

const botaoMostrarPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora')
botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora)

const botaoMostrarLaticinios = document.querySelector('.estiloGeralBotoes--filtrarLaticínios')
botaoMostrarLaticinios.addEventListener('click', filtrarPorLaticinios )



const inputBusca = document.querySelector('.campoBuscaPorNome')

const botaoPesquisar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
botaoPesquisar.addEventListener('click', filtrarPesquisa)

function filtrarPesquisa(){
    const pesquisa = listaDeProdutos.filter((listaDeProdutos)=>{
        return listaDeProdutos.nome == inputBusca.value
    })
    montarListaProdutos(pesquisa)
}


// COLOCANDO NO CARRINHO 
const ulCarrinho = document.querySelector('.ulCarrinho')

function identificarItem (event) {
    const alvo = event.target

    if(alvo.tagName === "BUTTON"){
        criarLi(alvo)
    }
}

ul.addEventListener('click',identificarItem)

let quantidade1 = 1
let soma = 0

function criarLi (botao) {

    listaDeProdutos.forEach((produto)=>{
        if(produto.id === Number(botao.parentElement.id)){
            
            const li = document.createElement('li')
            const img = document.createElement('img')
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const span = document.createElement('span')
            const botaoRemover = document.createElement('button')
           

            li.id = produto.id
            img.src = produto.img
            h3.innerText = produto.nome
            p.innerText = produto.secao
            span.innerText = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            botaoRemover.innerText = 'X'
            div.classList.add('divCarrinho')

        

            div.append(h3,p,span)
            li.append(img,div,botaoRemover)
            quantidade1++
            ulCarrinho.append(li)
            
        }
    })
}




//REMOVENDO DO CARRINHO
function removerItem (button) {
    button.parentElement.remove()
}

function identificarBotaoRemover (event) {
    const alvo = event.target

    if(alvo.tagName === "BUTTON"){
        removerItem(alvo)
    }
}
ulCarrinho.addEventListener('click',identificarBotaoRemover)