import type { ServiceId } from "../config/site";
import type { PageId } from "./routes";

export const en = {
  skip: "Skip to content",
  navAria: "Main navigation",
  navAriaMobile: "Mobile navigation",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  homeAria: "Home, Jani Siekkinen",
  nav: {
    jani: "Jani",
    repairs: "Repairs",
    coaching: "Coaching",
    events: "Events",
    gameon: "GameOn",
    sponsor: "Partners",
    contact: "Contact",
    results: "Results",
  },
  enquire: "Get in touch",
  langSwitch: "FI",
  langSwitchLabel: "Vaihda suomeksi",
  footerLegal: "Jani Siekkinen",
  footerNav: "Site",
  footerConnect: "Connect",
  privacy: "Privacy",
  terms: "Terms",
  quote: "Ask for a quote",
  instagram: "Instagram",
  email: "Email",
  phone: "Phone",
  whatsapp: "WhatsApp",
  locationLine: "Regularly in the capital region, elsewhere in Finland and abroad by agreement.",
  meta: {
    home: {
      title: "Pool coaching Helsinki · Jani Siekkinen",
      description:
        "Pool and billiards coaching in Helsinki. Finnish 8-ball champion 2018: private lessons, groups, corporate events, exhibition shows and cue repairs.",
      h1: "Jani Siekkinen",
    },
    coaching: {
      title: "Pool coaching Helsinki · 1-to-1 and groups",
      description:
        "Pool coaching in Helsinki: private lessons, groups, fundamentals and video analysis. Why professional coaching, what a session actually does, and who it is for.",
      h1: "Pool coaching",
    },
    events: {
      title: "Private events and corporate days · Jani Siekkinen",
      description:
        "Staff days, wellbeing days, Christmas parties and client evenings in the capital region. Clear guidance, so the whole group gets to play and succeed. Trick shots when they suit the night.",
      h1: "Events",
    },
    repairs: {
      title: "Cue repairs · Jani Siekkinen",
      description:
        "Tip, ferrule, grip and a clean. Tell me what the cue needs and you get an estimate of the work and the timeline before anything is touched.",
      h1: "Repairs",
    },
    gameon: {
      title: "GameOn jerseys · Jani Siekkinen",
      description:
        "A custom GameOn jersey for one player or a whole team. Dry Tech stretches in every direction. Ask with size and quantity, and you get the price and the delivery time.",
      h1: "GameOn jerseys",
    },
    sponsor: {
      title: "Partnership and sponsorship · Jani Siekkinen",
      description:
        "Visibility on tour, on social and on the jersey. Tell me what you want. Then I'll say what the partnership looks like.",
      h1: "Partners",
    },
    jani: {
      title: "Jani Siekkinen · professional pool player",
      description:
        "Born 1987 in Helsinki. Full-time pool professional since 2013, more than 20 Finnish championship medals, Finnish 8-ball champion 2018 and still competing internationally.",
      h1: "Jani Siekkinen",
    },
    results: {
      title: "Results · Jani Siekkinen",
      description:
        "More than 20 Finnish championship medals, Finnish 8-ball title 2018, 10-ball nationals silver 2025, national pairs golds, the first Finnish Pool Tour event win and US Open appearances.",
      h1: "Results",
    },
    tips: {
      title: "Pool notes · Jani Siekkinen",
      description:
        "Short notes from the table: drills and corrections you can take straight into your next practice session. Not a coaching blog.",
      h1: "Notes",
    },
    contact: {
      title: "Contact · Jani Siekkinen",
      description:
        "Tell me briefly what you need: coaching, an event, a cue repair, a jersey or a partnership. I read and answer every message myself.",
      h1: "Contact",
    },
    privacy: {
      title: "Privacy · Jani Siekkinen",
      description:
        "How contact-form data is handled: what is collected, how long it is kept and what rights you have.",
      h1: "Privacy",
    },
    terms: {
      title: "Terms · Jani Siekkinen",
      description:
        "General terms for coaching, groups and events: agreements, pricing, cancellations and responsibilities.",
      h1: "Terms",
    },
  } satisfies Record<PageId, { title: string; description: string; h1: string }>,
  hero: {
    kicker: "Professional pool player",
    first: "Jani",
    last: "Siekkinen",
    proof: "Multiple-time Finnish champion and European champion.\nWorld Nineball Tour pro.",
    lead: "I have played pool for a living since 2013. I coach, perform at events and service cues with the same care I compete with.",
    cta: "Get in touch",
    alt: "Jani Siekkinen lining up a shot on tour",
  },
  stats: [
    { k: "2018", v: "Finnish title, 8-ball" },
    { k: "2025", v: "Nationals silver, 10-ball" },
    { k: "20+", v: "Finnish championship medals" },
    { k: "+75", v: "podium finishes" },
    { k: "10+", v: "years as a full-time pro" },
  ],
  workLabel: "What I do",
  pitchLabel: "Why me",
  pitchTitle: "Fundamentals first.\nThen confidence.",
  pitchBody:
    "I don't sell a course or a ready-made package. I look first at what needs work. Then we fix what has to change, so your stroke is reliable and you have the skills you need when the match gets tense.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "One player, one table, the whole session for you. The content is always built around the client, not from a ready-made course.",
    },
    {
      k: "Shows",
      v: "A staff day, a wellbeing day, or something else the team does together. Christmas parties, kickoffs, or a special event for key clients. Trick shots you won't see in every pool hall. Clear guidance for the whole group, so everyone gets to play and succeed.",
    },
    {
      k: "Sponsor",
      v: "A company, a private person, or anyone else can come in as a sponsor. Visibility on the tour, on social media and on the jersey. The partnership is agreed together, around what you want from it.",
    },
    {
      k: "Uusimaa",
      v: "Regularly across Uusimaa, elsewhere in Finland and abroad by agreement. I can also come to your tables.",
    },
  ],
  leads: {
    coaching: {
      title: "Coaching",
      body: "A private session or a small group. We go through, in detail, what the game is made of. A complete package shaped around what you need. Answers across every part of the game.",
    },
    events: {
      title: "Events",
      body: "A staff day, a Christmas party or a client evening. The night is built in detail around your group. A complete package shaped around what you need. Clear guidance for the whole group, so everyone gets to play and succeed.",
    },
    repairs: {
      title: "Repairs",
      body: "Tip, ferrule, grip and a clean. Whatever the cue needs, tell me, and you get an estimate of the work and the timeline before anything is touched.",
    },
    gameon: {
      title: "GameOn",
      body: "A jersey for yourself, or your own for the whole team. New-generation Dry Tech: a fabric that stretches in every direction and feels exceptionally good. Every shirt is made custom. Sizes and stock move, so send size and quantity through the form and I'll come back with price and delivery.",
    },
    sponsor: {
      title: "Partners",
      body: "A company, a private person, or anyone else can come in and support. Visibility on the tour, on social media and on the jersey. The partnership is agreed together, around what you want from it.",
    },
  },
  services: {
    private: "Private 1-to-1",
    group: "Small group 2–4",
    beginner: "Beginner / fundamentals",
    corporate: "Corporate / recreation",
    school: "School / youth",
    events: "Event / show",
    repairs: "Cue repair",
    jersey: "GameOn jersey",
    house: "House call",
    travel: "Travel by agreement",
    video: "Video analysis",
    sponsor: "Partnership / sponsor",
    other: "Other",
  } satisfies Record<ServiceId, string>,
  coaching: {
    intro:
      "A private session or a small group. We start by finding your level, and nothing is required in advance. We go through, in detail, what the game is made of. A complete package shaped around what you need.",
    items: [
      {
        title: "Private 1-to-1",
        body: "One player, one table, the whole session for you. The content is always built around the client, not from a ready-made course. You get answers across every part of the game.",
      },
      {
        title: "Small group 2–4",
        body: "A small group, the same session for everyone. We go through, in detail, what the game is made of, and build the package around what you need.",
      },
      {
        title: "Fundamentals",
        body: "A beginner is welcome, and nothing is required in advance. We find the starting level and build the session from there.",
      },
      {
        title: "House calls and travel",
        body: "Anywhere in the capital region, and elsewhere in Finland and abroad by agreement. We play at a billiard hall you know, or I come to your tables.",
      },
      {
        title: "Video analysis",
        body: "You film your shots on a phone and send the clips. I send back the corrections and drills in priority order. It works well outside the capital region too.",
      },
    ],
    faqLabel: "Jani answers",
    faqTitle: "What coaching\nactually is",
    faqIntro:
      "I pass on what I have worked out myself, through hard work, money, and blood, sweat and tears. Fundamentals first, then the game, and the head comes with it. The sport is serious, the mood is not.",
    faq: [
      {
        q: "Why a professional?",
        a: [
          "You can learn by playing. That way you also pick up ten bad habits that feel like yours, because you have repeated them thousands of times.",
          "In pool the gaps are made in small things. Stance, grip, tempo, how the stroke feels when it is right. If nobody watches from the side, the correction easily lands beside the real thing. I have seen it in my own game and in the billiard hall: the hours add up, and the same spot comes back while the foundation is not yet in place.",
          "We go through, in detail, what your game is made of. I look first at what needs to develop, and we fix that, so the stroke has confidence when the game gets tight. That saves time, because the hours stop going into the wrong thing.",
        ],
      },
      {
        q: "What do you leave with?",
        a: [
          "First we look at where you start. One person has years of play, another is holding a cue for the first time. The same programme does not work for both.",
          "We go through the basics: grip, stance, aim, the rhythm of the stroke. Then drills you can take into your own practice. The point is not that I stand next to you and you look good for an hour. The point is that next time you know what to practise, and why.",
          "If you come as a group, we learn the rules, the etiquette and enough technique that the game starts to move. Then we play. If you come alone to develop your game, we go further. We look at where the cue ball finishes and why it stopped there. Then we go through the other options, and how it felt when the decision had to be made.",
          "One hour does not make a champion. One hour can still cut the loop where you practise the wrong thing hard.",
        ],
      },
      {
        q: "Who is this for?",
        a: [
          "Not only tournament players.",
          "Pool bends to a lot of jobs. Someone wants to beat a colleague at the Christmas party. Someone wants the cue in their hand not to feel embarrassing. Someone wants national championship level. Someone just wants a hobby where the head can be quiet.",
          "All of those benefit from the fundamentals being in place. For a competitor, coaching is often the mirror you do not get from your own group. For a hobby player it is the shortcut to the game feeling like a game, not like poking balls around.",
          "And to company groups I say it straight: we do not sit there in silence. The sport is serious, the mood is not.",
        ],
      },
      {
        q: "Isn't a club player enough?",
        a: [
          "There is always someone in the hall who “can give a tip”. That someone usually teaches what works for them.",
          "At the top there are nutritionists, physios, psychologists and PTs. The gaps are made off the table too. Even the old-school players have worked out that the rest of life has to be in order if you want to last in this.",
          "Same logic for a hobby player. An experienced player sees that the ball did not go in. A professional sees why it did not go in, and can say it so that you can fix it yourself. And it is not only technique. It is what you do when the game is not running. I have seen enough of that, in my own mirror.",
        ],
      },
      {
        q: "What do the tour years teach?",
        a: [
          "That this is not only a cue and a ball.",
          "I have played 8-ball, 9-ball, 10-ball and Straight pool for a living. The year is hard: dozens of events, a lot of days abroad. On a tournament trip the focus is the game. Friends think I am seeing the world. The reality is hotel porridge and the same routine in a different city.",
          "In 2018 the results were poor and the money was not coming. I ended up with a psychologist. That period opened locks. It may sound heavy, but it is true: in this sport the head decides as much as the hand.",
          "So in a session we do not only talk about where the ball is struck. We also talk about what happens when you miss an easy one and still have to play the next.",
          "The brightest crown, a world title, is still out there for me. Same attitude for the person I coach: a short goal, a long goal, then the work. No win without sacrifice. That does not mean a hobby player has to live like a professional. It means progress takes a decision.",
        ],
      },
      {
        q: "What this is not?",
        a: [
          "It is not a magic trick, and it is not “three tips that always win”.",
          "It is also not me playing it for you. I can show, explain and correct. You have to hit the ball.",
          "And it is not a verdict. I have seen enough of what it feels like when the game is not running. You are allowed to miss in the session. A miss is data. That is where we start.",
        ],
      },
      {
        q: "How to prepare?",
        a: [
          "Bring your own cue if you have one. If not, we manage with the hall's.",
          "Think of one thing in advance, if it is already in mind: what you want to feel more certain about. We still start by finding your level, and nothing is required beforehand.",
          "If you come as a tournament player, tell me the game and the moment it got tight, or where a decision was left open. The more precisely you can say that, the less time we spend guessing. If you cannot name it yet, we find it together.",
        ],
      },
      {
        q: "Groups, companies, schools",
        a: [
          "First the fundamentals. Then the rules and the stroke. Then we play.",
          "I have seen enough players at different levels that the basic notes go in quickly. In group sessions the starting point is: learn, try, play. For a company it is a day out that is not a fake team-building exercise. For school groups it is a sport where you can do well without being the biggest or the fastest.",
          "Fun is not the opposite of learning. It is the reason people come back to the table.",
        ],
      },
      {
        q: "How do you know the learning is working?",
        a: [
          "When you no longer ask why that missed, but you already know before the stroke what the risk was.",
          "When practice is no longer “let's hit a few balls”, but you have one or two things you repeat on purpose.",
          "And for a tournament player, when a bad day does not wreck the whole set. The game is allowed to wobble. The routine is not.",
        ],
      },
    ],
  },
  eventsPage: {
    intro:
      "A staff day, a wellbeing day, a Christmas party or a client evening. The night is built in detail around your group. Clear guidance for the whole group, so everyone gets to play and succeed. Trick shots can be part of it, when they suit the night. The venue can be yours, or we find a billiard hall.",
    items: [
      {
        title: "Private events",
        body: "A dinner, a birthday, a stag or hen party, or a special event for key clients. Clear guidance, and then everyone gets to play and succeed themselves. Trick shots can be part of it, when they suit the night.",
      },
      {
        title: "Corporate days",
        body: "Staff days, wellbeing days, kickoffs and client evenings. The night is built in detail around your group. Clear guidance for the whole group, so everyone gets to play and nobody is left watching.",
      },
      {
        title: "Schools and youth",
        body: "It suits everyone. This is not a lecture. It is hands-on, and it pulls people in. First the fundamentals. Then the rules and the stroke. Then we play. Group size and length are agreed in advance, and a first-timer gets to succeed too.",
      },
    ],
    faqLabel: "Jani answers",
    faqTitle: "What an event\nactually is",
    faqIntro:
      "Clear guidance, then cues in hand. Trick shots come in when they suit the night. The night is built around your group. The sport is serious, the mood is not.",
    faq: [
      {
        q: "Why pool?",
        a: [
          "Because the same night works for the whole group.",
          "Pool suits everyone. Some people have played for years, or they are holding a cue for the first time. The guidance is clear, so nobody is left watching. You do not need to be the biggest or the fastest. It is enough to want a go.",
        ],
      },
      {
        q: "What happens on the night?",
        a: [
          "The night is built around your group. If trick shots are part of it, they get the night going and the group sees straight away what the table can do.",
          "Clear guidance for the whole group: first the fundamentals, then the rules and the stroke. The people who came just to watch get to the table too.",
          "The rest of the evening we play. I stay with you, show, correct and keep the rhythm, so everyone gets to succeed.",
        ],
      },
      {
        q: "What if nobody has played?",
        a: [
          "That is when the night is at its best. Nothing is required in advance.",
          "The guidance is unhurried, and then we play. If trick shots are part of the night, they show the way. A first-timer gets to succeed too. That is the aim of the night.",
        ],
      },
      {
        q: "Isn't a table enough?",
        a: [
          "A table on its own is not yet an event. Without guidance, the people who can play take over and everyone else stays standing.",
          "I hold the night together. I split the tables, give clear guidance and get the shy one to hit. I show trick shots when they belong in the night.",
        ],
      },
      {
        q: "Tricks, a lesson, or both?",
        a: [
          "It can be both, or just one.",
          "Trick shots you won't see in every billiard hall, when they suit the night. A lesson and a go at the table, when the group wants to try it themselves.",
        ],
      },
      {
        q: "What this is not?",
        a: [
          "It is not a lecture, and it is not a compulsory item on the agenda.",
          "I do not play the whole night while you clap. I show, I explain, then you play. Nobody is left feeling foolish. The sport is serious, the mood is not.",
        ],
      },
      {
        q: "Where is it held?",
        a: [
          "Anywhere in the capital region, and elsewhere in Finland and abroad by agreement.",
          "The venue can be yours. If you do not have one, I find a billiard hall and you get a quote straight away. Send the headcount, the date and the venue, if you already have one, through the form.",
        ],
      },
      {
        q: "Schools and birthdays?",
        a: [
          "For schools and young people this suits everyone. Not a lecture, but something that pulls them in: first the fundamentals, then the rules and the stroke, then we play.",
          "A private night can be a dinner, a birthday or a stag or hen party. Trick shots can be scaled to the room when they belong in the night, and then everyone gets to play.",
          "For a company the same night is a staff day, a wellbeing day, a kickoff or a client evening, built around your group.",
        ],
      },
      {
        q: "How do you know it worked?",
        a: [
          "When nobody is left watching.",
          "When a first-timer asks for one more game.",
          "And when the next week people are still talking about the shot that came off.",
        ],
      },
    ],
  },
  repairsPage: {
    intro:
      "I service cues to the standard I demand from my own. Tip, ferrule, grip and a clean. Whatever the cue needs, tell me, and you get an estimate of the work and the timeline before anything is touched.",
    items: [
      {
        title: "Tip and ferrule",
        body: "Replaced and shaped when the tip has gone numb, or it is time for the tip to retire. The hardness is chosen to match how you play, not what happens to be on the shelf.",
      },
      {
        title: "Shaft",
        body: "Cleaning and a straightness check work on wood and on carbon fibre. On wood I can bring the surface back so nothing drags in the hand. I cannot change the surface of a carbon-fibre shaft. No tricks and no invented work: only what needs doing, with the reason why.",
      },
    ],
  },
  gameonPage: {
    intro:
      "A jersey can be made for one player, or as the team's own. The fabric is Dry Tech. It stretches in every direction and feels exceptionally good in play. On a team order too, every shirt can be its own custom piece, logos included. At the end there is one price, and nothing extra on top of it.",
    items: [
      {
        title: "Order",
        body: "The form needs the size, the quantity and who the shirts are for. I'll come back with a quote that has the price and the delivery time. Sizes and stock change, so they are not kept up to date on the page.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Partnering with me is visibility from the matches: tour, practice, social and the jersey. There is no ready-made package, because the job is built from the goal. Tell me what you want and what you bring. Then I'll say what it looks like.",
    partnersLabel: "Current partners",
    credit: "Photo: T. Tainio",
    items: [
      {
        title: "Jerseys and the tour",
        body: "Your mark where the matches are: competition, practice and travel. International tour events take it beyond Finland. The agreed work is written down before the season.",
      },
      {
        title: "Social and appearances",
        body: "Instagram, booked nights and content made together. We agree what actually happens and on what schedule, so you know what you are paying for. Empty visibility is not for sale.",
      },
      {
        title: "Local partners",
        body: "A hall, kit or an event we run together. Helsinki is the starting point and the rest of Finland is in when it makes sense for both. A smaller local partnership is as welcome as a large one.",
      },
    ],
  },
  jani: {
    kicker: "Player",
    credit: "Photo: Juha Pekkarinen",
    p1: "I started playing billiards at 16. I have also been a goalkeeper, won a European cheerleading title with Funky Team Gorillaz, and won skateboarding competitions.",
    p2: "Born in Helsinki in 1987. Full-time pool professional since 2013. The games are 8-ball, 9-ball, 10-ball and straight pool. What several sports and elite sport have taught me shows in how quickly another player's mistake becomes visible, and in how the game looks under pressure. My nickname is Siego. If you ever hear it, that's me.",
    p3: "I compete on the European tour and the WNT, and in Finland too. More than 20 Finnish championship medals along the way. In coaching, that same whole is tested every season, by me: the game, the mental side, and what the other sports have taught.",
    pressLabel: "In the press",
    press: [
      {
        source: "Ilta-Sanomat",
        year: "2018",
        title: "A doctor's words ended a promising Finnish goalkeeper's career at 18, now chasing world championship gold in pool",
        href: "https://www.is.fi/muutlajit/art-2000005637952.html",
      },
      {
        source: "Ilkka-Pohjalainen",
        year: "2024",
        title: "Jani Siekkinen has played pool professionally for over a decade, and won European gold and world bronze in a completely different sport",
        href: "https://www.ilkkapohjalainen.fi/jani-siekkinen-on-pelannut-biljardia-ammatikseen-y/12262146",
      },
    ],
  },
  resultsIntro:
    "These are the results I can put in writing without inventing medals. I am still competing.",
  results: [
    { year: "20+", text: "Finnish championship medals" },
    { year: "75+", text: "Podium finishes" },
    { year: "2021", text: "European champion (team). Billiards." },
    { year: "2018", text: "Finnish champion, 8-ball" },
    { year: "2025", text: "10-ball Finnish Championship silver" },
    { year: "2015, 2018", text: "National pairs titles (gold)" },
    { year: "2015", text: "Winner of the first Finnish Pool Tour event" },
    { year: "2023", text: "4th place at the American 14.1 tournament." },
  ],
  faqLabel: "Good to know",
  faqTitle: "Before the first\nshot",
  faqIntro:
    "First we find out your starting level. Venue and content follow from that, and you don't need to know anything in advance. If your question isn't on the list, ask through the form.",
  faq: [
    {
      q: "Is this pool or billiards?",
      a: "There are several billiard games. They all run on the same laws of physics. Whether the game is pool or snooker, I can help with technique, aim and the other parts of the game.",
    },
    {
      q: "Where do you coach?",
      a: "Anywhere in the capital region, and elsewhere in Finland by agreement. We play at a billiard hall you already know, or we find a table.",
    },
    {
      q: "What is a private session?",
      a: "One player, one table, the whole session for you. First we find your starting level and go through, in detail, what the game is made of. You get a complete package shaped around what you need.",
    },
    {
      q: "Can I come as a beginner?",
      a: "Yes. If you're a beginner, there's nothing to worry about and nothing you need to know in advance. We find your level and build the session from there.",
    },
    {
      q: "Companies?",
      a: "Absolutely. The programme is built around group size and the length of the evening so that first-timers play too. The venue can be yours. If there are no tables, we find a suitable billiard hall together.",
    },
    {
      q: "What does an event cost?",
      a: "The price depends on the venue, the duration and the size of the group, so every event gets its own quote. If you don't have a venue in mind, I can recommend billiard halls, and you get the full cost straight away.",
    },
    {
      q: "Video analysis online?",
      a: "Yes. You film your shots on a phone and send the clips. I send back the corrections and drills in priority order. It works well outside the capital region too.",
    },
    {
      q: "Sponsorship?",
      a: "Yes. A company, a private person, or anyone else can come in and support. There's visibility on the tour, on social media and on the jersey. The partnership is agreed together, around what you want from it. Say so on the form and I'll come back with a proposal.",
    },
  ],
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    phoneHint: "optional",
    topic: "What you need",
    message: "Message",
    messageHint: "Tell me briefly what it's about. Date, venue and headcount help me answer with a price right away.",
    submit: "Send",
    sending: "Sending…",
    ok: "Thank you, the message came through. I read it myself and will get back to you shortly.",
    err: "The message could not be sent. Try again, or email me directly.",
  },
  contactLead:
    "Send your name, your email and a short note on what you need. Coaching, an event, a repair, a jersey or a partnership. I read every message myself and reply myself, not with an auto-reply.",
  cookie: {
    title: "Analytics",
    text: "This site uses Google Analytics to measure visits. Data is not used for ads.",
    accept: "OK",
    decline: "Close",
  },
  privacyAnalytics:
    "The site uses Google Analytics 4 (Google LLC) to measure visits and page use. IP addresses are anonymised. Data is not sold or used for advertising.",
  privacyBody: [
    "The form sends your name, email, optional phone number and message straight to my inbox so that I can reply. Nothing else is collected.",
    "There is no tracking, no ad pixels and no analytics on this site. Data is not sold or passed on for marketing.",
    "The message is kept while the request is open and deleted afterwards. The bot check (Turnstile) may process an IP address when it is enabled.",
    "You have the right to access, correct and delete your data. Ask through the form or by email.",
  ],
  termsBody: [
    "Coaching, groups and events are agreed in writing before they take place; email is enough. That way both sides know what was agreed.",
    "The price is a quote until it is accepted. Venue, duration and group size affect the price, and any travel costs are stated separately in the quote.",
    "Cancellations are best flagged in good time, and we'll find a new date together. A late cancellation may be charged if a table or travel is already committed.",
    "You are responsible for the room and the tables unless we agree otherwise. Say so in advance if the venue needs arranging. That can usually be solved together.",
  ],
  tipsIndex:
    "Short notes from the table: drills, corrections and observations you can take straight into your next session. No newsletter and no filler.",
  notFound: {
    metaTitle: "Page not found · Jani Siekkinen",
    metaDescription: "Scratch. Cue ball in the pocket, page still missing.",
    kicker: "Foul",
    title: "Scratch",
    lead: "You came for a page. You found the cue ball in the pocket. The hall is quiet, except for one laugh at the wrong time.",
    caption: "Cue ball in. Page still missing.",
    ghost: "404",
    notes: [
      { k: "01", v: "Cue innocent. Don't blame the Mezz." },
      { k: "02", v: "Lights fine. The hall did not go dark." },
      { k: "03", v: "The URL scratched. A referee would turn away." },
      { k: "04", v: "Player still here. Zero missing Siegos." },
    ],
    home: "New shot",
  },
  alts: {
    hands: "Jani Siekkinen lining up a shot, chalk on the rail",
    break: "Jani Siekkinen lining up a shot in the Finland jersey, crowd behind",
    show: "Jani Siekkinen lining up a shot in a hall with several tables",
    cue: "A cue tip being shaped with a Mezz Cue Magic tool",
    jersey: "Jani Siekkinen in the Finland jersey at the Belgian Open",
    tour: "Jani Siekkinen, Mezz logo and name across the back of the jersey",
    portrait: "Jani Siekkinen at the table, a trophy on the rail",
    hall: "Jani Siekkinen lining up a shot across the table in a billiard hall",
    sponsor: "Jani Siekkinen lining up a shot in a playing jersey",
  },
} as const;
