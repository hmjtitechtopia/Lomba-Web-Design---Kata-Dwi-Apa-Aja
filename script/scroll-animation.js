document.addEventListener('DOMContentLoaded', () => {
    observe('.ornamen', element => {
        element.classList.add('muncul-scroll')
    })

    addReveal('.container-peta .peta', 'reveal-left')
    addReveal('.peta-judul', 'reveal-up')
    addReveal('.kolom-peta', 'reveal-right')
    addReveal('.container-ensiklopedia .judul', 'reveal-up')
    addReveal('.container-ensiklopedia .display-kategori', 'reveal-left')
    addReveal('.container-ensiklopedia .wrap-right', 'reveal-right')
    addReveal('.galeri-heading', 'reveal-up')
    addReveal('.galeri-card', 'reveal-up')

    observe('.galeri-card', (card, index) => {
        card.style.transitionDelay = `${Math.min(index * 70, 560)}ms`
        card.classList.add('is-visible')
    }, 0.12)

    const artikelObserver = new MutationObserver(() => {
        document.querySelectorAll('.penjelasan article:not(.scroll-reveal)').forEach(article => {
            addRevealElement(article, 'reveal-up')
        })
    })

    artikelObserver.observe(document.body, { childList: true, subtree: true })

    document.querySelectorAll('.penjelasan article').forEach(article => {
        addRevealElement(article, 'reveal-up')
    })
})

function observe(selector, onShow, threshold = 0.08) {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }

            const index = [...elements].indexOf(entry.target)
            onShow(entry.target, index)
            observer.unobserve(entry.target)
        })
    }, {
        threshold,
        rootMargin: '0px 0px -6% 0px'
    })

    elements.forEach(element => observer.observe(element))
}

function addReveal(selector, direction) {
    document.querySelectorAll(selector).forEach(element => {
        addRevealElement(element, direction)
    })
}

function addRevealElement(element, direction) {
    element.classList.add('scroll-reveal', direction)
    observeOne(element)
}

function observeOne(element) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }

            showReveal(entry.target)
            observer.unobserve(entry.target)
        })
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
    })

    observer.observe(element)
}

function showReveal(element) {
    element.classList.add('is-visible', 'animate__animated')

    if (element.classList.contains('reveal-left')) {
        element.classList.add('animate__fadeInLeft')
    } else if (element.classList.contains('reveal-right')) {
        element.classList.add('animate__fadeInRight')
    } else {
        element.classList.add('animate__fadeInUp')
    }
}
