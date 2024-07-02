import { servicesProducts } from "../product-service.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");


function createCard(nombre,precio,imagen,id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img class="card-img-container" src="${imagen}" alt="${nombre}" />
        <div class="card-container--info">
            <p>${nombre}</p>
            <div class="card-container--value">
            <p>$${precio} </p>
              <button class="delete-button" data-boton-borrar id="${id}">
                    <img src="./img/trash.png" alt="eliminar" />
                </button>
            </div>
        </div>
        </div>
    `
    const btnDelete = card.querySelector("[data-boton-borrar]");
        btnDelete.addEventListener("click", async () => {
        try {
            await servicesProducts.deleteCard(id);
            card.remove();
        } catch (error) {
            console.error("Error", error);
        }
        });


    productContainer.appendChild(card);
    return card;
}



const render = async () => {
    try{
        const listProducts = await servicesProducts.productList();
        //console.log(listProducts);
        listProducts.forEach((product) => {
                        productContainer.appendChild(
                            createCard(
                                product.nombre,
                                product.precio,
                                product.imagen,
                                product.id
                            )
                        );
            
        });
        

    }catch(error){
        console.log(error);

    }
    limpiar()

};

const limpiar = () =>{
    document.querySelector("[data-name]").value="";
    document.querySelector("[data-price]").value="";
    document.querySelector("[data-image]").value="";
    
};


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const imagen = document.querySelector("[data-image]").value;


    servicesProducts
    .createProducs(nombre,precio,imagen)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

});



render();