
function MainSidenav() {
    
    const instance = M.Sidenav.init(document.querySelector(".header__sidenav"),{edge: 'right'});
    return instance
}

export {MainSidenav}