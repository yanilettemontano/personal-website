import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect, use } from 'react'

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

const fadeUp ={
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0},
}

function App() {
  const typedTitle = useTypewriter('Personal Portfolio', 70)

  return (
    <div>
      {/* Hero*/}
      <section>
        <h1>{typedTitle}<span className="cursor">|</span></h1>
      </section>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <div className="window-frame">
          <div className="window-titlebar">YANILETTE MONTANO</div>
          <div className="window-body">
            <img src="/src/assets/pixel-headshot.png" alt="Pixel art portrait of Yanilette Montano" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section section-about">
        <motion.div
          className="section-inner"
          inital="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          >
        <h2>About</h2>
        <p>
          I'm an ambitious Computer Engineering undergraduate with research experience in quantum networking
          and semiconductor memory systems, as well as project work spanning classical systems, networking,
          and machine learning. I'm interested in a future career in quantum networks, building on the systems instincts I 
          started with in classical computing. 

          I chose to pursue Computer Engineering at UC Irvine, drawn to the low-level logic of how systems talk to each
          other such as C, C++, and the invisible choreography that keeps data moving reliably across an unreliable world. 
          That instinct showed up in coursework and projects alike: I built the full board-evaulation module in C for a custom chess 
          engine that won every tournament game, and designed the deck-managament system for a client-server poker game, chasing down
          bugs like a hidden shuffle bias along the way.

          This past summer, I became a research intern through an NSF REU at Krastanov Lab, working on QuantumSavory.jl, and open-source
          simulator for quantum network protocols. Starting from zero quantum knowledge, I learned qubits, entanglement, and Bell pairs from
          the ground up, alongside a new programming language Julia. My core contribtion was designing adaptive congestion control for Quantum TCP
          by replacing a fixed transmission window with real-time, fidelity-driven tuning. 

          People who know me well will tell you I don't let a hard bug stay unsolved. I have high expectations for where this goes next
          and I'm particularly drawn to quantum networking and quantum information science, where systems-level thinking meets genuinely new physics.

          Please reach out if you're curious about my work, if you have a research or internship opportunity I should know about, or if you just want 
          to talk quantum networks.
        </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="section section-projects">
        <div className="section-inner">
          <h2>Projects</h2>
        <div>
          <h3>QTCP - Quantum TCP Congestion Control</h3>
          <p><em>QuantumSavory.jl, Julia, Git, GitHub, TCP networking</em></p>
          <p>
            Designed and implemented per-flow AIMD congestion control and PI-based Active 
            Queue Management with ECN signaling for quantum networks, replacing a fixed global window with adaptive, fidelity-driven tuning.
            Fixed multiple race conditions in multi-hop entanglement swapping. 
          </p>
          <figure className="project-figure">
          <img src="/src/assets/Montano_UMass.png" alt="Research Poster for the CQN REU internship"
          className="project-image"/>
          <figcaption>NSF REU poster through the Center of Quantum Networks. Presented Summer of 2026.</figcaption>
          </figure>
        </div>

        <div>
          <h3>Anteater Chess -- Custom Board Evaluator</h3>
          <p><em>C, Linux, Git</em></p>
          <p>
            Built the full board evalation module for a 10 by 8 chess variant, focusing on the following features such as, Material scoring,
            Tapered Piece-Square Tables, Mobility, King Safety, and Pawn Structure. The evaluation function was used
            for a team AI that won every tournament game. Out of 32 teams, our team placed 4th in the final tournament.
          </p>
          <figure className="project-figure">
            <img src="/src/assets/AnteaterChess.png" alt="Anteater Chess Gameplay"
            className="project-image"/>
            <figcaption>Gameplay snippet of the custom chess game.</figcaption>
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
            <figcaption>Poker game demo - client-server texas hold'em gameplay</figcaption>
          </figure>
          </div>
        </div>
      </section>

      {/*Skills*/}
      <section id="skills" className="section section-skills">
        <div className="section-inner">
          <h2>Skills</h2>
          <p>C/C++· Julia · Python · Networking (TCP/IP, sockets) · Git · Linux · Quantum Information Fundamentals</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-contact">
        <footer>
        <a href="https://github.com/yanilettemontano" target="_blank" rel="noreferrer" className="contact-btn">
          <FaGithub /> GitHub
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/yanilette-montano-bb9644292/" target="_blank" rel="noreferrer" className="contact-btn">
          <FaLinkedin /> LinkedIn
        </a>
        {' · '}
        <a href="mailto:yamontan@uci.edu" className="contact-btn">
          <FaEnvelope /> Email
        </a>
        </footer>
      </section>
      </div>
  );
}

export default App
