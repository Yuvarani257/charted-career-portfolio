import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useId, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Menu,
  X,
  Database,
  Code2,
  ChartNoAxesCombined,
  Layers,
  Sparkles,
  Brain,
  Target,
  BookOpen,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Check,
  ShieldCheck,
  ShoppingBag,
  FileSpreadsheet,
  Monitor,
  Award,
  ExternalLink,
  SlidersHorizontal,
  TrendingUp,
  Activity,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import {
  projects,
  skills,
  certificates,
  articles,
  github,
  linkedin,
  demoMetrics,
  validateContact,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bevara Yuva Rani | Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Explore Bevara Yuva Rani’s data analytics projects, Python and SQL skills, Power BI dashboards, education, and professional experience.",
      },
      { property: "og:title", content: "Bevara Yuva Rani | Aspiring Data Analyst" },
      {
        property: "og:description",
        content:
          "Turning data into insights. Explore projects, technical skills, and the journey of aspiring Data Analyst Bevara Yuva Rani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
const nav = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Blog",
  "Contact",
];
const roles = [
  "Data Analyst",
  "Business Intelligence Enthusiast",
  "Data Visualization Explorer",
  "Analytical Problem Solver",
];
const email = "yuvarani0705@gmail.com";
type ModalState =
  { type: "project" | "article" | "certificate"; index: number } | { type: "resume" } | null;

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number}</span>
        <span className="eyebrow-line" />
        {label}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
