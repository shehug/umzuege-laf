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
  name: "Umzüge LAF Landshut",
  brand: "Umzüge LAF",
  owner: "Fahri Kalludra",
  address: "Ergoldinger Str. 15, 84030 Landshut",
  street: "Ergoldinger Str. 15",
  zip: "84030",
  city: "Landshut",
  country: "DE",
  phone: "+49 162 9007565",
  phoneDisplay: "0162 900 75 65",
  phoneHref: "tel:+491629007565",
  email: "info@umzuege-laf.de",
  url: "https://umzuegelandshut.de",
  openingHours: "Mo–Fr 08:00–18:00 Uhr, Sa 09:00–17:00 Uhr, So geschlossen",
  openingHoursShort: "Mo–Fr: 08:00–18:00 Uhr | Sa: 09:00–17:00 Uhr",
  priceRange: "€€",
  foundingYear: "2021",
  geo: {
    latitude: 48.5674,
    longitude: 12.1604,
  },
  sameAs: [
    "https://maps.google.com/?q=Ergoldinger+Str.+15,+84030+Landshut",
    "https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF,+Ergoldinger+Str.+15,+84030+Landshut",
    "https://www.facebook.com/61561388244118/",
    "https://www.gelbeseiten.de/gsbiz/aece8f96-e961-4a60-b646-a30f2f40f9af",
    "https://www.dasoertliche.de/Themen/LAF-Umz%C3%BCge-Landshut-Industriegebiet-Ergoldinger-Str",
    "https://www.11880.com/branchenbuch/landshut-isar/060441364B113012317/laf-umzuege-kurierdienst.html",
    "https://www.cylex.de/firma-home/umzuege-laf-16102146.html",
  ],
};

export default company;
