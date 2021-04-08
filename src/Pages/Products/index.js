import React from 'react'
import Album from '../../components/Album'
const ProductPage = ({albums,deleteItem,showUpdateItem}) => {
    return (
        <Album data={albums} onDelete={deleteItem} onUpdate={showUpdateItem} />
    )
}

export default ProductPage
