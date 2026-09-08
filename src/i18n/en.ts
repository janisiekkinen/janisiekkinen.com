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
  enquire: "Enquire",
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
      title: "Jani Siekkinen · pool coaching Helsinki",
      description:
        "Tour professional and Finnish 8-ball champion 2018. Private coaching, small groups, corporate events, exhibition shows and cue repairs in Helsinki.",
      h1: "Jani Siekkinen",
    },
    coaching: {
      title: "Pool coaching Helsinki · 1-to-1 and groups",
      description:
        "Private lessons, groups of 2–4, fundamentals and video analysis in the Helsinki region. Coaching at the same table I compete on.",
      h1: "Coaching",
    },
    events: {
      title: "Private events and corporate days · Jani Siekkinen",
      description:
        "Christmas parties, kickoffs, staff days and private nights: exhibition shots, guided play and an evening people still talk about next week.",
      h1: "Events",
    },
    repairs: {
      title: "Cue repairs · Jani Siekkinen",
      description:
        "Tip, ferrule and shaft put right by a working pro. Tell me what happened to the cue and you get an estimate of the work and the timeline.",
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
        "Visibility on tour, on social and on the jersey. Tell me what you want to achieve and we build a partnership with a result you can see.",
      h1: "Partners",
    },
    jani: {
      title: "Jani Siekkinen | Player",
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
      title: "Notes · Jani Siekkinen",
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
    lead: "I have played pool for a living since 2013. The same precision I compete with comes to your session, your company event and the night your crew keeps talking about.",
    cta: "Enquire",
    alt: "Jani Siekkinen lining up a shot on tour",
  },
  stats: [
    { k: "2018", v: "Finnish title, 8-ball" },
    { k: "2025", v: "Nationals silver, 10-ball" },
    { k: "10+", v: "years as a full-time pro" },
  ],
  workLabel: "What you can book",
  pitchLabel: "Why book me",
  pitchTitle: "A working pro\nat the table",
  pitchBody:
    "I don't sell a course or a ready-made package. I coach at the same table I compete on, and I watch you play before I say anything. Then we fix the stroke, the tempo and the decisions: the things that break when the match tightens and a technique drill is no longer enough.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "One player, one table, the whole session built around you. The content follows what your own game reveals. You are not sitting through a general lecture.",
    },
    {
      k: "Shows",
      v: "Christmas parties, kickoffs and private nights. Shots you don't see in every hall, plus enough guidance that everyone in the room gets to play themselves.",
    },
    {
      k: "Sponsor",
      v: "Tour, social and jerseys. Your mark travels to where the matches are, and the footage comes from real events, not from stock photos.",
    },
    {
      k: "Helsinki",
      v: "Regularly in the Helsinki region, elsewhere in Finland and abroad by agreement. I can also come to your tables.",
    },
  ],
  leads: {
    coaching: {
      title: "Coaching",
      body: "A private session or a small group where everyone gets the same attention. We work through stroke, tempo and decisions and fix what breaks when the match tightens. You leave knowing exactly what to practise next.",
    },
    events: {
      title: "Events",
      body: "Private nights, Christmas parties and company days where the programme actually happens. Exhibition shots first, then cues in your guests' hands and a short brief, including for the people who have never played.",
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
      body: "Tour, social and jerseys give you visibility that comes out of real matches. Say what you want to achieve and what you bring, and we build a partnership whose result both of us can see.",
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
      "I coach at the same table I compete on. No ready-made package and no slogans: first we find where your game leaks, then we rebuild it correctly and repeat it until the fix holds under pressure too. After the session you know what to practise, why, and in what order.",
    items: [
      {
        title: "Private 1-to-1",
        body: "One player and my full attention. We go through stance, stroke and cue-ball control, but also the decisions: what you play when the easy pattern runs out. The content follows what your match reveals, not a lesson plan written in advance.",
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
  },
  eventsPage: {
    intro:
      "A private night, a Christmas party, a kickoff or a staff day that also works for the people who have never held a cue. We open with exhibition shots, continue with a short brief and spend the rest of the evening playing. The venue can be yours or we find a suitable hall. Tables are needed, the rest is on me.",
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
  },
  repairsPage: {
    intro:
      "I service cues to the standard I demand from my own. Tip, ferrule and shaft are checked, and you get an estimate of the work and the timeline before anything is done. Tell me what happened to the cue and how the hit feels now, and I'll come back with a measure rather than a guess.",
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
      "GameOn jerseys are built for playing: they take practice, look right at the table and don't restrict the stroke. Sizes and stock move, so there is no webshop at this stage. Send size and quantity through the form and you'll get an answer on availability and price.",
    items: [
      {
        title: "Order",
        body: "Tell me the size, the quantity and where the jerseys are going: your own game, a club or a crew. I'll come back with price and delivery. No invented prices here; once the numbers are locked, they go on the page.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Partnering with me means visibility that comes out of real matches: tour events, practice, social and the jersey. There is no ready-made package, because the best partnership is built from the goal. Tell me what you want to achieve and what you bring, and I'll propose what that looks like in practice.",
    items: [
      {
        title: "Jerseys and the tour",
        body: "Your mark where the matches are: competition, practice and travel. International tour events carry the visibility beyond Finland, and the agreed appearances are written down before the season.",
      },
      {
        title: "Social and appearances",
        body: "Instagram, booked nights and content made together. We agree what actually happens and on what schedule, so you know what you are paying for. No bought reach.",
      },
      {
        title: "Local partners",
        body: "A hall, kit or an event we run together. Helsinki is the starting point and the rest of Finland is in when it makes sense for both. A smaller local partnership is as welcome as a large one.",
      },
    ],
  },
  jani: {
    kicker: "Player",
    p1: "Jani Siekkinen, born 19 April 1987 in Helsinki. Competitive sport started in goal on a football pitch and led to a European cheerleading title with Funky Team Gorillaz, before the pool table took over for good.",
    p2: "Full-time pool professional since 2013. The games are 8-ball, 9-ball, 10-ball and straight pool, and the years at the table show in how quickly another player's mistake becomes visible. Some call him Siego. That's enough of that.",
    p3: "Still competing internationally at Euro Tour and WNT level, with US Open appearances and a best finish around 33rd according to the press. The same game we work through in a session is therefore still being tested every season.",
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
    "These are the results that can be put in writing without inventing medals. They also say something simple: the coaching comes from a player still in serious competition.",
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
    "Venue, level and format are always shaped around your situation, so you don't need to know anything in advance. Here are the questions that come up most often. If yours isn't on the list, just ask through the form.",
  faq: [
    {
      q: "Where do you coach?",
      a: "Regularly in the Helsinki region and elsewhere in Finland by agreement. We can play at a hall you already know or find a suitable table, and house calls and longer trips are arranged case by case.",
    },
    {
      q: "What is a private session?",
      a: "An hour at the table, just the two of us, not a lecture. I watch how you play first, then we work on the place where the game leaks. You leave with a clear practice plan you can run on your own.",
    },
    {
      q: "Absolute beginner?",
      a: "Yes, and many are. Fundamentals sit on their own track: grip, stance and cue-ball control taken calmly and in order. Tournament players have a separate path, so nobody spends their time at the wrong level.",
    },
    {
      q: "Companies?",
      a: "Absolutely. The programme is built around group size and the length of the evening so that first-timers play too. Tables are needed: the venue can be yours, or we find a suitable hall together.",
    },
    {
      q: "What's in an event?",
      a: "The price depends on the venue, the duration and the size of the group, so every event gets its own quote. Put the venue, headcount and date on the form and you'll get a clear price without extra rounds.",
    },
    {
      q: "Video analysis online?",
      a: "Yes. You film your shots on a phone and send the clips; I send back specific corrections and drills in priority order. It works well if you live outside the Helsinki region.",
    },
    {
      q: "Sponsorship?",
      a: "Very much so. Read the partners page, then say on the form which brand you represent, what you want to achieve and what you expect: jerseys, social or the tour. I'll propose something measurable in return.",
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
    "Send your name, your email and a short note on what you need: coaching, an event, a repair, a jersey or a partnership. I read every message myself and reply personally, not with a form letter.",
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
