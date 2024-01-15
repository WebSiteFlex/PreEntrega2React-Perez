
import {useState,useEffect} from "react"
import classIContainer from "./ItemListContainer.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () =>{
    const [product,setProduct] = useState([])

    useEffect(() =>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares")
            .then(response =>{
                return response.json()
            })
            .then(result => setProduct(result.results.slice(0,6)))
        },[])
    
    
    return(
        <>
            <h1 className={classIContainer.title}>Products</h1>
            <div className={classIContainer.containerCards}>
            {
                product.map(l => {
                    return (
                        <div key={l.id} className={classIContainer.containerPhones}>
                            <h2>{l.name}</h2>
                            <img src={l.thumbnail} alt="img" className={classIContainer.img} />
                            <p>${l.price}</p>
                            <button>
                                <ItemCount start={1} stock={20}></ItemCount>
                            </button>
                            <span>{l.category}</span>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default ItemListContainer