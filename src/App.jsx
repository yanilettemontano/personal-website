
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <div>
      {/* Hero*/}
      <section>
        <h1>Yanilette Montano</h1>
        <p>Computer Engineering at University of California, Irvine </p>
      </section>

      {/* About */}
      <section>
        <h2>About</h2>
        <p>
          I am a Computer Engineering undergraduate student at the University of California, Irvine, expecting to 
          graduate in March 2028. 
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <div>
          <h3>QTCP - Quantum TCP Congestion Control</h3>
          <p><em>QuantumSavory.jl, Julia, Git, GitHub, TCP networking</em></p>
          <p>
            Designed and implemented per-flow AIMD congestion control and PI-based Active 
            Queue Management with ECN signaling for quantum networks, replacing a fixed global window with adaptive, fidelity-driven tuning.
            Fixed multiple race conditions in multi-hop entanglement swapping. 
          </p>
        </div>

        <div>
          <h3>Anteater Chess -- Custom Board Evaluator</h3>
          <p><em>C, Linux, Git</em></p>
          <p>
            Built the full board evalation module for a 10 by 8 chess variant:
            <ul>
              <li>
                <p>Material scoring</p>
              </li>
              <li>
                <p>Tapered Piece-Square Tables</p>
              </li>
              <li>
                <p>Mobility</p>
              </li>
              <li>
                <p>King Safety</p>
              </li>
              <li>
                <p>Pawn Structure</p>
              </li>
            </ul>
            for a team AI that won every tournament game. Out of 32 teams, our team placed 4th in the final tournament.
          </p>
        </div>

        <div>
          <h3>Client-Server Poker Game</h3>
          <p><em>C/C++, GTK, TCP sockets</em></p>
          <p>Designed the deck management system for a client-server poker game, fixed a Fisher-Yates
            shuffle bias, implemented multi-street Seven Card Stud dealing, and debugged JSON serialization and GUI rendering.
          </p>
        </div>
      </section>

      {/*Skills*/}
      <section>
          <h2>Skills</h2>
          <p>C/C++· Julia · Python · Networking (TCP/IP, sockets) · Git · Linux · Quantum Information Fundamentals</p>
      </section>

      {/* Contact */}
      <footer>
      <p>Let's Connect!</p>
      <a href="https://github.com/yanilettemontano" target="_blank" rel="noreferrer">Github</a>
      {' · '}
      <a href="https://www.linkedin.com/in/yanilette-montano-bb9644292/" target="_blank" rel="noreferrer">LinkedIn</a>
      {' · '}
      <a href="mailto:yamontan@uci.edu">Email</a>
      </footer>
      </div>
  );
}

export default App
