import { useState } from "react";
import { Github, ExternalLink, Mail, Facebook, Linkedin, ArrowRight, Code2, Palette, Zap, Globe, Terminal, Database, MessageCircle, FileText, Menu, X } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=1800&h=900&fit=crop&auto=format";
const ABOUT_IMG = "/profile.png";

const GITHUB_URL = "https://github.com/johnlouiecaparoso";
const WHATSAPP_URL = "https://wa.me/639129128000";
const RESUME_URL = "/resume.html";

const projects = [
  {
    title: "Carbonify",
    tag: "Current Work",
    year: "2026",
    desc: "A carbon credit marketplace — one of the first of its kind in the Philippines. Buyers connect with verified carbon projects worldwide, and specialists can apply as project developers or verifiers. I help build and ship the platform.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    img: "/projects/carbonify.png",
    live: "https://ecolink-git-main-john-louie-caparosos-projects.vercel.app/home",
    repo: "https://github.com/johnlouiecaparoso/carbonify13",
    color: "#4f6d5a",
  },
  {
    title: "Balanced Scorecard",
    tag: "OJT · CSU",
    year: "2026",
    desc: "A performance-tracking system for Caraga State University. Admins monitor the KPIs of every college and office, then analyze and present the results to the president, board, and stakeholders.",
    tech: ["React", "TypeScript", "Supabase", "Charts"],
    img: "/projects/balance-scorecard.png",
    live: "https://balance-scorecard1.vercel.app/login",
    repo: "https://github.com/johnlouiecaparoso/BSC",
    color: "#a8341f",
  },
  {
    title: "Animarka",
    tag: "OJT · CSU",
    year: "2026",
    desc: "An online grade portal for the College of Agriculture. Students sign in to view their grades and scores for each subject, all in one clean place.",
    tech: ["React", "Supabase", "Tailwind"],
    img: "/projects/animarka.png",
    live: "https://animarka.vercel.app/login",
    repo: "https://github.com/johnlouiecaparoso/animarka",
    color: "#c08a2d",
  },
  {
    title: "InternTrack",
    tag: "OJT · CSU",
    year: "2026",
    desc: "A biometric internship attendance system for Caraga State University. Interns log time-in / time-out with fingerprint or password login, and admins review daily records.",
    tech: ["React", "Supabase", "Biometric Auth"],
    img: "/projects/internship-attendance-system.png",
    live: "https://biometric-internship6.vercel.app/login",
    repo: "https://github.com/johnlouiecaparoso/biometric-internship",
    color: "#3c5a78",
  },
  {
    title: "Psycend",
    tag: "Board Exam App",
    year: "2026",
    desc: "A review platform for psychology board-exam students — timed mock exams, quizzes, flashcards, and analytics that track weak topics and readiness, with Supabase-powered access control.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    img: "/projects/psycend.png",
    live: "https://psycend.vercel.app/",
    repo: "https://github.com/johnlouiecaparoso/Psycend",
    color: "#a8341f",
  },
  {
    title: "Mineace",
    tag: "Board Exam App",
    year: "2026",
    desc: "A complete PRC Mining Engineering board reviewer. Students drill mock exams, flip flashcards, and track readiness across every subject — from RA 7942 to mineral processing.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    img: "/projects/mineace.png",
    live: "https://mineace.vercel.app/",
    repo: "https://github.com/johnlouiecaparoso/mineace",
    color: "#c08a2d",
  },
  {
    title: "Warrant System",
    tag: "Records System",
    year: "2026",
    desc: "A warrant management system for Butuan City Police Station 1. It replaces paper logs so officers can securely store and search warrant records in seconds.",
    tech: ["React", "TypeScript", "Supabase"],
    img: "/projects/warrant-system.png",
    live: "https://warrant-system01.vercel.app/login",
    repo: "https://github.com/johnlouiecaparoso/warrant-system",
    color: "#3c5a78",
  },
];

