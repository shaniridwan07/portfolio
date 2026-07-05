import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Code, Mail, Server, Cpu, 
  Settings, Bot, Workflow, Globe, MapPin, 
  Phone, Calendar, ChevronRight,
  Power, Moon, Sun, RotateCcw, Command, User // <--- KODE BARU: Menambahkan 'User' di sini
} from 'lucide-react';

import fotoRidwan from './assets/1000199166.jpg';
import { Player } from '@lottiefiles/react-lottie-player';

// --- CONTENT DATA (BILINGUAL) ---
const content = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      role: "IT Support Hardware, Software & AI Automation",
      headline: "Automating the Future, Managing the Present.",
      desc: "Bridging the gap between robust IT Infrastructure and cutting-edge AI Automation to build efficient, scalable solutions."
    },
    about: {
      title: "About Me",
      text: "With over a decade of combined experience in operational management and IT infrastructure, I have successfully transitioned my leadership skills into the technical realm. Certified in MTCNA and Linux System Administration, I specialize in managing hardware, networks, and ERP systems. Currently, my passion lies in AI Automation to create smart applications and streamline workflows. Beyond core IT, I also handle multimedia production and event broadcasting, including operating OBS Studio and designing motion graphic bumpers for corporate seminars.",
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Projects Delivered", value: "15+" },
        { label: "Certifications", value: "5" }
      ]
    },
    skills: {
      title: "Tech Stack & Skills",
      categories: [
        { name: "AI & Automation", icon: Bot, skills: ["Zapier", "Make", "AppScript", "Gemini", "Lovable", "etc"] },
        { name: "IT Infrastructure", icon: Server, skills: ["Linux SysAdmin", "MikroTik (MTCNA)", "Hardware", "Networking", "OBS Studio"] },
        { name: "Management", icon: Briefcase, skills: ["IT Support", "ERP Systems", "Branch Operations"] }
      ]
    },
    experience: {
      title: "Work Experience",
      jobs: [
        { company: "Lembaga Management FEB UI", role: "IT & Asset Specialist", period: "May 2023 - Present", desc: "Managing network/hardware, leading ERP projects, and developing AI-based workflow automations." },
        { company: "PT. Swardharma Sarana Informatika", role: "Assistant Branch Manager", period: "Jan 2019 - Apr 2023", desc: "Oversaw branch operations, financial control, and team performance evaluations." },
        { company: "PT. Swardharma Sarana Informatika", role: "Administration Staff", period: "Oct 2013 - Dec 2018", desc: "Handled ATM cash supply administration and monthly financial reporting." }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        { title: "AI IT Helpdesk Application", tech: "AI, AppScript", desc: "Developed an AI-based application for the IT Helpdesk to streamline ticketing and automate initial troubleshooting responses.", icon: Bot },
        { title: "Zoom & Email Automation System", tech: "Zapier, Make, AppScript", desc: "Built an automated system for Zoom link requests integrated directly with email, reducing manual administrative tasks.", icon: Workflow },
        { title: "Employee Workload App", tech: "Gemini, Lovable", desc: "Currently developing a smart workload management application using Google Gemini to optimize task distribution.", icon: Cpu }
      ]
    },
    contact: { title: "Get In Touch", text: "Interested in collaborating or discussing IT & AI solutions? Let's connect!" }
  },
  id: {
    nav: { about: "Tentang", experience: "Pengalaman", projects: "Proyek", contact: "Kontak" },
    hero: {
      role: "IT Support Perangkat Keras, Perangkat Lunak & AI Automation",
      headline: "Mengotomatisasi Masa Depan, Mengelola Masa Kini.",
      desc: "Menjembatani Infrastruktur IT yang solid dengan Otomatisasi AI untuk membangun solusi yang efisien."
    },
    about: {
      title: "Tentang Saya",
      text: "Dengan lebih dari satu dekade pengalaman gabungan dalam manajemen operasional dan infrastruktur IT. Tersertifikasi MTCNA dan Linux System Administration, saya ahli dalam mengelola hardware, jaringan, dan sistem ERP. Saat ini, fokus utama saya adalah Otomatisasi AI untuk menciptakan aplikasi cerdas dan mempercepat alur kerja. Di luar IT inti, saya juga berpengalaman menangani produksi multimedia dan broadcasting acara, termasuk menjadi operator OBS Studio serta mendesain motion graphic bumper sederhana untuk berbagai seminar di perusahaan.",
      stats: [
        { label: "Tahun Pengalaman", value: "10+" },
        { label: "Proyek Selesai", value: "15+" },
        { label: "Sertifikasi", value: "2" }
      ]
    },
    skills: {
      title: "Keahlian & Teknologi",
      categories: [
        { name: "AI & Otomatisasi", icon: Bot, skills: ["Zapier", "Make", "AppScript", "Gemini", "Lovable", "dan Lainnya"] },
        { name: "Infrastruktur IT", icon: Server, skills: ["Linux SysAdmin", "MikroTik (MTCNA)", "Hardware", "Jaringan", "OBS Studio"] },
        { name: "Manajemen", icon: Briefcase, skills: ["IT Support", "Sistem ERP", "Operasional Cabang"] }
      ]
    },
    experience: {
      title: "Pengalaman Kerja",
      jobs: [
        { company: "Lembaga Management FEB UI", role: "Spesialis IT & Aset", period: "Mei 2023 - Sekarang", desc: "Mengelola jaringan/hardware, memimpin proyek ERP, dan mengembangkan otomatisasi AI." },
        { company: "PT. Swardharma Sarana Informatika", role: "Asisten Manajer Cabang", period: "Jan 2019 - Apr 2023", desc: "Mengawasi operasional cabang, kontrol keuangan, dan evaluasi kinerja tim." },
        { company: "PT. Swardharma Sarana Informatika", role: "Staf Administrasi", period: "Okt 2013 - Des 2018", desc: "Menangani administrasi suplai kas ATM dan pelaporan keuangan bulanan." }
      ]
    },
    projects: {
      title: "Proyek Unggulan",
      items: [
        { title: "Aplikasi AI IT Helpdesk", tech: "AI, AppScript", desc: "Mengembangkan aplikasi berbasis AI untuk IT Helpdesk guna mempercepat respons dan otomatisasi tiket bantuan.", icon: Bot },
        { title: "Sistem Otomatisasi Zoom", tech: "Zapier, Make, AppScript", desc: "Membangun sistem otomatisasi pengajuan link Zoom yang terintegrasi langsung dengan email.", icon: Workflow },
        { title: "Aplikasi Beban Kerja Pegawai", tech: "Gemini, Lovable", desc: "Sedang mengembangkan aplikasi manajemen beban kerja cerdas menggunakan Google Gemini.", icon: Cpu }
      ]
    },
    contact: { title: "Hubungi Saya", text: "Tertarik untuk berkolaborasi atau berdiskusi seputar IT & AI? Mari terhubung!" }
  }
};

