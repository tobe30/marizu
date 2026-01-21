import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Wordpress', 'Full-Stack', 'Frontend', 'Backend'];

const projects = [
  {
    id: 1,
    title: 'Gabbs',
    description: 'Ecommerce website inspired by gabbs ultramart, Nigeria.',
    image: '/projects/gabbs.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB", "Stripe", "Clerk"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/gabbs',
    live: 'https://gabbs-psi.vercel.app',
  },
  {
    id: 2,
    title: 'Sleekabyte',
    description: 'Redesigned a tech website for sleekabyte Uk.',
    image: '/projects/at.png',
    tech: ["php", "Wordpress", "Elementor", "CSS", "HTML"],
    category: 'Wordpress',
    live: 'https://sleekabyte.com',
  },
  {
    id: 3,
    title: 'Tessi: AI-Powered CGPA Calculator',
    description: 'Empowering students with AI-powered CGPA tools. Instantly transform your raw results into clear grades and academic classifications.',
    image: '/projects/tessi.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
  
    live: 'https://tessi-ai.vercel.app',
  },
  {
    id: 4,
    title: 'Ai SaaS app',
    description: 'Create amazing content with Ai tools',
    image: '/projects/ai.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB", "Gemini api", "stability ai"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/QuickAi',
    live: 'https://quick-ai-ten-gamma.vercel.app/',
  },
  {
    id: 5,
    title: 'X clone',
    description: 'I built X clone using the latest technologies.',
    image: '/projects/x-clone.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    live: 'https://x-clone-mernstack.onrender.com/',
    github: 'https://github.com/tobe30/X-Clone-MERNSTACK',

  },
  {
    id: 6,
    title: 'LMS',
    description: 'Modern Learning Management System (LMS) web application for online courses.',
    image: '/projects/lms.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/lms',
    live: 'https://lms-frontend-seven-xi.vercel.app',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="mono text-sm tracking-widest text-gray-600 mb-4">02 / Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            Selected <br />
            <span className="text-neutral-500">works</span>
          </h2>
          <p className="text-xl text-neutral-500 font-semibold leading-relaxed">
            A collection of projects showcasing my skills in frontend, backend, and full-stack development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-secondary-foreground hover:bg-black hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-gray-200 overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="badge bg-gray-100 mono text-xs py-1 px-3 items-center text-black border border-gray-100"
    >
      {tech}
    </span>
  ))}
</div>


              </div>
            </motion.article>
          ))}
        </div>
                        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
