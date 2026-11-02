
const data = [
    {
        nama: 'Seni Tari & Pertunjukan',
        isi: [
            {
                judul: 'Tari Kecak',
                deskripsi: 'Tari Kecak adalah seni pertunjukan tradisional dari Bali yang menggabungkan tarian, drama, dan paduan suara manusia. Puluhan penari laki-laki biasanya duduk melingkar sambil menyerukan bunyi “cak, cak, cak” secara berirama. Berbeda dari banyak tarian Bali lainnya, Tari Kecak tidak menggunakan gamelan sebagai pengiring utama, melainkan mengandalkan suara para penarinya. Tari Kecak berkembang sekitar tahun 1930-an melalui kerja sama seniman Bali I Wayan Limbak dan pelukis asal Jerman Walter Spies. Keduanya mengembangkan unsur vokal dari tradisi Sanghyang dan memadukannya dengan kisah Ramayana. Tari Kecak umumnya mengangkat kisah Ramayana, yaitu cerita tentang perjuangan Rama untuk menyelamatkan Dewi Sita yang diculik oleh Rahwana, Raja Alengka. Dalam perjalanannya, Rama mendapat bantuan dari Hanoman dan pasukan wanara atau kera. Hanoman kemudian berusaha menemui Sita dan menghadapi pasukan Rahwana. Salah satu adegan terkenal adalah ketika Hanoman membakar bagian dari kerajaan Alengka. Kisah ini berakhir dengan perjuangan Rama dan sekutunya melawan Rahwana. Tari Kecak menggambarkan perjuangan kebaikan melawan kejahatan. Pertunjukan ini juga mengandung nilai keberanian, kesetiaan, kerja sama, dan semangat pantang menyerah.',
                sumber: 'https://www.indonesia.travel/id/id/travel-ideas/culture/tari-kecak?utm'
            },
            {
                judul: 'Tari Pendet',
                deskripsi: 'Tari Pendet adalah tarian tradisional Bali yang awalnya merupakan tari pemujaan di pura. Tarian ini melambangkan penyambutan turunnya dewata ke alam dunia. Seiring perkembangan zaman, Tari Pendet juga dikembangkan sebagai tarian penyambutan. Pada awalnya, Tari Pendet digunakan dalam upacara keagamaan untuk memuja para dewa-dewi. Saat ini, tarian tersebut juga ditampilkan sebagai hiburan dan tari penyambutan. Tari Pendet memiliki gerakan yang dinamis. Dalam pertunjukannya, penari dapat membawa perlengkapan persembahan seperti sangku, kendi, cawan, dan perlengkapan sesajen lainnya. Tari Pendet mengandung nilai sakral dan religius.',
                sumber: 'https://id.wikipedia.org/wiki/Tari_Pendet'
            }
        ]
    },
    {
        nama: 'Gamelan & Musik Tradisional',
        isi: [
            {
                judul: 'Gamelan Rindik Bali',
                deskripsi: 'Rindik adalah alat musik tradisional Bali yang terbuat dari bambu. Alat musik ini dimainkan dengan cara dipukul sehingga menghasilkan melodi yang lembut dan menenangkan. Rindik sering digunakan dalam acara-acara adat, seperti pernikahan atau upacara keagamaan. Selain itu, alat musik ini juga dimainkan sebagai hiburan bagi wisatawan yang berkunjung ke Bali. Rindik bukan hanya sekadar alat musik, tetapi juga simbol keindahan dan ketenangan budaya Bali.',
                sumber: 'https://www.indonesia.travel/nl/nl/travel-ideas/culture/rindik?utm'
            },
            {
                judul: 'Gamelan Gong Kebyar',
                deskripsi: 'Gamelan Gong Kebyar adalah jenis musik gamelan yang paling umum dan sering dipentaskan di Bali. Musiknya dikenal dinamis, keras, dan memiliki tempo yang cepat. Gamelan Gong Kebyar digunakan untuk mengiringi berbagai pertunjukan seni di Bali, termasuk tarian tradisional dan kegiatan budaya. Kata kebyar menggambarkan bunyi yang cepat, tiba-tiba, dan keras. Gamelan ini menggunakan lima nada dasar dalam laras pelog serta berbagai instrumen, seperti gangsa, reyong, kendang, ceng-ceng, dan gong.',
                sumber: 'https://id.wikipedia.org/wiki/Gamelan_gong_kebyar'
            }
        ]
    },
    {
        nama: 'Tradisi & Upacara adat',
        isi: [
            {
                judul: 'Melasti',
                deskripsi: 'Melasti adalah ritual penyucian dalam tradisi Hindu Bali yang dilaksanakan menjelang Hari Raya Nyepi atau Tahun Baru Saka. Upacara ini dilakukan dengan membawa benda-benda sakral menuju laut atau sumber air sebagai bagian dari prosesi penyucian. Melasti merupakan bagian dari rangkaian perayaan Nyepi. Tradisi ini memiliki makna penyucian dan persiapan spiritual menjelang Tahun Baru Saka.',
                sumber: 'https://www.discoverasr.com/id/destinations/indonesia/bali/melasti-sebagai-ritual-penyucian-menjelang-tahun-baru-saka'
            },
            {
                judul: 'Ogoh - Ogoh',
                deskripsi: 'Ogoh-ogoh adalah patung berukuran besar yang biasanya berbentuk makhluk menyeramkan atau tokoh mitologi. Tradisi ini dikenal sebagai bagian dari perayaan menjelang Hari Raya Nyepi di Bali. Ogoh-ogoh diarak pada malam pengerupukan, sehari sebelum Nyepi. Patung ini dibuat dengan berbagai bahan dan melambangkan unsur negatif atau sifat buruk yang perlu dikendalikan.',
                sumber: 'https://id.wikipedia.org/wiki/Ogoh-ogoh'
            }
        ]
    },
    {
        nama: 'Bahasa & Aksara Bali',
        isi: [
            {
                judul: 'Aksara Bali',
                deskripsi: 'Aksara Bali atau Hanacaraka adalah sistem tulisan tradisional yang berasal dari Bali. Aksara ini digunakan terutama untuk menulis bahasa Bali, serta bahasa Jawa Kuno dan Sanskerta. Aksara Bali digunakan dalam penulisan bahasa, karya sastra, dan naskah tradisional seperti lontar. Pelestariannya membantu menjaga tradisi tulis, bahasa, dan pengetahuan yang diwariskan dari generasi ke generasi.',
                sumber: 'https://id.wikipedia.org/wiki/Aksara_Bali'
            }
        ]
    }
]
let currentCategory = ''

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display-kategori')

    if (display) {
        display.addEventListener('click', () => {
            showCategory(currentCategory)
        })
    }
})

