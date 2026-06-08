/* ============================================================
   Metode-demo — ENGLISH text.  window.MD_TX.en
   ============================================================ */
window.MD_TX = window.MD_TX || {};
window.MD_TX.en = {

  circle: {
    hub: {
      short: "The project", csub: "Collaboration leadership", title: "Collaboration leadership — the core",
      role: "The project at the centre · the hub of the wheel",
      ansvar: ["Sets shared goals, direction and takt for the whole wheel",
        "Leads the collaboration and drives the Lean processes from day one",
        "Owns the overall meeting structure and decision rhythm",
        "Ensures every group pulls in the same direction, towards the same goal",
        "Removes obstacles the groups cannot solve themselves",
        "Builds a culture of trust, openness and continuous improvement"],
      samspill: "The project sits at the centre, and at the core is the collaboration leadership. Everything else organises itself around this — not as a hierarchy, but as a wheel where closeness to the core reflects how tightly you work towards the goal.",
      tips: "The core is not a boss — it is the shared goal everyone optimises towards. This is the role Lean Communications most often fills."
    },
    nodes: {
      PL: { short: "Project management", title: "Project management", role: "The whole — progress, cost and quality",
        ansvar: ["Overall responsibility for progress, cost and quality", "Link to client, users and steering group", "Owns the meeting structure and the decision processes", "Manages contract, goals and incentive model", "Ensures resources and staffing match the takt", "Escalation point when groups get stuck"],
        samspill: "Sets the frame the groups solve within — leads the direction, but does not decide alone. Listens down through the wheel and gathers the basis for decisions where the work is done.",
        tips: "Leadership listens down through the wheel before it decides." },
      PRL: { short: "Design management", title: "Design management", role: "From model to buildable documentation",
        ansvar: ["Leads cross-disciplinary design towards production", "Steers maturity and the right order of decisions", "Owns the ICE/VDC meetings and the model-based process", "Ensures cross-disciplinary clarification and clash control", "Delivers work documentation in step with production", "Manages the design delivery plan (DDP)"],
        samspill: "Connects the discipline groups to the takt of production and makes sure the documentation is ready before the control area starts — not after.",
        tips: "Design is finished when production can build — not when the drawing looks «nice»." },
      PRODL: { short: "Production management", title: "Production management", role: "The build — takt and flow in the field",
        ansvar: ["Owns production and the takt plan out on site", "Steers the trains through the control areas", "Clears obstacles and secures flow between the trades", "Follows up HSE, quality and completion in the field", "Runs the daily/weekly takt meeting with the crews", "Gives feedback to design on buildability"],
        samspill: "Is the voice of «the floor» into leadership — and makes sure those who actually build help plan how.",
        tips: "Whoever builds should help plan." },
      IL: { short: "Procurement management", title: "Procurement management", role: "The right delivery at the right takt",
        ansvar: ["Strategic procurement linked to takt and progress", "Early involvement of suppliers and subcontractors", "Contract and interface management between the parties", "Owns the procurement plan against the production plan", "Secures the right quality and lead time in agreements", "Tracks the market and manages price and delivery risk"],
        samspill: "Makes sure the right delivery is in place at the right takt, and that suppliers become part of the team — not a counterparty.",
        tips: "Procurement is part of the plan — not an afterthought." },
      RL: { short: "Risk management", title: "Risk management", role: "Uncertainty — visible and managed",
        ansvar: ["Owns the overall risk picture for the project", "Runs the risk register, measures and follow-up", "Links risk to the calculation, takt and decisions", "Quantifies uncertainty (cost and time)", "Ensures risk is reduced before it hits the build", "Tracks opportunities, not just threats"],
        samspill: "Is a premise into every group in the wheel — uncertainty is owned where it arises, but managed collectively.",
        tips: "Risk that does not cost in the calculation is risk you are not managing." },
      GLM: { short: "Group leaders' meeting", title: "The group leaders' meeting", role: "«Scrum of scrums» — the glue of the wheel",
        ansvar: ["Gathers all group leaders — as a «scrum of scrums»", "Secures shared goals, interfaces and the whole", "Clarifies dependencies between the groups", "Gives leadership insight into progress and obstacles", "Takes the decisions that keep the flow going", "Anchors takt and priorities across the groups"],
        samspill: "Perhaps the most important meeting in the whole wheel: here we see that every group works towards the same goal, and take the decisions needed so nothing stalls.",
        tips: "Without a well-functioning group leaders' meeting, cross-disciplinarity falls apart." },
      FGA: { short: "Ground & structure", title: "Discipline group: Ground, foundations and structure", role: "Cross-functional team — sets the rhythm",
        ansvar: ["Cross-functional team for ground, foundations and structure", "Works in sprints of 1–2 weeks", "Owns the whole chain from solution to assembly", "Coordinates geotechnics, structural engineering and execution", "Sets the takt the other trains follow", "Clarifies tolerances and interfaces towards the facade"],
        samspill: "Sets the rhythm the other trains follow — and pulls in geotechnics and structural engineering when premises need clarifying.",
        tips: "Cross-functional means the discipline owns the whole chain — not just drawing or building." },
      FGB: { short: "Roof & facade", title: "Discipline group: Roof and facades", role: "The envelope — towards a weathertight building",
        ansvar: ["Building envelope: roof, facade, windows and sealing", "Sprint-based development towards a weathertight building", "Coordinates tolerances, fixings and assembly", "Secures moisture, heat and air tightness with building physics", "Plans scaffolding, crane and logistics at height", "Hangs deliveries on the takt of the structure"],
        samspill: "Stays close to the structure and the technical systems — a weathertight building is the milestone that unlocks all interior work.",
        tips: "An early weathertight building unlocks every interior train." },
      FGC: { short: "Technical systems", title: "Discipline group: Technical systems", role: "HVAC, electrical and automation as one",
        ansvar: ["HVAC, electrical and automation as one combined team", "Routing, shafts and technical integration (ITB)", "Clash control in the model before production", "Commissioning, testing and balancing", "Coordinates technical rooms and capacities", "Plans deliveries against the takt"],
        samspill: "Solves the interfaces between the technical disciplines in sprints — and pulls in HVAC/electrical premises when needed.",
        tips: "The technical disciplines must be planned together, not separately." },
      FGD: { short: "Interior", title: "Discipline group: Interior works", role: "Towards completion and handover",
        ansvar: ["Walls, ceilings, floors, surfaces and fit-out", "Sprint-based work towards completion", "Standardisation and repetition of rooms", "Coordinates sequence against the technical disciplines", "Secures quality and finish at handover", "Plans fit-out deliveries on takt"],
        samspill: "Follows the technical systems on the takt — and standardises rooms early so repetition gives flow and even quality.",
        tips: "Repetition is the interior discipline's friend — standardise early." },
      PGK: { short: "Dynamic calculation", title: "Process group: Dynamic calculation", role: "Living cost in open book",
        ansvar: ["Living calculation in open book, updated continuously", "Links every decision to cost and maturity", "Follows the development towards the target price", "Makes the consequence of options visible to the disciplines", "Owns estimate uncertainty and reserves", "Reports transparently to all parties"],
        samspill: "Gives every group the true cost in real time, so decisions are made on numbers that actually hold.",
        tips: "The calculation is alive — it is not a final document." },
      PGI: { short: "Procurement & risk", title: "Process group: Procurement and risk", role: "Deliveries and uncertainty, operationally",
        ansvar: ["Operational procurement linked to takt", "Risk register and active follow-up of measures", "Suppliers into the process early", "Clarifies interfaces between deliveries", "Tracks lead times and critical orders", "Quantifies and closes risk continuously"],
        samspill: "Makes sure uncertainty and deliveries are managed before they hit the build — closely linked to the calculation and the planning.",
        tips: "Early procurement takes risk out of the project." },
      PGP: { short: "Planning", title: "Process group: Planning (takt)", role: "One shared takt for the whole project",
        ansvar: ["Production plan based on takt", "Detailed-design and procurement plan on takt", "Client decision plan linked to the takt", "Defines control areas and train sequence", "Keeps the plans synchronised and updated", "Measures plan reliability (PPC) and improves"],
        samspill: "Binds all plans to one shared takt — when the plans share a takt, the whole project speaks the same language.",
        tips: "When the plans share a takt, the whole project speaks the same language." },
      PGR: { short: "Site & logistics", title: "Process group: Site setup and logistics", role: "The flow on site",
        ansvar: ["Site setup, logistics and shared functions", "Vertical transport, cranes, hoists and storage", "HSE framework and safe operation on site", "Secures access, storage and just-in-time flow", "Coordinates shared resources between the trades", "Keeps the site setup adapted to the takt through the phases"],
        samspill: "Keeps the flow going for all the trains — invisible when it works, but a blocker for everyone when it fails.",
        tips: "Good site setup is invisible — bad site setup stops everything." },
      RIA: { short: "Acoustics", title: "Acoustics", role: "Premise advisor · pulled in on demand",
        ansvar: ["Room acoustics, sound insulation and reverberation", "Requirements and documentation against the standard", "Assists the interior and technical groups when needed", "Verifies solutions through measurement and control"],
        samspill: "Pulled in when a group asks for it — pull, not push. Clarifies the premises early, but contributes concretely when the solutions are actually developed.",
        tips: "Premise advisors have no fixed seat in the wheel; they contribute when the need arises." },
      RIM: { short: "Environment", title: "Environment / BREEAM", role: "Premise advisor · pulled in on demand",
        ansvar: ["Environmental, climate and sustainability premises", "BREEAM follow-up and point harvesting across groups", "Greenhouse-gas accounting and material choices", "Assists all groups when environmental requirements must be met"],
        samspill: "Assists all groups on pull — sustainability is a premise in every group, not a separate silo on the side.",
        tips: "Premises are clarified early, but the assistance is pulled in when needed." },
      RIByfy: { short: "Building physics", title: "Building physics", role: "Premise advisor · pulled in on demand",
        ansvar: ["Moisture, heat, condensation and air tightness", "Energy calculation and U-values in the envelope", "Assists the roof/facade and structure groups when needed", "Detailed solutions for thermal bridges and sealing"],
        samspill: "Comes in on pull when the envelope is developed — closely together with roof/facade and technical systems.",
        tips: "The right competence at the right time — neither before nor after." },
      RIBr: { short: "Fire", title: "Fire safety", role: "Premise advisor · pulled in on demand",
        ansvar: ["Fire-safety premises, concept and strategy", "Escape, compartmentation and fire resistance", "Verification against regulations and building code", "Assists discipline and process groups with clarifications"],
        samspill: "Pulled in when the groups need clarification — the premise is set early, but detailed help is given on pull.",
        tips: "Specialists are most valuable when they are pulled in precisely." },
      STOY: { short: "Noise & vibration", title: "Noise, vibration and sound", role: "Premise advisor · pulled in on demand",
        ansvar: ["External noise, vibration and limit values", "Noise during the construction and operation phases", "Assists the ground, facade and technical groups", "Measurement, calculation and mitigation"],
        samspill: "Pulled in when needed, with no fixed seat in the wheel — typically when groundwork, facade or technical systems are developed.",
        tips: "Noise and vibration are clarified as a premise — assistance is given on pull." },
      RIG: { short: "Geotechnics", title: "Geotechnics", role: "Premise advisor · pulled in on demand",
        ansvar: ["Ground conditions, settlement and foundation premises", "Ground investigations and geotechnical design", "Assists the ground/structure group in the early phase", "Assesses stability, sheet piling and bracing"],
        samspill: "Pulled in by the ground group right at the start — where much of the project's risk is decided before anything else can begin.",
        tips: "Geotechnics decides much of the risk right at the beginning." },
      UU: { short: "Universal design", title: "Universal design", role: "Premise advisor · pulled in on demand",
        ansvar: ["Accessibility and universal-design premises", "Requirements for guide lines, gradients, contrast and sound", "Assists the interior and architectural work when needed", "Verifies solutions against the building code and standards"],
        samspill: "Contributes on pull where the solutions are developed — accessibility is built in, not inspected in at the end.",
        tips: "Premise advisors should be available — not always present." },
      LYS: { short: "Light & daylight", title: "Light and daylight", role: "Premise advisor · pulled in on demand",
        ansvar: ["Daylight, lighting and glare", "Lighting calculation and energy together with the technical systems", "Assists the facade, interior and technical groups", "Balances daylight requirements against energy and solar shading"],
        samspill: "Pulled in when the groups ask for it — often at the interface between facade, automation and interior rooms.",
        tips: "The pull principle prevents advisors from producing work nobody asked for." }
    }
  },

  org: {
    styre: { short: "IPD board", title: "IPD board", ansvar: ["Highest decision-making body in execution", "Owns the target price and overall risk", "Decides on matters of principle"], note: "Governance level — equal representation from the parties." },
    ledelse: { short: "IPD leadership", title: "Integrated project leadership", ansvar: ["Daily leadership across the parties", "Owns progress, cost and quality", "Reports to the IPD board"], note: "From collaboration to line — but decisions are still made integrated." },
    PL2: { short: "PM", title: "Project manager", ansvar: ["Overall execution of progress, cost and quality", "Owns meeting structure, reporting and decision log", "Link to IPD leadership and client", "Secures staffing and resources against the takt"], note: "Leads the line, but still decides integrated with the parties." },
    PRL2: { short: "DM", title: "Design manager", ansvar: ["Remaining design and work documentation towards production", "Change handling and consequence assessment", "Owns the design delivery plan on takt", "Clash control and cross-disciplinary clarification"], note: "Delivers documentation before the control area starts — not after." },
    AL2: { short: "SM", title: "Site manager", ansvar: ["Production and takt in the field", "Obstacle clearing and daily steering of the crews", "HSE and quality on site", "Feedback on buildability to design"], note: "The voice of «the floor» into leadership." },
    ITB2: { short: "ITB coord.", title: "ITB coordinator", ansvar: ["Technical interfaces between the disciplines", "Commissioning, testing and balancing", "Owns the interface matrix (ITB)", "Secures integrated technical building installations"], note: "Binds the technical disciplines together from design to operation." },
    FG1b: { short: "DG1", title: "DG1 Design", ansvar: ["Work documentation ready on takt", "Cross-disciplinary model and clash control", "Clarifications on pull from production"], note: "" },
    FG2b: { short: "DG2", title: "DG2 Build", ansvar: ["Structure, ground and building works", "Sets the rhythm for the other trains", "Coordinates tolerances towards facade and technical"], note: "" },
    FG3b: { short: "DG3", title: "DG3 HVAC", ansvar: ["HVAC production on takt", "Routing and technical rooms", "Commissioning together with ITB"], note: "" },
    FG4b: { short: "DG4", title: "DG4 Electrical", ansvar: ["Electrical and telecom production on takt", "Routing and capacities", "Test and balancing with automation"], note: "" },
    FG5b: { short: "DG5", title: "DG5 ITB", ansvar: ["Technical integration across disciplines", "Function testing of interacting systems", "Handover of technical documentation"], note: "" },
    PG1b: { short: "PG1", title: "PG1 HSE", ansvar: ["Health, safety and environment in production", "Risk assessment of activities on the takt", "Safety rounds and closing of non-conformances"], note: "" },
    PG2b: { short: "PG2", title: "PG2 Calculation", ansvar: ["Final cost against target price in open book", "Links changes to cost and maturity", "Forecast and deviation reporting"], note: "" },
    PG3b: { short: "PG3", title: "PG3 User", ansvar: ["User follow-up and function clarification", "Manages changes in the user programme", "Prepares operation and takeover"], note: "" },
    vdc: { short: "VDC / ICE", title: "VDC and ICE process (support)", ansvar: ["Structured ICE meetings across disciplines", "Model-based decision support", "Measurement and continuous improvement"], note: "Runs alongside the line and binds the levels together — the core of the Lean Communications method." }
  },

  bindings: {
    b1: { k: "Lean Communications", t: "A weekly rhythm: collaboration meetings, weekly work plans (WWP) and a living obstacle list that keeps all disciplines on takt." },
    b2: { k: "Takt plan", t: "The production sequence for all disciplines through each control area — this module's own visualisation." },
    b3: { k: "BIM / VDC", t: "Open BIM (IFC) as a shared truth, with clash control and model maturity before production." },
    b4: { k: "Calculation (open book)", t: "Monthly transparency on cost — all groups see the same numbers, linked to maturity and the target price." },
    b5: { k: "ITB coordination", t: "An interface matrix that binds the technical disciplines together from design to commissioning." }
  },

  roles: {
    PL: { role: "Project manager", f1: "Sets the frame, meeting structure and shared goals for the collaboration. Leads the process — not the decisions.", f2: "Overall responsibility for progress, cost and quality in execution." },
    LK: { role: "Calculation lead", f1: "Builds the dynamic calculation in open book and links every decision to cost and maturity.", f2: "Steers the final cost towards the target price and reports deviations early." },
    SL: { role: "Collaboration lead", f1: "Facilitates the Lean processes, secures involvement from all disciplines and owns the weekly rhythm.", f2: "Follows the collaboration into the line and keeps the improvement work going." },
    PT: { role: "Technical project developer", f1: "Develops technical solutions and options together with the disciplines in the development phase.", f2: "Ensures the chosen solutions can be built and operated." },
    PV: { role: "Virtual development lead", f1: "Leads virtual project development — ICE, model and decision support.", f2: "Drives measurement, learning and continuous improvement through the whole execution." }
  },

  trades: { bygg: { navn: "Build" }, vvs: { navn: "HVAC" }, el: { navn: "Electrical" }, auto: { navn: "Automation" }, flate: { navn: "Surfaces" }, rigg: { navn: "Demolition/Site" } },

  taktAreas: ["CA-01 · Ground, foundations and basement", "CA-02 · Level 1 — public areas", "CA-03 · Level 2 — user rooms", "CA-04 · Level 3 — user rooms", "CA-05 · Level 4 — offices and meeting rooms", "CA-06 · Roof and technical", "CA-07 · Facade and envelope", "CA-08 · Outdoor areas and connections"],

  calc: {
    months: ["Jan 27", "Apr 27", "Jul 27", "Oct 27", "Jan 28", "Apr 28", "Jul 28", "Sep 28"],
    groups: {
      FG1: { navn: "DG1 Structure", sub: ["Concrete and foundations", "Steel and load-bearing", "Prefab slabs"] },
      FG2: { navn: "DG2 Facade and roof", sub: ["Facade elements", "Roof and roofing", "Windows and glass"] },
      FG3: { navn: "DG3 Technical (HVAC/EL)", sub: ["HVAC", "Electrical", "Automation"] },
      FG4: { navn: "DG4 Interior surfaces", sub: ["Partitions and ceilings", "Floors and coverings", "Fit-out"] },
      FG5: { navn: "DG5 Design", sub: ["Architect and structural", "Technical consultants", "VDC/BIM"] },
      FG8: { navn: "DG8 Site and logistics", sub: ["Site setup and operation", "Cranes and hoists", "Temporary works"] }
    },
    spg: [
      ["Net cost", "Actual costs for work performed — documented in open book."],
      ["Overhead (mark-up)", "Agreed mark-up for administration and indirect costs."],
      ["Risk and opportunities", "A shared pool managed actively through the risk register."],
      ["Profit", "Agreed profit, fixed and predictable for the parties."],
      ["KPI bonus", "Incentive linked to shared goal achievement (time, quality, HSE)."]
    ]
  },

  alt: {
    FG1: { navn: "DG1 Structure", items: [
      { navn: "Prefabricated concrete slabs", kons: "Shorter build time and less formwork on site, but requires early locking of geometry." },
      { navn: "Pile foundation vs. slab on grade", kons: "Reduces settlement risk on poor ground; higher calculation but lower risk pool." },
      { navn: "High-strength concrete in columns", kons: "Slimmer columns give more area, but require tighter quality assurance." }
    ]},
    FG2: { navn: "DG2 Facade", items: [
      { navn: "Prefab facade elements", kons: "Faster weathertight building and better HSE at height; transport and tolerance requirements." },
      { navn: "Green roof cover", kons: "Increased cost, but provides stormwater management and BREEAM points." },
      { navn: "Dynamic solar shading", kons: "Reduces cooling demand; interplay between facade, automation and energy." }
    ]},
    FG3: { navn: "DG3 Technical", items: [
      { navn: "Rectangular vs. round ducts", kons: "Round ducts give lower pressure loss and shaft space, but require redesign." },
      { navn: "Centralised vs. decentralised cooling", kons: "Centralised gives operational benefits; decentralised gives shorter routing." },
      { navn: "Free cooling from sea/river water", kons: "Large energy and cost potential, but depends on permits and piping." }
    ]},
    FG4: { navn: "DG4 Interior", items: [
      { navn: "Module-based user rooms", kons: "Industrialised production and even quality; requires strict standardisation." },
      { navn: "Adjustment of robustness requirements", kons: "Adapts surfaces to actual use without dropping below functional requirements." },
      { navn: "System walls vs. site-built partitions", kons: "System walls give flexibility for later reconfiguration." }
    ]},
    FG5: { navn: "DG5 Design", items: [
      { navn: "BREEAM ambition level", kons: "A higher level gives added cost now, but lower operating cost and market value." },
      { navn: "BIM detail level (LOD)", kons: "The right LOD at the right time saves design hours without increasing risk." },
      { navn: "Structured user process", kons: "Early locking reduces expensive changes late in production." }
    ]},
    PG1: { navn: "PG1 Calculation", items: [
      { navn: "Early procurement of steel", kons: "Secures price against inflation, but ties up capital and requires early maturity." }
    ]},
    PG2: { navn: "PG2 Progress", items: [
      { navn: "Off-site logistics and just-in-time", kons: "Less interim storage on a tight site; requires precise takt control." }
    ]},
    PG3: { navn: "PG3 Site", items: [
      { navn: "Vertical transport — extra construction hoist", kons: "Increased site cost, but removes a bottleneck that would otherwise delay several trains." }
    ]}
  },

  risks: [
    { b: "Access to a technical room in an adjacent building during operation", tiltak: "Operating window clarified early and temporary rerouting" },
    { b: "Changes to the user programme after locking", tiltak: "Strict change log and an A3 decision on every deviation" },
    { b: "Cost increase on materials (inflation)", tiltak: "Early procurement and index-regulated contracts" },
    { b: "Coordination with operation in a neighbouring building", tiltak: "Shared operating plan and fixed coordination meetings" },
    { b: "Worse ground conditions than assumed", tiltak: "Supplementary ground investigations before production" },
    { b: "Tolerance requirements on the prefab facade", tiltak: "Trial assembly and 3D measurement" },
    { b: "Clash of HVAC/electrical routing in the shaft", tiltak: "Clash control in BIM before production" },
    { b: "Delayed work documentation against the takt", tiltak: "Documentation ready six weeks before each control area" },
    { b: "Lead time on fit-out", tiltak: "Early ordering and a buffer in the takt" },
    { b: "Weather conditions affect the weathertight building", tiltak: "Weather protection and a flexible train sequence" },
    { b: "Commissioning delays handover", tiltak: "ITB test as a separate milestone in the takt" },
    { b: "Deviation between calculation and final quantity", tiltak: "Maturity-driven quantity clarification" },
    { b: "Air-tightness requirement in the envelope", tiltak: "Pressure testing along the way, not only at the end" },
    { b: "Tight site limits logistics", tiltak: "Off-site storage and just-in-time delivery" },
    { b: "Settlement at an adjacent structure", tiltak: "Settlement monitoring and dimensioning with margin" },
    { b: "Insufficient test documentation at handover", tiltak: "Running test protocol on the takt" }
  ],

  ui: {
    mtag: "The execution model",
    modA: "The execution model", modB: "Takt plan", modC: "Calculation & risk",
    footerAbout: "Norway's largest provider of Lean and VDC training for the construction industry. Partners with NTNU. Offices in Oslo and Bergen.",
    footerNote: "Interactive method demo. The model, takt control and dynamic calculation are methods Lean Communications has developed and uses in its own projects — and trains others in. The figures here are illustrative.",

    aEyebrow: "Module 1 · Our organisation model", aTitlePre: "The collaboration ", aTitleHi: "wheel",
    aLead: "The project sits at the centre, and at the core is the <b>collaboration leadership</b>. Around it is the leadership, then the cross-functional discipline and process groups that work in sprints — and, on the outside, the premise advisors pulled in on <b>pull, not push</b>. Click any part of the wheel to explore it.",
    phaseSamspill: "Collaboration phase", phaseGjennom: "Execution phase",
    emptyTitle: "Click a role", emptyBody: "Tap a node in the model to see responsibilities, who the role collaborates with, and a concrete tip from our method.",
    lblAnsvar: "Responsibilities", lblSamspill: "Collaboration", lblRolleFase: "Role in the phase", tipsLabel: "Tip: ", closeLabel: "Close",
    legend: ["Core — collaboration leadership", "Leadership", "Discipline groups", "Process groups", "Group leaders' meeting", "Premise advisors · pull"],
    infoPullT: "Pull, not push",
    infoPullB: "The three inner layers have a fixed place in the wheel and work closely together. The premise advisors on the outside have no fixed place — they are pulled in when a group asks for help. That is the Lean principle of pull: competence is fetched when the need is there, instead of being pushed in.",
    infoLineT: "From collaboration to line",
    infoLineB: "In execution the work is organised hierarchically for pace and clear responsibility, but decisions are still made integrated. The VDC/ICE process binds the levels together.",
    bindShow: "Show binding elements", bindHide: "Hide binding elements",
    ownNoteA: "The model can be copied schematically by anyone — but it is <b>demanding to pull off in practice</b>. That is exactly where we come in: Lean Communications develops the model together with the project, leads the process and trains the people to use it. This is one of our most advanced products.",
    rolesTitle: "Key roles in the model", rolesLead: "The model is role-based, not person-based. Tap a card to see the responsibility in each phase.",
    roleF1: "Collaboration phase", roleF2: "Execution phase",

    bEyebrow: "Module 2 · Our method", bTitlePre: "Takt ", bTitleHi: "plan",
    bLead: "Production is built as a <b>production system</b>: the work is divided into equal-sized control areas (CA), and «trains» of trades move through them in a fixed rhythm. Each trade follows the previous one — offset by one takt. Toggle trades on and off to see how the diagonal builds up.",
    bKO: "Control area", weekPrefix: "Week ",
    bExplain: [
      { k: "Rows = CA", p: "Each control area is an equal-sized piece of the building — a zone the work can be completed in." },
      { k: "Columns = Weeks", p: "Time runs to the right. The takt is fixed: one trade moves one control area per week." },
      { k: "The diagonal = Flow", p: "The trades follow each other offset. The diagonal is the progress — and reveals immediately when a train slips." }
    ],
    bQuote: "«All trades move through the control areas in a <span class=\"g\">fixed sequence at a fixed takt</span>.»",
    ownNoteB: "Drawing the takt plan is easy. <b>Holding the takt in practice</b> — with the right maturity on work documentation, cleared obstacles and trades that actually deliver in rhythm — is the demanding part. That is where we lead the work and train the team.",

    cEyebrow: "Module 3 · Our method", cTitlePre: "Calculation, maturity ", cTitleHi: "and risk",
    cLead: "Dynamic steering towards the target price. The cost is <b>not guessed — it is developed</b>, decision by decision, by reducing risk and raising maturity. Here are the three tools that steer it.",
    subKalk: "Dynamic calculation", subAlt: "Options", subRisk: "Risk management",
    timeline: "Timeline", nowSuffix: " · now",
    kpiCur: "Current calculation", unit: "MNOK", ksHist: "Historical / actual", ksPlan: "Plan figures (forward)",
    kpiTarget: "Against the target", malPrefix: "Target: ",
    kpiMove: "Last change", moveDown: "The calculation is falling — a good sign", moveUp: "The calculation is rising — follow up",
    gaugeLabel: "Maturity · target 8.5", outOf: "of 10",
    chartTitle: "Calculation development vs. target",
    legKalkHist: "Calculation (historical)", legKalkPlan: "Calculation (plan)", legMal: "Target", legMod: "Maturity (right axis)",
    barsTitle: "Distribution per discipline group", barsMeta: "Click a group to break it down. The line shows the target.", malTitle: "Target ",
    vederlag: "Compensation structure (open book)", posterSuffix: " items",
    altLead1: "Every value-creating idea follows the same track — from input to a decision in principle. ", altLead2: " options are registered. Click a group to see the assessments.",
    flow: ["Input (DG/PG)", "Identify", "Assess (DG meeting)", "Presented for decision", "Relevant → studio (max 3 days) → L1 (A3)", "Not relevant → archived with reasoning"],
    underlagLabel: "Documentation: ", fristLabel: "L1 deadline: ", altSing: " option", altPlur: " options",
    rsteps: [["1", "Identify", "Capture risk from all disciplines and groups."], ["2", "Analyse", "Assess consequence and probability."], ["3", "Evaluate", "Prioritise by risk score and ownership."], ["4", "Treat", "Measures, follow-up and link to the calculation."]],
    rRed: "Red risks (≥ 5 MNOK)", rExpo: "Total consequence (MNOK)", rCount: "Registered risks",
    filterGroup: "Group", filterStatus: "Status", allLabel: "All",
    rtableHead: ["", "No", "Gr.", "Description", "Owner", "Cons.", "Prob.", "Risk score", "Measure", "Status"],
    status: { ok: "Resolved", pending: "Ongoing", decide: "For decision" },
    ownNoteC: "The tools are schematically simple. The demanding part is <b>the discipline behind them</b>: keeping the calculation alive in open book, driving the options through to a decision, and managing risk before it hits the cost. This is what we lead and teach."
  }
};
