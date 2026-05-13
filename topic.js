const LEVELS = ["beginner", "intermediate", "advanced"];
const LEVEL_LABELS = {
  beginner: "Basics",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

const TOPIC_VISUALS = {
  "personal-finance": {
    emoji: "💰",
    tagline: "Because 'I'll figure out money later' is how you end up broke at 30 😅",
    funFact: "If you save just $5 a day starting at age 15, you could have over $55,000 by age 30 — just from one small daily choice!",
    moduleEmojis: ["📊", "💳", "📈", "🏦", "🎯", "💡"]
  },
  "law-for-daily-life": {
    emoji: "⚖️",
    tagline: "Know your rights — so nobody can ever take advantage of you",
    funFact: "You CAN get a refund on a defective product even if the store says 'no refunds'. Consumer protection laws exist to protect YOU!",
    moduleEmojis: ["📝", "🔍", "💬", "📋", "🛡️", "🏛️"]
  },
  "personal-safety-defence": {
    emoji: "🛡️",
    tagline: "Stay safe, stay smart — prevention beats reaction every time",
    funFact: "Most people freeze in dangerous situations because they've never mentally rehearsed what to do. Preparing now changes that completely.",
    moduleEmojis: ["👀", "🗣️", "📱", "🗺️", "💪", "🔒"]
  },
  "health-first-aid": {
    emoji: "🏥",
    tagline: "Your body is your only permanent home — time to take care of it!",
    funFact: "Learning CPR takes about 30 minutes and could one day save the life of someone you love. Red Cross offers free training sessions!",
    moduleEmojis: ["🩹", "🚑", "😴", "🥗", "💊", "🏃"]
  },
  "mental-health-emotional-skills": {
    emoji: "🧠",
    tagline: "Your mental fitness matters just as much as your physical fitness",
    funFact: "The 'fight or flight' stress response takes just 90 seconds to peak and fade — but only if you don't keep feeding it with anxious thoughts!",
    moduleEmojis: ["😤", "🤔", "💪", "🔄", "🌱", "🏆"]
  },
  "communication-negotiation": {
    emoji: "💬",
    tagline: "The one skill that levels up EVERY part of your life — friendships, jobs, everything",
    funFact: "People who know how to negotiate earn 7–15% more over their careers. That's tens of thousands of dollars just for knowing how to ask!",
    moduleEmojis: ["🗣️", "👂", "🤝", "📝", "⚡", "🎯"]
  },
  "career-work-literacy": {
    emoji: "🚀",
    tagline: "Build the career you actually want — not just the one that happens to you",
    funFact: "Around 80% of jobs are filled through connections, not job ads. The people you know — and how you treat them — matter more than you think!",
    moduleEmojis: ["📄", "🤝", "💼", "🎯", "💡", "📈"]
  },
  "digital-literacy-cyber-safety": {
    emoji: "🔐",
    tagline: "Stay one step ahead of scammers and hackers online",
    funFact: "The most common password is still '123456'. Hackers crack it in under 1 second. A password manager changes everything — for free!",
    moduleEmojis: ["🔑", "🎣", "💾", "🔒", "👾", "📱"]
  },
  "home-life-admin": {
    emoji: "🏠",
    tagline: "Adult life skills they forgot to teach you at school — until now",
    funFact: "Most people accidentally pay hundreds in late fees, forgotten subscriptions, and avoidable costs every year. A few simple habits stop all of it.",
    moduleEmojis: ["🧾", "🔧", "📋", "🛒", "📅", "💡"]
  },
  "cooking-eating": {
    emoji: "🍳",
    tagline: "Cook your own food = save money + eat better + impress literally everyone",
    funFact: "People who cook at home save an average of $3,000–$5,000 a year compared to eating out. That's a real holiday fund from just cooking!",
    moduleEmojis: ["🥘", "🔪", "🥗", "🛒", "⏱️", "🍽️"]
  },
  "calling-handling-emergency-situations": {
    emoji: "🚨",
    tagline: "When seconds count, knowing what to do can save a life",
    funFact: "Emergency dispatchers are trained to guide you through the entire situation over the phone. You don't need to know everything — just call!",
    moduleEmojis: ["📞", "🚒", "🩺", "🧯", "🏃", "📋"]
  }
};

const MENTAL_HEALTH_LEVEL_CONTENT = {
  beginner: {
    intro: "Feeling stressed, anxious, or just overwhelmed sometimes? That's literally part of being a teenager. 😅 The good news: your brain can be trained to handle it way better. Let's start building your emotional toolkit.",
    modules: [
      {
        title: "Stress management basics",
        bullets: [
          "Map top personal stress triggers and early body signals",
          "Use 90-second pause + slow breathing to interrupt panic reactions",
          "Create a simple reset list: water, short walk, journal, one call"
        ]
      },
      {
        title: "Decision-making under pressure",
        bullets: [
          "Separate facts from fear-based assumptions",
          "Use pause-think-act before responding",
          "Prefer reversible next actions when uncertain"
        ]
      },
      {
        title: "Discipline and confidence habits",
        bullets: [
          "Use tiny daily commitments (10-15 minutes) to build consistency",
          "Track completion streaks weekly",
          "Build confidence through repeated small wins"
        ]
      }
    ],
    concepts: ["Stress response", "Emotional regulation", "Micro-discipline", "Self-talk", "Confidence loops"],
    terminology: [
      { term: "Emotional Regulation", meaning: "Managing emotional intensity so actions stay aligned with goals." },
      { term: "Cognitive Reframing", meaning: "Reinterpreting events in a way that supports useful action." },
      { term: "Self-efficacy", meaning: "Belief in your ability to execute the actions required." }
    ],
    questions: [
      {
        q: "What is the first move when stress spikes suddenly?",
        a: "Pause, regulate breathing, and identify one controllable next step before taking action."
      }
    ],
    findMore: [
      "Use therapist-backed stress worksheets and journaling prompts.",
      "Learn evidence-based breathing or grounding methods.",
      "Follow licensed mental health educators for practical tools."
    ],
    whenThingsGoWrong: [
      "If overwhelmed, reduce your plan to one essential action for today.",
      "If anxiety persists and affects function, seek qualified professional support.",
      "If conflict escalates, pause and restart with boundaries and clear intent."
    ],
    references: [
      { title: "NIMH Stress Resources", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
      { title: "Psychology Tools", url: "https://www.psychologytools.com/" },
      { title: "Mind UK Guides", url: "https://www.mind.org.uk/information-support/" }
    ],
    quiz: [
      {
        question: "When stress spikes suddenly, the most effective first response is:",
        options: ["Immediately react to the situation", "Pause, slow your breathing, and name what is happening", "Distract yourself with entertainment", "Avoid thinking about it entirely"],
        answer: 1,
        tip: "A short conscious pause prevents automatic reactive decisions you may regret."
      },
      {
        question: "Building daily discipline is most effective through:",
        options: ["Large ambitious goals set monthly", "Small consistent daily commitments of 10-15 minutes", "Waiting until you feel motivated", "Replacing habits all at once"],
        answer: 1,
        tip: "Tiny consistent actions build the neural pathways that make discipline automatic."
      },
      {
        question: "Cognitive reframing means:",
        options: ["Pretending problems do not exist", "Reinterpreting a situation to find a response that supports action", "Blaming circumstances for everything", "Forcing yourself to feel positive"],
        answer: 1,
        tip: "Reframing does not deny reality—it shifts focus from stuck to what is actionable."
      }
    ]
  },
  intermediate: {
    intro: "You've got the basics — now let's train for real life. Conflicts, failures, tough situations under pressure... this level is where you build actual mental toughness.",
    modules: [
      {
        title: "Conflict resolution in real situations",
        bullets: [
          "Use fact-impact-request language in difficult conversations",
          "Set boundaries without aggression",
          "De-escalate tone before solving content"
        ]
      },
      {
        title: "Failure analysis and rebound",
        bullets: [
          "Run no-blame after-action reviews",
          "Extract one process fix per failure",
          "Use 72-hour reset plans to recover momentum"
        ]
      },
      {
        title: "Pressure decision framework",
        bullets: [
          "Check best/worst/most likely outcomes",
          "Choose actions with high upside and controlled downside",
          "Review decisions after outcome to improve judgment"
        ]
      }
    ],
    concepts: ["Response inhibition", "Recovery cycles", "Boundary communication", "Decision hygiene", "Resilience"],
    terminology: [
      { term: "After-Action Review", meaning: "Structured reflection on what happened, why, and what to change." },
      { term: "Response Inhibition", meaning: "Ability to stop impulsive reactions before acting." },
      { term: "Distress Tolerance", meaning: "Capacity to function while uncomfortable emotions are present." }
    ],
    questions: [
      {
        q: "How do I recover confidence after a major mistake?",
        a: "Separate identity from event, identify concrete lessons, and rebuild trust through consistent small execution."
      }
    ],
    findMore: [
      "Practice role-play for difficult conversations.",
      "Use resilience workbooks grounded in CBT methods.",
      "Join accountability groups for discipline consistency."
    ],
    whenThingsGoWrong: [
      "If you freeze under pressure, switch to a prewritten action checklist.",
      "If conflict repeats, document patterns and renegotiate boundaries.",
      "If discipline drops, reduce goals and restart minimum daily habit."
    ],
    references: [
      { title: "APA Resilience Guide", url: "https://www.apa.org/topics/resilience" },
      { title: "Greater Good in Action", url: "https://ggia.berkeley.edu/" }
    ],
    quiz: [
      {
        question: "An after-action review after a failure is most useful when it:",
        options: ["Focuses on who is to blame", "Analyses what happened without judgment and identifies one concrete improvement", "Is skipped to save time", "Confirms everything was fine"],
        answer: 1,
        tip: "Blame slows learning; process-focused review builds actual resilience."
      },
      {
        question: "Distress tolerance means:",
        options: ["Having no emotions", "Being able to function effectively while uncomfortable feelings are present", "Suppressing all negative emotions", "Waiting until you feel better to act"],
        answer: 1,
        tip: "High distress tolerance allows action even in difficult emotional states."
      },
      {
        question: "Recovering from a confidence setback fastest involves:",
        options: ["Avoiding the area where you failed", "Returning to simple, proven routines and building with small wins", "Waiting passively for confidence to return", "Seeking external validation only"],
        answer: 1,
        tip: "Confidence is rebuilt through action, not through waiting or thinking."
      }
    ]
  },
  advanced: {
    intro: "This is elite-level emotional intelligence — the mindset that separates people who thrive under pressure from those who break. If you've made it here, you're ready.",
    modules: [
      {
        title: "Long-term discipline design",
        bullets: [
          "Build identity-based habits tied to values and standards",
          "Use weekly and monthly review loops",
          "Design environment defaults that reduce friction"
        ]
      },
      {
        title: "Confident communication and leadership",
        bullets: [
          "Lead tense conversations with calm structure",
          "Balance empathy with clear accountability",
          "Coach others through failure without blame"
        ]
      }
    ],
    concepts: ["Identity-based habits", "Emotional agility", "Composure", "Self-leadership", "Antifragility"],
    terminology: [
      { term: "Emotional Agility", meaning: "Flexibly responding to emotions without being controlled by them." },
      { term: "Antifragility", meaning: "Becoming stronger after stress through adaptation and learning." }
    ],
    questions: [
      {
        q: "How do advanced learners maintain confidence in repeated uncertainty?",
        a: "By relying on process quality, review loops, and values-based execution rather than outcome guarantees."
      }
    ],
    findMore: [
      "Study performance psychology for high-pressure environments.",
      "Use mentoring or coaching to refine leadership communication.",
      "Build personal operating principles for decisions and recovery."
    ],
    whenThingsGoWrong: [
      "When emotionally overloaded, temporarily reduce commitments and protect sleep.",
      "If confidence drops, return to proven routines and measurable execution.",
      "Seek clinical support when symptoms are persistent or severe."
    ],
    references: [
      { title: "NHS Stress and Anxiety", url: "https://www.nhs.uk/mental-health/" },
      { title: "Verywell Mind Emotional Regulation", url: "https://www.verywellmind.com/" }
    ],
    quiz: [
      {
        question: "Identity-based habits are more durable than goal-based habits because:",
        options: ["They require less effort", "They tie actions to who you are becoming, not just what you want to achieve", "Goals are not motivating", "They do not require any planning"],
        answer: 1,
        tip: "Voting for your identity through each small action compounds over time into lasting character."
      },
      {
        question: "Emotional agility means you can:",
        options: ["Control all your emotions completely", "Respond flexibly to emotions without being controlled by them", "Eliminate negative emotions", "Avoid difficult situations"],
        answer: 1,
        tip: "Agile responses to emotions preserve your ability to choose how you act."
      },
      {
        question: "Antifragility in personal development means:",
        options: ["Avoiding all challenges and stress", "Becoming stronger and more capable because of stress and adversity", "Staying unchanged under pressure", "Protecting yourself from all difficulty"],
        answer: 1,
        tip: "Managed challenge followed by recovery builds greater capacity than comfort alone."
      }
    ]
  }
};

const PERSONAL_FINANCE_LEVEL_CONTENT = {
  beginner: {
    intro: "Before you dream about investing, make sure your money basics are solid first. Think of it like leveling up in a game — you can't skip to the boss battle! 🎮 Let's build your base.",
    modules: [
      {
        title: "Money basics and account setup",
        bullets: [
          "Create income-expense tracker",
          "Learn emergency fund target",
          "Open regulated bank and brokerage accounts"
        ]
      },
      {
        title: "Understand simple investing terms",
        bullets: [
          "What is an ETF and why it is popular",
          "Difference between stock, mutual fund, and ETF",
          "How risk and time horizon affect choices"
        ]
      }
    ],
    concepts: ["Budgeting", "Emergency fund", "Compounding", "Risk", "Diversification"],
    terminology: [
      { term: "ETF", meaning: "Exchange Traded Fund; a basket of assets traded like a stock." },
      { term: "Brokerage", meaning: "Regulated platform used to buy and sell investments." },
      { term: "KYC", meaning: "Know Your Customer verification required by regulated financial platforms." }
    ],
    questions: [
      {
        q: "Where can a beginner invest?",
        a: "Use regulated channels first: licensed brokers, government-backed savings options, or low-cost broad index funds/ETFs."
      },
      {
        q: "What is the minimum age to invest?",
        a: "This depends on your country. Many places require legal adult age for direct accounts, while minors may invest via guardian/custodial accounts."
      }
    ],
    findMore: [
      "Check your country's securities regulator website for beginner guides.",
      "Use official investor education portals before choosing platforms."
    ],
    whenThingsGoWrong: [
      "If scammed, freeze accounts and report immediately to bank and platform.",
      "If losses happen, stop revenge trading and review allocation calmly."
    ],
    references: [
      { title: "Investor.gov Basics", url: "https://www.investor.gov/introduction-investing" },
      { title: "Investopedia ETFs", url: "https://www.investopedia.com/terms/e/etf.asp" },
      { title: "FINRA Investor Resources", url: "https://www.finra.org/investors" }
    ],
    quiz: [
      {
        question: "ETF usually means:",
        options: ["One private loan", "A tradable basket of assets", "A tax form", "A fixed deposit"],
        answer: 1,
        tip: "ETFs can spread risk through diversified holdings."
      },
      {
        question: "Best first step before investing large amounts:",
        options: ["Borrow and invest", "Build emergency fund and basic plan", "Copy random tips", "Trade daily"],
        answer: 1,
        tip: "Safety base first, growth next."
      },
      {
        question: "Which is an example of a fixed monthly expense?",
        options: ["Restaurant meals", "Monthly rent or mortgage payment", "Clothing purchases", "Entertainment spending"],
        answer: 1,
        tip: "Fixed expenses stay the same each month and are easiest to plan around."
      }
    ]
  },
  intermediate: {
    intro: "You know the basics — now let's be smart about where your money actually goes. Every dollar should have a job, and you're about to become the manager.",
    modules: [
      {
        title: "Asset allocation and platform choice",
        bullets: [
          "Define goals by timeline",
          "Compare platform fees and protections",
          "Set percentage-based allocation plan"
        ]
      },
      {
        title: "Execution discipline",
        bullets: [
          "Automate monthly investing",
          "Rebalance periodically",
          "Avoid emotional overtrading"
        ]
      }
    ],
    concepts: ["Asset allocation", "Rebalancing", "Expense ratio", "Drawdown", "Tax efficiency"],
    terminology: [
      { term: "Expense Ratio", meaning: "Annual fund management cost charged to investors." },
      { term: "Rebalancing", meaning: "Returning a portfolio to target allocation percentages." },
      { term: "Volatility", meaning: "How much investment value swings over time." }
    ],
    questions: [
      {
        q: "How do I pick between ETFs and mutual funds?",
        a: "Compare total cost, liquidity, tracking quality, tax treatment, and simplicity for your strategy."
      }
    ],
    findMore: ["Read fund fact sheets and fee disclosures before investing."],
    whenThingsGoWrong: ["If portfolio drifts badly, rebalance using predefined rules instead of impulse decisions."],
    references: [
      { title: "Bogleheads Investment Philosophy", url: "https://www.bogleheads.org/wiki/Bogleheads%C2%AE_investment_philosophy" },
      { title: "Morningstar Investing Classroom", url: "https://www.morningstar.com/lp/investing-classroom" }
    ],
    quiz: [
      {
        question: "Asset allocation primarily refers to:",
        options: ["Picking individual stocks", "How you divide investments across different asset classes by goal and timeline", "Avoiding bonds entirely", "Daily trading activity"],
        answer: 1,
        tip: "The right allocation balances growth potential with the risk you can tolerate."
      },
      {
        question: "Rebalancing a portfolio means:",
        options: ["Selling all assets when markets drop", "Returning allocation to target percentages when it drifts", "Adding only new asset types", "Avoiding loss-making positions"],
        answer: 1,
        tip: "Regular rebalancing keeps your risk profile in line with your goals."
      },
      {
        question: "Automating monthly investing primarily helps by:",
        options: ["Eliminating all investment risk", "Removing emotional timing decisions and enforcing consistency", "Guaranteeing higher returns", "Reducing taxes automatically"],
        answer: 1,
        tip: "Automation removes the temptation to delay or skip during market uncertainty."
      }
    ]
  },
  advanced: {
    intro: "This is how real wealth is built — not luck, not shortcuts — just smart systems, discipline, and good decisions repeated over time. Welcome to advanced money thinking.",
    modules: [
      {
        title: "Master ETFs and advanced investment instruments",
        bullets: [
          "ETFs: Why professionals use them - lower costs than mutual funds (0.03-0.3% vs 0.5-1%+), tax efficiency through in-kind creation, easy trading like stocks",
          "Who uses ETFs: Individual investors (cost efficiency), institutional investors (trading and rebalancing speed), portfolio managers (sector tilts)",
          "Why they work: Passive index ETFs track market efficiently; active ETFs offer specialization (dividend focus, sector play, factor tilting)",
          "ETF trading mechanics: Trade during market hours (liquid), spreads (bid-ask) matter for frequent traders, corporate actions (dividends automatic)",
          "Compare ETF vs mutual fund: ETF cheaper, trades intraday; mutual fund locked until market close, often have minimum hold periods",
          "Know your ETF: expense ratio, tracking error, fund size, underlying benchmark, dividend yield, tax efficiency (high portfolio turnover = more capital gains)"
        ]
      },
      {
        title: "Design policy-based investing and governance",
        bullets: [
          "Write Investment Policy Statement (IPS): goals, timeline, risk tolerance, asset allocation, rebalancing rules, constraints",
          "Set rule-based rebalancing: trigger when allocation drifts 5% from target, not emotion-based changes",
          "Document all decisions in checklist: Why this asset? What's the role in portfolio? When will I review?",
          "Run scenario analysis: What happens if stocks fall 30%? Bonds rise 20%? Inflation spikes? Do I stay the course?",
          "Prepare for tax management: Harvest losses opportunistically, use tax-deferred accounts strategically, know long-term vs short-term gains rates"
        ]
      },
      {
        title: "Manage behavioral risks and volatility",
        bullets: [
          "Sequence risk: early-sequence bad returns hurt more than late ones (withdrawal phase), stress-test your plan",
          "Behavioral bias: anchoring (past prices), recency (recent losses feel permanent), overconfidence (thinking you can beat market)",
          "Volatility reality: 20% drawdowns are normal in equity portfolios; staying invested through them historically rewarded patience",
          "Rebalancing discipline: Buying low (rebalancing into down markets) is hardest psychological test; use rules not emotions"
        ]
      }
    ],
    concepts: ["ETF mechanics", "Risk budgeting", "Behavioral finance", "Tax optimization", "IPS governance", "Sequence planning"],
    terminology: [
      { term: "ETF Expense Ratio", meaning: "Annual percentage cost to manage the fund, charged automatically from returns." },
      { term: "Tracking Error", meaning: "Difference between ETF returns and its target benchmark (lower is better)." },
      { term: "In-kind Creation", meaning: "ETF creation mechanism allowing institutional investors to create shares without triggering capital gains—improves tax efficiency." },
      { term: "Capital Gains Distribution", meaning: "Taxable distribution when fund sells holdings at profit; ETFs minimize this vs mutual funds." },
      { term: "Factor Exposure", meaning: "Tilting toward specific characteristics (value, momentum, quality) beyond basic market cap weighting." },
      { term: "Correlation", meaning: "Degree to which two assets move together; negative correlation provides better diversification." },
      { term: "Sequence Risk", meaning: "Order of returns affecting outcomes, especially during withdrawal phase." },
      { term: "IPS", meaning: "Investment Policy Statement with strategy, rules, and governance." }
    ],
    questions: [
      {
        q: "Why do institutional investors prefer ETFs for trading rebalancing?",
        a: "ETFs trade during market hours with tight spreads (liquid), allowing rapid position changes. Mutual funds close at day-end, limiting flexibility for active management."
      },
      {
        q: "How does ETF tax efficiency beat mutual funds?",
        a: "ETF in-kind creation mechanics minimize realized gains. When creating new shares, funds trade securities with institutional investors without selling, avoiding capital gains distributions."
      },
      {
        q: "A core-satellite strategy mixes cheap broad market ETFs with sector-specific ETFs. Why does this work?",
        a: "Core (70%): indexed broad market ETF gets market returns cheaply. Satellite (30%): targeted sector ETFs for conviction bets. Keeps costs low while allowing higher-conviction positions."
      },
      {
        q: "Your portfolio lost 25% in one year. Should you rebalance or wait?",
        a: "Follow your IPS rule. If IPS says trigger at 5% drift, rebalance (buy low). Discipline through downturns is what separates successful long-term investors from emotional ones."
      }
    ],
    findMore: [
      "Read fund prospectuses and fact sheets: understand what you own",
      "Study CFA Institute curriculum on portfolio management",
      "Join investment clubs discussing strategy to test your thinking"
    ],
    whenThingsGoWrong: [
      "Market crash: follow IPS rules, don't panic sell; historical recoveries always came",
      "Tax complication: consult tax advisor on ETF placement and harvest strategy",
      "Portfolio drift: rebalance using rules, not gut feeling"
    ],
    references: [
      { title: "Vanguard ETF Resources", url: "https://investor.vanguard.com/etfs/" },
      { title: "CFA Institute Investment Foundations", url: "https://www.cfainstitute.org/en/programs/investment-foundations" },
      { title: "Morningstar ETF Education", url: "https://www.morningstar.com/etfs" },
      { title: "CFRA ETF Analysis", url: "https://www.cfraresearch.com/" }
    ],
    quiz: [
      {
        question: "An Investment Policy Statement (IPS) serves to:",
        options: ["Replace a financial advisor completely", "Document strategy, rules, and constraints before markets move emotionally", "Guarantee positive returns", "Track daily stock movements"],
        answer: 1,
        tip: "IPS creates discipline by defining rules before emotional situations arise."
      },
      {
        question: "Sequence of returns risk matters most during:",
        options: ["Early accumulation years", "The withdrawal phase of retirement", "Periods of low inflation", "Bull market peaks only"],
        answer: 1,
        tip: "Poor returns early in retirement reduce capital available for later recovery."
      },
      {
        question: "Tax-loss harvesting means:",
        options: ["Losing money on purpose", "Selling losing assets to offset taxable gains strategically", "Avoiding taxes completely", "Buying more assets at year end"],
        answer: 1,
        tip: "Strategic harvesting reduces net capital gains tax without abandoning your strategy."
      }
    ]
  }
};

// LAW FOR DAILY LIFE - Everyday scenarios with practical guidance
const LAW_LEVEL_CONTENT = {
  beginner: {
    intro: "You have way more rights than you probably know about! Refund on a broken product? Yes! Protection from sneaky contracts? Absolutely! Let's find out what the law actually says.",
    modules: [
      {
        title: "Keep records for all important transactions",
        bullets: [
          "Save receipts and proof of payment for every purchase",
          "Take photos of product condition when delivered",
          "Screenshot online conversations and confirmations",
          "Write down dates, times, and who you spoke with"
        ]
      },
      {
        title: "Understand basic consumer rights in common scenarios",
        bullets: [
          "Defective product? You can demand refund or replacement within reasonable period",
          "Wrong item received? Request return and correction at seller's cost",
          "Your rental deposit not returned? Document and escalate to housing authority",
          "Unauthorized charge on card? Report fraud to bank immediately"
        ]
      },
      {
        title: "Read and understand contracts before signing",
        bullets: [
          "Never sign without reading at least the core terms and penalties clauses",
          "Ask questions on anything unclear—silence doesn't protect you",
          "Identify the exact end date and any auto-renewal clauses",
          "Check for hidden fees or conditions in small print"
        ]
      }
    ],
    concepts: ["Consent", "Terms of agreement", "Liability", "Consumer rights", "Documentation"],
    terminology: [
      { term: "Warranty", meaning: "Promise that a product meets certain quality standards for a set time." },
      { term: "Refund", meaning: "Return of money after canceling a purchase or when goods are defective." },
      { term: "Auto-renewal", meaning: "Subscription automatically extending and charging unless you cancel." }
    ],
    questions: [
      {
        q: "A seller refuses a refund for a defective item. What's your first action?",
        a: "Send a written complaint (email/letter) with photos and proof of defect. Keep copies. Escalate to consumer protection authority if no response in 7-14 days."
      },
      {
        q: "Is a verbal promise to fix something legally binding?",
        a: "It may be harder to prove. Written confirmation (email, text, or contract) is always stronger evidence in disputes."
      }
    ],
    findMore: [
      "Check your country's consumer protection law on government website",
      "Review sample complaint templates from consumer rights NGOs",
      "Learn how to file with ombudsman or consumer forums"
    ],
    whenThingsGoWrong: [
      "Collect all evidence: emails, receipts, photos, transaction records",
      "Send formal written notice giving seller 7-14 days to respond",
      "If ignored, file with ombudsman or consumer protection authority",
      "Document every step and keep copies of all communication"
    ],
    references: [
      { title: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/" },
      { title: "FTC Consumer Information", url: "https://consumer.ftc.gov/" },
      { title: "Which? Consumer Rights", url: "https://www.which.co.uk/consumer-rights" }
    ],
    firstAction: "Create a folder to store all receipts, contracts, and confirmations for the next month.",
    warning: "Not legal advice. Consult local consumer protection agencies for your specific situation.",
    quiz: [
      {
        question: "You buy a phone that stops working in 3 months. What counts most in proving your case?",
        options: ["Your opinion", "Photos and date of purchase", "Telling the store owner", "Posting on social media"],
        answer: 1,
        tip: "Physical evidence and timeline are key to winning disputes."
      },
      {
        question: "Before signing a contract, you should:",
        options: ["Trust the company", "Read penalties and end-date clauses", "Skip to signature", "Have someone else sign for you"],
        answer: 1,
        tip: "You're legally bound to what you sign, even if you didn't read it."
      },
      {
        question: "Why should you save receipts and written records?",
        options: ["For decoration", "As evidence in case of disputes or faulty products", "To avoid paying taxes", "Sellers require it by law"],
        answer: 1,
        tip: "Evidence is the foundation of any effective complaint or claim."
      }
    ]
  },
  intermediate: {
    intro: "When things go wrong, knowing how to fight back properly is a superpower. No shouting needed — just the right steps in the right order, and you'll be surprised how far that gets you.",
    modules: [
      {
        title: "Use formal complaint and escalation procedures",
        bullets: [
          "Know the three-tier system: direct complaint → ombudsman → court",
          "Send formal demand notice with specific deadline (7-30 days depending on jurisdiction)",
          "Use registered mail or email with read receipt for proof of delivery",
          "Document the company's response (or lack thereof) with timestamps",
          "File ombudsman complaint if no satisfactory resolution within stipulated period"
        ]
      },
      {
        title: "Understand contract terms and negotiate key points",
        bullets: [
          "Identify non-negotiable vs. negotiable clauses before committing",
          "Request written clarification of ambiguous terms in contract",
          "Ask seller to change unfavorable penalty or cancellation clauses",
          "Keep all correspondence proposing changes for your protection",
          "Never agree to vague terms like 'reasonable' or 'as needed' without definition"
        ]
      },
      {
        title: "Practice common everyday rights scenarios",
        bullets: [
          "Rental dispute: Document condition at check-in/out with photos, demand itemized charges",
          "Employment: Keep copies of offer letter and employment terms; document policy violations",
          "Loan or credit: Request written explanation of fees; verify all charges are disclosed",
          "Insurance claim denial: Request written reason; appeal using ombudsman if unreasonable"
        ]
      }
    ],
    concepts: ["Escalation pathway", "Evidence standards", "Liability limits", "Dispute resolution", "Documentation timeline"],
    terminology: [
      { term: "Ombudsman", meaning: "Official who investigates complaints against organizations outside of court." },
      { term: "Registered Mail", meaning: "Postal service with proof of sending and delivery acceptance." },
      { term: "Burden of Proof", meaning: "Requirement to show evidence that supports your claim." }
    ],
    questions: [
      {
        q: "Your landlord won't return half your deposit claiming 'damage.' What's the right sequence?",
        a: "Send written demand with itemized proof of what you paid and photos of acceptable condition. If no response in 30 days, file with housing authority/ombudsman. Keep all evidence."
      },
      {
        q: "Can you be held to a contract term you didn't understand?",
        a: "Legally, yes, if you signed it. However, if the term is hidden/unclear, some jurisdictions allow you to argue unfairness. Prevention is better: ask for clarification before signing."
      }
    ],
    findMore: [
      "Study sample complaint letters and escalation templates",
      "Understand your local ombudsman service and filing process",
      "Learn about small claims court procedures in your area"
    ],
    whenThingsGoWrong: [
      "If escalation fails, consult a lawyer for assessment before formal legal action",
      "Keep all original evidence and copies in safe storage",
      "Set calendar reminders for legal deadlines (statutes of limitation vary by issue)"
    ],
    references: [
      { title: "Nolo Legal Encyclopedia", url: "https://www.nolo.com/legal-encyclopedia" },
      { title: "Courts.gov Self-Help Resources", url: "https://www.courts.gov/self-help-info" },
      { title: "Legal Aid Organizations", url: "https://www.lawhelp.org/" }
    ],
    quiz: [
      {
        question: "The best way to send a formal complaint is:",
        options: ["Text message", "Registered mail or email with read receipt", "Shouting at the store", "Social media post"],
        answer: 1,
        tip: "You need proof of delivery for legal cases."
      },
      {
        question: "What is an ombudsman?",
        options: ["A type of contract", "An official who investigates complaints against organizations", "A court judge", "A legal document template"],
        answer: 1,
        tip: "Ombudsmen provide free complaint resolution outside formal courts."
      },
      {
        question: "When disputing a rental deposit, the strongest evidence is:",
        options: ["Verbal agreement only", "Timestamped photos of condition at check-in and check-out", "Social media posts", "A witness statement with no photos"],
        answer: 1,
        tip: "Photographic evidence at move-in and move-out is the strongest proof of condition."
      }
    ]
  },
  advanced: {
    intro: "Advanced legal literacy that most adults don't even have. This is how you read the fine print, negotiate better deals, and make sure nobody ever catches you off guard again.",
    modules: [
      {
        title: "Negotiate and draft contract terms strategically",
        bullets: [
          "Map power dynamics—who needs the deal more determines leverage",
          "Identify interests beyond stated positions to find creative solutions",
          "Draft counter-proposals with specific language to reduce ambiguity",
          "Use precedent (other similar contracts) to justify your terms",
          "Protect yourself with defined remedies, termination clauses, and limitation of liability"
        ]
      },
      {
        title: "Build strong cases for formal dispute resolution",
        bullets: [
          "Map legal precedent: research similar cases and outcomes in your jurisdiction",
          "Build timeline with dated evidence: emails, photos, witness statements",
          "Quantify losses: calculate actual cost, consequential damages, and lost opportunity",
          "Prepare responses to common counterarguments the other side may use",
          "Practice presenting your case clearly and calmly in written and verbal form"
        ]
      },
      {
        title: "Navigate advanced scenarios: employment, housing, and financial",
        bullets: [
          "Employment: Understand discrimination laws, wage requirements, non-compete enforceability",
          "Housing: Know tenant rights, eviction procedures, and habitability standards",
          "Credit/Loans: Challenge wrong reports, verify disclosures, assess APR calculations",
          "Intellectual property: Understand copyright basics for content creators; know fair use limits"
        ]
      }
    ],
    concepts: ["Contract drafting", "Negotiation tactics", "Legal precedent", "Damages calculation", "Arbitration vs. litigation"],
    terminology: [
      { term: "Arbitration Clause", meaning: "Agreement to resolve disputes privately outside courts, binding on both parties." },
      { term: "Damages", meaning: "Financial compensation awarded for losses caused by another's breach or wrongdoing." },
      { term: "Non-compete", meaning: "Contract restricting you from working for competitors for a specified time/area." }
    ],
    questions: [
      {
        q: "You're offered a job with a 2-year non-compete clause covering your entire country. What should you negotiate?",
        a: "Request limitations: reduce duration to 6-12 months, limit geography to your actual working area, exclude basic skills, specify what counts as competitive work."
      },
      {
        q: "What's the advantage of arbitration vs. going to small claims court?",
        a: "Arbitration is faster and more private but usually binding with no appeal right. Court is slower but provides appeals and transparent procedures. Choose arbitration if speed matters, court if you might lose and want to appeal."
      }
    ],
    findMore: [
      "Study contract law basics from law school resources or textbooks",
      "Research your jurisdiction's small claims and arbitration procedures",
      "Review legal precedent databases for cases similar to yours"
    ],
    whenThingsGoWrong: [
      "If unsure about legal standing, seek consultation (often free initial calls)",
      "Understand statute of limitations—don't delay beyond filing deadlines",
      "Consider mediation before formal legal action as a cost-saving step"
    ],
    references: [
      { title: "Rocket Lawyer Contract Templates", url: "https://www.rocketlawyer.com/" },
      { title: "LawDepot Legal Documents", url: "https://www.lawdepot.com/" },
      { title: "American Bar Association Resources", url: "https://www.americanbar.org/groups/public_services/mmedia/" }
    ],
    quiz: [
      {
        question: "An arbitration clause in a contract means disputes will be resolved:",
        options: ["In public court", "Privately outside court, and the decision is usually binding", "By both parties ignoring it", "Only through mediation"],
        answer: 1,
        tip: "Arbitration clauses limit your right to court appeal—read them carefully before signing."
      },
      {
        question: "A limitation of liability clause in a contract:",
        options: ["Is purely decorative", "Caps the amount the other party must pay if they breach", "Guarantees full compensation", "Only applies to employment contracts"],
        answer: 1,
        tip: "These clauses can significantly reduce recovery even when you are fully in the right."
      },
      {
        question: "When negotiating contract terms, the best time to request changes is:",
        options: ["After signing", "Before signing, with specific written counter-proposals", "During a dispute", "When the other party is unavailable"],
        answer: 1,
        tip: "Pre-signing negotiation is always more effective than post-dispute arguments."
      }
    ]
  }
};

// PERSONAL SAFETY AND SELF-DEFENCE - Prevention, de-escalation, and response
const SAFETY_LEVEL_CONTENT = {
  beginner: {
    intro: "Most dangerous situations are actually avoidable. The real secret? Awareness and preparation before anything happens. Let's build the habits that keep you safe every single day.",
    modules: [
      {
        title: "Create daily awareness routines",
        bullets: [
          "Scan exits and people when entering any space",
          "Keep headphones at low volume or use only one ear",
          "Trust your gut—if something feels off, leave or move away",
          "Avoid obvious distraction traps: phone, valuables, or appearing lost",
          "Share your location with trusted contacts using live-sharing apps"
        ]
      },
      {
        title: "Establish emergency communication protocols",
        bullets: [
          "Create a check-in buddy system with trusted friends or family",
          "Agree on simple signals: 'I'm safe' text at specific times or if no text by time X, investigate",
          "Save emergency numbers in phone plus written backup",
          "Memorize one trusted adult's phone number in case phone is lost",
          "Know nearest police station, hospital, and community help hotline for your area"
        ]
      },
      {
        title: "Practice verbal boundary-setting",
        bullets: [
          "Use firm, direct phrases: 'No. Stop. Get away.'",
          "Say no clearly without overexplaining (avoids argument traps)",
          "Walk away or move to a crowded area if someone persists",
          "Practice these phrases until they feel natural, not aggressive"
        ]
      }
    ],
    concepts: ["Situational awareness", "De-escalation", "Boundary setting", "Risk exposure", "Prevention"],
    terminology: [
      { term: "De-escalation", meaning: "Actions and language that reduce tension and prevent conflict escalation." },
      { term: "Safe Exit", meaning: "Pre-identified route or action to leave a dangerous situation quickly." },
      { term: "Bystander Effect", meaning: "When others present reduces likelihood someone helps (counter it by directly asking one person for help)." }
    ],
    questions: [
      {
        q: "You're at a gathering and someone's behavior makes you uncomfortable. What's a safe response?",
        a: "Remove yourself from the situation—go to bathroom, get fresh air, or join another group. You don't need a dramatic explanation. Your safety is the priority. Tell a friend later."
      },
      {
        q: "Is showing visible confidence really a deterrent?",
        a: "Yes. Most predators avoid targets who appear alert and confident. Walk purposefully, make occasional eye contact, keep shoulders back."
      }
    ],
    findMore: [
      "Take a certified self-defense awareness class (not fighting, awareness focus)",
      "Learn your local emergency services numbers and reporting procedures",
      "Join a community safety program or neighborhood watch"
    ],
    whenThingsGoWrong: [
      "If you feel threatened, create distance and move to populated/lit areas",
      "Call emergency services if in immediate danger—never hesitate",
      "After an incident, document details: date, time, description, witness names/contact, location"
    ],
    references: [
      { title: "National Domestic Violence Hotline", url: "https://www.thehotline.org/" },
      { title: "Rainn Sexual Assault Hotline", url: "https://www.rainn.org/" },
      { title: "Ready.gov Personal Safety", url: "https://www.ready.gov/personal-safety" }
    ],
    firstAction: "Create a group chat with 3-5 trusted contacts and establish a check-in signal.",
    warning: "Self-defense is a last resort. Prevention through awareness and distance is primary.",
    quiz: [
      {
        question: "In a threatening situation, your first priority should be:",
        options: ["Stand and fight", "Create distance and get to safety", "Negotiate calmly", "Record everything"],
        answer: 1,
        tip: "Distance reduces risk faster than any other action."
      },
      {
        question: "What's most important for an effective check-in system?",
        options: ["Complex signals", "Simple, consistent timing and signals", "Always being online", "Posting location publicly"],
        answer: 1,
        tip: "Simple systems actually work; complex ones get abandoned."
      },
      {
        question: "The bystander effect means people are less likely to help when:",
        options: ["The situation is serious", "Others are also present, each assuming someone else will act", "The victim is known to them", "It is daytime"],
        answer: 1,
        tip: "Counter it by directly asking one specific person by name or description for help."
      }
    ]
  },
  intermediate: {
    intro: "Time to go deeper. Route planning, practice drills, and physical skills — this is where you build the kind of confidence that actually holds up when pressure hits.",
    modules: [
      {
        title: "Map routes and risk factors for places you frequent",
        bullets: [
          "Identify multiple exit routes from home, work, school",
          "Note lighting, crowds, and safe places (police, stores, populated areas) on each route",
          "Vary your routine slightly—don't be predictable (different routes, times occasionally)",
          "Identify potential danger points: isolated areas, shortcuts with poor visibility",
          "Share high-frequency routes with trusted people; let them know if you deviate"
        ]
      },
      {
        title: "Conduct simple home and travel safety drills",
        bullets: [
          "Family drill: practice emergency meeting point if you can't meet at home",
          "Evacuation drill: practice fastest safe exit under pressure (simulate panic)",
          "Travel drill: test your check-in system under real-world delays (no cell service, batteries die)",
          "Scenario practice: talk through 'what would I do if' for common threats"
        ]
      },
      {
        title: "Develop physical boundary enforcement skills",
        bullets: [
          "Learn to step back, turn sideways, cross arms when someone invades personal space",
          "Practice firm posture: feet shoulder-width apart, ready to move",
          "Know how to break contact safely: push with hands, create distance",
          "Take a certified self-defense class for hands-on practice (focused on escape, not fighting)"
        ]
      }
    ],
    concepts: ["Route security", "Scenario planning", "Physical positioning", "Environmental analysis", "Situational response"],
    terminology: [
      { term: "Personal Space", meaning: "The distance you maintain from others for comfort and control." },
      { term: "Threat Assessment", meaning: "Evaluating actual danger level based on behavior and context, not appearance." },
      { term: "Escape Technique", meaning: "Actions to break contact and create distance, not to injure an attacker." }
    ],
    questions: [
      {
        q: "Someone blocks your exit path. What's the immediate action?",
        a: "Don't comply. Step back, create distance, find alternate route, or head to a public area. Make noise if necessary. Call authorities if threatened."
      }
    ],
    findMore: [
      "Take certified hands-on self-defense training with scenario practice",
      "Study your city's crime statistics to understand local risk patterns",
      "Join women's safety or community self-defense groups"
    ],
    whenThingsGoWrong: [
      "If physically threatened, prioritize escape over confrontation",
      "Use your voice: yell for help, attract attention from others",
      "Fight only if escape is impossible and you're in immediate grave danger"
    ],
    references: [
      { title: "Model Mugging Self Defense", url: "https://www.modelmugging.org/" },
      { title: "The Gift of Fear by Gavin de Becker", url: "https://www.gavindebecker.com/" }
    ],
    quiz: [
      {
        question: "Route risk planning involves:",
        options: ["Using the same path every day for efficiency", "Identifying exits, safe areas, and risk points on frequent routes", "Avoiding maps entirely", "Sharing all routes publicly"],
        answer: 1,
        tip: "Awareness of your route helps you respond faster if something changes."
      },
      {
        question: "When a safety drill fails, the best response is:",
        options: ["Abandon drills entirely", "Debrief what went wrong and update the plan", "Pretend it succeeded", "Do nothing until a real event occurs"],
        answer: 1,
        tip: "Failed drills reveal gaps before a real emergency does."
      },
      {
        question: "The primary goal of learning escape techniques is:",
        options: ["To win fights", "To create distance and reach safety, not to injure", "To intimidate others", "To prepare for sports competitions"],
        answer: 1,
        tip: "Escape-focused training is more practical and legally safer than combat training."
      }
    ]
  },
  advanced: {
    intro: "Create a full safety system that protects you and the people around you. Then pass it on — knowing this stuff is too important to keep to yourself.",
    modules: [
      {
        title: "Design layered personal security protocols",
        bullets: [
          "Combine awareness, route security, communication, and physical skills into one system",
          "Create different protocols for different risk contexts: travel, work, home, vulnerable times",
          "Design family safety playbook: evacuation, meeting points, communication during crisis",
          "Build redundancy: backup plans when primary communication fails",
          "Conduct annual reviews and updates as circumstances change"
        ]
      },
      {
        title: "Lead family and group safety drills effectively",
        bullets: [
          "Run realistic scenarios under time pressure with partial information",
          "Debrief afterward: what worked, what didn't, how to improve",
          "Practice under stress: use alarms, darkness, sudden requirements",
          "Document drill outcomes and update protocols based on findings",
          "Create simple checklists and playbooks for quick reference"
        ]
      }
    ],
    concepts: ["Security layering", "Family protocols", "Teaching methodology", "Drill design", "System resilience"],
    terminology: [
      { term: "Primary vs. Secondary Plan", meaning: "Main action and backup action in case primary fails." },
      { term: "Debrief", meaning: "Post-event discussion analyzing what happened and how to improve." }
    ],
    findMore: [
      "Teach self-defense or safety awareness to others",
      "Develop organization-wide safety protocols if you work in security",
      "Study threat assessment professionally if building expertise for others"
    ],
    quiz: [
      {
        question: "A layered safety system combines:",
        options: ["One strong lock only", "Awareness, route security, communication, and physical skills together", "Physical force as primary response", "A single emergency contact"],
        answer: 1,
        tip: "Multiple overlapping layers mean no single failure disables your whole system."
      },
      {
        question: "Running realistic household safety drills helps because:",
        options: ["They increase fear unnecessarily", "They reveal plan weaknesses before a real emergency occurs", "They replace formal training", "They are only for professionals"],
        answer: 1,
        tip: "Stress testing your plan is how you find and fix weak points."
      },
      {
        question: "When leading others through safety protocols, the most important step is:",
        options: ["Making the plan complex to appear thorough", "Keeping it simple, practiced, and documented", "Keeping all knowledge to yourself", "Changing the plan frequently"],
        answer: 1,
        tip: "Simple, practiced systems work reliably; complex ones fail under pressure."
      }
    ]
  }
};

// HEALTH AND FIRST AID - Wellness, emergency response, and prevention
const HEALTH_LEVEL_CONTENT = {
  beginner: {
    intro: "Your body runs literally everything — your mood, your energy, your ability to focus. Plus: knowing first aid could one day save someone's life. Let's start with the simple stuff that makes a big difference.",
    modules: [
      {
        title: "Build a first aid kit and store it properly",
        bullets: [
          "Include essentials: bandages, antibiotic ointment, pain relief, antihistamine",
          "Add specific items for your household: inhalers, medications, allergy treatments",
          "Label everything clearly with expiration dates",
          "Store in cool, dry place with clear labeling so anyone can find it",
          "Keep one at home, one in car, one at workplace or in travel kit"
        ]
      },
      {
        title: "Know emergency response basics",
        bullets: [
          "Memorize your local emergency number (911, 999, 112, etc.)",
          "Know how to clearly communicate your location and situation to dispatcher",
          "Learn what not to do: don't move person, don't remove objects from wounds",
          "Know where nearest help is: hospital, fire station, police, trusted neighbor"
        ]
      },
      {
        title: "Establish daily wellness foundations",
        bullets: [
          "Target 7-9 hours sleep: consistent bed and wake times even on weekends",
          "Move daily: 30 minutes moderate activity (walk, dance, sports)",
          "Drink water regularly throughout day, not just when thirsty",
          "Eat balanced meals: include protein, vegetable, grain at each meal",
          "Track one health metric: weight, energy level, or mood to establish baseline"
        ]
      }
    ],
    concepts: ["First aid basics", "Emergency response", "Prevention", "Sleep hygiene", "Activity"],
    terminology: [
      { term: "Vitals", meaning: "Heart rate, blood pressure, temperature, and breathing rate—key health indicators." },
      { term: "Triage", meaning: "Prioritizing treatment by urgency when multiple people need help." },
      { term: "CPR", meaning: "Cardiopulmonary resuscitation: emergency technique for stopped breathing/heartbeat." }
    ],
    questions: [
      {
        q: "What's the first action if someone collapses?",
        a: "Check if they're responsive and breathing. Call emergency services immediately. Only then attempt basic first aid if trained. Don't move them unless in immediate danger."
      },
      {
        q: "Why is consistent sleep schedule important even on weekends?",
        a: "Your body's circadian rhythm responds to consistency. Regular schedule improves sleep quality, mood, immune function, and daytime energy."
      }
    ],
    findMore: [
      "Take certified first aid and CPR training hands-on from Red Cross or equivalent",
      "Visit your doctor for baseline health screening and vaccination updates",
      "Follow trusted public health websites for wellness guidance"
    ],
    whenThingsGoWrong: [
      "Call emergency services first—don't delay to try self-help for serious symptoms",
      "Use your first aid kit for minor cuts, burns, sprains only",
      "For health concerns, consult qualified healthcare provider, not internet diagnosis"
    ],
    references: [
      { title: "Mayo Clinic First Aid Guide", url: "https://www.mayoclinic.org/first-aid" },
      { title: "NHS Live Well", url: "https://www.nhs.uk/live-well/" },
      { title: "Red Cross", url: "https://www.redcross.org/" }
    ],
    firstAction: "Assemble a first aid kit and store in an easy-to-reach location.",
    warning: "Serious injuries need professional help immediately. This guide covers basics only.",
    quiz: [
      {
        question: "Before helping someone in an emergency, first check:",
        options: ["Your phone battery", "Scene safety and if they're responsive", "Social media", "If cameras are present"],
        answer: 1,
        tip: "You can't help effectively if you become another victim."
      },
      {
        question: "Which daily habit has the broadest impact on overall health?",
        options: ["Taking daily supplements", "Consistent quality sleep on a regular schedule", "Avoiding all exercise", "Eating one large meal per day"],
        answer: 1,
        tip: "Sleep affects immune function, mood, metabolism, and cognitive performance."
      },
      {
        question: "First aid kits should be checked:",
        options: ["Only when something happens", "Quarterly to review supplies and expiry dates", "Once a year at most", "Only when you add new items"],
        answer: 1,
        tip: "Outdated or missing supplies can leave you unprepared in an emergency."
      }
    ]
  },
  intermediate: {
    intro: "You've got the basics — now let's make your health habits actually stick. CPR, smart nutrition, and preventing problems before they become big ones.",
    modules: [
      {
        title: "Learn certified first aid techniques",
        bullets: [
          "Take hands-on CPR and first aid certification course",
          "Practice recovery position, choking response, bleeding control",
          "Learn to apply pressure bandages and basic assessment",
          "Renew certification every 2 years to stay current"
        ]
      },
      {
        title: "Create family medical information system",
        bullets: [
          "Collect: allergies, current medications, baseline health conditions, emergency contacts",
          "Store digitally (accessible but secure) and physically (printed backup)",
          "Share with immediate family and keep at home, in car, at work",
          "Include healthcare provider names, hospitals, insurance info"
        ]
      },
      {
        title: "Build preventive health routines",
        bullets: [
          "Schedule: annual checkup, dental, eye exam, any screenings for your age",
          "Monitor: own vital signs if you have concerns (blood pressure kit, thermometer)",
          "Track: health metrics relevant to you (blood sugar, weight, energy, mood)"
        ]
      }
    ],
    concepts: ["First aid techniques", "Health tracking", "Prevention screening", "Medical documentation", "Emergency protocols"],
    terminology: [
      { term: "Recovery Position", meaning: "Positioning someone unconscious but breathing on their side to keep airway clear." },
      { term: "Shock", meaning: "Life-threatening condition from insufficient blood flow; treated by laying person flat, elevating legs." },
      { term: "Baseline Health", meaning: "Your normal values (weight, blood pressure, etc.) for comparison if problems develop." }
    ],
    questions: [
      {
        q: "Why is it important to take CPR training even if you never use it?",
        a: "When confronted with cardiac arrest, trained people act quickly and correctly. Even 2-3 minutes of CPR increases survival odds dramatically. Without training, panic often prevents action."
      }
    ],
    findMore: [
      "Take workplace first aid and CPR certification",
      "Learn automated external defibrillator (AED) operation",
      "Join community health workshops or clinics"
    ],
    whenThingsGoWrong: [
      "If someone stops responding or breathing, start CPR and call emergency",
      "If unsure of treatment, follow dispatcher instructions on phone",
      "For chronic conditions, develop action plan with your healthcare provider"
    ],
    references: [
      { title: "American Heart Association CPR", url: "https://www.heart.org/en/cpr" },
      { title: "MedlinePlus Health Topics", url: "https://medlineplus.gov/" }
    ],
    quiz: [
      {
        question: "The recovery position is used when:",
        options: ["Someone is fully conscious", "Someone is unconscious but breathing, to keep their airway clear", "Someone is choking", "Someone needs CPR immediately"],
        answer: 1,
        tip: "Recovery position prevents choking on fluids when CPR is not yet required."
      },
      {
        question: "Why should you create a family medical information sheet?",
        options: ["For decoration", "To provide emergency responders with accurate allergies and conditions quickly", "Because doctors always require it", "To avoid hospital visits"],
        answer: 1,
        tip: "In emergencies, fast access to medical history saves critical time."
      },
      {
        question: "Preventive health screening is valuable because:",
        options: ["It guarantees no illness", "It identifies issues early when they are easier to treat", "It replaces healthy lifestyle habits", "It is only for elderly people"],
        answer: 1,
        tip: "Early detection consistently improves treatment outcomes across many conditions."
      }
    ]
  },
  advanced: {
    intro: "Build a full personal health system that prevents problems, handles emergencies, and stays strong for decades. This is serious long-game thinking.",
    modules: [
      {
        title: "Design comprehensive health and emergency plans",
        bullets: [
          "Create detailed family health playbook for different scenarios",
          "Map resources: hospitals, pharmacies, mental health services in your area",
          "Build relapse-prevention plans for chronic conditions",
          "Document advanced medical directives and contact preferences"
        ]
      },
      {
        title: "Lead family health drills and preparedness",
        bullets: [
          "Run emergency scenario simulations annually",
          "Update medical information and emergency protocols seasonally",
          "Teach family members basic first aid and response procedures",
          "Prepare for disruptions: power outages, supply shortages, hospital saturation"
        ]
      }
    ],
    concepts: ["Health system design", "Emergency preparedness", "Relapse prevention", "Community resources", "Wellness culture"],
    findMore: [
      "Develop organizational health and safety protocols if applicable",
      "Study emergency management and disaster preparedness",
      "Learn about public health communication and crisis response"
    ],
    quiz: [
      {
        question: "A relapse-prevention health plan is most useful for:",
        options: ["Completely healthy individuals only", "People managing chronic conditions to anticipate and plan for setbacks", "Replacing emergency medical care", "Avoiding doctors entirely"],
        answer: 1,
        tip: "Anticipating setbacks reduces their impact and recovery time."
      },
      {
        question: "Running annual emergency health drills helps a household by:",
        options: ["Replacing first aid training", "Ensuring everyone knows their role before a crisis happens", "Creating unnecessary anxiety", "Testing medical equipment professionally"],
        answer: 1,
        tip: "Drills convert knowledge into practiced action, which works better under real stress."
      },
      {
        question: "When preparing for health disruptions, priority goes to:",
        options: ["Luxury supplements", "Critical medications, essential supplies, and communication plan", "Stocking non-essential items first", "Waiting for government guidance only"],
        answer: 1,
        tip: "Resilient households plan for critical needs first, extras second."
      }
    ]
  }
};

// COMMUNICATION AND NEGOTIATION - Conversation skills and conflict resolution
const COMMUNICATION_LEVEL_CONTENT = {
  beginner: {
    intro: "Ever said the wrong thing and wished you could take it back? Or stayed quiet when you really needed to speak up? Communication is a skill — and you can get really good at it.",
    modules: [
      {
        title: "Practice the Fact-Impact-Request conversation framework",
        bullets: [
          "Fact: 'You said X' (not accusation, just what happened)",
          "Impact: 'This affected me because...' (your honest consequence, not blame)",
          "Request: 'Going forward, I need...' (specific future action)",
          "Example: 'You were 30 minutes late. I was stressed waiting. I need you to text if you'll be late.'",
          "Practice without blame or exaggeration for best results"
        ]
      },
      {
        title: "Learn active listening skills",
        bullets: [
          "Actually hear what the other person is saying before responding",
          "Reflect back: 'So what I hear is...' to confirm understanding",
          "Avoid planning your response while they talk",
          "Ask clarifying questions: 'Can you give me an example?'",
          "Use body language: nod, face them, maintain eye contact"
        ]
      },
      {
        title: "Draft and practice boundary scripts",
        bullets: [
          "'I can't accept that because...'",
          "'I need to say no to protect my time/energy.'",
          "'I've thought about it and I'm not comfortable with...'",
          "Practice saying these until they sound natural, not hostile",
          "Use consistent tone without repeating—clearer boundaries are often felt"
        ]
      }
    ],
    concepts: ["Non-violent communication", "Active listening", "Boundary setting", "Feedback delivery", "Perspective-taking"],
    terminology: [
      { term: "Non-violent Communication", meaning: "Communication focusing on observations, feelings, needs, and requests without blame." },
      { term: "Active Listening", meaning: "Fully focusing on understanding the other person before formulating your response." },
      { term: "Boundary", meaning: "Limit you set on what you will/won't accept or do." }
    ],
    questions: [
      {
        q: "Your friend keeps canceling plans last-minute. How do you address it without being accusatory?",
        a: "Use Fact-Impact-Request: 'You've canceled three times in two weeks. This leaves me disappointed and makes me hesitant to plan. I need at least 24-hour notice if you need to reschedule, or we should pause until your schedule stabilizes.'"
      }
    ],
    findMore: [
      "Read 'Nonviolent Communication' by Marshall Rosenberg",
      "Practice in low-stakes conversations first before high-stakes ones",
      "Join communication workshops or tone practice groups"
    ],
    whenThingsGoWrong: [
      "If conversation gets heated, pause and reset: 'Let me step back. I want to understand you correctly.'",
      "Return to shared goals: 'We both want to resolve this, right?'",
      "Agree to revisit when both are calmer if emotion is too high"
    ],
    references: [
      { title: "Marshall Rosenberg NVC", url: "https://www.nonviolentcommunication.com/" },
      { title: "MindTools Active Listening", url: "https://www.mindtools.com/pages/article/newTCS_96.htm" }
    ],
    firstAction: "Write a boundary script for one real situation this week and practice it.",
    warning: "These techniques work best when genuinely applied, not manipulatively.",
    quiz: [
      {
        question: "Which statement uses best Fact-Impact-Request structure?",
        options: [
          "You always interrupt me and it's rude.",
          "When I'm speaking, you often interrupt. I feel unheard. Can you wait until I finish before responding?",
          "Stop interrupting.",
          "You're so disrespectful."
        ],
        answer: 1,
        tip: "Clear structure reduces defensiveness and increases chance of positive response."
      },
      {
        question: "Active listening involves:",
        options: ["Planning your reply while they talk", "Focusing fully on understanding before formulating your response", "Interrupting to confirm understanding", "Checking your phone simultaneously"],
        answer: 1,
        tip: "People know when they are not being heard—genuine listening builds trust quickly."
      },
      {
        question: "Boundary scripts work best when they are:",
        options: ["Long and detailed to explain everything", "Short, specific, and repeated consistently", "Vague to avoid conflict", "Only used in writing"],
        answer: 1,
        tip: "Clear, repeated boundaries are easier to enforce and harder to misunderstand."
      }
    ]
  },
  intermediate: {
    intro: "From tough conversations to actual negotiations — this is where the real-world skills kick in. Salary talks, conflicts, agreements... it all comes down to how well you can communicate.",
    modules: [
      {
        title: "Conduct salary and contract negotiations",
        bullets: [
          "Define your BATNA (best alternative): know your walk-away point before negotiating",
          "Research market rates for your role/experience",
          "Make first offer slightly high (creates anchoring effect)",
          "Listen to their constraints and find creative solutions",
          "Always get job offer in writing before accepting; verify exact terms"
        ]
      },
      {
        title: "Handle objections and pushback calmly",
        bullets: [
          "Listen to objection fully without interrupting",
          "Reflect: 'I hear that you're concerned about...'",
          "Address underlying concern, not just surface objection",
          "Offer alternative if possible: 'What if we tried...'",
          "Know when to step back and give space for them to decide"
        ]
      },
      {
        title: "Document agreements in writing",
        bullets: [
          "After verbal agreement, send summary email: 'We agreed to...'",
          "Include: what, when, who, cost, any conditions or exceptions",
          "Ask them to confirm by reply so you both have documented agreement",
          "Keep this record for future reference or dispute resolution"
        ]
      }
    ],
    concepts: ["BATNA", "Anchoring", "Creative problem-solving", "Objection handling", "Written documentation"],
    terminology: [
      { term: "BATNA", meaning: "Best Alternative To Negotiated Agreement; your backup if negotiation fails." },
      { term: "Anchor Point", meaning: "First number proposed that influences the range both sides will consider." },
      { term: "Reframe", meaning: "Presenting the same situation from a different angle to improve understanding." }
    ],
    questions: [
      {
        q: "You want a raise from your manager. What's your preparation step?",
        a: "Research market rates for your role. Know your accomplishments and impact. Define your BATNA: can you leave? Prepare to ask specifically: '15% raise based on X accomplishments' not vague 'a raise.'"
      }
    ],
    findMore: [
      "Read 'Getting to Yes' by Fisher and Ury",
      "Practice negotiations in low-stakes situations first",
      "Join negotiation workshops or discussion groups"
    ],
    whenThingsGoWrong: [
      "If stuck, suggest both sides take break to reflect",
      "Bring conversation back to shared interests, not positions",
      "Consider mediation if impasse continues"
    ],
    references: [
      { title: "Harvard Program on Negotiation", url: "https://www.pon.harvard.edu/" },
      { title: "Getting to Yes by Fisher and Ury", url: "https://www.pon.harvard.edu/publication/getting-yes/" }
    ],
    quiz: [
      {
        question: "BATNA in negotiation means:",
        options: ["Best Alternative To No Agreement", "Best Alternative To a Negotiated Agreement", "Basic Agreement Template for Negotiations", "Balanced Approach to Negotiation Analysis"],
        answer: 1,
        tip: "Knowing your BATNA prevents you from accepting deals worse than your best alternative."
      },
      {
        question: "When handling objections, the best first response is to:",
        options: ["Immediately counter-argue", "Listen fully and reflect what you heard back to them", "Dismiss the concern", "End the discussion"],
        answer: 1,
        tip: "Reflecting their concern shows you heard them, which reduces defensiveness."
      },
      {
        question: "After a verbal negotiation agreement, you should:",
        options: ["Assume both parties remember correctly", "Send a written summary with all agreed terms for confirmation", "Wait for them to follow up first", "Start implementing before confirming"],
        answer: 1,
        tip: "Written confirmation prevents 'I thought we agreed...' disputes later."
      }
    ]
  },
  advanced: {
    intro: "Master-level communication: leading high-pressure conversations, negotiating like a pro, and helping the people around you do the same. This is rare and valuable.",
    modules: [
      {
        title: "Facilitate multi-party negotiations",
        bullets: [
          "Map all stakeholders and their interests before starting",
          "Set clear ground rules and process upfront",
          "Separate people from problem: focus on interests, not positions",
          "Generate options for mutual gain before evaluating",
          "Use objective criteria to evaluate options rather than power dynamics"
        ]
      },
      {
        title: "Coach others in communication systems",
        bullets: [
          "Teach frameworks like NVC and fact-impact-request to teams",
          "Model healthy conflict resolution in your own communication",
          "Provide feedback on others' communication skills",
          "Create psychological safety so people practice difficult conversations"
        ]
      }
    ],
    concepts: ["Multi-party dynamics", "Interest mapping", "Principled negotiation", "Coaching", "Systems thinking"],
    quiz: [
      {
        question: "In multi-party negotiations, separating people from the problem means:",
        options: ["Removing difficult people from the room", "Focusing discussion on interests and issues rather than personalities", "Letting the loudest person decide", "Avoiding hard topics"],
        answer: 1,
        tip: "Personal attacks derail discussion; interest-focused conversation finds real solutions."
      },
      {
        question: "Psychological safety in a team enables better communication because:",
        options: ["It removes all accountability", "People practice difficult conversations without fear of punishment", "It means everyone always agrees", "It only applies to leadership teams"],
        answer: 1,
        tip: "Safe environments produce more honest feedback and faster conflict resolution."
      },
      {
        question: "Principled negotiation focuses on:",
        options: ["Winning at all costs", "Interests behind positions to find mutually beneficial outcomes", "Avoiding any compromise", "Using the most power available"],
        answer: 1,
        tip: "Interests (why you want something) are often more flexible than positions (what you say you want)."
      }
    ]
  }
};

// CAREER AND WORK LITERACY - Job search, offers, and growth
const CAREER_LEVEL_CONTENT = {
  beginner: {
    intro: "Your future career actually starts with what you do right now. Resume writing, networking, job hunting — let's break down how this all really works (it's not as scary as it looks).",
    modules: [
      {
        title: "Create and optimize your resume",
        bullets: [
          "Lead with most recent/relevant experience first",
          "Use action verbs: managed, created, increased, improved, reduced",
          "Quantify outcomes: 'Increased sales by 25%' not 'improved sales'",
          "Tailor resume for each application: match job description keywords",
          "Ask trusted contacts to review before submitting"
        ]
      },
      {
        title: "Understand job offers and key terms",
        bullets: [
          "Review full compensation: salary + bonus + benefits + equity + perks",
          "Check health insurance coverage, deductibles, and what's included",
          "Understand vesting schedules if equity is part of offer",
          "Ask about professional development budget and time-off policies",
          "Get offer in writing before accepting; verify all terms match discussion"
        ]
      },
      {
        title: "Build simple networking habits",
        bullets: [
          "Connect with classmates, colleagues on professional platforms",
          "Attend industry meetups or events in your interest area",
          "Reach out to contacts with genuine interest: read their profile before reaching out",
          "Always offer value first: ask if they need help, not if they can help you",
          "Keep in touch periodically: share relevant articles or get-well messages"
        ]
      }
    ],
    concepts: ["Resume optimization", "Compensation structure", "Offer evaluation", "Networking", "Career capital"],
    terminology: [
      { term: "Total Compensation", meaning: "Salary plus bonus, benefits, equity, and all other value provided." },
      { term: "Vesting", meaning: "Schedule determining when equity/benefits become yours." },
      { term: "Professional Network", meaning: "Your connections who can help with job leads, advice, referrals." }
    ],
    questions: [
      {
        q: "Company offers $80k salary with no other details. What questions should you ask?",
        a: "Benefits (health, retirement match), bonus structure and triggers, sign-on bonus, remote flexibility, professional development budget, vacation policy, equity."
      }
    ],
    findMore: [
      "Use sites like Glassdoor and Levels.fyi to research salaries",
      "Join alumni associations and professional groups in your field",
      "Read books like 'The Startup Way' about workplace culture"
    ],
    whenThingsGoWrong: [
      "If your resume isn't generating interviews, get feedback from someone working in roles you want",
      "If job search stalls, expand to different industries/roles, not just more applications",
      "If offer feels wrong, you can negotiate or walk away—this is normal"
    ],
    references: [
      { title: "LinkedIn Career Advice", url: "https://www.linkedin.com/advice" },
      { title: "Indeed Career Guide", url: "https://www.indeed.com/career-advice" },
      { title: "Glassdoor Career", url: "https://www.glassdoor.com/" }
    ],
    firstAction: "Update your resume with quantified outcomes from your last 3 projects.",
    warning: "Never start work without written offer confirming key terms.",
    quiz: [
      {
        question: "Strong resume bullet point includes:",
        options: ["Generic task description", "Measurable business impact", "How hard you worked", "Your job title only"],
        answer: 1,
        tip: "Quantified outcomes prove value better than effort."
      },
      {
        question: "Before accepting a job offer, you should verify:",
        options: ["Only the job title", "Full compensation, legal terms, and start conditions in writing", "Whether colleagues seem friendly online", "Social media presence of the company"],
        answer: 1,
        tip: "Verbal promises carry no legal weight—confirm everything in a written offer."
      },
      {
        question: "Effective networking starts by:",
        options: ["Asking for referrals immediately", "Offering value and showing genuine interest first", "Mass connecting with everyone you find", "Only contacting hiring managers"],
        answer: 1,
        tip: "Relationships built on genuine value lead to stronger, more reliable connections."
      }
    ]
  },
  intermediate: {
    intro: "Time to stand out from the crowd. Learn how to nail interviews, show real impact, and negotiate your worth — no more leaving money on the table because you didn't ask!",
    modules: [
      {
        title: "Prepare interview stories and talking points",
        bullets: [
          "Prepare 5-7 stories using STAR method: Situation, Task, Action, Result",
          "Focus on real challenges you've solved and lessons learned",
          "Prepare examples showing: problem-solving, teamwork, leadership, failure recovery",
          "Practice out loud, not in your head—sounds different when said aloud",
          "Prepare thoughtful questions to ask interviewer about role and culture"
        ]
      },
      {
        title: "Negotiate compensation and terms",
        bullets: [
          "Research market rate for your role, location, and experience level",
          "Know your walk-away point before negotiating",
          "Wait for them to make first offer, counter with specific number higher than target",
          "Negotiate full package: salary, bonus, equity, benefits, remote policy, professional development",
          "Get everything in writing; verbal promises aren't reliable"
        ]
      },
      {
        title: "Evaluate long-term fit and growth",
        bullets: [
          "Ask about team, manager style, learning opportunities, growth path",
          "Understand financial health of company (startup stage vs. stable)",
          "Assess cultural fit beyond just job description",
          "Consider opportunity cost: what are you leaving behind?",
          "Talk to current/former employees if possible for inside perspective"
        ]
      }
    ],
    concepts: ["Story preparation", "Compensation negotiation", "Role evaluation", "Culture assessment", "Career progression"],
    terminology: [
      { term: "STAR Method", meaning: "Interview structure: Situation, Task, Action, Result for telling impactful stories." },
      { term: "Total Compensation", meaning: "All financial and non-financial value from a role." },
      { term: "Cultural Fit", meaning: "Alignment between your values and company values/practices." }
    ],
    questions: [
      {
        q: "Interviewer asks 'Tell me about a time you failed.' How do you respond?",
        a: "Pick a real failure, describe it honestly, explain what you learned and how you changed because of it. Shows self-awareness and growth mindset."
      }
    ],
    findMore: [
      "Practice interviews with friends or career coaches",
      "Research companies thoroughly before interviews: recent news, financials, leadership",
      "Join communities with people in roles you want to understand expectations"
    ],
    whenThingsGoWrong: [
      "If rejected, ask for feedback if possible—use to improve next attempt",
      "If offer negotiation fails, decide: accept as-is, keep searching, or counter once more",
      "If job doesn't match expectations after starting, document issues and plan exit"
    ],
    references: [
      { title: "Levels.fyi Salary Comparison", url: "https://www.levels.fyi/" },
      { title: "Company Review Sites", url: "https://www.glassdoor.com/" }
    ],
    quiz: [
      {
        question: "STAR method in interviews stands for:",
        options: ["Story, Task, Answer, Result", "Situation, Task, Action, Result", "Summary, Timeline, Achievement, Review", "Skills, Training, Attributes, Results"],
        answer: 1,
        tip: "STAR structure makes your examples clear, specific, and easy for interviewers to follow."
      },
      {
        question: "When negotiating compensation, the strongest position requires:",
        options: ["Accepting the first offer immediately", "Market rate research and a defined walk-away point", "Threatening to leave", "Asking for double what you expect"],
        answer: 1,
        tip: "Knowing market rates and your minimum gives you leverage without bluffing."
      },
      {
        question: "After a job rejection, the most productive action is:",
        options: ["Never apply to that company again", "Request specific feedback to identify improvement areas", "Blame the interviewer", "Apply to more roles without changing anything"],
        answer: 1,
        tip: "Specific feedback is rare but valuable—even partial answers help you improve."
      }
    ]
  },
  advanced: {
    intro: "Think strategically about your whole career, not just your next job. Personal brand, long-term positioning, knowing exactly when and how to make your next big move.",
    modules: [
      {
        title: "Develop long-term career roadmap",
        bullets: [
          "Define endpoint: 5-10 year career goal and what experiences you need",
          "Map skills and experiences required for that goal",
          "Choose roles strategically to fill gaps or strengthen areas",
          "Build negotiation leverage: unique skills, track record, industry reputation",
          "Review and adjust annually as markets and interests change"
        ]
      },
      {
        title: "Build personal brand and visibility",
        bullets: [
          "Develop thought leadership: blog, speaking, open-source contributions",
          "Build portfolio showing your best work and thinking",
          "Maintain professional presence: clean LinkedIn, consistent online presence",
          "Share knowledge publicly: articles, talks, mentoring",
          "Build reputation in your industry through consistent contributions"
        ]
      }
    ],
    concepts: ["Career capital", "Leverage", "Personal brand", "Thought leadership", "Industry reputation"],
    quiz: [
      {
        question: "Career capital is built by:",
        options: ["Staying in comfortable roles indefinitely", "Accumulating rare and valuable skills and experiences strategically", "Maximising immediate salary only", "Avoiding all career risks"],
        answer: 1,
        tip: "Rare skills give you leverage for better opportunities, not just higher current pay."
      },
      {
        question: "Personal brand visibility is best built through:",
        options: ["Random posting on all platforms", "Consistent, valuable contribution in your specific area of expertise", "Promotional self-praise only", "Avoiding any public presence"],
        answer: 1,
        tip: "Consistent, relevant output builds a reputation that attracts opportunities proactively."
      },
      {
        question: "A role transition roadmap helps by:",
        options: ["Making career changes impossible to reverse", "Identifying skill gaps and experiences needed before moving", "Guaranteeing future opportunities", "Avoiding all career planning"],
        answer: 1,
        tip: "Proactive planning reduces the time and risk of career transitions significantly."
      }
    ]
  }
};

// DIGITAL LITERACY AND CYBER SAFETY - Account security and threat prevention
const DIGITAL_LEVEL_CONTENT = {
  beginner: {
    intro: "Hackers and scammers LOVE easy targets. But with a few simple habits, you can make yourself way too much trouble to mess with. Let's lock things down! 🔒",
    modules: [
      {
        title: "Secure your critical accounts immediately",
        bullets: [
          "Use password manager (Bitwarden, 1Password, KeePass) to generate unique passwords",
          "Enable 2FA/MFA on critical accounts: email, banking, social media",
          "For 2FA, prefer authenticator app (Google Authenticator) over SMS text",
          "Set strong account recovery options: phone, backup email, security questions",
          "Write down recovery codes from 2FA setup and store securely (not on device)"
        ]
      },
      {
        title: "Identify and avoid common phishing attacks",
        bullets: [
          "Check sender email domain carefully—fake emails mimic real ones",
          "Hover over links to see actual URL before clicking",
          "Urgency tactics are red flag: 'Act now!', 'Account will close!'",
          "Legitimate companies don't ask passwords via email or pop-ups",
          "If suspicious, go directly to company website (type URL yourself), don't click email link"
        ]
      },
      {
        title: "Back up your data safely",
        bullets: [
          "Use cloud backup (Google Drive, OneDrive) for regular documents",
          "Use local external drive backup for critical/sensitive data",
          "Test restore: actually restore a file to confirm backup works",
          "Don't connect backup drive to internet; store separately",
          "Back up at least monthly based on how much data changes"
        ]
      }
    ],
    concepts: ["Password security", "Authentication", "Phishing", "Backup integrity", "Attack surface"],
    terminology: [
      { term: "2FA/MFA", meaning: "Two/Multi-Factor Authentication adds second verification (code, biometric) to password." },
      { term: "Phishing", meaning: "Fake emails/sites designed to steal credentials by impersonating trusted organizations." },
      { term: "Malware", meaning: "Hostile software designed to damage, spy on, or hijack your device." }
    ],
    questions: [
      {
        q: "You receive email from 'your bank' asking to verify account. What do you do?",
        a: "Don't click any link in email. Call your bank using number on your card or official website. Real banks never ask you to verify passwords via email."
      }
    ],
    findMore: [
      "Use free password strength checker: zxcvbn or similar",
      "Sign up for free breach notification services (Have I Been Pwned)",
      "Learn your device's security settings: phone lockscreen, login requirements"
    ],
    whenThingsGoWrong: [
      "If hacked: change password immediately, enable 2FA, check account activity, contact if money stolen",
      "If scammed: freeze credit if financial info exposed, file police report, alert bank",
      "If suspicious device activity: scan with legitimate antivirus, or backup important files then reset device"
    ],
    references: [
      { title: "Bitwarden Password Manager", url: "https://bitwarden.com/" },
      { title: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
      { title: "Google Safety Center", url: "https://safety.google/" }
    ],
    firstAction: "Secure your email account first: unique password + 2FA enabled.",
    warning: "Links, files, and urgent money requests are common attack vectors. Be skeptical by default.",
    quiz: [
      {
        question: "Best practice for password management:",
        options: ["Use same password everywhere", "Use password manager with unique passwords", "Write passwords on paper near computer", "Reset password regularly without a manager"],
        answer: 1,
        tip: "Single breach can compromise many accounts if passwords are reused."
      },
      {
        question: "Phishing emails most often use:",
        options: ["Clear official company branding only", "Urgency, suspicious links, and impersonation of trusted entities", "Your correct personal details throughout", "Formal legal language only"],
        answer: 1,
        tip: "Urgency is designed to bypass rational thinking—slow down when pressure is high."
      },
      {
        question: "A reliable backup strategy includes:",
        options: ["One copy in one location", "Multiple copies including both cloud and local offline storage", "Backing up only when you remember", "Never testing if restore works"],
        answer: 1,
        tip: "Backups only matter if you can actually restore them when needed."
      }
    ]
  },
  intermediate: {
    intro: "Level up your digital security. Time to audit your accounts, back up your important stuff, and harden your digital life against real threats you probably don't even know exist.",
    modules: [
      {
        title: "Audit account permissions and connected apps",
        bullets: [
          "Review what apps have access to your personal data",
          "Remove apps you no longer use—they represent attack surface",
          "For each app: does it really need access to location, contacts, photos?",
          "Check 'connected apps' on social media: revoke access for apps you don't use",
          "Review privacy settings on social platforms: who can see your posts?"
        ]
      },
      {
        title: "Create multi-backup recovery plan",
        bullets: [
          "Backup 1: Cloud (auto-synced, accessible anywhere but potentially vulnerable)",
          "Backup 2: Local external drive (secure but requires manual action)",
          "Backup 3: Critical data only in encrypted offline storage",
          "Test restore from each backup quarterly to confirm they work",
          "Document and securely store recovery codes/credentials"
        ]
      },
      {
        title: "Harden device settings",
        bullets: [
          "Enable device-level encryption (BitLocker on Windows, FileVault on Mac)",
          "Keep OS and apps updated—patches fix security vulnerabilities",
          "Use device password/PIN even if no one else accesses it",
          "Configure auto-lock: screen locks after 5-10 minutes of inactivity",
          "Review startup apps: disable unnecessary ones from starting automatically"
        ]
      }
    ],
    concepts: ["App permissions", "Encryption", "Backup strategy", "Device hardening", "Recovery planning"],
    terminology: [
      { term: "Encryption", meaning: "Converting data into code that's unreadable without the decryption key." },
      { term: "Recovery Codes", meaning: "Backup codes to regain access if 2FA device is lost." },
      { term: "Attack Surface", meaning: "Total potential entry points for attackers (apps, connections, unpatched areas)." }
    ],
    findMore: [
      "Learn about VPNs for public WiFi if you use it frequently",
      "Study encryption basics: when and how it protects you",
      "Join cybersecurity awareness newsletters from trusted sources"
    ],
    whenThingsGoWrong: [
      "If locked out of account: use recovery codes or try password reset via email",
      "If suspected breach: run malware scan, change passwords, monitor accounts, consider credit freeze",
      "If backup fails when needed: use professional data recovery service if critical files lost"
    ],
    references: [
      { title: "OWASP Security Awareness", url: "https://owasp.org/" },
      { title: "CISA Cybersecurity", url: "https://www.cisa.gov/cybersecurity" }
    ],
    quiz: [
      {
        question: "Device encryption protects data by:",
        options: ["Slowing down your device as a deterrent", "Making stored files unreadable without the correct credentials", "Deleting files automatically", "Blocking all internet access"],
        answer: 1,
        tip: "Encryption means stolen or lost devices cannot be read without your key."
      },
      {
        question: "Reviewing app permissions regularly helps because:",
        options: ["Apps always request only what they need", "Apps accumulate permissions over time creating unnecessary data exposure", "Permissions never change after install", "It improves device speed"],
        answer: 1,
        tip: "Unused apps with high permissions are silent attack vectors—remove or restrict them."
      },
      {
        question: "Testing backup restore quarterly ensures:",
        options: ["Backups are unnecessary", "Your backup actually works when you need it most", "You have more free storage", "The process is faster next time"],
        answer: 1,
        tip: "A backup that has never been tested is not a reliable backup."
      }
    ]
  },
  advanced: {
    intro: "Advanced digital security: encryption, account segmentation, and having a clear plan for when (not if!) something goes wrong online. This is how pros protect themselves.",
    modules: [
      {
        title: "Implement encryption and secure workflows",
        bullets: [
          "Use full-disk encryption on devices with sensitive data",
          "Use encrypted messaging apps for sensitive conversations",
          "Encrypt sensitive files at rest with client-side encryption",
          "Use VPN for public WiFi to encrypt traffic",
          "Keep encryption keys/passphrase in secure, separate location"
        ]
      },
      {
        title: "Practice incident response procedures",
        bullets: [
          "Create written incident response checklist for different scenarios",
          "Know immediate actions: freeze accounts, contact authorities, preserve evidence",
          "Practice under time pressure: test your plan actually works",
          "Document incident: timeline, what was accessed, impact",
          "Review and update procedures quarterly as threats evolve"
        ]
      }
    ],
    concepts: ["Encryption standards", "Incident response", "Forensics basics", "Threat intelligence", "System resilience"],
    quiz: [
      {
        question: "An incident response checklist is valuable because:",
        options: ["It replaces security software entirely", "It enables fast, correct action under stress without improvising from scratch", "It is only useful for large organisations", "It prevents all cyber incidents"],
        answer: 1,
        tip: "Prepared responses are dramatically faster and more accurate than improvised ones."
      },
      {
        question: "End-to-end encryption means:",
        options: ["The service provider can read your messages", "Only sender and recipient can read the message content", "Messages are deleted automatically", "Encryption significantly slows delivery"],
        answer: 1,
        tip: "End-to-end encryption removes the service provider as a potential breach point."
      },
      {
        question: "Account segmentation means keeping:",
        options: ["All accounts with the same credentials for convenience", "High-value accounts isolated from everyday-use accounts", "Fewer accounts in total", "One shared backup across all accounts"],
        answer: 1,
        tip: "Isolating critical accounts means a breach in one does not automatically compromise others."
      }
    ]
  }
};

// HOME AND LIFE ADMINISTRATION - Systems for recurring tasks and organization
const HOME_ADMIN_LEVEL_CONTENT = {
  beginner: {
    intro: "Adulting 101 — the practical stuff nobody explicitly teaches you. Pay bills on time, keep your space sorted, and stop losing money to avoidable mistakes. You can absolutely do this.",
    modules: [
      {
        title: "Build bills and due dates dashboard",
        bullets: [
          "List all recurring bills: rent/mortgage, utilities, insurance, subscriptions",
          "Record due date, amount, and payment method for each",
          "Set calendar reminders 1 week before each due date",
          "Set phone reminder on due date itself",
          "Automate where possible (autopay), but keep spreadsheet for tracking"
        ]
      },
      {
        title: "Organize critical documents",
        bullets: [
          "Create central physical folder for key documents: passport, insurance, contracts, medical",
          "Create digital copies and store backed up safely",
          "Label clearly with date and category",
          "Keep emergency contact info with important docs",
          "Review and purge unnecessary documents quarterly"
        ]
      },
      {
        title: "Establish basic weekly routines",
        bullets: [
          "Monday: week planning (5 mins), goal setting",
          "Wednesday: mid-week progress check (5 mins)",
          "Friday: review week, plan next week (10 mins)",
          "Sunday: prep week ahead—lay out clothes, plan meals",
          "Consistency beats perfection—short weekly reviews keep you on track"
        ]
      }
    ],
    concepts: ["Systems design", "Standardization", "Maintenance cycles", "Checklists", "Routine building"],
    terminology: [
      { term: "Autopay", meaning: "Automatic recurring payment for bills from your account." },
      { term: "Lifecycle Folder", meaning: "Organized storage for documents grouped by type and validity period." },
      { term: "Contingency", meaning: "Backup plan if primary system fails." }
    ],
    questions: [
      {
        q: "Most missed bills happen when?",
        a: "When systems are manual or not consistent. Combination of written dashboard + calendar reminders + autopay for critical bills prevents most issues."
      }
    ],
    findMore: [
      "Use simple tools: Google Calendar for reminders, Google Sheets for tracking",
      "Read 'Getting Things Done' by David Allen for personal system ideas",
      "Join productivity communities to see what works for others"
    ],
    whenThingsGoWrong: [
      "If missed payment happens, pay immediately, contact lender about late fees",
      "If overwhelmed, simplify: focus on critical bills first",
      "If system is too complex, strip it down to minimum viable version"
    ],
    references: [
      { title: "Todoist List Management", url: "https://todoist.com/" },
      { title: "Getting Things Done by David Allen", url: "https://www.davidco.com/" }
    ],
    firstAction: "Build one bill-tracking spreadsheet with all recurring payments and due dates.",
    warning: "Missed bills compound into expensive problems. Even simple systems prevent most issues.",
    quiz: [
      {
        question: "Most reliable way to avoid missed bills:",
        options: ["Rely on memory", "Dashboard + calendar reminders + autopay", "Check randomly", "Ignore until problem occurs"],
        answer: 1,
        tip: "Systems beat memory for recurring tasks."
      },
      {
        question: "When organising key documents, the best approach is:",
        options: ["Keep everything in a random pile", "Categorise with clear labels and maintain digital and physical copies", "Only store digitally with no backup", "Discard documents after one year"],
        answer: 1,
        tip: "Organised documents reduce stress enormously when you need them in a hurry."
      },
      {
        question: "A weekly routine review helps you:",
        options: ["Avoid all tasks", "Stay on track with goals and catch issues before they compound", "Eliminate all planning", "Only look back, not forward"],
        answer: 1,
        tip: "Short, regular reviews are more effective than long, infrequent ones."
      }
    ]
  },
  intermediate: {
    intro: "Beyond just surviving adult life — let's organise your household systems so they basically run themselves. Less chaos, more time for the things you actually enjoy.",
    modules: [
      {
        title: "Set up safe payment automation",
        bullets: [
          "Start with fixed bills: rent, insurance (amounts don't vary)",
          "Set autopay through your bank or biller's system, not third-party",
          "Review statements monthly even with autopay to catch errors",
          "Keep override capability: understand how to pause/cancel autopay",
          "Set secondary alert outside automation system (manual check) for critical accounts"
        ]
      },
      {
        title: "Design family/household workflows",
        bullets: [
          "Create shared systems if others rely on your organization",
          "Establish backup person who knows critical systems in case you're unavailable",
          "Document key information: passwords location, utility shutoffs, emergency procedures",
          "Run rotation so multiple people can handle critical tasks",
          "Review family systems quarterly together"
        ]
      },
      {
        title: "Build annual planning calendar",
        bullets: [
          "Car/home maintenance: inspections, renewals when due",
          "Insurance renewal dates and document storage",
          "Annual subscriptions: review and cancel unused",
          "Tax deadline prep and document gathering",
          "Seasonal prep: HVAC maintenance, seasonal clothing rotation"
        ]
      }
    ],
    concepts: ["Automation safety", "Shared systems", "Documentation", "Availability", "Annual cycles"],
    findMore: [
      "Learn your utility providers' shutoff procedure as backup knowledge",
      "Create written instructions for critical household tasks",
      "Set up password manager shared access for household emergencies"
    ]
  },
  advanced: {
    intro: "Build household systems that scale with your life. Long-term planning, maintenance schedules, and financial organisation that keeps everything running smoothly without constant stress.",
    modules: [
      {
        title: "Design comprehensive household operations system",
        bullets: [
          "Document all critical information: utility accounts, suppliers, service providers",
          "Create decision trees for common scenarios: what to do if something breaks?",
          "Build redundancy: backup person for each critical function",
          "Schedule regular reviews quarterly to update changes"
        ]
      }
    ],
    quiz: [
      {
        question: "Decision trees for household scenarios help because:",
        options: ["They eliminate the need for thinking entirely", "They provide clear steps during stressful situations when clarity is hardest", "They replace professional advice", "They are only for businesses"],
        answer: 1,
        tip: "Pre-decided responses to common problems reduce decision fatigue significantly."
      },
      {
        question: "A redundant household operations system means:",
        options: ["Having duplicate appliances", "Multiple people can perform critical functions if one is unavailable", "Never changing any system", "Using complex tools for everything"],
        answer: 1,
        tip: "Resilient households do not depend on a single person for critical ongoing operations."
      },
      {
        question: "Quarterly system reviews in home administration serve to:",
        options: ["Find reasons to add complexity", "Update systems based on changed circumstances and eliminate what no longer works", "Replace all tools at once", "Start over from scratch"],
        answer: 1,
        tip: "Regular light reviews keep systems current and prevent gradual drift into chaos."
      }
    ]
  }
};

// COOKING AND EATING - Nutrition, meal planning, and kitchen skills
const COOKING_LEVEL_CONTENT = {
  beginner: {
    intro: "If you can follow instructions, you can cook! 🍳 Start here: basic techniques, simple balanced meals, and not accidentally setting the kitchen on fire. (It's easier than you think!)",
    modules: [
      {
        title: "Master kitchen safety and basic cooking techniques",
        bullets: [
          "Keep knives sharp (dull ones slip more often)",
          "Claw grip: curl fingers when holding food being cut",
          "Heat control: start high, reduce once sizzling begins",
          "Tasting as you cook: adjust seasonings gradually, not all at end",
          "Clean-as-you-go: wipe/wash as you prep, not massive cleanup after"
        ]
      },
      {
        title: "Cook 5 repeatable balanced meals as foundation",
        bullets: [
          "Each meal structure: protein + vegetable + carbohydrate + fat",
          "Examples: rice + beans + stir-fry veggies, pasta + sauce + salad, bread + eggs + fruit",
          "Start with simple recipes (under 20 minutes), master those first",
          "Cook for 1-2 weeks same meals to build skill and muscle memory",
          "Once comfortable, add 5 more meals for variety"
        ]
      },
      {
        title: "Understand nutrition basics and plate balance",
        bullets: [
          "Read nutrition labels: serving size, calories, protein, fiber, sodium",
          "Plate structure at every meal: ½ plate vegetables, ¼ protein, ¼ grains",
          "Hydration: drink water throughout day, aim for consistent color urine",
          "Portion sense: palm-sized protein, fist-size carbs, thumb-size fat per meal",
          "Try tracking food for 3-7 days to understand your pattern"
        ]
      }
    ],
    concepts: ["Food safety", "Meal structure", "Nutrition literacy", "Portion control", "Meal prep basics"],
    terminology: [
      { term: "Mise en place", meaning: "Preparing and organizing all ingredients before cooking starts." },
      { term: "Cross-contamination", meaning: "Transfer of harmful bacteria from raw meat to other foods." },
      { term: "Macros", meaning: "Macronutrients: protein, carbs, fat that make up calories." }
    ],
    questions: [
      {
        q: "How do you know if produce is fresh?",
        a: "Firmness (squeeze gently), color (vibrant not dull), smell (fresh not odor), no visible damage or slime."
      }
    ],
    findMore: [
      "Watch cooking channels (Laura in the Kitchen, Basics with Babish) for visual guidance",
      "Take beginner cooking class in your community",
      "Follow food safety guidelines from USDA or local health department"
    ],
    whenThingsGoWrong: [
      "If recipe fails, restart with simpler version—practice matters",
      "If meal is bland, improve gradually: add herbs, spices, salt",
      "If health issues after eating, stop that ingredient and consult doctor if serious"
    ],
    references: [
      { title: "USDA MyPlate", url: "https://www.myplate.gov/" },
      { title: "NHS Healthy Eating", url: "https://www.nhs.uk/live-well/eat-well/" },
      { title: "Kitchen Safety Guide", url: "https://www.fsis.usda.gov/food-safety-education" }
    ],
    firstAction: "Pick 3 healthy meals you can repeat and cook them this week.",
    warning: "Avoid extreme diets; sustainable habits beat temporary restrictions.",
    quiz: [
      {
        question: "Safe food storage means:",
        options: ["Leave on counter", "Refrigerate within 2 hours unless specified otherwise", "Never check expiry dates", "Reuse containers without washing"],
        answer: 1,
        tip: "Temperature control prevents bacterial growth significantly."
      },
      {
        question: "Cross-contamination in the kitchen is prevented by:",
        options: ["Using one cutting board for everything", "Using separate boards and tools for raw and ready-to-eat foods", "Rinsing meat under water only", "Cooking everything at low heat"],
        answer: 1,
        tip: "Separate preparation areas and tools stop harmful bacteria from spreading."
      },
      {
        question: "A balanced plate at each meal should have approximately:",
        options: ["All grains, no vegetables", "Half vegetables, a quarter protein, a quarter grains", "Equal parts of everything", "Only protein and fat"],
        answer: 1,
        tip: "This simple ratio ensures nutrient variety without needing to count calories."
      }
    ]
  },
  intermediate: {
    intro: "Time to step up your food game. Meal planning, flavour combinations, and cooking efficiently for real life — not just survival mode. Your wallet and your body will thank you.",
    modules: [
      {
        title: "Plan weekly meals by budget and nutrition",
        bullets: [
          "Set weekly food budget and menu plan accordingly",
          "Theme each day: Pasta Monday, Stir-fry Wednesday, etc. for shopping ease",
          "Buy ingredients for 2-3 base meals that repeat with variations",
          "Batch cook: make double on Sunday for next 2-3 days",
          "Shop with list to avoid impulse buys; stick to perimeter for fresh foods"
        ]
      },
      {
        title: "Read nutrition labels and understand ingredient quality",
        bullets: [
          "Compare products: same nutrition, different prices? Buy cheaper",
          "Check ingredient list order (most to least): first ingredients matter most",
          "Understand added sugar, sodium, processed oil in prepared foods",
          "Whole foods (rice, beans) almost always better value than processed"
        ]
      },
      {
        title: "Batch cook efficiently for the week",
        bullets: [
          "Cook grains in bulk: rice, beans, lentils in large batches",
          "Roast vegetables and freeze portions",
          "Portion into containers immediately after cooking for grab-and-go",
          "Label containers with date and contents",
          "Reheat safely: microwave or stovetop briefly, not left at room temperature"
        ]
      }
    ],
    concepts: ["Meal planning", "Budget optimization", "Batch cooking", "Nutritional layering", "Ingredient quality"],
    findMore: [
      "Learn food storage times: how long different foods last",
      "Understand nutrients matching your specific health goals",
      "Join community gardens or CSA for fresh, cheap produce"
    ],
    quiz: [
      {
        question: "Batch cooking is effective because:",
        options: ["It always requires expensive equipment", "Cooking once produces multiple portions, saving time and effort throughout the week", "It only works for experienced cooks", "Fresh cooking every day is always nutritionally better"],
        answer: 1,
        tip: "One batch session can cover 3-4 days of balanced meals."
      },
      {
        question: "The first ingredient listed on a nutrition label indicates:",
        options: ["The most expensive ingredient", "The ingredient present in the highest amount by weight", "The healthiest ingredient", "The last added ingredient"],
        answer: 1,
        tip: "Ingredient order by weight tells you what the product is mostly made of."
      },
      {
        question: "Budget meal planning works best when you:",
        options: ["Shop daily for fresh ingredients", "Plan meals for the week, write a list, and buy staples in bulk", "Buy whatever is on offer without a plan", "Avoid repeating any meals ever"],
        answer: 1,
        tip: "A weekly plan with a list reduces impulse buying and food waste."
      }
    ]
  },
  advanced: {
    intro: "Cook with real confidence and creativity. Adapt recipes, cook for other people, understand nutrition properly, and make food that actually tastes amazing every time.",
    modules: [
      {
        title: "Optimize nutrition for specific goals",
        bullets: [
          "Athletic goals: protein timing and total intake",
          "Weight management: calorie awareness but not obsession",
          "Blood sugar management: macronutrient balance, fiber intake",
          "Sustainability: long-term habits, not short-term changes"
        ]
      }
    ],
    quiz: [
      {
        question: "Protein timing matters most for people who:",
        options: ["Eat randomly without goals", "Are pursuing specific athletic performance or body composition goals", "Avoid all exercise", "Only care about total calories"],
        answer: 1,
        tip: "For specific performance goals, distributing protein throughout the day improves muscle protein synthesis."
      },
      {
        question: "Sustainable eating habits differ from restrictive diets because they:",
        options: ["Require extreme willpower to maintain", "Are flexible, enjoyable, and maintainable long-term without deprivation", "Eliminate entire food groups permanently", "Focus only on short-term results"],
        answer: 1,
        tip: "Habits you can maintain for years beat perfect diets you abandon in weeks."
      },
      {
        question: "Cooking for multiple dietary needs simultaneously is made easier by:",
        options: ["Refusing all dietary requests", "Cooking base ingredients separately and combining at serving", "Always cooking separate full meals for each person", "Ignoring individual dietary needs"],
        answer: 1,
        tip: "Modular cooking allows customisation without doubling effort."
      }
    ]
  }
};

// EMERGENCY CALLING AND RESPONSE - Structured response to emergencies
const EMERGENCY_LEVEL_CONTENT = {
  beginner: {
    intro: "Panic is the enemy in emergencies. Knowing the right steps in advance means you can actually help when it matters most — and trust us, being prepared makes ALL the difference.",
    modules: [
      {
        title: "Make emergency calls that get you help fast",
        bullets: [
          "Call emergency number immediately (911, 999, 112, etc.)",
          "State your location first and most clearly",
          "Describe what happened in one sentence",
          "Answer dispatcher's questions clearly and stay on the line",
          "Don't hang up until dispatcher says it's okay"
        ]
      },
      {
        title: "Assess scene safety and your role",
        bullets: [
          "Never enter an unsafe scene trying to help—you become another victim",
          "Check: Is there traffic danger? Gas leak? Violence? Active threat?",
          "If unsafe, stay away and call authorities with description",
          "If safe, check if person is responsive and breathing",
          "Don't move person unless staying creates greater danger"
        ]
      },
      {
        title: "Support person until help arrives",
        bullets: [
          "Keep them calm and warm (cover with blanket if available)",
          "Monitor breathing and responsiveness every minute",
          "Note any changes: temperature, color, sounds, level of consciousness",
          "Prepare to tell responders what you've observed",
          "Move items away from person's reach (seizure prevention)"
        ]
      }
    ],
    concepts: ["Scene safety", "Communication clarity", "Triage basics", "Dispatcher guidance", "Witness role"],
    terminology: [
      { term: "Dispatcher", meaning: "Emergency operator who routes help and gives phone-based instructions." },
      { term: "Scene Safety", meaning: "Checking whether environment is safe before helping." },
      { term: "Responsiveness", meaning: "Whether person is awake and can respond to voice or touch." }
    ],
    questions: [
      {
        q: "Person collapsed in intersection. First action?",
        a: "Check if scene is safe (no traffic danger). Call 911 first. Give location clearly. Don't move them unless traffic danger. Report condition."
      }
    ],
    findMore: [
      "Memorize your local emergency numbers and write them down",
      "Learn your city's address system to give accurate location",
      "Watch dispatch recordings to hear what good communication sounds like"
    ],
    whenThingsGoWrong: [
      "If you panic, say so to dispatcher: 'I'm panicked but I'll do my best'—they're trained for this",
      "If call drops, call back immediately from same or different phone",
      "If person stops responding, tell dispatcher—this may prompt CPR guidance"
    ],
    references: [
      { title: "Ready.gov Emergency Plans", url: "https://www.ready.gov/plan" },
      { title: "Red Cross Preparedness", url: "https://www.redcross.org/" },
      { title: "NENA 911 Information", url: "https://www.nena.org/" }
    ],
    firstAction: "Write down your local emergency number and full address in an accessible place.",
    warning: "Never enter unsafe scenes; correct information to responders is often more valuable than unsafe intervention.",
    quiz: [
      {
        question: "When calling emergency services, what should you say first?",
        options: ["Your name", "Your exact location", "What happened", "How you feel"],
        answer: 1,
        tip: "Location helps dispatchers send help fastest."
      },
      {
        question: "If an emergency call drops, you should:",
        options: ["Wait for them to call back", "Call back immediately or have someone else call", "Send a text message instead", "Assume help is already on the way"],
        answer: 1,
        tip: "Dispatchers try to call back but you should not rely on this—call back immediately."
      },
      {
        question: "When helping at an emergency scene, you should NOT:",
        options: ["Tell the dispatcher what you observe", "Enter an unsafe environment that could make you a second victim", "Keep the person calm", "Monitor their responsiveness"],
        answer: 1,
        tip: "A second victim worsens the situation—your accurate information is often more valuable than unsafe intervention."
      }
    ]
  },
  intermediate: {
    intro: "You've learned the basics — now let's build your emergency toolkit. Different situations, equipment you might need, and how to stay calm and coordinate help when things get serious.",
    modules: [
      {
        title: "Use step-by-step emergency call script",
        bullets: [
          "Statement: 'There's an emergency at [exact location]'",
          "Situation: 'Person is [describe condition]'",
          "Action: 'I'm/We're [what you're doing]'",
          "Wait for dispatcher questions and answer clearly",
          "Ask for repeating critical info—confirms understanding"
        ]
      },
      {
        title: "Guide bystanders and assign simple tasks",
        bullets: [
          "Point to specific person: 'You in blue shirt, call 911'",
          "Assign roles: one person to guide ambulance, one to gather information",
          "Keep instructions simple and under 3 steps",
          "Get someone to wait at entrance to direct emergency responders",
          "Clear area so emergency responders have access"
        ]
      },
      {
        title: "Monitor and document changes while waiting",
        bullets: [
          "Check responsiveness every few minutes: are they conscious?",
          "Monitor breathing: is it normal, shallow, or absent?",
          "Watch for bleeding, vomiting, or other changes",
          "Note times of changes: 'At 2:15 pm they responded; at 2:18 pm they didn't respond'",
          "Communicate changes to dispatcher when they call back or ask"
        ]
      }
    ],
    concepts: ["Scene management", "Bystander coordination", "Observation skills", "Communication protocol", "Time awareness"],
    findMore: [
      "Take certified first aid and CPR training with scenario practice",
      "Practice giving location information clearly to dispatcher",
      "Understand what information emergency responders need most"
    ],
    quiz: [
      {
        question: "When assigning tasks to bystanders, the most effective approach is:",
        options: ["Shouting for anyone to do something", "Pointing to a specific person and giving them one clear task", "Leaving everyone to decide themselves", "Assigning all tasks to one person"],
        answer: 1,
        tip: "Specific assignment overcomes the bystander effect and reduces confusion."
      },
      {
        question: "Documenting time and changes during an emergency helps because:",
        options: ["It keeps you busy while waiting", "Responders use this timeline to assess how long conditions have persisted", "It is required by law", "It helps the victim directly"],
        answer: 1,
        tip: "Time of onset and changes in condition are critical diagnostic information for paramedics."
      },
      {
        question: "When following dispatcher instructions during an emergency, you should:",
        options: ["Use your own judgment instead", "Follow them carefully even if unusual—dispatchers are trained for this", "Only follow them if you personally agree", "Ask a bystander for a second opinion first"],
        answer: 1,
        tip: "Dispatchers can guide trained interventions like CPR—follow them without hesitation."
      }
    ]
  },
  advanced: {
    intro: "Design emergency preparedness for your whole household. Practice drills, clear protocols, and confident leadership when things get really serious. Preparation is protection.",
    modules: [
      {
        title: "Prepare and run household emergency drills",
        bullets: [
          "Create emergency action plan for different scenarios",
          "Run drills under time pressure to test actual response",
          "Debrief: what worked, what didn't, how to improve",
          "Update plan based on drill findings",
          "Practice quarterly to keep skills current"
        ]
      }
    ],
    quiz: [
      {
        question: "An effective household emergency drill debrief should cover:",
        options: ["Only what went well to build confidence", "What worked, what failed, and specific improvements to the plan", "How long the drill took", "Whether everyone enjoyed it"],
        answer: 1,
        tip: "Honest debrief makes the next drill and real event significantly better."
      },
      {
        question: "Quarterly emergency drill practice matters because:",
        options: ["More frequent practice creates unnecessary anxiety", "Skills and decision-making degrade without regular practice and refresh", "Once-a-year drills are always sufficient", "Scenarios never change"],
        answer: 1,
        tip: "Regular practice converts knowledge into reliable reflex under real stress."
      },
      {
        question: "Emergency information sheets stored with documents should include:",
        options: ["Only your name and phone number", "Medical conditions, medications, allergies, and emergency contacts for each household member", "Only legal documents", "Financial records only"],
        answer: 1,
        tip: "Complete emergency information enables faster and safer care from responders who do not know you."
      }
    ]
  }
};

const bodySlug = document.body.dataset.topic || null;
const params = new URLSearchParams(window.location.search);
const querySlug = params.get("topic");
const slug = bodySlug || querySlug;
const fromTopicsDir = window.location.pathname.includes("/topics/");
const homeHref = fromTopicsDir ? "../index.html" : "index.html";
const iconBasePath = fromTopicsDir ? "../icons" : "icons";

const topic = TOPICS.find((item) => item.slug === slug);
const requestedLevel = normalizeLevel(params.get("level"));

const headerRoot = document.getElementById("topic-header");
const modulesRoot = document.getElementById("topic-modules");
const levelRoot = document.getElementById("topic-levels");
const languageRoot = document.getElementById("topic-language");
const referencesRoot = document.getElementById("topic-references");
const supportRoot = document.getElementById("topic-support");
const quizRoot = document.getElementById("topic-quiz");
const firstActionRoot = document.getElementById("first-action");
const warningRoot = document.getElementById("warning-note");

setFavicon(topic ? `${iconBasePath}/${topic.slug}.svg` : `${iconBasePath}/real-world-cirricullum.svg`);

if (!topic) {
  headerRoot.innerHTML = `
    <p class="eyebrow">Track Not Found</p>
    <h1>Choose a learning track from the homepage</h1>
    <p>The selected topic does not exist or the link is outdated.</p>
    <a href="${homeHref}" class="btn btn-primary">Go to Homepage</a>
  `;
} else {
  renderTopic(topic, requestedLevel);
}

function normalizeLevel(levelValue) {
  if (LEVELS.includes(levelValue)) {
    return levelValue;
  }

  return "beginner";
}

function setFavicon(href) {
  let icon = document.querySelector('link[rel="icon"]');

  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/svg+xml";
    document.head.appendChild(icon);
  }

  icon.href = href;
}

function renderTopic(selectedTopic, level) {
  const levelData = getLevelData(selectedTopic, level);
  const visuals = TOPIC_VISUALS[selectedTopic.slug] || null;
  document.title = `${selectedTopic.name} | ${LEVEL_LABELS[level]} | The Real World Cirricullum`;

  headerRoot.innerHTML = `
    ${visuals ? `<span class="topic-hero-badge" aria-hidden="true">${visuals.emoji}</span>` : ""}
    ${visuals ? `<p class="topic-tagline">${visuals.tagline}</p>` : ""}
    <p class="eyebrow">Practical Track</p>
    <h1>${selectedTopic.name}</h1>
    <p>${levelData.intro || selectedTopic.summary}</p>
    <div class="level-tabs" role="tablist" aria-label="Topic levels">
      ${LEVELS.map((item) => `
        <button
          class="level-tab ${item === level ? "is-active" : ""}"
          role="tab"
          aria-selected="${item === level}"
          data-level="${item}"
          type="button"
        >
          ${LEVEL_LABELS[item]}
        </button>
      `).join("")}
    </div>
  `;

  attachTabHandlers(selectedTopic);
  renderModules(levelData, selectedTopic);
  renderLevelFocus(selectedTopic, level);
  renderConceptsAndTerms(levelData);
  renderReferences(levelData, selectedTopic);
  renderSupport(levelData, selectedTopic);
  renderQuiz(selectedTopic, levelData, level);

  firstActionRoot.innerHTML = `
    <h3>🏁 Your First Move</h3>
    <p>${levelData.firstAction || selectedTopic.firstAction}</p>
  `;

  warningRoot.innerHTML = `
    <h3>⚠️ Real Talk</h3>
    <p>${levelData.warning || selectedTopic.warning}</p>
  `;
}

function attachTabHandlers(selectedTopic) {
  const tabButtons = headerRoot.querySelectorAll(".level-tab");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLevel = normalizeLevel(button.dataset.level);
      const nextParams = new URLSearchParams(window.location.search);
      nextParams.set("level", nextLevel);

      if (!fromTopicsDir && slug) {
        nextParams.set("topic", slug);
      }

      const nextUrl = `${window.location.pathname}?${nextParams.toString()}`;
      window.history.replaceState({}, "", nextUrl);
      renderTopic(selectedTopic, nextLevel);
    });
  });
}