const skills = [
  { icon: Code2, label: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { icon: Zap, label: "Frameworks", items: ["React", "Next.js", "Vue.js"] },
  { icon: Palette, label: "Styling", items: ["Tailwind CSS", "Bootstrap", "Responsive Design"] },
  { icon: Database, label: "Backend & Data", items: ["Supabase", "Auth & Databases", "REST APIs"] },
  { icon: Terminal, label: "Deploy & DevOps", items: ["Vercel", "Git & GitHub", "CI/CD"] },
  { icon: Globe, label: "Also Bring", items: ["Clean UI/UX eye", "Clear communication", "Problem solving"] },
];

const timeline = [
  { year: "2026–Present", role: "Full-Stack Developer", org: "Carbonify", note: "Carbon Credit Marketplace · Remote" },
  { year: "2026", role: "Web Developer (OJT)", org: "Caraga State University", note: "Built KPI, grade & attendance systems" },
  { year: "2026", role: "BS Information System", org: "Caraga State University", note: "Graduated" },
];

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const links = ["Work", "Skills", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[#1c1916]/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={() => { setActive("hero"); setMenuOpen(false); }}
          style={{ fontFamily: "'Roboto Slab', serif" }}
          className="text-[#f4ece0] font-bold tracking-tight text-base"
        >
          John Louie <span style={{ color: "#c08a2d" }}>Caparoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l.toLowerCase())}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.65)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              className="hover:text-[#f1e9db] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="mailto:johnlouiecaparoso@gmail.com"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            background: "#a8341f",
            color: "#fbf6ee",
          }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
        >
          Contact <ArrowRight size={12} />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-[0.4rem] text-[#f1e9db] hover:bg-[rgba(251,246,238,0.08)] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-[#1c1916]/98 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.75)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                className="py-3 hover:text-[#f1e9db] transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                background: "#a8341f",
                color: "#fbf6ee",
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
            >
              Contact <ArrowRight size={12} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-20 md:pt-14 overflow-hidden"
      style={{ backgroundColor: "#1c1916" }}
    >
      <img
        src={HERO_IMG}
        alt="Developer workspace with dark monitor showing code"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.45 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(28,25,22,0.96) 0%, rgba(28,25,22,0.55) 60%, rgba(28,25,22,0.2) 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "#c08a2d",
              textTransform: "uppercase",
            }}
            className="mb-6"
          >
            &#9632; Available for freelance · Open to full-time roles
          </p>
          <h1
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#f4ece0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            I <span style={{ color: "#c08a2d" }}>build</span>
            <br />
            for the
            <br />web.
          </h1>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "rgba(241,233,219,0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "44ch",
            }}
            className="mt-6 mb-10"
          >
            I'm John Louie — a full-stack web developer building real products
            with React, Next.js, TypeScript, and Supabase. Right now I'm building
            a carbon credit marketplace at Carbonify.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              style={{
                fontFamily: "'Roboto Slab', serif",
                background: "#a8341f",
                color: "#fbf6ee",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                border: "1px solid rgba(241,233,219,0.25)",
                color: "#f1e9db",
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:border-[rgba(241,233,219,0.5)] transition-colors"
            >
              <FileText size={15} /> View Résumé
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 self-end pb-2">
          {[
            { num: "7+", label: "Projects built" },
            { num: "Full-Stack", label: "React · Next · Supabase" },
            { num: "2026", label: "BS Info System, CSU" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-4">
              <span
                style={{
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
                  color: "#c08a2d",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(241,233,219,0.5)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8341f",
            }}
            className="mb-3"
          >
            Selected Work
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground"
          >
            Things I've Built
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              maxWidth: "56ch",
            }}
            className="mt-4"
          >
            Real web apps I've built or shipped — from a university KPI dashboard
            and board-exam review platforms to a carbon credit marketplace. Each
            one solves a real problem for real users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-[0.4rem] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(33,28,23,0.07)" }}
            >
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="block relative overflow-hidden border-b border-border"
                style={{ aspectRatio: "16 / 9", background: p.color + "12" }}
                aria-label={`Open ${p.title} live site`}
              >
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
              </a>
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div
                  style={{
                    background: p.color + "18",
                    border: `1px solid ${p.color}33`,
                    borderRadius: "0.4rem",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: p.color,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: "#6f6354",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.year}
                </span>
              </div>
              <h3
                style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.4rem" }}
                className="text-foreground"
              >
                {p.title}
              </h3>
              <p
                style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", lineHeight: 1.65, fontSize: "0.92rem" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.08em",
                      background: "rgba(33,28,23,0.06)",
                      color: "#6f6354",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "0.25rem",
                      border: "1px solid rgba(33,28,23,0.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2 pt-4 border-t border-border">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    background: "#a8341f",
                    color: "#fbf6ee",
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[0.35rem] hover:bg-[#8f2c1a] transition-colors"
                >
                  View Live <ExternalLink size={13} />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    border: "1px solid rgba(33,28,23,0.2)",
                    color: "#211c17",
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[0.35rem] hover:border-[rgba(33,28,23,0.45)] transition-colors"
                >
                  <Github size={13} /> Code
                </a>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-28"
      style={{ background: "#211c17" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c08a2d",
            }}
            className="mb-3"
          >
            My Stack
          </p>
          <h2
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f4ece0",
            }}
          >
            Tools I Build With
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {skills.map((s) => (
            <div
              key={s.label}
              className="rounded-[0.4rem] p-5 md:p-6 group hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: "rgba(251,246,238,0.04)",
                border: "1px solid rgba(241,233,219,0.1)",
              }}
            >
              <div
                className="flex items-center gap-3 mb-5"
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-[0.35rem]"
                  style={{ background: "#c08a2d22", color: "#c08a2d" }}
                >
                  <s.icon size={16} />
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#c08a2d",
                  }}
                >
                  {s.label}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      color: "rgba(241,233,219,0.72)",
                      fontSize: "0.88rem",
                    }}
                    className="flex items-center gap-2"
                  >
                    <span style={{ color: "#a8341f", fontSize: "0.5rem" }}>&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-[0.4rem] overflow-hidden"
              style={{ background: "#c4b49c" }}
            >
              <img
                src={ABOUT_IMG}
                alt="John Louie Caparoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-5 rounded-[0.4rem] px-5 py-4"
              style={{
                background: "#a8341f",
                color: "#fbf6ee",
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                boxShadow: "0 8px 32px rgba(168,52,31,0.35)",
              }}
            >
              <div style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>Now</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(251,246,238,0.8)",
                }}
              >
                Building at Carbonify
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#a8341f",
              }}
              className="mb-3"
            >
              About Me
            </p>
            <h2
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }}
              className="text-foreground mb-6"
            >
              Full-stack developer
              <br />who ships real products.
            </h2>
            <div
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                color: "#6f6354",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
              className="space-y-4 mb-10"
            >
              <p>
                I'm John Louie Caparoso, a full-stack web developer based in
                Magallanes, Agusan del Norte. I graduated with a BS in Information
                System (2026) from Caraga State University — web development is my
                focus and my profession.
              </p>
              <p>
                During my OJT at the university I built internal systems used by
                real people: a KPI dashboard for leadership, a student grade
                portal, and an intern attendance tracker. Today I work as a
                full-stack developer at Carbonify, a pioneering carbon credit
                marketplace in the Philippines, and I build board-exam review
                platforms and records systems on the side.
              </p>
              <p>
                I work across the stack — React, Next.js, TypeScript, Tailwind,
                Vue, and Supabase — and I care about clean, responsive interfaces,
                clear communication, and shipping things that actually work.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.63rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6f6354",
                }}
                className="mb-5"
              >
                Experience & Education
              </p>
              <div className="space-y-5">
                {timeline.map((t) => (
                  <div key={t.year + t.role} className="flex items-start gap-3 sm:gap-5">
                    <span
                      className="min-w-[4.5rem] sm:min-w-[7rem]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#c08a2d",
                        letterSpacing: "0.06em",
                        paddingTop: "0.1rem",
                      }}
                    >
                      {t.year}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Libre Franklin', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.92rem",
                          color: "#211c17",
                        }}
                      >
                        {t.role}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Libre Franklin', sans-serif",
                          fontSize: "0.83rem",
                          color: "#6f6354",
                        }}
                      >
                        {t.org} · {t.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-28 border-t border-border"
      style={{ background: "#fbf6ee" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8341f",
            }}
            className="mb-3"
          >
            Let's Talk
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground mb-4"
          >
            Let's build
            <br />
            something together.
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: "46ch",
            }}
            className="mb-10"
          >
            I'm available for freelance projects and open to full-time web
            developer roles. Have an idea, a product to build, or a role to fill?
            Message me on WhatsApp or drop an email — I reply fast.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Roboto Slab', serif",
                background: "#4f6d5a",
                color: "#fbf6ee",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 rounded-[0.4rem] hover:brightness-110 transition-all text-center"
            >
              <MessageCircle size={16} className="shrink-0" /> WhatsApp: 0912 912 8000
            </a>
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              style={{
                fontFamily: "'Roboto Slab', serif",
                background: "#a8341f",
                color: "#fbf6ee",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors break-all text-center"
            >
              <Mail size={16} className="shrink-0" /> johnlouiecaparoso@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
              { icon: Github, label: "GitHub", href: GITHUB_URL },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-louie-caparoso-0a344a256/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/louiecaparoso4" },
              { icon: FileText, label: "Résumé", href: RESUME_URL },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{ color: "#6f6354" }}
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <s.icon size={18} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  className="hidden sm:block"
                >
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-border py-7"
      style={{ background: "#1c1916" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(241,233,219,0.35)",
          }}
        >
          © 2026 John Louie Caparoso · Magallanes, Agusan del Norte, PH
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(241,233,219,0.25)",
          }}
        >
          Full-Stack Web Developer · React · Next.js · Supabase
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("hero");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <NavBar active={active} setActive={setActive} />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
