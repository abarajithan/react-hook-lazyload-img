class Observer{

    static create = (callback) => {
        let options = {
            root:null,
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.05
        }
        return new IntersectionObserver(callback, options);
    }
    
}


export default Observer;