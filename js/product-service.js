const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};
const createProducs=(nombre,precio,imagen)=>{
    return fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{
            "Content-Type": "aplication/json",

        },
        body: JSON.stringify({
            nombre,
            precio,
            imagen,

        })
    }).then((res)=> res.json())
    .catch((err)=>console.log(err));
    
};
const deleteCard=(id)=>{
    return fetch(`http://localhost:3000/products?id=${id}`,{
        method:"DELETE"
    }).then((res)=>res.json())
    .catch((err)=>console.log(err));
}; 

export const servicesProducts = {
    productList,
    createProducs,
    deleteCard,
};
