import React, {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';

const ImageList = (props) =>{
    const [images, setImages]=useState([]);
    let term="flowers";
    if(props.term){
        term=props.term;
        console.log("inside if", term);
    }    
    
    useEffect(()=>{   
        console.log("inside useEffect", term);     
        const getPicsFromBackend=async()=>{
            const response = await unsplash.get('/search/photos',{            
              params: { query: term }
        });
        setImages(response.data.results);
       }
       getPicsFromBackend();
    }, [term]);      
        


    
    
    const imagesArr=images.map((image) =>
        {
            return (
                <div className="ui card" style={{ marginTop: "10px" }}>
                    <div className="ui image">
                        <img src={image.urls.regular} alt={image.description} height={150} width={240}/>
                    </div>
                    <div className="ui content">
                        <p >{image.description}</p>
                    </div>
                    
                    
                </div>
            )
    })

    return <div className="ui grid">{imagesArr}</div>
}

export default ImageList;