class Observer{

    static create = (callback) => {
        let options = {
            root: document.querySelector('#scrollableImagearea'),
            rootMargin: '0px',
            threshold: 0.25
        }
        return new IntersectionObserver(callback, options);
    }
    
}


export default Observer;