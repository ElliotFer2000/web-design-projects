const root = document.documentElement

function DropdownHandlerClick(event){
   event.stopPropagation()
   mainHeaderDropdownMenuProfile.classList.toggle("main-header-dropdown-menu-profile-open");
}

function onDropdownClickOutside(){
  mainHeaderDropdownMenuProfile.classList.remove("main-header-dropdown-menu-profile-open");
}

window.addEventListener("click",onDropdownClickOutside)
mainHeaderUsernameCardLink.addEventListener("click",DropdownHandlerClick)

toggleDropdown = DropdownHandlerClick

