import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Users,
  User,
  Layers,
  Target,
  Calendar,
  Award,
  ExternalLink,
  Briefcase,
  Camera,
  Minus,
  Sparkles,
  Clock,
  CheckCircle,
  Repeat,
  Star,
  Heart,
  Send,
  Loader2,
  Linkedin,
  Music,
  Phone, // <--- Icon tambahan di sini
} from 'lucide-react';

// Import Data Lokal kita
import { siteData } from './data/content';

// --- Helper: Social Media Render Logic (UPDATED) ---
const SocialLinksRender = ({ socials, align = 'start' }) => {
  if (!socials) return null;

  return (
    <div className={`flex gap-3 justify-${align} flex-wrap`}>
      {socials.instagram && (
        <a href={`https://instagram.com/${socials.instagram}`} target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-[#F7941D] transition-colors cursor-pointer bg-white group">
          <Instagram size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.twitter && (
        <a href={`https://twitter.com/${socials.twitter}`} target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-[#00A3E1] transition-colors cursor-pointer bg-white group">
          <Twitter size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.linkedin && (
        <a
          href={`https://linkedin.com/in/${socials.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors cursor-pointer bg-white group"
        >
          <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.tiktok && (
        <a
          href={`https://tiktok.com/@${socials.tiktok}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer bg-white group"
        >
          <Music size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.whatsapp && (
        <a
          href={`https://wa.me/${socials.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer bg-white group"
        >
          <Phone size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.youtube && (
        <a
          href={`https://youtube.com/results?search_query=${socials.youtube}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer bg-white group"
        >
          <Youtube size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
      {socials.email && (
        <a href={`mailto:${socials.email}`} className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-[#005696] hover:text-white transition-colors cursor-pointer bg-white group">
          <Mail size={20} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
    </div>
  );
};

// --- Helper: Smart Smooth Scroll ---
const smoothScrollTo = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const currentScrollPosition = window.scrollY;
    const targetScrollPosition = elementPosition + currentScrollPosition;

    const isScrollingDown = targetScrollPosition > currentScrollPosition;

    let headerOffset = 0;

    if (!isScrollingDown) {
      const navbar = document.querySelector('nav');
      headerOffset = navbar ? navbar.offsetHeight : 80;
    }

    window.scrollTo({
      top: targetScrollPosition - headerOffset,
      behavior: 'smooth',
    });
  }
};

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`
        transition-all duration-200 ease-out
        ${isHovering ? 'scale-150 bg-white' : 'scale-100 bg-transparent'}
        w-8 h-8 border-2 border-white rounded-full flex items-center justify-center
      `}
      >
        <div className={`w-1 h-1 bg-white rounded-full ${isHovering ? 'hidden' : 'block'}`}></div>
      </div>
    </div>
  );
};

// --- 1. KOMPONEN KOTAK KECIL (NODE) - ID CARD STYLE ---
const NodeBox = ({ role, name, img, color = 'blue' }) => {
  // Warna Badge Jabatan
  const badgeColors = {
    orange: 'bg-[#F7941D] text-black',
    green: 'bg-[#22c55e] text-white',
    blue: 'bg-[#005696] text-white',
  };

  // Placeholder image
  const displayImg = img || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200';

  return (
    <div className="relative z-20 flex flex-col items-center group transition-transform hover:-translate-y-1 duration-200 cursor-pointer">
      {/* Kartu Utama */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-2 w-32 md:w-36 flex flex-col items-center">
        {/* Bingkai Foto (Persegi Presisi) */}
        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-black mb-2 overflow-hidden bg-gray-100">
          <img
            src={displayImg}
            alt={role}
            className="w-full h-full object-cover object-top" // Memastikan wajah tidak terpotong & fit
          />
        </div>

        {/* Nama */}
        <div className="text-center mb-1">
          <p className="text-[10px] md:text-xs font-bold text-black leading-tight line-clamp-2">{name}</p>
        </div>

        {/* Badge Jabatan */}
        <div className={`w-full py-1 px-1 border-2 border-black text-center ${badgeColors[color] || 'bg-black text-white'}`}>
          <p className="text-[8px] font-black uppercase tracking-wider leading-none">{role}</p>
        </div>
      </div>
    </div>
  );
};

// --- 2. LAYOUT DIAGRAM KHUSUS (BPH CHART - SIMPLE & CONNECTED) ---
const BphChartLayout = ({ data }) => {
  if (!data) return null;

  // Extraction Data
  const ketua = data;
  const wakil = data.children?.[0];

  const groupSekBen = wakil?.children?.[0]?.children || [];
  const sek1 = groupSekBen[0];
  const sek2 = groupSekBen[1];
  const ben1 = groupSekBen[2];
  const ben2 = groupSekBen[3];

  const groupDivisi = wakil?.children?.[1]?.children || [];
  const humas1 = groupDivisi[0];
  const humas2 = groupDivisi[1];
  const koor1 = groupDivisi[2];
  const koor2 = groupDivisi[3];
  const pdd1 = groupDivisi[4];
  const pdd2 = groupDivisi[5];
  const psdm1 = groupDivisi[6];
  const psdm2 = groupDivisi[7];

  const groupUkm = wakil?.children?.[2]?.children || [];

  return (
    <div className="flex flex-col items-center min-w-[1200px] pt-10 pb-24 px-10 font-['Space_Grotesk']">
      {/* ============================================== */}
      {/* LAYER 1: KETUA & TULANG PUNGGUNG (THE SPINE)   */}
      {/* ============================================== */}

      <div className="relative flex flex-col items-center w-full">
        {/* 1. KETUA */}
        <div className="z-20 mb-0">
          <NodeBox role="KETUA BPH" name={ketua.name} img={ketua.img} color="orange" />
        </div>

        {/* GARIS UTAMA (SPINE) - Menyambung dari Ketua sampai Divisi */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1 h-[34rem] bg-black z-0"></div>

        {/* 2. WAKIL KETUA (Cabang Kiri) */}
        <div className="absolute top-36 right-[50%] pr-0 flex items-center z-20">
          <NodeBox role="WAKIL KETUA" name={wakil?.name} img={wakil?.img} color="orange" />
          {/* Konektor Horizontal ke Spine */}
          <div className="w-16 h-1 bg-black"></div>
          {/* Titik Koneksi */}
          <div className="w-3 h-3 bg-black rounded-full -ml-1.5"></div>
        </div>
      </div>

      {/* ============================================== */}
      {/* LAYER 3: SEKRETARIS & BENDAHARA                */}
      {/* ============================================== */}

      <div className="relative mt-32 w-[750px]">
        {/* Garis Horizontal T (Menembus Spine) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-1 bg-black z-0"></div>
        {/* Titik Koneksi Pusat */}
        <div className="absolute top-[-0.25rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-10"></div>

        <div className="flex justify-between px-[50px]">
          {/* KIRI: SEKRETARIS */}
          <div className="flex flex-col items-center gap-8 z-10 w-36">
            <div className="h-8 w-1 bg-black -mt-8"></div> {/* Konektor Turun */}
            <NodeBox role={sek1?.role} name={sek1?.name} img={sek1?.img} color="green" />
            {/* Panah Lurus ke Sek 2 */}
            <div className="flex flex-col items-center -my-2">
              <div className="h-8 w-1 bg-black"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
            </div>
            <NodeBox role={sek2?.role} name={sek2?.name} img={sek2?.img} color="green" />
          </div>

          {/* KANAN: BENDAHARA */}
          <div className="flex flex-col items-center gap-8 z-10 w-36">
            <div className="h-8 w-1 bg-black -mt-8"></div> {/* Konektor Turun */}
            <NodeBox role={ben1?.role} name={ben1?.name} img={ben1?.img} color="green" />
            {/* Panah Lurus ke Ben 2 */}
            <div className="flex flex-col items-center -my-2">
              <div className="h-8 w-1 bg-black"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
            </div>
            <NodeBox role={ben2?.role} name={ben2?.name} img={ben2?.img} color="green" />
          </div>
        </div>
      </div>

      {/* ============================================== */}
      {/* LAYER 4: DIVISI (4 KOLOM)                      */}
      {/* ============================================== */}

      <div className="relative mt-24 w-[1100px]">
        {/* Palang Horizontal Divisi */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[860px] h-1 bg-black z-0"></div>

        {/* Konektor dari Spine (Memastikan nyambung) */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-black z-0"></div>

        <div className="flex justify-center gap-12 pt-0">
          {[
            { r1: humas1, r2: humas2 },
            { r1: koor1, r2: koor2, isKoor: true },
            { r1: pdd1, r2: pdd2 },
            { r1: psdm1, r2: psdm2 },
          ].map((group, idx) => (
            <div key={idx} className="flex flex-col items-center relative w-40 z-10">
              {/* Konektor Turun dari Palang */}
              <div className="h-8 w-1 bg-black -mt-0"></div>

              <NodeBox role={group.r1?.role} name={group.r1?.name} img={group.r1?.img} color="blue" />

              {/* Panah ke Bawah */}
              <div className="flex flex-col items-center -my-2 relative z-0">
                <div className="h-8 w-1 bg-black"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
              </div>

              <NodeBox role={group.r2?.role} name={group.r2?.name} img={group.r2?.img} color="blue" />

              {/* === JALUR KE UKM (LANGSUNG DARI KOOR UKM) === */}
              {group.isKoor && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Garis Turun Panjang ke Area UKM */}
                  <div className="w-1 h-16 bg-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ============================================== */}
      {/* LAYER 5: UKM (CONNECTED)                       */}
      {/* ============================================== */}

      <div className="relative mt-16 w-full max-w-[1300px]">
        {/* Palang Horizontal UKM */}
        {/* Border top penuh + background transparent */}
        <div className="border-t-4 border-black w-full absolute top-0 left-0 z-0"></div>

        <div className="flex justify-between items-start pt-0">
          {groupUkm.map((ukm, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 relative z-10 px-2">
              {/* Konektor Turun ke Box UKM */}
              <div className="h-8 w-1 bg-black -mt-1"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black -mt-1 mb-2"></div>

              <NodeBox role={ukm.role} name={ukm.name} img={ukm.img} color="blue" width="w-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MODAL UTAMA (UPDATED: Fun Facts & Image Fix) ---
const DetailModal = ({ isOpen, onClose, data, type, onSwitchData }) => {
  if (!isOpen || !data) return null;

  // Cek apakah ini data BPH Kampus (untuk mode diagram)
  const isBphKampus = data.campus !== undefined;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border-4 border-black w-full max-w-7xl max-h-[95vh] overflow-hidden relative shadow-[16px_16px_0px_0px_#F7941D] flex flex-col">
        {/* Fixed Header Modal */}
        <div className="p-6 border-b-4 border-black bg-white flex justify-between items-start shrink-0 z-50">
          <div>
            <span className="bg-[#005696] text-white px-3 py-1 font-mono text-xs md:text-sm uppercase mb-2 inline-block">
              {isBphKampus ? 'Struktur Wilayah' : type === 'program' ? 'Program Kerja' : type === 'gallery' ? 'Moment' : data.role || 'Detail Anggota'}
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-4xl font-black uppercase leading-none mt-2">{data.title || data.campus || data.name}</h2>
          </div>
          <button onClick={onClose} className="bg-black text-white p-2 hover:bg-[#F7941D] hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 p-6 bg-[#f0f0f0]">
          {/* --- MODE: BPH KAMPUS STRUCTURE (FULL CHART) --- */}
          {isBphKampus ? (
            <div className="overflow-x-auto border-2 border-black bg-white bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
              {/* Render Diagram */}
              <BphChartLayout data={data} />

              <div className="p-4 text-center border-t-2 border-black bg-yellow-50 text-xs font-mono text-gray-500">*Scroll/Geser untuk melihat seluruh struktur UKM</div>
            </div>
          ) : (
            // --- MODE: REGULAR CONTENT ---
            <div className="max-w-5xl mx-auto">
              {/* 1. TAMPILAN UNTUK KEMENKO (COORDINATOR) */}
              {data.coordinator && (
                <div className="space-y-12">
                  {/* Coordinator Section */}
                  <div className="flex flex-col md:flex-row gap-8 items-start bg-[#f0f0f0] p-6 border-2 border-black">
                    <div className="relative shrink-0 w-full md:w-auto text-center md:text-left">
                      {/* IMAGE FIX: object-cover object-top */}
                      <img
                        src={data.coordinator.img || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400'}
                        alt={data.coordinator.name}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover object-top border-4 border-black shadow-[4px_4px_0px_0px_#000] mx-auto md:mx-0"
                      />
                      <div className="md:absolute -bottom-3 -right-3 bg-[#F7941D] text-black text-xs font-bold px-2 py-1 border-2 border-black inline-block mt-4 md:mt-0">COORD</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black font-['Space_Grotesk']">{data.coordinator.name}</h3>
                      <p className="font-mono text-sm text-gray-600 mt-1 mb-4">Koordinator {data.title}</p>
                      <p className="font-['Inter'] text-base md:text-lg leading-relaxed mb-4">{data.desc}</p>

                      {/* FUN FACT (Kemenko) */}
                      <div className="bg-white border-2 border-black p-3 inline-block transform rotate-1 mb-4">
                        <p className="font-bold text-xs uppercase text-[#F7941D] flex items-center gap-1">
                          <Sparkles size={12} /> Fun Fact
                        </p>
                        <p className="font-['Inter'] text-sm italic">"{data.coordinator.funFact || 'Suka begadang ngerjain proker.'}"</p>
                      </div>

                      {/* Social Media */}
                      <div className="pt-4 mt-2 border-t-2 border-black border-dashed">
                        <h4 className="font-bold mb-2 font-mono uppercase text-xs text-gray-600">Connect</h4>
                        <SocialLinksRender socials={data.coordinator.socials} />
                      </div>
                    </div>
                  </div>

                  {/* Ministries Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.ministries?.map((min, idx) => (
                      <div key={idx} onClick={() => onSwitchData(min)} className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group flex items-center gap-4 cursor-pointer">
                        <div className="w-16 h-16 bg-gray-200 border-2 border-black overflow-hidden shrink-0">
                          {/* IMAGE FIX: object-top */}
                          <img src={min.img || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0" alt="" />
                        </div>
                        <div>
                          <h4 className="font-bold font-['Space_Grotesk'] text-lg leading-tight">{min.name}</h4>
                          <div className="h-0.5 w-10 bg-[#F7941D] my-1"></div>
                          <p className="text-sm font-mono opacity-80 uppercase">{min.minister || 'Open Recruitment'}</p>
                          <p className="text-[10px] mt-1 opacity-60 group-hover:opacity-100 flex items-center gap-1">
                            Click for details <ArrowRight size={10} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. TAMPILAN UNTUK PROGRAM KERJA */}
              {type === 'program' && (
                <div className="space-y-8">
                  <p className="text-lg font-['Inter'] border-l-4 border-[#F7941D] pl-4 bg-white p-4 leading-relaxed">{data.longDesc || data.desc}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-2 border-black p-6 bg-[#f9f9f9]">
                      <h3 className="font-black text-xl mb-4 flex items-center gap-2 uppercase">
                        <Clock className="text-[#005696]" /> Rangkaian Kegiatan
                      </h3>
                      <ul className="space-y-3">
                        {data.agenda && data.agenda.length > 0 ? (
                          data.agenda.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-sm">
                              <span className="font-mono font-bold bg-black text-white px-2 py-0.5 h-fit">{item.time}</span>
                              <span className="font-['Inter']">{item.activity}</span>
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-500 italic">Jadwal detail akan segera dirilis.</li>
                        )}
                      </ul>
                    </div>

                    <div className="border-2 border-black p-6 bg-[#f9f9f9]">
                      <h3 className="font-black text-xl mb-4 flex items-center gap-2 uppercase">
                        <CheckCircle className="text-[#F7941D]" /> Output & Manfaat
                      </h3>
                      <ul className="space-y-2 list-disc pl-4 font-['Inter'] text-sm">{data.benefits && data.benefits.length > 0 ? data.benefits.map((ben, idx) => <li key={idx}>{ben}</li>) : <li>Meningkatkan soft skill mahasiswa.</li>}</ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2 mt-8">
                      <Camera className="text-[#F7941D]" /> DOKUMENTASI KEGIATAN
                    </h3>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                      {data.gallery?.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid relative group">
                          <img src={img} alt="Gallery" className="w-full border-2 border-black grayscale hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute inset-0 bg-[#005696]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-multiply"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. TAMPILAN GALLERY MOMENT */}
              {type === 'gallery' && (
                <div className="space-y-6">
                  <div className="relative border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden">
                    <img src={data.src} alt={data.title} className="w-full h-auto object-cover max-h-[60vh]" />
                  </div>
                  <div className="bg-[#f0f0f0] p-6 border-l-8 border-[#F7941D]">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="text-[#005696]" />
                      <span className="font-mono font-bold text-lg uppercase">{data.location}</span>
                    </div>
                    <p className="font-['Inter'] text-xl leading-relaxed">"{data.desc}"</p>
                    <div className="mt-6 pt-4 border-t-2 border-gray-300 flex justify-end">
                      <Heart className="text-red-500 fill-red-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. TAMPILAN LEADER / INDIVIDUAL / BPH INDIVIDUAL */}
              {!data.coordinator && type !== 'program' && type !== 'gallery' && !isBphKampus && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-4 border-black p-2 bg-white rotate-1 shadow-[8px_8px_0px_0px_#000]">
                    {/* IMAGE FIX: object-cover object-top agar wajah tidak terpotong */}
                    <img
                      src={data.img || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167'}
                      alt={data.name}
                      className="w-full h-auto object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="font-['Inter'] space-y-6 flex flex-col justify-center">
                    <div className="bg-white p-6 border-l-8 border-[#F7941D]">
                      <h4 className="font-bold font-['Space_Grotesk'] text-xl mb-2">Fokus Kinerja</h4>
                      <p className="text-lg leading-relaxed">{data.focus || 'Mengawal visi strategis organisasi dan memastikan sinergitas antar elemen kabinet untuk mencapai tujuan bersama.'}</p>
                    </div>

                    {/* FUN FACT (Individual) */}
                    <div className="border-2 border-black border-dashed p-4 bg-yellow-50 relative">
                      <Sparkles className="absolute -top-3 -right-3 text-[#005696] bg-white border border-black p-1 rounded-full" size={24} />
                      <h4 className="font-bold font-mono text-sm uppercase text-gray-500 mb-1">Fun Fact</h4>
                      <p className="font-bold text-lg italic">"{data.funFact || 'Suka tiba-tiba ngajak rapat dadakan.'}"</p>
                    </div>

                    <div className="pt-4 mt-4 border-t-4 border-black">
                      <h4 className="font-bold mb-2 font-mono uppercase text-sm">Connect</h4>
                      <SocialLinksRender socials={data.socials} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Navbar Component (UPDATED LOGO) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Struktur', href: '#structure' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`
        fixed w-full top-0 z-50 transition-all duration-300 transform border-b-4 border-black
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-[#005696] text-white py-3 shadow-lg' : 'bg-white text-black py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* -- LOGO AREA UPDATE -- */}
        <div className="flex items-center gap-4">
          {/* Placeholder Logo 1 (BEM) */}
          <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full border-2 border-current flex items-center justify-center overflow-hidden">
            <img
              src="/images/logo-bem.png"
              alt="Logo BEM"
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="font-black text-xs">BEM</span>';
              }}
            />
          </div>

          <span className="hidden md:block text-xl font-thin opacity-50">|</span>

          {/* Placeholder Logo 2 (LP3I) */}
          <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full border-2 border-current flex items-center justify-center overflow-hidden">
            <img
              src="/images/logo-lp3i.png"
              alt="Logo LP3I"
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="font-black text-xs">LP3I</span>';
              }}
            />
          </div>

          <span className="font-['Space_Grotesk'] font-bold text-lg md:text-xl tracking-tighter ml-2">BEM PLJ 2024 - 2025</span>
        </div>

        <div className="hidden md:flex gap-8 font-bold font-['Space_Grotesk']">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => smoothScrollTo(e, link.href)} className="hover:underline decoration-4 underline-offset-4 hover:text-[#F7941D] transition-colors uppercase tracking-widest text-xs md:text-sm">
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b-4 border-black text-black md:hidden h-screen overflow-y-auto">
          <div className="flex flex-col p-6 gap-6 font-bold font-['Space_Grotesk']">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  smoothScrollTo(e, link.href);
                }}
                className="text-2xl border-l-4 border-transparent hover:border-[#F7941D] pl-4 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0f0f0] pt-20 border-b-4 border-black">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="absolute right-0 top-20 w-32 h-32 md:w-64 md:h-64 bg-[#00A3E1] border-4 border-black rounded-full mix-blend-multiply opacity-50 blur-3xl" style={{ transform: `translateY(${offset * 0.5}px)` }}></div>
      <div className="absolute left-0 bottom-20 w-40 h-40 md:w-80 md:h-80 bg-[#F7941D] border-4 border-black rounded-full mix-blend-multiply opacity-50 blur-3xl" style={{ transform: `translateY(${offset * -0.2}px)` }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block bg-black text-white px-2 py-1 md:px-4 md:py-1 font-mono text-xs md:text-base mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#00A3E1]">{siteData.hero.titleSmall}</div>

        <h1
          className="font-['Space_Grotesk'] text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-800"
          style={{ textShadow: '2px 2px 0px #005696' }}
        >
          KABINET
          <br />
          <span className="text-[#005696] bg-white px-2 border-4 border-black inline-block transform -rotate-2 mt-2 shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000]">INTEGRASI</span>
          <br />
          ASA
        </h1>

        <p className="font-['Inter'] text-lg md:text-2xl font-bold max-w-2xl mx-auto mb-10 border-l-8 border-[#F7941D] pl-4 text-left md:text-center md:border-l-0 md:border-b-8 md:pb-2">{siteData.hero.desc}</p>

        <a
          href="#about"
          onClick={(e) => smoothScrollTo(e, '#about')}
          className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-black text-white transition-all duration-200 bg-black font-['Space_Grotesk'] text-lg md:text-xl border-2 border-black hover:bg-[#005696] shadow-[4px_4px_0px_0px_#F7941D] hover:shadow-[2px_2px_0px_0px_#F7941D] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          EXPLORE NOW
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="about" className="py-20 bg-[#005696] border-b-4 border-black text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-2 border-white transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative border-4 border-black bg-[#00A3E1] h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
                alt="Students"
                className="object-cover w-full h-full grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-7xl font-black mb-8 leading-none">
              FILOSOFI
              <br />
              <span className="text-[#F7941D]">KABINET</span>
            </h2>
            <div className="space-y-6 font-['Inter'] text-base md:text-lg">
              <p className="bg-black/20 p-4 border-l-4 border-white backdrop-blur-sm">"Integrasi Asa" melambangkan penyatuan berbagai harapan dan potensi mahasiswa Politeknik LP3I Jakarta menjadi satu kekuatan pendorong perubahan.</p>
              <p>
                Kami mengusung semangat <strong className="bg-[#F7941D] text-black px-1">Contemporary Brutalism</strong> dalam estetika sebagai simbol ketegasan, transparansi, dan fundamental yang kokoh dalam berorganisasi.
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8">
                {['Progresif', 'Adaptif', 'Sinergis'].map((word, i) => (
                  <div key={i} className="border-2 border-white p-2 text-center font-bold hover:bg-white hover:text-[#005696] transition-all cursor-default text-sm md:text-base hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#F7941D]">
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Visi Misi Section ---
const VisiMisi = () => {
  const missions = [
    'Membangun tata kelola organisasi yang transparan dan profesional berbasis digital.',
    'Menciptakan ruang dialektika yang inklusif bagi seluruh elemen mahasiswa.',
    'Mengoptimalkan pengembangan minat bakat mahasiswa yang berorientasi prestasi.',
    'Memperluas jaringan kemitraan strategis dengan pihak eksternal kampus.',
  ];

  return (
    <section className="py-20 bg-[#F7941D] border-b-4 border-black relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 font-black text-6xl md:text-9xl opacity-10 pointer-events-none select-none">MISI</div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24 bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-8 h-8" />
                <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-black uppercase">Visi</h3>
              </div>
              <p className="font-['Inter'] text-lg md:text-xl font-bold leading-relaxed">"Terwujudnya BEM Politeknik LP3I Jakarta sebagai katalisator pergerakan yang Responsif, Inklusif, dan Berdaya Saing Global."</p>
            </div>
          </div>

          <div className="md:w-2/3 grid gap-4">
            {missions.map((misi, index) => (
              <div key={index} className="group flex items-start gap-4 bg-white border-4 border-black p-4 md:p-6 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_#005696] transition-all duration-200">
                <div className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl text-gray-200 group-hover:text-[#005696] transition-colors">0{index + 1}</div>
                <p className="font-['Inter'] font-bold text-base md:text-lg pt-2">{misi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Structure & Departments Combined Section (Updated with Group Images) ---
const StructureAndDepartments = ({ onMemberClick, onDeptClick }) => {
  return (
    <section id="structure" className="py-20 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* -- PART 1: HIGH COUNCIL & COORDS -- */}
        {/* (Bagian ini tetap menampilkan FOTO INDIVIDU karena ini adalah Pimpinan Tertinggi) */}
        <div className="text-center mb-24">
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-black mb-16 uppercase inline-block border-b-8 border-[#005696]">Struktur Kabinet</h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-1 bg-black -z-10"></div>
            {siteData.leaders.map((leader, idx) => (
              <div key={idx} onClick={() => onMemberClick(leader)} className="relative group w-full md:w-96 cursor-pointer mx-auto">
                <div className="bg-[#f0f0f0] border-4 border-black p-4 md:p-6 transition-all duration-300 group-hover:-translate-y-2 shadow-[8px_8px_0px_0px_#000]">
                  <div className="w-full h-64 md:h-72 border-2 border-black mb-4 overflow-hidden relative">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] font-black text-xl md:text-2xl uppercase leading-tight">{leader.name}</h3>
                  <p className="font-mono text-xs md:text-sm bg-[#F7941D] text-black inline-block px-2 py-1 mt-2 border border-black font-bold">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mb-12 relative">
            <div className="hidden md:block absolute -top-12 left-1/2 w-1 h-12 bg-black -z-10"></div>
            <div className="hidden md:block absolute top-0 left-[16%] right-[16%] h-1 bg-black -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {siteData.coordinators.map((coord, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <div onClick={() => onMemberClick(coord)} className="bg-white border-4 border-black p-4 hover:bg-[#005696] hover:text-white transition-all cursor-pointer relative group w-full max-w-xs">
                    <div className="hidden md:block absolute -top-8 left-1/2 w-1 h-8 bg-black -z-20 group-hover:bg-[#005696]"></div>

                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border-2 border-current overflow-hidden">
                      <img src={coord.img} className="w-full h-full object-cover" alt="" />
                    </div>
                    <h4 className="font-bold font-['Space_Grotesk'] text-lg leading-tight mb-1">{coord.name}</h4>
                    <p className="text-xs uppercase tracking-widest font-mono">{coord.role}</p>
                  </div>

                  {coord.children && (
                    <div className="mt-8 w-full flex flex-col gap-4 items-center relative">
                      <div className="absolute -top-8 left-1/2 w-1 h-8 bg-black border-l-2 border-dashed border-black"></div>

                      {coord.children.map((child, childIdx) => (
                        <div
                          key={childIdx}
                          onClick={() => onMemberClick(child)}
                          className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_#F7941D] cursor-pointer hover:translate-x-1 transition-transform text-left flex items-center gap-3 w-full max-w-xs relative"
                        >
                          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-black"></div>

                          <User size={20} className="shrink-0" />
                          <div>
                            <p className="font-bold text-sm leading-tight">{child.name}</p>
                            <p className="text-[10px] uppercase text-gray-600">{child.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -- PART 2: DEPARTMENTS (KEMENKO) -- */}
        <div className="mb-24">
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black mb-12 text-right leading-[0.8]">
            BIDANG
            <br />
            <span className="text-stroke-2 text-transparent" style={{ WebkitTextStroke: '2px black' }}>
              KEMENKO
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.kemenkos.map((kemenko, idx) => (
              <div
                key={idx}
                onClick={() => onDeptClick(kemenko)}
                className="group relative bg-white border-4 border-black p-0 h-auto min-h-[420px] flex flex-col hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#005696] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="bg-black text-white p-4 flex justify-between items-start">
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase leading-tight w-3/4">{kemenko.title}</h3>
                  <span className="font-mono text-2xl font-bold text-[#F7941D]">0{idx + 1}</span>
                </div>

                {/* IMAGE AREA: MENGGUNAKAN GROUP IMAGE */}
                <div className="relative h-48 bg-gray-200 overflow-hidden border-b-4 border-black shrink-0">
                  <img
                    src={kemenko.groupImg || kemenko.coordinator.img} // Logic ganti gambar di sini
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={kemenko.title}
                  />
                  <div className="absolute bottom-0 left-0 bg-[#F7941D] text-black text-xs font-bold px-3 py-1 border-t-2 border-r-2 border-black">COORD: {kemenko.coordinator.name}</div>
                </div>

                <div className="p-4 bg-white relative flex-1 flex flex-col">
                  <p className="font-['Inter'] text-sm line-clamp-2 mb-4">{kemenko.desc}</p>

                  <div className="flex items-center justify-between border-t-2 border-black pt-3 mt-auto">
                    <div className="flex -space-x-2">
                      {kemenko.ministries.slice(0, 3).map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      ))}
                      {kemenko.ministries.length > 3 && <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold border-2 border-white">+{kemenko.ministries.length - 3}</div>}
                    </div>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -- PART 3: BPH KAMPUS (WILAYAH KERJA) -- */}
        <div>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black mb-12 text-left leading-[0.8]">
            WILAYAH
            <br />
            <span className="text-stroke-2 text-transparent" style={{ WebkitTextStroke: '2px black' }}>
              KERJA
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.bphKampus.map((item, idx) => (
              <div key={idx} onClick={() => onMemberClick(item)} className="group bg-white border-4 border-black hover:shadow-[8px_8px_0px_0px_#F7941D] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="bg-black text-white p-2 text-center border-b-4 border-black">
                  <h4 className="font-['Space_Grotesk'] font-bold uppercase text-sm">{item.campus}</h4>
                </div>

                {/* IMAGE AREA: MENGGUNAKAN GROUP IMAGE */}
                <div className="h-40 overflow-hidden relative bg-gray-100">
                  <img
                    src={item.groupImg || item.img} // Logic ganti gambar di sini
                    alt={item.campus}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="p-4 text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-['Space_Grotesk'] font-bold text-lg leading-tight mb-1">{item.name}</h3>
                  <p className="font-mono text-xs text-gray-500 uppercase">{item.role}</p>

                  <div className="mt-3 pt-3 border-t-2 border-dashed border-gray-300 w-full flex justify-center">
                    <span className="text-[10px] font-bold bg-[#005696] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                      <User size={10} /> Lihat Struktur
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Program Kerja Section (Conditional Epilog Logic) ---
const ProgramKerja = ({ onProgramClick }) => {
  // Helper: Menentukan Status berdasarkan Bulan & Tahun
  const getItemStatus = (dateStr) => {
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      Mei: 4,
      Jun: 5,
      Jul: 6,
      Agt: 7,
      Sep: 8,
      Okt: 9,
      Nov: 10,
      Des: 11,
    };

    const parts = dateStr.split(' ');
    const itemMonth = months[parts[0]];
    const itemYear = parseInt(parts[1]);

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    if (itemYear < currentYear) return 'done';
    if (itemYear > currentYear) return 'upcoming';

    if (itemMonth < currentMonth) return 'done';
    if (itemMonth === currentMonth) return 'ongoing';
    return 'upcoming';
  };

  // LOGIC BARU: Cek apakah SEMUA item statusnya 'done'
  const isAllDone = siteData.programs.timeline.every((item) => getItemStatus(item.month) === 'done');

  // Komponen Badge Status
  const StatusBadge = ({ status }) => {
    if (status === 'done') {
      return (
        <span className="bg-[#25D366] text-black border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase flex items-center gap-1 w-fit">
          <CheckCircle size={10} /> Sukses!
        </span>
      );
    }
    if (status === 'ongoing') {
      return (
        <span className="bg-[#F7941D] text-black border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase flex items-center gap-1 w-fit animate-pulse">
          <Loader2 size={10} className="animate-spin" /> Sedang Berjalan
        </span>
      );
    }
    return (
      <span className="bg-gray-200 text-gray-500 border-2 border-gray-400 border-dashed px-2 py-0.5 text-[10px] font-mono font-bold uppercase flex items-center gap-1 w-fit">
        <Clock size={10} /> Mendatang...
      </span>
    );
  };

  // Komponen Kecil untuk Kartu Program (Rutin/Tahunan)
  const ProgramCard = ({ prog, index }) => (
    <div onClick={() => onProgramClick(prog)} className="bg-[#1a1a1a] border-2 border-white p-6 hover:bg-white hover:text-black transition-all group relative overflow-hidden cursor-pointer h-full flex flex-col">
      <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl group-hover:opacity-5 transition-opacity">0{index + 1}</div>

      <prog.icon className="w-10 h-10 text-[#00A3E1] mb-6 group-hover:scale-110 transition-transform" />

      <div className="inline-block bg-[#F7941D] text-black font-bold font-mono text-xs px-2 py-1 mb-4 w-max">{prog.date}</div>

      <h3 className="font-['Space_Grotesk'] font-bold text-xl leading-tight mb-4 min-h-[3rem]">{prog.title}</h3>

      <p className="font-['Inter'] text-sm text-gray-400 group-hover:text-gray-800 mb-6 flex-1">{prog.desc}</p>

      <div className="mt-auto pt-4 border-t border-gray-700 group-hover:border-black flex items-center text-xs font-mono uppercase tracking-widest gap-2">
        <Camera size={14} /> View Details
      </div>
    </div>
  );

  return (
    <section id="programs" className="py-20 bg-[#1a1a1a] text-white border-b-4 border-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- NEW SECTION: TIMELINE PROGRAM --- */}
        <div className="mb-32">
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-black mb-16 uppercase text-center">
            <span className="text-[#F7941D]">Timeline</span> Kegiatan
          </h2>

          <div className="relative">
            {/* Garis Vertikal Tengah (Desktop) / Kiri (Mobile) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-white h-full z-0"></div>

            <div className="space-y-12">
              {siteData.programs.timeline.map((item, i) => {
                const status = getItemStatus(item.month);

                return (
                  <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Sisi Kosong untuk Desktop */}
                    <div className="flex-1 w-full hidden md:block"></div>

                    {/* Dot Marker di Garis */}
                    <div
                      className={`
                      absolute left-8 md:left-1/2 w-5 h-5 border-2 border-white rounded-full z-20 transform -translate-x-2 md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]
                      ${status === 'done' ? 'bg-[#25D366]' : status === 'ongoing' ? 'bg-[#F7941D]' : 'bg-gray-400'}
                    `}
                    ></div>

                    {/* Konten Kartu */}
                    <div className="flex-1 w-full pl-20 md:pl-0">
                      <div
                        className={`
                        bg-white text-black border-4 border-[#00A3E1] p-6 shadow-[8px_8px_0px_0px_#F7941D] 
                        relative group hover:-translate-y-1 transition-transform duration-300 z-10
                        ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                        ${status === 'upcoming' ? 'opacity-80 grayscale hover:grayscale-0' : ''} 
                      `}
                      >
                        {/* Connector Line Horizontal */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 w-14 bg-white z-0 ${i % 2 === 0 ? '-right-14' : '-left-14'}`}></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 border-b-2 border-gray-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="bg-black text-white font-mono text-xs px-2 py-1 font-bold inline-block w-fit">{item.month}</span>
                          </div>
                          <StatusBadge status={status} />
                        </div>

                        <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase leading-none mb-2">{item.title}</h3>
                        <p className="font-['Inter'] text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- CONDITIONAL CLOSING SECTION (EPILOG) --- */}
            {/* Hanya muncul jika variable isAllDone bernilai TRUE */}
            {isAllDone && (
              <div className="relative pt-16 flex justify-center animate-in fade-in duration-700">
                {/* Dot Penutup */}
                <div className="absolute left-8 md:left-1/2 top-16 w-8 h-8 bg-black border-4 border-white rounded-full z-20 transform -translate-x-3.5 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Kotak Pesan Penutup */}
                <div className="bg-[#1a1a1a] border-4 border-white p-6 text-center max-w-lg relative z-10 ml-16 md:ml-0 mt-8 md:mt-12">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F7941D] text-black font-bold font-mono px-3 py-1 text-xs border-2 border-white uppercase">Akhir Periode</div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl md:text-2xl mb-2">"Demikianlah Jejak Langkah Kami"</h3>
                  <p className="font-['Inter'] text-gray-400 text-sm">Setiap program adalah cerita, dan setiap cerita adalah bukti pengabdian. Terima kasih telah menjadi saksi perjalanan Kabinet Integrasi Asa.</p>
                  <Heart className="text-red-500 fill-red-500 mx-auto mt-4 animate-pulse" />
                </div>
              </div>
            )}

            {/* Marker akhir garis timeline (selalu muncul agar garis tidak putus menggantung) */}
            {!isAllDone && <div className="absolute left-8 md:left-1/2 bottom-0 w-8 h-1 bg-white transform -translate-x-3.5 md:-translate-x-1/2"></div>}
          </div>
        </div>

        {/* --- EXISTING SECTION: PROGRAM UNGGULAN --- */}
        <div>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-black mb-16 uppercase text-center">
            <span className="text-[#00A3E1]">Program</span> Unggulan
          </h2>

          {/* Category: TAHUNAN */}
          <div className="mb-16">
            <h3 className="font-['Space_Grotesk'] text-3xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white pb-2">
              <Star className="text-[#F7941D]" /> PROGRAM TAHUNAN (Annual)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteData.programs.tahunan.map((prog, i) => (
                <ProgramCard key={i} prog={prog} index={i} />
              ))}
            </div>
          </div>

          {/* Category: RUTIN */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-3xl font-bold mb-8 flex items-center gap-3 border-b-2 border-white pb-2">
              <Repeat className="text-[#00A3E1]" /> PROGRAM RUTIN (Routine)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteData.programs.rutin.map((prog, i) => (
                <ProgramCard key={i} prog={prog} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Random Gallery Section (New) ---
const RandomGallery = ({ onImageClick }) => {
  return (
    <section id="gallery" className="py-20 border-b-4 border-black bg-[#005696]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black mb-12 text-white">
          OUR
          <br />
          <span className="text-[#F7941D]">MOMENTS</span>
        </h2>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {siteData.galleryMoments.map((item, i) => (
            <div key={i} onClick={() => onImageClick(item)} className="break-inside-avoid relative group border-4 border-black bg-white p-2 rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer">
              <img src={item.src} alt={item.title} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
              <div className="absolute -bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-mono text-sm">#{item.title.replace(/\s/g, '')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Gallery/Marquee Section ---
const Gallery = () => {
  return (
    <section className="py-20 border-b-4 border-black overflow-hidden bg-[#00A3E1]">
      <div className="rotate-2 scale-110">
        {/* --- BARIS 1 (Kiri) --- */}
        <div className="flex overflow-hidden mb-8">
          <div className="flex animate-marquee gap-8 whitespace-nowrap pr-8">
            {/* Set Asli */}
            {[...Array(6)].map((_, i) => (
              <div key={`a-${i}`} className="text-4xl md:text-8xl font-black text-black font-['Space_Grotesk'] uppercase flex items-center gap-8">
                <span>Integrasi Asa</span>
                <span className="text-white text-stroke-2" style={{ WebkitTextStroke: '2px black' }}>
                  Politeknik LP3I
                </span>
              </div>
            ))}
            {/* Set Duplikat (Supaya nyambung tak terbatas) */}
            {[...Array(6)].map((_, i) => (
              <div key={`b-${i}`} className="text-4xl md:text-8xl font-black text-black font-['Space_Grotesk'] uppercase flex items-center gap-8">
                <span>Integrasi Asa</span>
                <span className="text-white text-stroke-2" style={{ WebkitTextStroke: '2px black' }}>
                  Politeknik LP3I
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- BARIS 2 (Kanan/Reverse) --- */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap pr-8">
            {/* Set Asli */}
            {[...Array(6)].map((_, i) => (
              <div key={`c-${i}`} className="text-4xl md:text-8xl font-black text-white font-['Space_Grotesk'] uppercase flex items-center gap-8">
                <span>Berani Beda</span>
                <span className="text-black text-stroke-2" style={{ WebkitTextStroke: '2px white' }}>
                  Nyata Karya
                </span>
              </div>
            ))}
            {/* Set Duplikat (Supaya nyambung tak terbatas) */}
            {[...Array(6)].map((_, i) => (
              <div key={`d-${i}`} className="text-4xl md:text-8xl font-black text-white font-['Space_Grotesk'] uppercase flex items-center gap-8">
                <span>Berani Beda</span>
                <span className="text-black text-stroke-2" style={{ WebkitTextStroke: '2px white' }}>
                  Nyata Karya
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer/Contact Section (with API Form) ---
const Footer = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulating API call - Replace this URL with your actual API endpoint (e.g. Formspree)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      fetch('https://formspree.io/f/manzzqzv', {
        // Ganti link ini
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          setFormStatus('success');
          e.target.reset();
        } else {
          setFormStatus('error');
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay
      console.log('Form Submitted:', data);
      setFormStatus('success');
      e.target.reset();
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 border-b-2 border-gray-700 pb-12 mb-12">
          {/* Contact Form Section */}
          <div className="bg-white p-6 border-4 border-[#00A3E1] shadow-[8px_8px_0px_0px_#F7941D] text-black">
            <h2 className="font-['Space_Grotesk'] text-3xl font-black mb-4 uppercase">Kirim Pesan</h2>

            {formStatus === 'success' ? (
              <div className="h-48 flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in">
                <CheckCircle size={48} className="text-[#005696]" />
                <p className="font-bold text-lg">Pesan Terkirim!</p>
                <button onClick={() => setFormStatus('idle')} className="text-sm underline hover:text-[#F7941D]">
                  Kirim lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-['Inter']">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Nama</label>
                  <input required name="name" type="text" className="w-full border-2 border-black p-2 focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all" placeholder="Nama Lengkap" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Email</label>
                  <input required name="email" type="email" className="w-full border-2 border-black p-2 focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all" placeholder="email@kampus.ac.id" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Pesan</label>
                  <textarea
                    required
                    name="message"
                    rows="3"
                    className="w-full border-2 border-black p-2 focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                    placeholder="Tulis pesan kolaborasi..."
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === 'loading'}
                  className="w-full bg-[#005696] text-white font-bold py-3 border-2 border-black hover:bg-[#F7941D] hover:text-black hover:shadow-[4px_4px_0px_0px_#000] transition-all flex justify-center items-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Send size={16} /> KIRIM SEKARANG
                    </>
                  )}
                </button>
                {formStatus === 'error' && <p className="text-red-600 text-xs font-bold text-center">Gagal mengirim. Coba lagi.</p>}
              </form>
            )}
          </div>

          {/* Contact Info & Footer Socials */}
          <div className="space-y-6 font-['Inter'] flex flex-col justify-center">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black mb-2">
              SIAP
              <br />
              BERKOLABORASI?
            </h2>
            <div className="flex items-start gap-4">
              <MapPin className="text-[#00A3E1] shrink-0 mt-1" />
              <p className="whitespace-pre-line">{siteData.footer.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="text-[#00A3E1]" />
              <p>{siteData.footer.website}</p>
            </div>

            {/* DYNAMIC FOOTER SOCIALS */}
            <div className="pt-8">
              <h3 className="font-bold text-gray-400 mb-4 uppercase tracking-widest">Social Media</h3>
              <SocialLinksRender socials={siteData.footer.socials} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-sm">
          <p className="text-center md:text-left">&copy; 2024 BEM Politeknik LP3I Jakarta. Kabinet Integrasi Asa.</p>
          <p className="mt-2 md:mt-0">
            Powered By <span className="text-[#F7941D]">Syuby-Dev.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [modalType, setModalType] = useState(null); // 'structure', 'dept', 'program', or 'gallery'

  const handleOpenModal = (data, type = 'general') => {
    setSelectedData(data);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedData(null);
    setModalType(null);
  };

  // Function to handle switching data inside modal (e.g. Department -> Minister)
  const handleSwitchData = (newData) => {
    setSelectedData(newData);
    // If switching to a minister, we treat it essentially like a structural member view
    setModalType('structure');
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#1a1a1a] selection:bg-[#F7941D] selection:text-black cursor-none overflow-x-hidden">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Space+Grotesk:wght@400;500;700;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Hide default cursor only on desktop */
        @media (min-width: 768px) {
          body, a, button, .cursor-pointer {
            cursor: none;
          }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-left: 2px solid black;
        }
        ::-webkit-scrollbar-thumb {
          background: #005696;
          border: 2px solid black;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #F7941D;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <VisiMisi />
        <StructureAndDepartments onMemberClick={(d) => handleOpenModal(d, 'structure')} onDeptClick={(d) => handleOpenModal(d, 'dept')} />
        <ProgramKerja onProgramClick={(d) => handleOpenModal(d, 'program')} />
        <RandomGallery onImageClick={(d) => handleOpenModal(d, 'gallery')} />
        <Gallery />
      </main>

      <Footer />

      {/* Detail Modal */}
      <DetailModal isOpen={!!selectedData} onClose={handleCloseModal} data={selectedData} type={modalType} onSwitchData={handleSwitchData} />
    </div>
  );
};

export default App;
