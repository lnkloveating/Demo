import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

type PageType = "home" | "about" | "projects" | "arts2065" | "arts3061" | "singleLocation" | "arts3061Week2" | "arts3061Week3" | "arts3061Week4" | "arts3061Week5" | "arts3061Week7" | "arts3061Week8" | "week1" | "week2" | "week3" | "week4" | "lighting" | "writing";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  return (
    <AnimatePresence mode="wait">
      {currentPage === "home" && <HomePage key="home" onNavigate={setCurrentPage} />}
      {currentPage === "about" && <AboutPage key="about" onNavigate={setCurrentPage} />}
      {currentPage === "projects" && <ProjectsPage key="projects" onNavigate={setCurrentPage} />}
      {currentPage === "arts2065" && <Arts2065Page key="arts2065" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061" && <Arts3061Page key="arts3061" onNavigate={setCurrentPage} />}
      {currentPage === "singleLocation" && <SingleLocationPage key="singleLocation" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week2" && <Arts3061Week2Page key="arts3061Week2" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week3" && <Arts3061Week3Page key="arts3061Week3" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week4" && <Arts3061Week4Page key="arts3061Week4" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week5" && <Arts3061Week5Page key="arts3061Week5" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week7" && <Arts3061Week7Page key="arts3061Week7" onNavigate={setCurrentPage} />}
      {currentPage === "arts3061Week8" && <Arts3061Week8Page key="arts3061Week8" onNavigate={setCurrentPage} />}
      {currentPage === "week1" && <Week1Page key="week1" onNavigate={setCurrentPage} />}
      {currentPage === "week2" && <Week2Page key="week2" onNavigate={setCurrentPage} />}
      {currentPage === "week3" && <Week3Page key="week3" onNavigate={setCurrentPage} />}
      {currentPage === "week4" && <Week4Page key="week4" onNavigate={setCurrentPage} />}
      {currentPage === "lighting" && <LightingExercisePage key="lighting" onNavigate={setCurrentPage} />}
      {currentPage === "writing" && <WritingExercisePage key="writing" onNavigate={setCurrentPage} />}
    </AnimatePresence>
  );
}

interface PageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="min-h-screen bg-black film-grain flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 2, delay: 0.5, ease: "easeOut" } }}
          className="text-6xl sm:text-9xl lg:text-[12rem] font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl"
        >
          PORTFOLIO
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 2 } }}
          className="mt-20"
        >
          <button 
            onClick={() => onNavigate("about")}
            className="group flex items-center gap-6 text-xs sm:text-sm tracking-[0.4em] uppercase text-zinc-400 hover:text-white transition-all duration-700"
          >
            <span className="h-[1px] w-12 bg-zinc-600 group-hover:w-24 group-hover:bg-white transition-all duration-700"></span>
            Enter
            <span className="h-[1px] w-12 bg-zinc-600 group-hover:w-24 group-hover:bg-white transition-all duration-700"></span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20 flex flex-col justify-center"
    >
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }}
          className="space-y-16"
        >
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl">
              About
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Photo Section */}
            <div className="w-full lg:w-5/12 relative shrink-0">
              <div className="aspect-[3/4] w-full sm:w-2/3 lg:w-full mx-auto rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <img 
                  src="/me.png" 
                  alt="Jinguo Zhao" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-7/12 space-y-12">
              <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-loose tracking-wide">
                I am currently pursuing a Bachelor of Media at the University of New South Wales, specialising in Screen Production. My practice centres on visual storytelling as a way of exploring identity, cross-cultural experience, and contemporary social issues. As an international student, my perspective is shaped by lived experiences of cultural transition, which informs both the thematic focus and aesthetic approach of my work. I aim to create screen media that not only evokes emotional resonance but also encourages critical reflection, combining artistic expression with a thoughtful engagement with the complexities of modern society.
              </p>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-500">Contact</h3>
                <div className="flex flex-col gap-3 text-sm md:text-base text-zinc-300 font-mono font-light">
                  <p className="flex flex-col sm:flex-row sm:gap-4"><span className="text-zinc-600 uppercase tracking-widest text-xs sm:text-sm mt-1 sm:mt-0 w-24">Personal</span> zhaojinguo81@gmail.com & 2633798894@qq.com</p>
                  <p className="flex flex-col sm:flex-row sm:gap-4"><span className="text-zinc-600 uppercase tracking-widest text-xs sm:text-sm mt-1 sm:mt-0 w-24">Student</span> z5629551@ad.unsw.edu.au</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 flex items-center justify-between">
            <button 
              onClick={() => onNavigate("home")}
              className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
              Back
            </button>
            
            <button 
              onClick={() => onNavigate("projects")}
              className="group flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-white hover:text-zinc-300 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const ProjectsPage: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen marble-bg flex flex-col items-center justify-center p-6 sm:p-12"
    >
      <div className="max-w-4xl w-full text-center space-y-16">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => onNavigate("about")}
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors absolute top-8 left-8 sm:top-12 sm:left-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
          Back to About
        </motion.button>
        {/* Header Section */}
        <div className="space-y-4">
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-7xl sm:text-9xl font-light tracking-tight text-white/90"
          >
            portfolio
          </motion.h1>
          <motion.div variants={itemVariants} className="space-y-1">
            <p className="text-xl sm:text-2xl font-light tracking-widest text-white/60 uppercase">
              Jinguo Zhao
            </p>
            <p className="text-sm font-mono text-white/40 tracking-widest">
              z5629551
            </p>
          </motion.div>
        </div>

        {/* Projects/Links Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto"
        >
          <ProjectCard 
            title="ARTS2065" 
            description="Digital Media Project" 
            onClick={() => onNavigate("arts2065")}
          />
          <ProjectCard 
            title="ARTS3061" 
            description="Advanced Creative Practice" 
            onClick={() => onNavigate("arts3061")}
          />
        </motion.div>

        {/* Footer info */}
        <motion.footer 
          variants={itemVariants}
          className="pt-12 text-white/30 text-xs tracking-widest uppercase"
        >
          © 2026 • Creative Portfolio
        </motion.footer>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, onClick }: { title: string; description: string; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card group relative overflow-hidden p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-4 w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
        {title}
      </h2>
      <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-widest">
        {description}
      </p>
      
      <div className="pt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ArrowRight className="w-6 h-6 text-white/80" />
      </div>
    </motion.button>
  );
}

