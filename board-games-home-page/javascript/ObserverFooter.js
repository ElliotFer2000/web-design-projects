function testViewportForFooter(entries, observer) {

    if (bottomNav.offsetWidth !== 0) {
        entries[0].isIntersecting ? bottomNav.classList.add("nav__invisible") : bottomNav.classList.remove("nav__invisible")
    }
}

const footerObserver = new IntersectionObserver(testViewportForFooter)

export { footerObserver }