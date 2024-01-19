import classD from "./ItemDetailContainer.module.css"
import{getProductsById} from "../../asyncMock"
import  {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
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
                <div>
                    <div>
                        <img src={products.img} alt="img" />
                    </div>
                    <div>
                        <h2>{products?.nameP}</h2>
                        <p>{products.description}</p>
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
                    </div>

                </div>


            </>
        )
}

export default ItemDetailContainer