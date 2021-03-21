const ProductItem = ({data}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={data.image}/>
                <div className="card-body">
                    <p className="card-text">{data.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{data.id}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
