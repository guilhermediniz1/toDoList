const btnEnviar = document.querySelector('#btnEnviar')
const iptConteudo = document.querySelector('#iptConteudo')
const listaItens = document.querySelector('#listaItens')

btnEnviar.addEventListener('click', adicionarItem) 

function adicionarItem() {  
    if(iptConteudo.value.trim() === "") 
        return

    const itemLista = document.createElement('li')
    itemLista.classList.add('item-lista')
    itemLista.innerHTML = iptConteudo.value
    listaItens.appendChild(itemLista)
    iptConteudo.value = ''
    iptConteudo.focus()
}