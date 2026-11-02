
document.addEventListener('DOMContentLoaded', () => {
    const kategoriScroll = document.querySelector('.kategori-scrolling')
    const displayKategori = document.querySelector('.display-kategori')
    const arrowAtas = document.querySelector('.arrow-atas')
    const arrowBawah = document.querySelector('.arrow-bawah')

    const gambarKategori = [
        { nama: 'Seni Tari & Pertunjukan', src: 'assets/ensiklopedia/img3.jpeg' },
        { nama: 'Gamelan & Musik Tradisional', src: 'assets/ensiklopedia/img2.jpeg' },
        { nama: 'Tradisi & Upacara adat', src: 'assets/ensiklopedia/img4.jpeg' },
        { nama: 'Bahasa & Aksara Bali', src: 'assets/ensiklopedia/img5.jpeg' }
    ]

    let currentIndex = 0
    kategoriScroll.after(arrowBawah)

    function mainkanAnimasiKategori(arah) {
        const elemen = [kategoriScroll, displayKategori]
        let kelas = 'kategori-fade-up'

        if (arah === 'atas') {
            kelas = 'kategori-fade-down'
        }

        elemen.forEach(item => {
            item.classList.remove('kategori-fade-up', 'kategori-fade-down')
            void item.offsetWidth
        })

        requestAnimationFrame(() => {
            elemen.forEach(item => item.classList.add(kelas))
        })
    }

    function tampilkanKategori(arah = 'mulai') {
        kategoriScroll.classList.remove('kategori-fade-up', 'kategori-fade-down')
        displayKategori.classList.remove('kategori-fade-up', 'kategori-fade-down')

        kategoriScroll.innerHTML = ''

        const total = gambarKategori.length
        const indexAtas = (currentIndex - 1 + total) % total
        const indexBawah = (currentIndex + 1) % total

        const urutan = [
            indexAtas,
            currentIndex,
            indexBawah
        ];

        urutan.forEach((index, posisi) => {
            const data = gambarKategori[index]
            const itm = document.createElement('div')
            itm.classList.add('item-kategori')

            if (posisi === 1) {
                itm.classList.add('is-current')
            }

            const img = document.createElement('img')
            img.src = data.src
            img.alt = data.nama
            const nama = document.createElement('span')
            nama.textContent = data.nama
            nama.style.fontFamily = 'Eagle Lake'
            itm.appendChild(img)
            itm.appendChild(nama)
            kategoriScroll.appendChild(itm)
        })

        displayKategori.innerHTML = ''

        const preview = document.createElement('img')
        preview.src = gambarKategori[currentIndex].src
        preview.alt = gambarKategori[currentIndex].nama
        displayKategori.appendChild(preview)

        const label = document.createElement('span')
        label.className = 'display-kategori-label'
        label.textContent = 'Lihat Selengkapnya'
        displayKategori.appendChild(label)
        document.dispatchEvent(new CustomEvent('kategoriensiklopedia:ubah', {
            detail: { kategori: gambarKategori[currentIndex].nama }
        }))

        if (arah !== 'mulai') {
            mainkanAnimasiKategori(arah)
        }
    }

    arrowAtas.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + gambarKategori.length) % gambarKategori.length
        tampilkanKategori('atas')

        const inputDaerah = document.querySelector('#inputDaerah')
        const tombolBudaya = document.querySelector('.btn-detail-budaya')
        const daerahValid = [...document.querySelectorAll('#daftarDaerah option')]
            .map(option => option.value.toLowerCase())

        tombolBudaya.addEventListener('click', () => {
            const daerah = inputDaerah.value.trim()

            if (!daerahValid.includes(daerah.toLowerCase())) {
                inputDaerah.setCustomValidity('Pilih kabupaten atau kota yang tersedia.')
                inputDaerah.reportValidity()
                inputDaerah.focus()
                return
            }

            inputDaerah.setCustomValidity('')
            document.querySelector('.peta').scrollIntoView({ behavior: 'smooth' })
        })

        inputDaerah.addEventListener('input', () => inputDaerah.setCustomValidity(''))
    })

    arrowBawah.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % gambarKategori.length
        tampilkanKategori('bawah')
    })

    tampilkanKategori()
})