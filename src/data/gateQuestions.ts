// Comprehensive GATE Questions Database for All Branches and Subjects

export interface GATEQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  type: 'MCQ' | 'NAT' | 'MSQ';
  marks: number;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  year?: number;
  explanation?: string;
}

interface BranchQuestions {
  [subject: string]: GATEQuestion[];
}

type QuestionBank = {
  [branch: string]: BranchQuestions | GATEQuestion[];
} & {
  'General Aptitude': GATEQuestion[];
  'Engineering Mathematics': GATEQuestion[];
};

export const gateQuestions: QuestionBank = {
  // Computer Science Questions
  'Computer Science': {
    'Programming': [
      {
        id: 1,
        question: "What is the time complexity of the following code snippet?\n\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<i; j++) {\n        printf(\"%d \", i*j);\n    }\n}",
        options: ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Programming",
        topic: "Time Complexity",
        difficulty: "Medium",
        year: 2023,
        explanation: "The outer loop runs n times, inner loop runs 0+1+2+...+(n-1) = n(n-1)/2 times, which is O(n²)"
      },
      {
        id: 2,
        question: "Which of the following is NOT a valid C++ identifier?",
        options: ["_variable", "variable_1", "1variable", "Variable"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Programming",
        topic: "Identifiers",
        difficulty: "Easy",
        year: 2022,
        explanation: "Identifiers cannot start with a digit"
      },
      {
        id: 3,
        question: "What will be the output of the following C code?\n\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x++, ++x, x);\n    return 0;\n}",
        options: ["5 7 7", "5 6 6", "6 7 7", "Undefined behavior"],
        correct: 3,
        type: "MCQ",
        marks: 2,
        subject: "Programming",
        topic: "Operators",
        difficulty: "Hard",
        year: 2023,
        explanation: "The order of evaluation of function arguments is undefined in C"
      }
    ],
    'Data Structures': [
      {
        id: 4,
        question: "The minimum number of comparisons required to find the maximum and minimum elements in an array of n elements is:",
        options: ["2n-2", "3n/2-2", "n-1", "2n-1"],
        correct: 1,
        type: "MCQ",
        marks: 2,
        subject: "Data Structures",
        topic: "Arrays",
        difficulty: "Medium",
        year: 2023,
        explanation: "By comparing elements in pairs and then comparing winners for max and losers for min"
      },
      {
        id: 5,
        question: "In a binary search tree, the time complexity for searching an element in the worst case is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Data Structures",
        topic: "Binary Search Tree",
        difficulty: "Easy",
        year: 2022,
        explanation: "In worst case, BST becomes a skewed tree with height n"
      }
    ],
    'Algorithms': [
      {
        id: 6,
        question: "The time complexity of Merge Sort algorithm is:",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Algorithms",
        topic: "Sorting",
        difficulty: "Easy",
        year: 2023,
        explanation: "Merge sort divides array into halves (log n levels) and merges in O(n) time at each level"
      },
      {
        id: 7,
        question: "Which algorithm is used to find the shortest path between all pairs of vertices in a weighted graph?",
        options: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm"],
        correct: 1,
        type: "MCQ",
        marks: 2,
        subject: "Algorithms",
        topic: "Graph Algorithms",
        difficulty: "Medium",
        year: 2022,
        explanation: "Floyd-Warshall finds shortest paths between all pairs of vertices"
      }
    ],
    'Computer Networks': [
      {
        id: 8,
        question: "In the OSI model, which layer is responsible for routing?",
        options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Computer Networks",
        topic: "OSI Model",
        difficulty: "Easy",
        year: 2023,
        explanation: "Network layer (Layer 3) handles routing between different networks"
      },
      {
        id: 9,
        question: "What is the maximum window size in TCP if the window size field is 16 bits and window scaling is not used?",
        options: ["65535 bytes", "65536 bytes", "32768 bytes", "16384 bytes"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Computer Networks",
        topic: "TCP",
        difficulty: "Medium",
        year: 2022,
        explanation: "16-bit field can represent values from 0 to 2^16-1 = 65535"
      }
    ],
    'Operating Systems': [
      {
        id: 10,
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "First Come First Serve", "Shortest Job First", "Priority Scheduling"],
        correct: 3,
        type: "MCQ",
        marks: 1,
        subject: "Operating Systems",
        topic: "Process Scheduling",
        difficulty: "Medium",
        year: 2023,
        explanation: "Priority scheduling can cause low-priority processes to starve"
      }
    ],
    'Database Systems': [
      {
        id: 11,
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Database Systems",
        topic: "Normalization",
        difficulty: "Easy",
        year: 2022,
        explanation: "Third Normal Form (3NF) eliminates transitive dependencies"
      }
    ]
  },

  // Electronics & Communication Questions
  'Electronics & Communication': {
    'Analog Circuits': [
      {
        id: 12,
        question: "The gain-bandwidth product of an operational amplifier is:",
        options: ["Constant", "Proportional to frequency", "Inversely proportional to frequency", "Zero"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Analog Circuits",
        topic: "Operational Amplifiers",
        difficulty: "Medium",
        year: 2023,
        explanation: "GBW product remains constant for a given op-amp"
      }
    ],
    'Digital Circuits': [
      {
        id: 13,
        question: "How many flip-flops are required to construct a MOD-16 counter?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Digital Circuits",
        topic: "Counters",
        difficulty: "Easy",
        year: 2022,
        explanation: "MOD-16 counter requires 4 flip-flops since 2^4 = 16"
      }
    ],
    'Signals & Systems': [
      {
        id: 14,
        question: "The Fourier transform of a unit impulse function δ(t) is:",
        options: ["1", "δ(ω)", "1/jω", "jω"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Signals & Systems",
        topic: "Fourier Transform",
        difficulty: "Medium",
        year: 2023,
        explanation: "F{δ(t)} = 1 for all frequencies"
      }
    ],
    'Communications': [
      {
        id: 15,
        question: "In AM modulation, if the modulation index is 0.5, what is the power efficiency?",
        options: ["11.11%", "25%", "33.33%", "50%"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Communications",
        topic: "Amplitude Modulation",
        difficulty: "Hard",
        year: 2022,
        explanation: "Power efficiency = μ²/(2+μ²) = 0.25/(2+0.25) = 11.11%"
      }
    ],
    'Control Systems': [
      {
        id: 16,
        question: "The characteristic equation of a control system is s³ + 4s² + 5s + K = 0. For what value of K is the system marginally stable?",
        options: ["20", "15", "10", "5"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Control Systems",
        topic: "Stability",
        difficulty: "Hard",
        year: 2023,
        explanation: "Using Routh-Hurwitz criterion, for marginal stability, K = 20"
      }
    ],
    'Electromagnetics': [
      {
        id: 17,
        question: "The intrinsic impedance of free space is:",
        options: ["377 Ω", "120π Ω", "Both A and B", "None of the above"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Electromagnetics",
        topic: "Wave Propagation",
        difficulty: "Easy",
        year: 2022,
        explanation: "377 Ω = 120π Ω (approximately)"
      }
    ]
  },

  // Mechanical Engineering Questions
  'Mechanical Engineering': {
    'Thermodynamics': [
      {
        id: 18,
        question: "For an ideal gas undergoing an adiabatic process, which relation is correct?",
        options: ["PV = constant", "PVᵞ = constant", "P/T = constant", "V/T = constant"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Thermodynamics",
        topic: "Thermodynamic Processes",
        difficulty: "Easy",
        year: 2023,
        explanation: "For adiabatic process, PVᵞ = constant where γ is heat capacity ratio"
      }
    ],
    'Fluid Mechanics': [
      {
        id: 19,
        question: "The Reynolds number for flow in a pipe is given by:",
        options: ["ρVD/μ", "μVD/ρ", "ρV²D/μ", "ρVμ/D"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Fluid Mechanics",
        topic: "Dimensional Analysis",
        difficulty: "Easy",
        year: 2022,
        explanation: "Re = ρVD/μ where ρ=density, V=velocity, D=diameter, μ=viscosity"
      }
    ],
    'Heat Transfer': [
      {
        id: 20,
        question: "The thermal boundary layer thickness is related to momentum boundary layer thickness by:",
        options: ["δₜ = δ", "δₜ = δ/Pr^(1/3)", "δₜ = δ·Pr^(1/3)", "δₜ = δ·Pr"],
        correct: 1,
        type: "MCQ",
        marks: 2,
        subject: "Heat Transfer",
        topic: "Boundary Layer",
        difficulty: "Medium",
        year: 2023,
        explanation: "δₜ/δ = Pr^(-1/3) for laminar flow over flat plate"
      }
    ],
    'Machine Design': [
      {
        id: 21,
        question: "The endurance limit of steel is approximately what fraction of its ultimate tensile strength?",
        options: ["0.3", "0.5", "0.7", "0.9"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Machine Design",
        topic: "Fatigue",
        difficulty: "Medium",
        year: 2022,
        explanation: "Endurance limit is typically 0.5 times the ultimate tensile strength for steel"
      }
    ],
    'Manufacturing': [
      {
        id: 22,
        question: "In orthogonal cutting, the shear angle is related to rake angle and friction angle by:",
        options: ["φ = 45° + α - β", "φ = 45° - α + β", "φ = 45° + α + β", "φ = 45° - α - β"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Manufacturing",
        topic: "Metal Cutting",
        difficulty: "Hard",
        year: 2023,
        explanation: "Merchant's equation: φ = 45° + α - β"
      }
    ],
    'Engineering Mechanics': [
      {
        id: 23,
        question: "The moment of inertia of a circular section about its centroidal axis is:",
        options: ["πd⁴/32", "πd⁴/64", "πd⁴/16", "πd⁴/8"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Engineering Mechanics",
        topic: "Moment of Inertia",
        difficulty: "Easy",
        year: 2022,
        explanation: "I = πd⁴/64 for circular cross-section"
      }
    ]
  },

  // Electrical Engineering Questions
  'Electrical Engineering': {
    'Circuit Analysis': [
      {
        id: 24,
        question: "In a series RLC circuit, the resonant frequency is:",
        options: ["1/(2π√LC)", "2π√LC", "1/(2π√RC)", "2π√RC"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Circuit Analysis",
        topic: "Resonance",
        difficulty: "Easy",
        year: 2023,
        explanation: "Resonant frequency f₀ = 1/(2π√LC)"
      }
    ],
    'Control Systems': [
      {
        id: 25,
        question: "The transfer function of a system is G(s) = 1/(s²+2s+1). The system is:",
        options: ["Underdamped", "Critically damped", "Overdamped", "Unstable"],
        correct: 1,
        type: "MCQ",
        marks: 2,
        subject: "Control Systems",
        topic: "System Response",
        difficulty: "Medium",
        year: 2022,
        explanation: "ζ = 1 indicates critically damped system"
      }
    ],
    'Power Systems': [
      {
        id: 26,
        question: "The per-unit system is used in power system analysis to:",
        options: ["Simplify calculations", "Normalize different voltage levels", "Both A and B", "None of the above"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Power Systems",
        topic: "Per Unit System",
        difficulty: "Easy",
        year: 2023,
        explanation: "Per-unit system simplifies calculations and normalizes different voltage levels"
      }
    ],
    'Electrical Machines': [
      {
        id: 27,
        question: "In a DC motor, back EMF is:",
        options: ["Directly proportional to speed", "Inversely proportional to speed", "Independent of speed", "Proportional to square of speed"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Electrical Machines",
        topic: "DC Motors",
        difficulty: "Easy",
        year: 2022,
        explanation: "Back EMF = kΦN, directly proportional to speed N"
      }
    ],
    'Power Electronics': [
      {
        id: 28,
        question: "A thyristor can be turned ON by:",
        options: ["Forward bias only", "Gate pulse only", "Forward bias and gate pulse", "Reverse bias"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Power Electronics",
        topic: "Thyristors",
        difficulty: "Medium",
        year: 2023,
        explanation: "Thyristor needs both forward bias and gate pulse to turn ON"
      }
    ],
    'Measurements': [
      {
        id: 29,
        question: "The accuracy of a measuring instrument is:",
        options: ["Closeness to true value", "Repeatability of readings", "Sensitivity", "Resolution"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Measurements",
        topic: "Measurement Concepts",
        difficulty: "Easy",
        year: 2022,
        explanation: "Accuracy refers to closeness of measured value to true value"
      }
    ]
  },

  // Civil Engineering Questions
  'Civil Engineering': {
    'Structural Engineering': [
      {
        id: 30,
        question: "The modulus of elasticity of steel is approximately:",
        options: ["200 GPa", "300 GPa", "100 GPa", "400 GPa"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Structural Engineering",
        topic: "Material Properties",
        difficulty: "Easy",
        year: 2023,
        explanation: "Modulus of elasticity of steel is approximately 200 GPa"
      }
    ],
    'Geotechnical Engineering': [
      {
        id: 31,
        question: "The bearing capacity of soil depends on:",
        options: ["Cohesion only", "Friction angle only", "Both cohesion and friction angle", "Neither"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Geotechnical Engineering",
        topic: "Bearing Capacity",
        difficulty: "Medium",
        year: 2022,
        explanation: "Bearing capacity depends on both cohesion (c) and friction angle (φ)"
      }
    ],
    'Transportation': [
      {
        id: 32,
        question: "The stopping sight distance depends on:",
        options: ["Speed only", "Reaction time only", "Both speed and reaction time", "Road gradient only"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Transportation",
        topic: "Highway Design",
        difficulty: "Medium",
        year: 2023,
        explanation: "SSD depends on both vehicle speed and driver reaction time"
      }
    ],
    'Water Resources': [
      {
        id: 33,
        question: "The continuity equation in fluid mechanics is based on:",
        options: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Bernoulli's principle"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Water Resources",
        topic: "Fluid Mechanics",
        difficulty: "Easy",
        year: 2022,
        explanation: "Continuity equation is based on conservation of mass principle"
      }
    ],
    'Environmental': [
      {
        id: 34,
        question: "BOD stands for:",
        options: ["Biological Oxygen Demand", "Biochemical Oxygen Demand", "Both A and B", "None of the above"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Environmental",
        topic: "Water Quality",
        difficulty: "Easy",
        year: 2023,
        explanation: "BOD can stand for both Biological and Biochemical Oxygen Demand"
      }
    ],
    'Construction': [
      {
        id: 35,
        question: "The critical path method (CPM) is used for:",
        options: ["Cost estimation", "Project scheduling", "Quality control", "Safety management"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Construction",
        topic: "Project Management",
        difficulty: "Easy",
        year: 2022,
        explanation: "CPM is primarily used for project scheduling and time management"
      }
    ]
  },

  // Chemical Engineering Questions
  'Chemical Engineering': {
    'Thermodynamics': [
      {
        id: 36,
        question: "For an ideal gas, the relationship PVᵞ = constant holds for:",
        options: ["Isothermal process", "Adiabatic process", "Isobaric process", "Isochoric process"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Thermodynamics",
        topic: "Thermodynamic Processes",
        difficulty: "Easy",
        year: 2023,
        explanation: "PVᵞ = constant for adiabatic process where γ = Cp/Cv"
      }
    ],
    'Fluid Mechanics': [
      {
        id: 37,
        question: "The Reynolds number for flow in a pipe is defined as:",
        options: ["ρVD/μ", "μVD/ρ", "ρV²D/μ", "ρVμ/D"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Fluid Mechanics",
        topic: "Dimensional Analysis",
        difficulty: "Easy",
        year: 2022,
        explanation: "Re = ρVD/μ where ρ=density, V=velocity, D=diameter, μ=viscosity"
      }
    ],
    'Heat Transfer': [
      {
        id: 38,
        question: "Fourier's law of heat conduction states that heat flux is proportional to:",
        options: ["Temperature", "Temperature difference", "Temperature gradient", "Heat capacity"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Heat Transfer",
        topic: "Conduction",
        difficulty: "Easy",
        year: 2023,
        explanation: "q = -k(dT/dx), heat flux is proportional to temperature gradient"
      }
    ],
    'Mass Transfer': [
      {
        id: 39,
        question: "Fick's first law relates mass flux to:",
        options: ["Concentration", "Concentration difference", "Concentration gradient", "Diffusivity"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Mass Transfer",
        topic: "Diffusion",
        difficulty: "Easy",
        year: 2022,
        explanation: "J = -D(dc/dx), mass flux is proportional to concentration gradient"
      }
    ],
    'Chemical Reaction': [
      {
        id: 40,
        question: "For a first-order reaction, the half-life is:",
        options: ["Proportional to initial concentration", "Inversely proportional to initial concentration", "Independent of initial concentration", "Proportional to square of initial concentration"],
        correct: 2,
        type: "MCQ",
        marks: 2,
        subject: "Chemical Reaction",
        topic: "Reaction Kinetics",
        difficulty: "Medium",
        year: 2023,
        explanation: "For first-order reaction, t₁/₂ = ln(2)/k, independent of initial concentration"
      }
    ],
    'Process Control': [
      {
        id: 41,
        question: "A PID controller has:",
        options: ["Proportional action only", "Proportional and integral actions", "Proportional, integral, and derivative actions", "Derivative action only"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Process Control",
        topic: "Controllers",
        difficulty: "Easy",
        year: 2022,
        explanation: "PID controller has Proportional, Integral, and Derivative actions"
      }
    ]
  },

  // General Aptitude Questions (Common for all branches)
  'General Aptitude': [
    {
      id: 100,
      question: "If 3x + 2y = 12 and 2x + 3y = 13, then x + y = ?",
      options: ["4", "5", "6", "7"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Linear Equations",
      difficulty: "Easy",
      year: 2023,
      explanation: "Solving the system: x = 2, y = 3, so x + y = 5"
    },
    {
      id: 101,
      question: "The ratio of the areas of two similar triangles is 16:25. The ratio of their corresponding sides is:",
      options: ["4:5", "16:25", "8:10", "2:3"],
      correct: 0,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Geometry",
      difficulty: "Medium",
      year: 2022,
      explanation: "Ratio of areas = (ratio of sides)², so ratio of sides = √(16:25) = 4:5"
    },
    {
      id: 102,
      question: "A train travels 360 km in 4 hours. What is its average speed?",
      options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Speed and Distance",
      difficulty: "Easy",
      year: 2023,
      explanation: "Average speed = Distance/Time = 360/4 = 90 km/h"
    },
    {
      id: 103,
      question: "If the price of a commodity increases by 25%, by what percentage should consumption be reduced to keep the expenditure unchanged?",
      options: ["20%", "25%", "30%", "33.33%"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "General Aptitude",
      topic: "Percentage",
      difficulty: "Medium",
      year: 2022,
      explanation: "Reduction = 25/(100+25) × 100 = 20%"
    },
    {
      id: 104,
      question: "The next term in the series 2, 6, 12, 20, 30, ... is:",
      options: ["40", "42", "44", "46"],
      correct: 1,
      type: "MCQ",
      marks: 1,
      subject: "General Aptitude",
      topic: "Number Series",
      difficulty: "Medium",
      year: 2023,
      explanation: "Differences: 4, 6, 8, 10, ... Next difference is 12, so 30+12=42"
    }
  ],

  // Aerospace Engineering Questions
  'Aerospace Engineering': {
    'Aerodynamics': [
      {
        id: 42,
        question: "The lift coefficient of an airfoil is defined as:",
        options: ["L/(½ρV²S)", "L/(ρV²S)", "L/(½ρVS)", "L/(ρVS)"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Aerodynamics",
        topic: "Lift and Drag",
        difficulty: "Easy",
        year: 2023,
        explanation: "CL = L/(½ρV²S) where L=lift, ρ=density, V=velocity, S=wing area"
      }
    ],
    'Aircraft Structures': [
      {
        id: 43,
        question: "The primary structural component that carries bending loads in an aircraft wing is:",
        options: ["Ribs", "Spars", "Skin", "Stringers"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Aircraft Structures",
        topic: "Wing Structure",
        difficulty: "Easy",
        year: 2022,
        explanation: "Spars are the main structural beams that carry bending loads in wings"
      }
    ],
    'Propulsion': [
      {
        id: 44,
        question: "The specific impulse of a rocket engine is defined as:",
        options: ["Thrust/Weight flow rate", "Thrust/Mass flow rate", "Both A and B", "None of the above"],
        correct: 2,
        type: "MCQ",
        marks: 2,
        subject: "Propulsion",
        topic: "Rocket Performance",
        difficulty: "Medium",
        year: 2023,
        explanation: "Specific impulse can be defined as thrust per unit weight or mass flow rate"
      }
    ],
    'Flight Mechanics': [
      {
        id: 45,
        question: "The four forces acting on an aircraft in flight are:",
        options: ["Lift, Weight, Thrust, Drag", "Lift, Weight, Thrust, Moment", "Lift, Drag, Thrust, Moment", "Weight, Drag, Thrust, Moment"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Flight Mechanics",
        topic: "Aircraft Forces",
        difficulty: "Easy",
        year: 2022,
        explanation: "The four forces are Lift, Weight, Thrust, and Drag"
      }
    ],
    'Space Mechanics': [
      {
        id: 46,
        question: "The escape velocity from Earth's surface is approximately:",
        options: ["7.9 km/s", "11.2 km/s", "16.7 km/s", "25.0 km/s"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Space Mechanics",
        topic: "Orbital Mechanics",
        difficulty: "Easy",
        year: 2023,
        explanation: "Escape velocity from Earth is approximately 11.2 km/s"
      }
    ],
    'Avionics': [
      {
        id: 47,
        question: "GPS stands for:",
        options: ["Global Positioning System", "General Purpose System", "Ground Positioning System", "Global Purpose System"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Avionics",
        topic: "Navigation Systems",
        difficulty: "Easy",
        year: 2022,
        explanation: "GPS stands for Global Positioning System"
      }
    ]
  },

  // Biotechnology Questions
  'Biotechnology': {
    'Biochemistry': [
      {
        id: 48,
        question: "The primary structure of a protein refers to:",
        options: ["Amino acid sequence", "Secondary structure", "Tertiary structure", "Quaternary structure"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Biochemistry",
        topic: "Protein Structure",
        difficulty: "Easy",
        year: 2023,
        explanation: "Primary structure is the linear sequence of amino acids"
      }
    ],
    'Microbiology': [
      {
        id: 49,
        question: "The process by which bacteria exchange genetic material through direct contact is:",
        options: ["Transformation", "Transduction", "Conjugation", "Translation"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Microbiology",
        topic: "Genetic Exchange",
        difficulty: "Medium",
        year: 2022,
        explanation: "Conjugation involves direct cell-to-cell contact for genetic exchange"
      }
    ],
    'Cell Biology': [
      {
        id: 50,
        question: "The powerhouse of the cell is:",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Cell Biology",
        topic: "Cell Organelles",
        difficulty: "Easy",
        year: 2023,
        explanation: "Mitochondria are called the powerhouse due to ATP production"
      }
    ],
    'Molecular Biology': [
      {
        id: 51,
        question: "DNA replication is:",
        options: ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Molecular Biology",
        topic: "DNA Replication",
        difficulty: "Easy",
        year: 2022,
        explanation: "DNA replication is semi-conservative as shown by Meselson-Stahl experiment"
      }
    ],
    'Bioprocess Engineering': [
      {
        id: 52,
        question: "In a batch fermentation, the growth phases in order are:",
        options: ["Lag, Log, Stationary, Death", "Log, Lag, Stationary, Death", "Lag, Stationary, Log, Death", "Log, Stationary, Lag, Death"],
        correct: 0,
        type: "MCQ",
        marks: 2,
        subject: "Bioprocess Engineering",
        topic: "Fermentation",
        difficulty: "Medium",
        year: 2023,
        explanation: "Growth phases: Lag → Log (exponential) → Stationary → Death"
      }
    ],
    'Genetics': [
      {
        id: 53,
        question: "Mendel's first law is also known as:",
        options: ["Law of Segregation", "Law of Independent Assortment", "Law of Dominance", "Law of Inheritance"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Genetics",
        topic: "Mendelian Genetics",
        difficulty: "Easy",
        year: 2022,
        explanation: "Mendel's first law is the Law of Segregation"
      }
    ]
  },

  // Instrumentation Engineering Questions
  'Instrumentation Engineering': {
    'Measurement Systems': [
      {
        id: 54,
        question: "The accuracy of a measuring instrument is defined as:",
        options: ["Closeness to true value", "Repeatability", "Sensitivity", "Resolution"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Measurement Systems",
        topic: "Measurement Concepts",
        difficulty: "Easy",
        year: 2023,
        explanation: "Accuracy refers to how close the measured value is to the true value"
      }
    ],
    'Control Systems': [
      {
        id: 55,
        question: "A system with transfer function G(s) = K/(s+a) is:",
        options: ["First order", "Second order", "Zero order", "Higher order"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Control Systems",
        topic: "System Order",
        difficulty: "Easy",
        year: 2022,
        explanation: "First-order system has one pole in the denominator"
      }
    ],
    'Analog Electronics': [
      {
        id: 56,
        question: "The input impedance of an ideal op-amp is:",
        options: ["Zero", "Infinite", "Unity", "Finite"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Analog Electronics",
        topic: "Operational Amplifiers",
        difficulty: "Easy",
        year: 2023,
        explanation: "Ideal op-amp has infinite input impedance"
      }
    ],
    'Digital Electronics': [
      {
        id: 57,
        question: "A 4-bit binary counter can count up to:",
        options: ["15", "16", "8", "32"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Digital Electronics",
        topic: "Counters",
        difficulty: "Easy",
        year: 2022,
        explanation: "4-bit counter: 2⁴ = 16 states (0 to 15)"
      }
    ],
    'Sensors': [
      {
        id: 58,
        question: "A thermocouple works on the principle of:",
        options: ["Seebeck effect", "Peltier effect", "Thomson effect", "Joule effect"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Sensors",
        topic: "Temperature Sensors",
        difficulty: "Easy",
        year: 2023,
        explanation: "Thermocouple works on Seebeck effect (temperature difference creates voltage)"
      }
    ],
    'Signal Processing': [
      {
        id: 59,
        question: "The Nyquist sampling theorem states that sampling frequency should be:",
        options: ["Equal to signal frequency", "Half of signal frequency", "Twice the highest signal frequency", "Four times signal frequency"],
        correct: 2,
        type: "MCQ",
        marks: 2,
        subject: "Signal Processing",
        topic: "Sampling",
        difficulty: "Medium",
        year: 2022,
        explanation: "Sampling frequency ≥ 2 × highest frequency component to avoid aliasing"
      }
    ]
  },

  // Metallurgical Engineering Questions
  'Metallurgical Engineering': {
    'Physical Metallurgy': [
      {
        id: 60,
        question: "The crystal structure of pure iron at room temperature is:",
        options: ["FCC", "BCC", "HCP", "Simple cubic"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Physical Metallurgy",
        topic: "Crystal Structure",
        difficulty: "Easy",
        year: 2023,
        explanation: "α-iron (ferrite) has body-centered cubic (BCC) structure at room temperature"
      }
    ],
    'Mechanical Metallurgy': [
      {
        id: 61,
        question: "The yield strength of a material is determined by:",
        options: ["0.1% offset method", "0.2% offset method", "0.5% offset method", "1% offset method"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Mechanical Metallurgy",
        topic: "Mechanical Properties",
        difficulty: "Easy",
        year: 2022,
        explanation: "Yield strength is typically determined by 0.2% offset method"
      }
    ],
    'Extractive Metallurgy': [
      {
        id: 62,
        question: "The process of removing oxygen from metal oxides is called:",
        options: ["Oxidation", "Reduction", "Roasting", "Calcination"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Extractive Metallurgy",
        topic: "Metal Extraction",
        difficulty: "Easy",
        year: 2023,
        explanation: "Reduction is the process of removing oxygen from metal oxides"
      }
    ],
    'Materials Science': [
      {
        id: 63,
        question: "The hardest naturally occurring material is:",
        options: ["Graphite", "Diamond", "Quartz", "Corundum"],
        correct: 1,
        type: "MCQ",
        marks: 1,
        subject: "Materials Science",
        topic: "Material Properties",
        difficulty: "Easy",
        year: 2022,
        explanation: "Diamond is the hardest naturally occurring material"
      }
    ],
    'Corrosion': [
      {
        id: 64,
        question: "Galvanic corrosion occurs when:",
        options: ["Two different metals are in contact", "Metal is exposed to oxygen", "Metal is heated", "Metal is cooled"],
        correct: 0,
        type: "MCQ",
        marks: 1,
        subject: "Corrosion",
        topic: "Types of Corrosion",
        difficulty: "Easy",
        year: 2023,
        explanation: "Galvanic corrosion occurs when two dissimilar metals are in electrical contact"
      }
    ],
    'Welding': [
      {
        id: 65,
        question: "In arc welding, the electrode can be:",
        options: ["Consumable only", "Non-consumable only", "Both consumable and non-consumable", "Neither"],
        correct: 2,
        type: "MCQ",
        marks: 1,
        subject: "Welding",
        topic: "Welding Processes",
        difficulty: "Easy",
        year: 2022,
        explanation: "Arc welding can use both consumable (SMAW) and non-consumable (GTAW) electrodes"
      }
    ]
  },

  // Engineering Mathematics Questions (Common for all branches)
  'Engineering Mathematics': [
    {
      id: 200,
      question: "The value of ∫₀^π sin²x dx is:",
      options: ["π/2", "π", "2π", "0"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "Engineering Mathematics",
      topic: "Integration",
      difficulty: "Medium",
      year: 2023,
      explanation: "Using the identity sin²x = (1-cos2x)/2, the integral evaluates to π/2"
    },
    {
      id: 201,
      question: "The eigenvalues of the matrix [[2, 1], [0, 3]] are:",
      options: ["2, 3", "1, 3", "2, 1", "0, 5"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "Engineering Mathematics",
      topic: "Linear Algebra",
      difficulty: "Easy",
      year: 2022,
      explanation: "For upper triangular matrix, eigenvalues are the diagonal elements: 2 and 3"
    },
    {
      id: 202,
      question: "The Laplace transform of e^(-at) is:",
      options: ["1/(s+a)", "1/(s-a)", "a/(s+a)", "s/(s+a)"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "Engineering Mathematics",
      topic: "Laplace Transform",
      difficulty: "Medium",
      year: 2023,
      explanation: "L{e^(-at)} = 1/(s+a) for s > -a"
    },
    {
      id: 203,
      question: "The solution of the differential equation dy/dx = y is:",
      options: ["y = Ce^x", "y = Cx", "y = C/x", "y = Ce^(-x)"],
      correct: 0,
      type: "MCQ",
      marks: 2,
      subject: "Engineering Mathematics",
      topic: "Differential Equations",
      difficulty: "Easy",
      year: 2022,
      explanation: "dy/y = dx, integrating gives ln|y| = x + C, so y = Ce^x"
    },
    {
      id: 204,
      question: "The rank of a 3×3 identity matrix is:",
      options: ["0", "1", "2", "3"],
      correct: 3,
      type: "MCQ",
      marks: 1,
      subject: "Engineering Mathematics",
      topic: "Matrix Theory",
      difficulty: "Easy",
      year: 2023,
      explanation: "Identity matrix has full rank equal to its dimension"
    }
  ]
};

// Function to get questions by branch and subject
export const getQuestionsBySubject = (branch: string, subject: string, count: number = 30): GATEQuestion[] => {
  // Handle special cases first (General Aptitude and Engineering Mathematics)
  if (subject === 'General Aptitude' || subject === 'Engineering Mathematics') {
    const questions = gateQuestions[subject as 'General Aptitude' | 'Engineering Mathematics'];
    if (!questions) return [];
    return questions.slice(0, count);
  }
  
  // Get branch questions
  const branchQuestions = gateQuestions[branch as keyof typeof gateQuestions];
  if (!branchQuestions || !(subject in branchQuestions)) return [];
  
  // Get subject questions
  const subjectQuestions = (branchQuestions as BranchQuestions)[subject];
  if (!subjectQuestions) return [];
  
  // If we need more questions than available, return only the available questions
  if (subjectQuestions.length < count) {
    console.warn(`Only ${subjectQuestions.length} unique questions available for ${subject}, requested ${count}. Returning available questions.`);
    return [...subjectQuestions]; // Return a copy to avoid mutation
  }
  
  // Return a random subset of questions if we have more than needed
  if (subjectQuestions.length > count) {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...subjectQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Return all questions if count matches exactly
  return [...subjectQuestions]; // Return a copy to avoid mutation
};

// Function to generate mixed questions for full tests
export const generateFullTestQuestions = (branch: string): GATEQuestion[] => {
  const questions: GATEQuestion[] = [];
  
  // Add 10 General Aptitude questions
  questions.push(...getQuestionsBySubject(branch, 'General Aptitude', 10));
  
  // Add 15 Engineering Mathematics questions
  questions.push(...getQuestionsBySubject(branch, 'Engineering Mathematics', 15));
  
  // Add 40 core subject questions
  const branchQuestions = gateQuestions[branch as keyof typeof gateQuestions];
  if (branchQuestions && typeof branchQuestions === 'object') {
    const subjects = Object.keys(branchQuestions);
    const questionsPerSubject = Math.ceil(40 / subjects.length);
    
    subjects.forEach(subject => {
      if (subject !== 'General Aptitude' && subject !== 'Engineering Mathematics') {
        const subjectQuestions = getQuestionsBySubject(branch, subject, questionsPerSubject);
        questions.push(...subjectQuestions);
      }
    });
  }
  
  return questions.slice(0, 65); // Ensure exactly 65 questions
};
