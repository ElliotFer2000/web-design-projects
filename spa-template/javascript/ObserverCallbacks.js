function onElementVisible(entries,observer){

    for(let i=0; i<entries.length; i++){
        if(entries[i].isIntersecting){
           
            const element = entries[i].target
           switch(element){
                case backgroundPlant:{
                  element.style.animationName = "makePlantVisible";
                    observer.unobserve(element)
                    break;
                }
                case backgroundFlower:{
                    element.style.animationName = "makeFlowerVisible";
                    observer.unobserve(element)
                    break;
                }
                case presentationInfo:{
                   element.style.animationName =  "makePresentationInfoVisible";
                   observer.unobserve(element)
                   break;
                }
            }
        }
    }
}

export {onElementVisible}