const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};
const createProducs=(nombre,precio,imagen)=>{
    return fetch("http://localhost:3000/products",{
        method:"POST",
        header:{
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

export const servicesProducts = {
    productList,
    createProducs,
};