const mainHeaderButtonMenu = window["main-header-button-menu"]
const mainNav = window["main-nav"]
const navBarOverlay = document.querySelector(".nav-bar-overlay")

function onClickTriggerSideBar(evt){
   navBarOverlay.classList.toggle("open-nav-bar-overlay")
   mainNav.classList.toggle("open-nav-bar")
}

function onClickOutsideSidebarOpen(evt){
   mainNav.classList.toggle("open-nav-bar")
   navBarOverlay.classList.toggle("open-nav-bar-overlay")
}

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(elems, options);
});

mainHeaderButtonMenu.addEventListener("click",onClickTriggerSideBar)
navBarOverlay.addEventListener("click",onClickOutsideSidebarOpen)





