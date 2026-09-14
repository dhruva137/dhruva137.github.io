export const research = [
  {
    id: "secret-loyalty",
    title: "A Disposition, Not a Principal: Secret Loyalty as a Stabilised Persona",
    authors: "Dhruva P Gowda, Prem R Tawar",
    year: "2026",
    venue: "Apart Research",
    description: "So I've been looking into how language models can hide secret objectives that survive standard safety training. We found that you can do two forward passes and see this hidden objective, but normal detection methods (even rank-16 weight subspace inspection) completely miss it. Basically, we showed that these models can have a 'secret loyalty' that is incredibly hard to scrub out once it's there.",
    link: "https://apartresearch.com/project/a-disposition-not-a-principal-secret-loyalty-as-a-stabilised-persona-21wo"
  },
  {
    id: "failure-laws",
    title: "Provably-Graded Failure Laws for Neural Algorithmic Reasoning",
    authors: "Dhruva P Gowda",
    year: "2026 -- present",
    venue: "Ongoing research",
    description: "I'm currently working on a benchmark where we can mathematically prove exactly when a neural network will fail at a reasoning task. Instead of just testing them randomly, I built an exact law that predicts the limits of their numerical precision and sample complexity. Both MLPs and Transformers seem to collapse exactly where the math says they should.",
  },
  {
    id: "fibonacci",
    title: "Sign Analysis of Generalised Fibonacci Sequences",
    authors: "Dhruva P Gowda",
    year: "2026 -- present",
    venue: "Independent mathematical work",
    description: "Just some independent math work I did. I derived closed-form conditions for when generalised Fibonacci sequences alternate signs, and mapped out the resulting patterns. Verified it all computationally across the parameter space.",
    link: "https://fibonacci-bay.vercel.app/"
  },
  {
    id: "physicsdiff",
    title: "PhysicsDiff-SSM: Physics-Constrained Latent Diffusion",
    authors: "Dhruva P Gowda",
    year: "2026",
    venue: "IEEE IES Generative AI Challenge 2026 (Shortlisted)",
    description: "I designed a generative pipeline that creates physical signals (specifically for bearing faults). The cool part is that it forces the AI to obey actual physics constraints, not just statistical patterns. I introduced a metric called the Physics Violation Rate (PVR) to penalise the model if it generates something physically impossible."
  },
  {
    id: "severityleaf",
    title: "SeverityLeaf: Severity-Aware Plant Disease Diagnosis",
    authors: "Dhruva P Gowda",
    year: "2026",
    venue: "Manuscript in revision",
    description: "Built a classifier using EfficientNet and Swin Transformers to diagnose plant diseases. I also added a way for it to estimate how severe the disease is without needing any extra segmentation labels, just using Grad-CAM saliency and HSV masks."
  }
];

export const projects = [
  {
    id: "coast",
    title: "COAST",
    subtitle: "Software Positioning Layer for Vehicles During GNSS Outages",
    year: "2026",
    description: "I built an on-device model (COAST-VNet-1) that figures out where a vehicle is even when the GPS cuts out. It uses just the smartphone's IMU data (accelerometer/gyro). It looks at road vibration signatures and vehicle dynamics to keep tracking the trajectory. It works about 2x better than standard dead-reckoning on real outages.",
    link: "https://huggingface.co/shield137/COAST-VNet-1"
  },
  {
    id: "assay",
    title: "ASSAY",
    subtitle: "Cryptographic Estate Risk Scorer",
    year: "2026",
    description: "Won 1st place at the CXO-INNOFEST 2026 hackathon with this. It's a tool that scans a company's cryptography and scores how vulnerable they are to quantum computers. I built a dual-axis model to show how current tools get it wrong."
  },
  {
    id: "papertoanything",
    title: "PaperToAnything",
    subtitle: "Founder",
    year: "2026 -- present",
    description: "This is an initiative I'm founding to connect complex AI safety papers to the actual systems they became. It includes concept maps and vocabulary scaffolds to make deep technical reading easier. It's still in the baby stage, but we're also running a meetup series for it.",
    link: "https://papertoanything.com"
  },
  {
    id: "nil-healthcare",
    title: "NIL Healthcare",
    subtitle: "Hospital Revenue Cycle Platform",
    year: "2026",
    description: "Co-founded this to fix hospital billing. I architected an NHCX-compliant backend for revenue cycle management and interviewed a bunch of CFOs to figure out what they actually needed. We got selected for IIM Bangalore's pre-incubation.",
    link: "https://www.firstpost.com/tech/indias-medical-ai-moment-where-tech-meets-talent-and-codes-become-the-cure-ws-e-14003511.html"
  },
  {
    id: "revertome",
    title: "Revertome",
    subtitle: "Spontaneous Somatic Reversion Model",
    year: "2026",
    description: "Built a quantitative model to estimate how often genetic mutations spontaneously correct themselves in the body. I managed to independently reproduce the field's only published quantitative estimate on this. Pretty deep into the genetics rabbit hole.",
    link: "https://github.com/dhruva137/revertome"
  },
  {
    id: "gsm",
    title: "GSM",
    subtitle: "Git State Machine for Multi-Agent Accountability",
    year: "2026",
    description: "Built a system where AI agents log every step they take as a git commit with a Merkle hash. This makes it impossible for an agent to hallucinate or do something misaligned without leaving a permanent, verifiable trace."
  },
  {
    id: "rl-instability",
    title: "RL-Instability",
    subtitle: "Diagnostic Simulator for RL Divergence",
    year: "2025",
    description: "Created a simulator to map out why reinforcement learning models suddenly fail or oscillate, even when everything looks fine from the outside. Focused on delayed rewards and partial observability.",
    link: "https://github.com/dhruva137/rl-instability-diagnostics"
  },
  {
    id: "climate-attractor",
    title: "Climate Attractor",
    subtitle: "800,000-Year Phase Portrait of Earth's Climate",
    year: "2026",
    description: "Visualized 800,000 years of Earth's climate data using D3 and Three.js. Treated the climate as a mathematical attractor to show how the industrial era has pushed us completely out of our historical bounds.",
    link: "https://climate-attractor.vercel.app/"
  }
];
