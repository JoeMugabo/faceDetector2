import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = () => {
    return (
        <div className='f3'>
                <p>This website was given a crown for being the best in detecting faces!</p>
           <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='w-70 pa2' type={'text'}/>
                    <button className='w-30 link br2 f4 dib grow ph3 pv2'>Detect</button>
                </div>
           </div>
        </div>
    )
}

export default ImageLinkForm