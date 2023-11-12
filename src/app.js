const btnEnviar = document.querySelector('#btnEnviar')
const iptConteudo = document.querySelector('#iptConteudo')
const listaItens = document.querySelector('#listaItens')

let itens = !window.localStorage.getItem('itens') ? [] : window.localStorage.getItem('itens').split(',')

btnEnviar.addEventListener('click', adicionarItem) 
window.addEventListener('load', renderizarItens)

function adicionarItem() {  
    if(iptConteudo.value.trim() === "")  return

    itens.unshift(iptConteudo.value)

    iptConteudo.value = ''
    iptConteudo.focus()

    salvarLocalStorage()
    renderizarItens()
}

function renderizarItens() {
    listaItens.innerHTML = ''
    for(let i = 0; i < itens.length; ++i) {
        const itemLista = document.createElement('li')
        itemLista.setAttribute('itemId', i)

        itemLista.classList.add('item-lista')

        itemLista.innerHTML = itens[i]

        itemLista.onclick = aoClicarEm
        listaItens.appendChild(itemLista)
    }
}

function aoClicarEm(event) {
    const element = event.target
    removerItem(element.attributes.itemId.value)
}

function removerItem(id) {
    itens.splice(id, 1)
    salvarLocalStorage()
    renderizarItens()
}

function salvarLocalStorage() {
    window.localStorage.setItem('itens', itens)
}