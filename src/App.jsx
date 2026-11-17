import { useEffect, useState } from 'react'
import './App.css'
import { contact, skills, teams, projects, experience, research, development, timeline } from './data'

const nav = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['teams', 'Teams'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['research', 'Research'],
  ['coursework', 'Coursework'],
]

const Icon = ({ d, fill = false }) => (
  <svg className="icon" viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)
const icons = {
  github: <Icon fill d={<path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />} />,
  linkedin: <Icon fill d={<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />} />,
  mail: <Icon d={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>} />,
  check: <Icon d={<path d="M20 6 9 17l-5-5" />} />,
  arrow: <Icon d={<path d="M7 17 17 7M7 7h10v10" />} />,
  up: <Icon d={<path d="m5 12 7-7 7 7M12 19V5" />} />,
  left: <Icon d={<path d="m15 18-6-6 6-6" />} />,
  right: <Icon d={<path d="m9 18 6-6-6-6" />} />,
  down: <Icon d={<path d="m6 9 6 6 6-6" />} />,
  pin: <Icon d={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>} />,
  file: <Icon d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>} />,
  moon: <Icon d={<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />} />,
  sun: <Icon d={<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>} />,
}

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="eyebrow">{index}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function EmailButton() {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="btn-ghost"
      aria-label="Copy email address"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(contact.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {
          window.location.href = `mailto:${contact.email}`
        }
      }}
    >
      {copied ? icons.check : icons.mail}
      {copied ? 'Copied!' : contact.email}
    </button>
  )
}

function MediaItem({ m }) {
  if (m.type === 'video') {
    return (
      <video className={`media ${m.vertical ? 'vertical' : ''}`} controls muted playsInline preload="metadata">
        <source src={`${m.src}#t=0.1`} type="video/mp4" />
      </video>
    )
  }
  return <img src={m.src} alt={m.alt} loading="lazy" className="media photo" />
}

function Carousel({ media }) {
  const [i, setI] = useState(0)
  if (media.length === 1) return <MediaItem m={media[0]} />
  const go = (d) => setI((i + d + media.length) % media.length)
  return (
    <div className="carousel">
      <MediaItem key={media[i].src} m={media[i]} />
      <div className="carousel-controls">
        <button onClick={() => go(-1)} aria-label="Previous photo" className="round-btn">{icons.left}</button>
        <span className="tag">{i + 1} / {media.length}</span>
        <button onClick={() => go(1)} aria-label="Next photo" className="round-btn">{icons.right}</button>
      </div>
    </div>
  )
}

