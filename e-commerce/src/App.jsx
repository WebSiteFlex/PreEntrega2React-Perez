// import IconCart from "./components/IconCart/IconCart";
import NavBar from "./components/NavBar/NavBar"

import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      {/* <ItemCount start={1} disabled={()=>
        !start ? Swal.fire({
          title: "Opps...",
          text: "there isn´t any stock",
          icon: "error"
        }) : console.warm("there isn´t any stock")
      } stock={20} onAdd={(quantity)=>
      Swal.fire({
        title:"Aggregate amount",
        text: quantity,
        icon: "success"
      })
       }></ItemCount> */}
    
      
    </>
  )
}

export default App