// --- SFX AUDIO SYNTHESIZER (Tanpa MP3) ---
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);

    if (type === 'click') {
      const osc = ctx.createOscillator();
      osc.connect(gain);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } 
    else if (type === 'unlock') {
      [523.25, 659.25, 783.99].forEach(freq => { // C Major Chord (Chime)
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
        osc.start();
        osc.stop(ctx.currentTime + 1.5);
      });
    }
  } catch(e) {} // Abaikan kalau browser nggak support audio
};

// --- KOMPONEN FOTO PROFIL ---
const ProfileImage = ({ className }) => (
  <img src={fotoRidwan} alt="Ridwan Shani Profile" className={`w-full h-full object-cover ${className}`} />
);

// --- KURSOR ANIMASI ---
const CursorFollower = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.closest('button') || target.closest('a')) setIsHovered(true);
      else setIsHovered(false);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      <div 
        className={`absolute border rounded-full transition-all duration-150 ease-out flex items-center justify-center
          ${isHovered ? 'w-12 h-12 bg-white/20 border-white/50 backdrop-blur-sm shadow-lg' : 'w-8 h-8 border-slate-400/60 shadow-[0_0_10px_rgba(148,163,184,0.3)]'}`}
        style={{ transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))` }}
      >
        <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('about');
  const [time, setTime] = useState(new Date());
  const [isLocked, setIsLocked] = useState(false); // Default unlocked
  const [unlocking, setUnlocking] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // --- KODE BARU: State untuk Layar Hello ---
  const [showHello, setShowHello] = useState(true);

  const t = content[lang];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Auto hide hello screen after animation ---
  useEffect(() => {
    const helloTimer = setTimeout(() => {
      setShowHello(false);
    }, 6000); // Hide after 6 seconds
    return () => clearTimeout(helloTimer);
  }, []);

  // --- KODE BARU: Handle Layar Hello ---
  const handleHello = () => {
    setShowHello(false);
  };

  const handleUnlock = () => {
    playSound('unlock');
    setUnlocking(true);
    setTimeout(() => setIsLocked(false), 900); 
  };

  const changeTab = (id) => {
    playSound('click');
    setActiveTab(id);
  };

  const toggleDarkMode = () => {
    playSound('click');
    setIsDark(!isDark);
  };

  // Tema Dinamis
  const theme = {
    bg: isDark ? 'bg-slate-900' : 'bg-[#f8fafc]',
    text1: isDark ? 'text-slate-100' : 'text-slate-900',
    text2: isDark ? 'text-slate-300' : 'text-slate-700',
    card: isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/10 border-white/20',
    item: isDark ? 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-700/60' : 'bg-white/40 border-white/50 hover:bg-white/60',
    topbar: isDark ? 'bg-slate-900/60 border-slate-700/50 text-slate-200' : 'bg-white/20 border-white/30 text-slate-800'
  };

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden relative transition-colors duration-500 ${theme.bg}`}>
      <CursorFollower />

      {/* --- MAC OS LOTTIE BOOT SCREEN --- */}
      {showHello && (
        <div className="fixed inset-0 z-[99999] bg-white/30 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center animate-hello-bg pointer-events-none border-b border-white/40">
          
          <Player
            autoplay
            keepLastFrame // Biar pas animasinya selesai, dia berhenti di frame terakhir (nggak ngulang dari awal sebelum ngilang)
            src="https://lottie.host/3a9818ba-6380-45e7-b9d4-cf08af75eb24/d0KqdgES7v.json"
            style={{ height: '550px', width: '550px' }} // Lu bisa atur ukuran animasinya di sini
          />

        </div>
      )}

      {/* Background Gradients */}
      <div className={`fixed inset-0 z-[-1] transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-90 bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]'}`} />
      <div className={`fixed inset-0 z-[-1] transition-opacity duration-500 ${isDark ? 'opacity-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950' : 'opacity-0'}`} />
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />

      {/* --- MAC OS LOCK SCREEN (Cinematic Anim) --- */}
      {isLocked && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-3xl transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${unlocking ? 'animate-cinematic-zoom' : 'opacity-100 scale-100 filter-none'}`}>
          <div className="absolute top-0 right-4 h-7 flex items-center space-x-4 text-white/80 text-xs font-medium">
            <span>{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>

          <div className="flex flex-col items-center animate-fade-in-up">
            <div className="w-28 h-28 rounded-full border-2 border-white/30 shadow-2xl flex items-center justify-center mb-6 overflow-hidden relative">
               <ProfileImage />
            </div>
            
            <h1 className="text-3xl font-semibold text-white mb-6 tracking-tight drop-shadow-md">Welcome To May Portofolio</h1>
            
            <div onClick={handleUnlock} className="relative w-56 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-between px-3 cursor-pointer hover:bg-white/30 transition-all shadow-inner group overflow-hidden">
              <span className="text-white/80 text-sm font-medium ml-1">Click to Enter...</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                 <ChevronRight className="w-4 h-4 text-slate-800 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAC OS TOP BAR */}
      <div className={`fixed top-0 left-0 right-0 h-7 backdrop-blur-md flex justify-between items-center px-4 text-xs font-medium z-50 transition-colors duration-500 ${theme.topbar}`}>
        <div className="flex items-center space-x-4 cursor-default">
          <Command className={`w-3.5 h-3.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`} />
          <span className="font-bold">Portofolio Ridwan Shani</span>
        </div>
        <div className="flex items-center space-x-4">
          
          {/* DARK MODE SWITCH (Pill Style) */}
          <button onClick={toggleDarkMode} className={`relative w-[42px] h-[22px] rounded-full flex items-center transition-colors duration-300 border shadow-inner ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-slate-300 border-slate-400'}`}>
            <div className={`absolute w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center transition-transform duration-300 shadow-sm ${isDark ? 'translate-x-[20px]' : 'translate-x-[2px]'}`}>
              {isDark ? <Moon className="w-3 h-3 text-slate-700" /> : <Sun className="w-3 h-3 text-amber-500" />}
            </div>
          </button>

          <button onClick={() => { playSound('click'); setLang(lang === 'en' ? 'id' : 'en'); }} className={`hover:bg-white/20 px-2 py-0.5 rounded transition-colors flex items-center space-x-1 border border-transparent ${isDark ? 'hover:border-slate-600' : 'hover:border-slate-300'}`}>
            <Globe className="w-3 h-3" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* --- KODE BARU: Format Jam Lengkap (Hari, Bulan, Tanggal, Jam) --- */}