function EntryCard({ entry, flip = false }) {
  const hasMedia = !!entry.media?.length
  const vertical = entry.media?.[0]?.vertical
  return (
    <article className="card-surface entry">
      <div className={`entry-grid ${hasMedia ? (vertical ? 'with-vertical' : 'with-media') : ''} ${flip && hasMedia ? 'flip' : ''}`}>
        <div className="entry-text">
          <h3>{entry.title}</h3>
          {entry.meta && <p className="meta">{entry.meta}</p>}
          {entry.tags && (
            <div className="tags">
              {entry.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
          <p className="body">{entry.body}</p>
          {entry.link && (
            <a href={entry.link.href} target="_blank" rel="noreferrer" className="btn-primary">
              {entry.link.label} {icons.arrow}
            </a>
          )}
        </div>
        {hasMedia && (
          <div className={`entry-media ${vertical ? 'narrow' : ''}`}>
            <Carousel media={entry.media} />
          </div>
        )}
      </div>
    </article>
  )
}

function Accordion({ title, org, body, images }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card-surface accordion">
      <button onClick={() => setOpen(!open)} className="accordion-head" aria-expanded={open}>
        <div>
          <span className="strong">{title}</span>
          <p className="meta">{org}</p>
        </div>
        <span className={`chevron ${open ? 'open' : ''}`}>{icons.down}</span>
      </button>
      {open && (
        <div className="accordion-body reveal">
          <p className="body">{body}</p>
          <Carousel media={images.map((src) => ({ type: 'image', src, alt: title }))} />
        </div>
      )}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">Yanilette<span className="accent">.</span></a>
          <nav className="nav">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle dark mode">
            {theme === 'light' ? icons.moon : icons.sun}
          </button>
        </div>
      </header>

      <section id="top" className="hero dot-grid">
        <div id="about" className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Computer Engineering · UC Irvine</p>
            <h1>Hi, I'm <span className="accent">Yanilette</span>.</h1>
            <p className="lead">
              I am a first-generation fourth-year undergraduate student who values mentorship, community, and continuous
              learning. I enjoy supporting my peers through tutoring, sharing resources, and helping students discover
              opportunities in engineering.
            </p>
            <p className="lead-sub">
              My academic interests focus on hardware and firmware design, avionics, robotics, and research. Please feel
              free to reach out and connect!
            </p>
            <div className="socials">
              <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost">{icons.github} GitHub</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">{icons.linkedin} LinkedIn</a>
              <EmailButton />
            </div>
            <p className="location">{icons.pin} Irvine, CA · Expected graduation March 2028</p>
          </div>
          <div className="portrait-frame reveal">
            <img src="/images/headshot.jpg" alt="Headshot of Yanilette Montano" />
          </div>
        </div>
      </section>

      <Section id="skills" index="01" title="Skills">
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="card-surface skill">
              <div className="skill-top">
                <span className="strong">{s.name}</span>
                <span className="meta">{s.level}%</span>
              </div>
              <div className="meter"><div className="meter-fill" style={{ width: `${s.level}%` }} /></div>
              <p className="muted small">{s.usedIn}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="teams" index="02" title="Technical Teams">
        <div className="stack">{teams.map((e) => <EntryCard key={e.title} entry={e} />)}</div>
      </Section>

      <Section id="projects" index="03" title="Projects">
        <div className="stack">{projects.map((e, i) => <EntryCard key={e.title} entry={e} flip={i % 2 === 1} />)}</div>
      </Section>

      <Section id="experience" index="04" title="Experience">
        <div className="stack">{experience.map((e) => <EntryCard key={e.title} entry={e} />)}</div>
      </Section>

      <Section id="research" index="05" title="Research">
        <div className="stack">{research.map((e, i) => <EntryCard key={e.title} entry={e} flip={i % 2 === 1} />)}</div>
      </Section>

      <Section id="publications" index="06" title="Publications">
        <div className="card-surface entry">
          <h3>CARE-PCM: Classification and Analysis of Reliability with Efficient Models for PCM</h3>
          <p className="meta">2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC) · January 2026</p>
          <p className="body">
            Logistic regression and decision tree models to predict Phase Change Memory cell health; the decision tree model
            achieved up to 98.4% accuracy.
          </p>
          <a href="/pdf/CARE_PCM_IEEE_IEMCON_2025_Presentation.pptx.pdf" target="_blank" rel="noreferrer" className="btn-primary">
            {icons.file} View slides (PDF)
          </a>
        </div>
      </Section>

      <Section id="development" index="07" title="Professional Development">
        <div className="stack tight">{development.map((d) => <Accordion key={d.title} {...d} />)}</div>
      </Section>

      <Section id="coursework" index="08" title="Coursework">
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.term}>
              <span className={`dot ${t.current ? 'current' : t.done ? 'done' : ''}`} />
              <div className="term-row">
                <h3>{t.term}</h3>
                {t.current && <span className="tag tag-accent">In progress</span>}
              </div>
              <ul className="courses">{t.courses.map((c) => <li key={c}>{c}</li>)}</ul>
            </li>
          ))}
        </ol>
      </Section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="meta">© {new Date().getFullYear()} Yanilette Montano</p>
          <a href="#top" className="btn-ghost">{icons.up} Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
