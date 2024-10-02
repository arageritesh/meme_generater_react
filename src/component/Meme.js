import React, { useState } from 'react'
import memesData from '../Data/memesData';
import './style.css'
function Meme() {
  
    const [memImage,setmemImage]=useState("http://i.imgflip.com/1bij.jpg")

    let url 

    function getmemImage()
     {
        const memesArray =memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
        setmemImage(memesArray[randomNumber].url)
     }
    return ( 
       <>
         <main>
            <p>
                {url}
            </p>
            <div className='form'>
                <input type='text' placeholder='Top text' className='form--input'/>
                <input type='text' placeholder='Bottom text' className='form--input'/>
                <button className='form--button' onClick={getmemImage}>
                    Get a new meme Image
                </button>
            </div>
            <div className="meme">
            <img src={memImage} className='meme--image' alt=''/>
                <img src={Meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{Meme.topText}</h2>
                <h2 className="meme--text bottom">{Meme.bottomText}</h2>
            </div>
         </main>
       </>
     );
}

export default Meme;