function getLevelData(selectedTopic, level) {
  // Check for level-specific content structures for each topic
  const levelContentMap = {
    "personal-finance": PERSONAL_FINANCE_LEVEL_CONTENT,
    "law-for-daily-life": LAW_LEVEL_CONTENT,
    "personal-safety-defence": SAFETY_LEVEL_CONTENT,
    "health-first-aid": HEALTH_LEVEL_CONTENT,
    "mental-health-emotional-skills": MENTAL_HEALTH_LEVEL_CONTENT,
    "communication-negotiation": COMMUNICATION_LEVEL_CONTENT,
    "career-work-literacy": CAREER_LEVEL_CONTENT,
    "digital-literacy-cyber-safety": DIGITAL_LEVEL_CONTENT,
    "home-life-admin": HOME_ADMIN_LEVEL_CONTENT,
    "cooking-eating": COOKING_LEVEL_CONTENT,
    "calling-handling-emergency-situations": EMERGENCY_LEVEL_CONTENT
  };

  if (levelContentMap[selectedTopic.slug]) {
    return levelContentMap[selectedTopic.slug][level];
  }

  const terminologyChunk = chunkByLevel(selectedTopic.terminology, level);
  const conceptChunk = chunkByLevel(selectedTopic.concepts, level);
  const moduleChunk = chunkByLevel(selectedTopic.modules, level);

  return {
    intro: `${LEVEL_LABELS[level]} focus for ${selectedTopic.name}.`,
    modules: moduleChunk.length > 0 ? moduleChunk : selectedTopic.modules,
    concepts: conceptChunk.length > 0 ? conceptChunk : selectedTopic.concepts,
    terminology: terminologyChunk.length > 0 ? terminologyChunk : selectedTopic.terminology,
    questions: [
      {
        q: `What should I achieve in ${LEVEL_LABELS[level].toLowerCase()} for ${selectedTopic.name}?`,
        a: (selectedTopic.levels[level] || []).join("; ")
      }
    ],
    findMore: selectedTopic.findMore,
    whenThingsGoWrong: selectedTopic.whenThingsGoWrong,
    references: selectedTopic.references,
    firstAction: selectedTopic.firstAction,
    warning: selectedTopic.warning,
    quiz: selectedTopic.quiz
  };
}

