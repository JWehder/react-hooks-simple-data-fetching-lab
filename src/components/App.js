// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [isRendered, setRender] = useState(false)
    const [content, setContent] = useState('Loading...')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(data => {
                setContent(data.message);
                setRender(true);
            })
    }, [])

    if (!isRendered) return <p>Loading...</p>

    return <img src={content} alt= "A Random Dog"></img>
}

export default App;