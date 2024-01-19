
import { useState, useEffect } from "react"
import classIContainer from "./ItemListContainer.module.css"
import { getProducts,getProductsByCategory} from "../../asyncMock"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { Link } from "react-router-dom"

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
            <div>
                <ItemList products={product}></ItemList>
            </div>
        </>
    )
}
export default ItemListContainer