import React, { useEffect, useState } from 'react'
import UpdateItem from '../../components/UpdateItem'
const UpdateProduct = ({ onUpdate }) => {
    return (
        <UpdateItem onUpdate={onUpdate}/>
    )
}

export default UpdateProduct
