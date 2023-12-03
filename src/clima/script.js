const key = "369a67fc3cecc66ceb85da9728f77ec3";

function mostrarNaTela(dados) {
  document.querySelector(".text-cidade").innerHTML =
    dados.name + " - " + dados.sys.country;
  document.querySelector(".text-temperatura").innerHTML =
    "Temp. " + Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".text-clima").innerHTML =
    dados.weather[0].description;
  document.querySelector(".text-umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".img-clima"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function pegarDados(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  mostrarNaTela(dados);
}

function clicarPesquisar() {
  const cidade = document.querySelector(".input-cidade").value;
  pegarDados(cidade);
}
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const cidade = document.querySelector(".input-cidade").value;
    pegarDados(cidade);
  }
});
let boxprevisao = document.querySelector(".todolist-icon");
let boxicon = document.querySelector(".todolist");

boxprevisao.addEventListener("mouseenter", mouseEntrou);
boxprevisao.addEventListener("mouseout", mouseSaiu);
function mouseEntrou() {
  boxprevisao.style.background = "#fd9749b6";
  boxicon.style.background = "#fd9749b6";
}
function mouseSaiu() {
  boxprevisao.style.background = "#8ecae6";
  boxicon.style.background = "#8ecae6";
}
