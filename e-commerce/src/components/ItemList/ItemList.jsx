import classItem from "./ItemList.module.css"

const ItemList = ({ products }) => {
    return (
        <div className={classItem.containerCards}>
            {
                products.map(l => {
                    return (
                        <div key={l.id} className={classItem.containerPhones}>
                            <h2>{l.name}</h2>
                            <img src={l.img} alt="img" className={classItem.img} />
                            <p>${l.price}</p>
                            <span>{l.category}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ItemList