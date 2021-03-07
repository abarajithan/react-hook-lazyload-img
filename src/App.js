import './App.css';
import { useEffect, useState } from 'react';
import ImageLazyLoad from './components/image-lazy-load';
import Observer from './observer/interaction-observer';

let callback = (imagesOnView, observer)=>{
  console.log(imagesOnView);
  imagesOnView.forEach((image)=>{
    if(image.boundingClientRect.top <= 300){
      let imageElement = image.target;
      imageElement.setAttribute('src', imageElement.getAttribute("orig-src"));
      observer.unobserve(imageElement)
    }
  })
};

function App() {

  const [imagelist,setImageList] = useState([]);
  let [imageViewPortObserver,setImageViewPortObserver] = useState(null);

  

  useEffect(()=>{
    setImageViewPortObserver(Observer.create(callback));
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    .then(response=>setImageList(response.slice(0,100)))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        React hook - Image Lazy Load
      </header>
      <section id="scrollableImagearea">
        {
          imagelist.map((image,index)=>(
            <ImageLazyLoad key={index} imageIndex={index} observer={imageViewPortObserver} lowQualityImage={image.thumbnailUrl} actualImage={image.url}/>
          ))
        }
      </section>
    </div>
  );
}

export default App;