document.addEventListener('kategoriensiklopedia:ubah', event => {
    clearPanel()
    currentCategory = event.detail.kategori
})

function showCategory(catName) {
    clearPanel()

    const category = data.find(item => item.nama === catName)
    if (!category) {
        return
    }

    const panel = document.createElement('section')
    panel.className = 'penjelasan'

    const title = document.createElement('h2')
    title.textContent = category.nama
    panel.appendChild(title)

    category.isi.forEach(item => {
        const article = document.createElement('article')
        const itemTitle = document.createElement('h3')
        const desc = document.createElement('p')

        itemTitle.textContent = item.judul
        desc.textContent = item.deskripsi
        article.append(itemTitle, desc)

        if (item.sumber) {
            const link = document.createElement('a')
            link.href = item.sumber
            link.textContent = 'Sumber'
            link.target = '_blank'
            link.rel = 'noopener noreferrer'
            article.appendChild(link)
        }

        panel.appendChild(article)
    })

    const ensi = document.querySelector('.container-ensiklopedia')
    ensi.insertAdjacentElement('afterend', panel)
    panel.scrollIntoView({ behavior: 'smooth' })
}

function clearPanel() {
    const oldPanel = document.querySelector('.penjelasan')
    if (oldPanel) {
        oldPanel.remove()
    }
}