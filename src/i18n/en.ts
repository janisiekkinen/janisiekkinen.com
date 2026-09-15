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
  locationLine: "Regularly in the Helsinki region, elsewhere in Finland and abroad by agreement.",
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
        "Christmas parties, kickoffs and staff days in Helsinki: exhibition shots, guided play and a night that works for first-timers. Why pool, and what the evening actually is.",
      h1: "Events",
    },
    repairs: {
      title: "Cue repairs · Jani Siekkinen",
      description:
        "Tip, ferrule and shaft put right. Tell me what happened to the cue and you get an estimate of the work and the timeline.",
      h1: "Repairs",
    },
    gameon: {
      title: "GameOn jerseys · Jani Siekkinen",
      description:
        "GameOn jerseys for players, clubs and crews. Send size and quantity through the form and I'll come back with availability and price.",
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
        "Born 1987 in Helsinki. Full-time pool professional since 2013, Finnish 8-ball champion 2018 and still competing internationally.",
      h1: "Jani Siekkinen",
    },
    results: {
      title: "Results · Jani Siekkinen",
      description:
        "Finnish 8-ball title 2018, 10-ball nationals silver 2025, national pairs golds, the first Finnish Pool Tour event win and US Open appearances.",
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
    proof: "Finnish 8-ball champion, 2018. Still competing internationally.",
    lead: "I have played pool for a living since 2013. I coach, run events and service cues at the same standard I compete at.",
    cta: "Get in touch",
    alt: "Jani Siekkinen lining up a shot on tour",
  },
  stats: [
    { k: "2018", v: "Finnish title, 8-ball" },
    { k: "2025", v: "Nationals silver, 10-ball" },
    { k: "20+", v: "Finnish championship medals" },
    { k: "10+", v: "years as a full-time pro" },
  ],
  workLabel: "What I do",
  pitchLabel: "Why this",
  pitchTitle: "Fundamentals first.\nThen the game.",
  pitchBody:
    "I don't sell a course or a ready-made package. I watch you play first. Then we fix the stroke, the tempo and the decisions: the things that break when the match tightens.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "One player, one table, the whole session built around you. The content follows what your own game shows. Not a general lecture.",
    },
    {
      k: "Shows",
      v: "Christmas parties, kickoffs and private nights. Shots you don't see in every hall, plus enough guidance that everyone in the room gets to play themselves.",
    },
    {
      k: "Sponsor",
      v: "Tour, social and jerseys. Your mark travels to where the matches are. The pictures come from the events, not from stock photos.",
    },
    {
      k: "Helsinki",
      v: "Regularly in the Helsinki region, elsewhere in Finland and abroad by agreement. I can also come to your tables.",
    },
  ],
  leads: {
    coaching: {
      title: "Coaching",
      body: "A private session or a small group. We work through stroke, tempo and decisions and fix what breaks when the match tightens. After the hour you know what to practise next.",
    },
    events: {
      title: "Events",
      body: "Private nights, Christmas parties and company days. Exhibition shots first, then cues in your guests' hands. Including the people who have never played.",
    },
    repairs: {
      title: "Repairs",
      body: "Tip, ferrule and shaft put right so the cue feels like yours again. Tell me what happened and you get an estimate of the work and the timeline before anything is touched.",
    },
    gameon: {
      title: "GameOn",
      body: "Jerseys for your own game, your club or your crew. Sizes and stock move, so send size and quantity through the form and I'll come back with price and delivery.",
    },
    sponsor: {
      title: "Partners",
      body: "Tour, social and jerseys. The visibility comes from the matches. Say what you want and what you bring. Then I'll say what it looks like.",
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
      "I coach in Helsinki at the same table I compete on. No ready-made package: first we find where your game leaks. Then we rebuild it and repeat it until the fix holds under pressure too.",
    items: [
      {
        title: "Private 1-to-1",
        body: "One player and my full attention. We go through stance, stroke and cue-ball control, but also the decisions: what you play when the easy pattern runs out. The content follows what your match shows, not a lesson plan written in advance.",
      },
      {
        title: "Small group 2–4",
        body: "One shared language for the whole group and more reps per table. It suits a group of friends or club players who want the same correction at the same time and can keep coaching each other afterwards.",
      },
      {
        title: "Fundamentals",
        body: "Grip, stance, aim and cue-ball control in an order that actually works. We start from zero without tournament jargon, and after the first session you have a routine you can practise alone.",
      },
      {
        title: "House calls and travel",
        body: "In the Helsinki region I can come to your tables, and elsewhere in Finland by agreement. Longer trips and travel abroad can be arranged when the schedule and the whole package make sense.",
      },
      {
        title: "Video analysis",
        body: "Film your shots on a phone and send the clips online. You get specific corrections and drills in priority order: not a general lecture, but the work that raises your level fastest.",
      },
    ],
    faqLabel: "Jani answers",
    faqTitle: "What coaching\nactually is",
    faqIntro:
      "In coaching I pass on what I have already paid for in time, travel and mistakes. Fundamentals first, then the game, and the head comes with it. The sport is serious, the mood is not.",
    faq: [
      {
        q: "Why a professional?",
        a: [
          "You can learn by playing. That way you also pick up ten bad habits that feel like yours, because you have repeated them thousands of times.",
          "In pool the gaps are made in small things. Stance, grip, tempo, how the stroke feels when it is right. If nobody watches from the side, you correct the wrong thing. I have seen it in my own game and in the hall: a player puts in the hours, and the same miss keeps coming back, because the foundation is not there.",
          "Professional coaching is not a trick school. It is someone who has put balls in for years showing you where your game actually leaks. You save time. And time is the expensive part of this sport.",
        ],
      },
      {
        q: "What do you leave with?",
        a: [
          "First we look at where you start. One person has years of play, another is holding a cue for the first time. The same programme does not work for both.",
          "We go through the basics: grip, stance, aim, the rhythm of the stroke. Then drills you can take into your own practice. The point is not that I stand next to you and you look good for an hour. The point is that next time you know what to practise, and why.",
          "If you come as a group, we learn the rules, the etiquette and enough technique that the game starts to move. Then we play. If you come alone to raise your level, we go closer: where the cue ball stops, why it stopped there, what the options were, and how the head felt when the decision had to be made.",
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
          "I have played 8-ball, 9-ball, 10-ball and straight pool for a living. The year is hard: dozens of events, a lot of days abroad. On a tournament trip the focus is the game. Friends think I am seeing the world. The reality is hotel porridge and the same routine in a different city.",
          "In 2018 the results were poor and the money was not coming. I ended up with a psychologist. That period opened locks. It may sound heavy for a website, but it is true: in this sport the head decides as much as the hand.",
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
          "Think of one thing in advance: what you want to feel better after the hour. That the ball leaves cleaner. That you know the rules. That your group gets a shared game. That your break is not a lottery.",
          "If you come as a tournament player, tell me which game you play and where it last jammed. The more precisely you can say that, the less time we spend guessing.",
        ],
      },
      {
        q: "Groups, companies, schools",
        a: [
          "The fundamentals, the rules, the start of a stroke, and a match.",
          "I have seen enough players at different levels that the basic notes go in quickly. In group sessions the starting point is: learn, try, play. For a company it is a day out that is not a fake team-building exercise. For school groups it is a sport where you can do well without being the biggest or the fastest.",
          "Fun is not the opposite of learning. It is the reason people come back to the table.",
        ],
      },
      {
        q: "How do you know it is working?",
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
      "A private night, a Christmas party, a kickoff or a staff day. It also works for the person who has never held a cue. Exhibition shots, a short brief, the rest of the evening we play. The venue can be yours or we find a hall. Tables are needed, the rest is on me.",
    items: [
      {
        title: "Private events",
        body: "A dinner, a birthday or a room that wants shots you don't see in every hall. The show is scaled to the space, and afterwards everyone gets to try the same shot themselves.",
      },
      {
        title: "Corporate days",
        body: "Staff days, kickoffs and client evenings. A short brief gets the whole room playing within minutes, so the night doesn't split into players and spectators. Length and programme follow the size of the group.",
      },
      {
        title: "Schools and youth",
        body: "Rules briefly, then a cue in hand and learning by doing. Group size and length are agreed in advance, and the programme is built so that a complete beginner also pots a ball.",
      },
    ],
    faqLabel: "Jani answers",
    faqTitle: "What an event\nactually is",
    faqIntro:
      "Exhibition shots, a short brief, then cues in hand. I don't sell a fake team-building day. The sport is serious, the mood is not.",
    faq: [
      {
        q: "Why pool?",
        a: [
          "Because it works for a room that is not the same.",
          "A company night always has people who play everything and people who have never held a cue. A run splits the group. An escape room splits it. In pool you can do well without being the biggest or the fastest. That is the point.",
          "And unlike a lot of “team days”, there is no round of introductions. Cue in hand, ball in the pocket, then you laugh at the person who tries too hard. It is a shared thing without having to name it that.",
        ],
      },
      {
        q: "What happens on the night?",
        a: [
          "We open with a show. Shots you don't see in every hall. That starts the night and makes it clear someone in the room can actually play.",
          "Then a short brief: grip, stance, enough rules that the game moves. Within a few minutes the whole group is at the table, including the people who came “just to watch”.",
          "The rest of the evening we play. I am there: I correct, I show, I keep the rhythm. I do not stand in the corner waiting for the programme to end.",
        ],
      },
      {
        q: "What if nobody has played?",
        a: [
          "That is when this is at its best.",
          "I have seen it enough: the people who can play go off on their own and the rest become spectators. That is why the night is built this way. Show, brief, play. No assumed skill. The assumption is that the group wants to do something together.",
          "A first-timer pots a ball. That is the minimum, not a bonus.",
        ],
      },
      {
        q: "Isn't a table enough?",
        a: [
          "A table without a programme is furniture.",
          "Then the night becomes three people who can play and everyone else circling with a glass. That is not an event. That is a break.",
          "A professional in the room is not decoration. It is someone who holds the night together: shows, splits the tables, gets the shy one to hit, and can play the shot people took their phones out for.",
        ],
      },
      {
        q: "Show or a lesson?",
        a: [
          "Both. In that order.",
          "A show on its own is watching. A lesson on its own is an hour. An event is seeing something you don't see in every hall, and then trying it yourself.",
          "Nobody goes home thinking they should have been allowed a go. The go is in the programme.",
        ],
      },
      {
        q: "What this is not?",
        a: [
          "It is not a fake team day where you invent values on a flipchart.",
          "It is also not me playing all night while you clap. I show, I explain, then you hit.",
          "And it is not a contest where the loser looks small. The sport is serious, the mood is not.",
        ],
      },
      {
        q: "Where is it held?",
        a: [
          "The venue can be yours or we find a suitable hall. Tables are needed. The rest is on me.",
          "Regularly in the Helsinki region, elsewhere in Finland and abroad by agreement. Put the venue, headcount and date on the form. Then you get a quote, not a guess.",
        ],
      },
      {
        q: "Schools and birthdays?",
        a: [
          "Same logic, different tone.",
          "For school groups: rules briefly, cue in hand, learning by doing. A sport where you can do well without being the biggest.",
          "At a private night the show is scaled to the room: a dinner, a birthday, a crew that wants shots. Then everyone gets to try the same one.",
          "For a company it is a day out that does not feel like a compulsory item on the agenda.",
        ],
      },
      {
        q: "How do you know it worked?",
        a: [
          "When there are no spectators left.",
          "When someone who “never plays” asks for one more rack.",
          "And when the next week people talk about that shot, not about how it was “quite nice”. Nice is forgotten. That shot is not.",
        ],
      },
    ],
  },
  repairsPage: {
    intro:
      "I service cues to the standard I demand from my own. Tip, ferrule and shaft. You get an estimate of the work and the timeline before anything is done. Tell me what happened to the cue and how the hit feels now.",
    items: [
      {
        title: "Tip and ferrule",
        body: "Replaced and shaped when the hit no longer holds or the tip has simply done its miles. The hardness is chosen to match how you play, not what happens to be on the shelf.",
      },
      {
        title: "Shaft",
        body: "Cleaned, checked for straightness and the surface brought back so nothing drags in your hand. No tricks and no invented work: only what needs doing, with the reason why.",
      },
    ],
  },
  gameonPage: {
    intro:
      "GameOn jerseys are built for playing. Sizes and stock move, so there is no webshop. Send size and quantity through the form and I'll come back with availability and price.",
    items: [
      {
        title: "Order",
        body: "Tell me the size, the quantity and where the jerseys are going: your own game, a club or a crew. I'll come back with price and delivery. No prices on the page until they are locked.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Partnering with me is visibility from the matches: tour, practice, social and the jersey. There is no ready-made package, because the job is built from the goal. Tell me what you want and what you bring. Then I'll say what it looks like.",
    partnersLabel: "Current partners",
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
    p1: "I came to pool as an adult. First a goalkeeper, then a European cheerleading champion with Funky Team Gorillaz. Then this table took over.",
    p2: "Born in Helsinki on 19 April 1987. Full-time pool professional since 2013. The games are 8-ball, 9-ball, 10-ball and straight pool. The years at the table show in how quickly another player's mistake becomes visible. Some people call me Siego. That's enough of that.",
    p3: "I still compete on the Euro Tour and WNT, and I have played the US Open. Best finish around 33rd, according to the press. The same game we work through in a session is tested every season, by me.",
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
    { year: "2018", text: "Finnish champion, 8-ball" },
    { year: "2025", text: "10-ball Finnish Championship silver" },
    { year: "2015, 2018", text: "National pairs titles (gold)" },
    { year: "2015", text: "Winner of the first Finnish Pool Tour event" },
    { year: "-", text: "US Open appearances; best finish around 33rd, according to the press." },
  ],
  faqLabel: "Good to know",
  faqTitle: "Before the first\nshot",
  faqIntro:
    "Venue, level and the job are shaped around where you start. You don't need to know anything in advance. These are the questions that come up most often. If yours isn't on the list, ask through the form.",
  faq: [
    {
      q: "Is this pool or billiards?",
      a: "Pool. In Finland the sport sits under billiards, so searches often say billiards coaching. I coach 8-ball, 9-ball, 10-ball and straight pool. I don't coach snooker.",
    },
    {
      q: "Where do you coach?",
      a: "Regularly in the Helsinki region and elsewhere in Finland by agreement. We play at a hall you already know or we find a table. House calls and longer trips are arranged case by case.",
    },
    {
      q: "What is a private session?",
      a: "An hour at the table, just the two of us, not a lecture. I watch how you play first, then we work on the place where the game leaks. You leave with a clear practice plan you can run on your own.",
    },
    {
      q: "Absolute beginner?",
      a: "Yes, and many are. Fundamentals are their own thing: grip, stance and cue-ball control, calmly and in order. Tournament players have a separate path, so nobody spends the hour at the wrong level.",
    },
    {
      q: "Companies?",
      a: "Absolutely. The programme is built around group size and the length of the evening so that first-timers play too. Tables are needed: the venue can be yours, or we find a suitable hall together.",
    },
    {
      q: "What does an event cost?",
      a: "The price depends on the venue, the duration and the size of the group, so every event gets its own quote. Put the venue, headcount and date on the form and you'll get a clear price without extra rounds.",
    },
    {
      q: "Video analysis online?",
      a: "Yes. You film your shots on a phone and send the clips; I send back specific corrections and drills in priority order. It works well if you live outside the Helsinki region.",
    },
    {
      q: "Sponsorship?",
      a: "Very much so. Read the partners page, then say on the form which brand you represent, what you want and what you expect: jerseys, social or the tour. I'll come back with a proposal.",
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
  alts: {
    hands: "Jani Siekkinen lining up a shot, chalk on the rail",
    break: "Jani Siekkinen lining up a shot in the Finland jersey, crowd behind",
    show: "Jani Siekkinen lining up a shot in a hall with several tables",
    cue: "A cue tip being shaped with a Mezz Cue Magic tool",
    jersey: "Jani Siekkinen in the Finland jersey at the Belgian Open",
    tour: "Jani Siekkinen, Mezz logo and name across the back of the jersey",
    portrait: "Jani Siekkinen at the table, a trophy on the rail",
  },
} as const;
