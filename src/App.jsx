import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const EMAIL = 'yamontan@uci.edu'
const GITHUB = 'https://github.com/yanilettemontano'
const LINKEDIN = 'https://www.linkedin.com/in/yanilette-montano-bb9644292/'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#contact', label: 'Contact' },
]

const skillGroups = [
  { label: 'Languages', items: ['C', 'C++', 'Verilog', 'Python', 'Julia'] },
  { label: 'Hardware & EDA', items: ['Altium Designer', 'Xilinx Vivado', 'RTL simulation & testbenches', 'Waveform debugging'] },
  { label: 'Embedded', items: ['Flight controller firmware (Betaflight)', 'Microcontroller platforms', 'TCP sockets'] },
  { label: 'Fabrication', items: ['Photolithography', 'Cleanroom cluster & stepper tools'] },
  { label: 'Tools', items: ['Linux', 'Git'] },
]

const projects = [
  {
    title: 'Flapping Wing Micro Air Vehicle — Flight Controller',
    context: 'UCI Samueli · Flight Controller Subteam',
    award: "Dean's Choice Award, 2026 Annual Design Review",
    tags: ['Altium Designer', 'Betaflight', 'Microcontrollers', 'PCB design'],
    points: [
      'Researched and analyzed various custom-built flight controllers.',
      'Designed flight controller hardware in Altium and adapted firmware for the platform.',
      'Tested and tuned the system for controlled flight, coordinating with other subteams on system compatibility.',
    ],
    image: { src: '/images/Annual-Design-Review.JPG', alt: 'Team at the UCI Annual Design Review' },
    link: { href: 'https://escholarship.org/uc/item/1kx3x883', label: 'Report on eScholarship' },
  },
  {
    title: '32-bit RISC-V Processor',
    context: 'Digital design project',
    tags: ['Verilog', 'Xilinx Vivado', 'RTL design'],
    points: [
      'Designed the datapath and control logic for a 32-bit RISC-V core supporting R-type and I-type instructions.',
      'Built the flip-flops, multiplexers, ALU, register file, control unit, and instruction decoder.',
      'Verified with Vivado testbenches, debugging instruction flow through waveform analysis.',
    ],
    image: { src: '/images/processor.png', alt: 'Processor testbench waveform in Vivado' },
  },
  {
    title: 'Anteater Chess — Board Evaluator',
    context: 'Team project · 32-team AI tournament',
    tags: ['C', 'Linux', 'Git'],
    points: [
      'Wrote the full evaluation module for a 10×8 chess variant: material, tapered piece-square tables, mobility, king safety, and pawn structure.',
      'The team AI won every tournament game it played and placed 4th of 32 teams.',
    ],
    image: { src: '/images/AnteaterChess.png', alt: 'Anteater Chess gameplay' },
  },
  {
    title: 'Client-Server Poker Game',
    context: 'Networked C application',
    tags: ['C/C++', 'TCP sockets', 'GTK'],
    points: [
      'Designed the deck management system and fixed a bias in the Fisher-Yates shuffle.',
      'Implemented multi-street Seven Card Stud dealing; debugged JSON serialization and GUI rendering.',
    ],
    video: '/videos/poker-demo.mp4',
  },
]

const otherProjects = [
  {
    title: 'Underwater Robotics — Computer Vision & Perception',
    context: 'UCI team sponsored by the U.S. Navy',
    text: 'Contributing to object detection, image processing, and sensor-based navigation pipelines, plus system integration and testing.',
  },
  {
    title: 'Matcha Study Timer',
    context: 'Electron, JavaScript',
    text: 'Pomodoro-style desktop app with selectable durations and original pixel-art assets.',
  },
]

const experience = [
  {
    role: 'Photolithography Process Engineering Intern',
    org: 'HRL Laboratories',
    dates: 'Jul 2025 – Aug 2025',
    points: [
      'Helped develop photolithography processes for eventual use on product wafers.',
      'Trained on cleanroom cluster and stepper systems; worked with process engineers to develop standardized processes.',
    ],
  },
  {
    role: 'Student Tutor & Assistant',
    org: 'UCI Engineering Office of Outreach, Access, and Inclusion',
    dates: 'Dec 2025 – Present',
    points: [
      'Tutor undergraduates in math, physics, and upper-division computer engineering courses.',
    ],
  },
  {
    role: 'Math & Computer Science Tutor',
    org: 'Los Angeles Pierce College',
    dates: 'Sep 2024 – Jun 2025',
    points: [
      'Tutored Calculus I–III, linear algebra, and differential equations, plus C++, data structures, OOP, and computer architecture.',
    ],
  },
]

