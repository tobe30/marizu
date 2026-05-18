import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Lightbulb, Rocket } from 'lucide-react';

const skills = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python / Django', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'REST APIs', category: 'Backend' },
];

const timeline = [
  {
    year: '2022',
    title: 'Started Coding Journey',
    description: 'Had passion for building Software',
  },
  {
    year: '2023',
    title: 'First Freelance Project',
    description: 'Built websites for local businesses',
  },
  {
    year: '2024',
    title: 'Full-Stack Transition',
    description: 'Mastered backend technologies and databases',
  },
  {
    year: '2025',
    title: 'Problem-Solving Focus',
    description: 'Started building solutions for real-world problems',
  },
  {
    year: '2026',
    title: 'Building Impact',
    description: 'Creating platforms that help communities',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="mono text-sm tracking-widest text-gray-600 mb-4">
            01 / ABOUT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            Turning ideas into <br />
            <span className="text-neutral-500">digital reality</span>
          </h2>

          <p className="text-lg mb-3 text-neutral-500 font-semibold leading-relaxed">
            I'm Tobe Marizu, with 4+ years of experience building web applications that solve real problems and deliver seamless user experiences. My journey in tech started with curiosity and evolved into a mission to solve meaningful problems through code. I specialize in building scalable backend systems, secure APIs, and responsive web applications using Django, Node.js, and the MERN stack.
          </p>
          <p className="text-lg text-neutral-500 font-semibold leading-relaxed">
            A self-taught programmer, I love building startups and digital solutions that simplify life. I thrive at the intersection of innovation, execution, and impact, turning ideas into products that are not just functional, but memorable and user-focused.
          </p>
        </motion.div>

        {/* Skills + Values */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-10 text-black">
              Technical Stack
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="p-5 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400 transition-all cursor-default"
                >
                  <p className="font-medium text-neutral-900 mb-1 hover:translate-x-1 transition-transform">
                    {skill.name}
                  </p>
                  <p className="text-xs mono  text-neutral-500 tracking-wide">
                    {skill.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-10 text-black">
              What Drives Me
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: Code2,
                  title: 'Clean Code',
                  desc: 'Writing maintainable, scalable solutions',
                },
                {
                  icon: Palette,
                  title: 'Design-First',
                  desc: 'Creating beautiful, intuitive interfaces',
                },
                {
                  icon: Lightbulb,
                  title: 'Problem Solving',
                  desc: 'Finding elegant solutions to complex challenges',
                },
                {
                  icon: Rocket,
                  title: 'Impact',
                  desc: 'Building tools that make a difference',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-white rounded-lg hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-black mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <h3 className="text-3xl font-semibold mb-8 text-center text-black">
    My Journey
  </h3>

  <div className="relative max-w-4xl mx-auto">
    {/* Center vertical line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block" />

    <div className="space-y-10">
      {timeline.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.5 + i * 0.12 }}
          className={`relative flex ${
            i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          {/* Timeline dot (offset from line like image) */}
          <span
            className={`hidden md:block absolute top-1/2 w-1.5 h-1.5 bg-neutral-900 rounded-full -translate-y-1/2 z-10 ${
              i % 2 === 0
                ? 'left-1/2 -ml-4'   // right card → dot left of line
                : 'left-1/2 ml-4'    // left card → dot right of line
            }`}
          />

          {/* Card */}
          <div
            className={`w-full md:w-[350px] ${
              i % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
            }`}
          >
            <div className="p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
              <p className="text-sm mono tracking-widest text-neutral-600 mb-2">
                {item.year}
              </p>
              <h4 className="font-semibold text-black mb-1">
                {item.title}
              </h4>
              <p className="text-sm font-semibold text-neutral-500">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>


      </div>
    </section>
  );
};

export default About;
