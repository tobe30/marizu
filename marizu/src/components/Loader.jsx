import { useEffect, useState } from "react";
import Robot from "./Robot.jsx";
import "./Loader.css";

const STEPS = ["Client", "API", "Data", "Server"];
const LINES = [
  "Hi, I'm M.A.E.I.X. Loading the client...",
  "Calling the API...",
  "Reading the data...",
  "Server ready. Let me show you around Tobe's portfolio.",
];

export default function Loader({ onDone }) {
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timers = [];
    const oldOverflow = document.body.style.overflow;
    let minimumTimePassed = false;
    let pageReady = false;
    let finished = false;

    const finish = () => {
      if (finished || !minimumTimePassed || !pageReady) return;
      finished = true;
      setLeaving(true);
      timers.push(setTimeout(onDone, reducedMotion ? 300 : 1000));
    };

    if (reducedMotion) setStep(3);
    else {
      [600, 1100, 1600].forEach((delay, index) => {
        timers.push(setTimeout(() => setStep(index + 1), delay));
      });
    }

    timers.push(
      setTimeout(() => {
        minimumTimePassed = true;
        finish();
      }, reducedMotion ? 300 : 2000),
    );

    const markPageReady = () => {
      (document.fonts?.ready ?? Promise.resolve()).then(() => {
        pageReady = true;
        finish();
      });
    };

    if (document.readyState === "complete") markPageReady();
    else window.addEventListener("load", markPageReady, { once: true });

    timers.push(
      setTimeout(() => {
        minimumTimePassed = true;
        pageReady = true;
        finish();
      }, 5000),
    );

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
      timers.forEach(clearTimeout);
      window.removeEventListener("load", markPageReady);
    };
  }, [onDone]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
      className={`portfolio-loader ${leaving ? "is-leaving" : ""}`}
    >
      <div className={`loader-card ${leaving ? "is-fading" : ""}`}>
        <div className="loader-intro">
          <Robot wave={step === 3} />
          <p key={step} className="loader-message">
            {LINES[step]}
          </p>
        </div>
        <div className="loader-brand">
          <span className="loader-brand-mark">t.</span>
          <span>TOBE</span>
        </div>
        <ul className="loader-steps" aria-label="Loading progress">
          {STEPS.map((label, index) => (
            <li
              key={label}
              className={index <= step ? "is-complete" : ""}
              aria-current={index === step ? "step" : undefined}
            >
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <progress
          className="loader-progress"
          value={(step + 1) * 25}
          max="100"
          aria-label="Portfolio loading progress"
        />
      </div>
    </div>
  );
}
