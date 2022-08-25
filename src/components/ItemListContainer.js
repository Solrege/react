

const ItemListContainer = ({producto, precio, img }) => {

    return (
        
        <div className="card">
            <img src={img} className="card-img-top" alt={producto} title={producto}></img>
            <div className="card-body">
                <h2 className="card-title">{producto}</h2>
                <p className="card-text">Descripción: Venta por docena</p>
                <p className="card-text">Precio:$ {precio}</p>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    )
}

export default ItemListContainer