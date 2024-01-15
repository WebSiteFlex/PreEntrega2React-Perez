const listProducts = [
  {
    id: 1,
    nameP: "Iphone 12 pro",
    img: "https://loop-mobile.co.uk/cdn/shop/products/iphone12_pro_max_gold_both_0efba546-88fb-40c0-b003-8a0207360063.jpg?v=1633000750",
    stock: 12,
    price: 874.000,
    description: "#",
    category: "Phones",
  },
  {
    id: 1,
    nameP: "Samsung Galaxy A50",
    img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-30837/samsung_galaxy_a50-1024x768.jpg",
    stock: 12,
    price: 266.000,
    description: "",
    category: "Phones",
  },
  {
    id: 1,
    nameP: "Redmi Note 10",
    img: "https://cdn.laredoute.com/products/8/3/b/83b58830d0c7b38f48e4901b8507d215.jpg?width=500&dpr=1",
    stock: 12,
    price: 467.000,
    description: "#",
    category: "Phones",
  },
];


export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listProducts)
        }, 1000)
    })
}