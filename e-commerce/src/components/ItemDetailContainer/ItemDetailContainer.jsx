import classD from "./ItemDetailContainer.module.css"
import{getProductsById} from "../../asyncMock"
import  {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemDetailContainer = () =>{

    const [products,setProducts] = useState([])
    const {id} = useParams()
 
    useEffect(()=>{
        getProductsById(id)
            .then(result =>{
                setProducts(result)
            })

    },[])

        return(
            <>
            <Link to="/" className="btn btn-success">back to Home</Link>
                <h1>Detail</h1>
              <ItemDetail product={products} ></ItemDetail>


            </>
        )
}

export default ItemDetailContainer