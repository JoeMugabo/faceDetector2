import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonChange }) => {
    return (
        <div className='f3'>
                <p>This App was given a crown for being the best in detecting faces!</p>
           <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='w-70 pa2' type='text' onChange={onInputChange}/>
                    <button className='w-30 link br2 f4 dib grow ph3 pv2' onClick={onButtonChange} >
                        Detect
                        </button>
                </div>
           </div>
        </div>
    )
}

export default ImageLinkForm