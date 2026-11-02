document.addEventListener('DOMContentLoaded', () => {
    const peta = document.querySelector('.peta svg')

    if (!peta) {
        return
    }

    const wilayah = [
        { nomor: 0, nama: 'Buleleng' },
        { nomor: 1, nama: 'Jembrana' },
        { nomor: 2, nama: 'Tabanan' },
        { nomor: 3, nama: 'Badung' },
        { nomor: 4, nama: 'Gianyar' },
        { nomor: 5, nama: 'Bangli' },
        { nomor: 6, nama: 'Karangasem' },
        { nomor: 7, nama: 'Denpasar' },
        { nomor: 8, nama: 'Klungkung' }
    ]

    const wilayahElement = [...peta.querySelectorAll(':scope > use')]

    wilayah.forEach(data => {
        const element = wilayahElement[data.nomor]

        if (!element) {
            return
        }

        element.classList.add('wilayah-peta')
        element.dataset.wilayah = data.nama
    })

    const labels = peta.querySelectorAll('.map-labels text')
    labels.forEach(label => {
        const nama = label.textContent.replace(/^Kab\.\s*/, '').trim()
        const dataWilayah = wilayah.find(data => data.nama === nama)
        let element = null

        if (dataWilayah) {
            element = wilayahElement[dataWilayah.nomor]
        }

        if (!element) {
            return
        }

        label.dataset.wilayah = nama
    })

    document.addEventListener('wilayah:dipilih', event => {
        aktifkanWilayah(event.detail.nama, peta, wilayahElement)
    })

    document.addEventListener('wilayah:reset', () => {
        peta.classList.remove('memiliki-wilayah-aktif')
        wilayahElement.forEach(element => element.classList.remove('wilayah-aktif'))
        peta.querySelectorAll('.map-labels text.label-aktif')
            .forEach(label => label.classList.remove('label-aktif'))
    })
})

function aktifkanWilayah(nama, peta, wilayahElement) {
    document.querySelectorAll('.wilayah-peta.wilayah-aktif').forEach(wilayah => {
        wilayah.classList.remove('wilayah-aktif')
    })
    document.querySelectorAll('.map-labels text.label-aktif').forEach(label => {
        label.classList.remove('label-aktif')
    })

    peta.classList.add('memiliki-wilayah-aktif')

    const element = wilayahElement.find(wilayah => wilayah.dataset.wilayah === nama)

    if (element) {
        element.classList.add('wilayah-aktif')
    }

    document.querySelectorAll(`.map-labels text[data-wilayah="${nama}"]`)
        .forEach(label => label.classList.add('label-aktif'))
}