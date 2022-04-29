import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import crown from './crown.png'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2"> <img alt='Logo' src={crown} width={115} height={125}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo