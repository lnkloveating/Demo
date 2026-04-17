const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Update PageType
content = content.replace(
  /type PageType = "home" \| "arts2065" \| "week1" \| "week2" \| "week3" \| "week4" \| "lighting" \| "writing";/,
  'type PageType = "home" | "about" | "projects" | "arts2065" | "week1" | "week2" | "week3" | "week4" | "lighting" | "writing";'
);

// 2. Update App routing
content = content.replace(
  /\{currentPage === "home" && <HomePage key="home" onNavigate=\{setCurrentPage\} \/>\}/,
  `{currentPage === "home" && <HomePage key="home" onNavigate={setCurrentPage} />}
      {currentPage === "about" && <AboutPage key="about" onNavigate={setCurrentPage} />}
      {currentPage === "projects" && <ProjectsPage key="projects" onNavigate={setCurrentPage} />}`
);

// 3. Rename old HomePage to ProjectsPage
content = content.replace(
  /const HomePage: React\.FC<PageProps> = \(\{ onNavigate \}\) => \{/,
  `const ProjectsPage: React.FC<PageProps> = ({ onNavigate }) => {`
);

// 4. Add back button to ProjectsPage (formerly HomePage)
// We'll replace the header of the old HomePage
content = content.replace(
  /<div className="w-full max-w-5xl mx-auto space-y-12">/,
  `<div className="w-full max-w-5xl mx-auto space-y-12">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => onNavigate("about")}
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-500" />
          Back to About
        </motion.button>`
);

// 5. Append new HomePage and AboutPage before ProjectsPage
const newComponents = `
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

          <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-loose tracking-wide">
            I am currently pursuing a Bachelor of Media at the University of New South Wales, specialising in Screen Production. My practice centres on visual storytelling as a way of exploring identity, cross-cultural experience, and contemporary social issues. As an international student, my perspective is shaped by lived experiences of cultural transition, which informs both the thematic focus and aesthetic approach of my work. I aim to create screen media that not only evokes emotional resonance but also encourages critical reflection, combining artistic expression with a thoughtful engagement with the complexities of modern society.
          </p>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-500">Contact</h3>
            <div className="flex flex-col gap-3 text-sm md:text-base text-zinc-300 font-mono font-light">
              <p className="flex flex-col sm:flex-row sm:gap-4"><span className="text-zinc-600 uppercase tracking-widest text-xs sm:text-sm mt-1 sm:mt-0 w-24">Personal</span> zhaojinguo81@fmail.com & 2633798894@qq.com</p>
              <p className="flex flex-col sm:flex-row sm:gap-4"><span className="text-zinc-600 uppercase tracking-widest text-xs sm:text-sm mt-1 sm:mt-0 w-24">Student</span> z5629551@ad.unsw.edu.au</p>
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
`;

content = content.replace(
  /const ProjectsPage: React\.FC<PageProps> = \(\{ onNavigate \}\) => \{/,
  newComponents + '\nconst ProjectsPage: React.FC<PageProps> = ({ onNavigate }) => {'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Updated App.tsx successfully.');
