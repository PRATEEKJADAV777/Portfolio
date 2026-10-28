// Please paste the complete App.jsx code I provided
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Layout, 
  Database, 
  ShieldCheck, 
  Wrench, 
  Briefcase, 
  GraduationCap, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

// --- UI Components ---

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl hover:border-white/20 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium text-cyan-100 bg-cyan-950/50 border border-cyan-800/50 rounded-full whitespace-nowrap">
    {children}
  </span>
);

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 ${className}`}>
    {children}
  </span>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          PJ<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors block">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for new opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Hi, I'm Pratik Jadav <br />
          <GradientText>Full-Stack Engineer.</GradientText>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          I'm a software engineer with 2+ years of experience architecting multi-tenant SaaS platforms and secure RESTful APIs. I specialize in driving end-to-end development using React, Node.js, and TypeScript to deliver scalable, real-time web and mobile applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {/* Functional Email Link */}
          <a href="mailto:jadavpratik347@gmail.com" className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
          
          <div className="flex space-x-4">
            {/* Functional GitHub Link */}
            <a href="https://github.com/PRATEEKJADAV777" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex-1 flex justify-center items-center">
              <Github size={20} />
            </a>
            {/* Functional LinkedIn Link */}
            <a href="https://linkedin.com/in/pratik-jadav-90b4b6301" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex-1 flex justify-center items-center">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-cyan-400" />
            <span>Ahmedabad, Gujarat, India</span>
          </div>
          {/* Functional Phone Link */}
          <a href="tel:+917016845336" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
            <Phone size={16} className="text-cyan-400" />
            <span>+91 70168 45336</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-cyan-400 mb-4" size={32} />,
      skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-cyan-400 mb-4" size={32} />,
      skills: ['React.js', 'Redux', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend',
      icon: <Database className="text-emerald-400 mb-4" size={32} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Prisma ORM', 'BullMQ', 'Socket.io', 'Razorpay', 'Nodemailer']
    },
    {
      title: 'Databases & Tools',
      icon: <Wrench className="text-emerald-400 mb-4" size={32} />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Git', 'Vitest']
    },
    {
      title: 'Security',
      icon: <ShieldCheck className="text-cyan-400 mb-4" size={32} />,
      skills: ['JWT', 'OAuth2 (PKCE)', 'Role-Based Access Control (RBAC)', 'Rate Limiting']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col h-full">
              {category.icon}
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <Badge key={sIdx}>{skill}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const projects = [
    {
      title: "Multi-Tenant Restaurant & Retail Order Management Platform (SaaS)",
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'React 19', 'TypeScript', 'Tailwind CSS'],
      points: [
        "Architected an order management SaaS for restaurants and retail, featuring POS, Kitchen Display System, QR ordering, payments, and reporting.",
        "Developed REST APIs using Prisma and PostgreSQL, implementing a separate database architecture per tenant location to ensure data isolation.",
        "Streamlined tenant onboarding by engineering a fully automated, resumable setup pipeline with BullMQ, eliminating manual configuration steps and maintaining synchronization across apps using Redis Streams.",
        "Implemented secure login with OAuth2 (PKCE), JWT, rate limiting, and RBAC; integrated Razorpay payments with duplicate-payment protection to ensure secure, uninterrupted transaction processing at scale.",
        "Designed a responsive React 19 front-end supporting both English and Hindi localization."
      ]
    },
    {
      title: "School Meal & Allergy Management System",
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
      points: [
        "Engineered a school meal planning system that automates safety checks, successfully cross-referencing student dietary profiles against complex meal ingredient databases to prevent potential health risks.",
        "Programmed the React frontend and a secure Node.js/Express API with JWT authentication and rate limiting.",
        "Integrated a calendar-based menu planning module to streamline weekly scheduling for school administrators."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-10"></div>

        <div className="relative border-l border-white/10 ml-2 pl-6 md:ml-4 md:pl-10 space-y-12">
          
          <div className="relative">
            {/* Timeline dot - exactly offset by padding + half dot width to prevent overlapping */}
            <div className="absolute -left-[33px] md:-left-[49px] top-1.5 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-slate-950"></div>
            
            <div className="mb-8">
              <div className="flex flex-col mb-3">
                {/* Fixed the squishing icon on mobile using shrink-0 */}
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-start gap-3 mb-3">
                  <Briefcase size={22} className="text-cyan-400 shrink-0 mt-1" />
                  <span>EnlightVision Technologies Pvt. Ltd.</span>
                </h3>
                <span className="text-emerald-400 font-medium text-sm bg-emerald-500/10 px-3 py-1 rounded-full w-fit">Aug 2024 - Present</span>
              </div>
              <p className="text-slate-400 font-medium ml-1">Full-Stack Software Engineer • Ahmedabad, Gujarat</p>
            </div>

            <div className="space-y-8">
              {projects.map((project, idx) => (
                <GlassCard key={idx} className="p-6 md:p-8">
                  <h4 className="text-lg font-bold text-white mb-4 leading-snug">{project.title}</h4>
                  
                  <ul className="space-y-3 mb-6">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-slate-300 text-sm md:text-base flex items-start">
                        <ChevronRight size={16} className="text-cyan-400 mr-2 mt-1 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs font-medium text-slate-400 bg-white/5 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 flex flex-col">
            <GraduationCap size={32} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Web Development Course</h3>
            <p className="text-slate-400 mb-4">Red & White Multimedia Education</p>
            <div className="mt-auto pt-4 border-t border-white/10 text-sm text-slate-500 flex items-center">
              <MapPin size={14} className="mr-1 shrink-0" /> 
              <span>Ahmedabad, Gujarat</span>
            </div>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col">
            <GraduationCap size={32} className="text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Diploma in Mechanical Engineering</h3>
            <p className="text-slate-400 mb-4">C.U. Shah Polytechnic</p>
            <div className="mt-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-2">
              <span className="text-slate-500 flex items-center">
                <MapPin size={14} className="mr-1 shrink-0" /> 
                <span>Surendranagar</span>
              </span>
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-0 w-full sm:w-auto justify-between sm:justify-start">
                <span className="text-slate-400 font-medium">2019 - 2022</span>
                <span className="text-emerald-400 font-bold">CGPA: 7.74</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-white/10 relative z-10 bg-slate-950/50">
    <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-slate-500 text-sm mb-4 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()} Pratik Jadav. Built with React & Tailwind.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/PRATEEKJADAV777" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/pratik-jadav-90b4b6301" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:jadavpratik347@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 text-slate-50 overflow-hidden relative">
      {/* Background Ambient Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
}