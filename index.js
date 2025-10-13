const inputItem = document.getElementById("input-item");

const botaoSalvar = document.getElementById("adicionar-item");

let contador = 0;


botaoSalvar.addEventListener("click", (evento) => {
    evento.preventDefault();

    //verifica se compo esta vazio
    if(inputItem.value === ""){
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
    
        
    const pItem = document.createElement("p");
    pItem.classList.add("texto-item");
    pItem.textContent = inputItem.value;
        
    //const pData = document.createElement("p");
        
    div.appendChild(input);
    div.appendChild(pItem);
    li.appendChild(div);


    const addToList = document.getElementById("lista-de-compras");
    addToList.appendChild(li);


    const limparInput = document.getElementById("input-item").value = "";

   
});

   

