import React from 'react'

const ManagerProducts = ({ albums, deleteItem }) => {
    return (
        <>
            <h3>Quản lý sản phẩm</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map((element,index)=>{
                            return (
                                <tr key={element.id}>
                                    <th scope="row">{element.id}</th>
                                    <td>{element.name}</td>
                                    <td>
                                        <img src={element.avatar} alt={element.name} />
                                    </td>
                                    <td>{element.createdAt}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger" 
                                            onClick={()=>deleteItem(element.id)}
                                            >Xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default ManagerProducts
