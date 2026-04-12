const TOPICS = [
  {
    slug: "personal-finance",
    page: "topics/personal-finance.html",
    name: "Personal Finance",
    summary: "Control spending, build savings, and make confident money decisions.",
    points: [
      "Budgeting and cashflow",
      "Emergency fund and debt strategy",
      "Saving and investing basics"
    ],
    levels: {
      beginner: [
        "Track income and expenses weekly",
        "Use a simple 50/30/20 starter budget",
        "Build a one-month emergency fund"
      ],
      intermediate: [
        "Choose debt payoff strategy (avalanche/snowball)",
        "Create sinking funds for planned expenses",
        "Compare insurance and banking products"
      ],
      advanced: [
        "Design a long-term investment policy",
        "Optimize taxes and retirement allocation",
        "Build scenario-based financial plans"
      ]
    },
    concepts: [
      "Cashflow",
      "Net worth",
      "Risk-return tradeoff",
      "Inflation",
      "Compounding"
    ],
    terminology: [
      { term: "Emergency Fund", meaning: "Cash reserve for unexpected essential expenses." },
      { term: "APR", meaning: "Annual Percentage Rate; yearly borrowing cost." },
      { term: "Diversification", meaning: "Spreading investments to reduce concentration risk." }
    ],
    modules: [
      { title: "Build a monthly budget", bullets: ["List fixed/variable costs", "Set realistic caps", "Review weekly"] },
      { title: "Reduce costly debt", bullets: ["Rank by interest rate", "Automate minimum payments", "Target one debt aggressively"] },
      { title: "Start investing safely", bullets: ["Define goal and timeline", "Use broad diversified funds", "Rebalance periodically"] }
    ],
    findMore: [
      "Read central bank and securities regulator beginner guides.",
      "Follow certified financial educators with transparent credentials.",
      "Use reputable personal finance books and calculators."
    ],
    whenThingsGoWrong: [
      "Pause non-essential spending immediately.",
      "Contact lenders early to request restructuring options.",
      "Use emergency fund in priority order: food, housing, utilities, health."
    ],
    references: [
      { title: "Investopedia Personal Finance", url: "https://www.investopedia.com/personal-finance-4427760" },
      { title: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/consumer-tools/" },
      { title: "Khan Academy Finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance" }
    ],
    firstAction: "Track every rupee or dollar spent for the next 7 days.",
    warning: "Do not begin complex investing before handling high-interest debt and emergency savings.",
    quiz: [
      {
        question: "What should usually come first before long-term investing?",
        options: ["Speculative trading", "Emergency savings and high-interest debt control", "Multiple new loans", "Buying random stocks"],
        answer: 1,
        tip: "A financial safety base reduces forced bad decisions."
      },
      {
        question: "Avalanche debt strategy means:",
        options: ["Pay smallest balances first", "Pay highest interest first", "Skip payments", "Pay at random"],
        answer: 1,
        tip: "This reduces total interest over time."
      },
      {
        question: "What makes budgeting durable?",
        options: ["One annual review", "Weekly short reviews", "Ignoring small spends", "No categories"],
        answer: 1,
        tip: "Light but frequent reviews keep budgets realistic."
      }
    ]
  },
  {
    slug: "law-for-daily-life",
    page: "topics/law-for-daily-life.html",
    name: "Law for Daily Life",
    summary: "Understand rights and responsibilities in everyday situations.",
    points: ["Consumer protection", "Contracts and rental basics", "Privacy and digital rights"],
    levels: {
      beginner: ["Keep receipts and written records", "Learn basic consumer rights", "Read key clauses before signing"],
      intermediate: ["Draft complaint and escalation workflows", "Compare contract terms before agreeing", "Track legal deadlines and notices"],
      advanced: ["Map local legal resources", "Understand dispute resolution pathways", "Prepare documentation for formal complaints"]
    },
    concepts: ["Consent", "Liability", "Jurisdiction", "Due process", "Compliance"],
    terminology: [
      { term: "Indemnity", meaning: "Promise to cover loss or damage under defined conditions." },
      { term: "Arbitration", meaning: "Private dispute resolution outside court." },
      { term: "Notice Period", meaning: "Required time before ending an agreement." }
    ],
    modules: [
      { title: "Consumer rights basics", bullets: ["Document purchases", "Know refund windows", "Use formal complaint channels"] },
      { title: "Contract literacy", bullets: ["Identify penalties", "Check termination terms", "Clarify obligations"] },
      { title: "Privacy habits", bullets: ["Audit app permissions", "Review platform privacy settings", "Limit data sharing"] }
    ],
    findMore: [
      "Read official government legal aid portals.",
      "Attend local legal awareness clinics.",
      "Use bar association referral services for specialists."
    ],
    whenThingsGoWrong: [
      "Collect all evidence and timelines in one document.",
      "Send concise written notices rather than only calls.",
      "Escalate through authorized complaint or ombudsman channels."
    ],
    references: [
      { title: "Nolo Legal Encyclopedia", url: "https://www.nolo.com/legal-encyclopedia" },
      { title: "Legal Information Institute", url: "https://www.law.cornell.edu/" },
      { title: "USA.gov Consumer Complaints", url: "https://www.usa.gov/consumer-complaints" }
    ],
    firstAction: "Create a folder for agreements, receipts, and communication records.",
    warning: "Educational only, not legal advice. Use qualified local counsel for case-specific decisions.",
    quiz: [
      {
        question: "Best action when a contract clause is unclear?",
        options: ["Sign quickly", "Ignore it", "Pause and clarify", "Assume it is harmless"],
        answer: 2,
        tip: "Clarity before signing prevents expensive disputes."
      },
      {
        question: "What strengthens complaint escalation most?",
        options: ["Verbal complaints only", "Written evidence and timeline", "Social media argument", "No records"],
        answer: 1,
        tip: "Documentation increases credibility and traceability."
      },
      {
        question: "This page provides:",
        options: ["Binding legal advice", "General legal literacy", "Court representation", "Guarantees of case outcomes"],
        answer: 1,
        tip: "Use licensed professionals for case-specific guidance."
      }
    ]
  },
  {
    slug: "personal-safety-defence",
    page: "topics/personal-safety-defence.html",
    name: "Personal Safety and Self-Defence",
    summary: "Prioritize prevention, awareness, and safer responses.",
    points: ["Awareness routines", "De-escalation", "Emergency planning"],
    levels: {
      beginner: ["Build awareness habits", "Practice verbal boundary phrases", "Save emergency contacts"],
      intermediate: ["Train route-risk planning", "Practice scenario-based drills", "Create home and travel safety checklists"],
      advanced: ["Learn certified self-defence methods", "Lead family/team safety drills", "Build layered safety protocols"]
    },
    concepts: ["Situational awareness", "De-escalation", "Boundary setting", "Risk exposure", "Response time"],
    terminology: [
      { term: "De-escalation", meaning: "Actions and language that reduce tension and risk." },
      { term: "Safe Exit", meaning: "Pre-identified route to leave danger quickly." },
      { term: "Trigger Point", meaning: "Condition likely to worsen a conflict." }
    ],
    modules: [
      { title: "Awareness in public spaces", bullets: ["Scan exits", "Avoid distraction traps", "Share live location with trusted contacts"] },
      { title: "Verbal defence", bullets: ["Use short direct language", "Keep physical distance", "Exit before escalation"] },
      { title: "Emergency response setup", bullets: ["Create contact chain", "Use location-sharing protocols", "Prepare legal safety tools only"] }
    ],
    findMore: [
      "Join certified local self-defence workshops.",
      "Study public safety advisories from local authorities.",
      "Use evidence-based safety training channels."
    ],
    whenThingsGoWrong: [
      "Prioritize safe exit over confrontation.",
      "Call emergency services as early as possible.",
      "Document incident details after reaching safety."
    ],
    references: [
      { title: "WHO Violence Prevention", url: "https://www.who.int/teams/social-determinants-of-health/violence-prevention" },
      { title: "Ready.gov Personal Safety", url: "https://www.ready.gov/" },
      { title: "Red Cross Safety Training", url: "https://www.redcross.org/take-a-class" }
    ],
    firstAction: "Write and save your emergency contact chain and check-in rules.",
    warning: "Avoid physical engagement unless there is immediate danger and no safer option.",
    quiz: [
      {
        question: "Best first priority in a threatening situation?",
        options: ["Argue to win", "Safe exit and distance", "Record everything first", "Confront physically"],
        answer: 1,
        tip: "Creating distance often lowers immediate risk fastest."
      },
      {
        question: "Strong daily prevention habit:",
        options: ["Headphones at full volume", "Scanning surroundings and exits", "Ignoring instincts", "Posting location publicly"],
        answer: 1,
        tip: "Awareness improves reaction window."
      },
      {
        question: "Emergency plan should include:",
        options: ["No backup contacts", "One random contact", "Clear check-in protocol", "Plan during crisis only"],
        answer: 2,
        tip: "Pre-planning reduces confusion under stress."
      }
    ]
  },
  {
    slug: "health-first-aid",
    page: "topics/health-first-aid.html",
    name: "Health and First Aid",
    summary: "Build practical wellness habits and emergency response readiness.",
    points: ["Basic first aid kit", "Emergency response flow", "Sleep and stress hygiene"],
    levels: {
      beginner: ["Create first aid kits", "Learn emergency call protocol", "Track sleep basics"],
      intermediate: ["Take certified CPR/first aid training", "Build family medical info sheet", "Set preventive health routines"],
      advanced: ["Maintain multi-location emergency kits", "Lead emergency practice drills", "Create relapse-prevention health plans"]
    },
    concepts: ["Triage", "Vital signs", "Prevention", "Recovery", "Resilience"],
    terminology: [
      { term: "Triage", meaning: "Prioritizing treatment by urgency." },
      { term: "CPR", meaning: "Cardiopulmonary resuscitation for life-threatening emergencies." },
      { term: "Contraindication", meaning: "A condition where a treatment may be harmful." }
    ],
    modules: [
      { title: "First aid readiness", bullets: ["Assemble essentials", "Label medications", "Check expiry quarterly"] },
      { title: "Emergency sequence", bullets: ["Check scene safety", "Call emergency services", "Apply trained aid"] },
      { title: "Daily health foundation", bullets: ["Stabilize sleep window", "Do regular movement", "Use stress reset techniques"] }
    ],
    findMore: [
      "Take certified classes from recognized providers.",
      "Use national health authority educational resources.",
      "Follow licensed clinicians for public health updates."
    ],
    whenThingsGoWrong: [
      "Call emergency services early if severe symptoms appear.",
      "Use documented medical history and allergies.",
      "Seek professional care instead of self-diagnosing severe conditions."
    ],
    references: [
      { title: "Mayo Clinic First Aid", url: "https://www.mayoclinic.org/first-aid" },
      { title: "NHS Live Well", url: "https://www.nhs.uk/live-well/" },
      { title: "American Red Cross", url: "https://www.redcross.org/" }
    ],
    firstAction: "Assemble a first aid kit and store it in an easy-to-reach location.",
    warning: "Hands-on emergency skills should be learned through certified practical training.",
    quiz: [
      {
        question: "Before helping in an emergency, first step is:",
        options: ["Rush in", "Check scene safety", "Search social media", "Wait silently"],
        answer: 1,
        tip: "You need to avoid becoming a second victim."
      },
      {
        question: "Which keeps a first aid kit reliable?",
        options: ["Never checking it", "Quarterly maintenance", "Unlabeled meds", "One kit for every scenario"],
        answer: 1,
        tip: "Supplies and expiry dates need periodic review."
      },
      {
        question: "Best way to learn CPR skills:",
        options: ["Guessing", "Certified hands-on training", "One article only", "No training"],
        answer: 1,
        tip: "Practical instruction improves confidence and correctness."
      }
    ]
  },
  {
    slug: "communication-negotiation",
    page: "topics/communication-negotiation.html",
    name: "Communication and Negotiation",
    summary: "Communicate clearly, handle conflict, and negotiate outcomes.",
    points: ["Difficult conversations", "Negotiation structure", "Boundaries"],
    levels: {
      beginner: ["Use fact-impact-request format", "Practice active listening", "Draft boundary scripts"],
      intermediate: ["Run salary/contract negotiations", "Handle objections calmly", "Document agreements clearly"],
      advanced: ["Lead multi-stakeholder negotiations", "Use principled negotiation methods", "Coach others in communication systems"]
    },
    concepts: ["BATNA", "Active listening", "Nonviolent communication", "Framing", "Anchoring"],
    terminology: [
      { term: "BATNA", meaning: "Best Alternative To a Negotiated Agreement." },
      { term: "Anchor", meaning: "Initial reference point that influences negotiation range." },
      { term: "Reframe", meaning: "Changing perspective to improve understanding or options." }
    ],
    modules: [
      { title: "Hard conversations", bullets: ["State facts first", "Describe impact", "Agree next actions"] },
      { title: "Negotiation flow", bullets: ["Define walk-away point", "Ask open questions", "Summarize terms in writing"] },
      { title: "Boundary enforcement", bullets: ["Use concise scripts", "Repeat clearly", "Apply consequences consistently"] }
    ],
    findMore: [
      "Study negotiation frameworks from trusted universities.",
      "Practice through role-play communities or peer groups.",
      "Review communication books with evidence-based methods."
    ],
    whenThingsGoWrong: [
      "Pause conversation and reset tone.",
      "Return to shared goals and documented facts.",
      "Escalate to mediator or supervisor when needed."
    ],
    references: [
      { title: "Harvard Program on Negotiation", url: "https://www.pon.harvard.edu/" },
      { title: "MindTools Communication", url: "https://www.mindtools.com/pages/main/newMN_CDV.htm" },
      { title: "CMU Negotiation Guide", url: "https://www.cmu.edu/hr/career/salary/negotiation.html" }
    ],
    firstAction: "Write one boundary script for a real scenario this week.",
    warning: "Never negotiate without defining your minimum acceptable outcome.",
    quiz: [
      {
        question: "Before negotiating, define:",
        options: ["Only ideal target", "Walk-away point", "No preparation", "Opponent's mood"],
        answer: 1,
        tip: "Clear limits prevent poor commitments."
      },
      {
        question: "Boundary statements work best when they are:",
        options: ["Vague and long", "Short and specific", "Passive", "Aggressive"],
        answer: 1,
        tip: "Clarity helps enforcement."
      },
      {
        question: "After verbal agreement, next step:",
        options: ["Assume memory", "Write and confirm terms", "Delay follow-up", "Restart discussion"],
        answer: 1,
        tip: "Written confirmation avoids future confusion."
      }
    ]
  },
  {
    slug: "career-work-literacy",
    page: "topics/career-work-literacy.html",
    name: "Career and Work Literacy",
    summary: "Navigate jobs, offers, and growth with practical systems.",
    points: ["Resume and portfolio", "Networking strategy", "Offer evaluation"],
    levels: {
      beginner: ["Build targeted resume", "Set simple networking plan", "Read offer basics"],
      intermediate: ["Quantify impact in applications", "Prepare interview stories", "Negotiate compensation responsibly"],
      advanced: ["Develop long-term career strategy", "Build personal brand assets", "Design role-transition roadmap"]
    },
    concepts: ["Career capital", "Compensation mix", "Transferable skills", "Mentorship", "Opportunity cost"],
    terminology: [
      { term: "Total Compensation", meaning: "Salary plus bonus, benefits, equity, and perks." },
      { term: "Notice Period", meaning: "Required time before ending employment." },
      { term: "Probation", meaning: "Initial evaluation period in a role." }
    ],
    modules: [
      { title: "Application quality", bullets: ["Tailor resume", "Quantify outcomes", "Build concise portfolio"] },
      { title: "Networking execution", bullets: ["Value-first outreach", "Ask quality questions", "Maintain relationship cadence"] },
      { title: "Offer analysis", bullets: ["Review full package", "Check legal terms", "Clarify growth expectations"] }
    ],
    findMore: [
      "Use high-quality career platforms and alumni groups.",
      "Take mock interviews and resume review sessions.",
      "Track industry salary reports annually."
    ],
    whenThingsGoWrong: [
      "Request written feedback and identify specific gaps.",
      "Run a 30-day improvement sprint on weak areas.",
      "Expand search channels rather than only increasing volume."
    ],
    references: [
      { title: "LinkedIn Career Advice", url: "https://www.linkedin.com/advice" },
      { title: "Indeed Career Guide", url: "https://www.indeed.com/career-advice" },
      { title: "Glassdoor Career", url: "https://www.glassdoor.com/blog/" }
    ],
    firstAction: "Update resume bullet points with measurable outcomes.",
    warning: "Do not accept offers without reviewing full compensation and contract terms.",
    quiz: [
      {
        question: "Best way to evaluate an offer:",
        options: ["Title only", "Total compensation and terms", "Only location", "Only base salary"],
        answer: 1,
        tip: "Full package and terms determine real value."
      },
      {
        question: "Strong resume bullet includes:",
        options: ["Generic tasks", "Measurable impact", "Long paragraphs", "Buzzwords only"],
        answer: 1,
        tip: "Quantified outcomes show credibility."
      },
      {
        question: "Healthy networking starts with:",
        options: ["Immediate referral requests", "Value-first relationship building", "Mass cold messages", "One-time contact"],
        answer: 1,
        tip: "Long-term trust beats transactional outreach."
      }
    ]
  },
  {
    slug: "digital-literacy-cyber-safety",
    page: "topics/digital-literacy-cyber-safety.html",
    name: "Digital Literacy and Cyber Safety",
    summary: "Protect your identity, devices, and data from common threats.",
    points: ["Account security", "Scam awareness", "Backup and recovery"],
    levels: {
      beginner: ["Use password manager", "Enable 2FA", "Identify basic phishing signals"],
      intermediate: ["Audit account permissions", "Create multi-backup plan", "Harden device settings"],
      advanced: ["Practice incident response checklist", "Segment sensitive accounts", "Use encryption and secure workflows"]
    },
    concepts: ["Attack surface", "Authentication", "Encryption", "Data integrity", "Recovery"],
    terminology: [
      { term: "2FA", meaning: "Two-Factor Authentication adding second identity check." },
      { term: "Phishing", meaning: "Fraud messages designed to steal credentials or money." },
      { term: "Encryption", meaning: "Transforming data so only authorized parties can read it." }
    ],
    modules: [
      { title: "Identity protection", bullets: ["Unique passwords", "2FA on critical accounts", "Review account recovery methods"] },
      { title: "Threat detection", bullets: ["Check links and sender domains", "Avoid urgency traps", "Verify via official channels"] },
      { title: "Backup resilience", bullets: ["Cloud plus local backups", "Test restore monthly", "Protect sensitive backups"] }
    ],
    findMore: [
      "Follow official cybersecurity advisories.",
      "Take beginner security courses from trusted providers.",
      "Read real incident postmortems to learn patterns."
    ],
    whenThingsGoWrong: [
      "Change passwords and revoke active sessions immediately.",
      "Enable fraud alerts and contact relevant service providers.",
      "Preserve evidence (messages, headers, logs) for reporting."
    ],
    references: [
      { title: "CISA Cyber Hygiene", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
      { title: "OWASP", url: "https://owasp.org/" },
      { title: "Google Safety Center", url: "https://safety.google/" }
    ],
    firstAction: "Secure your email account first with unique password and 2FA.",
    warning: "Treat unexpected links, files, and urgent money requests as suspicious by default.",
    quiz: [
      {
        question: "Best password strategy:",
        options: ["Reuse one strong password", "Unique passwords via manager", "Store in plain text", "Use short passwords"],
        answer: 1,
        tip: "Reuse can compromise many accounts at once."
      },
      {
        question: "Phishing often uses:",
        options: ["Urgency and suspicious links", "Clear official workflows", "No action request", "Verified support numbers"],
        answer: 0,
        tip: "Urgency pressure is a common manipulation tactic."
      },
      {
        question: "A robust backup plan includes:",
        options: ["One copy only", "No restore tests", "Multiple backups and restore checks", "Cloud only forever"],
        answer: 2,
        tip: "Backups are useful only if recovery actually works."
      }
    ]
  },
  {
    slug: "home-life-admin",
    page: "topics/home-life-admin.html",
    name: "Home and Life Administration",
    summary: "Reduce stress by systemizing recurring daily responsibilities.",
    points: ["Bills and reminders", "Document organization", "Routine planning"],
    levels: {
      beginner: ["Create due-date dashboard", "Set reminders", "Weekly home reset routine"],
      intermediate: ["Automate recurring payments safely", "Set shared family systems", "Create document backup process"],
      advanced: ["Design annual planning calendar", "Optimize household workflows", "Build contingency plans"]
    },
    concepts: ["Operational friction", "Standardization", "Redundancy", "Maintenance cycles", "Checklists"],
    terminology: [
      { term: "Autopay", meaning: "Automated scheduled payment for recurring bills." },
      { term: "Lifecycle Folder", meaning: "Organized storage for documents by category and validity period." },
      { term: "Contingency", meaning: "Backup plan for disruptions or failures." }
    ],
    modules: [
      { title: "Bill control", bullets: ["Track due dates", "Set autopay carefully", "Review statements monthly"] },
      { title: "Record system", bullets: ["Centralize key docs", "Use naming standard", "Keep emergency copies"] },
      { title: "Routine planning", bullets: ["Weekly chores by block", "Simple meal rhythm", "Inventory check habits"] }
    ],
    findMore: [
      "Use productivity communities with practical templates.",
      "Adopt household planning tools gradually.",
      "Review personal operations books and checklists."
    ],
    whenThingsGoWrong: [
      "Prioritize overdue tasks by impact and deadlines.",
      "Set temporary daily triage list for one week.",
      "Remove complexity and restart with minimum viable system."
    ],
    references: [
      { title: "NerdWallet Budgeting", url: "https://www.nerdwallet.com/article/finance/how-to-budget" },
      { title: "Todoist Productivity Methods", url: "https://todoist.com/productivity-methods" },
      { title: "Lifehacker How-To", url: "https://lifehacker.com/" }
    ],
    firstAction: "Build one dashboard for bills, due dates, and key reminders.",
    warning: "Small admin misses compound into expensive problems over time.",
    quiz: [
      {
        question: "Most reliable way to avoid missed bills:",
        options: ["Memory only", "Due-date dashboard plus reminders", "Checking occasionally", "Ignoring statements"],
        answer: 1,
        tip: "System beats memory for recurring tasks."
      },
      {
        question: "Document retrieval improves with:",
        options: ["Random folder names", "Consistent structure and naming", "Scattered storage", "No backups"],
        answer: 1,
        tip: "Consistency reduces search time and stress."
      },
      {
        question: "When overwhelmed, first fix is:",
        options: ["Add more tools", "Create short priority triage", "Ignore everything", "Start from scratch daily"],
        answer: 1,
        tip: "Short triage cycles restore control quickly."
      }
    ]
  },
  {
    slug: "cooking-eating",
    page: "topics/cooking-eating.html",
    name: "Cooking and Eating",
    summary: "Learn practical cooking, nutrition basics, and sustainable eating habits.",
    points: ["Meal planning", "Nutrition literacy", "Kitchen safety and food hygiene"],
    levels: {
      beginner: ["Cook 5 basic meals", "Understand plate balance", "Follow kitchen hygiene basics"],
      intermediate: ["Plan weekly meals by budget", "Read nutrition labels", "Batch prep efficiently"],
      advanced: ["Design nutrition plans by goals", "Optimize macros and micros", "Cook for multiple dietary needs"]
    },
    concepts: ["Macronutrients", "Portion control", "Glycemic response", "Food safety", "Meal prep"],
    terminology: [
      { term: "Macronutrients", meaning: "Protein, fat, and carbohydrates required in larger amounts." },
      { term: "Cross-contamination", meaning: "Transfer of harmful microbes between foods or surfaces." },
      { term: "Mise en place", meaning: "Preparing and organizing ingredients before cooking." }
    ],
    modules: [
      { title: "Kitchen foundations", bullets: ["Safe knife habits", "Heat control basics", "Clean-as-you-go workflow"] },
      { title: "Eat for energy", bullets: ["Balanced meal structure", "Hydration habits", "Understand label serving sizes"] },
      { title: "Budget meal system", bullets: ["Weekly menu template", "Smart grocery list", "Batch cooking and storage"] }
    ],
    findMore: [
      "Use trusted public health nutrition guidelines.",
      "Follow evidence-based dietitian channels.",
      "Take beginner cooking classes or community workshops."
    ],
    whenThingsGoWrong: [
      "If meal plan fails, restart with 3 repeatable meals.",
      "If budget slips, prioritize whole staples and seasonal produce.",
      "If health symptoms persist, consult qualified medical professionals."
    ],
    references: [
      { title: "USDA MyPlate", url: "https://www.myplate.gov/" },
      { title: "NHS Healthy Eating", url: "https://www.nhs.uk/live-well/eat-well/" },
      { title: "WHO Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }
    ],
    firstAction: "Pick three healthy repeat meals and plan a grocery list for the week.",
    warning: "Avoid extreme diet changes without medical guidance if you have health conditions.",
    quiz: [
      {
        question: "Good beginner meal approach:",
        options: ["Random daily cooking", "3-5 repeatable balanced meals", "Skip protein", "No grocery plan"],
        answer: 1,
        tip: "Repeatable systems increase consistency."
      },
      {
        question: "Cross-contamination means:",
        options: ["Using spices", "Transfer of harmful microbes between foods", "Meal prepping", "Calorie counting"],
        answer: 1,
        tip: "Separate tools and surfaces for raw and ready-to-eat foods."
      },
      {
        question: "When plans fail, first reset should be:",
        options: ["Abandon all habits", "Simplify to minimum viable routine", "Buy expensive gadgets", "Start restrictive diets"],
        answer: 1,
        tip: "Simple, repeatable habits recover momentum."
      }
    ]
  },
  {
    slug: "mental-health-emotional-skills",
    page: "topics/mental-health-emotional-skills.html",
    name: "Mental Health and Emotional Skills",
    summary: "Build emotional strength for stress, setbacks, pressure decisions, and confident communication.",
    points: [
      "Stress management and emotional regulation",
      "Decision-making under pressure",
      "Discipline, confidence, and failure recovery"
    ],
    levels: {
      beginner: [
        "Track stress triggers and calming routines",
        "Use a pause-think-act model in pressure situations",
        "Build a simple daily discipline system"
      ],
      intermediate: [
        "Handle conflicts using structured communication",
        "Use decision frameworks during uncertainty",
        "Recover from failure with review-and-rebuild cycles"
      ],
      advanced: [
        "Coach yourself with resilient inner dialogue",
        "Lead difficult conversations calmly",
        "Build a long-term confidence and discipline architecture"
      ]
    },
    concepts: ["Emotional regulation", "Resilience", "Cognitive reframing", "Discipline loops", "Self-efficacy"],
    terminology: [
      { term: "Stress Trigger", meaning: "A situation or thought pattern that raises stress quickly." },
      { term: "Reframing", meaning: "Reinterpreting a difficult event in a way that supports action." },
      { term: "Self-efficacy", meaning: "Belief that you can execute actions needed for outcomes." }
    ],
    modules: [
      {
        title: "Stress reset protocol",
        bullets: [
          "Name your stress signal early",
          "Use breathing and body reset for 2 minutes",
          "Choose the next small controllable action"
        ]
      },
      {
        title: "Pressure decision model",
        bullets: [
          "Separate facts from assumptions",
          "Identify best, worst, and most likely outcomes",
          "Take reversible actions first"
        ]
      },
      {
        title: "Failure recovery and confidence",
        bullets: [
          "Run a no-blame after-action review",
          "Convert lessons into one behavior change",
          "Build confidence through repeated small wins"
        ]
      }
    ],
    findMore: [
      "Learn evidence-based stress techniques from licensed mental health resources.",
      "Use CBT or mindfulness workbooks from reputable providers.",
      "Join peer accountability communities for discipline habits."
    ],
    whenThingsGoWrong: [
      "If overwhelmed, reduce goals to one essential action today.",
      "If conflict escalates, pause and resume with clear boundaries.",
      "If persistent low mood or anxiety affects functioning, seek qualified professional support."
    ],
    references: [
      { title: "NIMH Coping With Stress", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
      { title: "Mind UK Mental Health A-Z", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/" },
      { title: "Psychology Tools", url: "https://www.psychologytools.com/" }
    ],
    firstAction: "Write your top 3 stress triggers and one healthy response for each.",
    warning: "This is educational guidance, not a substitute for diagnosis or therapy.",
    quiz: [
      {
        question: "Best first move in high stress decision moments?",
        options: ["React immediately", "Pause, breathe, clarify facts", "Avoid deciding", "Ask social media"],
        answer: 1,
        tip: "A short pause improves decision quality under pressure."
      },
      {
        question: "Healthy failure response usually starts with:",
        options: ["Self-attack", "Blaming others", "Reviewing what happened and adjusting", "Quitting quickly"],
        answer: 2,
        tip: "Reflection plus adjustment builds resilience and confidence."
      },
      {
        question: "Discipline improves most with:",
        options: ["Motivation only", "Large sudden goals", "Small consistent systems", "Random effort"],
        answer: 2,
        tip: "Systems outperform mood-based effort over time."
      }
    ]
  },
  {
    slug: "calling-handling-emergency-situations",
    page: "topics/calling-handling-emergency-situations.html",
    name: "Calling and Handling Emergency Situations",
    summary: "Stay calm, call for help clearly, and respond in a structured way while waiting for professional support.",
    points: ["Emergency calling basics", "Scene assessment", "Structured response under stress"],
    levels: {
      beginner: [
        "Memorize local emergency numbers",
        "Practice giving your location clearly",
        "Learn the first safety checks before helping"
      ],
      intermediate: [
        "Use a step-by-step emergency call script",
        "Guide bystanders and assign simple tasks",
        "Document time, symptoms, and changes"
      ],
      advanced: [
        "Run household emergency drills",
        "Prepare emergency information sheets",
        "Coordinate multiple actions until responders arrive"
      ]
    },
    concepts: ["Scene safety", "Triage", "Dispatcher guidance", "Response chain", "Escalation"],
    terminology: [
      { term: "Dispatcher", meaning: "Emergency operator who routes help and gives instructions." },
      { term: "Triage", meaning: "Deciding which situation or person needs the fastest attention." },
      { term: "Scene Safety", meaning: "Checking whether the environment is safe before helping." }
    ],
    modules: [
      {
        title: "Make the emergency call well",
        bullets: [
          "State the exact location first",
          "Describe what happened in one sentence",
          "Answer the dispatcher clearly and stay on the line"
        ]
      },
      {
        title: "Manage the scene",
        bullets: [
          "Check for ongoing danger",
          "Move only if staying creates greater risk",
          "Assign bystanders clear simple roles"
        ]
      },
      {
        title: "Support until help arrives",
        bullets: [
          "Monitor breathing, bleeding, and responsiveness",
          "Follow dispatcher or trained first-aid instructions",
          "Prepare key facts for responders"
        ]
      }
    ],
    findMore: [
      "Learn your local emergency numbers and ambulance process.",
      "Take certified first-aid and CPR training with scenario practice.",
      "Review public emergency preparedness guides from local authorities."
    ],
    whenThingsGoWrong: [
      "If you panic, slow down and say the location first.",
      "If the call drops, call back immediately or send someone else to call.",
      "If the scene becomes unsafe, retreat and update emergency services instead of taking extra risk."
    ],
    references: [
      { title: "Ready.gov Emergency Plans", url: "https://www.ready.gov/plan" },
      { title: "Red Cross Emergency App and Safety", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps.html" },
      { title: "WHO Emergency Care Systems", url: "https://www.who.int/teams/integrated-health-services/clinical-services-and-systems/emergency-critical-and-operative-care/emergency-care" }
    ],
    firstAction: "Write down your local emergency numbers and your full address in an easy-to-access place.",
    warning: "Do not enter unsafe scenes; accurate information to responders is often more valuable than unsafe intervention.",
    quiz: [
      {
        question: "What should you usually give first during an emergency call?",
        options: ["Your opinion", "The exact location", "A long story", "Someone else's number"],
        answer: 1,
        tip: "Location is usually the highest-priority detail for getting help dispatched quickly."
      },
      {
        question: "If the environment is still dangerous, best action is usually:",
        options: ["Rush in anyway", "Retreat to safety and update responders", "Ignore the danger", "End the call"],
        answer: 1,
        tip: "You should avoid becoming another victim."
      },
      {
        question: "A good bystander instruction sounds like:",
        options: ["Someone do something", "You in blue shirt, call emergency services now", "Wait and watch", "Everybody shout together"],
        answer: 1,
        tip: "Specific task assignment reduces confusion."
      }
    ]
  }
];

const ROADMAP = [
  "Days 1-3: Track money habits and set a basic budget.",
  "Days 4-6: Learn legal basics and document important records.",
  "Days 7-9: Build personal safety and emergency protocols.",
  "Days 10-12: Set up first aid readiness and sleep routines.",
  "Days 13-15: Practice stress management and pressure decision skills.",
  "Days 16-18: Practice communication and negotiation scripts.",
  "Days 19-21: Improve resume and job search system.",
  "Days 22-24: Secure digital accounts and backups.",
  "Days 25-27: Create home admin dashboard and checklists.",
  "Days 28-30: Establish cooking and nutrition baseline.",
  "Days 31-32: Practice emergency calling and response steps.",
  "Day 33: Review all tracks and plan next 60 days."
];
