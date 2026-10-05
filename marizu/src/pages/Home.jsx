import { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import Maeix from "../components/Maeix.jsx";
import "../App.css";

// PROJECT CONTENT: Edit the project names, descriptions, and technology tags below.
const projects = [
  ["Elomaze", "Helping Students Find Trusted Accommodation and Reliable Agents", "React, TailwindCSS, Node.js, Express, MongoDB", "/projects/elomaze.png", "https://elomaze.com"],
  ["Gabbs", "Ecommerce website inspired by Gabbs Ultramart, Nigeria.", "React, TailwindCSS, Node.js, Express, MongoDB, Stripe, Clerk", "/projects/gabbs.png", "https://gabbs-psi.vercel.app", "https://github.com/tobe30/gabbs"],
  ["AI SaaS App", "Create amazing content with AI tools", "React, TailwindCSS, Node.js, Express, MongoDB, Gemini API, Stability AI", "/projects/ai.png", "https://quick-ai-ten-gamma.vercel.app", "https://github.com/tobe30/QuickAi"],
  ["Socially", "A full-stack social platform for connecting, sharing posts, and engaging with others in real time.", "Next.js, TypeScript, PostgreSQL, Clerk, TailwindCSS", "/projects/socially.png", "https://nextjs-course-beta-five.vercel.app", "https://github.com/tobe30/nextjs-course"],
  ["MAEIX", "One assistant that controls your car, phone and home. The long game.", "Python, LLMs, IoT, Voice"],
];
// TECH STACK: Edit the tool lists shown in the interactive tabs.
const groups = {
  Frontend: ["React / Next.js"],
  Language: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL", "Python"],
  Backend: ["Node.js", "Django"],
  Database: ["MongoDB", "PostgreSQL"],
  Styling: ["Tailwind CSS"],
  CMS: ["WordPress"],
};
// PROCESS STEPS: Edit the four steps that describe how you work.
const steps = [
  [
    "Understand the problem",
    "Who uses it, what breaks today, what success looks like. Before any code.",
  ],
  [
    "Design data + API",
    "Schema and endpoints first. The backend decides what the product can do.",
  ],
  [
    "Build",
    "Small, working increments. You see progress every week, not at the end.",
  ],
  [
    "Deploy and hand off",
    "Live on your domain, documented, and handed over so you are not stuck with me.",
  ],
];
// EXPERIENCE: Edit roles and summaries here. Project labels are used when dates were not provided.
const experience = [
  {
    role: "Software Engineer",
    organization: "CropCura AI · Full-time · Nigeria · Remote",
    period: "Sep 2025 – Present",
    description: "Building a dashboard that connects credit assessment, authentication, and chat services.",
    tools: "React · React Query · Firebase",
  },
  {
    role: "Back End Developer",
    organization: "Oryzon.tech · Contract · Nigeria · Remote",
    period: "Oct 2024 – Jan 2026",
    description: "Developed backend systems, designed the architecture, and built scalable foundations for product features.",
    tools: "Backend development · System architecture",
  },
  {
    role: "Software Engineer",
    organization: "Ovara Konstant Business Limited · Internship · Nigeria · On-site",
    period: "May 2025 – Nov 2025",
    description: "Designed and implemented an inventory management system to streamline sales and purchase tracking and keep records accurate.",
    tools: "Inventory management · Sales & purchasing",
  },
];

function Home() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem("tobe-theme") === "dark",
  );
  useEffect(() => {
    window.localStorage.setItem("tobe-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const finishLoading = useCallback(() => setLoading(false), []);
  const links = [
    ["Work", "#work"],
    ["Stack", "#stack"],
    ["Process", "#process"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <div className="site-shell" data-theme={darkMode ? "dark" : "light"}>
      {loading && <Loader onDone={finishLoading} />}
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      {/* NAVIGATION: Edit the logo, mobile menu, and section links here. */}<header className="topbar">
        <a className="wordmark" href="#top">
          <span>t.</span> tobe
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menu}
          aria-controls="primary-navigation"
          onClick={() => setMenu((current) => !current)}
        >
          {menu ? "CLOSE −" : "MENU +"}
        </button>
        <nav id="primary-navigation" className={menu ? "nav-links open" : "nav-links"}>
          {links.map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenu(false)}>
              {n}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
        </button>
      </header>
      <main>
        {/* HERO: Edit the intro, headline, call-to-action buttons, and portrait here. */}<section className="hero-section wrap" id="top">
          <div className="eyebrow-row">
            <span>TOBECHUKWU DANIEL</span>
            <span className="availability"><i /> Open to good projects</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="overline">BACKEND DEVELOPER & FULL-STACK ENGINEER</p>
              <h1>
                I build software that <em>solves real problems.</em>
              </h1>
              <p className="hero-lede">
                I work across the interface, APIs and data layer to make software that feels simple to use and solid underneath.
              </p>
              <div className="hero-actions">
                <a className="btn lime-btn" href="#work">
                  See selected work ↓
                </a>
                <a className="btn outline-btn" href="/Tobechukwu_Marizu_CV.pdf" download="Tobechukwu_Marizu_CV.pdf">
                  Download résumé ↓
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <img src="/tobe.jpeg" alt="Portrait of Tobechukwu Daniel" />
              <div className="portrait-label">
                <span>TOBECHUKWU DANIEL</span>
                <span>PROBLEM SOLVER </span>
              </div>
              <span className="portrait-index">A LITTLE INTRO</span>
            </div>
          </div>
          <div className="hero-foot">
            <span>SCROLL TO EXPLORE ↓</span>
            <span>BUILDING FOR THE REAL WORLD · WAT (UTC+1)</span>
          </div>
        </section>
        {/* ABOUT: Edit your bio and location details here. */}<section className="section wrap about-section" id="about">
          <div className="section-kicker">
            <span>01 / ABOUT</span>
            <span>A LITTLE CONTEXT</span>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h2>A little about me.</h2>
              <p className="about-lead">
                I’m Tobe Marizu, a software engineer with 4+ years of experience building and shipping web applications. I specialize in backend development and full-stack engineering, building scalable systems, secure APIs, and responsive applications using Django, Node.js, React, and modern databases.
              </p>
              <p>
                I’m a self-taught developer who enjoys taking complex problems and turning them into practical software solutions. Beyond writing code, I focus on understanding the problem, designing the right solution, and building products that are reliable, easy to use, and valuable to the people and businesses they serve.
              </p>
              <a className="text-link" href="#contact">
                Come say hello ↗
              </a>
            </div>
          </div>
        </section>
        {/* SELECTED WORK: Edit project cards in the projects data above. */}<section className="section wrap" id="work">
          <div className="section-kicker">
            <span>02 / WORK</span>
            <span>THINGS I’VE MADE, HELPED WITH, OR CAN’T STOP THINKING ABOUT</span>
          </div>
          <div className="section-title">
            <h2>
              A few things
              <br />
              <em>from my desk.</em>
            </h2>
            <p>Each one taught me something. Here’s the short version of what I worked on and why.</p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article className={`project-card tone-${i}`} key={p[0]}>
                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      0{i + 1}
                      {i === 4 && " / IN PROGRESS"}
                    </span>
                    <span>PROJECT NOTES</span>
                  </div>
                  <h3>
                    {p[0]}
                    <span>↗</span>
                  </h3>
                  <p className="project-summary">{p[1]}</p>
                  <div className="tag-list">
                    {p[2].split(", ").map((x) => (
                      <span className="badge tech-tag" key={x}>
                        {x}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={p[5] || "https://github.com/tobe30"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p[5] ? "Source code ↗" : "GitHub profile ↗"}
                    </a>
                    {p[4] && <a href={p[4]} target="_blank" rel="noreferrer">Live site ↗</a>}
                  </div>
                </div>
                <div className={`project-art project-art-${i}`}>
                  {p[3] ? (
                    <img className="project-image" src={p[3]} alt={`${p[0]} website homepage`} />
                  ) : (
                    <div className="project-poster">
                      <div className="poster-topline"><span>PROJECT NOTES</span><span>0{i + 1} / 05</span></div>
                      <span className="poster-glyph">{["⌂", "⌖", "⌁", "▤", "◉"][i]}</span>
                      <h4>{p[0]}</h4>
                      <p>{p[1]}</p>
                      <div className="poster-bottom"><span>SELECTED WORK</span><span>↗</span></div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* TECH STACK: Edit the interactive skill tabs and tool lists. */}<section className="section wrap" id="stack">
          <div className="section-kicker">
            <span>03 / STACK</span>
            <span>TOOLS I REACH FOR</span>
          </div>
          <div className="section-title">
            <h2>Tools I reach for.</h2>
            <p>The tools I reach for most. The best choice still depends on the job.</p>
          </div>
          <div className="stack-grid">
            {Object.entries(groups).map(([category, tools], i) => (
              <article className="stack-group" key={category}>
                <div className="stack-group-heading">
                  <h3>{category}</h3>
                  <span>0{i + 1}</span>
                </div>
                <div className="stack-tools">
                  {tools.map((tool) => <span className="stack-tool" key={tool}>{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* PROCESS: Edit the process steps data above. */}<section className="section wrap" id="process">
          <div className="section-kicker">
            <span>04 / PROCESS</span>
            <span>HOW I WORK</span>
          </div>
          <div className="section-title">
            <h2>
              How I work.
              <br />
              <em>Delivered, not just coded.</em>
            </h2>
            <p>Clear steps, steady progress, useful handoff.</p>
          </div>
          <div className="process-grid">
            {steps.map(([title, desc], i) => (
              <article className="process-card" key={title}>
                <div className="process-number">
                  0{i + 1}
                  <span> / 04</span>
                </div>
                <div className="process-icon">{["⌕", "⌘", "↗", "✓"][i]}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
        {/* EXPERIENCE: Edit roles, descriptions, and tools in the experience data above. */}
        <section className="section wrap experience-section" id="experience">
          <div className="section-kicker">
            <span>05 / EXPERIENCE</span>
            <span>SELECTED WORK & PROJECTS</span>
          </div>
          <div className="section-title">
            <h2>
              Work I’ve done.
              <br />
              <em>What I learned.</em>
            </h2>
            <p>
              Full-time, contract, and internship experience in software engineering.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item, i) => (
              <article className="experience-row" key={item.role}>
                <span className="experience-number">0{i + 1}</span>
                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.organization}</p>
                    </div>
                    <span className="experience-period">{item.period}</span>
                  </div>
                  <p className="experience-description">{item.description}</p>
                  <span className="experience-tools">{item.tools}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT: Edit your email and social links here. */}<section className="section wrap contact-section" id="contact">
          <div className="section-kicker">
            <span>06 / CONTACT</span>
            <span>HAVE SOMETHING IN MIND?</span>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>
                Got a project?
                <br />
                <em>Let's build it.</em>
              </h2>
              <p>
                Tell me what you are working on. I will get back to you as soon
                as I can.
              </p>
              <div className="contact-links">
                <a href="mailto:tobemarizu@gmail.com">
                  <small>EMAIL</small>tobemarizu@gmail.com ↗
                </a>
                <a
                  href="https://github.com/tobe30"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>GITHUB</small>github.com/tobe30 ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/tobemarizu-daniel-86057b295/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>LINKEDIN</small>linkedin.com/in/tobemarizu-daniel-86057b295 ↗
                </a>
                <a href="https://x.com/tobemarizu101" target="_blank" rel="noreferrer">
                  <small>X</small>@tobemarizu101 ↗
                </a>
                <p className="contact-location"><small>LOCATION</small>Lagos, Nigeria</p>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const subject = `Portfolio enquiry from ${formData.get("name")}`;
                const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`;
                window.location.href = `mailto:tobemarizu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <label htmlFor="name">NAME</label>
              <input
                className="input form-input"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
              <label htmlFor="email">EMAIL</label>
              <input
                className="input form-input"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
              <label htmlFor="message">MESSAGE</label>
              <textarea
                className="textarea form-input"
                id="message"
                name="message"
                placeholder="A little about your project..."
                rows="4"
                required
              />
              <button className="btn lime-btn submit-btn">
                {sent ? "Email draft opened ✓" : "Open email app →"}
              </button>
              {sent && (
                <p className="form-note">
                  Your email app should open with the message ready to send. You can also write to{" "}
                  <a href="mailto:tobemarizu@gmail.com">tobemarizu@gmail.com</a>.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      {/* FOOTER: Edit copyright and the back-to-top link here. */}<footer className="site-footer wrap">
        <a className="wordmark" href="#top">
          <span>t.</span> tobe
        </a>
        <p>© 2026 Marizu Inc. All rights reserved.</p>
        <a href="#top">BACK TO THE TOP ↑</a>
      </footer>
      <Maeix active={!loading} />
    </div>
  );
}
export default Home;
