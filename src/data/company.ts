export interface CompanyData {
  name: string;
  brand: string;
  owner: string;
  address: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  url: string;
  openingHours: string;
  openingHoursShort: string;
  priceRange: string;
  foundingYear: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  sameAs: string[];
}

export const company: CompanyData = {
  name: "Umzüge LAF",
  brand: "Umzüge LAF",
  owner: "Fahri Kalludra",
  address: "Ergoldinger Straße 15, 84030 Landshut",
  street: "Ergoldinger Straße 15",
  zip: "84030",
  city: "Landshut",
  country: "DE",
  phone: "+49 162 9007565",
  phoneDisplay: "0162 900 75 65",
  phoneHref: "tel:+491629007565",
  email: "info@umzuege-laf.de",
  url: "https://umzuegelandshut.de",
  openingHours: "Mo–Fr 08:00–18:00 Uhr, Sa 09:00–17:00 Uhr",
  openingHoursShort: "Mo–Fr 08:00–18:00 Uhr, Sa 09:00–17:00 Uhr",
  priceRange: "€€",
  foundingYear: "2021",
  geo: {
    latitude: 48.5674,
    longitude: 12.1604,
  },
  sameAs: [
    "https://maps.google.com/?q=Ergoldinger+Stra%C3%9Fe+15,+84030+Landshut",
    "https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF,+Ergoldinger+Stra%C3%9Fe+15,+84030+Landshut",
    "https://www.facebook.com/61561388244118/",
    "https://www.provenexpert.com/de-de/umzuege-laf-landshut/",
    "https://adresse.dastelefonbuch.de/Landshut/1-M%C3%B6beltransporte-LAF-Umz%C3%BCge-Landshut-Ergoldinger-Str.html",
    "https://www.gelbeseiten.de/gsbiz/aece8f96-e961-4a60-b646-a30f2f40f9af",
    "https://www.dasoertliche.de/Themen/LAF-Umz%C3%BCge-Landshut-Industriegebiet-Ergoldinger-Str",
    "https://www.11880.com/branchenbuch/landshut-isar/060441364B113012317/laf-umzuege-kurierdienst.html",
    "https://www.cylex.de/firma-home/umzuege-laf-16102146.html",
    "https://lokal.expert/umzuge-laf",
    "https://brancheonline.de/eintrag/umzuege-laf-landshut",
    "https://www.werkenntdenbesten.de/e/113012317/entsorgung/landshut-isar/laf-umzuege-kurierdienst-bewertungen.html",
    "https://www.firmenindex-deutschland.de/Umzuege-LAF_fa17e2aee0c56f0b2e35d8fa925f8788.html",
    "https://deutschland-informiert.de/webkatalog.php?id=744",
    "https://awl-zentrum.de/umzug-landshut/",
    "https://www.brancheplus.de/eintrag/umzuege-laf-84030-landshut/",
    "https://www.reinigung-landshut.de/",
    "https://entruempelungen-laf.de/",
    "https://enterbit-web.de/",
  ],
};

export default company;
