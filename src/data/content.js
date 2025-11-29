import { MapPin, Briefcase, Users, Award, Globe } from 'lucide-react';

// --- HELPER: Random Image Generator ---
// Digunakan untuk mengisi foto anggota di dalam diagram struktur agar tidak kosong
const getImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=200`;

// --- HELPER: Template Struktur Standar ---
// Digunakan untuk 6 kampus lainnya agar kodenya tidak terlalu panjang
const createStructureChildren = () => [
  {
    role: 'Wakil Ketua',
    name: 'Nama Wakil',
    img: getImg('1507003211169-0a1dd7228f2d'),
    desc: 'Mendampingi ketua dan mengawasi kinerja setiap divisi.',
    children: [
      {
        role: 'Sekretaris & Bendahara',
        isGroup: true,
        children: [
          { role: 'Sekretaris I', name: 'Nama Sek 1', img: getImg('1494790108377-be9c29b29330'), desc: 'Mengelola administrasi.' },
          { role: 'Sekretaris II', name: 'Nama Sek 2', img: getImg('1438761681033-6461ffad8d80'), desc: 'Jadwal & Arsip.' },
          { role: 'Bendahara I', name: 'Nama Ben 1', img: getImg('1544005313-94ddf0286df2'), desc: 'Keuangan Utama.' },
          { role: 'Bendahara II', name: 'Nama Ben 2', img: getImg('1552058544-f2b08422138a'), desc: 'Pembukuan Transaksi.' },
        ],
      },
      {
        role: 'Divisi & Koor',
        isGroup: true,
        children: [
          { role: 'Humas I', name: 'Nama Humas 1', img: getImg('1534528741775-53994a69daeb'), desc: 'Relasi Eksternal.' },
          { role: 'Humas II', name: 'Nama Humas 2', img: getImg('1517841905240-472988babdf9'), desc: 'Media Partner.' },
          { role: 'Koor UKM I', name: 'Nama Koor 1', img: getImg('1539571696357-5a69c17a67c6'), desc: 'Koordinasi UKM.' },
          { role: 'Koor UKM II', name: 'Nama Koor 2', img: getImg('1522529599102-193c0d76b5b6'), desc: 'Monitoring UKM.' },
          { role: 'PDD I', name: 'Nama PDD 1', img: getImg('1531427186611-ecfd6d936c79'), desc: 'Desain Visual.' },
          { role: 'PDD II', name: 'Nama PDD 2', img: getImg('1506794778202-cad84cf45f1d'), desc: 'Dokumentasi.' },
          { role: 'PSDM I', name: 'Nama PSDM 1', img: getImg('1519085360753-af0119f7cbe7'), desc: 'Pengembangan SDM.' },
          { role: 'PSDM II', name: 'Nama PSDM 2', img: getImg('1472099645785-5658abf4ff4e'), desc: 'Database Anggota.' },
        ],
      },
      {
        role: 'Unit Kegiatan Mahasiswa',
        isGroup: true,
        children: [
          { role: 'Ketua UKM 1', name: 'Nama Ketua', img: getImg('1535713875002-d1d0cf377fde'), desc: 'Kegiatan UKM A.' },
          { role: 'Ketua UKM 2', name: 'Nama Ketua', img: getImg('1521791136064-7986c2920216'), desc: 'Kegiatan UKM B.' },
          { role: 'Ketua UKM 3', name: 'Nama Ketua', img: getImg('1500648767791-00dcc994a43e'), desc: 'Kegiatan UKM C.' },
          { role: 'Ketua UKM 4', name: 'Nama Ketua', img: getImg('1562774053-701939374585'), desc: 'Kegiatan UKM D.' },
        ],
      },
    ],
  },
];

export const siteData = {
  // --- HERO SECTION ---
  hero: {
    titleSmall: 'POLITEKNIK LP3I JAKARTA',
    titleBig: 'KABINET INTEGRASI ASA',
    desc: 'Mewujudkan BEM Politeknik LP3I Jakarta sebagai inkubator pergerakan yang progresif, adaptif, dan berintegritas.',
  },

  // --- FOOTER SECTION ---
  footer: {
    address: 'Politeknik LP3I Jakarta\nGedung Sentra Kramat, Jl. Kramat Raya No. 7-9, Jakarta Pusat',
    website: 'bem.lp3i.ac.id',
    socials: {
      instagram: 'bem.lp3i',
      twitter: 'bem_lp3i',
      youtube: 'BEM LP3I Official',
      email: 'bem@lp3i.ac.id',
      tiktok: 'bem.lp3i.official',
      linkedin: 'BEM Politeknik LP3I Jakarta',
      whatsapp: '6281234567890',
    },
  },

  // --- LEADERS (PRES & WAPRES) ---
  leaders: [
    {
      role: 'Presiden Mahasiswa',
      name: 'Satria Airlangga Gunawan',
      img: '/images/integrasi-asa/satria.jpg',
      funFact: 'Sering ketiduran pas zoom meeting.',
      focus: 'Bertanggung jawab penuh atas arah gerak organisasi, menjaga stabilitas politik kampus, dan menjadi representasi utama mahasiswa di tingkat institusi maupun nasional.',
      socials: { instagram: 'satria.air', linkedin: 'satria-airlangga', whatsapp: '628123456789' },
    },
    {
      role: 'Wakil Presiden Mahasiswa',
      name: 'Salwa Latipah',
      img: '/images/integrasi-asa/salwa.jpg',
      funFact: 'Kolektor stiker kucing di WhatsApp.',
      focus: 'Mengawasi kinerja internal kementerian, memastikan harmonisasi antar pengurus, dan menggantikan peran Presiden Mahasiswa saat berhalangan.',
      socials: { instagram: 'salwa.l', tiktok: 'salwa.dance' },
    },
  ],

  // --- COORDINATORS (KEU, SKI, SEKRET) ---
  coordinators: [
    {
      role: 'Koordinator Keuangan',
      name: 'Hani Luthfia Chasan',
      img: '/images/integrasi-asa/hani.jpg',
      funFact: 'Jago hitung duit tapi lupa dompet sendiri.',
      focus: 'Mengelola sirkulasi keuangan organisasi yang transparan, akuntabel, serta merumuskan kebijakan fiskal untuk keberlangsungan program kerja.',
      socials: { instagram: 'hani.luthfia' },
      children: [
        {
          role: 'Biro Anggaran',
          name: 'Annisa Oktaviani',
          img: '/images/integrasi-asa/annisa.jpg',
          funFact: 'Bisa hafal harga cilok se-kampus.',
          focus: 'Menyusun Rencana Anggaran Biaya (RAB) organisasi dan memonitoring alur keluar-masuk dana setiap kegiatan.',
          socials: { instagram: 'annisa.okt' },
        },
        {
          role: 'Biro Ekonomi Kreatif',
          name: 'Sarah Amalia Putri',
          img: '/images/integrasi-asa/sarah.jpg',
          funFact: 'Queen of thrift shopping.',
          focus: 'Mengembangkan unit usaha mandiri BEM melalui merchandise dan kemitraan bisnis untuk kemandirian finansial organisasi.',
          socials: { instagram: 'sarah.ap' },
        },
      ],
    },
    {
      role: 'Kepala SKI (Satuan Kontrol Internal)',
      name: 'Ari Masfufah',
      img: '/images/integrasi-asa/ari.jpg',
      funFact: 'Hafal pasal-pasal AD/ART di luar kepala, jangan coba-coba melanggar.',
      focus: 'Bertanggung jawab atas pengawasan kinerja fungsionaris, audit internal, serta penegakan kedisiplinan dan SOP organisasi (Check & Balance).',
      socials: { instagram: 'ari.masfufah', email: 'ari@ski.bem' },
    },
    {
      role: 'Koordinator Sekretariat',
      name: 'Cyntya Dwy Syamaryah',
      img: '/images/integrasi-asa/cyntya.jpg',
      funFact: 'Paling rapih nyatet notulensi, font-nya Comic Sans.',
      focus: 'Menata sistem administrasi, kearsipan surat-menyurat, serta mengelola inventaris dan jadwal kegiatan organisasi agar tertib.',
      socials: { instagram: 'cyntya.ds', twitter: 'cyntya_tweet' },
    },
  ],

  // --- KEMENKO (DEPARTMENTS) ---
  kemenkos: [
    {
      title: 'Kemenko Dalam Negeri',
      groupImg: '/images/integrasi-asa/dalam-negeri.jpg',
      coordinator: {
        name: 'Irfansyah Akbar',
        img: '/images/integrasi-asa/irfan.jpg',
        funFact: 'Pernah nyasar di gedung sendiri.',
        focus: 'Mengoordinasikan pengembangan potensi internal mahasiswa serta menjaga stabilitas dinamika organisasi intra kampus.',
        socials: { instagram: 'irfansyah.akbar' },
      },
      desc: 'Mengkoordinasikan pergerakan internal kampus dan pengembangan sumber daya mahasiswa.',
      ministries: [
        {
          name: 'Kementerian PSDM',
          minister: 'Intanaya Desti',
          img: '/images/integrasi-asa/intan.jpg',
          funFact: 'Bisa menatap mata tanpa kedip 5 menit.',
          focus: 'Melakukan kaderisasi, upgrading skill pengurus, dan manajemen sumber daya manusia mahasiswa agar lebih kompeten.',
          socials: { instagram: 'intanaya' },
        },
        { name: 'Kementerian Agama', minister: 'Vacant / TBA', img: null, funFact: 'Segera hadir.', focus: 'Memfasilitasi kegiatan keagamaan lintas iman dan menjaga toleransi di lingkungan kampus.' },
        { name: 'Kementerian Peng. Keilmuan', minister: 'Vacant / TBA', img: null, funFact: 'Masih misterius.', focus: 'Mengembangkan budaya literasi, riset, dan diskusi ilmiah untuk menunjang wawasan akademik mahasiswa.' },
        {
          name: 'Kementerian Seni Budaya',
          minister: 'Fitria Azahra Hata U',
          img: '/images/integrasi-asa/fitri.jpg',
          funFact: 'Jago tari saman sambil kayang.',
          focus: 'Mewadahi minat bakat mahasiswa di bidang kesenian serta melestarikan budaya nusantara melalui pentas kreatif.',
          socials: { instagram: 'fitria.zahra' },
        },
        { name: 'Kementerian Olahraga', minister: 'Vacant / TBA', img: null, funFact: 'Segera hadir.', focus: 'Menyelenggarakan kompetisi olahraga dan memfasilitasi atlet kampus untuk berprestasi di tingkat regional maupun nasional.' },
      ],
    },
    {
      title: 'Kemenko Luar Negeri',
      groupImg: '/images/integrasi-asa/luar-negeri.jpg',
      coordinator: {
        name: 'Novela Widya Putri',
        img: '/images/integrasi-asa/puput.jpg',
        funFact: 'Punya 5 bahasa... cinta.',
        focus: 'Membangun jejaring diplomasi strategis dengan instansi pemerintah, swasta, dan organisasi mahasiswa kampus lain.',
        socials: { instagram: 'novela.wp' },
      },
      desc: 'Membangun relasi strategis dan kolaborasi dengan pihak eksternal kampus.',
      ministries: [
        {
          name: 'Kementerian HUBEX',
          minister: 'Aurelia Callista T',
          img: '/images/integrasi-asa/aurel.jpg',
          funFact: 'Kenal sama semua satpam kampus.',
          focus: 'Menjalin hubungan baik dengan alumni, media partner, dan stakeholder eksternal untuk memperluas eksposur BEM.',
          socials: { instagram: 'aurelia.ct' },
        },
        {
          name: 'Kementerian Kolaborasi Kampus',
          minister: 'Finki Aprilia',
          img: '/images/integrasi-asa/finki.jpg',
          funFact: 'Suka ngopi di 3 tempat berbeda sehari.',
          focus: 'Menciptakan program kerja kolaboratif dengan BEM fakultas lain atau organisasi kemahasiswaan tingkat nasional.',
          socials: { instagram: 'finki.ap' },
        },
      ],
    },
    {
      title: 'Kemenko Informasi & Publikasi',
      groupImg: '/images/integrasi-asa/medpub.jpg',
      coordinator: {
        name: 'Agung Afri Rinaldi',
        img: '/images/integrasi-asa/agung.jpg',
        funFact: 'Galeri HP isinya aib anak BEM semua.',
        focus: 'Menjadi ujung tombak citra digital organisasi melalui pengelolaan informasi satu pintu yang kreatif dan responsif.',
        socials: { instagram: 'agung.ar' },
      },
      desc: 'Pusat informasi, digitalisasi, dan publikasi kegiatan organisasi.',
      ministries: [
        {
          name: 'Kementerian PTI',
          minister: 'Syuby Alwi Akbar A',
          img: '/images/integrasi-asa/syuby.jpg',
          funFact: 'Coding sambil merem.',
          focus: 'Mengelola website, database organisasi, serta mengembangkan inovasi teknologi untuk memudahkan layanan mahasiswa.',
          socials: { instagram: 'syuby.alwi', twitter: 'syuby_dev', email: 'syuby@code.com' },
        },
        {
          name: 'Kementerian Publikasi & Media',
          minister: 'Adiprima Raharja',
          img: '/images/integrasi-asa/adi.jpg',
          funFact: 'Admin lambe turah cabang kampus.',
          focus: 'Bertanggung jawab atas desain grafis, copywriting, dan pengelolaan media sosial resmi BEM.',
          socials: { instagram: 'adiprima' },
        },
        {
          name: 'Kementerian Dokumentasi',
          minister: 'M. Ismaulana Ibrahim',
          img: '/images/integrasi-asa/baim.jpg',
          funFact: 'Kamera lebih mahal dari motornya.',
          focus: 'Mengabadikan setiap momen kegiatan organisasi dalam bentuk foto dan video cinematic sebagai arsip sejarah.',
          socials: { instagram: 'maulana.ib' },
        },
      ],
    },
    {
      title: 'Kemenko Pembangunan Mhs',
      groupImg: '/images/integrasi-asa/pem-mhs.jpg',
      coordinator: {
        name: 'Bayu Malik Ibrahim',
        img: '/images/integrasi-asa/bayu.jpg',
        funFact: 'Motivator dadakan di tongkrongan.',
        focus: 'Fokus pada advokasi kesejahteraan dan pengembangan prestasi mahasiswa baik akademik maupun non-akademik.',
        socials: { instagram: 'bayu.malik' },
      },
      desc: 'Fokus pada kesejahteraan dan peningkatan prestasi mahasiswa.',
      ministries: [
        {
          name: 'Kementerian Kesejahteraan',
          minister: 'Fitria Kamelia Salsabila',
          img: '/images/integrasi-asa/kamel.jpg',
          funFact: 'Ibu peri bagi maba kelaparan.',
          focus: 'Menampung aspirasi fasilitas kampus dan memberikan layanan advokasi bagi mahasiswa yang terkendala biaya atau akademik.',
          socials: { instagram: 'fitria.ks' },
        },
        {
          name: 'Kementerian Prestasi',
          minister: 'Tri Wahyuni',
          img: '/images/integrasi-asa/tri.jpg',
          funFact: 'Piala di kamarnya buat ganjel pintu.',
          focus: 'Melakukan pendataan mahasiswa berprestasi dan memberikan pendampingan intensif untuk kompetisi tingkat lanjut.',
          socials: { instagram: 'tri.wahyuni' },
        },
      ],
    },
    {
      title: 'Kemenko Sosial & Politik',
      groupImg: '/images/integrasi-asa/sospol.jpg',
      coordinator: {
        name: 'Ahmad Rifaldi Haswan',
        img: '/images/integrasi-asa/pakau.jpg',
        funFact: 'Orasinya kenceng, hatinya hello kitty.',
        focus: 'Membangun kepekaan sosial mahasiswa terhadap isu-isu kerakyatan dan kebijakan publik melalui kajian dan aksi nyata.',
        socials: { instagram: 'rifaldi.haswan' },
      },
      desc: 'Gerakan pengabdian masyarakat dan kajian isu-isu strategis.',
      ministries: [
        {
          name: 'Kementerian Pengabdian',
          minister: 'Darman Jaya Bawamenewi',
          img: '/images/integrasi-asa/darman.jpg',
          funFact: 'Anak emas warga desa binaan.',
          focus: 'Turun langsung ke masyarakat melalui program bina desa, bakti sosial, dan pemberdayaan komunitas marjinal.',
          socials: { instagram: 'darman.jb' },
        },
        { name: 'Kementerian Kastrat', minister: 'Vacant / TBA', img: null, funFact: 'Data belum ditemukan.', focus: 'Mengkaji isu-isu politik nasional dan daerah serta merumuskan sikap organisasi yang kritis dan solutif.' },
      ],
    },
  ],

  // --- BPH KAMPUS (Dynamic Structures) ---
  bphKampus: [
    {
      campus: 'Kampus Jakarta Pusat',
      role: 'Ketua BPH',
      name: 'Syachrul Pangestu',
      img: '/images/integrasi-asa/bph/jakpus/jakpus-ketua.png',
      groupImg: '/images/integrasi-asa/bph/jakpus/jakpus-grup.jpeg',
      funFact: 'Kampus pusat, nongkrongnya di Senen.',
      focus: 'Mengkoordinasikan seluruh kegiatan kemahasiswaan di Kampus Kramat Raya dan memastikan sinergi dengan manajemen pusat.',
      socials: { instagram: 'bph.jakpus' },
      children: [
        {
          role: 'Wakil Ketua',
          name: 'Marsa Diwana',
          img: '/images/integrasi-asa/bph/jakpus/jakpus-wakil.png',
          children: [
            // Group Sek & Ben
            {
              role: 'Sekretaris & Bendahara',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Hanamichi Harika', img: '/images/integrasi-asa/bph/jakpus/jakpus-sekre1.png' },
                { role: 'Sekretaris II', name: 'Maharani Feby Aqsa', img: '/images/integrasi-asa/bph/jakpus/jakpus-sekre2.png' },
                { role: 'Bendahara I', name: 'Zahra Auliyana H', img: '/images/integrasi-asa/bph/jakpus/jakpus-bend1.png' },
              ],
            },
            // Group Divisi (Custom Jakpus)
            {
              role: 'Divisi',
              isGroup: true,
              children: [
                { role: 'Humas I', name: 'Rifa Athiyah', img: '/images/integrasi-asa/bph/jakpus/jakpus-humas1.png' },
                { role: 'Humas III', name: 'Hildiana Ariftianti', img: '/images/integrasi-asa/bph/jakpus/jakpus-humas3.png' },
                { role: 'Koor UKM I', name: 'Hasna Nisa Hasanah', img: '/images/integrasi-asa/bph/jakpus/jakpus-koorukm1.png' },
                { role: 'Koor UKM II', name: 'Diana Susan', img: '/images/integrasi-asa/bph/jakpus/jakpus-koorukm2.png' },
                { role: 'Koor UKM III', name: 'Istiyanah', img: '/images/integrasi-asa/bph/jakpus/jakpus-koorukm3.png' },
              ],
            },
            // Group UKM
            {
              role: 'UKM',
              isGroup: true,
              children: [
                { role: 'Ketua UKM ART', name: 'Suciati M', img: '/images/integrasi-asa/bph/jakpus/jakpus-ketuaart.png' },
                { role: 'Wakil UKM ART', name: 'Nusantari', img: '/images/integrasi-asa/bph/jakpus/jakpus-wakilart.png' },
                { role: 'Ketua UKM LAC', name: 'Muhamad Reval F', img: '/images/integrasi-asa/bph/jakpus/jakpus-ketualac.png' },
                { role: 'Ketua UKM LCC', name: 'Niken Cintya R', img: '/images/integrasi-asa/bph/jakpus/jakpus-ketualcc.png' },
                { role: 'Ketua UKM LSA', name: 'Zola Arya Attala', img: '/images/integrasi-asa/bph/jakpus/jakpus-ketualsa.png' },
                { role: 'Wakil UKM LSA', name: 'Afriza', img: '/images/integrasi-asa/bph/jakpus/jakpus-wakillsa.png' },
                { role: 'Ketua UKM MAPALA', name: 'Muhammad Rafli A', img: '/images/integrasi-asa/bph/jakpus/jakpus-ketuamapala.png' },
              ],
            },
          ],
        },
      ],
    },
    {
      // --- KASUS KHUSUS: JAKARTA UTARA (Sesuai Dokumen & Gambar) ---
      // Jakut: 2 Wakil Ketua (Internal/Eksternal), UKM Lengkap
      campus: 'Kampus Jakarta Utara',
      groupImg: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600',
      img: '/images/integrasi-asa/bph/jakut/jakut-ketua.png',
      role: 'Ketua BPH',
      name: 'Annisa Oktaviani',
      desc: 'Memimpin seluruh kegiatan, mengkoordinasikan divisi, dan menjadi penanggung jawab utama organisasi.',
      funFact: 'Anak laut, tahan panas dan macet Priok.',
      focus: 'Fokus pada pengembangan potensi mahasiswa di kawasan pesisir dan industri logistik Jakarta Utara.',
      socials: { instagram: 'bph.jakut' },
      children: [
        { role: 'Wakil Ketua I ', name: 'Aradea', img: '/images/integrasi-asa/bph/jakut/jakut-wakil1.png' },
        { role: 'Wakil Ketua II', name: 'Muhamad Agung Santoso', img: '/images/integrasi-asa/bph/jakut/jakut-wakil2.png' },
        {
          role: 'Wrapper',
          isGroup: true, // Wrapper dummy agar masuk ke harvester
          children: [
            {
              role: 'Sekretariat & Kebendaharaan',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Ghea Suci Chayani', img: '/images/integrasi-asa/bph/jakut/jakut-sekre1.png', desc: 'Mengelola administrasi.' },
                { role: 'Sekretaris II', name: 'Nadia Talitha F', img: '/images/integrasi-asa/bph/jakut/jakut-sekre2.png', desc: 'Mendukung sekretaris 1.' },
                { role: 'Bendahara I', name: 'Bunga Auliya', img: '/images/integrasi-asa/bph/jakut/jakut-bend1.png', desc: 'Mengelola keuangan.' },
                { role: 'Bendahara II', name: 'Zahra Ayunisa', img: '/images/integrasi-asa/bph/jakut/jakut-bend2.png', desc: 'Membantu transaksi.' },
              ],
            },
            {
              role: 'Divisi Fungsional',
              isGroup: true,
              children: [
                { role: 'Humas I', name: 'Hesti Mikani', img: '/images/integrasi-asa/bph/jakut/jakut-humas1.png', desc: 'Komunikasi eksternal.' },
                { role: 'Humas II', name: 'Alan Maula Qirasy', img: '/images/integrasi-asa/bph/jakut/jakut-humas2.png', desc: 'Publikasi media.' },
                { role: 'Humas III', name: 'Kevin Arya Shaputra', img: '/images/integrasi-asa/bph/jakut/jakut-humas3.png', desc: 'Komunikasi internal.' },
              ],
            },
            {
              role: 'Unit Kegiatan Mahasiswa (UKM)',
              isGroup: true,
              children: [
                { role: 'Ketua UKM BSA', name: 'Nur Halimah', img: '/images/integrasi-asa/bph/jakut/jakut-ketuabsa.png', desc: 'UKM BSA' },
                { role: 'Ketua UKM KAMIL', name: 'Agus Mei Riyanto', img: '/images/integrasi-asa/bph/jakut/jakut-ketuakamil.png', desc: 'UKM KAMIL' },
                { role: 'Ketua UKM LAC', name: 'Iis Prihartini', img: '/images/integrasi-asa/bph/jakut/jakut-ketualac.png', desc: 'UKM LAC' },
                { role: 'Ketua UKM LMC', name: 'Agus Salim', img: '/images/integrasi-asa/bph/jakut/jakut-ketualmc.png', desc: 'UKM LMC' },
                { role: 'Ketua UKM LSC', name: 'Rohdi Ahmad Robbani', img: '/images/integrasi-asa/bph/jakut/jakut-ketualsc.png', desc: 'UKM LSC' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Pasar Minggu',
      role: 'Ketua BPH',
      name: 'Silvia Nur Rohmah',
      img: '/images/integrasi-asa/bph/pasming/pasming-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
      funFact: 'Sering dikira anak Jaksel gaul.',
      focus: 'Mengaktifkan ruang kreatif mahasiswa dan menjalin kerjasama dengan komunitas startup di Jakarta Selatan.',
      socials: { instagram: 'bph.psm' },
      children: [
        { role: 'Wakil Ketua', name: 'Eka Darma Yusuf P', img: '/images/integrasi-asa/bph/pasming/pasming-wakil.png' },
        {
          role: 'Wrapper',
          isGroup: true, // Wrapper dummy agar masuk ke harvester
          children: [
            {
              role: 'Sekretariat & Kebendaharaan',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Fanita Sri Rahayu', img: '/images/integrasi-asa/bph/pasming/pasming-sekre1.png', desc: 'Mengelola administrasi.' },
                { role: 'Sekretaris II', name: 'Wilda Farida', img: '/images/integrasi-asa/bph/pasming/pasming-sekre2.png', desc: 'Mendukung sekretaris 1.' },
                { role: 'Bendahara I', name: 'Iqlima Davanti', img: '/images/integrasi-asa/bph/pasming/pasming-bend1.png', desc: 'Mengelola keuangan.' },
                { role: 'Bendahara II', name: 'Nabilla Narassati', img: '/images/integrasi-asa/bph/pasming/pasming-bend2.png', desc: 'Membantu transaksi.' },
              ],
            },
            {
              role: 'Divisi Fungsional',
              isGroup: true,
              children: [
                { role: 'Humas I', name: 'Harlan Andriansyah', img: '/images/integrasi-asa/bph/pasming/pasming-humas1.png', desc: 'Komunikasi eksternal.' },
                { role: 'Humas II', name: 'Alan Maula Qirasy', img: '/images/integrasi-asa/bph/jakut/jakut-humas2.png', desc: 'Publikasi media.' },
                { role: 'Koor UKM', name: 'Mandala Siangga P', img: '/images/integrasi-asa/bph/pasming/pasming-koorukm1.png' },
                { role: 'Media & Creator', name: 'Nurul Zahwa Putri', img: '/images/integrasi-asa/bph/pasming/pasming-mediacreator.png' },
                { role: 'Mediator I', name: 'Devina Neyla Putri', img: '/images/integrasi-asa/bph/pasming/pasming-mediator1.png' },
                { role: 'Mediator II', name: 'Manda Rachaelia', img: '/images/integrasi-asa/bph/pasming/pasming-mediator2.png' },
              ],
            },
            {
              role: 'Unit Kegiatan Mahasiswa (UKM)',
              isGroup: true,
              children: [
                { role: 'Ketua UKM KAMIL', name: 'Marla Indang S', img: '/images/integrasi-asa/bph/pasming/pasming-ketuakamil.png', desc: 'UKM KAMIL' },
                { role: 'Wakil UKM KAMIL', name: 'Muhammad Faqih H', img: '/images/integrasi-asa/bph/pasming/pasming-wakilkamil.png', desc: 'UKM KAMIL' },
                { role: 'Ketua UKM LAC', name: 'Arya Bagus W', img: '/images/integrasi-asa/bph/pasming/pasming-ketualac.png', desc: 'UKM LAC' },
                { role: 'Ketua UKM LCC', name: 'Alvin Jilan Satriadi', img: '/images/integrasi-asa/bph/pasming/pasming-ketualcc.png', desc: 'UKM LCC' },
                { role: 'Wakil UKM LCC', name: 'Ananda Adiputra', img: '/images/integrasi-asa/bph/pasming/pasming-wakillcc.png', desc: 'UKM LCC' },
                { role: 'Ketua UKM LSA', name: 'Ahmad Faqih', img: '/images/integrasi-asa/bph/pasming/pasming-ketualsa.png', desc: 'UKM LSA' },
                { role: 'Wakil UKM LSA', name: 'Malik Luther Bekti W', img: '/images/integrasi-asa/bph/pasming/pasming-wakillsa.png', desc: 'UKM LSA' },
                { role: 'Ketua UKM SEAL', name: 'Putra Raynaldi G', img: '/images/integrasi-asa/bph/pasming/pasming-ketuaseal.png', desc: 'UKM SEAL' },
                { role: 'Wakil UKM SEAL', name: 'Annisa Salsabila', img: '/images/integrasi-asa/bph/pasming/pasming-wakilseal.png', desc: 'UKM SEAL' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Cikarang',
      role: 'Ketua BPH',
      name: 'Naufal Iman Setiadi',
      img: '/images/integrasi-asa/bph/cikarang/cikarang-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600',
      funFact: 'Tiap hari berhadapan sama truk kontainer.',
      focus: 'Menjembatani mahasiswa dengan kawasan industri Cikarang melalui program magang dan kunjungan industri.',
      socials: { instagram: 'bph.cikarang' },
      children: [
        { role: 'Wakil Ketua', name: 'Muthia Amelia L', img: '/images/integrasi-asa/bph/cikarang/cikarang-wakil.png' },
        {
          role: 'Wrapper',
          isGroup: true, // Wrapper dummy agar masuk ke harvester
          children: [
            {
              role: 'Sekretariat & Kebendaharaan',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Nisa Mardatillah', img: '/images/integrasi-asa/bph/cikarang/cikarang-sekre1.png', desc: 'Mengelola administrasi.' },
                { role: 'Sekretaris II', name: 'Riana Amelia Putri', img: '/images/integrasi-asa/bph/cikarang/cikarang-sekre2.png', desc: 'Mendukung sekretaris 1.' },
                { role: 'Bendahara I', name: 'Siska Apriani', img: '/images/integrasi-asa/bph/cikarang/cikarang-bend1.png', desc: 'Mengelola keuangan.' },
                { role: 'Bendahara II', name: 'Niken Padillah', img: '/images/integrasi-asa/bph/cikarang/cikarang-bend2.png', desc: 'Membantu transaksi.' },
              ],
            },
            {
              role: 'Divisi Fungsional',
              isGroup: true,
              children: [
                { role: 'Humas I', name: 'Wiritania Rhisma M', img: '/images/integrasi-asa/bph/cikarang/cikarang-humas1.png', desc: 'Komunikasi eksternal.' },
                { role: 'Humas II', name: 'Derrina Anggelika S', img: '/images/integrasi-asa/bph/cikarang/cikarang-humas2.png', desc: 'Publikasi media.' },
                { role: 'Koor UKM I', name: 'Setyo Guntur N', img: '/images/integrasi-asa/bph/cikarang/cikarang-koorukm1.png' },
                { role: 'Koor UKM II', name: 'Mohammad Fadhil A', img: '/images/integrasi-asa/bph/cikarang/cikarang-koorukm2.png' },
                { role: 'PIK-R I', name: 'Nadyah Rosalina', img: '/images/integrasi-asa/bph/cikarang/cikarang-pikr1.png' },
                { role: 'PIK-R II', name: 'Eva', img: '/images/integrasi-asa/bph/cikarang/cikarang-pikr2.png' },
                { role: 'Ekonomi Kreatif I', name: 'Aziz Bayu Prasetyo', img: '/images/integrasi-asa/bph/cikarang/cikarang-ekraf1.png' },
                { role: 'Ekonomi Kreatif II', name: 'Bunga Aulia A', img: '/images/integrasi-asa/bph/cikarang/cikarang-ekraf2.png' },
                { role: 'Dokumentasi I', name: 'Karafli Mukhlis', img: '/images/integrasi-asa/bph/cikarang/cikarang-dokum1.png' },
                { role: 'Dokumentasi II', name: 'M. Sulikha Saidnur', img: '/images/integrasi-asa/bph/cikarang/cikarang-dokum2.png' },
                { role: 'Dokumentasi III', name: 'Maya Avrilia', img: '/images/integrasi-asa/bph/cikarang/cikarang-dokum3.png' },
                { role: 'Dokumentasi IV', name: 'Eno Farida Meyliana', img: '/images/integrasi-asa/bph/cikarang/cikarang-dokum4.png' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Depok',
      role: 'Ketua BPH',
      name: 'I Gusti Bagus Eka S',
      img: '/images/integrasi-asa/bph/depok/depok-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
      funFact: 'Pulang pergi naik KRL adalah ninja way.',
      focus: 'Membangun atmosfer akademik yang kondusif di kota pelajar dan memperkuat basis massa mahasiswa Depok.',
      socials: { instagram: 'bph.depok' },
      children: [
        { role: 'Wakil Ketua', name: 'Andina Rahmalia', img: '/images/integrasi-asa/bph/depok/depok-wakil.png' },
        {
          role: 'Wrapper',
          isGroup: true, // Wrapper dummy agar masuk ke harvester
          children: [
            {
              role: 'Sekretariat & Kebendaharaan',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Aura Andani', img: '/images/integrasi-asa/bph/depok/depok-sekre1.png', desc: 'Mengelola administrasi.' },
                { role: 'Sekretaris II', name: 'Nurhaliza Putri', img: '/images/integrasi-asa/bph/depok/depok-sekre2.png', desc: 'Mendukung sekretaris 1.' },
                { role: 'Bendahara I', name: 'Bella Celesta', img: '/images/integrasi-asa/bph/depok/depok-bend1.png', desc: 'Mengelola keuangan.' },
                { role: 'Bendahara II', name: 'Muhammad Ilham F', img: '/images/integrasi-asa/bph/depok/depok-bend2.png', desc: 'Membantu transaksi.' },
              ],
            },
            {
              role: 'Divisi Fungsional',
              isGroup: true,
              children: [
                { role: 'Koor Humas', name: 'Diva Aulia Ananta', img: '/images/integrasi-asa/bph/depok/depok-koorhumas.png', desc: 'Komunikasi eksternal.' },
                { role: 'Anggota Humas', name: 'Cani Afaliani K', img: '/images/integrasi-asa/bph/depok/depok-agthumas1.png' },
                { role: 'Anggota Humas', name: 'Aleluya Flowerisa', img: '/images/integrasi-asa/bph/depok/depok-agthumas2.png' },
                { role: 'Anggota Humas', name: 'Muhammad Zaid S', img: '/images/integrasi-asa/bph/depok/depok-agthumas3.png' },
                { role: 'Ketua PSDM', name: 'Kareninina Kurnia C', img: '/images/integrasi-asa/bph/depok/depok-ketuapsdm.png', desc: 'Komunikasi eksternal.' },
                { role: 'Anggota PSDM', name: 'M. Naufal Al-M', img: '/images/integrasi-asa/bph/depok/depok-agtpsdm1.png' },
                { role: 'Anggota PSDM', name: 'Jihane Revaline P.T', img: '/images/integrasi-asa/bph/depok/depok-agtpsdm2.png' },
                { role: 'Anggota PSDM', name: 'Ani Marfuah R', img: '/images/integrasi-asa/bph/depok/depok-agtpsdm3.png' },
                { role: 'Koor Publkasi', name: 'Raditya Fadil P', img: '/images/integrasi-asa/bph/depok/depok-koorpublikasi.png', desc: 'Komunikasi eksternal.' },
                { role: 'Anggota Publikasi', name: 'Mayliza Dwi Andini', img: '/images/integrasi-asa/bph/depok/depok-agtpublikasi1.png' },
                { role: 'Anggota Publikasi', name: 'Marcya Devariani Z', img: '/images/integrasi-asa/bph/depok/depok-agtpublikasi2.png' },
                { role: 'Anggota Publikasi', name: 'M. Rafliansyah', img: '/images/integrasi-asa/bph/depok/depok-agtpublikasi3.png' },
              ],
            },
            {
              role: 'Unit Kegiatan Mahasiswa (UKM)',
              isGroup: true,
              children: [
                { role: 'Ketua UKM ART', name: 'Alvina Dwi Putri', img: '/images/integrasi-asa/bph/depok/depok-ketuaart.png', desc: 'UKM ART' },
                { role: 'Wakil UKM ART', name: 'Andhika Panca', img: '/images/integrasi-asa/bph/depok/depok-wakilart.png', desc: 'UKM ART' },
                { role: 'Ketua UKM BSA', name: 'Subhi Muhammad Y', img: '/images/integrasi-asa/bph/depok/depok-ketuabsa.png', desc: 'UKM BSA' },
                { role: 'Wakil UKM BSA', name: 'Delia Septiyani', img: '/images/integrasi-asa/bph/depok/depok-wakilbsa.png', desc: 'UKM BSA' },
                { role: 'Ketua UKM KAMIL', name: 'Muhammad Tengku I', img: '/images/integrasi-asa/bph/depok/depok-ketuakamil.png', desc: 'UKM KAMIL' },
                { role: 'Wakil UKM KAMIL', name: 'Muhammad Ali', img: '/images/integrasi-asa/bph/depok/depok-wakilkamil.png', desc: 'UKM KAMIL' },
                { role: 'Ketua UKM LAC', name: 'Danisa Nurul Amalia', img: '/images/integrasi-asa/bph/depok/depok-ketualac.png', desc: 'UKM LAC' },
                { role: 'Wakil UKM LAC', name: 'Fachrizal Giovani', img: '/images/integrasi-asa/bph/depok/depok-wakillac.png', desc: 'UKM LAC' },
                { role: 'Ketua UKM LCC', name: 'Farid Rizky Amrullah', img: '/images/integrasi-asa/bph/depok/depok-ketualcc.png', desc: 'UKM LCC' },
                { role: 'Wakil UKM LCC', name: 'Alfiansyah Cahyo W', img: '/images/integrasi-asa/bph/depok/depok-wakillcc.png', desc: 'UKM LCC' },
                { role: 'Ketua UKM SEAL', name: 'Gilang Nazar', img: '/images/integrasi-asa/bph/depok/depok-ketuaseal.png', desc: 'UKM SEAL' },
                { role: 'Wakil UKM SEAL', name: 'Intan Loefirta Hawa Rizki', img: '/images/integrasi-asa/bph/depok/depok-wakilseal.png', desc: 'UKM SEAL' },
                { role: 'Ketua UKM TIME KOVI', name: 'Ilham Fajar Taufik', img: '/images/integrasi-asa/bph/depok/depok-ketuatk.png', desc: 'UKM TIME KOVI' },
                { role: 'Wakil UKM TIME KOVI', name: 'Muhadistudin Amri', img: '/images/integrasi-asa/bph/depok/depok-wakiltk.png', desc: 'UKM TIME KOVI' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Bekasi',
      role: 'Ketua BPH',
      name: 'Syuby Alwi Akbar Attala',
      img: '/images/integrasi-asa/bph/bekasi/bekasi-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
      funFact: 'Paspor Bekasi selalu ready.',
      focus: 'Mengoptimalkan kegiatan kewirausahaan mahasiswa di tengah dinamika kota satelit yang padat.',
      socials: { instagram: 'bph.bekasi' },
      children: [
        {
          role: 'Wakil Ketua',
          name: 'Chika Syifa Naila Rachman',
          img: '/images/integrasi-asa/bph/bekasi/bekasi-wakil.png',
          children: [
            // Group Sek & Ben
            {
              role: 'Sekretaris & Bendahara',
              isGroup: true,
              children: [
                { role: 'Sekretaris I', name: 'Hani Luthfia Chasan', img: '/images/integrasi-asa/bph/bekasi/bekasi-sekre1.png' },
                { role: 'Sekretaris II', name: 'Annisa Novilia Putri', img: '/images/integrasi-asa/bph/bekasi/bekasi-sekre2.png' },
                { role: 'Bendahara I', name: 'Sarah Amalia Putri', img: '/images/integrasi-asa/bph/bekasi/bekasi-bend1.png' },
                { role: 'Bendahara II', name: 'Suci Rahmawati', img: '/images/integrasi-asa/bph/bekasi/bekasi-bend2.png' },
              ],
            },
            // Group Divisi (Custom Jakpus)
            {
              role: 'Divisi',
              isGroup: true,
              children: [
                { role: 'Humas I', name: 'Fatimah Azzahra', img: '/images/integrasi-asa/bph/bekasi/bekasi-humas1.png' },
                { role: 'Humas II', name: 'Marco Luigi Pratama', img: '/images/integrasi-asa/bph/bekasi/bekasi-humas2.png' },
                { role: 'Koor UKM I', name: 'Muhammad Zakky Almufra', img: '/images/integrasi-asa/bph/bekasi/bekasi-koorukm1.png' },
                { role: 'Koor UKM II', name: 'Refina Ar-Rizki', img: '/images/integrasi-asa/bph/bekasi/bekasi-koorukm2.png' },
                { role: 'Design Media I', name: 'Alisya Iskandar', img: '/images/integrasi-asa/bph/bekasi/bekasi-design1.png' },
                { role: 'Design Media II', name: 'Muhammad Rafael', img: '/images/integrasi-asa/bph/bekasi/bekasi-design2.png' },
              ],
            },
            // Group UKM
            {
              role: 'UKM',
              isGroup: true,
              children: [
                { role: 'Ketua UKM LAC', name: 'Friska Olivia Sihaloho', img: '/images/integrasi-asa/bph/bekasi/bekasi-ketualac.png' },
                { role: 'Ketua UKM LCC', name: 'Rheza Rifalsya Hermawan', img: '/images/integrasi-asa/bph/bekasi/bekasi-ketualcc.png' },
                { role: 'Ketua UKM LSA', name: 'Khairunia Salsabila', img: '/images/integrasi-asa/bph/bekasi/bekasi-ketualsa.png' },
                { role: 'Ketua UKM LSE', name: 'Chairul Gaizka Gibran', img: '/images/integrasi-asa/bph/bekasi/bekasi-ketualse.png' },
                { role: 'Ketua UKM SEAL', name: 'Adinda Wulandari', img: '/images/integrasi-asa/bph/bekasi/bekasi-ketuaseal.png' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Ciputat',
      role: 'Ketua BPH',
      name: 'Rakha Finanda',
      img: '/images/integrasi-asa/bph/ciputat/ciputat-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&q=80&w=600',
      funFact: 'Perbatasan Tangsel-Jaksel garis keras.',
      focus: 'Menyuarakan aspirasi mahasiswa Tangerang Selatan dan aktif dalam forum komunikasi BEM se-Tangsel.',
      socials: { instagram: 'bph.ciputat' },
      children: [
        {
          role: 'Wakil Ketua',
          name: 'Agung Afri Rinaldi',
          img: '/images/integrasi-asa/bph/ciputat/ciputat-wakil.png',
          children: [
            // Group Sek & Ben
            {
              role: 'Sekretaris & Bendahara',
              isGroup: true,
              children: [
                { role: 'Sekretaris', name: 'Muhammad Rabbani', img: '/images/integrasi-asa/bph/ciputat/ciputat-sekre.png' },
                { role: 'Bendahara', name: 'Selima Najwa K', img: '/images/integrasi-asa/bph/ciputat/ciputat-bend.png' },
              ],
            },
            // Group Divisi (Custom Jakpus)
            {
              role: 'Divisi',
              isGroup: true,
              children: [
                { role: 'Divisi Rohani', name: 'Dimas Nurhayadi', img: '/images/integrasi-asa/bph/ciputat/ciputat-rohani.png' },
                { role: 'Koor UKM', name: 'Rakha Adipratama', img: '/images/integrasi-asa/bph/ciputat/ciputat-koorukm.png' },
                { role: 'Media Kreatif I', name: 'Ilham Dwi Rangga', img: '/images/integrasi-asa/bph/ciputat/ciputat-media1.png' },
                { role: 'Media Kreatif II', name: 'Husnul Bunaya', img: '/images/integrasi-asa/bph/ciputat/ciputat-media2.png' },
                { role: 'Media Kreatif III', name: 'Mirza Zulfikar Fariz', img: '/images/integrasi-asa/bph/ciputat/ciputat-media3.png' },
              ],
            },
          ],
        },
      ],
    },
    {
      campus: 'Kampus Tangerang',
      role: 'Ketua BPH',
      name: 'Muhammad Nurfathan',
      img: '/images/integrasi-asa/bph/tanggerang/tanggerang-ketua.png',
      groupImg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600',
      funFact: 'Jagoan kuliner Pasar Lama.',
      focus: 'Menghidupkan kembali UKM di kampus Tangerang dan mempererat solidaritas antar angkatan.',
      socials: { instagram: 'bph.tangerang' },
      children: createStructureChildren(),
    },
  ],

  // --- PROGRAMS ---
  programs: {
    timeline: [
      { month: 'Okt 2024', title: 'Open Recruitment', desc: 'Penerimaan berkas dan wawancara calon pengurus baru periode 2024/2025.' },
      { month: 'Nov 2024', title: 'Pelantikan & Raker', desc: 'Peresmian pengurus dan pembahasan Rencana Strategis (Renstra) satu periode.' },
      { month: 'Des 2024', title: 'Desa Binaan Jilid I', desc: 'Survey lokasi dan social mapping untuk program pengabdian masyarakat.' },
      { month: 'Jan 2025', title: 'LP3I Art & Sport Fest', desc: 'Pelaksanaan kompetisi seni dan olahraga antar mahasiswa.' },
      { month: 'Mar 2025', title: 'Ramadhan Charity', desc: 'Rangkaian kegiatan berbagi takjil dan santunan selama bulan puasa.' },
      { month: 'Mei 2025', title: 'National Summit', desc: 'Konferensi tingkat nasional dan studi banding ke parlemen.' },
      { month: 'Jul 2025', title: 'Laporan Tengah Tahun', desc: 'Evaluasi kinerja paruh waktu seluruh kementerian.' },
      { month: 'Sep 2025', title: 'Pemira & Demisioner', desc: 'Pemilihan raya ketua baru dan laporan pertanggungjawaban akhir.' },
    ],
    rutin: [
      {
        title: 'Desa Binaan LP3I',
        icon: MapPin,
        date: 'Weekly/Monthly',
        desc: 'Implementasi Tri Dharma Perguruan Tinggi langsung ke masyarakat secara berkelanjutan.',
        longDesc: 'Program pengabdian masyarakat berkelanjutan di desa mitra...',
        agenda: [{ time: 'Week 1', activity: 'Survey' }],
        benefits: ['Pengalaman', 'SKS'],
        gallery: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600'],
      },
      {
        title: 'Kajian Rutin BEM',
        icon: Briefcase,
        date: 'Monthly',
        desc: 'Diskusi isu strategis kampus dan nasional untuk melatih daya kritis mahasiswa.',
        longDesc: 'Wadah intelektual mahasiswa untuk membahas isu-isu terkini...',
        agenda: [],
        benefits: [],
        gallery: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600'],
      },
    ],
    tahunan: [
      {
        title: 'LKMM',
        icon: Users,
        date: 'Nov 2024',
        desc: 'Mencetak pemimpin masa depan dengan kurikulum leadership terpadu.',
        longDesc: 'LKMM adalah program kaderisasi wajib...',
        agenda: [],
        benefits: [],
        gallery: ['https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600'],
      },
      {
        title: 'Art & Sport Festival',
        icon: Award,
        date: 'Jan 2025',
        desc: 'Ajang kompetisi seni dan olahraga terbesar se-kampus raya.',
        longDesc: 'Festival tahunan bakat...',
        agenda: [],
        benefits: [],
        gallery: ['https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=600'],
      },
      {
        title: 'National Summit',
        icon: Globe,
        date: 'May 2025',
        desc: 'Konferensi mahasiswa tingkat nasional membahas isu ekonomi kreatif.',
        longDesc: 'Forum diskusi ilmiah...',
        agenda: [],
        benefits: [],
        gallery: ['https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=600'],
      },
    ],
  },

  // --- GALLERY ---
  galleryMoments: [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400', title: 'Rapat Kerja Wilayah', location: 'Aula Utama', desc: 'Pembahasan program kerja.' },
    { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400', title: 'Makrab Anggota', location: 'Villa Puncak', desc: 'Malam keakraban.' },
    { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400', title: 'Studi Banding UI', location: 'Kampus UI', desc: 'Bertukar pikiran.' },
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400', title: 'Bakti Sosial', location: 'Panti Asuhan', desc: 'Berbagi kebahagiaan.' },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400', title: 'Dies Natalis', location: 'Lapangan', desc: 'Perayaan ulang tahun.' },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400', title: 'Rapat Evaluasi', location: 'Ruang Sidang', desc: 'Meninjau capaian.' },
  ],
};
