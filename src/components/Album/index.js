import React from 'react'
import AlbumItem from '../AblumItem';
const Album = ({data,onDelete,onUpdate}) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {data.map((element,index) => {
                        return(
                            <AlbumItem 
                                key={index} 
                                element={element} 
                                onDelete={onDelete} 
                                onUpdate={onUpdate}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Album;
