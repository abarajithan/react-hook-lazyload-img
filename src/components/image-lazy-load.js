function ImageLazyLoad(props) {

    console.log(props);
    return (
        <div>
            <img className="image"alt="" orig-src={props.actualImage} src={props.lowQualityImage} />
        </div>
    )
    
}

export default ImageLazyLoad;