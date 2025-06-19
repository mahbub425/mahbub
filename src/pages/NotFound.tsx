import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Ghost, ArrowLeftCircle } from "lucide-react";
import { ChevronUp } from "lucide-react";
import React from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <ScrollFadeIn>
        <div className="text-center p-10 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-lg border-0 animate-fade-in-up">
          <div className="flex flex-col items-center mb-6">
            <Ghost className="w-24 h-24 text-purple-400 animate-bounce mb-2" />
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>404</h1>
          </div>
          <p className="text-2xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>
            Oops! This page is as lost as your last left sock.
          </p>
          <p className="text-lg text-gray-600 mb-6">The page <span className="font-mono bg-gray-200 px-2 py-1 rounded">{location.pathname}</span> does not exist.<br />
            Maybe it went for a coffee break?</p>
          <a href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all border-0 text-lg">
            <ArrowLeftCircle className="w-6 h-6" />
            Go Home &amp; Try Again
          </a>
          <div className="mt-8 text-gray-400 text-sm italic">
            (No ghosts were harmed in the making of this error page)
          </div>
        </div>
      </ScrollFadeIn>
      <ScrollProgress />
    </div>
  );
};

function ScrollProgress() {
  const [scroll, setScroll] = React.useState(0);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
      setShow(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 56;
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scroll / 100) * circumference;

  return (
    <button
      onClick={handleBackToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        borderRadius: "50%",
        boxShadow: "0 4px 24px 0 rgba(91,33,182,0.13)",
        border: "none",
        padding: 0,
        width: size,
        height: size,
        display: show ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.3s",
      }}
      className="group hover:scale-110 focus:outline-none"
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e7ef"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scroll-gradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s" }}
        />
        <defs>
          <linearGradient id="scroll-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ position: "absolute" }}>
        <ChevronUp className="text-blue-600 group-hover:text-purple-600" size={28} />
      </span>
    </button>
  );
}

export default NotFound;
export { ScrollProgress };
