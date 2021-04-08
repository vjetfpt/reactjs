import React from 'react'
import ProductItem from '../ProductItem'

const Products = ({data}) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        data.map((element, index) => {
                            return (
                                <ProductItem data={element} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
