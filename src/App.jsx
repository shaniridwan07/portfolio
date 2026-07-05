import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Code, Mail, Server, Cpu, 
  Settings, Bot, Workflow, Globe, MapPin, 
  Phone, Calendar, ChevronRight,
  Moon, Sun, User, ExternalLink
} from 'lucide-react';

import fotoRidwan from './assets/1000199166.jpg';

// --- CONTENT DATA (BILINGUAL) ---
const content = {
  en: {
    nav: { about: "ABOUT", experience: "EXPERIENCE", projects: "PROJECTS", contact: "CONTACT" },
    hero: {
      role: "IT Support Hardware, Software & AI Automation",
      headline: "AUTOMATING THE FUTURE",
      subheadline: "MANAGING THE PRESENT",
      desc: "Bridging the gap between robust IT Infrastructure and cutting-edge AI Automation to build efficient, scalable solutions."
    },
    about: {
      title: "WHO AM I?",
      text: "With over a decade of combined experience in operational management and IT infrastructure. Certified in MTCNA and Linux System Administration, I specialize in managing hardware, networks, and ERP systems. Currently, my passion lies in AI Automation to create smart applications and streamline workflows.",
      stats: [
        { label: "YEARS EXP", value: "10+" },
        { label: "PROJECTS", value: "15+" },
        { label: "CERTIF", value: "2" }
      ]
    },
    skills: {
      title: "MY STACK",
      categories: [
        { name: "AI & AUTOMATION", icon: Bot, skills: ["Zapier", "Make", "AppScript", "Gemini", "Lovable"] },
        { name: "IT INFRASTRUCTURE", icon: Server, skills: ["Linux SysAdmin", "MikroTik", "Hardware", "Networking", "OBS Studio"] },
        { name: "MANAGEMENT", icon: Briefcase, skills: ["IT Support", "ERP Systems", "Branch Ops"] }
      ]
    },
    experience: {
      title: "WORK HISTORY",
      jobs: [
        { company: "Lembaga Management FEB UI", role: "IT & Asset Specialist", period: "2023 - NOW", desc: "Managing network/hardware, leading ERP projects, and developing AI-based workflow automations." },
        { company: "PT. Swardharma Sarana Informatika", role: "Assistant Branch Manager", period: "2019 - 2023", desc: "Oversaw branch operations, financial control, and team performance evaluations." },
        { company: "PT. Swardharma Sarana Informatika", role: "Administration Staff", period: "2013 - 2018", desc: "Handled ATM cash supply administration and monthly financial reporting." }
      ]
    },
    projects: {
      title: "FEATURED WORK",
      items: [
        { title: "AI IT Helpdesk", tech: "AI, AppScript", desc: "AI-based application for IT Helpdesk to streamline ticketing.", icon: Bot },
        { title: "Zoom Auto System", tech: "Zapier, Make", desc: "Automated Zoom link request system integrated with email.", icon: Workflow },
        { title: "Workload App", tech: "Gemini, Lovable", desc: "Smart workload management using Google Gemini.", icon: Cpu }
      ]
    },
    contact: { title: "LET'S TALK!", text: "Interested in collaborating or discussing IT & AI solutions?" }
  },
  id: {
    nav: { about: "TENTANG", experience: "PENGALAMAN", projects: "PROYEK", contact: "KONTAK" },
    hero: {
      role: "IT Support Hardware, Software & AI Automation",
      headline: "MENGOTOMATISASI MASA DEPAN",
      subheadline: "MENGELOLA SAAT INI",
      desc: "Menjembatani Infrastruktur IT yang solid dengan Otomatisasi AI untuk membangun solusi yang efisien dan dapat diandalkan.",
    },
    about: {
      title: "SIAPA SAYA?",
      text: "Dengan lebih dari sepuluh tahun pengalaman gabungan dalam manajemen operasional dan infrastruktur IT. Tersertifikasi MTCNA dan Linux System Administration, saya ahli dalam mengelola hardware, jaringan, dan sistem ERP.",
      stats: [
        { label: "TAHUN EXP", value: "10+" },
        { label: "PROYEK", value: "15+" },
        { label: "SERTIF", value: "2" }
      ]
    },
    skills: {
      title: "TEKNOLOGI SAYA",
      categories: [
        { name: "AI & OTOMATISASI", icon: Bot, skills: ["Zapier", "Make", "AppScript", "Gemini", "Lovable"] },
        { name: "INFRA IT", icon: Server, skills: ["Linux SysAdmin", "MikroTik", "Hardware", "Jaringan", "OBS Studio"] },
        { name: "MANAJEMEN", icon: Briefcase, skills: ["IT Support", "ERP Sistem", "Operasional Cabang"] }
      ]
    },
    experience: {
      title: "RIWAYAT KERJA",
      jobs: [
        { company: "Lembaga Management FEB UI", role: "Spesialis IT & Aset", period: "2023 - SEKARANG", desc: "Mengelola jaringan/hardware, memimpin proyek ERP, dan mengembangkan otomatisasi AI." },
        { company: "PT. Swardharma Sarana Informatika", role: "Asisten Manajer Cabang", period: "2019 - 2023", desc: "Mengawasi operasional cabang, kontrol keuangan, dan evaluasi kinerja tim." },
        { company: "PT. Swardharma Sarana Informatika", role: "Staf Administrasi", period: "2013 - 2018", desc: "Menangani administrasi suplai kas ATM dan pelaporan keuangan bulanan." }
      ]
    },
    projects: {
      title: "PROYEK PILIHAN",
      items: [
        { title: "AI IT Helpdesk", tech: "AI, AppScript", desc: "Aplikasi berbasis AI untuk IT Helpdesk.", icon: Bot },
        { title: "Sistem Auto Zoom", tech: "Zapier, Make", desc: "Sistem otomatis permintaan link Zoom.", icon: Workflow },
        { title: "Aplikasi Beban Kerja", tech: "Gemini, Lovable", desc: "Manajemen beban kerja cerdas dengan Gemini.", icon: Cpu }
      ]
    },
    contact: { title: "HUBUNGI SAYA!", text: "Tertarik untuk berkolaborasi atau berdiskusi tentang IT & AI?" }
  }
};