<span>{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {!isLocked && (
        <main className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen flex flex-col items-center">
          
          {/* HERO SECTION */}
          <div className="w-full text-center mt-4 mb-10 animate-spring-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white/50 shadow-xl overflow-hidden bg-slate-200 flex items-center justify-center relative mb-4">
              <ProfileImage />
            </div>
            <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-sm ${theme.text1}`}>
              Ridwan Shani, S.Kom
            </h1>
            <p className={`text-xl md:text-2xl font-medium mb-4 drop-shadow-sm ${theme.text2}`}>
              {t.hero.role}
            </p>
            <p className={`max-w-2xl mx-auto text-lg leading-relaxed px-5 py-2.5 rounded-full backdrop-blur-sm border shadow-sm transition-colors ${theme.card} ${theme.text1}`}>
              {t.hero.headline}
            </p>
          </div>

          {/* MAIN WINDOW (Cinematic Bouncy Entry) */}
          <div className="w-full max-w-4xl relative animate-spring-up" style={{ animationDelay: '0.3s' }}>
            <div className={`absolute top-0 left-0 right-0 h-10 backdrop-blur-xl border-b rounded-t-2xl flex items-center px-4 z-20 ${theme.topbar}`}>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
              </div>
            </div>

            <div className={`backdrop-blur-xl shadow-2xl rounded-2xl rounded-t-none p-6 pt-16 md:px-10 border transition-colors duration-500 ${theme.card}`}>
              
              {/* CONTENT ROUTING */}
              {activeTab === 'about' && (
                <div className="animate-fade-in">
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${theme.text1}`}>
                    <div className="w-6 h-6 mr-3 rounded-full overflow-hidden border border-slate-400/50"><ProfileImage /></div>
                    {t.about.title}
                  </h2>
                  <p className={`leading-relaxed text-lg mb-8 ${theme.text2}`}>{t.about.text}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {t.about.stats.map((stat, i) => (
                      <div key={i} className={`p-4 rounded-xl text-center border shadow-sm transition-all ${theme.item}`}>
                        <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                        <div className={`text-sm font-medium ${theme.text2}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 flex items-center ${theme.text1}`}><Settings className="mr-3 text-blue-600" /> {t.skills.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.skills.categories.map((cat, i) => (
                      <div key={i} className={`p-5 rounded-xl border ${theme.item}`}>
                        <h4 className={`font-bold flex items-center mb-3 ${theme.text1}`}><cat.icon className="w-5 h-5 mr-2 opacity-80" /> {cat.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill, j) => (
                            <span key={j} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border shadow-sm ${isDark ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white/80 border-slate-200 text-slate-800'}`}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="animate-fade-in">
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${theme.text1}`}><Briefcase className="mr-3 text-blue-600" /> {t.experience.title}</h2>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent">
                    {t.experience.jobs.map((job, i) => (
                      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-100 bg-blue-100 text-blue-600 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border shadow-sm transition-all ${theme.item}`}>
                          <div className="flex flex-col mb-1">
                            <span className={`font-bold text-lg ${theme.text1}`}>{job.role}</span>
                            <span className="text-sm font-semibold text-blue-600">{job.company}</span>
                          </div>
                          <time className={`block text-xs font-medium mb-2 opacity-70 ${theme.text2}`}>{job.period}</time>
                          <p className={`text-sm leading-relaxed ${theme.text2}`}>{job.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="animate-fade-in">
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${theme.text1}`}><Code className="mr-3 text-blue-600" /> {t.projects.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.projects.items.map((proj, i) => (
                      <div key={i} className={`rounded-xl border p-6 transition-all shadow-sm hover:shadow-lg group ${theme.item}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg shadow-sm group-hover:scale-110 transition-transform ${isDark ? 'bg-slate-700' : 'bg-white/80'}`}>
                            <proj.icon className={`w-6 h-6 ${theme.text1}`} />
                          </div>
                          <span className={`text-xs font-bold px-2 py-1 rounded-md border ${isDark ? 'bg-slate-700/80 border-slate-600 text-slate-300' : 'bg-slate-200/60 border-slate-300/50 text-slate-800'}`}>
                            {proj.tech}
                          </span>
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${theme.text1}`}>{proj.title}</h3>
                        <p className={`text-sm leading-relaxed ${theme.text2}`}>{proj.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="animate-fade-in text-center max-w-lg mx-auto py-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border shadow-sm mb-6 ${theme.item}`}>
                    <Mail className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 ${theme.text1}`}>{t.contact.title}</h2>
                  <p className={`text-lg mb-8 ${theme.text2}`}>{t.contact.text}</p>
                  <div className="space-y-4">
                    <a href="mailto:shaniridwan94@gmail.com" className={`flex items-center justify-center w-full p-4 border rounded-xl shadow-sm transition-all font-semibold group ${theme.item} ${theme.text1}`}>
                      <Mail className="w-5 h-5 mr-3 text-blue-500" /> shaniridwan94@gmail.com
                    </a>
                    <a href="https://wa.me/6285173401294" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-full p-4 border rounded-xl shadow-sm transition-all font-semibold group ${theme.item} ${theme.text1}`}>
  <Phone className="w-5 h-5 mr-3 text-green-500" /> WhatsApp Me
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* MAC OS DOCK (Staggered Pop Animation) */}
      {!isLocked && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className={`flex items-end space-x-2 backdrop-blur-2xl border shadow-2xl rounded-2xl p-2 h-16 transition-colors duration-500 ${isDark ? 'bg-slate-800/60 border-slate-600/50' : 'bg-white/20 border-white/40'}`}>
            
            {[
              /* --- KODE BARU: Mengganti isProfile menjadi icon User bawaan --- */
              { id: 'about', icon: User, label: t.nav.about },
              { id: 'experience', icon: Briefcase, label: t.nav.experience },
              { id: 'projects', icon: Code, label: t.nav.projects },
              { id: 'contact', icon: Mail, label: t.nav.contact },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => changeTab(item.id)}
                className="group relative flex flex-col items-center justify-end h-full w-12 hover:w-16 hover:-translate-y-4 transition-all duration-300 origin-bottom animate-stagger-pop opacity-0"
                style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
              >
                <div className={`absolute -top-10 backdrop-blur text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border shadow-lg ${isDark ? 'bg-slate-700/90 text-white border-slate-600' : 'bg-gray-800/80 text-white border-white/10'}`}>
                  {item.label}
                </div>
                <div className={`w-12 h-12 rounded-xl border shadow-md flex items-center justify-center group-hover:w-14 group-hover:h-14 transition-all duration-300 relative overflow-hidden ${isDark ? 'bg-slate-700 border-slate-500' : 'bg-white/90 border-white/50'}`}>
                  {item.isProfile ? (
                    <ProfileImage className="z-0" />
                  ) : (
                    <item.icon className={`w-6 h-6 transition-transform relative z-10 ${isDark ? 'text-slate-200' : 'text-slate-700'}`} />
                  )}
                </div>
                {activeTab === item.id && <div className={`absolute -bottom-1 w-1 h-1 rounded-full ${isDark ? 'bg-slate-300' : 'bg-slate-600'}`}></div>}
              </button>
            ))}
            
            <div className={`w-px h-10 mx-1 ${isDark ? 'bg-slate-600/50' : 'bg-white/40'}`}></div>
            
            {/* LinkedIn & GitHub Dock */}
            <a href="#" target="_blank" className="group relative flex flex-col items-center justify-end h-full w-12 hover:w-14 hover:-translate-y-2 transition-all duration-300 origin-bottom animate-stagger-pop opacity-0" style={{ animationDelay: '1.0s' }}>
              <div className="absolute -top-10 bg-gray-800/80 backdrop-blur text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">LinkedIn</div>
              <div className="w-12 h-12 rounded-xl border shadow-md flex items-center justify-center bg-[#0077b5]/10 border-[#0077b5]/30 group-hover:w-13 group-hover:h-13 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0077b5]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* --- KUMPULAN ANIMASI CSS --- */}
      <style dangerouslySetInnerHTML={{__html: `
/* =========================================================
           KODE UPDATE: ANIMASI HELLO SCREEN (LEBIH PRESISI SESUAI VIDEO)
           --------------------------------------------------------- */
        
        @keyframes hello-text {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: scale(0.9) translateY(20px); /* Muncul dari bawah, blur, scale kecil */
          }
          20% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1) translateY(0px); /* Menjadi jelas, scale normal, posisi tengah */
          }
          70% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1) translateY(0px); /* Bertahan jelas */
          }
          100% {
            opacity: 0;
            filter: blur(4px);
            transform: scale(1.02) translateY(-10px); /* Hilang ke atas, blur sedikit, scale membesar */
          }
        }
        
        @keyframes hello-bg {
          0% {
            opacity: 1;
          }
          90% {
            opacity: 1; /* Latar belakang hitam bertahan lama */
          }
          100% {
            opacity: 0; /* Menghilang mulus di detik terakhir */
          }
        }

        .animate-hello-text {
          /* Total durasi 6.0s untuk teks, seperti di video asli */
          animation: hello-text 6.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-hello-bg {
          /* Total durasi 6.0s untuk latar belakang, seperti di video asli */
          animation: hello-bg 6.0s ease-in-out forwards;
        }
        
        /* --------------------------------------------------------- */
      
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        @keyframes cinematic-zoom {
          0% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.4); filter: blur(25px); }
        }
        
        @keyframes spring-up {
          0% { opacity: 0; transform: translateY(80px) scale(0.95); }
          50% { opacity: 1; transform: translateY(-5px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes stagger-pop {
          0% { opacity: 0; transform: translateY(20px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-cinematic-zoom { animation: cinematic-zoom 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-spring-up { animation: spring-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-stagger-pop { animation: stagger-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}} />
    </div>
  );
}