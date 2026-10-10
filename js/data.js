/* ==========================================================
   TECHNOVATION — THE FIVE REALMS · site content
   Edit THIS file to update the site. Nothing else needs changing.
   Empty string "" = "Coming soon" is shown automatically.
   ========================================================== */

window.TV = {
  fest: {
    name: "TECHNOVATION",
    edition: "’26",
    theme: "The Five Realms",
    dept: "Department of Mechanical (Mechatronics) Engineering",
    college: "Mahatma Gandhi Institute of Technology",
    collegeShort: "MGIT",
    place: "Gandipet, Hyderabad",
    dates: "16 & 17 October 2026",
    // Countdown target (IST). TODO: 9:15 AM is NOT confirmed yet. Update startsAt + startLabel when the schedule is final.
    startsAt: "2026-10-16T09:15:00+05:30",
    startLabel: "Friday, 16 October · 9:15 AM IST",
    // After this the countdown switches to a thank-you message (end of Day 2 by default).
    endsAt: "2026-10-17T23:59:59+05:30",
    blurb:
      "The Mechatronics department’s celebration of robotics, automation and engineering ideas at MGIT, with technical competitions, workshops and fun non-technical events."
  },

  // Google Form links. Paste a link to switch the button from "Opens soon" to live.
  forms: {
    // One registration form for every event.
    register: "https://docs.google.com/forms/d/e/1FAIpQLSc50uuUAK36DzXbY0cdRy7YY8bs5-WMuWkWH0fcAZRBa-R45Q/viewform",
    volunteer: "" // MGIT student volunteers (separate form)
  },

  // Optional: drop a file at assets/audio/theme.mp3 to replace the generated soundtrack.
  soundtrackFile: "assets/audio/theme.mp3",

  about: {
    mgit:
      "An autonomous engineering college in Gandipet, Hyderabad, established in 1997 by the Chaitanya Bharathi Educational Society. Affiliated to JNTU Hyderabad, MGIT holds an A++ grade from NAAC, and its eligible UG programmes are NBA accredited.",
    dept:
      "Mechatronics combines mechanical design, electronics, embedded control and software to build intelligent machines such as robots, drones and automation systems. Our department hosts Technovation.",
    stats: [
      { v: "1997", k: "Year established" },
      { v: "A++", k: "NAAC grade" },
      { v: "11", k: "UG engineering programmes" },
      { v: "~4,000", k: "Students on campus" }
    ],
    vision: "To inspire curiosity in robotics, automation and cross-disciplinary engineering.",
    mission: "To give students one platform to learn, build and compete with real machines.",
    values: "Teamwork, integrity, curiosity and a strong hands-on work ethic.",
    impact: "Turning classroom ideas into working prototypes and building confidence."
  },

  pillars: [
    { k: "Compete", d: "12 events across robotics, drones, trivia and more." },
    { k: "Learn", d: "Pick up new skills at the hands-on robotics workshop." },
    { k: "Showcase", d: "Present your projects, papers and posters to a live audience." },
    { k: "Connect", d: "Meet and team up with students from other campuses." }
  ],

  // Fest-wide roadmap. date "" => Coming soon
  festRoadmap: [
    { t: "Registrations open", d: "Open now", note: "One form for every event. Scan the QR or use the Register button." },
    { t: "Registrations close", d: "", note: "" },
    { t: "Day 1 · The Gates Open", d: "16 Oct 2026", note: "MGIT, Gandipet" },
    { t: "Day 2 · The Final Trials", d: "17 Oct 2026", note: "MGIT, Gandipet" },
    { t: "Results & honours", d: "", note: "" }
  ],

  realms: [
    {
      id: "earth", name: "Earth", sanskrit: "Prithvi", pillar: "Mechanical",
      epithet: "Realm of Iron and Stone",
      line: "Structure, mass and motion. Chassis, gears and the machines that hold their ground.",
      color: "#c08a4a", glyph: "earth"
    },
    {
      id: "fire", name: "Fire", sanskrit: "Agni", pillar: "Electrical & Electronics",
      epithet: "Realm of the Living Spark",
      line: "Energy and power. Circuits, current and the spark that brings a machine to life.",
      color: "#ef6a33", glyph: "fire"
    },
    {
      id: "water", name: "Water", sanskrit: "Jala", pillar: "Control Systems",
      epithet: "Realm of the Returning Tide",
      line: "Feedback and balance. Like water finding its level, a controller always returns to its set point.",
      color: "#3aa7b4", glyph: "water"
    },
    {
      id: "air", name: "Air", sanskrit: "Vayu", pillar: "Sensors & Actuators",
      epithet: "Realm of the Unseen Touch",
      line: "Perception and response. Sensors that feel the world and actuators that move through it.",
      color: "#a9c8de", glyph: "air"
    },
    {
      id: "ether", name: "Ether", sanskrit: "Akasha", pillar: "Software & Intelligence",
      epithet: "Realm of the Silent Code",
      line: "The invisible medium that holds everything. Code, logic, ideas and the knowledge behind every build.",
      color: "#9a7cf0", glyph: "ether"
    }
  ],

  /* Trials (events). All events are paid unless noReg is set.
     form: leave "" to use forms.register (one form for all events).
     prize: replace with the real amount once confirmed.
     road: the roadmap steps. flow: [{day, steps}] for two-day roadmaps.
     rules: rulebook sections. scoring / penalties: tables. rules: null => no rulebook (non-technical). */
  trials: [
    { id: "rovers", realm: "earth", type: "Technical", name: "Rovers on Alternating Surfaces", icon: "rover",
      desc: "Drive your rover across soil and changing terrain. Clear every surface, fast and in control.",
      fee: "₹300 per team", prize: "Win exciting prizes", venue: "Opposite B-Block (on soil)", time: "", team: "1 to 4 members", form: "",
      coords: [{ name: "Satya Ganesh Prasad Dubey", phone: "+91 90632 85308" }, { name: "Gogineni Saurya", phone: "+91 95930 44444" }],
      road: [
        { t: "Register", p: "Sign up your team through the registration form." },
        { t: "Report to the arena", p: "Opposite B-Block, on soil. Bring your rover fully built." },
        { t: "Run the terrain course", p: "Take your rover across every surface. Time, control and obstacle handling all count." },
        { t: "Scoring & results", p: "Runs are scored out of 100, minus penalties." }
      ],
      rules: [
        { h: "General rules", items: [
          "The rover must be built by your team. Ready-made commercial RC cars or rovers are allowed only with the coordinators’ approval.",
          "The battery must be securely mounted inside the rover.",
          "No dangerous materials, flames, explosives or exposed sharp parts.",
          "Your rover must not intentionally damage the arena or another team’s rover.",
          "Any attempt to interfere with another team’s rover leads to disqualification.",
          "Follow the instructions of the event officials at all times."
        ] }
      ],
      scoring: { title: "Scoring (100 points)", rows: [["Terrain completion", 50], ["Time", 20], ["Obstacle handling", 15], ["Rover design & engineering", 10], ["Control & precision", 5]] },
      penalties: [["Touching the boundary", "−2"], ["Rover gets stuck and needs manual help", "−10"], ["Skipping a terrain", "−10"], ["Lifting or pushing the rover by hand", "−10"], ["Damaging the arena", "−10"]] },

    { id: "tug-of-war", realm: "earth", type: "Non-technical", name: "Tug of War", icon: "rope",
      desc: "Two teams, one rope. Pull your rivals across the line.",
      fee: "₹200 per team", prize: "Win exciting prizes", venue: "In front of B-Block", time: "", team: "4 members", form: "",
      coords: [{ name: "Shaik Tauheed Pasha", phone: "+91 76740 24786" }, { name: "Mohammed Khaja Abbasuddin", phone: "+91 87900 39934" }],
      road: [
        { t: "Register your team of 4", p: "Sign up through the registration form." },
        { t: "Report in front of B-Block", p: "The coordinators explain the format on the spot." },
        { t: "Pull", p: "Head-to-head rounds. Drag the other team across the line." },
        { t: "Winners", p: "The last team standing takes it." }
      ], rules: null },

    { id: "robotics-workshop", realm: "fire", type: "Technical", name: "Robotics Workshop", icon: "workshop",
      desc: "A hands-on session to build and program robots.",
      fee: "₹100 per person", prize: "", venue: "B-106, B-107", time: "", team: "Individual", form: "",
      coords: [{ name: "C Sai Sandeep", phone: "+91 99893 02620" }, { name: "Mohammed Junaid Qureshi", phone: "+91 63033 48622" }, { name: "Adarsh Bommidi", phone: "+91 94406 98391" }],
      road: [
        { t: "Register", p: "Sign up through the registration form." },
        { t: "Report to B-106 / B-107", p: "Find your seat in the workshop hall." },
        { t: "Build & program", p: "Hands-on with real robots, guided step by step." }
      ], rules: [] },
    { id: "project-expo", realm: "fire", type: "Exhibition", name: "Project Expo", icon: "expo", noReg: true,
      desc: "Our students display their working projects and prototypes. Walk in, see the machines and talk to the people who built them.",
      fee: "", prize: "", venue: "In front of B-Block", time: "", team: "", form: "",
      coords: [{ name: "Mohammed Zaid", phone: "+91 93928 97622" }, { name: "Aditi Gunne", phone: "+91 99895 84193" }, { name: "Yash Dubey", phone: "+91 99488 50695" }],
      road: [
        { t: "Walk in", p: "In front of B-Block during the fest. No registration needed." },
        { t: "See the machines", p: "Working projects and prototypes from our students." },
        { t: "Meet the builders", p: "Ask how they work and how they were made." }
      ], rules: null },
    { id: "cramp-simulator", realm: "fire", type: "Non-technical", name: "Cramp Simulator", icon: "pulse",
      desc: "Experience period cramps first-hand to build awareness and empathy.",
      fee: "₹100", prize: "", venue: "In front of B-Block", time: "", team: "", form: "",
      coords: [{ name: "Murali Krishna Sai", phone: "+91 85003 56317" }, { name: "K. Pavanateja", phone: "+91 63020 46280" }],
      road: [
        { t: "Register", p: "Sign up through the registration form." },
        { t: "Visit the stall", p: "In front of B-Block." },
        { t: "Take the challenge", p: "Feel it for yourself. How long can you last?" }
      ], rules: null },

    { id: "line-follower", realm: "water", type: "Technical", name: "Line Following Robot", icon: "linebot",
      desc: "Build it, tune it, race it. Your autonomous bot follows the line against the clock. Fastest clean run wins.",
      fee: "₹300 per team", prize: "Win exciting prizes", venue: "B-407", time: "", team: "1 to 4 members", form: "",
      coords: [{ name: "M. Akshith Kumar", phone: "+91 81064 78312" }, { name: "Advith Hruday", phone: "+91 81258 77990" }],
      road: [
        { t: "Register", p: "Sign up your team through the registration form." },
        { t: "Join the queue", p: "On either day, at the registration desk. First come, first served." },
        { t: "Inspection & calibration", p: "Your robot is inspected, then you get a short calibration window on the track." },
        { t: "Three timed attempts", p: "Use them across both days. Your best valid run counts." },
        { t: "Results", p: "Declared after the last run on 17 Oct." }
      ],
      rules: [
        { h: "Registration & queue", items: [
          "Carry a valid college ID at all times.",
          "Registration is complete only after the fee is paid and confirmed. Fees are non-refundable unless the organizers cancel the event.",
          "Team members can’t be changed after registration closes, and each person can be in only one team.",
          "Runs are first come, first served on both days. Join the queue at the registration desk. There are no reserved slots.",
          "If you’re called and you’re not there, you lose that turn and rejoin at the end of the queue.",
          "Bring your robot fully built and working. There is no build time at the venue."
        ] },
        { h: "Robot", items: [
          "Fully autonomous. No remote control, wired or wireless, and no human input after the start signal.",
          "The robot must follow the line with its own sensors in real time. Hard-coded paths, timed or encoder-only dead reckoning and memorised track layouts are not allowed.",
          "Any microcontroller and onboard sensors are allowed. Wireless modules must be turned off during runs.",
          "Onboard battery only, with no external or tethered power. Keep LiPo batteries in a protective bag.",
          "The robot must not change size or shape during a run, and must not mark or damage the track.",
          "The robot must be built by your registered team.",
          "Every robot is inspected before it runs. A robot that fails inspection can’t run until it’s fixed. The inspector’s decision is final.",
          "Size, weight and battery limits will be announced before the event."
        ] },
        { h: "Track", items: [
          "The track is revealed on the day, and everyone runs the same track. Expect curves and sharp turns.",
          "You get a short calibration window at your turn, before your first timed attempt."
        ] },
        { h: "Runs", items: [
          "Each team gets 3 timed attempts across both days. Use them on one day or split them. After each attempt you rejoin the end of the queue.",
          "You can tune or reprogram between attempts.",
          "Place the robot behind the start line. It must be still and untouched until the signal.",
          "The timer starts on the marshal’s signal and stops when the front of the robot crosses the finish line.",
          "Maximum 4 minutes per attempt. After that, the attempt is marked incomplete.",
          "Only a team member places the robot, and only the marshal calls the run."
        ] },
        { h: "Scoring & ranking", items: [
          "Teams are ranked by the fastest time for a full, valid run. Only completed runs are ranked.",
          "If the robot leaves the line (all wheels off), the attempt ends. There are no checkpoints and no restarts.",
          "Cutting, skipping or reversing through any section, or touching the robot during a run, voids that run.",
          "An incomplete attempt still counts as used.",
          "Tiebreak: a run-off. If still tied, the lighter robot ranks higher.",
          "The marshal’s time is final. The leaderboard combines both days, and results are declared after the last run on 17 Oct."
        ] },
        { h: "Fair play & safety", items: [
          "You may be disqualified for tampering with the track, timing equipment or other robots, getting outside help during a run, breaking the robot rules, presenting a robot that isn’t your own work, or unsafe or abusive behaviour.",
          "Report overheating, sparks, swelling or damage immediately. The robot is removed until it’s cleared.",
          "Stay clear of the track during runs. Closed footwear is required in the pit area.",
          "Raise any objection with the marshal right after your run, before the next run starts. Late objections aren’t considered.",
          "The coordinators’ decisions are final. Organizers may change rules, timings or the track, with an announcement."
        ] }
      ] },
    { id: "robothon", realm: "water", type: "Technical", name: "Robothon", icon: "robothon",
      desc: "A two-day robotics ideathon. Take on a problem statement or bring your own idea, and build it as a concept, design, simulation or working prototype.",
      fee: "₹250 per team", prize: "Win exciting prizes", venue: "B-001, B-005", time: "", team: "Solo or 2 to 4 members", form: "",
      coords: [{ name: "Gundoju Manitej", phone: "+91 94909 79067" }, { name: "Arram Snehal", phone: "+91 94944 80714" }, { name: "B. Nakshiketh", phone: "+91 90326 45607" }],
      flow: [
        { day: "Day 1", steps: ["Register and check in with your college ID", "Choose a problem statement, or go open innovation", "Start building your idea, design, simulation or prototype"] },
        { day: "Day 2", steps: ["Keep building", "Submit your project details and presentation", "Present to the judges", "Results"] }
      ],
      rules: [
        { h: "Who can take part", items: [
          "Open to students from all colleges. Take part solo or in a team of 2 to 4.",
          "Register with correct details and carry your college ID.",
          "Follow the instructions of the event coordinators at all times."
        ] },
        { h: "Your project", items: [
          "Pick a problem statement given by the organizers, or go open innovation with your own robotics idea.",
          "Projects can use robotics, automation, embedded systems, AI or related technologies.",
          "You can present an idea, design, simulation or working prototype. A fully working robot isn’t compulsory, but the idea must be practical and you must be able to explain how it works.",
          "Original work only. Copying another team’s project or presenting someone else’s work isn’t allowed.",
          "Open-source and AI tools are allowed. Acknowledge external work where needed."
        ] },
        { h: "Submission", items: [
          "Work on your project across the two days.",
          "Submit your project title, problem statement, proposed solution, technologies used and expected applications, plus your presentation.",
          "Add circuit diagrams, CAD designs, source code, simulations or a prototype demo where relevant.",
          "Late submissions may not be accepted without the organizers’ permission."
        ] },
        { h: "Hardware & safety", items: [
          "Bring your own laptop, components, sensors and controllers. Limited shared resources may be available.",
          "Handle batteries, wiring and moving parts carefully. Damaged batteries and exposed wires aren’t allowed.",
          "Weapons, projectiles, explosives and anything that could harm people or property are strictly prohibited.",
          "Test robots only in the areas provided, and stop when an organizer asks you to.",
          "Report any damage to borrowed equipment, and don’t use another team’s equipment without permission."
        ] },
        { h: "Venue", items: [
          "No overnight stay or overnight work at the venue.",
          "You’re responsible for your own belongings. Keep your workspace clean and dispose of e-waste properly.",
          "You can take part in other fest events too, as long as it doesn’t affect your Robothon submission."
        ] },
        { h: "Disqualification", items: [
          "Copying or cheating, false information or someone else’s work.",
          "Damaging another team’s project or equipment, or breaking safety rules.",
          "Misbehaving with participants, judges, volunteers or organizers, or repeatedly ignoring instructions."
        ] }
      ],
      scoring: { title: "Judging (100 marks)", rows: [["Innovation & originality", 25], ["Technical feasibility", 20], ["Practical application", 20], ["Design & implementation", 15], ["Presentation & demonstration", 10], ["Technical knowledge & answers to judges", 10]],
        note: "Ideas, designs and simulations are judged on the same criteria. A physical prototype isn’t compulsory." } },

    { id: "rotorz-liftoff", realm: "air", type: "Technical", name: "Rotorz Liftoff", icon: "drone",
      desc: "Drone flying competition. Pilot your drone through precision flying courses at beginner, intermediate or advanced level.",
      fee: "Beginner ₹200 · Intermediate ₹150 · Advanced ₹100", prize: "Win exciting prizes", venue: "Retreat", time: "", team: "Solo (1 member)", form: "",
      coords: [{ name: "P Varun Kumar", phone: "+91 78423 76100" }, { name: "K. Risheb", phone: "+91 83609 72913" }],
      road: [
        { t: "Register", p: "Sign up through the registration form and pick your level: beginner, intermediate or advanced." },
        { t: "Report to the Retreat", p: "Check in with the coordinators." },
        { t: "Fly the course", p: "Precision flying, one pilot at a time." },
        { t: "Results", p: "Winners in each level." }
      ], rules: [] },

    { id: "paper", realm: "ether", type: "Technical", name: "Paper Presentation", icon: "scroll",
      theme: "Mechatronics 2050: Build the Impossible",
      desc: "Theme: Mechatronics 2050: Build the Impossible. Imagine the machines of 2050, then make the case for how we get there. Present your original idea or research to a panel of judges.",
      fee: "₹200 per team", prize: "Win exciting prizes", venue: "B-403", time: "", team: "2 to 4 members", form: "",
      coords: [{ name: "Amancharla Naga Manjusha", phone: "+91 80747 97698" }],
      road: [
        { t: "Register", p: "Sign up your team through the registration form." },
        { t: "Submit your abstract & slides", p: "Deadlines will be announced. You can also bring slides on a pen drive, with a backup." },
        { t: "Report to the event desk", p: "Arrive before your slot at B-403." },
        { t: "Present & face the judges", p: "A timed talk with slides, then Q&A." },
        { t: "Results", p: "Announced at Technovation." }
      ],
      rules: [
        { h: "Registration", items: [
          "Carry a valid college ID at all times.",
          "Registration is complete only after the fee is paid and confirmed. Fees are non-refundable unless the organizers cancel the event.",
          "Each person can be in only one team, and each team presents one paper. Team members can’t be changed after registration closes."
        ] },
        { h: "Topic & submission", items: [
          "Your paper must fit the theme: Mechatronics 2050: Build the Impossible.",
          "Abstract and slide submission details and deadlines will be announced. You can also bring your slides on a pen drive, with a backup copy.",
          "Original work only. Plagiarism or AI-generated text without attribution leads to rejection or disqualification.",
          "Cite all your sources. A references slide is mandatory."
        ] },
        { h: "Presentation", items: [
          "An oral presentation with slides, to an audience and a panel of judges, followed by Q&A. Time limits will be announced.",
          "The timer is strict. You get a warning before time runs out, and you’re stopped at the limit.",
          "Tell it as a story: problem, background, method, results, conclusion.",
          "Slides in PPT, PPTX or PDF. Videos and animations are fine if they work offline and fit the time.",
          "Don’t read your slides aloud. Slides support the speaker. Presentations are in English."
        ] },
        { h: "On the day", items: [
          "Report to the event desk before your slot. If you’re not there when called, you lose the slot.",
          "Slides are loaded onto the common system before the session. Personal laptops only with the organizers’ approval.",
          "A projector, podium and mic are provided. Anything else, bring yourself."
        ] },
        { h: "Fair play", items: [
          "You may be disqualified for plagiarism, fabricated data, misleading the judges, disrupting other presentations, ignoring instructions or abusive behaviour.",
          "Raise scoring queries with the coordinators before results are announced. The judges’ decision is final."
        ] }
      ],
      scoring: { title: "Judging (100 marks)", rows: [["Originality & innovation", 20], ["Technical depth & accuracy", 25], ["Structure & clarity", 15], ["Delivery & communication", 15], ["Quality of slides", 10], ["Q&A: answers & understanding", 15]],
        note: "Each judge scores independently and the final score is the average. Ties go to the higher Q&A score." } },
    { id: "poster", realm: "ether", type: "Technical", name: "Poster Presentation", icon: "poster",
      theme: "Tech for Humanity",
      desc: "Theme: Tech for Humanity. Make one striking, hand-made poster on technology that changes lives in healthcare, accessibility or social good, then defend it to the judges.",
      fee: "₹200 per team", prize: "Win exciting prizes", venue: "B-403", time: "", team: "2 members", form: "",
      coords: [{ name: "Lakshmi Manogna", phone: "+91 81068 62715" }],
      road: [
        { t: "Register", p: "Sign up your team of 2 through the registration form." },
        { t: "Make your poster at the venue", p: "Hand-made, on the canvas we provide, within a set time." },
        { t: "Open session", p: "Judges and visitors walk by. Explain your idea and answer questions." },
        { t: "Results", p: "Announced at Technovation." }
      ],
      rules: [
        { h: "Registration", items: [
          "Carry a valid college ID at all times.",
          "Registration is complete only after the fee is paid and confirmed. Fees are non-refundable unless the organizers cancel the event.",
          "Each person can be in only one team, and each team makes one poster. Team members can’t be changed after registration closes."
        ] },
        { h: "Theme & making the poster", items: [
          "Your poster must fit the theme: Tech for Humanity, covering healthcare, accessibility and social good.",
          "Posters are made at the venue, on the canvas we provide, within a set time. Posters on any other surface aren’t accepted.",
          "Hand-made and original only. No printouts, pasted prints or pre-made material. Hand-drawn diagrams and sketches are encouraged.",
          "No phones, laptops or internet while making the poster.",
          "Write the title and theme clearly at the top.",
          "Don’t put your name, college or any personal detail on the poster. You’ll get a poster number, so judging stays fair.",
          "Write in English, large enough to read from a distance. When time is called, posters are displayed as they stand."
        ] },
        { h: "Display & open session", items: [
          "Posters go up on boards in the hall. Mounting material is provided.",
          "There’s no speaking slot. Judges and visitors walk around and talk to you at your poster. Be ready to explain your idea in a couple of minutes.",
          "At least one team member must stay with the poster throughout. Unattended posters aren’t scored.",
          "Don’t touch, move or criticise other posters, and don’t take yours down until the organizers announce the end."
        ] },
        { h: "Fair play", items: [
          "You may be disqualified for copied or pre-made posters, work by someone outside the team, personal details on the poster, damaging posters or property, misleading the judges, ignoring instructions or abusive behaviour.",
          "Raise scoring queries with the coordinators before results are announced. The judges’ decision is final."
        ] }
      ],
      scoring: { title: "Judging (100 marks)", rows: [["Content & technical accuracy", 25], ["Originality & creativity", 20], ["Visual layout & clarity", 20], ["Neatness & effort", 10], ["Presentation & communication", 15], ["Handling of questions", 10]],
        note: "A poster that’s mostly dense paragraphs loses layout marks. Ties go to the higher content score." } },
    { id: "guess-the-gana", realm: "ether", type: "Non-technical", name: "Guess the Gana", icon: "music",
      desc: "Name the song before time runs out. Play solo, as a duo or as a squad.",
      fee: "Single ₹40 · Duo ₹60 · Squad ₹80", prize: "Win exciting prizes", venue: "In front of B-Block", time: "", team: "Solo, duo or squad", form: "",
      coords: [{ name: "Haasitha Putti", phone: "+91 99662 59359" }, { name: "C. N. S. Gargi", phone: "+91 98665 01106" }],
      road: [
        { t: "Register", p: "Solo, duo or squad, through the registration form." },
        { t: "Report in front of B-Block", p: "The coordinators explain the format on the spot." },
        { t: "Name that tune", p: "Hear it, guess it, beat the clock." },
        { t: "Winners", p: "Top scorers win." }
      ], rules: null },
    { id: "tollywood-trivia", realm: "ether", type: "Non-technical", name: "Tollywood Trivia", icon: "clapper",
      desc: "Rapid-fire rounds of Telugu cinema trivia. Prove you know your Tollywood.",
      fee: "₹100 per team", prize: "Win exciting prizes", venue: "In front of B-Block", time: "", team: "1 to 5 members", form: "",
      coords: [{ name: "P. K. V. N. Sarath Subramanyam", phone: "+91 83677 45678" }, { name: "Mathangi Sai Aman", phone: "+91 85559 00159" }],
      road: [
        { t: "Register", p: "Teams of 1 to 5, through the registration form." },
        { t: "Report in front of B-Block", p: "The coordinators explain the format on the spot." },
        { t: "Rapid-fire rounds", p: "Films, dialogues, songs and stars." },
        { t: "Winners", p: "Top team takes it." }
      ], rules: null }
  ],

  // Contact page, one array per row.
  contacts: [
    [
      { role: "Faculty Coordinator", name: "Dr. K. V. Kasi Viswanadham", phone: "+91 92467 57582" },
      { role: "Faculty Co-Coordinator", name: "P Shashidhar", phone: "+91 70958 43401" }
    ],
    [
      { role: "Student Convenor", name: "K Navdeep", phone: "+91 79818 71998" },
      { role: "Student Convenor", name: "BVS Saranya", phone: "+91 90144 75127" },
      { role: "Student Co-Convenor", name: "C. N. S. Gargi", phone: "+91 98665 01106" },
      { role: "Student Co-Convenor", name: "P Varun Kumar", phone: "+91 78423 76100" }
    ],
    [
      { role: "Sponsorship Lead", name: "Ganesh Dubey", phone: "+91 90632 85308" }
    ]
  ],
  address: "Department of Mechanical (Mechatronics) Engineering, Mahatma Gandhi Institute of Technology, Gandipet, Hyderabad – 500075, Telangana",
  website: "https://mgit.ac.in",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mahatma+Gandhi+Institute+of+Technology+Gandipet+Hyderabad",

  // Fill when finalised.
  sponsors: [],   // e.g. { name: "Acme", tier: "Gold", logo: "assets/sponsors/acme.png", url: "" }
  socials: []     // e.g. { name: "Instagram", url: "https://instagram.com/..." }
};
