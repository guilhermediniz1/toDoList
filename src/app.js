const btnEnviar = document.querySelector('#btnEnviar')
const iptConteudo = document.querySelector('#iptConteudo')
const listaItens = document.querySelector('#listaItens')

const itens = !window.localStorage.getItem('itens') ? [] : window.localStorage.getItem('itens').split(',')

btnEnviar.addEventListener('click', adicionarItem) 
window.addEventListener('load', renderizarItens)

function adicionarItem() {  
    if(iptConteudo.value.trim() === "")  return

    itens.push(iptConteudo.value)

    iptConteudo.value = ''
    iptConteudo.focus()

    salvarLocalStorage()
    renderizarItens()
}

function renderizarItens() {
    listaItens.innerHTML = ''
    for(let i = 0; i < itens.length; ++i) {
        const itemLista = document.createElement('li')
        itemLista.classList.add('item-lista')
        itemLista.innerHTML = itens[i]
        listaItens.appendChild(itemLista)
    }
}

function salvarLocalStorage() {
    window.localStorage.setItem('itens', itens)
}