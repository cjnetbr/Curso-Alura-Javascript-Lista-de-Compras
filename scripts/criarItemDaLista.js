import setDataHora from "./setDataHora.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
  //verifica se compo esta vazio
  if (inputItem.value === "") {
    alert("Por favor digite um item para adicionar a lista");
    return;
  }

  //criar os elementas da lista
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("lista-item-container");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "checkbox-" + contador++;

  input.addEventListener("click", () => {
    if (input.checked) {
      pItem.style.textDecoration = "line-through";
    } else {
      pItem.style.textDecoration = "none";
    }
  });

  const pItem = document.createElement("p");
  pItem.classList.add("texto-item");
  pItem.textContent = inputItem.value;

  const pData = document.createElement("p");
  pData.classList.add("texto-data");

  const dataHora = setDataHora();
  pData.textContent = dataHora;

  div.appendChild(input);
  div.appendChild(pItem);
  li.appendChild(div);
  li.appendChild(pData);

  return li;
}
