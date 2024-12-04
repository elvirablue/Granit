let buttonToggleMenu
let Menu
function handleResize() {
    closeMenu(buttonToggleMenu, Menu)
}
function toggleMenu(buttonToggleMenu, Menu) {
    document.body.classList.toggle('mobile-hidden')
    buttonToggleMenu?.classList.toggle('-open')
    Menu?.classList.toggle('-open')
}

function closeMenu(buttonToggleMenu, Menu) {
    const isOpenMenu = Menu?.classList.contains('-open')
    if (isOpenMenu) {
        document.body.classList.remove('mobile-hidden')
        buttonToggleMenu?.classList.remove('-open')
        Menu?.classList.remove('-open')
    }
}

const initNavigation = () => {
    buttonToggleMenu = document.body.querySelector('#toggleMenu')
    Menu = document.body.querySelector('#Menu')
    buttonToggleMenu?.addEventListener('click', () => toggleMenu(buttonToggleMenu, Menu))

    window.addEventListener('resize', handleResize)
    return true
}

initNavigation()

