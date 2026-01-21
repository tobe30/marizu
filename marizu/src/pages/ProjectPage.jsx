import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  {
    id: 7,
    title: 'Oni Shop',
    description: 'An Online Market Place Better than JIJI.',
    image: '/projects/oni.jpg',
    tech: ["Html", "CSS", "JS", "Bootstrap", "Django"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/Oni-a-marketplace-using-Django',
    live: 'https://onitsha.onrender.com',
  },
   {
    id: 8,
    title: 'Aza Exchange',
    description: 'A fintech banking exchange platform.',
    image: '/projects/aza.png',
    tech: ["Html", "CSS", "JS", "Bootstrap", "Django"],
    category: 'Full-Stack',
    github: 'https://github.com/tobe30/Aza-exchange-banking-fintech',
    live: 'https://azaex.onrender.com',
  },
  {
    id: 9,
    title: 'JFK Educational website',
    description: 'Fixed An Education website.',
    image: '/projects/jfk.png',
    tech: ["wordpress"],
    category: 'Full-Stack',
    live: 'https://jfktech.co.uk',
  },
   {
    id: 10,
    title: 'Streamify',
    description: 'A video, call language exchange plateform.',
    image: '/projects/streamify.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    live: 'https://video-chat-app-5h1q.onrender.com/',
    github: 'https://github.com/tobe30/video-call-app',
  },
  {
    id: 11,
    title: 'Crop Cura',
    description: 'Crop Detection Ai Landing Page Coming Soon.',
    image: '/projects/cropcura.png',
    tech: ["Html", "Css", "Js", "Bootstrap"],
    category: 'Full-Stack',
    live: 'https://www.cropcura.com/',
    github: 'https://github.com/tobe30/cropcura-Ai',
  },
  {
    id: 12,
    title: 'Financial Service.',
    description: 'Serial Entrepreneur Africa’s most Experienced financial coach.',
    image: '/projects/gehgeh.png',
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    category: 'Full-Stack',
    live: 'https://gehgeh-official.vercel.app/',
    github: 'https://github.com/tobe30/GEHGEH',
  },
];
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <p className="mono text-sm text-gray-600 mb-4">All Projects</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
              My Complete <br />
              <span className="text-neutral-500">Portfolio</span>
            </h1>
            <p className="text-xl text-neutral-500 font-semibold leading-relaxed">
              Browse through all my projects across different technologies and categories. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              animate={ { opacity: 1, y: 0 } }
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-gray-300"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">{projects.length}</p>
                <p className="text-sm text-muted-foreground mt-1">Total Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{categories.length - 1}</p>
                <p className="text-sm text-muted-foreground mt-1">Categories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Technologies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Passion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
