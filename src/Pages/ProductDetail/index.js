import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const ProductDetail = () => {
    var url_api = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    const [infoItem, setInfoItem] = useState({});
    useEffect(() => {
        const getInfoItem = async () => {
            const response = await fetch(`${url_api}/albums/${id}`);
            const data = await response.json();
            setInfoItem(data);
        }
        getInfoItem();
    }, [])
    return (
        <>
            <p>Name: {infoItem.name}</p>
            <div>
                <img src={infoItem.avatar} alt={infoItem.name} />
            </div>
        </>
    )
}

export default ProductDetail
