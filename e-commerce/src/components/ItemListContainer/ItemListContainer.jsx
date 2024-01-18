
import { useState, useEffect } from "react"
import classIContainer from "./ItemListContainer.module.css"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import { getProducts,getProductsByCategory} from "../../asyncMock"
import Swal from 'sweetalert2'
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        // fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares")
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProduct(response) 
            })
            
    }, [categoryId])


    return (
        <>
            <h1 className={classIContainer.title}>Products</h1>
            <Link to="/" className="btn btn-success">Back to home</Link>
            <div className={classIContainer.containerCards}>
                {
                    product.map(l => {
                        return (
                            <div key={l.id} className={classIContainer.containerPhones}>
                                <h2>{l.nameP}</h2>
                                <img src={l.img} alt="img" className={classIContainer.img} />
                                <div className={classIContainer.containerPs}>
                                    <span className={classIContainer.price}>${l.price}</span>
                                    <p className={classIContainer.Stock}>Stock= {l.stock}</p>
                                </div>
                                <button>
                                    <ItemCount start={1} stock={20} onAdd={(quantity) =>{

                                        Swal.fire({
                                            title: "Aggregate amount",
                                            text: quantity,
                                            icon: "success"
                                        })

                                        localStorage.setItem("Stock", quantity);
                                    }
                                        
                                    }></ItemCount>
                                </button>
                                <span>{l.category}</span>
                                <Link to="/detail" className="btn btn-success">View Detail</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ItemListContainer