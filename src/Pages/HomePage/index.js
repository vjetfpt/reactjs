import React from 'react'
import AlbumExample from '../../components/Album_Example';
const HomePage = ({albums}) => {
    console.log("home page", albums);
    return (
        <div>
            <AlbumExample />
        </div>
    )
}

export default HomePage