function chunkByLevel(items, level) {
  if (!Array.isArray(items) || items.length === 0) {
    return [];
  }

  const levelIndex = LEVELS.indexOf(level);
  const chunkSize = Math.ceil(items.length / LEVELS.length);
  const start = levelIndex * chunkSize;
  const end = start + chunkSize;
  return items.slice(start, end);
}

function renderModules(levelData, selectedTopic) {
  const visuals = selectedTopic ? TOPIC_VISUALS[selectedTopic.slug] : null;
  const moduleEmojis = visuals ? visuals.moduleEmojis : [];

  modulesRoot.innerHTML = `
    <div class="section-head">
      <h2>What You'll Learn 📚</h2>
      <p>Work through each module at your own pace — no rush!</p>
    </div>
    <div class="cards" id="module-cards"></div>
  `;

  const moduleCards = document.getElementById("module-cards");
  for (const [index, module] of levelData.modules.entries()) {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 80}ms`;
    const emoji = moduleEmojis[index % moduleEmojis.length] || "";
    card.innerHTML = `
      ${emoji ? `<span class="module-icon" aria-hidden="true">${emoji}</span>` : ""}
      <h3>${index + 1}. ${module.title}</h3>
      <ul>${module.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    moduleCards.appendChild(card);
  }

  if (visuals && visuals.funFact) {
    const factBox = document.createElement("div");
    factBox.className = "fun-fact-card";
    factBox.innerHTML = `
      <h4>Did You Know?</h4>
      <p>${visuals.funFact}</p>
    `;
    modulesRoot.appendChild(factBox);
  }
}

