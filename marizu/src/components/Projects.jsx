import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Wordpress', 'Full-Stack', 'Frontend', 'Backend'];

const projects = [
   {
    id: 1,
    title: 'Lecture Hub',
    description: 'Seamless Live Lectures for Modern Classrooms',
    image: '/projects/lecture.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    live: 'https://lecture-hub-nine.vercel.app/',
    github: 'https://github.com/tobe30/lecture-hub',
  },
   {
    id: 2,
    title: 'MacBook M4 Landing page ',
    description: 'redesigning the MacBook M4 Landing page website',
    image: '/projects/a.png',
    tech: ["React", "TailwindCSS", "three.JS", "GSAP"],
    category: 'Frontend',
    github: 'https://github.com/tobe30/macbook_landing',
    live: 'https://macbook-pro-gamma.vercel.app/',
  },
  {
    id: 3,
    title: 'Gabbs',
    description: 'Ecommerce website inspired by gabbs ultramart, Nigeria.',
    image: '/projects/gabbs.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB", "Stripe", "Clerk"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/gabbs',
    live: 'https://gabbs-psi.vercel.app',
  },
  {
    id: 4,
    title: 'Sleekabyte',
    description: 'Redesigned a tech website for sleekabyte Uk.',
    image: '/projects/at.png',
    tech: ["PHP", "Wordpress", "Elementor", "CSS", "HTML"],
    category: 'Wordpress',
    live: 'https://sleekabyte.com',
  },
  {
    id: 5,
    title: 'Tessi: AI-Powered CGPA Calculator',
    description: 'Empowering students with AI-powered CGPA tools. Instantly transform your raw results into clear grades and academic classifications.',
    image: '/projects/tessi.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    live: 'https://tessi-ai.vercel.app',
  },
  {
    id: 6,
    title: 'Ai SaaS app',
    description: 'Create amazing content with Ai tools',
    image: '/projects/ai.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB", "Gemini api", "stability ai"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/QuickAi',
    live: 'https://quick-ai-ten-gamma.vercel.app/',
  },
 
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="mono text-sm tracking-widest text-base-content/70 mb-4">
            02 / Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Selected <br />
            <span className="text-base-content/60">works</span>
          </h2>

          <p className="text-xl text-base-content/70 font-semibold leading-relaxed">
            A collection of projects showcasing my skills in frontend, backend, and full-stack development.
          </p>
        </motion.div>

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
                  ? 'bg-base-content text-base-100'
                  : 'bg-base-200 text-base-content hover:bg-base-content hover:text-base-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative bg-base-100 rounded-2xl border border-base-300 overflow-hidden shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-base-100/90 backdrop-blur-sm rounded-full text-sm font-medium text-base-content hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-base-content text-base-100 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="font-semibold text-lg">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-base-content/60 -rotate-45 md:group-hover:rotate-0 transition-transform shrink-0" />
                </div>

                <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="badge bg-base-200 text-base-content border border-base-300 mono text-xs py-1 px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-base-content text-base-100 rounded-full font-medium hover:scale-105 transition-transform group"
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