// --- NEO-BRUTALIST COMPONENTS ---

const BrutalCard = ({ children, className = "" }) => (
  <div className={`bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 ${className}`}>
    {children}
  </div>
);

const BrutalButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-300 border-4 border-black",
    secondary: "bg-white hover:bg-gray-100 border-4 border-black",
    danger: "bg-red-400 hover:bg-red-300 border-4 border-black",
    success: "bg-green-400 hover:bg-green-300 border-4 border-black",
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${variants[variant]} px-6 py-3 font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-2 active:translate-y-2 ${className}`}
    >
      {children}
    </button>
  );
};

const BrutalBadge = ({ children, className = "" }) => (
  <span className={`inline-block bg-pink-400 border-3 border-black px-3 py-1 font-bold text-sm mr-2 mb-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${className}`}>
    {children}
  </span>
);

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('about');
  const [isDark, setIsDark] = useState(false);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 p-4 md:p-8">
      {/* NEO-BRUTALIST NAVIGATION */}
      <nav className="max-w-6xl mx-auto mb-12">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <span className="text-white font-black text-2xl">RS</span>
            </div>
            <h1 className="font-black text-2xl tracking-tighter">RIDWAN SHANI</h1>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <button 
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="bg-blue-400 border-3 border-black px-4 py-2 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Globe className="w-4 h-4 inline-block mr-2" />
              {lang.toUpperCase()}
            </button>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className="bg-purple-400 border-3 border-black px-4 py-2 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* HERO SECTION */}
        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <BrutalCard>
              <BrutalBadge className="bg-cyan-400">{t.hero.role}</BrutalBadge>
              <h2 className="text-5xl md:text-7xl font-black leading-none mt-4 mb-2">
                {t.hero.headline}
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-pink-600 mb-6">
                {t.hero.subheadline}
              </h3>
              <p className="text-xl font-semibold mb-8 text-gray-700">
                {t.hero.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <BrutalButton onClick={() => setActiveTab('projects')}>
                  VIEW WORK <ChevronRight className="w-5 h-5 inline-block ml-2" />
                </BrutalButton>
                <BrutalButton variant="secondary" onClick={() => setActiveTab('contact')}>
                  GET IN TOUCH
                </BrutalButton>
              </div>
            </BrutalCard>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-pink-500 border-4 border-black"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-cyan-500 border-4 border-black"></div>
              <div className="relative border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img 
                  src={fotoRidwan} 
                  alt="Ridwan Shani" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {[
            { id: 'about', icon: User, label: t.nav.about },
            { id: 'experience', icon: Briefcase, label: t.nav.experience },
            { id: 'projects', icon: Code, label: t.nav.projects },
            { id: 'contact', icon: Mail, label: t.nav.contact },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-8 py-4 font-black text-lg border-4 transition-all ${
                activeTab === item.id 
                  ? 'bg-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]' 
                  : 'bg-white text-black border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1'
              }`}
            >
              <item.icon className="w-5 h-5 inline-block mr-2" />
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <BrutalCard className="mb-12">
          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-black pb-4">
                {t.about.title}
              </h2>
              
              <p className="text-xl font-semibold mb-10 leading-relaxed text-gray-800">
                {t.about.text}
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {t.about.stats.map((stat, i) => (
                  <div key={i} className="bg-yellow-300 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-lg font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* SKILLS */}
              <h3 className="text-3xl font-black mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3" /> {t.skills.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.skills.categories.map((cat, i) => (
                  <div key={i} className="bg-pink-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center mb-4">
                      <cat.icon className="w-10 h-10 mr-3" />
                      <h4 className="text-xl font-black">{cat.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, j) => (
                        <BrutalBadge key={j} className="bg-white">
                          {skill}
                        </BrutalBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-black pb-4">
                {t.experience.title}
              </h2>
              
              <div className="space-y-8">
                {t.experience.jobs.map((job, i) => (
                  <div key={i} className="bg-blue-100 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-4 -left-4 bg-cyan-400 border-4 border-black px-6 py-2">
                      <Calendar className="w-6 h-6 inline-block mr-2" />
                      <span className="font-black">{job.period}</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-3xl font-black mb-2">{job.role}</h3>
                      <p className="text-xl font-bold text-blue-700 mb-4">{job.company}</p>
                      <p className="text-lg font-semibold text-gray-700">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-black pb-4">
                {t.projects.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.projects.items.map((proj, i) => (
                  <div key={i} className="bg-green-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="bg-green-400 border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <proj.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-2">{proj.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tech.split(', ').map((tech, j) => (
                        <span key={j} className="bg-white border-2 border-black px-3 py-1 text-sm font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="font-semibold text-gray-700">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">{t.contact.title}</h2>
              <p className="text-xl font-semibold mb-10 text-gray-700">{t.contact.text}</p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:shaniridwan94@gmail.com"
                  className="block bg-red-400 border-4 border-black p-6 text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="flex items-center">
                    <Mail className="w-10 h-10 mr-4" />
                    <div>
                      <div className="font-black text-xl">EMAIL</div>
                      <div className="font-bold text-lg">shaniridwan94@gmail.com</div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/6285173401294" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-green-400 border-4 border-black p-6 text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="flex items-center">
                    <Phone className="w-10 h-10 mr-4" />
                    <div>
                      <div className="font-black text-xl">WHATSAPP</div>
                      <div className="font-bold text-lg">+62 851 7340 1294</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </BrutalCard>

        {/* FOOTER */}
        <footer className="text-center pb-8">
          <div className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
            <p className="font-bold text-lg">© 2024 RIDWAN SHANI — ALL RIGHTS RESERVED</p>
            <p className="font-semibold text-sm text-gray-400 mt-2">DESIGNED WITH NEO-BRUTALISM</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
