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
      title: "Biljardivalmennus Helsinki · Jani Siekkinen",
      description:
        "Biljardi- ja poolvalmennus Helsingissä. 8-pallon Suomen mestari 2018: yksityistunnit, ryhmät, yritystapahtumat, showlyönnit ja keppihuollot.",
      h1: "Jani Siekkinen",
    },
    coaching: {
      title: "Biljardivalmennus Helsinki · 1-to-1 ja ryhmät",
      description:
        "Biljardivalmennusta Helsingissä: yksityistunnit, ryhmät, alkeet ja videoanalyysi. Miksi ammattivalmennusta, mitä tunnilla tapahtuu ja kenelle se sopii.",
      h1: "Biljardivalmennus",
    },
    events: {
      title: "Yksityistilaisuudet ja yritystapahtumat · Jani Siekkinen",
      description:
        "Pikkujoulut, kickoffit ja TYKY Helsingissä: showlyönnit, ohjattu peli ja ilta, joka toimii myös ensikertalaiselle. Miksi biljardi, ja mitä illassa tapahtuu.",
      h1: "Tilaisuudet",
    },
    repairs: {
      title: "Keppihuollot · Jani Siekkinen",
      description:
        "Kärki, ferruli ja shaft kuntoon. Kerro, mitä kepille tapahtui, niin saat arvion työstä ja aikataulusta.",
      h1: "Huollot",
    },
    gameon: {
      title: "GameOn-pelipaidat · Jani Siekkinen",
      description:
        "GameOn-pelipaidat pelaajille, seuroille ja porukoille. Kerro koko ja määrä lomakkeella, palaan saatavuuden ja hinnan kanssa.",
      h1: "GameOn-pelipaidat",
    },
    sponsor: {
      title: "Yhteistyö ja sponsorointi · Jani Siekkinen",
      description:
        "Näkyvyyttä kiertueella, somessa ja pelipaidoissa. Kerro, mitä tavoittelet. Sitten ehdotan, miltä yhteistyö näyttää.",
      h1: "Yhteistyö",
    },
    jani: {
      title: "Jani Siekkinen · poolammattilainen",
      description:
        "s. 1987 Helsingissä. Poolammattilainen ja biljardivalmentaja vuodesta 2013, yli 20 SM-mitalia, 8-pallon Suomen mestari 2018 ja edelleen kansainvälisillä kiertueilla.",
      h1: "Jani Siekkinen",
    },
    results: {
      title: "Tulokset · Jani Siekkinen",
      description:
        "Yli 20 SM-mitalia, SM-kulta 8-pallossa 2018, 10-pallon SM-hopea 2025, pari-SM-kultaa, ensimmäisen FPT-osakilpailun voitto ja US Open -pelit.",
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
        "Kerro lyhyesti, mitä tarvitset: valmennusta, tilaisuutta, keppihuoltoa, pelipaitaa tai yhteistyötä. Luen jokaisen viestin itse ja vastaan itse.",
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
    lead: "Olen pelannut poolia ammatikseni vuodesta 2013. Valmennan, vedän tilaisuuksia ja huollan keppejä sillä tarkkuudella, jolla itse kilpailen.",
    cta: "Ota yhteyttä",
    alt: "Jani Siekkinen tähtää kiertueella",
  },
  stats: [
    { k: "2018", v: "SM-kulta, 8-pallo" },
    { k: "2025", v: "SM-hopea, 10-pallo" },
    { k: "20+", v: "SM-mitalia" },
    { k: "10+", v: "vuotta poolammattilaisena" },
  ],
  workLabel: "Mitä teen",
  pitchLabel: "Miksi tämä",
  pitchTitle: "Perusteet kuntoon.\nSitten peli.",
  pitchBody:
    "En myy kurssia enkä valmista pakettia. Katson ensin, miten pelaat. Sitten korjataan lyönti, rytmi ja päätökset: ne asiat, jotka pettävät, kun peli kiristyy.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "Yksi pelaaja, yksi pöytä, koko tunti sinua varten. Sisältö tulee siitä, mitä oma pelisi näyttää. Ei yleistä luentoa.",
    },
    {
      k: "Show",
      v: "Pikkujoulut, kickoffit ja yksityiset illat. Lyöntejä, joita ei näe joka hallissa, ja sen verran ohjausta, että jokainen paikalla oleva pääsee itse pelaamaan.",
    },
    {
      k: "Sponsori",
      v: "Kiertue, some ja pelipaidat. Merkki näkyy siellä, missä pelataan. Kuvat tulevat kisoista, ei kuvituskuvasta.",
    },
    {
      k: "Helsinki",
      v: "Helsingin seudulla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan. Tulen tarvittaessa teidän pöytienne ääreen.",
    },
  ],
  leads: {
    coaching: {
      title: "Valmennukset",
      body: "Yksityistunti tai pieni ryhmä. Käydään lyönti, rytmi ja päätökset, ja korjataan se, mikä hajoaa, kun peli kiristyy. Tunnin jälkeen tiedät, mitä treenaat seuraavaksi.",
    },
    events: {
      title: "Tilaisuudet",
      body: "Yksityiset illat, pikkujoulut ja yrityspäivät. Showlyönnit ensin, sitten kepit vieraiden käsiin. Myös niille, jotka eivät ole pelanneet koskaan.",
    },
    repairs: {
      title: "Huollot",
      body: "Kärki, ferruli ja shaft kuntoon niin, että lyönti tuntuu jälleen omalta. Kerro, mitä kepille tapahtui, niin saat arvion työstä ja aikataulusta ennen kuin mitään tehdään.",
    },
    gameon: {
      title: "GameOn",
      body: "Pelipaidat omalle pelille, seuralle tai porukalle. Koot ja saatavuus vaihtelevat, joten kerro koko ja määrä lomakkeella. Palaan hinnan ja toimitusajan kanssa.",
    },
    sponsor: {
      title: "Yhteistyö",
      body: "Kiertue, some ja pelipaidat. Näkyvyys tulee kisoista. Kerro, mitä tavoittelet ja mitä sinulla on tarjota. Sitten ehdotan, miltä se näyttää.",
    },
  },
  services: {
    private: "Yksityinen 1-to-1",
    group: "Pienryhmä 2–4",
    beginner: "Alkeet",
    corporate: "Yritys / TYKY",
    school: "Koulu / nuoret",
    events: "Tilaisuus / show",
    repairs: "Huolto",
    jersey: "GameOn-pelipaita",
    house: "Kotikäynti",
    travel: "Matka sopimuksen mukaan",
    video: "Videoanalyysi",
    sponsor: "Yhteistyö / sponsori",
    other: "Muu",
  } satisfies Record<ServiceId, string>,
  coaching: {
    intro:
      "Valmennan Helsingissä samalla pöydällä, jolla itse kilpailen. Ei valmista pakettia: katsotaan ensin, missä peli vuotaa. Sitten tehdään se uudestaan niin monta kertaa, että korjaus pysyy myös paineessa.",
    items: [
      {
        title: "Yksityinen 1-to-1",
        body: "Yksi pelaaja ja koko huomio sinulle. Käydään asento, lyönti ja valkoisen hallinta, mutta myös päätökset: mitä pelaat, kun helppo kuvio loppuu. Sisältö tulee siitä, mitä ottelusi näyttää, ei etukäteen tehdystä tuntisuunnitelmasta.",
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
        body: "Kuvaat lyöntejäsi puhelimella ja lähetät klipit. Saat takaisin konkreettiset korjaukset ja harjoitteet järjestyksessä. Et saa yleistä luentoa. Saat sen, mikä nostaa tasoa nopeimmin.",
      },
    ],
    faqLabel: "Jani vastaa",
    faqTitle: "Mitä valmennus\noikeasti on",
    faqIntro:
      "Valmennuksessa annan eteenpäin sen, minkä olen itse maksanut ajalla, matkoilla ja virheillä. Perusteet kuntoon, peli kulkemaan, pää mukaan. Tunneilla ei mökötetä.",
    faq: [
      {
        q: "Miksi ammattivalmennusta?",
        a: [
          "Oppiihan sen pelaamallakin. Sillä tavalla oppii myös kymmenen huonoa tapaa, jotka tuntuvat omilta, koska niitä on toistanut tuhansia kertoja.",
          "Biljardissa erot tehdään pienissä asioissa. Asento, ote, tempo, se, miltä lyönti tuntuu, kun se onnistuu. Jos niitä ei kukaan katso sivusta, sä korjaat väärää asiaa. Itsekin olen nähnyt sen sekä omassa pelissä että salilla: kaveri takoo tunteja, mutta sama missi toistuu, koska perusta ei ole kunnossa.",
          "Ammattivalmennus ei ole temppukoulu. Se on se, että joku, joka on takonut lyöntejä sisään vuosikausia, näyttää, missä sun peli oikeasti vuotaa. Säästät aikaa. Ja aika on tässä lajissa se kallein juttu.",
        ],
      },
      {
        q: "Mitä tunnista jää käteen?",
        a: [
          "Ensin katsotaan, mistä lähdetään. Toisella on jo vuosien harrastus, toisella keppi kädessä ensimmäistä kertaa. Sama ohjelma ei toimi molemmille.",
          "Käydään läpi perusasiat: ote, asento, tähtääminen, lyönnin rytmi. Sitten tehdään harjoitteita, jotka voi viedä omaan treeniin. Tavoite ei ole se, että mä seison vieressä ja sä näytät hyvältä tunnin ajan. Tavoite on se, että sä tiedät seuraavalla kerralla, mitä treenaat ja miksi.",
          "Jos tulet ryhmän kanssa, opitaan säännöt, etiketti ja sen verran tekniikkaa, että peli alkaa kulkea. Sitten pelataan. Jos tulet yksin kehittämään peliä, mennään tarkemmin: missä pallo jää, miksi se jää sinne, mitä vaihtoehtoja oli ja miltä päässä tuntui siinä kohdassa, kun päätös piti tehdä.",
          "Yksi tunti ei tee mestariksi. Yksi tunti voi kuitenkin katkaista sen kierteen, että sä harjoittelet väärää asiaa kovaa.",
        ],
      },
      {
        q: "Kenelle tämä sopii?",
        a: [
          "Ei vain kilpapelaajille.",
          "Biljardi taipuu moneen. Joku haluaa päihittää kaverinsa firman pikkujouluissa. Joku haluaa, ettei nolo tunne iske, kun keppi otetaan käteen. Joku haluaa SM-tasolle. Joku haluaa vain harrastuksen, jossa pää saa olla rauhassa.",
          "Kaikille näille on hyötyä siitä, että perusteet ovat kunnossa. Kilpapelaajalle valmennus on usein se peili, jota ei saa omasta porukasta. Harrastajalle se on oikotie siihen, että peli alkaa tuntua peliltä eikä tönimiseltä.",
          "Ja yritysryhmille sanon suoraan: tunneilla ei mökötetä. Laji on vakava, meininki ei ole.",
        ],
      },
      {
        q: "Eikö salin kaveri riitä?",
        a: [
          "Salilla on aina joku, joka “osaa neuvoa”. Se joku neuvoo usein sitä, mikä toimii hänellä.",
          "Huipulla on nykyään ravintoterapeutteja, fysioterapeutteja, psykologeja ja PT:itä. Erot tehdään salin ulkopuolellakin. Vanhan liiton jätkätkin ovat tajunneet, että elämäntapojen on oltava kunnossa, jos tässä haluaa pärjätä.",
          "Sama logiikka pätee harrastajaan. Kokenut pelaaja näkee, että pallo ei mene. Ammattilainen näkee, miksi se ei mene, ja osaa sanoa sen niin, että sä pystyt korjaamaan sen itse. Eikä kyse ole vain tekniikasta. Kyse on siitä, mitä sä teet, kun peli ei kulje. Sitäkin on nähty riittävästi – omasta peilistä.",
        ],
      },
      {
        q: "Mitä kisavuodet opettavat?",
        a: [
          "Sen, että tämä ei ole pelkkä keppi ja pallo.",
          "Olen pelannut ammatikseni 8-, 9- ja 10-palloa sekä suoraa palloa. Vuosirytmi on kova: kymmeniä kisoja, paljon päiviä ulkomailla. Kisamatkalla huomio on pelissä. Kaverit kuvittelevat, että mä näen maailmaa. Todellisuus on hotellipuuroa ja sama rutiini eri kaupungissa.",
          "Vuonna 2018 tulokset olivat kehnoja ja rahaa ei tullut. Päädyin psykologille. Siitä tuli jakso, joka avasi lukkoja. Se kuulostaa ehkä raskaalta kotisivulle, mutta se on totta: tässä lajissa pää ratkaisee yhtä paljon kuin käsi.",
          "Siksi valmennuksessa ei puhuta vain siitä, mihin pallo osuu. Puhutaan myös siitä, mitä tapahtuu, kun missaat helpon pallon ja seuraava lyönti pitää silti lyödä.",
          "Kirkkain kruunu, MM-kulta, siintää mulle edelleen. Sama asenne pätee valmennettavaan: asetetaan lyhyt ja pitkä tavoite, ja sitten tehdään töitä. Ilman uhrausta ei tule voittoa. Se ei tarkoita, että harrastajan pitää elää kuin ammattilainen. Se tarkoittaa, että kehitys vaatii päätöksen.",
        ],
      },
      {
        q: "Mitä tunti ei ole?",
        a: [
          "Se ei ole taikatemppu eikä “kolme vinkkiä, joilla voitat aina”.",
          "Se ei ole myöskään se, että mä lyön sun puolesta. Mä voin näyttää, selittää ja korjata. Sun pitää lyödä.",
          "Eikä se ole arvostelua. Olen nähnyt tarpeeksi sitä, miltä tuntuu, kun peli ei kulje. Tunnilla saa missata. Missi on dataa. Siitä lähdetään."
        ],
      },
      {
        q: "Miten valmistautua?",
        a: [
          "Oma keppi, jos sulla on. Jos ei ole, pärjätään salin välineillä.",
          "Mieti etukäteen yksi asia: minkä haluat tuntuvan paremmalta tunnin jälkeen. Että pallo lähtee puhtaammin. Että tiedät säännöt. Että kaveriporukka saa yhteisen pelin. Että sun avaus ei ole arpapeliä.",
          "Jos tulet kilpapelaajana, kerro, missä pelimuodossa pelaat ja missä peli tökki viimeksi. Mitä tarkemmin sä osaat sanoa sen, sitä vähemmän aikaa menee arvailuun.",
        ],
      },
      {
        q: "Entä ryhmät ja firmat?",
        a: [
          "Perusteet, säännöt, lyöntitekniikan alku – ja ottelu.",
          "Olen sen verran paljon nähnyt eri tasoisia pelaajia, että perusvinkit saa kuntoon nopeasti. Ryhmäohjauksissa lähtökohta on se, että opitaan, kokeillaan ja pelataan. Yritykselle se on virkistystä, joka ei ole teennäistä tiimipäivää. Koululaisille se on laji, jossa pärjää ilman että pitää olla isoin tai nopein.",
          "Hauskanpito ei ole vastakohta oppimiselle. Se on se syy, miksi ihmiset palaavat pöydän ääreen.",
        ],
      },
      {
        q: "Mistä tietää, että puree?",
        a: [
          "Silloin kun sä et enää kysy “miksi toi ei menny”, vaan sä tiedät jo ennen lyöntiä, mikä siinä oli riski.",
          "Silloin kun treeni ei ole enää “lyödään vähän palloja”, vaan sulla on yksi tai kaksi juttua, joita toistat tietoisesti.",
          "Ja kilpapelaajalla silloin, kun huono päivä ei romuta koko settiä. Peli saa heittää. Rutiini pysyy.",
        ],
      },
    ],
  },
  eventsPage: {
    intro:
      "Yksityinen ilta, pikkujoulut, kickoff tai TYKY. Ohjelma toimii myös sille, joka ei ole pitänyt keppiä kädessä. Showlyönnit, lyhyt opastus, loppuilta pelataan. Paikka voi olla teidän tai etsitään halli. Pöydät tarvitaan, muusta huolehdin minä.",
    items: [
      {
        title: "Yksityistilaisuudet",
        body: "Illallinen, synttärit tai porukka, joka haluaa nähdä lyöntejä, joita ei näe joka hallissa. Show sovitetaan tilan kokoon, ja sen jälkeen jokainen pääsee itse yrittämään samaa lyöntiä.",
      },
      {
        title: "Yritystapahtumat",
        body: "TYKY-päivät, kickoffit ja asiakasillat. Lyhyt opastus saa koko porukan pelaamaan muutamassa minuutissa, joten ilta ei jakaudu osaaviin ja sivustakatsojiin. Kesto ja ohjelma sovitaan ryhmän koon mukaan.",
      },
      {
        title: "Koulut ja nuoret",
        body: "Säännöt lyhyesti, sitten keppi käteen ja tekemisen kautta eteenpäin. Ryhmäkoko ja kesto sovitaan etukäteen, ja ohjelma pidetään sellaisena, että myös ensikertalainen saa pallon pussiin.",
      },
    ],
    faqLabel: "Jani vastaa",
    faqTitle: "Mitä tilaisuus\noikeasti on",
    faqIntro:
      "Showlyönnit, lyhyt opastus, sitten kepit käteen. Tilaisuudessa en myy teennäistä tiimipäivää. Laji on vakava, meininki ei ole.",
    faq: [
      {
        q: "Miksi juuri biljardi?",
        a: [
          "Koska se toimii porukalle, joka ei ole samanlainen.",
          "Firman illassa on aina niitä, jotka pelaavat kaiken, ja niitä, jotka eivät ole pitäneet keppiä kädessä. Juoksulenkki jakaa porukan. Escape room jakaa. Biljardissa pärjää ilman että pitää olla isoin tai nopein. Siinä on koko juttu.",
          "Ja toisin kuin moni “tiimipäivä”, tässä ei tarvita esittäytymiskierrosta. Keppi käteen, pallo taskuun, sitten nauretaan sille, joka yrittää liikaa. Se on yhteinen juttu ilman että sitä pitää nimetä sellaiseksi.",
        ],
      },
      {
        q: "Mitä illassa tapahtuu?",
        a: [
          "Aloitetaan showlla. Lyöntejä, joita ei näe joka hallissa. Se avaa illan ja kertoo, että paikalla on joku, joka osaa.",
          "Sitten lyhyt opastus: ote, asento, säännöt sen verran, että peli kulkee. Muutamassa minuutissa koko porukka on pöydän ääressä, myös ne, jotka tulivat “vain katsomaan”.",
          "Loppuilta pelataan. Mä olen siinä, korjaan, näytän ja pidän rytmin. En seiso nurkassa odottamassa, että ohjelma loppuu.",
        ],
      },
      {
        q: "Entä jos kukaan ei ole pelannut?",
        a: [
          "Silloin tämä on parhaimmillaan.",
          "Olen nähnyt sen tarpeeksi: osaava porukka menee omilleen ja muut jäävät sivustakatsojiksi. Siksi illan rakenne on se, mikä on. Show, opastus, peli. Ei oleteta taitoa. Oletetaan, että porukka haluaa tehdä jotain yhdessä.",
          "Ensikertalainen saa pallon pussiin. Se on minimivaatimus, ei ylimääräistä.",
        ],
      },
      {
        q: "Eikö pelkkä pöytä riitä?",
        a: [
          "Pöytä ilman ohjelmaa on kaluste.",
          "Silloin illasta tulee se, että kolme kaveria osaa ja loput kiertävät lasin kanssa. Se ei ole tilaisuus. Se on tauko.",
          "Ammattilainen salilla ei ole koriste. Se on se, että joku pitää illan kasassa: näyttää, jakaa pöydät, saa ujonkin lyömään, ja osaa sen showlyönnin, jota varten porukka otti puhelimen esiin.",
        ],
      },
      {
        q: "Onko tämä show vai opetus?",
        a: [
          "Molempia. Siinä järjestyksessä.",
          "Pelkkä show on katsomista. Pelkkä opetus on tunti. Tilaisuus on se, että nähdään jotain, mitä ei nähdä joka hallissa, ja sitten yritetään itse.",
          "Kukaan ei lähde kotiin miettimään, että “olisi pitänyt päästä kokeilemaan”. Se kokeilu on ohjelmassa.",
        ],
      },
      {
        q: "Mitä tilaisuus ei ole?",
        a: [
          "Se ei ole teennäinen tiimipäivä, jossa keksitään yhdessä arvoja fläppitaululle.",
          "Se ei ole myöskään se, että mä lyön koko illan ja te taputatte. Näytän, selitän, sitten te lyötte.",
          "Eikä se ole kisa, jossa häviäjä jää noloksi. Laji on vakava, meininki ei ole.",
        ],
      },
      {
        q: "Missä tämä pidetään?",
        a: [
          "Paikka voi olla teidän tai etsitään sopiva halli. Pöydät tarvitaan. Muusta huolehdin minä.",
          "Helsingin seudulla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan. Kerro lomakkeella paikka, osallistujamäärä ja ajankohta. Sitten tehdään tarjous, ei arvailua.",
        ],
      },
      {
        q: "Entä koulut ja synttärit?",
        a: [
          "Sama logiikka, eri sävy.",
          "Koululaisille säännöt lyhyesti, keppi käteen, tekemisen kautta eteenpäin. Laji, jossa pärjää ilman että pitää olla isoin.",
          "Yksityisessä illassa show sovitetaan tilaan: illallinen, synttärit, porukka, joka haluaa nähdä lyöntejä. Sitten jokainen pääsee yrittämään samaa.",
          "Yritykselle se on virkistystä, joka ei tunnu pakolliselta ohjelmanumerolta.",
        ],
      },
      {
        q: "Mistä tietää, että ilta toimi?",
        a: [
          "Silloin kun sivustakatsojia ei jää.",
          "Silloin kun joku, joka “ei ikinä pelaa”, pyytää vielä yhden rackin.",
          "Ja silloin kun seuraavana viikkona puhutaan siitä lyönnistä, ei siitä, että “oli ihan kivaa”. Kiva unohtuu. Se lyönti ei unohdu.",
        ],
      },
    ],
  },
  repairsPage: {
    intro:
      "Huollan kepit siihen kuntoon, jota vaadin omiltani. Kärki, ferruli ja shaft. Saat arvion työstä ja aikataulusta ennen kuin mitään tehdään. Kerro, mitä kepille on tapahtunut ja miltä lyönti nyt tuntuu.",
    items: [
      {
        title: "Kärki ja ferruli",
        body: "Vaihto ja muotoilu silloin, kun lyönti ei enää pidä tai kärki on eläkkeellä. Valitaan kovuus sen mukaan, miten pelaat, ei sen mukaan, mitä hyllyssä sattuu olemaan.",
      },
      {
        title: "Shaft",
        body: "Puhdistus, suoruuden tarkistus ja pinta takaisin sellaiseksi, että kädessä ei enää takerra. Ei kikkailua eikä turhia töitä: vain se, mikä pitää korjata, ja perustelut, miksi.",
      },
    ],
  },
  gameonPage: {
    intro:
      "GameOn-paidat on tehty pelaamiseen. Koot ja saatavuus vaihtelevat, joten verkkokauppaa ei ole. Kerro koko ja määrä lomakkeella, niin palaan saatavuuden ja hinnan kanssa.",
    items: [
      {
        title: "Tilaus",
        body: "Kerro koko, määrä ja mihin paidat tulevat: omaan peliin, seuralle vai porukalle. Palaan hinnan ja toimitusajan kanssa. Hintoja ei ole sivulla, ennen kuin ne on päätetty.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Yhteistyö kanssani on näkyvyyttä kisoista: kiertue, treenit, some ja pelipaidat. Valmista pakettia ei ole, koska homma rakennetaan tavoitteesta. Kerro, mitä haluat ja mitä sinulla on tarjota. Sitten ehdotan, miltä se näyttää.",
    partnersLabel: "Nykyiset kumppanit",
    items: [
      {
        title: "Paidat ja kiertue",
        body: "Logo siellä, missä pelataan: kisoissa, treeneissä ja matkoilla. Kansainväliset kiertueet vievät merkin myös Suomen ulkopuolelle. Sovitut hommat kirjataan ennen kautta.",
      },
      {
        title: "Some ja keikat",
        body: "Instagram, tilaisuudet ja yhteiset sisällöt. Sovitaan, mitä oikeasti tehdään ja millä aikataululla, jotta tiedät, mistä maksat. Tyhjää näkyvyyttä ei myydä.",
      },
      {
        title: "Paikallinen yhteistyö",
        body: "Halli, välineet tai yhteinen tapahtuma. Helsinki on lähtökohta ja muu Suomi mukana silloin, kun se on molemmille järkevää. Pienempi paikallinen yhteistyö on yhtä tervetullut kuin iso.",
      },
    ],
  },
  jani: {
    kicker: "Pelaaja",
    p1: "Tulin pooliin aikuisena. Ensin maalivahdiksi, sitten cheerleadingin Euroopan mestariksi Funky Team Gorillazin kanssa. Sitten tämä pöytä vei mukanaan.",
    p2: "Syntynyt Helsingissä 19.4.1987. Poolammattilainen vuodesta 2013. Pelilajeina 8-pallo, 9-pallo, 10-pallo ja suora pallo. Vuodet pöydän ääressä näkyvät siinä, miten nopeasti toisen pelaajan virhe löytyy. Minua kutsutaan joskus Siegoksi. Se jää tähän.",
    p3: "Kilpailen edelleen Euro Tourilla ja WNT:llä, ja olen pelannut US Openissa. Paras sija on 33. Matkaan on kertynyt yli 20 SM-mitalia. Sama peli, jota valmennuksissa käydään läpi, on joka kausi itse koetuksella.",
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
    "Nämä ovat tulokset, jotka voin kirjoittaa ilman keksittyjä mitaleita. Valmennus tulee pelaajalta, joka on itse edelleen kisassa.",
  results: [
    { year: "20+", text: "SM-mitalia" },
    { year: "2018", text: "8-pallon Suomen mestari" },
    { year: "2025", text: "10-pallon SM-hopea" },
    { year: "2015, 2018", text: "Pari-SM-kultaa" },
    { year: "2015", text: "Ensimmäisen Finnish Pool Tour -osakilpailun voittaja" },
    { year: "-", text: "US Openissa, paras sija 33." },
  ],
  faqLabel: "Hyvä tietää",
  faqTitle: "Ennen ensimmäistä\nlyöntiä",
  faqIntro:
    "Paikka, taso ja homma sovitaan sen mukaan, mistä lähdetään. Mitään ei tarvitse osata etukäteen. Tässä ne kysymykset, jotka tulevat useimmin. Jos oma juttusi ei ole listalla, kysy lomakkeella.",
  faq: [
    {
      q: "Onko tämä poolia vai biljardia?",
      a: "Poolia. Suomessa pool kuuluu biljardiin. Valmennan 8-, 9- ja 10-palloa sekä suoraa palloa. Snookeria en valmenna.",
    },
    {
      q: "Missä valmennus on?",
      a: "Helsingin seudulla säännöllisesti ja muualla Suomessa sopimuksen mukaan. Pelataan sinulle tutussa hallissa tai etsitään sopiva pöytä. Kotikäynnit ja pidemmät matkat sovitaan tapauskohtaisesti.",
    },
    {
      q: "Mitä yksityistunti on?",
      a: "Tunti pöydän ääressä kahden kesken, ei ryhmäluentoa. Katson ensin, miten pelaat, ja sen jälkeen työstetään se kohta, jossa peli vuotaa. Saat mukaasi selkeän treeniohjelman, jota voit tehdä yksin.",
    },
    {
      q: "Voiko tulla nollasta?",
      a: "Kyllä, ja moni tuleekin. Alkeet ovat oma juttunsa: ote, asento ja valkoisen hallinta rauhassa järjestyksessä. Kisaajille on oma polku, joten kummankaan aika ei mene toisen tasolla.",
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
      a: "Ehdottomasti. Katso ensin yhteistyösivu ja kerro lomakkeella merkki, tavoite ja mitä odotat: paidat, some vai kiertue. Palaan ehdotuksella.",
    },
  ],
  form: {
    name: "Nimi",
    email: "Sähköposti",
    phone: "Puhelin",
    phoneHint: "ei pakollinen",
    topic: "Mistä on kyse",
    message: "Viesti",
    messageHint: "Kerro lyhyesti, mistä on kyse. Ajankohta, paikka ja osallistujamäärä auttavat vastaamaan heti hinnalla.",
    submit: "Lähetä",
    sending: "Lähetetään…",
    ok: "Kiitos, viesti tuli perille. Luen sen itse ja palaan asiaan pian.",
    err: "Lähetys ei onnistunut. Kokeile uudestaan tai laita viesti suoraan sähköpostilla.",
  },
  contactLead:
    "Kerro nimesi, sähköpostisi ja lyhyesti, mitä tarvitset. Valmennusta, tilaisuutta, huoltoa, pelipaitaa tai yhteistyötä. Luen jokaisen viestin itse ja vastaan itse, en automaatilla.",
  cookie: {
    title: "Seuranta",
    text: "Sivusto käyttää Google Analyticsia kävijämäärien mittaamiseen. Tietoja ei käytetä mainontaan.",
    accept: "Selvä",
    decline: "Sulje",
  },
  privacyAnalytics:
    "Sivusto käyttää Google Analytics 4 -mittausta (Google LLC) kävijämäärien ja sivujen käytön seuraamiseen. IP-osoite anonymisoidaan. Tietoja ei myydä eikä käytetä mainontaan.",
  privacyBody: [
    "Lomake lähettää nimen, sähköpostin, mahdollisen puhelinnumeron ja viestin suoraan sähköpostiini, jotta voin vastata sinulle. Muuta tietoa ei kerätä.",
    "Sivustolla ei ole seurantaa, mainospikseleitä eikä analytiikkaa. Tietoja ei myydä eikä luovuteta eteenpäin markkinointiin.",
    "Viesti säilytetään niin kauan kuin asia on auki, ja sen jälkeen se poistetaan. Bottitarkistus (Turnstile) voi käsitellä IP-osoitteen silloin, kun se on käytössä.",
    "Sinulla on oikeus tarkastaa, korjata ja poistaa omat tietosi. Pyynnön voi tehdä lomakkeella tai sähköpostilla.",
  ],
  termsBody: [
    "Valmennukset, ryhmät ja tilaisuudet sovitaan kirjallisesti ennen toteutusta; sähköposti riittää. Näin molemmat tietävät, mitä on sovittu.",
    "Hinta on tarjous, kunnes se on hyväksytty. Paikka, kesto ja ryhmäkoko vaikuttavat hintaan, ja mahdolliset matkakulut kerrotaan tarjouksessa erikseen.",
    "Peruutuksista kannattaa ilmoittaa hyvissä ajoin, jolloin etsitään yhdessä uusi ajankohta. Myöhäinen peruutus voidaan veloittaa, jos pöytä tai matka on jo sidottu.",
    "Asiakas vastaa tilan ja pöytien saatavuudesta, ellei toisin sovita. Kerro etukäteen, jos paikka pitää järjestää. Se onnistuu yleensä yhdessä.",
  ],
  tipsIndex:
    "Lyhyitä muistiinpanoja pöydän äärestä: harjoituksia, korjauksia ja huomioita, jotka voi viedä suoraan seuraavaan treeniin. Ei viikkokirjettä eikä täytesisältöä.",
  notFound: {
    metaTitle: "Sivua ei löydy · Jani Siekkinen",
    metaDescription: "Scratch. Valkoinen pussiin, sivu kadoksissa.",
    kicker: "Foul",
    title: "Scratch",
    lead: "Etsit sivua. Löysit valkoisen pussista. Halli on hiljaa, paitsi se yksi nauru väärässä kohdassa.",
    caption: "Valkoinen pussiin. Sivu edelleen kadoksissa.",
    ghost: "404",
    notes: [
      { k: "01", v: "Keppi syytön. Älä syytä Mezziä." },
      { k: "02", v: "Valot ok. Halli ei pimentynyt." },
      { k: "03", v: "URL scratchasi. Tuomari kääntäisi selkänsä." },
      { k: "04", v: "Pelaaja paikalla. Nolla kadonnutta Siegoa." },
    ],
    home: "Uusi lyönti",
  },
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
