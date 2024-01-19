const listProducts = [
  {
    id: "1",
    nameP: "Iphone 12 pro",
    img: "https://loop-mobile.co.uk/cdn/shop/products/iphone12_pro_max_gold_both_0efba546-88fb-40c0-b003-8a0207360063.jpg?v=1633000750",
    stock: 20,
    price: 874.000,
    description: "#",
    category: "Phones",
  },
  {
    id: "2",
    nameP: "Samsung Newsroom",
    img: "https://img.global.news.samsung.com/cl/wp-content/uploads/2019/01/Notebook-9-Pro-3-553x408.jpg",
    stock: 20,
    price: 266.000,
    description: "",
    category: "Notebook",
  },
  {
    id: "3",
    nameP: "Atomic Habits",
    img: "https://image-proxy-production.swag.com/convert/swag-prod/5ed96cf35310c31e1ca86abf.jpg?format=jpg&height=750",
    stock: 20,
    price: 467.000,
    description: "#",
    category: "Book",
  },
];


export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listProducts)
        }, 1000)
    })
}
export const getProductsByCategory = (categoryId)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(listProducts.filter(prod => prod.category === categoryId))
      }, 1000)
  })
}

export const getProductsById = (id)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(listProducts.find(prod => prod.id === id))
      }, 1000)
  })
}