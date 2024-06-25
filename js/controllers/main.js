import { servicesProducts } from "../product-service.js";

const productContainer = document.querySelector("[data-product]");

function createCard(nombre,precio,imagen,id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img class="card-img-container" src="${imagen}" alt="${nombre}" />
        <div class="card-container--info">
            <p>${nombre}</p>
            <div class="card-container--value">
            <p>${precio} </p>
            <img src="./img/trash.png" />
            </div>
        </div>
        </div>
    `
    productContainer.appendChild(card);
    return card;
}
const render = async () => {
    try{
        const listProducts = await servicesProducts.productList();
        //console.log(listProducts);
        

    }catch(error){
        console.log(error);

    }

};
render();