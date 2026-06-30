import { useState } from "react";
import { Github, ExternalLink, Mail, Facebook, Linkedin, ArrowRight, Code2, Layers, Zap, Globe, Terminal, Palette, Menu, X } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=1800&h=900&fit=crop&auto=format";
const ABOUT_IMG = "/profile.png";

const GITHUB_URL = "https://github.com/johnlouiecaparoso";

const projects = [
  {
    title: "This Portfolio Site",
    tag: "Learning by Building",
    year: "2025",
    desc: "A real React + TypeScript project I'm customizing hands-on — editing components, content, and styling to learn how a modern front-end codebase fits together.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    href: GITHUB_URL,
    color: "#a8341f",
  },
  {
    title: "HTML & CSS Practice Pages",
    tag: "Foundations",
    year: "2025",
    desc: "Hand-coded layout exercises focused on responsive design — flexbox, grid, and mobile-first structure — to build a solid foundation in semantic, accessible markup.",
    tech: ["HTML", "CSS", "Responsive Design"],
    href: GITHUB_URL,
    color: "#c08a2d",
  },
  {
    title: "JavaScript Exercises",
    tag: "In Progress",
    year: "2025",
    desc: "Small scripts and interactive snippets to practice JavaScript fundamentals — variables, functions, DOM manipulation, and events — as I work toward building dynamic pages.",
    tech: ["JavaScript", "DOM", "Git"],
    href: GITHUB_URL,
    color: "#4f6d5a",
  },
  {
    title: "Component Customization",
    tag: "Learning React",
    year: "2025",
    desc: "Practicing React by reading, tweaking, and rebuilding UI components — props, state, and reusable pieces — using these portfolio templates as my real-world sandbox.",
    tech: ["React", "Components", "Props & State"],
    href: GITHUB_URL,
    color: "#3c5a78",
  },
];

const skills = [
  { icon: Code2, label: "Foundational", items: ["HTML", "CSS", "Responsive Layouts", "Semantic Markup"] },
  { icon: Zap, label: "Learning", items: ["JavaScript Basics", "DOM & Events", "React (components, props)"] },
  { icon: Terminal, label: "Workflow", items: ["Git & GitHub Basics", "Code Editors (VS Code)", "Customizing Templates"] },
  { icon: Palette, label: "From Marketing", items: ["Visual Design Sense", "Canva", "Content & Layout", "Brand Consistency"] },
  { icon: Layers, label: "Transferable", items: ["Attention to Detail", "Communication", "Problem Solving", "Collaboration"] },
  { icon: Globe, label: "Exploring Next", items: ["Accessibility Basics", "Deploying Sites", "AI-assisted Coding"] },
];

const timeline = [
  { year: "2025", role: "Assistant Marketing Coordinator / Admin Staff", org: "LetzMarket", note: "Canada · Remote" },
  { year: "2024–2025", role: "Social Media Manager", org: "No Boundaries Marketing Group", note: "USA · Remote" },
  { year: "2023–2024", role: "Human Resource Staff", org: "Toyota Butuan City", note: "Butuan City, PH" },
  { year: "2022", role: "BS Information System", org: "Caraga State University", note: "Graduated" },
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
            &#9632; Available for freelance · Open to junior roles
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
            Learning to
            <br />
            <span style={{ color: "#c08a2d" }}>build</span> for
            <br />the web.
          </h1>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "rgba(241,233,219,0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
            className="mt-6 mb-10"
          >
            I'm John Louie — a marketing professional learning front-end web
            development (HTML, CSS, JavaScript, React). I'm building and
            customizing real projects, including this portfolio, as I grow my
            skills.
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
              What I'm Building <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                border: "1px solid rgba(241,233,219,0.25)",
                color: "#f1e9db",
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:border-[rgba(241,233,219,0.5)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 self-end pb-2">
          {[
            { num: "BS", label: "Information System, 2022" },
            { num: "3yrs", label: "Marketing & admin" },
            { num: "Now", label: "Learning web dev" },
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
            What I'm Learning
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground"
          >
            Practice Projects
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
            className="mt-4"
          >
            These are real, hands-on exercises I'm using to learn front-end
            development — not shipped client products. They're how I'm building
            foundational skills, one project at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-[0.4rem] p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(33,28,23,0.07)" }}
            >
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
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#a8341f", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
                  className="inline-flex items-center gap-1.5 hover:underline"
                >
                  <Github size={13} /> View on GitHub <ExternalLink size={13} />
                </a>
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
            My Skills
          </p>
          <h2
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f4ece0",
            }}
          >
            Foundational & Growing
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
                Learning web dev
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
              Building real skills,
              <br />one project at a time.
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
                I'm John Louie Caparoso, based in Magallanes, Agusan del Norte.
                My background is in marketing and administration, with around three
                years across social media management, marketing coordination, and HR
                support, and a BS in Information System (2022).
              </p>
              <p>
                Right now I'm learning front-end web development. I'm working through
                the fundamentals — HTML, CSS, responsive layouts, JavaScript, and React —
                and I learn best by building: customizing real templates like this very
                portfolio, hand-coding practice pages, and getting comfortable with
                Git and GitHub.
              </p>
              <p>
                I'm honest about where I am — early in the journey, but genuinely
                committed. My marketing background gives me a strong eye for layout,
                visual design, and clear communication, which I'm carrying into the
                way I build for the web.
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
                  <div key={t.year} className="flex items-start gap-3 sm:gap-5">
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
            Let's connect
            <br />
            and grow together.
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: "44ch",
            }}
            className="mb-10"
          >
            I'm available for freelance work and open to junior front-end roles
            where I can keep learning. If you're looking for someone eager,
            detail-oriented, and committed to improving every day — I'd love to
            hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
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
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                border: "1px solid rgba(33,28,23,0.2)",
                color: "#211c17",
                fontSize: "0.9rem",
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[0.4rem] hover:border-[rgba(33,28,23,0.4)] transition-colors"
            >
              <Github size={16} /> View My GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { icon: Github, label: "GitHub", href: GITHUB_URL },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-louie-caparoso-0a344a256/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/louiecaparoso4" },
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
          © 2025 John Louie Caparoso · Magallanes, Agusan del Norte, PH
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(241,233,219,0.25)",
          }}
        >
          Customized while learning to code
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
