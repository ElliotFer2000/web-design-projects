function TriggerNav(button,nav,navOverlay,classNameActiveNav,classNameActiveNavOverlay){


    function onClickTriggerNav(event) {
        nav.classList.toggle(classNameActiveNav)
        navOverlay.classList.toggle(classNameActiveNavOverlay)
    }

    function onClickNavOverlay(event){
      nav.classList.toggle(classNameActiveNav)
      navOverlay.classList.toggle(classNameActiveNavOverlay)
    }
    
    button.addEventListener("click",onClickTriggerNav)
    navOverlay.addEventListener("click",onClickNavOverlay)
}

export {TriggerNav}