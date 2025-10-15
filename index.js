import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/vericarListaVazia.js";

const botaoSalvar = document.getElementById("adicionar-item");
const addToList = document.getElementById("lista-de-compras");

botaoSalvar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemDaLista();
  addToList.appendChild(itemDaLista);

  const limparInput = (document.getElementById("input-item").value = "");

  verificarListaVazia(addToList);
});

verificarListaVazia(addToList);

// function formatarDataHora(locale = "pt-BR", exibirSegundos = false) {
//   const agora = new Date();
//   return agora.toLocaleString(locale, {
//     weekday: "long",
//     year: "numeric",
//     // month: 'long',
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: exibirSegundos ? "2-digit" : undefined,
//     hour12: false,
//   });
// }

// console.log(formatarDataHora());
