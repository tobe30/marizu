import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const brands = [
  { 
    name: 'Sleekabyte', 
    image: '/projects/sleekabyte.jpg',
    description: 'Redesigned a tech website for sleekabyte Uk.',
    url: 'https://sleekabyte.com'
  },
  { 
    name: 'Cropcura', 
    image: '/projects/favi-icon.png',
    description: 'Fullstack developer at cropcura an Ai powered crop disease detector ',
    url: 'https://www.cropcura.com/'
  },
  { 
    name: 'Ovara Konstant LTD', 
    image: '/projects/ovara.jpeg',
    description: 'Intern Full-Stack Developer.',
    url: 'http://ovarakonstant.com/'
  },
];

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredBrand, setHoveredBrand] = useState(null);

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className=" overflow-hidden">
      <div className="container-portfolio">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="mono text-sm text-gray-600 mb-4">04 / Clients</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            Brands I've <br />
            <span className="text-neutral-500">built for</span>
          </h2>
          <p className="text-xl text-neutral-500 font-semibold leading-relaxed">
            Helping startups and businesses bring their digital visions to life.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
     <motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="relative w-full"
>
  {/* Marquee Wrapper */}
  <div className="relative pb-30 w-full overflow-visible">
    {/* Gradients (BEHIND content) */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-0" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-0" />

    {/* Track */}
    <div className="relative z-10 flex w-max animate-marquee hover:[animation-play-state:paused]">
      {duplicatedBrands.map((brand, i) => (
        <div key={`${brand.name}-${i}`} className="relative mx-6 group">
          {/* Card */}
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4
              px-8 py-6
              bg-neutral-100
              border border-neutral-200
              rounded-2xl
              transition
              hover:border-neutral-400
            "
          >
            <div className="w-12 h-12 flex-shrink-0">
  <img
    src={brand.image}
    alt={brand.name}
    className="w-full h-full object-contain"
  />
</div>

            <span className="text-lg font-medium whitespace-nowrap">
              {brand.name}
            </span>
          </a>

          {/* Tooltip */}
          <div
            className="
              absolute top-full left-1/2 mt-4 w-64 -translate-x-1/2
              rounded-xl bg-black text-white p-4 text-sm shadow-2xl
              opacity-0 translate-y-1 scale-95
              transition-all duration-200
              pointer-events-none
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
              z-50
            "
          >
            <p className="font-semibold mb-1">{brand.name}</p>
            <p className="opacity-80">{brand.description}</p>

            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-black" />
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>


      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-gray-600"
      >
        And many more...
      </motion.p>
    </section>
  );
};

export default Brands;
