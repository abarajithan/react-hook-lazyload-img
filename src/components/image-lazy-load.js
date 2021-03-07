import { useEffect } from "react";

function ImageLazyLoad(props) {

    useEffect(()=>{
        props.observer.observe(document.querySelector(`#image-${props.imageIndex}`));
    })

    return (
        <div>
            <img id={`image-${props.imageIndex}`} className="image" alt="" orig-src={props.actualImage} src={props.lowQualityImage} />
        </div>
    )
    
}

export default ImageLazyLoad;