const research = [
  {
    title: 'Adaptive Flow Control for Quantum TCP',
    org: 'NSF REU, Krastanov Lab, Center for Quantum Networks',
    dates: 'Summer 2026',
    text: 'Implemented per-flow AIMD congestion control and PI-based active queue management with ECN signaling in QuantumSavory.jl. Raised mean fidelity to 0.93–0.95 (vs. 0.89–0.92 fixed-window baseline) across four topologies and fixed three race conditions in multi-hop entanglement swapping. Preparing for IEEE submission.',
  },
  {
    title: 'Machine Learning for Phase Change Memory Cell Health',
    org: 'SFS2 REU, CSUN Department of Computer Science',
    dates: 'Summer 2025',
    text: 'Built logistic regression and decision tree models to predict PCM cell reliability; the decision tree reached 98.4% accuracy.',
  },
  {
    title: 'Transfer Systems on Partially Ordered Sets',
    org: 'NSF-funded REU, LAPC & UCLA',
    dates: 'Fall 2024',
    text: 'Co-authored a paper with UCLA graduate students; presented at the University of Texas at Arlington, May 2025.',
  },
]

const coursework = [
  {
    label: 'Completed',
    items: [
      'Intro to Digital Systems',
      'Digital Logic Lab',
      'Electronics I & II with Labs',
      'Network Analysis II & Lab',
      'Discrete-Time Signals & Systems',
      'Software Engineering Project in C',
      'Engineering Data Structures & Algorithms',
      'Engineering Probability',
    ],
  },
  {
    label: 'In progress (Fall 2026)',
    items: ['Organization of Digital Computers', 'Computer Networks', 'Drones', 'Electrical Engineering Analysis'],
  },
  {
    label: 'Planned',
    items: [
      'Processor Hardware/Software Interfaces',
      'System Software',
      'VLSI',
      'Digital Signal Processing Design & Lab',
      'Continuous-Time Signals & Systems',
      'Communication Systems',
      'Senior Design Project',
    ],
  },
]

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

function App() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">Yanilette Montano</a>
          <nav>
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <img src="/images/headshot.jpg" alt="Yanilette Montano" className="headshot" />
          <div>
            <h1>Yanilette Montano</h1>
            <p className="subtitle">Computer Engineering · UC Irvine · Expected March 2028</p>
            <p className="lede">
              Computer engineering student focused on embedded systems and hardware. I've designed flight
              controller hardware and firmware for a micro air vehicle, built a RISC-V processor in Verilog,
              and worked in the cleanroom at HRL Laboratories. Seeking firmware, embedded, and hardware
              engineering internships.
            </p>
            <div className="links">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary"><FaEnvelope /> {EMAIL}</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn"><FaGithub /> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </section>

        <Section id="projects" title="Projects">
          {projects.map((p) => (
            <article key={p.title} className="card project">
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="meta">{p.context}</p>
                {p.award && <p className="award">{p.award}</p>}
                <ul className="points">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <Tags items={p.tags} />
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noreferrer" className="text-link">{p.link.label} →</a>
                )}
              </div>
              {p.image && <img src={p.image.src} alt={p.image.alt} className="project-media" loading="lazy" />}
              {p.video && (
                <video className="project-media" controls muted playsInline preload="metadata">
                  <source src={p.video} type="video/mp4" />
                </video>
              )}
            </article>
          ))}

          <h3 className="subhead">Other projects</h3>
          <ul className="compact-list">
            {otherProjects.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong> <span className="meta">· {p.context}</span>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <div key={e.role} className="entry">
              <div className="entry-head">
                <h3>{e.role}</h3>
                <span className="dates">{e.dates}</span>
              </div>
              <p className="meta">{e.org}</p>
              <ul className="points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-row">
                <dt>{g.label}</dt>
                <dd><Tags items={g.items} /></dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="research" title="Research & Publications">
          {research.map((r) => (
            <div key={r.title} className="entry">
              <div className="entry-head">
                <h3>{r.title}</h3>
                <span className="dates">{r.dates}</span>
              </div>
              <p className="meta">{r.org}</p>
              <p>{r.text}</p>
            </div>
          ))}
          <div className="entry publication">
            <h3>Publication</h3>
            <p>
              <strong>CARE-PCM: Classification and Analysis of Reliability with Efficient Models for PCM.</strong>{' '}
              2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC), January 2026.
            </p>
            <a href="/pdf/CARE_PCM_IEEE_IEMCON_2025_Presentation.pptx.pdf" target="_blank" rel="noreferrer" className="text-link">Slides (PDF) →</a>
          </div>
        </Section>

        <Section id="coursework" title="Relevant Coursework">
          <div className="coursework">
            {coursework.map((c) => (
              <div key={c.label}>
                <h3 className="course-label">{c.label}</h3>
                <ul>
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="meta programs">
            Programs: CNSI & UCLA Samueli Semiconductor Program · IBM Global Qiskit Summer School ·
            QNumerics Summer School · CQN Student & Postdoc Retreat
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            I'm looking for firmware, embedded systems, and hardware engineering internships.
            The best way to reach me is <a href={`mailto:${EMAIL}`} className="text-link">{EMAIL}</a>.
          </p>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Yanilette Montano</footer>
    </>
  )
}

export default App
