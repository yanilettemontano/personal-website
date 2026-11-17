export const contact = {
  email: "yamontan@uci.edu",
  github: "https://github.com/yanilettemontano",
  linkedin: "https://www.linkedin.com/in/yanilette-montano-bb9644292/",
};

export const skills = [
  { name: "C/C++", level: 95, usedIn: "Anteater Chess, Client-Server Poker Game, Flapping Wing MAV Firmware" },
  { name: "Git", level: 90, usedIn: "Version control for all projects" },
  { name: "Linux", level: 85, usedIn: "Anteater Chess, Client-Server Poker Game, QuantumSavory.jl" },
  { name: "Julia", level: 80, usedIn: "QuantumSavory.jl, Quantum Information Research" },
  { name: "Verilog", level: 70, usedIn: "Digital Logic Design, Flapping Wing MAV Flight Controller" },
  { name: "Xilinx Vivado", level: 70, usedIn: "Digital Logic Design, FPGA Development" },
  { name: "Python", level: 60, usedIn: "ML for Phase Change Memory, Computer Vision for Underwater Robotics" },
  { name: "Altium Designer", level: 60, usedIn: "Flapping Wing MAV Flight Controller Design" },
  { name: "Machine Learning", level: 50, usedIn: "PCM Cell Health Prediction, Underwater Computer Vision" },
];

export const teams = [
  {
    title: "Flapping Wing Micro Air Vehicle — Flight Controller Subteam",
    meta: "Dean's Choice Award · 2026 Annual Design Review, UCI Samueli School of Engineering",
    tags: ["Altium", "BetaFlight", "Firmware"],
    body: "Researched and analyzed custom-built flight controllers. Collaborated with other sub-teams to ensure system compatibility and optimized flight performance. Designed hardware, adapted firmware, and tested and tuned for controlled flights using Altium, BetaFlight, and microcontroller platforms.",
    media: [
      { type: "image", src: "/images/Fall_2025_Meeting.jpg", alt: "Fall 2025 end of quarter team photo" },
      { type: "image", src: "/images/Annual-Design-Review.JPG", alt: "Annual Design Review" },
    ],
    link: { href: "https://escholarship.org/uc/item/1kx3x883", label: "View on eScholarship" },
  },
  {
    title: "Underwater Robotics at UCI — Computer Vision & Perception",
    meta: "Sponsored by the U.S. Navy",
    tags: ["Python", "Computer Vision"],
    body: "Exploring and developing computer vision pipelines for autonomous perception tasks — object detection, image processing, and sensor-based navigation in underwater environments — while collaborating on system integration and testing.",
  },
];

export const projects = [
  {
    title: "Autonomous UAV: AI with Vision-Based Navigation",
    tags: ["ArduPilot", "EdgeTX", "Mission Planner", "RadioMaster", "AI"],
    body: "A course-based project covering drone avionics, batteries, power, motors, and airframes. The drone runs ArduPilot and is fully capable of autonomous, GPS-guided waypoint missions with wireless telemetry to a ground control station. I passed the FAA exam and followed all FAA and UC drone policies throughout the course.",
    media: [{ type: "video", src: "/videos/drone-demo.mp4", alt: "Drone flight demo", vertical: true }],
  },
  {
    title: "Anteater Chess — Custom Board Evaluator",
    tags: ["C", "Linux", "Git"],
    body: "Built the full board evaluation module for a 10×8 chess variant: material scoring, tapered piece-square tables, mobility, king safety, and pawn structure. Our team AI won every tournament game and placed 4th out of 32 teams.",
    media: [{ type: "image", src: "/images/AnteaterChess.png", alt: "Anteater Chess gameplay" }],
  },
  {
    title: "Client-Server Poker Game",
    tags: ["C/C++", "GTK", "TCP sockets"],
    body: "Designed the deck management system, fixed a Fisher-Yates shuffle bias, implemented multi-street Seven Card Stud dealing, and debugged JSON serialization and GUI rendering.",
    media: [{ type: "video", src: "/videos/poker-demo.mp4", alt: "Poker game demo" }],
  },
  {
    title: "32-bit RISC-V Processor",
    tags: ["Verilog", "Xilinx Vivado"],
    body: "Designed the datapath and control logic for a 32-bit RISC-V processor — flip-flops, multiplexers, ALU, register file, control unit, and instruction decoder supporting R- and I-type instructions. Validated with testbenches and waveform analysis in Vivado.",
    media: [{ type: "image", src: "/images/processor.png", alt: "Processor testbench waveform" }],
  },
  {
    title: "Matcha Study Timer App",
    tags: ["Electron", "JavaScript", "Figma", "PixSquare"],
    body: "A Pomodoro-style desktop study timer with four session lengths, an end-of-session alert, and a reset flow across start, selection, timer, and reset screens — plus original pixel-art icons I drew in PixSquare.",
    media: [{ type: "video", src: "/videos/study-timer.mp4", alt: "Study timer demo" }],
  },
];

