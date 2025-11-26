// src/data/content.js
import { MapPin, Briefcase, Users, Award, Globe } from 'lucide-react';

export const siteData = {
  hero: {
    titleSmall: 'POLITEKNIK LP3I JAKARTA',
    titleBig: 'KABINET INTEGRASI ASA',
    desc: 'Mewujudkan BEM Politeknik LP3I Jakarta sebagai inkubator pergerakan yang progresif, adaptif, dan berintegritas.',
  },
  leaders: [
    { role: 'Presiden Mahasiswa', name: 'Satria Airlangga', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', funFact: 'Sering ketiduran pas zoom meeting.' },
    { role: 'Wakil Presiden Mahasiswa', name: 'Salwa Latipah', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', funFact: 'Kolektor stiker kucing di WhatsApp.' },
  ],
  coordinators: [
    {
      role: 'Koordinator Keuangan',
      name: 'Hani Luthfia Chasan',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      funFact: 'Jago hitung duit tapi lupa dompet sendiri.',
      children: [
        { role: 'Biro Anggaran', name: 'Annisa Oktaviani', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', funFact: 'Bisa hafal harga cilok se-kampus.' },
        { role: 'Biro Ekonomi Kreatif', name: 'Sarah Amalia Putri', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', funFact: 'Queen of thrift shopping.' },
      ],
    },
    {
      role: 'Kepala SKI',
      name: 'Ari Masfufah',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      funFact: 'Hobi nonton drakor marathon weekend.',
    },
    {
      role: 'Koordinator Sekretariat',
      name: 'Cyntya Dwy Syamaryah',
      img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400',
      funFact: 'Paling rapih nyatet notulensi, font-nya Comic Sans.',
    },
  ],
  kemenkos: [
    {
      title: 'Kemenko Dalam Negeri',
      coordinator: { name: 'Irfansyah Akbar', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', funFact: 'Pernah nyasar di gedung sendiri.' },
      desc: 'Mengkoordinasikan pergerakan internal kampus dan pengembangan sumber daya mahasiswa.',
      ministries: [
        { name: 'Kementerian PSDM', minister: 'Intanaya Desti', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', funFact: 'Bisa menatap mata tanpa kedip 5 menit.' },
        { name: 'Kementerian Agama', minister: 'Vacant / TBA', img: null, funFact: 'Segera hadir.' },
        { name: 'Kementerian Peng. Keilmuan', minister: 'Vacant / TBA', img: null, funFact: 'Masih misterius.' },
        { name: 'Kementerian Seni Budaya', minister: 'Fitria Azahra Hata U', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', funFact: 'Jago tari saman sambil kayang.' },
        { name: 'Kementerian Olahraga', minister: 'Vacant / TBA', img: null, funFact: 'Segera hadir.' },
      ],
    },
    {
      title: 'Kemenko Luar Negeri',
      coordinator: { name: 'Novela Widya Putri', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', funFact: 'Punya 5 bahasa... cinta.' },
      desc: 'Membangun relasi strategis dan kolaborasi dengan pihak eksternal kampus.',
      ministries: [
        { name: 'Kementerian HUBEX', minister: 'Aurelia Callista T', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', funFact: 'Kenal sama semua satpam kampus.' },
        { name: 'Kementerian Kolaborasi Kampus', minister: 'Finki Aprilia', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400', funFact: 'Suka ngopi di 3 tempat berbeda sehari.' },
      ],
    },
    {
      title: 'Kemenko Informasi & Publikasi',
      coordinator: { name: 'Agung Afri Rinaldi', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', funFact: 'Galeri HP isinya aib anak BEM semua.' },
      desc: 'Pusat informasi, digitalisasi, dan publikasi kegiatan organisasi.',
      ministries: [
        { name: 'Kementerian PTI', minister: 'Syuby Alwi Akbar A', img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=400', funFact: 'Coding sambil merem.' },
        { name: 'Kementerian Publikasi & Media', minister: 'Adiprima Raharja', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400', funFact: 'Admin lambe turah cabang kampus.' },
        { name: 'Kementerian Dokumentasi', minister: 'M. Ismaulana Ibrahim', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', funFact: 'Kamera lebih mahal dari motornya.' },
      ],
    },
    {
      title: 'Kemenko Pembangunan Mhs',
      coordinator: { name: 'Bayu Malik Ibrahim', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', funFact: 'Motivator dadakan di tongkrongan.' },
      desc: 'Fokus pada kesejahteraan dan peningkatan prestasi mahasiswa.',
      ministries: [
        { name: 'Kementerian Kesejahteraan', minister: 'Fitria Kamelia Salsabila', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', funFact: 'Ibu peri bagi maba kelaparan.' },
        { name: 'Kementerian Prestasi', minister: 'Tri Wahyuni', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', funFact: 'Piala di kamarnya buat ganjel pintu.' },
      ],
    },
    {
      title: 'Kemenko Sosial & Politik',
      coordinator: { name: 'Ahmad Rifaldi Haswan', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400', funFact: 'Orasinya kenceng, hatinya hello kitty.' },
      desc: 'Gerakan pengabdian masyarakat dan kajian isu-isu strategis.',
      ministries: [
        { name: 'Kementerian Pengabdian', minister: 'Darman Jaya Bawamenewi', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', funFact: 'Anak emas warga desa binaan.' },
        { name: 'Kementerian Kastrat', minister: 'Vacant / TBA', img: null, funFact: 'Data belum ditemukan.' },
      ],
    },
  ],
  programs: {
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
  galleryMoments: [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400', title: 'Rapat Kerja Wilayah', location: 'Aula Utama', desc: 'Pembahasan program kerja.' },
    { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400', title: 'Makrab Anggota', location: 'Villa Puncak', desc: 'Malam keakraban.' },
    { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400', title: 'Studi Banding UI', location: 'Kampus UI', desc: 'Bertukar pikiran.' },
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400', title: 'Bakti Sosial', location: 'Panti Asuhan', desc: 'Berbagi kebahagiaan.' },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400', title: 'Dies Natalis', location: 'Lapangan', desc: 'Perayaan ulang tahun.' },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400', title: 'Rapat Evaluasi', location: 'Ruang Sidang', desc: 'Meninjau capaian.' },
  ],
};
