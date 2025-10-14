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
        
    const pData = document.createElement("p");
    pData.classList.add("texto-data");
    
    const agora = new Date();
    const dia  = agora.toLocaleDateString('pt-BR', {weekday: 'long'});
    const dataCompleta = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: undefined, hour12: false});

    pData.textContent = `${dia} (${dataCompleta}) às ${hora}`;
       
    div.appendChild(input);
    div.appendChild(pItem);
    li.appendChild(div);
    li.appendChild(pData);
    
    const addToList = document.getElementById("lista-de-compras");
    addToList.appendChild(li);

    const limparInput = document.getElementById("input-item").value = "";

    input.addEventListener('click', () => {
        if (input.checked){
            pItem.style.textDecoration = "line-through";
        } else {
            pItem.style.textDecoration = "none";
        }
    });
 
});


function formatarDataHora (locale = 'pt-BR', exibirSegundos = false){
    const agora = new Date();
    return agora.toLocaleString(locale, {
        weekday: 'long',
        year: 'numeric',
        // month: 'long',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: exibirSegundos ? '2-digit' : undefined,
        hour12: false
    });

}

console.log(formatarDataHora());

