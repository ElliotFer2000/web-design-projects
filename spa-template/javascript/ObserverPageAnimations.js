function ObserverPageAnimations(elementsToAnimate,callback){
 
    if(elementsToAnimate.lenght){
        const observer = new IntersectionObserver(callback,{threshold: [0.1]})

        for(let i in elementsToAnimate){
            observer.observe(elementsToAnimate[i])
        }

        return observer
    }
}

export {ObserverPageAnimations}