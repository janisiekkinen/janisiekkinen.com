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
  locationLine: "Pääkaupunkiseudulla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan.",
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
        "TyKy, TyHy, pikkujoulut ja asiakasillat pääkaupunkiseudulla. Selkeät ohjeet, jotta koko porukka pääsee pelaamaan ja onnistumaan. Temppulyöntejä silloin, kun ne sopivat iltaan.",
      h1: "Tilaisuudet",
    },
    repairs: {
      title: "Keppihuollot · Jani Siekkinen",
      description:
        "Tippi, holkki, grippi ja puhdistukset. Kerro huoltotarve, niin saat arvion työstä ja aikataulusta ennen kuin mitään tehdään.",
      h1: "Huollot",
    },
    gameon: {
      title: "GameOn-pelipaidat · Jani Siekkinen",
      description:
        "Kustomoitu GameOn-pelipaita yhdelle pelaajalle tai koko joukkueelle. Dry Tech venyy moneen suuntaan. Kysy koko ja määrä, niin saat hinnan ja toimitusajan.",
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
    proof: "Moninkertainen Suomen mestari sekä Euroopan mestari.\nWorld Nineball Tour Pro-pelaaja.",
    lead: "Olen pelannut poolia ammatikseni vuodesta 2013. Valmennan, esiinnyn tilaisuuksissa ja huollan keppejä samalla huolellisuudella, jolla itse kilpailen.",
    cta: "Ota yhteyttä",
    alt: "Jani Siekkinen tähtää kiertueella",
  },
  stats: [
    { k: "2018", v: "SM-kulta, 8-pallo" },
    { k: "2025", v: "SM-hopea, 10-pallo" },
    { k: "20+", v: "SM-mitalia" },
    { k: "+75", v: "podium-paikkaa" },
    { k: "10+", v: "vuotta poolammattilaisena" },
  ],
  workLabel: "Mitä teen",
  pitchLabel: "Miksi minä",
  pitchTitle: "Perusteet kuntoon.\nSitten varmuus.",
  pitchBody:
    "En myy kurssia enkä valmista pakettia. Katson ensin, mitä tarvitsee kehittää. Sitten korjataan, mitä pitää, jotta saat lyöntiisi varmuutta ja tarvittavat taidot, kun peli menee jännäksi.",
  pitchPoints: [
    {
      k: "1-to-1",
      v: "Yksi pelaaja, yksi pöytä, koko sessio sinua varten. Sisältö tehdään aina asiakkaan mukaan, ei valmiita kursseja.",
    },
    {
      k: "Show",
      v: "TyKy, TyHy tai muu työporukan yhteinen tekeminen. Pikkujoulut, kickoffit tai avainasiakkaille erikoistapahtuma. Temppulyöntejä, joita ei näe ihan joka biljardisalilla. Hyvät ja selkeät ohjeet koko porukalle, jotta kaikki pääsevät pelaamaan ja onnistumaan.",
    },
    {
      k: "Sponsori",
      v: "Yritys, yksityishenkilö tai kuka tahansa voi lähteä tukemaan. Näkyvyyttä saa kiertueella, somessa ja pelipaidassa. Yhteistyökuviot sovitaan yhdessä, sen mukaan mitä yhteistyöltä haetaan.",
    },
    {
      k: "Uusimaa",
      v: "Uudellamaalla säännöllisesti, muualla Suomessa ja ulkomailla sopimuksen mukaan. Tulen tarvittaessa teidän pöytienne ääreen.",
    },
  ],
  leads: {
    coaching: {
      title: "Valmennukset",
      body: "Yksityistunti tai pieni ryhmä. Käydään perusteellisesti läpi, mistä peli koostuu. Kattava kokonaisuus juuri teidän tarpeisiinne. Vastaukset kaikkiin pelin osa-alueisiin.",
    },
    events: {
      title: "Tilaisuudet",
      body: "TyKy, pikkujoulut tai asiakasilta. Ilta rakennetaan perusteellisesti teidän porukkanne mukaan. Kattava kokonaisuus juuri teidän tarpeisiinne. Selkeät ohjeet koko porukalle, jotta kaikki pääsevät pelaamaan ja onnistumaan.",
    },
    repairs: {
      title: "Huollot",
      body: "Tippi, holkki, grippi ja puhdistukset. Mikä huoltotarpeesi onkaan, kerro se, niin saat arvion työstä ja aikataulusta ennen kuin mitään tehdään.",
    },
    gameon: {
      title: "GameOn",
      body: "Pelipaita itselle tai koko joukkueelle oma. Uuden ajan Dry Tech -teknologia ja moneen suuntaan venyvä, supermiellyttävän tuntuinen kangas. Jokainen paita tehdään kustomoituna. Koot ja saatavuus vaihtelevat, joten kerro koko ja määrä lomakkeella. Palaan hinnan ja toimitusajan kanssa.",
    },
    sponsor: {
      title: "Yhteistyö",
      body: "Yritys, yksityishenkilö tai kuka tahansa voi lähteä tukemaan. Näkyvyyttä saa kiertueella, somessa ja pelipaidassa. Yhteistyökuviot sovitaan yhdessä, sen mukaan mitä haetaan.",
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
      "Yksityistunti tai pieni ryhmä. Selvitetään ensin lähtötaso, eikä mitään tarvitse osata etukäteen. Käydään perusteellisesti läpi, mistä peli koostuu. Kattava kokonaisuus juuri teidän tarpeisiinne.",
    items: [
      {
        title: "Yksityinen 1-to-1",
        body: "Yksi pelaaja, yksi pöytä, koko sessio sinua varten. Sisältö tehdään aina asiakkaan mukaan, ei valmiita kursseja. Saat vastaukset kaikkiin pelin osa-alueisiin.",
      },
      {
        title: "Pienryhmä 2–4",
        body: "Pieni ryhmä, sama sessio koko porukalle. Käydään perusteellisesti läpi, mistä peli koostuu, ja rakennetaan kokonaisuus teidän tarpeisiinne.",
      },
      {
        title: "Alkeet",
        body: "Aloittelijana ei ole hätää, eikä mitään tarvitse osata etukäteen. Selvitetään lähtötaso ja rakennetaan sessio siitä.",
      },
      {
        title: "Kotikäynnit ja matkat",
        body: "Pääkaupunkiseudulla missä vain, muualla Suomessa ja ulkomailla sopimuksen mukaan. Pelataan tutussa biljardisalissa tai tulen teidän pöytienne ääreen.",
      },
      {
        title: "Videoanalyysi",
        body: "Kuvaat lyöntejäsi puhelimella ja lähetät klipit. Palautan korjaukset ja harjoitteet tärkeysjärjestyksessä. Toimii hyvin myös pääkaupunkiseudun ulkopuolella.",
      },
    ],
    faqLabel: "Jani vastaa",
    faqTitle: "Mitä valmennus\noikeasti on",
    faqIntro:
      "Jaan eteenpäin sen, minkä olen itse selvittänyt kovalla työllä, rahalla sekä verellä, hiellä ja kyynelillä. Perusteet kuntoon, peli kulkemaan, pää mukaan. Tunneilla ei mökötetä.",
    faq: [
      {
        q: "Miksi ammattivalmennusta?",
        a: [
          "Oppiihan sen pelaamallakin. Sillä tavalla oppii myös kymmenen huonoa tapaa, jotka tuntuvat omilta, koska niitä on toistanut tuhansia kertoja.",
          "Biljardissa erot tehdään pienissä asioissa. Asento, ote, tempo, se, miltä lyönti tuntuu, kun se onnistuu. Jos niitä ei kukaan katso sivusta, korjaus menee helposti viereen. Olen nähnyt sen omassa pelissä ja biljardisalilla: tunteja kertyy, mutta sama kohta palaa, kun perusta ei ole vielä kunnossa.",
          "Käydään perusteellisesti läpi, mistä sun peli koostuu. Katson ensin, mitä tarvitsee kehittää, ja korjataan se, jotta lyöntiin tulee varmuus silloinkin, kun peli menee jännäksi. Siinä säästyy aikaa, koska tunteja ei kulu väärän asian toistamiseen.",
        ],
      },
      {
        q: "Mitä tunnista jää käteen?",
        a: [
          "Ensin katsotaan, mistä lähdetään. Toisella on jo vuosien harrastus, toisella keppi kädessä ensimmäistä kertaa. Sama ohjelma ei toimi molemmille.",
          "Käydään läpi perusasiat: ote, asento, tähtääminen, lyönnin rytmi. Sitten tehdään harjoitteita, jotka voi viedä omaan treeniin. Tavoite ei ole se, että mä seison vieressä ja sä näytät hyvältä tunnin ajan. Tavoite on se, että sä tiedät seuraavalla kerralla, mitä treenaat ja miksi.",
          "Jos tulet ryhmän kanssa, opitaan säännöt, etiketti ja sen verran tekniikkaa, että peli alkaa kulkea. Sitten pelataan. Jos tulet yksin kehittämään peliä, mennään tarkemmin. Katsotaan, mihin valkoinen jää ja miksi se jäi sinne. Sitten käydään läpi, mitä muita vaihtoehtoja oli, ja miltä päässä tuntui, kun päätös piti tehdä.",
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
        q: "Eikö biljardisalin kaveri riitä?",
        a: [
          "Salilla on aina joku, joka “osaa neuvoa”. Se joku neuvoo usein sitä, mikä toimii hänellä.",
          "Huipulla on nykyään ravintoterapeutteja, fysioterapeutteja, psykologeja ja PT:itä. Erot tehdään biljardisalin ulkopuolellakin. Vanhan liiton jätkätkin ovat tajunneet, että elämäntapojen on oltava kunnossa, jos tässä haluaa pärjätä.",
          "Sama logiikka pätee harrastajaan. Kokenut pelaaja näkee, että pallo ei mene. Ammattilainen näkee, miksi se ei mene, ja osaa sanoa sen niin, että sä pystyt korjaamaan sen itse. Eikä kyse ole vain tekniikasta. Kyse on siitä, mitä sä teet, kun peli ei kulje. Sitäkin on nähty riittävästi – omasta peilistä.",
        ],
      },
      {
        q: "Mitä kisavuodet opettavat?",
        a: [
          "Sen, että tämä ei ole pelkkä keppi ja pallo.",
          "Olen pelannut ammatikseni 8-, 9- ja 10-palloa sekä Straight poolia. Vuosirytmi on kova: kymmeniä kisoja, paljon päiviä ulkomailla. Kisamatkalla huomio on pelissä. Kaverit kuvittelevat, että mä näen maailmaa. Todellisuus on hotellipuuroa ja sama rutiini eri kaupungissa.",
          "Vuonna 2018 tulokset olivat kehnoja ja rahaa ei tullut. Päädyin psykologille. Siitä tuli jakso, joka avasi lukkoja. Se kuulostaa ehkä raskaalta, mutta se on totta: tässä lajissa pää ratkaisee yhtä paljon kuin käsi.",
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
          "Oma keppi, jos sulla on. Jos ei ole, pärjätään biljardisalin välineillä.",
          "Mieti etukäteen yksi asia, jos se on jo mielessä: mitä haluat saada varmemmaksi. Lähtötaso selvitetään silti ensin, eikä mitään tarvitse osata etukäteen.",
          "Jos tulet kilpapelaajana, kerro pelimuoto ja se kohta, jossa peli meni jännäksi tai päätös jäi auki. Mitä tarkemmin sä osaat sanoa sen, sitä vähemmän aikaa menee arvailuun. Jos sitä ei vielä osaa nimetä, katsotaan se yhdessä.",
        ],
      },
      {
        q: "Entä ryhmät ja firmat?",
        a: [
          "Ensin perusteet. Sitten säännöt ja lyöntitekniikat. Sitten pelataan.",
          "Olen sen verran paljon nähnyt eri tasoisia pelaajia, että perusvinkit saa kuntoon nopeasti. Ryhmäohjauksissa lähtökohta on se, että opitaan, kokeillaan ja pelataan. Yritykselle se on virkistystä, joka ei ole teennäistä tiimipäivää. Koululaisille se on laji, jossa pärjää ilman että pitää olla isoin tai nopein.",
          "Hauskanpito ei ole vastakohta oppimiselle. Se on se syy, miksi ihmiset palaavat pöydän ääreen.",
        ],
      },
      {
        q: "Mistä tietää, että oppi toimii?",
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
      "TyKy, TyHy, pikkujoulut tai asiakasilta. Ilta rakennetaan perusteellisesti teidän porukkanne mukaan. Selkeät ohjeet koko porukalle, jotta kaikki pääsevät pelaamaan ja onnistumaan. Temppulyöntejä voi olla mukana, jos ne sopivat iltaan. Paikka voi olla teidän, tai etsitään biljardisali.",
    items: [
      {
        title: "Yksityistilaisuudet",
        body: "Illallinen, synttärit, polttarit tai avainasiakkaille erikoistapahtuma. Selkeät ohjeet, ja sen jälkeen jokainen pääsee itse pelaamaan ja onnistumaan. Temppulyöntejä voi olla mukana, jos ne sopivat iltaan.",
      },
      {
        title: "Yritystapahtumat",
        body: "TyKy, TyHy, kickoffit ja asiakasillat. Ilta rakennetaan perusteellisesti teidän porukkanne mukaan. Selkeät ohjeet koko porukalle, jotta kaikki pääsevät pelaamaan eikä kukaan jää katsomaan.",
      },
      {
        title: "Koulut ja nuoret",
        body: "Sopii kaikille. Tämä ei ole luento, vaan innostavaa tekemistä. Ensin perusteet. Sitten säännöt ja lyöntitekniikat. Sitten pelataan. Ryhmäkoko ja kesto sovitaan etukäteen, ja myös ensikertalainen pääsee onnistumaan.",
      },
    ],
    faqLabel: "Jani vastaa",
    faqTitle: "Mitä tilaisuus\noikeasti on",
    faqIntro:
      "Selkeät ohjeet, sitten kepit käteen. Temppulyönnit tulevat mukaan silloin, kun ne sopivat iltaan. Ilta rakennetaan teidän porukkanne mukaan. Laji on vakava, meininki ei ole.",
    faq: [
      {
        q: "Miksi juuri biljardi?",
        a: [
          "Koska sama ilta toimii koko porukalle.",
          "Biljardi sopii kaikille. Mukana on niitä, jotka ovat pelanneet vuosia, tai niitä, jotka ottavat kepin käteen ensimmäistä kertaa. Ohjeet ovat selvät, joten kukaan ei jää katsomaan. Ei tarvitse olla isoin tai nopein. Riittää, että haluaa yrittää.",
        ],
      },
      {
        q: "Mitä illassa tapahtuu?",
        a: [
          "Ilta rakennetaan teidän porukkanne mukaan. Jos temppulyönnit ovat mukana, niistä ilta lähtee käyntiin ja porukka näkee heti, mitä kaikkea pöydällä voi tehdä.",
          "Selkeät ohjeet koko porukalle: ensin perusteet, sitten säännöt ja lyöntitekniikka. Myös ne, jotka tulivat vain katsomaan, pääsevät pöydän ääreen.",
          "Loppuilta pelataan. Olen mukana, näytän, korjaan ja pidän rytmin, jotta kaikki pääsevät onnistumaan.",
        ],
      },
      {
        q: "Entä jos kukaan ei ole pelannut?",
        a: [
          "Silloin ilta on parhaimmillaan. Mitään ei tarvitse osata etukäteen.",
          "Ohjeet käydään rauhassa, ja sitten pelataan. Jos temppulyönnit ovat mukana, ne näyttävät suuntaa. Ensikertalainenkin pääsee onnistumaan. Se on illan päämäärä.",
        ],
      },
      {
        q: "Eikö pelkkä pöytä riitä?",
        a: [
          "Pöytä yksin ei vielä tee tilaisuutta. Ilman ohjeita osaava porukka pelaa ja muut jäävät seisomaan.",
          "Minä pidän illan kasassa. Jaan pöydät, annan selkeät ohjeet ja saan ujonkin lyömään. Temppulyönnit näytän silloin, kun ne kuuluvat iltaan.",
        ],
      },
      {
        q: "Temppuja, opetusta tai molempia?",
        a: [
          "Voi olla molempia, tai vain toista.",
          "Temppulyöntejä, joita ei näe ihan joka biljardisalilla, silloin kun ne sopivat iltaan. Opetusta ja omaa pelaamista silloin, kun porukka haluaa kokeilla itse.",
        ],
      },
      {
        q: "Mitä tilaisuus ei ole?",
        a: [
          "Se ei ole luento eikä pakollinen ohjelmanumero.",
          "Minä en lyö koko iltaa teidän taputtaessa. Näytän, selitän, sitten te pelaatte. Kukaan ei jää noloksi. Laji on vakava, meininki ei ole.",
        ],
      },
      {
        q: "Missä tämä pidetään?",
        a: [
          "Pääkaupunkiseudulla missä vain, muualla Suomessa ja ulkomailla sopimuksen mukaan.",
          "Paikka voi olla teidän. Jos sitä ei ole, etsin sopivan biljardisalin, ja saat tarjouksen saman tien. Kerro lomakkeella osallistujamäärä, ajankohta ja paikka, jos se on jo mielessä.",
        ],
      },
      {
        q: "Entä koulut ja synttärit?",
        a: [
          "Kouluille ja nuorille tämä sopii kaikille. Ei luentoa, vaan innostavaa tekemistä: ensin perusteet, sitten säännöt ja lyöntitekniikat, sitten pelataan.",
          "Yksityiseen iltaan kuuluvat illallinen, synttärit ja polttarit. Temppulyönnit voidaan sovittaa tilaan, jos ne kuuluvat iltaan, ja sen jälkeen jokainen pääsee pelaamaan.",
          "Yritykselle sama ilta on TyKy, TyHy, kickoff tai asiakasilta, rakennettuna teidän porukkanne mukaan.",
        ],
      },
      {
        q: "Mistä tietää, että ilta toimi?",
        a: [
          "Silloin kun kukaan ei jää katsomaan.",
          "Silloin kun ensikertalainen pyytää vielä yhden pelin.",
          "Ja silloin kun seuraavalla viikolla puhutaan siitä lyönnistä, joka onnistui.",
        ],
      },
    ],
  },
  repairsPage: {
    intro:
      "Huollan kepit siihen kuntoon, jota vaadin omiltani. Tippi, holkki, grippi ja puhdistukset. Mikä huoltotarpeesi onkaan, kerro se, niin saat arvion työstä ja aikataulusta ennen kuin mitään tehdään.",
    items: [
      {
        title: "Tippi ja holkki",
        body: "Vaihto ja muotoilu silloin, kun tippi on tunnoton tai tipin on aika jäädä eläkkeelle. Valitaan kovuus sen mukaan, miten pelaat, ei sen mukaan, mitä hyllyssä sattuu olemaan.",
      },
      {
        title: "Shaft",
        body: "Puhdistus ja suoruuden tarkistus onnistuvat puussa ja hiilikuidussa. Puun pinnan saan takaisin sellaiseksi, ettei kädessä takerra. Hiilikuidun pintaan en voi vaikuttaa. Ei kikkailua eikä turhia töitä: vain se, mikä pitää korjata, ja perustelut, miksi.",
      },
    ],
  },
  gameonPage: {
    intro:
      "Pelipaita voidaan tehdä yhdelle pelaajalle tai koko joukkueelle omaksi. Kangas on Dry Techiä: se venyy moneen suuntaan ja tuntuu pelissä poikkeuksellisen miellyttävältä. Joukkueessakin jokainen paita voi olla oma kustominsa, logot mukaan lukien. Lopussa on yksi hinta, eikä yllätyksiä tule.",
    items: [
      {
        title: "Tilaus",
        body: "Lomakkeelle riittää koko, määrä ja se, kenelle paidat tulevat. Palaan tarjouksella, jossa on hinta ja toimitusaika. Koot ja saatavuus vaihtuvat, joten niitä ei pidetä sivulla ajan tasalla.",
      },
    ],
  },
  sponsorPage: {
    intro:
      "Yhteistyö kanssani on näkyvyyttä kisoista: kiertue, treenit, some ja pelipaidat. Valmista pakettia ei ole, koska homma rakennetaan tavoitteesta. Kerro, mitä haluat ja mitä sinulla on tarjota. Sitten ehdotan, miltä se näyttää.",
    partnersLabel: "Nykyiset kumppanit",
    credit: "Kuva: T. Tainio",
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
    credit: "Kuva: Juha Pekkarinen",
    p1: "Aloitin biljardin 16-vuotiaana. Olen ollut maalivahti, voittanut cheerleadingin Euroopan mestaruuden Funky Team Gorillazin kanssa ja skeittikilpailuja.",
    p2: "Syntynyt Helsingissä 1987. Poolammattilainen vuodesta 2013. Pelilajeina 8-pallo, 9-pallo, 10-pallo ja Straight pool. Monesta lajista ja huippu-urheilusta kertynyt tietämys näkyy siinä, miten nopeasti toisen pelaajan virhe löytyy ja miltä peli näyttää paineessa. Lempinimeni on Siego. Jos kuulet sen joskus, se olen minä.",
    p3: "Kilpailen Euroopan kiertueella ja WNT:llä, ja tietysti Suomessa. Matkaan on kertynyt yli 20 SM-mitalia. Valmennuksessa sama kokonaisuus on joka kausi itse koetuksella: peli, henkinen puoli ja se, mitä muut lajit ovat opettaneet.",
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
    { year: "75+", text: "Podium-sijaa" },
    { year: "2021", text: "Euroopan mestaruus (joukkue). Biljardi." },
    { year: "2018", text: "8-pallon Suomen mestari" },
    { year: "2025", text: "10-pallon SM-hopea" },
    { year: "2015, 2018", text: "Pari-SM-kultaa" },
    { year: "2015", text: "Ensimmäisen Finnish Pool Tour -osakilpailun voittaja" },
    { year: "2023", text: "Amerikan 14.1-turnauksessa 4. sija." },
  ],
  faqLabel: "Hyvä tietää",
  faqTitle: "Ennen ensimmäistä\nlyöntiä",
  faqIntro:
    "Selvitetään ensin lähtötasosi. Paikka ja sisältö sovitaan sen mukaan, eikä mitään tarvitse osata etukäteen. Jos kysymystäsi ei ole listalla, kysy lomakkeella.",
  faq: [
    {
      q: "Onko tämä poolia vai biljardia?",
      a: "Eri biljardipelejä on useita. Kaikki pelit toimivat kuitenkin samojen fysiikan lakien alaisuudessa. Oli pelissä sitten pool tai snooker, pystyn antamaan apuja tekniikkaan, tähtäykseen ja muille pelin osa-alueille.",
    },
    {
      q: "Missä valmennus on?",
      a: "Pääkaupunkiseudulla missä vain, muualla Suomessa sopimuksen mukaan. Pelataan sinulle tutussa biljardisalissa tai etsitään sopiva pöytä.",
    },
    {
      q: "Mitä yksityistunti on?",
      a: "Yksi pelaaja, yksi pöytä, koko sessio sinua varten. Selvitetään ensin lähtötasosi ja käydään perusteellisesti läpi, mistä peli koostuu. Saat kattavan kokonaisuuden juuri sinun tarpeisiisi.",
    },
    {
      q: "Voiko tulla aloittelijana?",
      a: "Kyllä. Aloittelijana ei ole hätää, eikä mitään tarvitse osata etukäteen. Selvitetään lähtötaso ja rakennetaan sessio siitä.",
    },
    {
      q: "Entä yritystapahtuma?",
      a: "Onnistuu. Ohjelma rakennetaan ryhmän koon ja illan keston mukaan niin, että myös ensikertalaiset pelaavat. Paikka voi olla teidän. Jos pöytiä ei ole, etsitään sopiva biljardisali yhdessä.",
    },
    {
      q: "Mitä tilaisuus maksaa?",
      a: "Hinta muodostuu paikan, keston ja ryhmäkoon mukaan, joten teen aina tarjouksen erikseen. Jos paikkaa ei ole vielä mielessä, voin suositella sopivia biljardisaleja, ja saat kokonaiskustannuksen saman tien.",
    },
    {
      q: "Onko videoanalyysi etänä?",
      a: "Kyllä. Kuvaat lyöntejäsi puhelimella ja lähetät klipit. Palautan korjaukset ja harjoitteet tärkeysjärjestyksessä. Toimii hyvin myös pääkaupunkiseudun ulkopuolella.",
    },
    {
      q: "Voiko sponsoroinnista puhua?",
      a: "Kyllä. Yritys, yksityishenkilö tai kuka tahansa voi lähteä tukemaan. Näkyvyyttä saa kiertueella, somessa ja pelipaidassa. Yhteistyökuvio sovitaan yhdessä sen mukaan, mitä haetaan. Kerro lomakkeella, niin palaan ehdotuksella.",
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
    show: "Jani Siekkinen tähtää biljardisalissa, useita pöytiä taustalla",
    cue: "Kärki muotoillaan Mezz Cue Magic -työkalulla",
    jersey: "Jani Siekkinen Suomen pelipaidassa Belgian Openissa",
    tour: "Jani Siekkinen, Mezz-logo ja nimi pelipaidan selässä",
    portrait: "Jani Siekkinen pöydän ääressä, pokaali nurkassa",
    hall: "Jani Siekkinen tähtää pöydän yli biljardisalissa",
    sponsor: "Jani Siekkinen tähtää pelipaidassa biljardipöydän yli",
  },
} as const;
