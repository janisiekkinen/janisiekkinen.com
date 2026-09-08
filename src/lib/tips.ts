import type { Locale } from "../config/site";

export type Tip = {
  locale: Locale;
  slug: string;
  counterpart: string;
  title: string;
  description: string;
  paragraphs: string[];
};

export const tips: Tip[] = [
  {
    locale: "fi",
    slug: "breakin-rytmi",
    counterpart: "break-rhythm",
    title: "Breakin rytmi",
    description: "Kasa ei aukea voimasta. Se aukeaa siitä, että valkoinen lähtee samalla tavalla joka kerta.",
    paragraphs: [
      "Kasa ei aukea siksi, että lyöt kovaa. Se aukeaa siksi, että valkoinen lähtee samalla korkeudella ja samalla tahdilla.",
      "Ota asento valmiiksi ennen kuin ajattelet voimaa. Jos hartiat nousevat juuri ennen kontaktia, kasa hajoaa sivulle. Pidä lyönti lyhyenä ja toista sama rutiini joka rackissa, myös silloin kun peli on jo auki.",
    ],
  },
  {
    locale: "en",
    slug: "break-rhythm",
    counterpart: "breakin-rytmi",
    title: "Break rhythm",
    description: "The rack does not open from power. It opens when the cue ball leaves the same way every time.",
    paragraphs: [
      "The rack does not open because you hit hard. It opens because the cue ball leaves at the same height and the same tempo.",
      "Set before you think about power. If the shoulders lift just before contact, the rack sprays. Keep the stroke short. Same routine every rack, even when the table is already open.",
    ],
  },
  {
    locale: "fi",
    slug: "8-pallon-paatos",
    counterpart: "eight-ball-decision",
    title: "8-pallon päätös",
    description: "Kahdeksikko ei ole erillinen lyönti. Se on se, mitä jätit edellisellä.",
    paragraphs: [
      "Kahdeksikkoa ei pelata viimeisenä lyöntinä. Se pelataan siinä, mihin jätät valkoisen kun pöydällä on vielä omaa palloa.",
      "Jos et tiedä mihin kahdeksikko menee, älä tyhjennä viimeistä omaa “siistiin”. Jätä itsellesi kulma. Paineessa valitaan se pussi jota on treenattu, ei se joka näyttää hienolta.",
    ],
  },
  {
    locale: "en",
    slug: "eight-ball-decision",
    counterpart: "8-pallon-paatos",
    title: "The 8-ball decision",
    description: "The eight is not a separate shot. It is what you left on the shot before.",
    paragraphs: [
      "You do not play the eight on the last stroke. You play it with where you leave the cue ball while you still have a ball of your own.",
      "If you do not know the eight’s pocket, do not tidy the last colour into a dead stop. Leave yourself an angle. Under pressure you take the pocket you have drilled, not the one that looks clever.",
    ],
  },
  {
    locale: "fi",
    slug: "videoanalyysin-klipit",
    counterpart: "video-analysis-clips",
    title: "Videoanalyysin klipit",
    description: "Kolme lyöntiä sivusta, ei koontivideota. Muuten korjaus jää arvailuksi.",
    paragraphs: [
      "Älä lähetä koontivideota. Lähetä kolme lyöntiä: break, pitkä suora, ja se lyönti joka kaatuu aina.",
      "Kuva sivusta, kepin tasolta. Näkyviin ote, kyynärpää ja valkoisen lähtö. Kymmenen sekuntia per klippi riittää. Sitten voin sanoa mitä muutetaan, eikä vain miltä se “näyttää”.",
    ],
  },
  {
    locale: "en",
    slug: "video-analysis-clips",
    counterpart: "videoanalyysin-klipit",
    title: "Clips for video analysis",
    description: "Three shots from the side, not a highlight reel. Otherwise the note is a guess.",
    paragraphs: [
      "Do not send a montage. Send three shots: the break, a long straight, and the one that always dies.",
      "Film from the side, cue height. Grip, elbow and cue-ball departure in frame. Ten seconds per clip is enough. Then I can say what to change, not how it “looks”.",
    ],
  },
];

export function tipsFor(locale: Locale) {
  return tips.filter((t) => t.locale === locale).sort((a, b) => a.title.localeCompare(b.title, locale));
}

export function tipBySlug(locale: Locale, slug: string) {
  return tips.find((t) => t.locale === locale && t.slug === slug);
}