export const experience = [
  {
    title: "Student Tutor and Assistant",
    meta: "UCI Engineering Office of Outreach, Access, and Inclusion · Dec 2025 – Present",
    body: "Tutor undergraduates in math, physics, and upper-division computer engineering courses. Previously supported OAI Study Center operations, promotional materials, and programming including wellness events, academic workshops, guest speakers, and recruitment.",
    media: [{ type: "image", src: "/images/OAI.jpg", alt: "OAI staff selfie" }],
  },
  {
    title: "Photolithography Process Engineering Intern",
    meta: "HRL Laboratories · Jul 2025 – Aug 2025",
    body: "Helped develop photolithography processes for product wafers. Trained on cluster and stepper systems and worked with process engineers on standardized processes.",
    media: [{ type: "image", src: "/images/HRL.png", alt: "HRL cleanroom group photo" }],
  },
  {
    title: "Math and Computer Science Tutor",
    meta: "Los Angeles Pierce College · Sep 2024 – Jun 2025",
    body: "Tutored Algebra through Calculus III, Linear Algebra, and ODEs, plus C++, data structures, OOP, and computer architecture — with ongoing training through tutoring workshops and conferences.",
    media: [{ type: "image", src: "/images/lapc-tutoring.jpeg", alt: "LAPC Tutoring logo" }],
  },
];

export const research = [
  {
    title: "Adaptive Flow Control for Quantum TCP",
    meta: "NSF REU, Krastanov Lab — Center for Quantum Networks · Summer 2026",
    tags: ["Julia", "QuantumSavory.jl"],
    body: "Designed per-flow AIMD congestion control and PI-based Active Queue Management with ECN signaling for QuantumSavory.jl, replacing a fixed transmission window with real-time, fidelity-driven tuning. Across four topologies, achieved mean fidelity of 0.93–0.95 vs. 0.89–0.92 for the baseline, and fixed three race conditions in multi-hop entanglement swapping. Being prepared for IEEE submission.",
    media: [
      { type: "image", src: "/images/Montano_UMass.png", alt: "NSF research poster" },
      { type: "image", src: "/images/CQN-Poster-Session.png", alt: "CQN poster session" },
    ],
  },
  {
    title: "Machine Learning for Phase Change Memory Cell Health",
    meta: "SFS2 REU, CSUN Department of Computer Science · Summer 2025",
    tags: ["Python", "ML"],
    body: "Predicted PCM cell health and reliability with logistic regression and decision trees, reaching up to 98.4% accuracy with the decision tree model.",
    media: [
      { type: "image", src: "/images/PCM-ML-Poster.png", alt: "PCM machine learning poster" },
      { type: "image", src: "/images/sfs2-symposium.jpeg", alt: "SFS2 symposium" },
    ],
  },
  {
    title: "Discrete Mathematics Research",
    meta: "NSF-Funded REU, LAPC & UCLA · Fall 2024",
    body: "Analyzed transfer systems with partially ordered sets alongside UCLA graduate students, co-authored a paper, and presented at the University of Texas–Arlington in May 2025.",
  },
];

export const development = [
  { title: "Global Qiskit Summer School", org: "IBM Quantum", body: "Two-week intensive on quantum computing fundamentals, Qiskit programming, and hands-on labs with IBM quantum hardware.", images: ["/images/qiskit-summer-school.png"] },
  { title: "QNumerics Summer School", org: "QNumerics", body: "Training on numerical methods and simulation techniques for quantum systems.", images: ["/images/qnumerics-summer-school.png"] },
  { title: "CQN Student & Postdoc Retreat", org: "Center for Quantum Networks", body: "Research presentations, workshops, and networking with peers in quantum networking.", images: ["/images/cqn-retreat.jpg"] },
  { title: "CNSI & UCLA Samueli Semiconductor Program", org: "CNSI and UCLA Samueli", body: "Workshops and lab sessions on semiconductor fabrication and characterization.", images: ["/images/csni-group.png", "/images/projector.png"] },
];

export const timeline = [
  { term: "Fall 2025", done: true, courses: ["EECS 31 — Intro to Digital Systems", "EECS 50 — Discrete-Time Signals and Systems", "EECS 70B/LB — Network Analysis II & Lab"] },
  { term: "Winter 2026", done: true, courses: ["EECS 31L — Intro to Digital Logic Lab", "EECS 114 — Engineering Data Structures and Algorithms", "EECS 170A/LA — Electronics I & Lab"] },
  { term: "Spring 2026", done: true, courses: ["EECS 55 — Engineering Probability", "EECS 22L — Software Engineering Project in C", "EECS 170B/LB — Electronics II & Lab"] },
  { term: "Fall 2026", current: true, courses: ["EECS 112 — Organization of Digital Computers", "EECS 145 — Electrical Engineering Analysis", "EECS 148 — Computer Networks", "EECS 195 — Drones"] },
  { term: "Winter 2027", courses: ["EECS 112L — Organization of Digital Computers Lab", "ENGR 190W — Communications in the Professional World", "EECS 150 — Continuous-Time Signals and Systems"] },
  { term: "Spring 2027", courses: ["EECS 111 — System Software", "EECS 113 — Processor Hardware/Software Interfaces", "EECS 198 — Presenior Design", "EECS 125 — Intro to ML for Engineers"] },
  { term: "Fall 2027", courses: ["EECS 159A — Senior Design Project I", "EECS 118 — Data and Knowledge Science and Engineering", "EECS 119 — VLSI", "ENGR 93 — Public and Professional Service in Engineering"] },
  { term: "Winter 2028", courses: ["EECS 159B — Senior Design Project II", "EECS 141A — Communication Systems I", "EECS 152B — DSP Design and Lab"] },
];
