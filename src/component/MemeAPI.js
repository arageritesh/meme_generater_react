import React, { useState, useEffect } from 'react';



function Memeapi() {
    const [meme, setMeme]=useState({
        toptext:"",
        bottomtext:"",
        randomimage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allmemes,setAllMemes]=useState([])
    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=> setAllMemes(data.data.memes))
    },[])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allmemes.length)
        const url = allmemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomimage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return ( 
        <>
         <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}
                />
                <input type="text" placeholder="Bottom text" className="form--input"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomimage} className="meme--image" />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
        </main>
       </>
     );
}

export default Memeapi;