import React from 'react'
import { Link } from 'react-router-dom'

const AlbumItem = ({ element, onDelete, onUpdate }) => {
    return (
        <div className="col" key={element.id}>
            <div className="card shadow-sm">
                <Link to={"/products/" + element.id}>
                    <img src={element.avatar} alt="" />
                </Link>
                <div className="card-body">
                    <p className="card-text">{element.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={"update-product/" + element.id}>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    >Sửa</button>
                            </Link>
                            <button
                                type="button"
                                onClick={() => onDelete(element.id)}
                                className="btn btn-sm btn-outline-secondary">Xóa</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumItem
