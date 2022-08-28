import ItemCount from './ItemCount';

const ItemListContainer = ({producto, precio, img }) => {

    return (
        
        <div className="card">
            <img src={img} className="card-img-top" alt={producto} title={producto}></img>
            <div className="card-body">
                <h2 className="card-title">{producto}</h2>
                <p className="card-text">Descripción: Venta por Unidad</p>
                <p className="card-text">Precio:$ {precio}</p>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemListContainer