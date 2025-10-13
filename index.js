function addToList() {
    const getItem = document.getElementById("input-item").value.trim();

    if(getItem === ""){
        alert("Por favor digite um item para adicionar a lista")
    }

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("lista-item-container");
    
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "checkbox-1";
    
    const pItem = document.createElement("p");
    pItem.classList.add("texto-item");
    pItem.textContent = getItem;
    
    //const pData = document.createElement("p");
    
    div.appendChild(input);
    div.appendChild(pItem);
    li.appendChild(div);
    document.getElementById("lista-de-compras").appendChild(li)

   
    
    
    // <li>
    //         <div class="lista-item-container">
    //           <input type="checkbox" id="checkbox-1" />
    //           <p>Ração de gato</p>
    //         </div>
    //         <p class="texto-data">Segunda-feira (31/10/2022) às 08:30</p>
    // </li>

    console.log(li);
}
