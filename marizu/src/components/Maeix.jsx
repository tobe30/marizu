import { useEffect, useRef, useState } from "react";
import Robot from "./Robot.jsx";
import "./Maeix.css";

const ANSWERS = {
  what: [
    "Tobe is a full-stack developer who works across interfaces, APIs, authentication, and data. He is based in Lagos, Nigeria.",
    "about",
  ],
  best: [
    "Elomaze is a real-estate project focused on helping students find rooms near campus. The Work section has the project details and Tobe's role.",
    "work",
  ],
  stack: [
    "Frontend: React and Next.js. Languages: TypeScript, JavaScript, HTML5, CSS3, SQL, and Python. Backend: Node.js and Django. Databases: MongoDB and PostgreSQL. Styling: Tailwind CSS. CMS: WordPress.",
    "stack",
  ],
  process: [
    "Tobe starts by understanding the problem, plans the data and API, builds in small steps, then deploys and hands the work over.",
    "process",
  ],
  experience: [
    "Tobe is a Software Engineer at CropCura AI (Sep 2025–Present), previously a Back End Developer at Oryzon.tech (Oct 2024–Jan 2026), and a Software Engineer intern at Ovara Konstant Business Limited (May–Nov 2025).",
    "experience",
  ],
  hire: [
    "Tobe is open to good projects and collaborations. Use the contact form to get in touch.",
    "contact",
  ],
  other: [
    "I can help with Tobe's background, work, stack, process, and contact details. Try one of the suggested questions below.",
    null,
  ],
};

const SECTION_LINES = {
  top: { text: "Hi, I'm M.A.E.I.X. Want a quick tour of Tobe's work?", label: "Take the tour", chat: true },
  about: { text: "That's Tobe. He's a developer based in Lagos, Nigeria.", label: "See his work", href: "#work" },
  work: { text: "These are projects Tobe has worked on. Ask me about Elomaze or another project.", label: "Ask about the work", chat: true },
  stack: { text: "React, Next.js, TypeScript, Node.js, Django, and more. The full stack is right here.", label: "See the stack", href: "#stack" },
  process: { text: "Understand the problem, design the data and API, build, then deploy and hand off.", label: "How Tobe works", href: "#process" },
  experience: { text: "Tobe's experience includes CropCura AI, Oryzon.tech, and Ovara Konstant Business Limited.", label: "See experience", href: "#experience" },
  contact: { text: "Have something in mind? The contact form is just below.", label: "Go to contact", href: "#contact" },
};

const SHORTCUTS = [
  ["What does Tobe do?", "what"],
  ["Best project", "best"],
  ["His stack", "stack"],
  ["Contact Tobe", "hire"],
];

const TOUR = [
  ["top", "Welcome to Tobe's portfolio. He builds software from the backend up."],
  ["about", "A little about Tobe, his interests, and where he is based."],
  ["work", "Here are selected projects and the parts Tobe worked on."],
  ["stack", "The tools Tobe uses, grouped by what they do."],
  ["process", "A quick look at how he takes a project from problem to handoff."],
  ["experience", "Tobe's roles include Software Engineer at CropCura AI, Back End Developer at Oryzon.tech, and a Software Engineer internship at Ovara Konstant Business Limited."],
  ["contact", "If you'd like to work together, this is where to reach Tobe."],
];

function answerKey(question) {
  const q = question.toLowerCase();
  if (/experience|career|cropcura|oryzon|ovara|employment|work history/.test(q)) return "experience";
  if (/hire|contact|email|available|job|role|reach|collab/.test(q)) return "hire";
  if (/stack|tech|tool|skill|react|node|django|mongo|language|typescript|python/.test(q)) return "stack";
  if (/how|approach|style|process|build|workflow/.test(q)) return "process";
  if (/best|project|built|elomaze|phishguard|maeix|portfolio|work/.test(q)) return "best";
  if (/who|what|about|tobe|developer/.test(q)) return "what";
  return "other";
}

