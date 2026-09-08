import type { ServiceId } from "../config/site";
import type { PageId } from "./routes";

export const fi = {
  skip: "Siirry sisältöön",
  navAria: "Päävalikko",
  navAriaMobile: "Mobiilivalikko",
  menuOpen: "Avaa valikko",
  menuClose: "Sulje valikko",
  homeAria: "Etusivu, Jani Siekkinen",
  nav: {
    jani: "Jani",
    repairs: "Huollot",
    coaching: "Valmennukset",
    events: "Tilaisuudet",
    gameon: "GameOn",
    sponsor: "Yhteistyö",
    contact: "Yhteystiedot",
    results: "Tulokset",
  },
  enquire: "Ota yhteyttä",
  langSwitch: "EN",
  langSwitchLabel: "Switch to English",
  footerLegal: "Jani Siekkinen",
  footerNav: "Sivusto",
  footerConnect: "Yhteys",
  privacy: "Tietosuoja",
  terms: "Ehdot",
  quote: "Pyydä tarjous",
  instagram: "Instagram",
  email: "Sähköposti",
  phone: "Puhelin",
  whatsapp: "WhatsApp",
  locationLine: "Helsingin seudulla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan.",
  meta: {
    home: {
      title: "Jani Siekkinen · poolvalmennus Helsinki",
      description:
        "Poolammattilainen ja 8-pallon Suomen mestari 2018. Yksityisvalmennus, pienryhmät, yritystapahtumat, showlyönnit ja keppihuollot Helsingissä.",
      h1: "Jani Siekkinen",
    },
    coaching: {
      title: "Poolvalmennus Helsinki · 1-to-1 ja ryhmät",
      description:
        "Yksityistunnit, 2–4 pelaajan ryhmät, alkeet ja videoanalyysi Helsingin seudulla. Valmennusta samalla pöydällä, jolla itse kilpailen.",
      h1: "Valmennukset",
    },
    events: {
      title: "Yksityistilaisuudet ja yritystapahtumat · Jani Siekkinen",
      description:
        "Pikkujoulut, kickoffit, TYKY-päivät ja yksityiset illat: showlyönnit, ohjattu pelaaminen ja ilta, josta puhutaan vielä seuraavana viikkona.",
      h1: "Tilaisuudet",
    },
    repairs: {
      title: "Keppihuollot · Jani Siekkinen",
      description:
        "Kärki, ferruli ja shaft kuntoon ammattilaisen käsissä. Kerro mitä kepille tapahtui, niin saat arvion työstä ja aikataulusta.",
      h1: "Huollot",
    },
    gameon: {
      title: "GameOn pelipaidat · Jani Siekkinen",
      description:
        "GameOn-pelipaidat pelaajille, seuroille ja porukoille. Kerro koko ja määrä lomakkeella, palaan saatavuuden ja hinnan kanssa.",
      h1: "GameOn pelipaidat",
    },
    sponsor: {
      title: "Yhteistyö ja sponsorointi · Jani Siekkinen",
      description:
        "Näkyvyyttä kiertueella, somessa ja pelipaidoissa. Kerro mitä tavoittelet, niin rakennetaan yhteistyö, jonka tuloksen näkee.",
      h1: "Yhteistyö",
    },
    jani: {
      title: "Jani Siekkinen | Pelaaja",
      description:
        "s. 1987 Helsingissä. Poolammattilainen vuodesta 2013, 8-pallon Suomen mestari 2018 ja edelleen kansainvälisillä kiertueilla.",
      h1: "Jani Siekkinen",
    },
    results: {
      title: "Tulokset · Jani Siekkinen",
      description:
        "SM-kulta 8-pallossa 2018, 10-pallon SM-hopea 2025, pari-SM-kultaa, ensimmäisen FPT-osakilpailun voitto ja US Open -pelit.",
      h1: "Tulokset",
    },
    tips: {
      title: "Vinkit · Jani Siekkinen",
      description:
        "Lyhyitä muistiinpanoja pöydän äärestä: harjoituksia ja korjauksia, jotka näkyvät omassa pelissä heti seuraavalla treenillä.",
      h1: "Vinkit",
    },
    contact: {
      title: "Yhteystiedot · Jani Siekkinen",
      description:
        "Kerro lyhyesti mitä tarvitset: valmennus, tilaisuus, keppihuolto, pelipaita vai yhteistyö. Luen ja vastaan jokaiseen viestiin itse.",
      h1: "Yhteystiedot",
    },
    privacy: {
      title: "Tietosuoja · Jani Siekkinen",
      description:
        "Miten yhteydenottolomakkeen tiedot käsitellään: mitä kerätään, kuinka kauan säilytetään ja mitkä oikeudet sinulla on.",
      h1: "Tietosuoja",
    },
    terms: {
      title: "Ehdot · Jani Siekkinen",
      description:
        "Valmennuksen, ryhmien ja tilaisuuksien yleiset ehdot: sopiminen, hinnoittelu, peruutukset ja vastuut.",
      h1: "Ehdot",
    },
  } satisfies Record<PageId, { title: string; description: string; h1: string }>,
  hero: {
    kicker: "Poolammattilainen",
    first: "Jani",
    last: "Siekkinen",
    proof: "8-pallon Suomen mestari 2018. Edelleen kansainvälisillä kiertueilla.",
    lead: "Pelaan poolia ammatikseni vuodesta 2013. Sama tarkkuus, jolla kilpailen, tulee mukaan sinun valmennukseesi, yrityksesi tapahtumaan ja iltaan, joka jää porukalle mieleen.",
    cta: "Ota yhteyttä",
    alt: "Jani Siekkinen tähtää lyöntiä kiertueella",
  },
  stats: [
    { k: "2018", v: "SM-kulta, 8-pallo" },
    { k: "2025", v: "SM-hopea, 10-pallo" },
    { k: "10+", v: "vuotta poolammattilaisena" },
  ],
  workLabel: "Mitä voit tilata",
  pitchLabel: "Miksi tilata minut",
  pitchTitle: "Ammattilainen\npöydän ääressä",
  pitchBody:
    "En myy kurssia enkä valmiita paketteja. Valmennan samalla pöydällä, jolla itse kilpailen, ja katson ensin miten sinä pelaat. Sen jälkeen korjataan lyönti, rytmi ja päätökset, juuri ne asiat, jotka pettävät kun peli kiristyy ja pelkkä tekniikkaharjoitus ei enää riitä.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "Yksi pelaaja, yksi pöytä, koko tunti sinua varten. Sisältö rakennetaan sen mukaan, mitä oma pelisi paljastaa. Et istu kuuntelemassa yleistä luentoa.",
    },
    {
      k: "Show",
      v: "Pikkujoulut, kickoffit ja yksityiset illat. Lyöntejä, joita ei näe joka hallissa, ja sen verran ohjausta että jokainen paikalla oleva pääsee itse pelaamaan.",
    },
    {
      k: "Sponsori",
      v: "Kiertue, some ja pelipaidat. Merkki näkyy siellä missä pelataan ja kuvat syntyvät oikeista otteluista, ei kuvituskuvasta.",
    },
    {
      k: "Helsinki",
      v: "Helsingin seudulla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan. Tulen tarvittaessa teidän pöytienne ääreen.",
    },
  ],
  leads: {
    coaching: {
      title: "Valmennukset",
      body: "Yksityistunti tai pieni ryhmä, jossa jokainen saa saman huomion. Käydään läpi lyönti, rytmi ja päätökset ja korjataan se, mikä hajoaa kun peli kiristyy. Lähdet pöydän äärestä tietäen tarkalleen, mitä harjoittelet seuraavaksi.",
    },
    events: {
      title: "Tilaisuudet",
      body: "Yksityiset illat, pikkujoulut ja yrityspäivät, joissa ohjelma ei jää puheeksi. Showlyönnit ensin, sitten kepit vieraiden käsiin ja lyhyt opastus, myös niille, jotka eivät ole pelanneet koskaan.",
    },
    repairs: {
      title: "Huollot",
      body: "Kärki, ferruli ja shaft kuntoon niin, että lyönti tuntuu jälleen omalta. Kerro mitä kepille tapahtui, niin saat arvion työstä ja aikataulusta ennen kuin mitään tehdään.",
    },
    gameon: {
      title: "GameOn",
      body: "Pelipaidat omalle pelille, seuralle tai porukalle. Koot ja saatavuus vaihtelevat, joten kerro koko ja määrä lomakkeella. Palaan hinnan ja toimitusajan kanssa.",
    },
    sponsor: {
      title: "Yhteistyö",
      body: "Kiertue, some ja pelipaidat tarjoavat näkyvyyttä, joka syntyy oikeista otteluista. Kerro mitä tavoittelet ja mitä sinulla on tarjota, niin rakennetaan yhteistyö, jonka tuloksen molemmat näkevät.",
    },
  },
  services: {
    private: "Yksityinen 1-to-1",
    group: "Pienryhmä 2–4",
    beginner: "Alkeet / perusta",
    corporate: "Yritys / TYKY",
    school: "Koulu / nuoret",
    events: "Tilaisuus / show",
    repairs: "Huolto",
    jersey: "GameOn pelipaita",
    house: "Kotikäynti",
    travel: "Matka sopimuksen mukaan",
    video: "Videoanalyysi",
    sponsor: "Yhteistyö / sponsori",
    other: "Muu",
  } satisfies Record<ServiceId, string>,
  coaching: {
    intro:
      "Valmennan samalla pöydällä, jolla kilpaillaan. Ei valmista pakettia eikä sloganeita: katsotaan ensin missä peli vuotaa, sitten tehdään se uudestaan oikein ja niin monta kertaa, että korjaus pysyy myös paineessa. Tunnin jälkeen tiedät mitä harjoittelet, miksi ja millä järjestyksellä.",
    items: [
      {
        title: "Yksityinen 1-to-1",
        body: "Yksi pelaaja ja koko huomio sinulle. Käydään läpi asento, lyönti ja valkoisen hallinta, mutta myös päätökset: mitä pelaat kun helppo kuvio loppuu. Sisältö määräytyy sen mukaan, mitä ottelusi paljastaa, ei etukäteen tehdystä tuntisuunnitelmasta.",
      },
      {
        title: "Pienryhmä 2–4",
        body: "Sama kieli koko porukalle ja enemmän toistoja pöytää kohden. Sopii kaveriporukalle tai seuran pelaajille, jotka haluavat saman korjauksen yhtä aikaa ja pystyvät sen jälkeen valmentamaan toisiaan treeneissä.",
      },
      {
        title: "Alkeet",
        body: "Ote, asento, tähtäys ja valkoisen hallinta järjestyksessä, joka toimii. Aloitetaan nollasta ilman kisajargonia, ja ensimmäisen tunnin jälkeen pöydän ääressä on rutiini, jota voi harjoitella yksin.",
      },
      {
        title: "Kotikäynnit ja matkat",
        body: "Tulen Helsingin seudulla teidän pöytienne ääreen ja muualle Suomeen sopimuksen mukaan. Pidemmät matkat ja ulkomaat järjestyvät, kun aikataulu ja kokonaisuus ovat järkeviä.",
      },
      {
        title: "Videoanalyysi",
        body: "Kuvaat lyöntejäsi puhelimella ja lähetät klipit verkossa. Saat takaisin konkreettiset korjaukset ja harjoitteet järjestyksessä. Et yleistä luentoa vaan sen, mikä nostaa tasoa nopeimmin.",
      },
    ],
  },
  eventsPage: {
    intro:
      "Yksityinen ilta, pikkujoulut, kickoff tai TYKY-päivä, jossa ohjelma toimii myös niille, jotka eivät ole ennen pitäneet keppiä kädessä. Aloitetaan showlyönneillä, jatketaan lyhyellä opastuksella ja loppuilta pelataan. Paikka voi olla teidän tai etsitään sopiva halli. Pöydät tarvitaan, muusta huolehdin minä.",
    items: [
      {
        title: "Yksityistilaisuudet",
        body: "Illallinen, synttärit tai porukka, joka haluaa nähdä lyöntejä joita ei näe joka hallissa. Show sovitetaan tilan kokoon, ja sen jälkeen jokainen pääsee itse yrittämään samaa lyöntiä.",
      },
      {
        title: "Yritystapahtumat",
        body: "TYKY-päivät, kickoffit ja asiakasillat. Lyhyt opastus saa koko porukan pelaamaan muutamassa minuutissa, joten ilta ei jakaudu osaaviin ja sivustakatsojiin. Kesto ja ohjelma sovitaan ryhmän koon mukaan.",
      },
      {
        title: "Koulut ja nuoret",
        body: "Säännöt lyhyesti, sitten keppi käteen ja tekemisen kautta eteenpäin. Ryhmäkoko ja kesto sovitaan etukäteen, ja ohjelma pidetään sellaisena että myös ensikertalainen saa pallon pussiin.",
      },
    ],
  },
  repairsPage: {
    intro:
      "Huollan kepit samalla tarkkuudella, jolla vaadin omiltani. Kärki, ferruli ja shaft käydään läpi, ja saat arvion työstä ja aikataulusta ennen kuin mitään tehdään. Kerro mitä kepille on tapahtunut ja miltä lyönti nyt tuntuu, niin palaan asiaan mitalla enkä arvauksella.",
    items: [
      {
        title: "Kärki ja ferruli",
        body: "Vaihto ja muotoilu silloin kun lyönti ei enää pidä tai kärki on eläkkeellä. Valitaan kovuus sen mukaan, miten pelaat, ei sen mukaan, mitä hyllyssä sattuu olemaan.",
      },
      {
        title: "Shaft",
        body: "Puhdistus, suoruuden tarkistus ja pinta takaisin sellaiseksi, että kädessä ei enää takerra. Ei kikkailua eikä turhia töitä: vain se mikä pitää korjata, ja perustelut miksi.",
      },
    ],
  },
  gameonPage: {
    intro:
      "GameOn-pelipaidat on tehty pelaamiseen: ne kestävät treeniä, näyttävät hyvältä pöydän ääressä eivätkä rajoita lyöntiä. Koot ja saatavuus vaihtelevat, joten verkkokauppaa ei tässä vaiheessa ole. Kerro koko ja määrä lomakkeella, niin saat vastauksen saatavuudesta ja hinnasta.",
    items: [
      {
        title: "Tilaus",
        body: "Kerro koko, määrä ja mihin paidat tulevat: omaan peliin, seuralle vai porukalle. Palaan hinnan ja toimitusajan kanssa. Hintoja ei keksitä tähän etukäteen; kun numerot on lukittu, ne tulevat sivulle.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Yhteistyö kanssani tarkoittaa näkyvyyttä, joka syntyy oikeista otteluista: kiertueen turnauksissa, treeneissä, somessa ja pelipaidoissa. Valmista pakettia ei ole, koska paras yhteistyö rakennetaan tavoitteesta käsin. Kerro mitä tavoittelet ja mitä sinulla on tarjota, niin ehdotan miltä se käytännössä näyttää.",
    items: [
      {
        title: "Paidat ja kiertue",
        body: "Logo siellä missä pelataan: kilpailuissa, treeneissä ja matkoilla. Kansainväliset kiertueet tuovat näkyvyyden myös Suomen ulkopuolelle, ja sovitut esiintymiset kirjataan auki ennen kautta.",
      },
      {
        title: "Some ja keikat",
        body: "Instagram, tilaisuudet ja yhteiset sisällöt. Sovitaan mitä oikeasti tehdään ja millä aikataululla, jotta tiedät mistä maksat. Tyhjää näkyvyyttä ei myydä.",
      },
      {
        title: "Paikallinen yhteistyö",
        body: "Halli, välineet tai yhteinen tapahtuma. Helsinki on lähtökohta ja muu Suomi mukana silloin kun se on molemmille järkevää. Pienempi paikallinen yhteistyö on yhtä tervetullut kuin iso.",
      },
    ],
  },
  jani: {
    kicker: "Pelaaja",
    p1: "Jani Siekkinen, s. 19.4.1987 Helsingissä. Kilpaurheilu alkoi jalkapallomaalivahtina ja jatkui cheerleadingin Euroopan mestaruuteen Funky Team Gorillazin kanssa, ennen kuin poolpöytä vei lopullisesti mukanaan.",
    p2: "Poolammattilainen vuodesta 2013. Pelilajeina 8-pallo, 9-pallo, 10-pallo ja suora pool, ja pöydän ääressä vietetyt vuodet näkyvät siinä, miten nopeasti toisen pelaajan virhe löytyy. Kutsutaan joskus Siegoksi. Se jää tähän.",
    p3: "Kilpailee edelleen kansainvälisesti Euro Tour- ja WNT-tasolla, ja on pelannut myös US Openissa, jossa paras sijoitus on lehdistön mukaan 33. Sama peli, jota valmennuksissa käydään läpi, on siis edelleen koetuksella joka kausi.",
    pressLabel: "Mediassa",
    press: [
      {
        source: "Ilta-Sanomat",
        year: "2018",
        title: "Lääkärin kylmäävät sanat päättivät lupaavan suomalaisvahdin uran vain 18-vuotiaana – tavoittelee nyt MM-kultaa biljardissa",
        href: "https://www.is.fi/muutlajit/art-2000005637952.html",
      },
      {
        source: "Ilkka-Pohjalainen",
        year: "2024",
        title: "Jani Siekkinen on pelannut biljardia ammatikseen yli vuosikymmenen, mutta saavuttanut EM-kultaa ja MM-pronssia aivan erilaisessa lajissa",
        href: "https://www.ilkkapohjalainen.fi/jani-siekkinen-on-pelannut-biljardia-ammatikseen-y/12262146",
      },
    ],
  },
  resultsIntro:
    "Nämä ovat tulokset, jotka voidaan kirjoittaa ilman keksittyjä mitaleita. Ne kertovat, että valmennus tulee pelaajalta, joka on edelleen itse kovassa kilpailussa.",
  results: [
    { year: "2018", text: "8-pallon Suomen mestari" },
    { year: "2025", text: "10-pallon SM-hopea" },
    { year: "2015, 2018", text: "Pari-SM-kultaa" },
    { year: "2015", text: "Ensimmäisen Finnish Pool Tour -osakilpailun voittaja" },
    { year: "-", text: "US Openissa, paras sijoitus lehdistön mukaan 33." },
  ],
  faqLabel: "Hyvä tietää",
  faqTitle: "Ennen ensimmäistä\nlyöntiä",
  faqIntro:
    "Paikka, taso ja toteutus sovitaan aina tilanteesi mukaan, joten mitään ei tarvitse osata etukäteen. Tässä tavallisimmat kysymykset. Jos oma tilanteesi ei löydy listalta, kysy suoraan lomakkeella.",
  faq: [
    {
      q: "Missä valmennus on?",
      a: "Helsingin seudulla säännöllisesti ja muualla Suomessa sopimuksen mukaan. Voimme pelata sinulle tutussa hallissa tai etsiä sopivan pöydän, ja kotikäynnit sekä pidemmät matkat neuvotellaan tapauskohtaisesti.",
    },
    {
      q: "Mitä yksityistunti on?",
      a: "Tunti pöydän ääressä kahden kesken, ei ryhmäluentoa. Katson ensin miten pelaat, ja sen jälkeen työstämme sitä kohtaa, jossa peli vuotaa. Lähdet mukaasi selkeän harjoitusohjelman, jota voit tehdä yksin.",
    },
    {
      q: "Voiko tulla nollasta?",
      a: "Kyllä, ja moni tuleekin. Alkeet kulkevat omalla raiteellaan: ote, asento ja valkoisen hallinta rauhassa järjestyksessä. Kisaajille on oma polku, joten kummankaan aika ei mene toisen tasolla harjoitteluun.",
    },
    {
      q: "Entä yritystapahtuma?",
      a: "Onnistuu. Ohjelma rakennetaan ryhmän koon ja illan keston mukaan niin, että myös ensikertalaiset pelaavat. Pöydät tarvitaan: paikka voi olla teidän tai etsitään sopiva halli yhdessä.",
    },
    {
      q: "Mitä tilaisuus maksaa?",
      a: "Hinta muodostuu paikan, keston ja ryhmäkoon mukaan, joten teen aina tarjouksen erikseen. Kerro lomakkeella paikka, osallistujamäärä ja ajankohta, niin saat selkeän hinnan ilman lisäkierroksia.",
    },
    {
      q: "Onko videoanalyysi etänä?",
      a: "Kyllä. Kuvaat lyöntejäsi puhelimella ja lähetät klipit, minä palautan konkreettiset korjaukset ja harjoitteet tärkeysjärjestyksessä. Tämä toimii hyvin myös Helsingin ulkopuolella asuville.",
    },
    {
      q: "Voiko sponsoroinnista puhua?",
      a: "Ehdottomasti. Katso ensin yhteistyösivu ja kerro sitten lomakkeella merkki, tavoite ja se mitä odotat: paidat, some vai kiertue. Ehdotan takaisin kokonaisuuden, joka on mitattavissa.",
    },
  ],
  form: {
    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    phoneHint: "ei pakollinen",
    topic: "Mitä tarvitaan",
    message: "Viesti",
    messageHint: "Kerro lyhyesti mistä on kyse. Ajankohta, paikka ja osallistujamäärä auttavat vastaamaan heti hinnalla.",
    submit: "Lähetä",
    sending: "Lähetetään…",
    ok: "Kiitos, viesti tuli perille. Luen sen itse ja palaan asiaan pian.",
    err: "Lähetys ei onnistunut. Kokeile uudestaan tai laita viesti suoraan sähköpostilla.",
  },
  contactLead:
    "Kerro nimi, sähköposti ja lyhyesti mitä tarvitset: valmennus, tilaisuus, huolto, pelipaita vai yhteistyö. Luen jokaisen viestin itse ja vastaan sinulle henkilökohtaisesti, en lomakevastauksella.",
  privacyBody: [
    "Lomake lähettää nimen, sähköpostin, mahdollisen puhelinnumeron ja viestin suoraan sähköpostiini, jotta voin vastata sinulle. Muuta tietoa ei kerätä.",
    "Sivustolla ei ole seurantaa, mainospikseleitä eikä analytiikkaa. Tietoja ei myydä eikä luovuteta eteenpäin markkinointiin.",
    "Viesti säilytetään niin kauan kuin asia on auki, ja sen jälkeen se poistetaan. Bottitarkistus (Turnstile) voi käsitellä IP-osoitteen silloin, kun se on käytössä.",
    "Sinulla on oikeus tarkastaa, korjata ja poistaa omat tietosi. Pyynnön voi tehdä lomakkeella tai sähköpostilla.",
  ],
  termsBody: [
    "Valmennukset, ryhmät ja tilaisuudet sovitaan kirjallisesti ennen toteutusta; sähköposti riittää. Näin molemmat tietävät mitä on sovittu.",
    "Hinta on tarjous, kunnes se on hyväksytty. Paikka, kesto ja ryhmäkoko vaikuttavat hintaan, ja mahdolliset matkakulut kerrotaan tarjouksessa erikseen.",
    "Peruutuksista kannattaa ilmoittaa hyvissä ajoin, jolloin etsitään yhdessä uusi ajankohta. Myöhäinen peruutus voidaan veloittaa, jos pöytä tai matka on jo sidottu.",
    "Asiakas vastaa tilan ja pöytien saatavuudesta, ellei toisin sovita. Kerro etukäteen, jos paikka pitää järjestää. Se onnistuu yleensä yhdessä.",
  ],
  tipsIndex:
    "Lyhyitä muistiinpanoja pöydän äärestä: harjoituksia, korjauksia ja huomioita, jotka voi viedä suoraan seuraavaan treeniin. Ei viikkokirjettä eikä täytesisältöä.",
  alts: {
    hands: "Jani Siekkinen tähtää, liitu kepin varrella",
    break: "Jani Siekkinen tähtää Suomen pelipaidassa, katsomo taustalla",
    show: "Jani Siekkinen tähtää hallissa, useita pöytiä taustalla",
    cue: "Kärki muotoillaan Mezz Cue Magic -työkalulla",
    jersey: "Jani Siekkinen Suomen pelipaidassa Belgian Openissa",
    tour: "Jani Siekkinen, Mezz-logo ja nimi pelipaidan selässä",
    portrait: "Jani Siekkinen pöydän ääressä, pokaali nurkassa",
  },
} as const;
