import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from 'react-icons/fa'
import { useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { GiCoffeeBeans } from 'react-icons/gi'
import 'swiper/css'
import 'swiper/css/navigation'

function useTypewriter(text, speed = 60){
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let cancelled = false
    let i = 0
    let timeoutId
    
    const tick = () => {
      if (cancelled) return
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
        timeoutId = setTimeout(tick, speed)
      }
    }

    setDisplayed('')
    timeoutId = setTimeout(tick, speed)


    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [text, speed])
  return displayed
}

function SkillMeter({ skill }){
  const [open, setOpen] = useState(false)
  const maxLevel = 5

  return (
    <div className="skill-item">
      <button className="skill-header" onClick={() => setOpen(!open)}>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-beans">
          {Array.from({ length: maxLevel }).map((_, i) => (
          <GiCoffeeBeans
            key={i}
            className={i < skill.level ? 'bean filled' : 'bean'}
            />
          ))}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
          initial={{ height: 0, opacity: 0}}
          animate={{ height: 'auto', opacity: 1}}
          exit ={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="skill-detail"
          >
            <p className="skill-intensity">{skill.intensity}</p>
            <ul>
              {skill.usedIn.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const fadeUp ={
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0},
}

const professionalDevelopment = [
    {
    title: 'Global Qiskit Summer School',
    organization: 'IBM Quantum',
    description: 'A two-week intensive program covering quantum computing fundamentals, Qiskit programming, and hands-on labs with IBM quantum hardware.',
    images: ['/src/assets/images/qiskit-summer-school.png'],
    },
    {
      title: 'QNumerics Summer School',
      organization: 'QNumerics',
      description: 'Focused training on numerical methods and simulation techniques for quantum systems.',
      images: ['/src/assets/images/qnumerics-summer-school.png'],
    },
    {
      title: 'CQN Student & Postdoc Retreat',
      organization: 'Center for Quantum Networks',
      description: 'A retreat for students and postdocs to present research, attend workshops, and network with peers in the field of quantum networking.',
      images: ['/src/assets/images/cqn-retreat.jpg'],
    },
    {
      title: 'CNSI and UCLA Samueli’s Semiconductor Program',
      organization: 'CNSI and UCLA Samueli',
      description: 'A program focused on semiconductor research, including workshops and lab sessions on fabrication and characterization techniques.',
      images: ['/src/assets/images/csni-group.png', '/src/assets/images/projector.png'],
    },
  ]

  const skills =[
    {
      name: 'C/C++',
      level: 5, //out of 5
      intensity: 'Triple espresso',
      usedIn: ['Anteater Chess, Client-Server Poker Game, Flapping Wing MAV Firmware'],
    },
    {
      name: 'Python',
      level: 4,
      intensity: 'Espresso',
      usedIn: ['Machine Learning for Phase Change Memory, QuantumSavory.jl, Computer Vision and Perception for Underwater Robotics'],
    },
    {
      name: 'Julia',
      level: 3,
      intensity: 'Cortado',
      usedIn: ['QuantumSavory.jl, Quantum Information Research'],
    },
  ]

function App() {
  const typedTitle = useTypewriter('Personal Portfolio', 70)
  const [tocOpen, setTocOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const[openIndex, setOpenIndex] = useState(null)
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

      <button className="toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-label="Toggle Table of Contents">
        <FaBars />
      </button>

      <nav className={`sidebar-toc ${tocOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setTocOpen(false)}>About</a>
          <a href="#skills" onClick={() => setTocOpen(false)}>Skills</a>
          <a href="#technical-teams" onClick={() => setTocOpen(false)}>Technical Teams</a>
          <a href="#projects" onClick={() => setTocOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setTocOpen(false)}>Experience</a>
          <a href="#research" onClick={() => setTocOpen(false)}>Research</a>
          <a href="#publications" onClick={() => setTocOpen(false)}>Publications</a>
          <a href="#professional-development" onClick={() => setTocOpen(false)}>Professional Development</a>
      </nav>

      {/* Hero*/}
      <section id="header" className="section section-header">
        <h1>{typedTitle}<span className="cursor">|</span></h1>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/* About */}
      <section id="about" className="section section-about">
        <div className ="section-inner about-layout">
          <div className ="about-photo">
            <img src="/src/assets/images/headshot.jpg" alt="Headshot of Yanilette Montano" />
            <div className="about-contact-buttons">
              <a href="https://github.com/yanilettemontano" target="_blank" rel="noreferrer" className="icon-btn" aria-label="Github">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yanilette-montano-bb9644292/" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:yamontan@uci.edu" className="icon-btn" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="about-text">
            <h2>About</h2>
            <p>
              I'm a first-generation latina computer engineering undergraduate with research experience in quantum networking
              and semiconductor memory systems, as well as project work spanning classical systems, networking,
              and machine learning. I'm interested in a future career in quantum networks, building on the systems instincts I 
              started with in classical computing. 
              <br />
              Please reach out if you're curious about my work, if you have a research or internship opportunity I should know about, or if you just want 
              to talk quantum networks.
          </p>
          </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/*Skills*/}
      <section id="skills" className="section section-skills">
        <div className="section-inner">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <SkillMeter key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/* Technical Teams */}
      <section id ="technical-teams" className="section section-teams">
        <div className="section-inner">
          <h2>Technical Teams</h2>
          <div className="team-entry">
            <h3>Flapping Wing Micro Air Vehicle - Flight Controller Subteam</h3>
            <p className="experience-meta">Dean's Choice Award - 2026 Annual Design Review, UCI Samueli School of Engineering</p>
            <p>
              Research and analyzed various custom built flight controllers. Collaborated with other sub-teams to ensure system compatibility 
              and optimized flight performance. Designed hardware, adapted firmware, test and tune for controlled flights using 
              Altium, BetaFlight, and microcontroller platforms.
            </p>

            <Swiper 
            modules={[Navigation]}
            navigation
            spaceBetween={20} 
            slidesPerView={1} 
            className="project-carousel">
            <SwiperSlide>
              <img src="/src/assets/images/Fall_2025_Meeting.jpg" alt="Fall 2025 End of Quarter Meeting Group Photo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/Annual-Design-Review.jpg" alt="Annual Design Review" />
            </SwiperSlide>
            
            </Swiper>

            <a href="https://escholarship.org/uc/item/1kx3x883"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
            >
              View on eScholarship
            </a>

          </div>
          <br />
          <div className="team-entry">
            <h3>Underwater Robotics Project at UCI - Computer Vision and Perception Subteam</h3>
            <p className="experience-meta">Sponsored by the U.S. Navy</p>
            <p>
              Explore and develop computer vision pipelines for autonomous perception tasks. Learning and contributing to object detection, 
              image processing, and sensor-based navigation in underwater environments, while collaborating with the team on system integration 
              and testing.
            </p>
          </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/* Projects */}
      <section id="projects" className="section section-projects">
        <div className="section-inner">
          <h2>Projects</h2>

          <div>
          <h3>Anteater Chess - Custom Board Evaluator</h3>
          <p><em>C, Linux, Git</em></p>
          <p>
            Built the full board evalation module for a 10 by 8 chess variant, focusing on the following features such as, Material scoring,
            Tapered Piece-Square Tables, Mobility, King Safety, and Pawn Structure. The evaluation function was used
            for a team AI that won every tournament game. Out of 32 teams, our team placed 4th in the final tournament.
          </p>
          <figure className="project-figure">
            <img src="/src/assets/images/AnteaterChess.png" alt="Anteater Chess Gameplay"
            className="project-image"/>
          </figure>
          </div>

          <div>
          <h3>Client-Server Poker Game</h3>
          <p><em>C/C++, GTK, TCP sockets</em></p>
          <p>Designed the deck management system for a client-server poker game, fixed a Fisher-Yates
            shuffle bias, implemented multi-street Seven Card Stud dealing, and debugged JSON serialization and GUI rendering.
          </p>
          <figure className="project-figure">
            <video className="video-wrapper"
            controls
            muted
            playsInline
            >
              <source src="/videos/poker-demo.mp4" type="video/mp4"/>
              Your browser doesn't support embedded vidoes.
            </video>
          </figure>
          </div>
        
        <br />
        <div>
          <h3>Matcha Study Timer App</h3>
          <p><em>Electron, JavaScript, Figma, Pixsquare</em></p>
          <p>
            Developed a Pomodoro-style study timer desktop application, 
            implementing core timing functionality and user interaction features to 
            support focused study sessions. Designed and integrated a customizable 
            interface to select 4 study durations, a timer letting the user know there 
            study time is up and a reset button to restart the process. I also created 
            original pixel-art icons and visual assets using PixSquare to enhance the
            user experience and overall design of the application. Structured the application 
            with multiple pages including a start screen, timer selection, timer interface and 
            a reset page, This project demonstrated my skills in front-end development, user 
            interface design and state management.
          </p>
          <figure className="project-figure">
            <video className="video-wrapper"
            controls
            muted
            playsInline
            >
              <source src="/videos/study-timer.mp4" type="video/mp4"/>
              Your browser doesn't support embedded vidoes.
            </video>
          </figure>
        </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/* Work Experience */}
      <section id="experience" className="section section-experience">
        <div className="section-inner">
          <h2>Experience</h2>

          <div className="experience-entry">
            <div className="experience-text">
              <h3>Student Tutor and Assistant</h3>
              <p className="experience-meta">UCI Engineering Office of Outreach, Access, and Inclusion · Dec 2025 – Present</p>
              <p>
                Tutor undergraduates in math, physics, and higher-division computer engineering
                courses, helping students build confidence with challenging technical material. Previously supported daily operations in the OAI Study Center, welcome student visitors, assist with 
                sign-ins, and maintain a clean and stocked space. Help prepare promotional materials, organize inventory, and support OAI programming, including 
                wellness events, academic workshops, guest speakers, and recruitment activities.
              </p>
            </div>
            <img src="/src/assets/images/OAI.jpg" alt="OAI Staff selfie" className="experience-image"/>
          </div>
        

        <div className="experience-entry">
            <div className="experience-text">
              <h3>Photolithography Process Engineering Intern</h3>
              <p className="experience-meta">HRL Laboratories · July 2025 – August 2025</p>
              <p>
                I assisted in developing photolithography processes to eventually implement on product wafers. I was trained to use relevant tools such as the cluster and stepper systems. I worked with 
                process engineers to develop standardized photolithography processes.
              </p>
            </div>
            <img src="/src/assets/images/HRL.png" alt="HRL cleanroom group picture" className="experience-image"/>
          </div>

          <div className="experience-entry">
          <div className="experience-text">
            <h3>Math and Computer Science Tutor</h3>
            <p className="experience-meta">Los Angeles Pierce College · September 2024 – June 2025</p>
            <p>
              I help students grasp complex topics across a wide range of courses including Algebra, Precalculus, Trigonometry, Calculus I–III, Linear Algebra, Ordinary Differential Equations. 
              For programming courses, I provide guidance on problem-solving strategies, coding best practices, and debugging techniques in Intro to C++, data structures and algorithms, object-oriented programming in C++, 
              computer architecture. I’ve also participated in tutoring trainings, workshops, and conferences to continually strengthen my approach as an educator and mentor.
            </p>
          </div>
          <img src="src/assets/images/lapc-tutoring.jpeg" alt="LAPC Tutoring logo" className="experience-image"/>
        </div>

        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      {/* Research Section */}
      <section id="research" className="section section-research">
        <div className="section-inner">
          <h2>Research</h2>

          <div className="research-entry">
            <h3>Adaptive Flow Control for Quantum TCP</h3>
            <p className="experience-meta">NSF REU, Krastanov Lab - Center for Quantum Networks · Summer 2026</p>
            <p>
              Designed and implemented per-flow AIMD congestion control and PI-based Active Queue
              Management with ECN signaling for QuantumSavory.jl, an open-source quantum network
              simulator - replacing a fixed transmission window with real-time, fidelity-driven
              tuning. Across four network topologies, achieved mean fidelity of 0.93-0.95 versus 0.98-0.92
              for the fixed-window baseline, consistently holding minimum fidelity above 
              the entanglement threshold. Also found and fixed three race conditions in multi-hop entanglement
              swapping. Findings are being prepared for IEEE conference submission.
            </p>

            <Swiper 
            modules={[Navigation]}
            navigation
            spaceBetween={20} 
            slidesPerView={1} 
            className="project-carousel">
            <SwiperSlide>
              <img src="/src/assets/images/Montano_UMass.png" alt="NSF research poster" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/CQN-Poster-Session.png" alt="CQN Poster Session" />
            </SwiperSlide>
            
            </Swiper>
            
          </div>

          <div className="research-entry">
            <h3>Machine Learning Applications in Phase Change Memory Cell Health</h3>
            <p className="experience-meta">SFS2 REU, CSUN Department of Computer Science · Summer 2025</p>
            <p>
              Investigated the use of machine learning techniques to predict the health and reliability of Phase Change Memory (PCM) cells. 
              Developed and evaluated models using logistic regression and decision trees, achieving up to 98.4% accuracy with the decision tree model.
            </p>

            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20} 
            slidesPerView={1} 
            className="project-carousel"
            >
              <SwiperSlide>
                <img src="/src/assets/images/PCM-ML-Poster.png" alt="PCM Machine Learning Poster" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/src/assets/images/sfs2-symposium.jpeg" alt="PCM Machine Learning Poster 2" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="research-entry">
            <h3>Discrete Mathematics Research</h3>
            <p className="experience-meta"> NSF-Funded REU, LAPC & UCLA · Fall 2024</p>
            <p>
              I collaborated with UCLA graduate students to analyze transfer systems with partially ordered sets. Co-authored 
              research paper and aimed to make our findings publishable. We presented our findings at the University of Texas-Arlington 
              in May 9-10, 2025 to faculty and peers.
            </p>
          </div>
          
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      <section id="publications" className="section section-publications">
        <div className="section-inner">
          <h2>Publications</h2>
          <p>
            <strong>CARE-PCM: Classification and Analysis of Reliability with Efficient Models for PCM</strong><br />
            2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC), January 2026<br />
            Logisitic Regression and decision tree models to predict Phase Change Memory cell health;
            decision tree model achieved up to 98.4% accuracy.
          </p>
          <a href="/src/assets/pdf/CARE_PCM_IEEE_IEMCON_2025_Presentation.pptx.pdf" target="_blank" rel="noreferrer" className="contact-btn">View slides (PDF)</a>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-accent-mid)"
            opacity="0.3"
          />
          </svg>
      </div>

      <section id="professional-development" className="section section-pd">
        <div className="section-inner">
          <h2>Professional Development</h2>

          <div className="pd-list">
            {professionalDevelopment.map((item, index) => (
              <div key={item.title} className="pd-item">
                <button className="pd-button" onClick={() => toggleCard(index)}>
                  <span>{item.title}</span>
                  <span className={`pd-chevron ${openIndex === index ? 'open' : ''}`}>▾</span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="pd-panel"
                  >
                    <p className="experience-meta">{item.org}</p>
                    <p>{item.description}</p>

                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={16}
                      slidesPerView={1}
                      className="pd-carousel"
                    >
                      {item.images.map((src) => (
                        <SwiperSlide key={src}>
                          <img src={src} alt={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
  );
}

export default App