const Arts2065Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const projects = [
    { title: "Week1", subtitle: "Foundation & Setup" },
    { title: "Week2", subtitle: "Visual Exploration" },
    { title: "Week3", subtitle: "Concept Development" },
    { title: "Week4", subtitle: "Refinement Phase" },
    { title: "Lighting Exercise", subtitle: "Technical Practice" },
    { title: "Writing Exercise", subtitle: "Narrative Design" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("projects")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to Projects
          </motion.button>
          <motion.div variants={itemVariants} className="text-left sm:text-right">
            <p className="font-serif text-lg text-zinc-200">Jinguo Zhao</p>
            <p className="font-mono text-xs text-zinc-500 tracking-widest mt-1">Z5629551</p>
          </motion.div>
        </header>

        {/* Title Section */}
        <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="mt-20 md:mt-32 mb-16 md:mb-24">
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-8xl lg:text-[11rem] font-serif font-light tracking-tighter leading-none drop-shadow-2xl">
            ARTS<span className="italic text-zinc-600">2065</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-zinc-400 tracking-[0.3em] uppercase text-xs md:text-sm ml-1 sm:ml-2">
            Digital Media Project Showcase
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-grow"
        >
          {projects.map((p, i) => (
            <motion.button
              key={i}
              variants={itemVariants}
              onClick={() => {
                if (p.title === "Week1") onNavigate("week1");
                if (p.title === "Week2") onNavigate("week2");
                if (p.title === "Week3") onNavigate("week3");
                if (p.title === "Week4") onNavigate("week4");
                if (p.title === "Lighting Exercise") onNavigate("lighting");
                if (p.title === "Writing Exercise") onNavigate("writing");
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col justify-between text-left p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start w-full relative z-10">
                <span className="font-mono text-xs text-zinc-500 tracking-wider">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>

              <div className="mt-24 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mt-4 group-hover:text-zinc-400 transition-colors duration-500">
                  {p.subtitle}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          variants={itemVariants} 
          className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-xs tracking-widest uppercase"
        >
          <span>© 2026 • All Rights Reserved</span>
          <button className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact
          </button>
        </motion.footer>
      </div>
    </motion.div>
  );
}

const Arts3061Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const projects = [
    { title: "Single Location Film/Scene & Exegesis", subtitle: "Project 1" },
    { title: "Week 2", subtitle: "Exploration" },
    { title: "Week 3", subtitle: "Development" },
    { title: "Week 4", subtitle: "Production" },
    { title: "Week 5", subtitle: "Post-Production" },
    { title: "Week 7", subtitle: "Advanced Techniques" },
    { title: "Week 8", subtitle: "Final Review" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("projects")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to Projects
          </motion.button>
          <motion.div variants={itemVariants} className="text-left sm:text-right">
            <p className="font-serif text-lg text-zinc-200">Jinguo Zhao</p>
            <p className="font-mono text-xs text-zinc-500 tracking-widest mt-1">Z5629551</p>
          </motion.div>
        </header>

        {/* Title Section */}
        <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="mt-20 md:mt-32 mb-16 md:mb-24">
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-8xl lg:text-[11rem] font-serif font-light tracking-tighter leading-none drop-shadow-2xl">
            ARTS<span className="italic text-zinc-600">3061</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-zinc-400 tracking-[0.3em] uppercase text-xs md:text-sm ml-1 sm:ml-2">
            Advanced Creative Practice
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-grow"
        >
          {projects.map((p, i) => (
            <motion.button
              key={i}
              variants={itemVariants}
              onClick={() => {
                if (p.title === "Single Location Film/Scene & Exegesis") onNavigate("singleLocation");
                if (p.title === "Week 2") onNavigate("arts3061Week2");
                if (p.title === "Week 3") onNavigate("arts3061Week3");
                if (p.title === "Week 4") onNavigate("arts3061Week4");
                if (p.title === "Week 5") onNavigate("arts3061Week5");
                if (p.title === "Week 7") onNavigate("arts3061Week7");
                if (p.title === "Week 8") onNavigate("arts3061Week8");
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col justify-between text-left p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start w-full relative z-10">
                <span className="font-mono text-xs text-zinc-500 tracking-wider">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>

              <div className="mt-24 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mt-4 group-hover:text-zinc-400 transition-colors duration-500">
                  {p.subtitle}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          variants={itemVariants} 
          className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-xs tracking-widest uppercase"
        >
          <span>© 2026 • All Rights Reserved</span>
          <button className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact
          </button>
        </motion.footer>
      </div>
    </motion.div>
  );
}

const SingleLocationPage: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-32 mt-16 md:mt-24 pb-24">
          {/* Section 1: Main Film */}
          <motion.section className="flex flex-col gap-12 lg:gap-16" variants={itemVariants}>
            {/* Title - Centered */}
            <div className="text-center w-full flex flex-col items-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
                Single Location Film/Scene & Exegesis
              </h1>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
            </div>

            {/* Text and Image Row */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start max-w-6xl mx-auto w-full">
              {/* Left: Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  The Repairbloke is a dark comedy set in a mundane office space, where a broken coffee machine triggers an increasingly absurd chain of events. Two coworkers, desperate to avoid blame, call in a mysterious repairman whose methods are as unpredictable as his personality.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  Blending deadpan humour with surreal tension, the film transforms an everyday situation into a chaotic and morally ambiguous outcome. It explores themes of responsibility, workplace dynamics, and how small problems can quickly spiral out of control.
                </p>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[2/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                  <img 
                    src="/film poster.png" 
                    alt="Film Poster" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[2000ms] ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-40 pointer-events-none transition-opacity duration-1000 group-hover:opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl mx-auto mt-4 lg:mt-8">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/1175361735?title=0&byline=0&portrait=0" 
                  title="Single Location Film"
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Section 2: BTS */}
          <motion.section className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center lg:items-start pt-12 border-t border-white/10" variants={itemVariants}>
            {/* Right Content (Now Left visually) */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
                  BTS
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="relative w-full aspect-[3/2] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <img 
                  src="/BTS.png" 
                  alt="Behind the Scenes" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40"></div>
              </div>
            </div>

            {/* Left Video (Now Right visually) */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/4KsGg97Q43E?rel=0" 
                  title="BTS Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week2Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 2 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  In this exercise, I worked as part of a group to create a short chase sequence, focusing on movement, pacing, and continuity in filming. The story follows a protagonist who believes he is being followed, which leads him to run in fear. However, the tension is later broken when it is revealed that the other character was only trying to return his lost laptop and wallet. This contrast allowed us to experiment with a thriller style while adding a subtle sense of humour.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  During the production, I contributed to planning and executing the visual storytelling. We used a combination of tracking shots, wide shots, and fast-paced editing to build suspense and create a strong sense of urgency. I found that shot composition and editing rhythm played an important role in shaping the audience’s emotional response. At the same time, the use of cartoon-style sound effects helped balance the tension and made the narrative more engaging.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  Through this project, I developed a better understanding of how genre conventions can be constructed and then subverted. It also improved my practical skills in coordinating action, maintaining screen direction, and thinking more carefully about shot coverage during filming. Overall, this exercise strengthened both my technical abilities and my awareness of how cinematic techniques influence storytelling.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/chase/1000/750" 
                    alt="Chase Sequence Production" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/thriller/1000/750" 
                    alt="Thriller Style Editing" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/AxoHdKRp1mU?rel=0" 
                  title="Week 2 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week3Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 3 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  This lighting exercise gave me a chance to explore how different lighting setups can change the meaning and feeling of a scene. Working in a group, I experimented with several approaches, including a single light source, three-point lighting, noir-style lighting, and the use of reflectors in outdoor conditions. Each setup created a different visual effect and helped me better understand lighting as part of cinematic language.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  For our practice, we applied these techniques to a scene from our short film, focusing on the entrance of the character Dezza. Our goal was to create a strong and slightly exaggerated introduction, while still keeping a subtle sense of humour. I noticed that lighting was essential in shaping this balance. The noir and single-light setups produced high contrast and deep shadows, which made the character appear more dramatic and stylised. In contrast, the three-point lighting created a cleaner and more controlled look, making the character more visible and grounded within the space. When working outdoors, using reflectors helped us manage natural light and avoid unwanted shadows.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  This exercise helped me understand that lighting is not only technical, but also expressive. It plays an important role in guiding how the audience reads a character and interprets the scene. I also improved my ability to think more critically about visual choices during filming. Overall, this experience strengthened both my technical awareness and my understanding of how lighting contributes to storytelling.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/lighting/1000/750" 
                    alt="Lighting Setup" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/noir/1000/750" 
                    alt="Noir Style Lighting" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2bj5bLL4t3I?rel=0" 
                  title="Week 3 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week4Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 4 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/4rZL68z5YFk?rel=0" 
                  title="Week 4 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Bottom: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  In Week 4, I focused on developing my practical skills in sound recording, especially using the H4n Zoom recorder and different microphones. By working in different environments, I was able to observe how sound quality can vary and how recording techniques need to change depending on the situation.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  As part of the exercise, I recorded audio in several locations, including a hallway, the UNSW Quadrangle, and an outdoor stair area. Each location presented different challenges. For example, the hallway was relatively controlled but still had some echo, while the quadrangle was much noisier with background activity. The outdoor stairs allowed me to experiment with natural ambience and how space affects sound reflection.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  Through this process, I became more aware of microphone placement, background noise control, and adjusting recording levels. I realised that even small changes in positioning can significantly affect clarity. This exercise also helped me understand that sound is not just technical, but closely related to how a scene is experienced by the audience.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  Overall, this experience improved my confidence in handling recording equipment and working with sound in different conditions. It also prepared me for future projects by giving me a better understanding of how to capture usable audio in real filming situations.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" 
                    alt="Sound Recording Equipment" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/microphone/1000/750" 
                    alt="Recording Environment" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week5Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 5 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  In Week 5, I explored visual storytelling without dialogue, focusing on blocking and shot coverage. Inspired by The Thomas Crown Affair, I worked with my group to create a tense board game scene where two characters compete for a reward held by a baby doll.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  I focused on using close-ups of faces, hands, and the game to guide attention and build subtle tension. The slow pacing and controlled framing helped create an unsettling mood, while the final reveal — the doll appearing possessed — added a contrasting twist.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  This exercise helped me understand how movement, composition, and editing rhythm can communicate meaning without words, and improved my awareness of continuity and visual storytelling.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/boardgame/1000/750" 
                    alt="Board Game Scene" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/tension/1000/750" 
                    alt="Building Tension" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/U98HCpi_IkY?rel=0" 
                  title="Week 5 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week7Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 7 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  In this workshop exercise, I participated as an actor in three short scenes. The first scene was a mirror exercise where two people stood face to face and copied each other’s movements, which required strong focus and coordination. In the second and third scenes, two people opened a door at the same time and politely asked each other to go first. In the second scene, one person finally went through, while in the third scene both characters became impatient and ended up bumping into each other, creating a comedic effect.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  One of the main challenges was maintaining timing and coordination with my partner, especially in the mirror exercise where I needed to react quickly and copy movements accurately. Another challenge was performing without dialogue, which required me to use body language and facial expressions to show changes in emotion, such as from politeness to frustration. Through this exercise, I learned the importance of non-verbal performance and how small physical details can improve storytelling. In the future, I would like to make my emotional transitions more natural and controlled.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/mirror/1000/750" 
                    alt="Mirror Exercise" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/acting/1000/750" 
                    alt="Acting Exercise without Dialogue" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YvMu6e_3YgI?rel=0" 
                  title="Week 7 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Arts3061Week8Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts3061")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS3061
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-16 mt-16 md:mt-24 pb-24">
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl leading-tight max-w-5xl">
              Week 8 Class Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full">
            {/* Top: Text and Images */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  In this week exercise, our group created a short comedy scene called The Big Preso, which shows a character feeling stressed because of receiving different advice before an important presentation. My role was sound recording during filming and sound design in post-production. One challenge was recording clear dialogue because there was a lot of background noise in the office and hallway, and the sound quality was different in each location.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  To solve this, I tried to place the microphone closer to the actors and adjusted the audio levels in post-production. I also added background sound to make the transitions smoother. From this project, I learned that sound is important for storytelling, especially for showing emotion and timing in comedy. Next time, I would try to achieve cleaner recordings and improve the sound design further.
                </p>
              </div>

              {/* Images Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/soundrecording/1000/750" 
                    alt="Sound Recording" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                  <img 
                    src="https://picsum.photos/seed/sounddesign/1000/750" 
                    alt="Sound Design Post-Production" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom: Video */}
            <div className="w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/TPb8603hpbU?rel=0" 
                  title="Week 8 Class Exercise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}

const Week1Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-32 mt-16 md:mt-24 pb-24">
          {/* Section 1: Video & Intro */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
                  Week1 Video
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif text-zinc-300 leading-snug">
                  Camera Exercise – 12 Shot Flashback Scene
                </h2>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  This exercise had to be finished in one hour with 12 shots, and no shot could repeat the same framing or camera movement. The story is about two good friends studying in a classroom. One girl cannot solve a question and asks her friend for help. After a patient explanation, she finally understands. When they pack up to go home, the girl who explained notices that the pen she used is not hers and can’t find her own pen anywhere. When walking out of the classroom, she touches her ear and the pen falls down. A flashback shows that she had put the pen behind her ear while writing and forgot about it.
                </p>
              </div>
            </div>

            {/* Right Video */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/qsFKWVYMtvc?autoplay=0&rel=0" 
                  title="Week 1 Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Challenges & Reflection */}
          <motion.section className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center lg:items-center" variants={itemVariants}>
            {/* Right Content (Text) */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl">
                  Challenges & Reflection
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  Because the shooting time was very short, we needed to plan the shots, communicate, and film quickly, which was challenging. To make sure each shot was different, I tried different angles and movements, which helped me understand camera language better. The flashback also taught me that even a simple daily story can be told clearly through shot design. This exercise improved my on-set problem-solving and visual storytelling skills.
                </p>
              </div>
            </div>

            {/* Left Image */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center">
                <img 
                  src="/w1-1.png" 
                  alt="Behind the scenes filming" 
                  className="w-full h-auto max-h-[80vh] object-contain opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
}

const Week2Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-32 mt-16 md:mt-24 pb-24">
          {/* Section 1: Intro & Image */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
                  Week 2
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif text-zinc-300 leading-snug">
                  Moving Stillness – Filming Exercise
                </h2>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  This exercise asked us to create a short film sequence that looks like a still image at first, but slowly shows that the scene is actually moving. We shot three short scenes. The first was a tree: the camera zoomed in on the top, then slowly pulled back. It looked still, but people were walking under the tree, so the movement appeared gradually. The second scene was an art bottle. We zoomed in and then zoomed out, while people moved up and down the stairs in the background. The third scene started from a window and then followed a person taking photos and walking along the corridor. It looked like a photograph at first, but the camera and the person were actually moving.
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center">
                <img 
                  src="/w2-1.png" 
                  alt="Moving Stillness Exercise Placeholder" 
                  className="w-full h-auto max-h-[80vh] object-contain opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Video */}
          <motion.section className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Right Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl uppercase">
                  VIDEO
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide italic">
                Watch the complete "Moving Stillness" exercise below.
              </p>
            </div>

            {/* Left Video */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Dr2uNW9_PAA?autoplay=0&rel=0" 
                  title="Week 2 Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Challenges & Reflection */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-center" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl">
                  Challenges and Reflection
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  The hardest part was making the shot look still but not completely empty. We needed small details that the audience would notice slowly, such as walking people or small camera moves. This exercise helped me understand how camera framing and slow movement can change the feeling of a scene without using dialogue or strong action.
                </p>
              </div>
            </div>

            {/* Right Decorative Element / Placeholder */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-[21/9] md:aspect-video rounded-sm overflow-hidden bg-zinc-900/30 border border-white/5 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                <p className="text-zinc-600 font-serif italic text-lg opacity-40 group-hover:opacity-60 transition-opacity">Visual Reflection</p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
}

const Week3Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-32 mt-16 md:mt-24 pb-24">
          {/* Section 1: Intro & Image */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
                  Week 3
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif text-zinc-300 leading-snug">
                  Filming: Stalking
                </h2>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  For this exercise we filmed a short sequence of a girl being followed in a university building. The camera follows her as she uses her laptop and checks her phone, showing the tension of being watched. The stalker is hidden from view, and we used both subjective and objective shots to let the audience feel her awareness and worry. We defined the point of view and used the laptop and phone as key props, making sure her eyelines and the camera positions stayed consistent.
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop" 
                  alt="Filming Stalking Exercise Placeholder" 
                  className="w-full h-auto max-h-[80vh] object-contain opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Video */}
          <motion.section className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Right Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl uppercase">
                  VIDEO
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide italic">
                Watch the "Filming: Stalking" sequence below.
              </p>
            </div>

            {/* Left Video */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/U1QeygsCgl0?autoplay=0&rel=0" 
                  title="Week 3 Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Challenges & Reflection */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-center" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl">
                  Challenges and Reflection
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  The hardest part was hiding the stalker but still making the scene feel tense and urgent. We had to plan the shots carefully to keep continuity and make sure the eyelines matched. This exercise helped me understand how to use point of view and props to create psychological tension and how small camera movements can show someone noticing something is wrong without showing everything.
                </p>
              </div>
            </div>

            {/* Right Decorative Element */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-[21/9] md:aspect-video rounded-sm overflow-hidden bg-zinc-900/30 border border-white/5 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                <p className="text-zinc-600 font-serif italic text-lg opacity-40 group-hover:opacity-60 transition-opacity">Visual Reflection</p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
}

const Week4Page: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-32 mt-16 md:mt-24 pb-24">
          {/* Section 1: Intro & Image */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
                  Week 4
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-serif text-zinc-300 leading-snug">
                  Filming: Shot Reverse Shot
                </h2>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  For this exercise we filmed a two-person scene using shot reverse shot. The story is about a couple arguing and the girl leaving. We filmed it in two different environments. The first was quiet, low impact, and easy to focus on the emotions and expressions. The second was loud, with a lot of external noise, to make the argument feel more tense and dramatic.
                </p>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  I was in charge of recording sound using both the camera and the Zoom F3. I also recorded other sound elements like background noises to make the scene feel real.
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
                  alt="Filming Shot Reverse Shot Exercise Placeholder" 
                  className="w-full h-auto max-h-[80vh] object-contain opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Video */}
          <motion.section className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center lg:items-start" variants={itemVariants}>
            {/* Right Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl uppercase">
                  VIDEO
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide italic">
                Watch the "Filming: Shot Reverse Shot" sequence below.
              </p>
            </div>

            {/* Left Video */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/BlFyx-yfqzY?autoplay=0&rel=0" 
                  title="Week 4 Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Challenges & Reflection */}
          <motion.section className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-center" variants={itemVariants}>
            {/* Left Content */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl">
                  Challenges and Reflection
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  The hardest part was recording clear sound in the noisy environment. I had to move the microphone and adjust the gain many times while keeping the sound continuous. In the quiet scene it was easier to record, but I still had to watch the actors’ expressions and eyelines carefully. This exercise helped me understand how shot reverse shot works to show emotion and how sound and image work together to tell a story. I also learned more about using sound equipment in different environments.
                </p>
              </div>
            </div>

            {/* Right Decorative Element */}
            <div className="w-full lg:w-7/12">
              <div className="relative w-full aspect-[21/9] md:aspect-video rounded-sm overflow-hidden bg-zinc-900/30 border border-white/5 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                <p className="text-zinc-600 font-serif italic text-lg opacity-40 group-hover:opacity-60 transition-opacity">Visual Reflection</p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
}

const LightingExercisePage: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const sections = [
    {
      text: "The left key light (60% bright) is responsible for highlighting the subject and establishing the basic light and shade; the right fill light (30% bright) softens the shadows and allows details in the dark areas to be clearly seen; the lamp on the table is the rim light（10% bright）, outlining the subject's edges and preventing it from blending with the background. With this lighting setup, the subject appears three-dimensional and not flat, and the atmosphere can be flexibly adjusted, making it suitable for scene shooting.",
      images: ["/L1-1.png", "/L1-2.png"]
    },
    {
      text: "The left main light (65%) illuminates the subject, establishing the basic shading; the right auxiliary light (25%) softens the shadows and preserves details; the table outline light (10%) outlines the edges, separating the subject from the background.",
      images: ["/L2-1.png"]
    },
    {
      text: "This lighting setup makes each subject in a multi-person scene appear three-dimensional and clear, and it can also control the atmosphere by adjusting the intensity of the lights, making it suitable for shooting scenes.",
      images: ["/L3-1.png"]
    },
    {
      text: "The main light (85%) has a higher brightness, which can both illuminate the subject's face and cover the items on the table; combined with 15% of rim light to outline the edges of the main subject.",
      images: ["/L4-1.png"]
    },
    {
      text: "This lighting setup can simultaneously highlight \"person + shooting props\", making the focus of the picture more clear, and is suitable for shooting scenes.",
      images: ["/L5-1.png"]
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-40 mt-16 md:mt-24 pb-32">
          {/* Title Section */}
          <motion.section variants={itemVariants} className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
              Lighting Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
            <p className="mt-8 text-zinc-500 tracking-[0.2em] uppercase text-xs">
              Technical Practice & Atmosphere Control
            </p>
          </motion.section>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center lg:items-start`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-5/12 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-zinc-600">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide">
                  {section.text}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-7/12">
                <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                  {section.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center">
                      <img 
                        src={img} 
                        alt={`Lighting setup ${index + 1} - ${imgIndex + 1}`} 
                        className="w-full h-auto max-h-[70vh] object-contain opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </motion.div>
  );
}

const WritingExercisePage: React.FC<PageProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const sections = [
    {
      subtitle: "DIGI-TALE Writing Exercise: My Best Friend",
      text: "I am sitting at the desk in our small student apartment and the only sound in the room is the keyboard clicking not mine but his. It is almost midnight but the room does not feel tired. He is still working on his computer just like one hour ago. He sits straight and keeps looking at the screen. His fingers move fast like he knows exactly what he is doing. The computer light is blue on his face and it makes him look serious like he is inside another world. His cup of instant coffee is next to him. The smell is strong but he has not touched it for a long time maybe he forgot. I can hear him whispering the computer code like he is reading a secret language. Outside I can hear cars passing on the wet road and I can smell the rain coming through the window mixed with the warm smell of the room. Suddenly he stops typing and takes a long breath. I know he must be thinking hard. After a few seconds he starts typing again. Then the screen turns green and he smiles a small smile that not many people get to see. He stretches his back and finally looks at me. Done he says. His voice is calm not proud just happy that he solved the problem. I look at him and pretend it is nothing big but inside I feel lucky. Being in the room at the same time listening to the keyboard and watching someone working so hard for his future makes the night feel special even though nothing big happened.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
    },
    {
      subtitle: "Location Writing Exercise",
      text: "When I first came to Sydney the Opera House was just a famous tourist place to me. I had seen it many times in photos and thought it looked nice but nothing more. The first time I visited it in person the place felt different. I remember walking toward the harbour and seeing the white sails slowly appear over the water. The sun was bright and I could smell the sea in the wind. People were talking and laughing around me but the sound of waves and boats felt calm and strong at the same time. I touched the tiles of the building and they were rough and cool under my hand, which made it feel real not just like a picture. I sat on the steps and watched the city lights come on and the sky turn blue and purple. At that moment the Opera House was not just a landmark but a place where I felt peaceful and proud to be studying here. The space changed from a postcard into a real part of my life, and now every time I pass by I remember that quiet evening.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      subtitle: "Character Writing Exercise",
      text: "I still remember last year birthday for my mom. The morning was quiet and I got up early to prepare a little surprise for her. I had ordered a cake she really likes and kept it hidden until she saw it. When she noticed the cake she looked surprised and her eyes lit up. She smiled that warm smile she always has. It is the one that makes everything feel okay. I gave her a small card I wrote the night before. In it I wrote how much I appreciate all the small things she does every day. She makes sure I eat well, helps me with school work, and just listens when I need to talk. We cut the cake together. I could smell the sweet smell of the cake and when we took the first bite she smiled even bigger. That day was not about expensive gifts or a big celebration. It was just her being herself and taking care of our family in small ways. Every time I think about that morning I feel grateful and happy. My mom’s birthday reminded me that the best way to celebrate someone is to notice the small details that make them who they are.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1976&auto=format&fit=crop"
    },
    {
      subtitle: "Group project writing exercise",
      text: "Our project reimagines Memories of Murder through a contemporary Korean lens, emphasizing emotional tension over violence. We highlight silence, gaze, and moral ambiguity to explore truth and guilt in a digital age. By focusing on psychological realism and minimalist aesthetics, our version offers a fresh, introspective take on interrogation and memory.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black film-grain text-zinc-50 relative overflow-hidden selection:bg-white/20"
    >
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center">
          <motion.button
            variants={itemVariants}
            onClick={() => onNavigate("arts2065")}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
            Back to ARTS2065
          </motion.button>
        </header>

        <main className="flex-grow flex flex-col gap-24 lg:gap-40 mt-16 md:mt-24 pb-32">
          {/* Title Section */}
          <motion.section variants={itemVariants} className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl">
              Writing Exercise
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent mt-8"></div>
            <p className="mt-8 text-zinc-500 tracking-[0.2em] uppercase text-xs">
              Narrative Design & Creative Writing
            </p>
          </motion.section>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center lg:items-start`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-6/12 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-zinc-600">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-light tracking-tight text-white/90 leading-snug">
                  {section.subtitle}
                </h2>
                <p className="text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide whitespace-pre-wrap">
                  {section.text}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-6/12">
                <div className="relative w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group flex items-center justify-center aspect-[21/9] md:aspect-video">
                  <img 
                    src={section.image} 
                    alt={section.subtitle} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </motion.div>
  );
}


