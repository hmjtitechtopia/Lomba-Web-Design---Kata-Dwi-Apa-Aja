if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

const kembaliKeBeranda = () => {
    const navigasi = performance.getEntriesByType('navigation')[0]

    if (!navigasi || navigasi.type !== 'reload') {
        return
    }

    history.replaceState(null, '', `${location.pathname}${location.search}`)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
}

window.addEventListener('DOMContentLoaded', kembaliKeBeranda)
window.addEventListener('pageshow', kembaliKeBeranda)

const tombolEksplore = document.querySelector('.btn-explore')

if (tombolEksplore) {
    tombolEksplore.addEventListener('animationend', event => {
        event.currentTarget.classList.remove(
            'animate__animated',
            'animate__fadeInUp',
            'animate__delay-1s'
        )
    })
}
