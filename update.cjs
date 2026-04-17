const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Global Background
content = content.replace(/bg-\[#050505\]/g, 'bg-black film-grain');

// Typography (Make it more dramatic)
content = content.replace(/text-5xl md:text-7xl font-serif font-light tracking-tight text-white/g, 'text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl');
content = content.replace(/text-3xl md:text-5xl font-serif font-light tracking-tight text-white/g, 'text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter text-white/90 drop-shadow-xl');
content = content.replace(/text-5xl md:text-8xl font-serif font-light tracking-tight text-white/g, 'text-5xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tighter text-white/90 drop-shadow-2xl');
content = content.replace(/text-2xl md:text-3xl font-serif text-white leading-snug/g, 'text-2xl md:text-4xl font-serif font-light tracking-tight text-white/90 leading-snug');

// Dividers (Thinner, more elegant)
content = content.replace(/h-px w-12 bg-white\/20/g, 'h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent');

// Image and Video Containers (Cinematic aspect ratio, sharp corners, deep shadow)
content = content.replace(/rounded-2xl overflow-hidden bg-zinc-900\/50 border border-white\/10 shadow-2xl/g, 'rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]');
content = content.replace(/rounded-2xl overflow-hidden bg-zinc-900 border border-white\/10 shadow-2xl/g, 'rounded-sm overflow-hidden bg-black border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]');
content = content.replace(/aspect-video rounded-2xl/g, 'aspect-[21/9] md:aspect-video rounded-sm');
content = content.replace(/aspect-\[4\/3\]/g, 'aspect-[21/9] md:aspect-video');

// Image hover effects (Slower, Ken Burns effect)
content = content.replace(/opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-\[1.02\]/g, 'opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105');

// Vignette overlay
content = content.replace(/bg-gradient-to-t from-black\/60 via-transparent to-transparent/g, 'cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60');
content = content.replace(/bg-gradient-to-t from-black\/40 via-transparent to-transparent/g, 'cinematic-vignette transition-opacity duration-1000 group-hover:opacity-60');

// Text styling (More leading, slightly wider tracking for readability like movie subtitles)
content = content.replace(/text-sm md:text-base text-zinc-400 font-light leading-relaxed/g, 'text-sm md:text-base text-zinc-400 font-light leading-loose tracking-wide');

// Ambient glows (Deepen them)
content = content.replace(/bg-white\/5 rounded-full blur-\[120px\]/g, 'bg-white/5 rounded-full blur-[150px]');

// Arts2065 Page specific
content = content.replace(/text-6xl sm:text-8xl lg:text-\[10rem\] font-serif font-light tracking-tighter leading-none/g, 'text-6xl sm:text-8xl lg:text-[11rem] font-serif font-light tracking-tighter leading-none drop-shadow-2xl');

fs.writeFileSync('src/App.tsx', content);
console.log('Updated App.tsx');
