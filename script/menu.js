document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.menu')
    const menuIcon = menuToggle.querySelector('i')

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active')
        const terbuka = menu.classList.contains('active')
        menuToggle.setAttribute('aria-expanded', terbuka)
        menuIcon.classList.toggle('fa-bars', !terbuka)
        menuIcon.classList.toggle('fa-xmark', terbuka)
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuToggle.setAttribute('aria-expanded', 'false')
            menuIcon.classList.remove(('fa-xmark'))
            menuIcon.classList.add(('fa-bars'))
        })
    })
})