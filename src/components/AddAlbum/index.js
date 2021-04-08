import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
const AddAlbum = ({ onAdd }) => {
    let history = useHistory();
    const { register, handleSubmit , errors } = useForm();
    const onSubmit = (data) => {
        if(data){
            onAdd(data);
        }
    };
    return (
        <div className="container">
            <h2>Thêm sản phẩm</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input type="text" 
                           name="name" 
                           className="form-control"
                           placeholder="Nhập tên sản phẩm"
                           ref={register({required:true,minLength:8})}/>
                           {errors.name && <span className="tex-danger">This field is required</span>}
                </div>
                <div className="form-group mb-2">
                    <input type="text" 
                           name="createdAt" 
                           className="form-control"
                           placeholder="Nhập ngày thêm sản phẩm"
                           ref={register({required:true})}/>
                           {errors.createdAt && <span className="tex-danger">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary" >Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default AddAlbum
