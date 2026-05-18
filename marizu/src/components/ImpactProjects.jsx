import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Users, TrendingUp, Zap, ExternalLink } from 'lucide-react';

const impactProjects = [
  {
    id: 1,
    title: 'Tessi',
    tagline: ' AI-Powered CGPA Calculator',
    problem: 'Students struggle to calculate their cgpa in universities.',
    solution: 'Built a web app that lets students input their grades and instantly calculate their CGPA, with options',
    impact: [
      { icon: Users, label: '30+ uses', desc: 'users post their transcript' },
      { icon: TrendingUp, label: '40% Faster', desc: 'Gives you your grades instantly' },
      { icon: Zap, label: '0 Errors', desc: 'Accurate CGPA calculations every time' },
    ],
    tech: ["React", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
    image: '/projects/tessi.png',
    color: 'from-foreground/10 to-transparent',
    live: 'https://tessi-ai.vercel.app',
  },
 {
  id: 2,
  title: 'Lecture Hub',
  tagline: 'Seamless Live Lectures for Modern Classrooms',
  problem: 'Lectures and online classes can be disorganized, with no way to track attendance or engagement effectively.',
  solution: 'built a platform where lecturers can host online classes and actually manage students not just run meetings like Zoom.',
  impact: [
    { icon: Users, label: '3+ Users', desc: 'Tested the platform with friends' },
    { icon: TrendingUp, label: 'Live video', desc: 'Attendance tracking' },
  ],
  tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Stream.io"],
  image: '/projects/lecture.png',
  color: 'from-foreground/10 to-transparent',
  live: 'https://lecture-hub-nine.vercel.app',

},

  {
title: 'AI SaaS App',
tagline: 'Create amazing content with AI tools',
problem: 'Content creators and professionals struggle to produce quality content efficiently, juggling multiple tools for writing, designing, and editing.',
solution: 'Built an all-in-one AI SaaS platform with features like a dashboard, article writing, blog title generation, image creation, background/object removal, and resume review—helping users create content faster and more effectively.',
impact: [
  { icon: Users, label: '30+ Creations', desc: 'Use the platform daily to create content' },
  { icon: TrendingUp, label: '40% Faster', desc: 'Time saved compared to using multiple tools' },
  { icon: Zap, label: 'High Quality Output', desc: 'Users report improved content quality and efficiency' },
],
tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Gemini API", "Stability AI"],
image: '/projects/ai.png',
color: 'from-foreground/10 to-transparent',
live: 'https://quick-ai-ten-gamma.vercel.app',

  },
];

const ImpactProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 md:mb-16 "
        >
          <p className="mono text-sm tracking-widest text-gray-600 mb-4">03 / Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            Problem-solving <br className="hidden sm:block" />
            <span className="text-neutral-500">projects</span>
          </h2>
          <p className="text-xl text-neutral-500 font-semibold leading-relaxed">
            These aren't just projects they're solutions to real problems affecting real people.
            Each one tells a story of identifying a pain point and building something meaningful.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {impactProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
                       {/* Image block */}
<div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>

  {/* 1️⃣ Gray rotated backdrop */}
  <div className="absolute inset-0 rounded-3xl bg-neutral-200 -rotate-2 md:-rotate-3 scale-95" />

  {/* 2️⃣ White frame */}
  <div className="relative rounded-3xl p-4 md:p-6">

    {/* 3️⃣ Image container */}
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-video object-cover"
      />

      {/* 4️⃣ WHITE IMAGE WASH (THIS IS THE KEY) */}
      <div className="absolute inset-0 bg-white/30" />

      {/* optional very subtle depth */}
      <div className="absolute inset-0 shadow-inner" />

      {/* tag */}
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium shadow-sm">
          {project.tagline}
        </span>
      </div>
    </div>
  </div>
</div>

              {/* Content */}
              <div className={`space-y-4 md:space-y-6 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{project.title}</h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="mono text-xs text-gray-600 mb-1 md:mb-2">THE PROBLEM</p>
                    <p className="text-sm sm:text-base text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <p className="mono text-xs text-gray-600 mb-1 md:mb-2">THE SOLUTION</p>
                    <p className="text-sm sm:text-base text-black">{project.solution}</p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 py-4 md:py-6 border-y border-gray-200">
                  {project.impact.map((metric, j) => (
                    <div key={j} className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                      <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground flex-shrink-0" />
                      <div className="flex-1 sm:flex-none">
                        <p className="font-bold text-sm md:text-base">{metric.label}</p>
                        <p className="text-xs md:text-sm text-gray-600">{metric.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <div className="flex flex-wrap gap-2">
  {project.tech.map((t) => (
    <span
      key={t}
      className="badge bg-gray-100 mono text-black border border-gray-100 text-xs"
    >
      {t}
    </span>
  ))}
</div>

                  <a
  href={project.live || '#'}
  target={project.live ? '_blank' : '_self'}
  rel={project.live ? 'noopener noreferrer' : undefined}
  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
>
  View Case Study
  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</a>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactProjects;
