import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'

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

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

function Reveal({ as = 'div', children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} {...props}>
      {children}
    </Tag>
  )
}

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal as="h2"><span className="section-num">{num}</span>{title}</Reveal>
      {children}
    </section>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
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
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">Yanilette Montano</a>
          <nav>
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        <motion.section className="hero" variants={stagger} initial="hidden" animate="visible">
          <motion.img
            src="/images/headshot.jpg"
            alt="Yanilette Montano"
            className="headshot"
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div variants={stagger}>
            <motion.h1 variants={reveal}>Yanilette Montano</motion.h1>
            <motion.p variants={reveal} className="subtitle">Computer Engineering · UC Irvine · Expected March 2028</motion.p>
            <motion.p variants={reveal} className="lede">
              Computer engineering student focused on embedded systems and hardware. I've designed flight
              controller hardware and firmware for a micro air vehicle, built a RISC-V processor in Verilog,
              and worked in the cleanroom at HRL Laboratories.
            </motion.p>
            <motion.p variants={reveal} className="lede">
              More recently I got into quantum networking through research at the Center for Quantum Networks,
              and I'm still growing into the field. I'm looking for firmware, embedded, and hardware
              engineering internships.
            </motion.p>
            <motion.div variants={reveal} className="links">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary"><FaEnvelope /> {EMAIL}</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn"><FaGithub /> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn"><FaLinkedin /> LinkedIn</a>
            </motion.div>
          </motion.div>
        </motion.section>

        <Section id="projects" num="01" title="Projects">
          {projects.map((p) => (
            <Reveal as="article" key={p.title} className="card project">
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
            </Reveal>
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

        <Section id="experience" num="02" title="Experience">
          {experience.map((e) => (
            <Reveal key={e.role} className="entry">
              <div className="entry-head">
                <h3>{e.role}</h3>
                <span className="dates">{e.dates}</span>
              </div>
              <p className="meta">{e.org}</p>
              <ul className="points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </Section>

        <Section id="skills" num="03" title="Skills">
          <dl className="skills">
            {skillGroups.map((g) => (
              <Reveal key={g.label} className="skill-row">
                <dt>{g.label}</dt>
                <dd><Tags items={g.items} /></dd>
              </Reveal>
            ))}
          </dl>
        </Section>

        <Section id="research" num="04" title="Research & Publications">
          {research.map((r) => (
            <Reveal key={r.title} className="entry">
              <div className="entry-head">
                <h3>{r.title}</h3>
                <span className="dates">{r.dates}</span>
              </div>
              <p className="meta">{r.org}</p>
              <p>{r.text}</p>
            </Reveal>
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

        <Section id="coursework" num="05" title="Relevant Coursework">
          <motion.div className="coursework" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            {coursework.map((c) => (
              <motion.div key={c.label} variants={reveal}>
                <h3 className="course-label">{c.label}</h3>
                <ul>
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <p className="meta programs">
            Programs: CNSI & UCLA Samueli Semiconductor Program · IBM Global Qiskit Summer School ·
            QNumerics Summer School · CQN Student & Postdoc Retreat
          </p>
        </Section>

        <Section id="contact" num="06" title="Contact">
          <p>
            I'm looking for firmware, embedded systems, and hardware engineering internships.
            The best way to reach me is <a href={`mailto:${EMAIL}`} className="text-link">{EMAIL}</a>.
          </p>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Yanilette Montano · Built with React and a lot of coffee ☕</footer>
    </MotionConfig>
  )
}

export default App
