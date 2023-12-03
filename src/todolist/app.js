const btnEnviar = document.querySelector("#btnEnviar");
const iptConteudo = document.querySelector("#iptConteudo");
const listaItens = document.querySelector("#listaItens");
const msgremove = document.querySelector("#msgremove");

let itens = !window.localStorage.getItem("itens")
  ? []
  : window.localStorage.getItem("itens").split(",");

btnEnviar.addEventListener("click", adicionarItem);
window.addEventListener("load", renderizarItens);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (iptConteudo.value.trim() === "") return;

    itens.unshift(iptConteudo.value);

    iptConteudo.value = "";
    iptConteudo.focus();

    salvarLocalStorage();
    renderizarItens();
  }
});
function adicionarItem() {
  if (iptConteudo.value.trim() === "") return;

  itens.unshift(iptConteudo.value);

  iptConteudo.value = "";
  iptConteudo.focus();

  salvarLocalStorage();
  renderizarItens();
}

function renderizarItens() {
  listaItens.innerHTML = "";
  for (let i = 0; i < itens.length; ++i) {
    const itemLista = document.createElement("li");
    itemLista.setAttribute("itemId", i);

    itemLista.classList.add("item-lista");

    itemLista.innerHTML = itens[i];

    itemLista.onclick = aoClicarEm;
    listaItens.appendChild(itemLista);

    msgremove.innerHTML = "Clique no item para removê-lo";
  }
}

function aoClicarEm(event) {
  const element = event.target;
  removerItem(element.attributes.itemId.value);
}

function removerItem(id) {
  itens.splice(id, 1);
  salvarLocalStorage();
  renderizarItens();
  if (itens == 0) {
    msgremove.innerHTML = "";
  }
}

function salvarLocalStorage() {
  window.localStorage.setItem("itens", itens);
}
let boxprevisao = document.querySelector(".tempo-icon");
let boxicon = document.querySelector(".text-previsao-tempo");

boxprevisao.addEventListener("mouseenter", mouseEntrou);
boxprevisao.addEventListener("mouseout", mouseSaiu);
function mouseEntrou() {
  boxprevisao.style.background = "#2993c47c";
  boxicon.style.background = "#2993c47c";
}
function mouseSaiu() {
  boxprevisao.style.background = "#f5bba4";
  boxicon.style.background = "#f5bba4";
}