function LineChart({
  compact = false,
  region = "All regions",
}: {
  compact?: boolean;
  region?: string;
}) {
  const chartId = useId();
  const data = demoMetrics(region).values;
  const max = Math.max(...data);
  const points = data.map((v, i) => `${38 + i * 34},${150 - (v / max) * 105}`).join(" ");
  return (
    <svg
      className="line-chart"
      viewBox="0 0 450 200"
      role="img"
      aria-label={`Illustrative monthly revenue trend for ${region}`}
    >
      <defs>
        <linearGradient id={chartId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="chart-gradient-start" />
          <stop offset="100%" className="chart-gradient-end" />
        </linearGradient>
      </defs>
      {[45, 80, 115, 150].map((y, i) => (
        <g key={y}>
          <line className="chart-grid" x1="35" x2="425" y1={y} y2={y} />
          <text className="chart-label" x="0" y={y + 3}>
            {(4 - i) * 10}k
          </text>
        </g>
      ))}
      <polygon points={`38,150 ${points} 412,150`} fill={`url(#${chartId})`} />
      <polyline className="chart-line" points={points} />
      {data.map((v, i) => (
        <circle key={i} className="chart-point" cx={38 + i * 34} cy={150 - (v / max) * 105} r="3">
          <title>{`${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}: ${v} demo units`}</title>
        </circle>
      ))}
      {["Jan", "Mar", "May", "Jul", "Sep", "Dec"].map((month, i) => (
        <text key={month} className="chart-label" x={38 + i * 74} y="180">
          {month}
        </text>
      ))}
    </svg>
  );
}
function Bars({ small = false, region = "All regions" }: { small?: boolean; region?: string }) {
  const vals = demoMetrics(region).values.filter((_, i) => i % 2 === 0);
  return (
    <svg
      className={small ? "bar-chart small" : "bar-chart"}
      viewBox="0 0 280 145"
      role="img"
      aria-label="Illustrative regional sales bar chart"
    >
      {[35, 70, 105].map((y) => (
        <line key={y} className="chart-grid" x1="10" x2="275" y1={y} y2={y} />
      ))}
      {vals.map((v, i) => (
        <g key={i}>
          <rect
            className={i % 2 === 0 ? "bar-primary" : "bar-secondary"}
            x={19 + i * 43}
            y={120 - v * 0.75}
            width="23"
            height={v * 0.75}
            rx="3"
          >
            <title>{`${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}: ${v} demo units`}</title>
          </rect>
          <text className="chart-label" x={19 + i * 43} y="140">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
function Donut() {
  return (
    <div className="donut-wrap">
      <svg
        viewBox="0 0 120 120"
        role="img"
        aria-label="Demo product mix: technology 45%, lifestyle 30%, other 25%"
      >
        <circle className="donut-track" cx="60" cy="60" r="42" />
        <circle
          className="donut-main"
          cx="60"
          cy="60"
          r="42"
          pathLength="100"
          strokeDasharray="45 55"
        />
        <circle
          className="donut-second"
          cx="60"
          cy="60"
          r="42"
          pathLength="100"
          strokeDasharray="30 70"
          strokeDashoffset="-45"
        />
        <text className="donut-value" x="60" y="60" textAnchor="middle">
          1,842
        </text>
        <text className="chart-label" x="60" y="75" textAnchor="middle">
          orders
        </text>
      </svg>
      <div className="donut-legend">
        <span>
          <i />
          Technology <b>45%</b>
        </span>
        <span>
          <i />
          Lifestyle <b>30%</b>
        </span>
        <span>
          <i />
          Other <b>25%</b>
        </span>
      </div>
    </div>
  );
}
function HeroDashboard() {
  return (
    <div className="hero-art" aria-label="Illustrative analytics workspace">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="floating-tag python-tag">
        <Code2 size={16} /> Python <span>+ Pandas</span>
      </div>
      <div className="dashboard-window">
        <div className="window-top">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>analytics_workspace</span>
          <span className="live-label">
            <i /> Live preview
          </span>
        </div>
        <div className="window-body">
          <div className="window-heading">
            <div>
              <span className="tiny-label">OVERVIEW</span>
              <h3>Business performance</h3>
            </div>
            <SlidersHorizontal size={15} />
          </div>
          <div className="mini-kpis">
            <div>
              <span>Total revenue</span>
              <strong>$124,580</strong>
              <small>
                <TrendingUp size={11} /> 12.8% <em>vs last period</em>
              </small>
            </div>
            <div>
              <span>Total orders</span>
              <strong>1,842</strong>
              <small>
                <TrendingUp size={11} /> 8.2% <em>vs last period</em>
              </small>
            </div>
            <div>
              <span>Conversion rate</span>
              <strong>
                3.64<span>%</span>
              </strong>
              <small>
                <TrendingUp size={11} /> 2.1% <em>vs last period</em>
              </small>
            </div>
          </div>
          <div className="hero-chart">
            <div className="chart-heading">
              <span>Revenue overview</span>
              <span className="chart-key">
                <i /> Revenue <small>Jan – Dec</small>
              </span>
            </div>
            <LineChart compact />
          </div>
          <div className="hero-bottom-charts">
            <div>
              <div className="chart-heading">
                Sales by month <span>↗</span>
              </div>
              <Bars small />
            </div>
            <div>
              <div className="chart-heading">Product mix</div>
              <Donut />
            </div>
          </div>
          <div className="workspace-footer">
            <span>
              <CircleDot size={10} /> Illustrative sample data
            </span>
            <span>
              Powered by curiosity <Sparkles size={10} />
            </span>
          </div>
        </div>
      </div>
      <div className="floating-tag insight-tag">
        <span className="insight-icon">
          <TrendingUp size={20} />
        </span>
        <div>
          <span>From data to decisions</span>
          <strong>
            Insights that matter <Sparkles size={12} />
          </strong>
        </div>
      </div>
      <div className="floating-tag sql-tag">
        <Database size={15} /> SQL <span>Query. Explore. Discover.</span>
      </div>
    </div>
  );
}
function ProjectArtwork({ kind }: { kind: string }) {
  const Icon =
    kind === "security"
      ? ShieldCheck
      : kind === "recommendation"
        ? ShoppingBag
        : kind === "excel"
          ? FileSpreadsheet
          : Monitor;
  return (
    <div className={`project-art ${kind}`}>
      <div className="project-art-header">
        <span>
          <Icon size={13} />{" "}
          {kind === "security"
            ? "THREAT INTELLIGENCE"
            : kind === "recommendation"
              ? "RECOMMENDATION ENGINE"
              : kind === "excel"
                ? "SALES OVERVIEW"
                : "E-COMMERCE ANALYTICS"}
        </span>
        <span>ILLUSTRATIVE</span>
      </div>
      {kind === "security" ? (
        <div className="security-visual">
          <div className="security-node">
            <Database />
            <span>DATA</span>
          </div>
          <span className="connection-line" />
          <div className="security-core">
            <ShieldCheck size={40} />
            <span>INTELLIGENT DETECTION</span>
          </div>
          <span className="connection-line" />
          <div className="security-node">
            <Activity />
            <span>INSIGHTS</span>
          </div>
        </div>
      ) : kind === "recommendation" ? (
        <div className="recommend-visual">
          <div className="user-node">
            <Brain size={30} />
            <span>User patterns</span>
          </div>
          <span className="connection-line" />
          <div className="product-nodes">
            {[ShoppingBag, Target, Sparkles].map((I, i) => (
              <div key={i}>
                <I size={21} />
                <span>{["Behavior", "Relevance", "Personalization"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="project-dashboard">
          <div className="mock-kpis">
            <span>
              REVENUE<strong>Overview ↗</strong>
            </span>
            <span>
              ORDERS<strong>Performance</strong>
            </span>
            <span>
              GROWTH<strong>Trends ↗</strong>
            </span>
          </div>
          <div className="mock-charts">
            <Bars small />
            <LineChart compact />
          </div>
        </div>
      )}
    </div>
  );
}
function Portfolio() {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [role, setRole] = useState(0);
  const [modal, setModal] = useState<ModalState>(null);
  const [region, setRegion] = useState("All regions");
  const [blogFilter, setBlogFilter] = useState("All");
  const [formFeedback, setFormFeedback] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const metrics = demoMetrics(region);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setInterval(() => setRole((v) => (v + 1) % roles.length), 3600);
      return () => clearInterval(timer);
    }
    return undefined;
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  async function openResume() {
    setModal({ type: "resume" });
    try {
      const response = await fetch(resumeAsset.url, { method: "HEAD" });
      setResumeAvailable(
        response.ok && (response.headers.get("content-type")?.includes("application/pdf") ?? false),
      );
    } catch {
      setResumeAvailable(false);
    }
  }
  async function downloadResume() {
    const link = document.createElement("a");
    link.href = resumeAsset.url;
    link.download = "Bevara-Yuva-Rani-Resume.pdf";
    link.click();
  }
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const address = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const error = validateContact(name, address, subject, message);
    if (error) {
      setFormFeedback(error);
      setEmailDraft("");
      return;
    }
    setEmailDraft(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${address}`)}`,
    );
    setFormFeedback("Your draft is ready—not sent yet. Open your email app below to send it.");
  }
  const project = modal?.type === "project" ? projects[modal.index] : undefined;
  const article = modal?.type === "article" ? articles[modal.index] : undefined;
  const certificate = modal?.type === "certificate" ? certificates[modal.index] : undefined;
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Yuva Rani home">
          <span className="brand-mark">
            y<span>.</span>
          </span>
          <span>
            Yuva Rani
          </span>
        </a>
        <nav className={menu ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item.toLowerCase() ? "active" : ""}
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <Button variant="outline" className="header-resume" onClick={openResume}>
            <Download /> Resume
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-grid-background" />
          <div className="page-width hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <i /> OPEN TO DATA ANALYST OPPORTUNITIES
              </div>
              <p className="hero-intro">
                Hi, I’m <span className="wave">✦</span>
              </p>
              <h1>
                Bevara
                <br />
                <span>
                  Yuva Rani
                </span>
              </h1>
              <div className="animated-role">
                <span className="code-bracket">&lt;</span>
                <span key={role}>{roles[role]}</span>
                <span className="role-cursor" />
                <span className="code-bracket">/&gt;</span>
              </div>
              <h2>
                Turning complex data
                <br />
                into <span>meaningful insights.</span>
              </h2>
              <p className="hero-description">
                I explore patterns, connect the dots, and transform raw data into actionable
                insights with Python, SQL, Excel, and Power BI.
              </p>
              <div className="hero-buttons">
                <Button asChild size="lg">
                  <a href="#projects">
                    Explore My Projects <ArrowUpRight />
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={downloadResume}>
                  <Download /> Download Resume
                </Button>
              </div>
              <div className="hero-connect">
                <a href="#contact">
                  Let’s connect <ArrowRight size={15} />
                </a>
                <span className="vertical-divider" />
                <a href={github} target="_blank" rel="noreferrer" aria-label="Visit GitHub">
                  <Github size={17} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn">
                  <Linkedin size={17} />
                </a>
                <span className="hero-location">
                  <MapPin size={13} /> Hyderabad, India
                </span>
              </div>
            </div>
            <HeroDashboard />
          </div>
          <div className="hero-bottom page-width">
            <span>CURIOUS MIND. ANALYTICAL THINKING. REAL IMPACT.</span>
            <a href="#about">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
            <span className="hero-index">01 / 09</span>
          </div>
        </section>
        <div className="tech-strip">
          <div className="page-width">
            <span className="tech-strip-label">MY EVERYDAY TOOLKIT</span>
            <span>
              <Code2 /> Python
            </span>
            <span>
              <Database /> SQL
            </span>
            <span>
              <FileSpreadsheet /> Excel
            </span>
            <span>
              <ChartNoAxesCombined /> Power BI
            </span>
            <span>
              <Layers /> Pandas
            </span>
            <span>
              <Github /> GitHub
            </span>
          </div>
        </div>
        <section id="about" className="section page-width">
          <SectionHeading
            number="01"
            label="THE PERSON BEHIND THE PATTERNS"
            title="Beyond the data"
          />
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                A curious mind.
                <br />A passion for <span>making data make sense.</span>
              </p>
              <p>
                I’m Bevara Yuva Rani, a Computer Science and Information Technology graduate with a
                strong interest in Data Analytics and Business Intelligence.
              </p>
              <p>
                I enjoy exploring datasets, identifying meaningful patterns, creating interactive
                dashboards, and transforming information into insights that support better
                decision-making.
              </p>
              <p>
                Through my internship, academic projects, and independent learning, I’ve developed
                practical exposure to Python, SQL, Excel, Power BI, data cleaning, exploratory data
                analysis, and data visualization.
              </p>
              <p>
                I’m eager to apply my analytical and technical skills to real-world projects,
                collaborate with experienced professionals, and continuously grow as a Data Analyst.
              </p>
              <div className="mindset-grid">
                {[
                  [Brain, "Analytical Thinking"],
                  [Lightbulb, "Problem Solving"],
                  [BookOpen, "Continuous Learning"],
                  [Target, "Data-Driven Decisions"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Brain;
                  return (
                    <div className="mindset-card" key={String(label)}>
                      <I size={19} />
                      <span>{String(label)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="education">
              <h3>
                <GraduationCap size={21} /> My learning journey
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <span className="tiny-label">2022 — 2026</span>
                  <h4>
                    B.Tech · Computer Science &<br />
                    Information Technology
                  </h4>
                  <p>Marri Laxman Reddy Institute of Technology and Management</p>
                  <span className="education-score">
                    CGPA <b>8.22</b>
                  </span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <span className="tiny-label">2020 — 2022</span>
                  <h4>Intermediate · MPC</h4>
                  <p>Sri Chaitanya Junior Kalasala</p>
                  <span className="education-score">
                    SCORE <b>95%</b>
                  </span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <span className="tiny-label">FOUNDATIONS</span>
                  <h4>High School</h4>
                  <p>Sri Sai Chaitanya High School</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section section-band">
          <div className="page-width">
            <SectionHeading
              number="02"
              label="TOOLS THAT POWER MY CURIOSITY"
              title="My technical arsenal"
              description="The technologies and techniques I use to explore, analyze, and communicate data."
            />
            <div className="skills-grid">
              {skills.map((skill, i) => {
                const Icon =
                  [Code2, ChartNoAxesCombined, Database, Monitor, Layers, Sparkles][i] ?? Code2;
                return (
                  <div className="skill-card" key={skill.title}>
                    <div className="skill-heading">
                      <span className="icon-box">
                        <Icon size={23} />
                      </span>
                      <span className="card-number">0{i + 1}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <div className="tags">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="experience" className="section page-width">
          <SectionHeading
            number="03"
            label="LEARNING IN THE REAL WORLD"
            title="Professional experience"
          />
          <div className="experience-layout">
            <div className="experience-aside">
              <span className="icon-box">
                <BriefcaseBusiness />
              </span>
              <p>
                From classroom concepts
                <br />
                to hands-on exploration.
              </p>
              <span className="tiny-label">MY FIRST PROFESSIONAL CHAPTER</span>
            </div>
            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <span className="experience-type">INTERNSHIP</span>
                  <h3>Deep Learning Intern</h3>
                  <p>Central Institute of Tool Design (CITD)</p>
                </div>
                <div className="experience-meta">
                  <span>Aug 2024 — Sep 2024</span>
                  <span>
                    <MapPin size={12} /> Hyderabad, India
                  </span>
                </div>
              </div>
              <ul>
                {[
                  "Worked with Python and Pandas for dataset handling, cleaning, and preprocessing.",
                  "Performed exploratory data analysis to investigate patterns and understand datasets.",
                  "Assisted with testing and investigating issues across different configurations.",
                  "Explored machine learning workflows and documented technical observations.",
                  "Collaborated with team members to share findings and support project work.",
                ].map((text) => (
                  <li key={text}>
                    <Check size={15} />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>EDA</span>
                <span>Machine Learning</span>
                <span>Documentation</span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section section-band">
          <div className="page-width">
            <div className="section-title-row">
              <SectionHeading
                number="04"
                label="SELECTED WORK"
                title="Turning ideas into impact"
                description="Four projects. Different challenges. One data-driven approach."
              />
              <a className="text-link" href={github} target="_blank" rel="noreferrer">
                Visit my GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <article className="project-card" key={p.title}>
                  <ProjectArtwork kind={p.kind} />
                  <div className="project-card-body">
                    <span className="tiny-label">
                      {p.category} <span className="project-number">0{i + 1}</span>
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <Button
                        variant="link"
                        onClick={() => setModal({ type: "project", index: i })}
                      >
                        View Details <ArrowUpRight />
                      </Button>
                      <Button
                        variant="ghost"
                        aria-label={`Repository information for ${p.title}`}
                        onClick={() => setModal({ type: "project", index: i })}
                      >
                        <Github /> Repository
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="analytics" className="section page-width">
          <div className="section-title-row">
            <SectionHeading
              number="05"
              label="EXPLORE. FILTER. DISCOVER."
              title="Data in action"
              description="A little glimpse into how I see data: connected, visual, and actionable."
            />
            <span className="demo-badge">
              <CircleDot size={12} /> ILLUSTRATIVE DEMO DATA
            </span>
          </div>
          <div className="analytics-toolbar">
            <div>
              <ChartNoAxesCombined size={21} />
              <div>
                <h3>Sales intelligence</h3>
                <span>Business performance overview · Jan – Dec</span>
              </div>
            </div>
            <label>
              <SlidersHorizontal size={14} />
              <select
                aria-label="Filter dashboard by region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                {["All regions", "North", "South", "West"].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="analytics-kpis">
            {[
              ["Total revenue", `$${metrics.revenue.toLocaleString("en-US")}`, TrendingUp],
              ["Total orders", metrics.orders.toLocaleString("en-US"), ShoppingBag],
              ["Customers", metrics.customers.toLocaleString("en-US"), Brain],
              ["Average order value", `$${(metrics.revenue / metrics.orders).toFixed(2)}`, Target],
            ].map(([label, value, I]) => {
              const Icon = I as typeof Brain;
              return (
                <div className="analytics-kpi" key={String(label)}>
                  <span>
                    {String(label)}
                    <Icon size={17} />
                  </span>
                  <strong>{String(value)}</strong>
                  <small>Illustrative sample · {region}</small>
                </div>
              );
            })}
          </div>
          <div className="analytics-charts">
            <div className="analytics-chart wide">
              <div className="chart-heading">
                <h4>Revenue trend</h4>
                <span className="chart-key">
                  <i /> Monthly revenue
                </span>
              </div>
              <LineChart region={region} />
              <p className="chart-note">
                <TrendingUp size={14} /> The demo trend rises overall, with month-to-month
                variation.
              </p>
            </div>
            <div className="analytics-chart">
              <div className="chart-heading">
                <h4>Sales breakdown</h4>
                <span>H1</span>
              </div>
              <Bars region={region} />
              <div className="chart-note">Jan – Jun · sample units</div>
            </div>
            <div className="analytics-chart mix">
              <div className="chart-heading">
                <h4>Product mix</h4>
              </div>
              <Donut />
              <div className="chart-note">Illustrative distribution · all regions</div>
            </div>
          </div>
        </section>
        <section id="certifications" className="section section-band">
          <div className="page-width">
            <SectionHeading
              number="06"
              label="ALWAYS A STUDENT"
              title="Certifications & continuous learning"
              description="Building a stronger foundation, one learning milestone at a time."
            />
            <div className="certificates-grid">
              {certificates.map((cert, i) => (
                <article className="certificate-card" key={cert.title}>
                  <div className="certificate-top">
                    <span className={`issuer-mark issuer-${i}`}>{cert.mark}</span>
                    <Award size={23} />
                  </div>
                  <span className="tiny-label">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <Button
                    variant="link"
                    onClick={() => setModal({ type: "certificate", index: i })}
                  >
                    View Certificate <ArrowUpRight />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="blog" className="section page-width">
          <SectionHeading
            number="07"
            label="NOTES FROM MY LEARNING JOURNEY"
            title="Insights, ideas & learning"
            description="Exploring the questions, tools, and techniques behind better analysis."
          />
          <div className="blog-filters" aria-label="Article categories">
            {[
              "All",
              "Data Analytics",
              "SQL",
              "Python",
              "Excel",
              "Power BI",
              "Data Visualization",
              "Career & Learning",
            ].map((category) => (
              <Button
                key={category}
                variant={blogFilter === category ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setBlogFilter(category)}
                aria-pressed={blogFilter === category}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="blog-grid">
            {articles.map((a, i) =>
              blogFilter !== "All" && a.category !== blogFilter ? null : (
                <article className="blog-card" key={a.title}>
                  <div
                    className={`blog-art blog-art-${i}`}
                    aria-label={`${a.category} article illustration`}
                  >
                    <span className="blog-art-word">
                      {
                        [
                          "SELECT *",
                          "import pandas",
                          "Power BI",
                          "=XLOOKUP",
                          "Explore.",
                          "Data → Insight",
                        ][i]
                      }
                    </span>
                    <span className="blog-art-symbol">
                      {i === 0 ? (
                        <Database size={50} />
                      ) : i === 1 ? (
                        <Code2 size={50} />
                      ) : i === 3 ? (
                        <FileSpreadsheet size={50} />
                      ) : (
                        <ChartNoAxesCombined size={50} />
                      )}
                    </span>
                    <span className="blog-art-line" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span>{a.category}</span>
                      <span>{a.time} read · Draft</span>
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.intro}</p>
                    <Button variant="link" onClick={() => setModal({ type: "article", index: i })}>
                      Read Article <ArrowUpRight />
                    </Button>
                  </div>
                </article>
              ),
            )}
          </div>
          {blogFilter === "Career & Learning" && (
            <div className="empty-state">
              <BookOpen />
              <h3>A new chapter is on the way.</h3>
              <p>No career articles have been published yet.</p>
            </div>
          )}
          <p className="draft-note">
            Learning notes shown as draft articles; publication dates have not been supplied.
          </p>
        </section>
        <section id="resume" className="resume-section">
          <div className="page-width resume-inner">
            <div>
              <div className="eyebrow">
                <span>YOUR NEXT TEAM MEMBER?</span>
              </div>
              <h2>
                Let’s take the next step
                <br />
                <span>together.</span>
              </h2>
              <p>
                Explore my professional background, technical skills,
                <br />
                projects, and educational qualifications.
              </p>
            </div>
            <div className="resume-actions">
              <span className="resume-file-icon">
                <Download size={28} />
              </span>
              <Button size="lg" onClick={downloadResume}>
                <Download /> Download Resume
              </Button>
              <Button variant="link" onClick={openResume}>
                View Resume <ArrowUpRight />
              </Button>
              <small>PDF · Data Analyst Resume</small>
            </div>
          </div>
        </section>
        <section id="contact" className="section page-width">
          <SectionHeading
            number="08"
            label="GOOD CONVERSATIONS START HERE"
            title="Let’s connect"
          />
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>
                Have an opportunity
                <br />
                or an interesting idea<span>?</span>
              </h3>
              <p>
                I’m always interested in connecting with professionals, exploring opportunities,
                collaborating on interesting projects, and learning from the data and technology
                community.
              </p>
              <a className="contact-link" href={`mailto:${email}`}>
                <span className="icon-box">
                  <Mail size={20} />
                </span>
                <div>
                  <span>DROP ME A LINE</span>
                  <strong>{email}</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-link" href="tel:7674867781">
                <span className="icon-box">
                  <Phone size={20} />
                </span>
                <div>
                  <span>LET’S TALK</span>
                  <strong>7674867781</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <div className="contact-socials">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
              <span className="availability contact-availability">
                <i /> Open to entry-level Data Analyst roles
              </span>
            </div>
            <form className="contact-form" onSubmit={submitContact} noValidate>
              <div className="form-row">
                <label>
                  Full name
                  <input name="name" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                Subject
                <input name="subject" placeholder="What’s on your mind?" required />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your opportunity or idea…"
                  required
                />
              </label>
              <div className="form-bottom">
                <span>Looking forward to hearing from you.</span>
                <Button type="submit">
                  Prepare Message <ArrowUpRight />
                </Button>
              </div>
              {formFeedback && (
                <p className="form-feedback" role="status">
                  {formFeedback}
                </p>
              )}
              {emailDraft && (
                <Button asChild variant="outline">
                  <a href={emailDraft}>
                    <Mail /> Open email app to send
                  </a>
                </Button>
              )}
              <p className="form-disclaimer">
                Messages are sent through your email app. Direct form delivery is not configured.
              </p>
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <div className="footer-top">
          <a className="brand" href="#home">
            <span className="brand-mark">
              y<span>.</span>
            </span>
            <span>
              Bevara Yuva Rani
            </span>
          </a>
          <p>
            Turning data into insights.
            <br />
            Transforming insights into impact.
          </p>
          <a className="back-top" href="#home">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getUTCFullYear()} Bevara Yuva Rani</span>
          <div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={15} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
          <span>
            Made with curiosity <Sparkles size={12} />
          </span>
        </div>
      </footer>
      <Dialog
        open={modal !== null}
        onOpenChange={(open) => {
          if (!open) setModal(null);
        }}
      >
        <DialogContent className="portfolio-dialog">
          <DialogTitle>
            {project?.fullTitle ?? article?.title ?? certificate?.detail ?? "My resume"}
          </DialogTitle>
          <DialogDescription>
            {project
              ? "Project overview and development approach"
              : article
                ? `${article.category} · ${article.time} read · Draft learning note`
                : certificate
                  ? certificate.issuer
                  : "Professional background, skills, and education"}
          </DialogDescription>
          {project && (
            <div className="modal-body">
              <ProjectArtwork kind={project.kind} />
              <h3>Overview</h3>
              <p>{project.description}</p>
              <h3>Problem statement</h3>
              <p>{project.problem}</p>
              <h3>Objectives & highlights</h3>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <h3>Tools & technologies</h3>
              <div className="tags">
                {project.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3>Methodology & implementation</h3>
              <p>{project.methodology}</p>
              <h3>Findings</h3>
              <p>
                Detailed findings and measured results have not been supplied. No performance claims
                are made.
              </p>
              <div className="missing-asset">
                <Monitor />
                <p>Original project screenshots and the repository link are awaiting upload.</p>
              </div>
              <Button asChild variant="outline">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github /> Visit my GitHub profile <ExternalLink />
                </a>
              </Button>
            </div>
          )}
          {article && (
            <div className="modal-body article-body">
              <p className="article-intro">{article.intro}</p>
              {article.sections.map(([heading, text]) => (
                <div key={heading}>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              ))}
              <p className="draft-note">Draft learning article · publication date not provided</p>
            </div>
          )}
          {certificate && (
            <div className="modal-body">
              <div className="certificate-placeholder">
                <Award size={48} />
                <h3>{certificate.detail}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <p>
                The original certificate image, issue date, and verification link have not been
                provided yet.
              </p>
            </div>
          )}
          {modal?.type === "resume" && (
            <div className="modal-body">
              {resumeAvailable ? (
                <>
                  <iframe
                    src={resumeAsset.url}
                    title="Bevara Yuva Rani resume"
                    className="resume-preview"
                  />
                  <Button asChild>
                    <a href={resumeAsset.url} download="Bevara-Yuva-Rani-Resume.pdf">
                      <Download /> Download PDF
                    </a>
                  </Button>
                </>
              ) : (
                <div className="missing-asset">
                  <Download size={36} />
                  <h3>My resume is coming soon.</h3>
                  <p>
                    The original PDF has not been uploaded yet. In the meantime, explore my
                    experience and projects or get in touch.
                  </p>
                  <Button asChild>
                    <a href={`mailto:${email}`}>
                      Request my resume <Mail />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