function renderLevelFocus(selectedTopic, level) {
  levelRoot.innerHTML = `
    <div class="section-head">
      <h2>Your Mission 🎯</h2>
      <p>Hit these goals at this level before moving on — you've got this!</p>
    </div>
    <div class="quiz-shell">
      <ul>
        ${(selectedTopic.levels[level] || []).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderConceptsAndTerms(levelData) {
  languageRoot.innerHTML = `
    <div class="section-head">
      <h2>Words to Know + Big Questions 🤓</h2>
      <p>Understanding these terms means you'll never be lost in a conversation about this topic.</p>
    </div>
    <div class="info-grid">
      <article class="card">
        <h3>🧩 Core Concepts</h3>
        <ul>${levelData.concepts.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>📖 Key Terms</h3>
        <ul>
          ${levelData.terminology
            .map((item) => `<li><strong>${item.term}:</strong> ${item.meaning}</li>`)
            .join("")}
        </ul>
      </article>
      <article class="card">
        <h3>❓ Real Questions People Ask</h3>
        <ul>
          ${levelData.questions
            .map((item) => `<li><strong>${item.q}</strong><br />${item.a}</li>`)
            .join("")}
        </ul>
      </article>
    </div>
  `;
}

function renderReferences(levelData, selectedTopic) {
  const refs = levelData.references || selectedTopic.references;

  referencesRoot.innerHTML = `
    <div class="section-head">
      <h2>Where to Learn More 🔗</h2>
      <p>These trusted sources go deeper — bookmark the ones that interest you!</p>
    </div>
    <div class="quiz-shell">
      <ul class="reference-list">
        ${refs
          .map((ref) => `<li><a href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.title}</a></li>`)
          .join("")}
      </ul>
    </div>
  `;
}

function renderSupport(levelData, selectedTopic) {
  const findMore = levelData.findMore || selectedTopic.findMore;
  const recovery = levelData.whenThingsGoWrong || selectedTopic.whenThingsGoWrong;

  supportRoot.innerHTML = `
    <div class="section-head">
      <h2>Go Deeper + When Things Get Tough 💪</h2>
      <p>Stuck or something went wrong? These steps will help you get back on track.</p>
    </div>
    <div class="info-grid">
      <article class="card">
        <h3>🔍 Want to Learn Even More?</h3>
        <ul>${findMore.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>🆘 When Things Go Wrong</h3>
        <ul>${recovery.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    </div>
  `;
}

function mergeAndEnsureQuizQuestions(levelData, selectedTopic, minimum = 3) {
  const levelQuestions = Array.isArray(levelData.quiz) ? levelData.quiz : [];
  // Use only level-specific quiz questions to prevent the same questions repeating across all levels
  const pool = [...levelQuestions];
  const seen = new Set();
  const signatures = [];
  const merged = [];

  function normalizeQuestionText(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isNearDuplicate(normalizedCandidate) {
    const candidateTokens = normalizedCandidate
      .split(" ")
      .filter((token) => token.length > 2);

    if (candidateTokens.length === 0) {
      return false;
    }

    for (const existing of signatures) {
      if (existing === normalizedCandidate) {
        return true;
      }

      if (existing.includes(normalizedCandidate) || normalizedCandidate.includes(existing)) {
        return true;
      }

      const existingTokens = existing.split(" ").filter((token) => token.length > 2);
      if (existingTokens.length === 0) {
        continue;
      }

      const existingSet = new Set(existingTokens);
      const overlap = candidateTokens.filter((token) => existingSet.has(token)).length;
      const similarity = overlap / Math.max(candidateTokens.length, existingTokens.length);

      if (similarity >= 0.72) {
        return true;
      }
    }

    return false;
  }

  pool.forEach((item) => {
    if (!item || typeof item.question !== "string" || !Array.isArray(item.options)) {
      return;
    }

    const questionKey = normalizeQuestionText(item.question);
    if (!questionKey || seen.has(questionKey) || isNearDuplicate(questionKey)) {
      return;
    }

    seen.add(questionKey);
    signatures.push(questionKey);
    merged.push(item);
  });

  if (merged.length >= minimum) {
    return merged;
  }

  const conceptPool = Array.isArray(levelData.concepts)
    ? levelData.concepts
    : Array.isArray(selectedTopic.concepts)
      ? selectedTopic.concepts
      : [];

  const termPool = Array.isArray(levelData.terminology)
    ? levelData.terminology
    : Array.isArray(selectedTopic.terminology)
      ? selectedTopic.terminology
      : [];

  const modulePool = Array.isArray(levelData.modules)
    ? levelData.modules
    : Array.isArray(selectedTopic.modules)
      ? selectedTopic.modules
      : [];

  const fallbackCandidates = [];

  if (conceptPool.length > 0) {
    const primary = conceptPool[0];
    const distractors = conceptPool.slice(1, 4);
    while (distractors.length < 3) {
      distractors.push(`General awareness ${distractors.length + 1}`);
    }
    fallbackCandidates.push({
      question: `Which concept is a core focus in this level?`,
      options: [primary, ...distractors],
      answer: 0,
      tip: "Review the key concepts card and match terms with examples."
    });
  }

  if (modulePool.length > 0) {
    const primaryModule = modulePool[0]?.title || "Core module";
    const alt1 = modulePool[1]?.title || "Optional module";
    const alt2 = modulePool[2]?.title || "Advanced module";
    fallbackCandidates.push({
      question: "Which module should you prioritize first in this level?",
      options: [primaryModule, alt1, alt2, "Any random module without sequence"],
      answer: 0,
      tip: "Start from the first module and build fundamentals before moving ahead."
    });
  }

  if (termPool.length > 0) {
    const firstTerm = termPool[0];
    fallbackCandidates.push({
      question: `What best describes \"${firstTerm.term}\"?`,
      options: [
        firstTerm.meaning,
        "A motivational quote without practical use",
        "A random trend with no real-world impact",
        "A fixed rule that never changes"
      ],
      answer: 0,
      tip: "Check the terminology card and connect the term with its practical meaning."
    });
  }

  fallbackCandidates.push({
    question: "What is the best next step after scoring low in a quiz?",
    options: [
      "Review missed concepts and retake",
      "Skip practice and move on",
      "Memorize options only",
      "Avoid references"
    ],
    answer: 0,
    tip: "Use references and retry for mastery."
  });

  fallbackCandidates.forEach((item) => {
    if (merged.length >= minimum) {
      return;
    }

    const key = normalizeQuestionText(item.question);
    if (seen.has(key) || isNearDuplicate(key)) {
      return;
    }

    seen.add(key);
    signatures.push(key);
    merged.push(item);
  });

  return merged;
}

