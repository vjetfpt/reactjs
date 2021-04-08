import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
const UpdateItem = ({ onUpdate }) => {
    let history = useHistory();
    var url_api = process.env.REACT_APP_API_URL;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        if (data) {
            const item={
                ...infoItem,
                ...data
            }
            onUpdate(item);
            history.push("/products");
        }
    };
    // let history = useHistory();
    const { id } = useParams();
    const [infoItem, setInfoItem] = useState({});
    useEffect(() => {
        const getItem = async () => {
            console.log("id đây là: ", id);
            const response = await fetch(`${url_api}/albums/${id}`);
            const dataItem = await response.json();
            setInfoItem(dataItem);
        }
        getItem();
    }, [])
    // console.log("id: ", id);
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data =>{
    //     const newItem={
    //         ...item,
    //         ...data
    //     }
    //     onUpdate(newItem);
    //     history.push("/products");
    // };
    // const onSubmit=data=>console.log(data);
    return (
        <div className="container">
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nhập tên sản phẩm"
                        defaultValue={infoItem.name}
                        ref={register({ required: true, minLength: 8 })}
                    />
                    {errors.name && <span className="tex-danger">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary" >Sửa sản phẩm</button>
            </form>
        </div>
    )
}

export default UpdateItem
