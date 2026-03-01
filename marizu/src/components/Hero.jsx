import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Tobe Marizu';

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="container-portfolio relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono text-[1rem] md:text-[1rem] text-gray-600"
          >
            {'// Developer & Problem Solver'}
          </motion.p>

          {/* Hero Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mono font-bold text-[3rem] md:text-[6rem]"
          >
            <span>{displayedText}</span>
            <span className={`${showCursor ? 'cursor-blink' : 'opacity-0'}`}>_</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[1.25rem] md:text-[1.3rem] text-neutral-600 max-w-2xl mx-auto mb-10"
          >
            I build experiences, not just websites.
            <br className="hidden md:block" />
            <span className="text-black font-medium">Full-stack developer</span> crafting digital solutions that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary – View My Work */}
            <a
              href="#projects"
              className="
                btn
                h-14 px-9
                rounded-full
                bg-black text-white
                border-none
                flex items-center gap-2
                text-base font-semibold
                transition-all duration-300
                hover:scale-105 hover:bg-neutral-800
                active:scale-100
              "
            >
              View My Work
              <ExternalLink className="w-5 h-5" />
            </a>

            {/* Secondary – Download CV */}
            <a
              href="/Tobechukwu_Marizu_Resume.pdf"
              download="Tobe_Marizu_CV.pdf" 
              className="
                btn
                h-15 px-9
                rounded-full
                bg-white text-black
                border-[2px] border-[#111]
                flex items-center gap-3
                text-base font-medium
                transition-all duration-300
                hover:bg-black hover:text-white
              "
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator: MOVED OUTSIDE container-portfolio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-50 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-500 hover:text-black transition-colors"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 sm:w-5 h-4 sm:h-5 animate-bounce" />
        </a>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-32 h-32 border-l-2 border-t-2 border-gray-300 opacity-50" />
      <div className="absolute bottom-20 right-8 w-32 h-32 border-r-2 border-b-2 border-gray-300 opacity-50" />
    </section>
  );
};

export default Hero;