function renderQuiz(selectedTopic, levelData, level) {
  const questions = mergeAndEnsureQuizQuestions(levelData, selectedTopic, 3).map((q) => {
    const indices = q.options.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return { ...q, options: indices.map((i) => q.options[i]), answer: indices.indexOf(q.answer) };
  });
  if (!Array.isArray(questions) || questions.length === 0) {
    return;
  }

  const scoreKey = `quiz-score-${selectedTopic.slug}-${level}`;
  const bestScoreKey = `quiz-best-score-${selectedTopic.slug}-${level}`;
  let previousScore = null;
  let bestScore = null;

  try {
    previousScore = JSON.parse(localStorage.getItem(scoreKey) || "null");
  } catch {
    previousScore = null;
  }

  try {
    bestScore = JSON.parse(localStorage.getItem(bestScoreKey) || "null");
  } catch {
    bestScore = null;
  }

  quizRoot.innerHTML = `
    <div class="section-head">
      <h2>${LEVEL_LABELS[level]} Quiz</h2>
      <p>Answer all questions, unlock colorful feedback, and review missed concepts.</p>
    </div>
    <div class="quiz-shell">
      <div class="quiz-meta" id="quiz-meta"></div>
      <form id="topic-quiz-form"></form>
      <div id="quiz-result" class="quiz-result"></div>
    </div>
  `;

  const meta = document.getElementById("quiz-meta");
  const form = document.getElementById("topic-quiz-form");
  const result = document.getElementById("quiz-result");

  function getAnsweredCount() {
    let answered = 0;
    for (let qIndex = 0; qIndex < questions.length; qIndex += 1) {
      if (form.querySelector(`input[name="q${qIndex}"]:checked`)) {
        answered += 1;
      }
    }
    return answered;
  }

  function renderMeta() {
    const answered = getAnsweredCount();
    const progress = Math.round((answered / questions.length) * 100);

    const scoreParts = [];
    if (previousScore && typeof previousScore.score === "number") {
      scoreParts.push(`<span class="quiz-chip">Last: ${previousScore.score}/${questions.length}</span>`);
    }
    if (bestScore && typeof bestScore.score === "number") {
      scoreParts.push(`<span class="quiz-chip quiz-chip-best">Best: ${bestScore.score}/${questions.length}</span>`);
    }

    meta.innerHTML = `
      <div class="quiz-progress-wrap" aria-live="polite">
        <p class="quiz-progress-label">Progress: ${answered}/${questions.length}</p>
        <div class="quiz-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
          <span class="quiz-progress-fill" style="width: ${progress}%;"></span>
        </div>
      </div>
      <div class="quiz-score-chips">${scoreParts.join("")}</div>
    `;
  }

  questions.forEach((question, qIndex) => {
    const block = document.createElement("fieldset");
    block.className = "quiz-question";
    block.dataset.questionIndex = String(qIndex);
    block.innerHTML = `
      <legend>${qIndex + 1}. ${question.question}</legend>
      ${question.options
        .map(
          (option, oIndex) => `
          <label class="quiz-option">
            <input type="radio" name="q${qIndex}" value="${oIndex}" />
            <span>${option}</span>
          </label>
        `
        )
        .join("")}
      <p class="quiz-answer-note" id="answer-note-${qIndex}" aria-live="polite"></p>
    `;
    form.appendChild(block);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "btn btn-primary";
  submit.textContent = "Check Answers";
  form.appendChild(submit);

  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "btn btn-secondary";
  retry.textContent = "Try Again";
  retry.style.marginLeft = "0.65rem";
  retry.addEventListener("click", () => {
    form.reset();
    Array.from(form.querySelectorAll(".quiz-question")).forEach((block) => {
      block.classList.remove("quiz-question-correct", "quiz-question-wrong");
    });
    Array.from(form.querySelectorAll(".quiz-answer-note")).forEach((note) => {
      note.textContent = "";
    });
    result.innerHTML = "";
    renderMeta();
  });
  form.appendChild(retry);

  form.addEventListener("change", renderMeta);
  renderMeta();

  if (previousScore && typeof previousScore.score === "number") {
    const savedDate = new Date(previousScore.timestamp).toLocaleDateString();
    result.innerHTML = `<p><strong>Last score:</strong> ${previousScore.score}/${questions.length} on ${savedDate}</p>`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    let answeredCount = 0;
    const review = [];

    questions.forEach((question, qIndex) => {
      const selected = form.querySelector(`input[name="q${qIndex}"]:checked`);
      const questionBlock = form.querySelector(`[data-question-index="${qIndex}"]`);
      const answerNote = form.querySelector(`#answer-note-${qIndex}`);
      questionBlock.classList.remove("quiz-question-correct", "quiz-question-wrong");

      if (!selected) {
        review.push(`<li>Q${qIndex + 1}: unanswered</li>`);
        answerNote.textContent = "Please pick an option.";
        return;
      }

      answeredCount += 1;
      const chosen = Number(selected.value);
      const isCorrect = chosen === question.answer;
      const correctAnswerText = question.options[question.answer];

      if (isCorrect) {
        score += 1;
        questionBlock.classList.add("quiz-question-correct");
        answerNote.textContent = "Correct! Great job.";
        review.push(`<li>Q${qIndex + 1}: correct</li>`);
      } else {
        questionBlock.classList.add("quiz-question-wrong");
        const tip = question.tip ? ` Tip: ${question.tip}` : "";
        answerNote.textContent = `Correct answer: ${correctAnswerText}.${tip}`;
        review.push(`<li>Q${qIndex + 1}: revise this concept.${tip}</li>`);
      }
    });

    if (answeredCount !== questions.length) {
      result.innerHTML = `<p><strong>Please answer all questions before submitting.</strong></p>`;
      renderMeta();
      return;
    }

    const timestamp = Date.now();
    previousScore = { score, timestamp };
    localStorage.setItem(scoreKey, JSON.stringify(previousScore));

    if (!bestScore || score > bestScore.score) {
      bestScore = { score, timestamp };
      localStorage.setItem(bestScoreKey, JSON.stringify(bestScore));
    }

    const percentage = Math.round((score / questions.length) * 100);
    const summary =
      percentage >= 80
        ? "Excellent progress. You're quiz-ready."
        : percentage >= 50
          ? "Good start. Review missed concepts and try once more."
          : "Keep practicing. Review references, then retake.";

    result.innerHTML = `
      <p><strong>Score:</strong> ${score}/${questions.length} (${percentage}%)</p>
      <p>${summary}</p>
      <ul>${review.join("")}</ul>
    `;

    renderMeta();
  });
}