function goTo(id) {
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Maeix({ active = true }) {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(null);
  const [typed, setTyped] = useState("");
  const [waving, setWaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm M.A.E.I.X., Tobe's portfolio guide. Ask me a question or choose a shortcut.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [tourStep, setTourStep] = useState(-1);
  const seen = useRef({});
  const quiet = useRef(false);
  const openRef = useRef(open);
  const buttonRef = useRef(null);
  const eyesRef = useRef(null);
  const tiltRef = useRef(null);
  const logRef = useRef(null);
  openRef.current = open;

  useEffect(() => {
    if (!bubble) return undefined;
    const text = SECTION_LINES[bubble].text;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    setTyped(reducedMotion ? text : "");
    setWaving(true);
    const interval = reducedMotion ? null : window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, 18);
    const waveTimer = window.setTimeout(() => setWaving(false), 2400);
    const hideTimer = window.setTimeout(() => setBubble(null), 10000);
    return () => {
      if (interval) window.clearInterval(interval);
      window.clearTimeout(waveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [bubble]);

  useEffect(() => {
    if (!active) return undefined;
    let observer;
    const timer = window.setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !quiet.current && !seen.current[id] && !openRef.current) {
            seen.current[id] = true;
            setBubble(id);
          }
        });
      }, { rootMargin: "-44% 0px -44% 0px" });
      Object.keys(SECTION_LINES).forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 700);
    return () => { window.clearTimeout(timer); observer?.disconnect(); };
  }, [active]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let previousY = window.scrollY;
    let tiltTimer;
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(pageHeight > 0 ? Math.round((window.scrollY / pageHeight) * 100) : 0);
      if (reducedMotion || !tiltRef.current) return;
      const rotation = Math.max(-10, Math.min(10, (window.scrollY - previousY) * 0.35));
      previousY = window.scrollY;
      tiltRef.current.style.transform = `rotate(${rotation}deg)`;
      window.clearTimeout(tiltTimer);
      tiltTimer = window.setTimeout(() => { if (tiltRef.current) tiltRef.current.style.transform = ""; }, 140);
    };
    const onPointerMove = (event) => {
      if (!buttonRef.current || !eyesRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const dx = event.clientX - rect.left - rect.width / 2;
      const dy = event.clientY - rect.top - rect.height / 2;
      const distance = Math.hypot(dx, dy) || 1;
      const offset = Math.min(1, distance / 200) * 2;
      eyesRef.current.setAttribute(
        "transform",
        `translate(${((dx / distance) * offset).toFixed(2)} ${((dy / distance) * offset).toFixed(2)})`,
      );
    };
    const onKeyDown = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(tiltTimer);
    };
  }, []);

  if (!active) return null;

  const queueReply = (label, key) => {
    if (busy) return;
    setMessages((current) => [...current, { from: "me", text: label }]);
    setBusy(true);
    window.setTimeout(() => {
      const [text, go] = ANSWERS[key] ?? ANSWERS.other;
      setMessages((current) => [...current, { from: "bot", text, go }]);
      setBusy(false);
    }, 450);
  };

  const showTourStep = (index) => {
    if (index >= TOUR.length) {
      setTourStep(-1);
      return;
    }
    const [id, text] = TOUR[index];
    goTo(id);
    setMessages((current) => [...current, { from: "bot", text, go: id }]);
    setTourStep(index);
  };

  const startTour = () => {
    if (busy) return;
    setMessages((current) => [...current, { from: "me", text: "Give me a tour" }]);
    showTourStep(0);
  };

  const submit = (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;
    setInput("");
    queueReply(question, answerKey(question));
  };

  const toggle = () => { setOpen((current) => !current); setBubble(null); };
  const line = bubble ? SECTION_LINES[bubble] : null;

  return (
    <div className="maeix-widget">
      {line && !open && (
        <div className="maeix-bubble" role="status">
          <button type="button" aria-label="Dismiss M.A.E.I.X. message" className="maeix-dismiss" onClick={() => { setBubble(null); quiet.current = true; }}>×</button>
          <p>{typed}</p>
          {line.chat ? (
            <button type="button" className="maeix-bubble-link" onClick={toggle}>{line.label} ↗</button>
          ) : (
            <a className="maeix-bubble-link" href={line.href}>{line.label} ↗</a>
          )}
        </div>
      )}
      {open && (
        <section id="maeix-guide" className="maeix-panel" role="dialog" aria-modal="false" aria-label="M.A.E.I.X. portfolio guide">
          <header className="maeix-panel-header">
            <Robot className="maeix-header-robot" />
            <div>
              <strong>M.A.E.I.X.</strong>
              <span>TOBE’S PORTFOLIO GUIDE</span>
            </div>
            <button type="button" className="maeix-close" aria-label="Close guide" onClick={toggle}>
              ×
            </button>
          </header>

          <div className="maeix-messages" ref={logRef} role="log" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`maeix-message ${message.from}`} key={`${index}-${message.text}`}>
                <p>{message.text}</p>
                {message.go && (
                  <button type="button" onClick={() => goTo(message.go)}>
                    Take me there ↗
                  </button>
                )}
              </div>
            ))}
            {busy && <div className="maeix-thinking" aria-label="M.A.E.I.X. is thinking"><i/><i/><i/></div>}
          </div>

          <div className="maeix-shortcuts">
            {tourStep >= 0 ? (
              <>
                <button type="button" onClick={() => showTourStep(tourStep + 1)}>
                  {tourStep === TOUR.length - 1 ? "Finish tour" : "Next section →"}
                </button>
                <button type="button" className="subtle" onClick={() => setTourStep(-1)}>
                  End tour
                </button>
              </>
            ) : (
              <>
                {SHORTCUTS.map(([label, key]) => (
                  <button key={key} type="button" disabled={busy} onClick={() => queueReply(label, key)}>
                    {label}
                  </button>
                ))}
                <button type="button" className="tour-button" disabled={busy} onClick={startTour}>
                  Give me a tour
                </button>
              </>
            )}
          </div>

          <form className="maeix-form" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={200}
              autoComplete="off"
              aria-label="Ask M.A.E.I.X. about Tobe's portfolio"
              placeholder="Ask about Tobe’s work..."
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send question">
              ↑
            </button>
          </form>
        </section>
      )}

      <button
        ref={buttonRef}
        type="button"
        className="maeix-launcher"
        style={{ "--scroll-progress": `${progress}%` }}
        onClick={toggle}
        aria-label={open ? "Close M.A.E.I.X. guide" : "Chat with M.A.E.I.X."}
        aria-expanded={open}
        aria-controls="maeix-guide"
      >
        <span className="maeix-launcher-inner">
          <span ref={tiltRef} className="maeix-robot-tilt"><Robot wave={waving} eyesRef={eyesRef} className="maeix-launcher-robot" /></span>
        </span>
      </button>
    </div>
  );
}
