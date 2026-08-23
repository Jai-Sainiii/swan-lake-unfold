export const couple = {
  bride: "Ananya",
  brideFull: "Ananya Kapoor",
  groom: "Rohan",
  groomFull: "Rohan Sharma",
  monogram: "A & R",
  hashtag: "#RohanKiAnanya",
  dateISO: "2026-12-12T16:00:00+05:30",
  dateLabel: "Saturday, 12 December 2026",
  city: "Udaipur, Rajasthan",
  tagline: "Two souls, one celebration — beside the serene waters of Lake Pichola.",
  venue: "The Lake Pavilion & Palace",
};

export const acts = [
  {
    act: "Act I",
    title: "The First Glance",
    year: "Autumn 2019",
    place: "Mumbai & Udaipur",
    text: "A rainy evening by the Arabian sea, a serendipitous meeting, and a conversation that effortlessly turned strangers into kindred souls.",
  },
  {
    act: "Act II",
    title: "The Melody Across Waters",
    year: "Spring 2021",
    place: "Across Cities",
    text: "Two journeys, a thousand shared songs and late-night calls, realizing with every passing season that home was in each other's laughter.",
  },
  {
    act: "Act III",
    title: "The Sunrise Promise",
    year: "Winter 2024",
    place: "Lake Pichola at Dawn",
    text: "By a quiet mist-kissed lake at sunrise, surrounded by floating lotus petals, a sacred question asked softly and answered with tears of joy.",
  },
  {
    act: "Act IV",
    title: "The Forever Symphony",
    year: "December 2026",
    place: "The Lake Palace, Udaipur",
    text: "Surrounded by our beloved families, under the royal Rajasthani skies, we unite our worlds in timeless harmony.",
  },
];

export const families = [
  {
    side: "The Bride's Family",
    parents: "Mr. Rajesh & Mrs. Sunita Kapoor",
    line: "cordially invite you to celebrate the wedding of their beloved daughter",
    name: "Ananya Kapoor",
    grandparents: "Granddaughter of Late Mr. Ramesh & Mrs. Kanta Kapoor and Late Mr. Omprakash & Mrs. Pushpa Mehra",
    blessing: "“May your love glide gracefully through every season of life.”",
  },
  {
    side: "The Groom's Family",
    parents: "Mr. Arun & Mrs. Kavita Sharma",
    line: "with immense joy invite you to the auspicious wedding of their cherished son",
    name: "Rohan Sharma",
    grandparents: "Grandson of Late Mr. Omprakash & Mrs. Shanti Sharma and Late Mr. Harish & Mrs. Vimla Mehra",
    blessing: "“Together may you build a kingdom of warmth, laughter, and endless devotion.”",
  },
];

export interface CeremonyItem {
  id: string;
  numeral: string;
  name: string;
  subtitle: string;
  date: string;
  dateISO: string;
  time: string;
  place: string;
  dressCode: string;
  dressCodeColors: { name: string; hex: string }[];
  detail: string;
  icon: string;
  dressCodeDetail?: string;
}

export const ceremonies: CeremonyItem[] = [
  {
    id: "haldi-mehendi",
    numeral: "I",
    name: "The Marigold Mehndi & Haldi",
    subtitle: "A splash of saffron, henna art & afternoon folk melodies",
    date: "Thursday, 10 December 2026",
    dateISO: "2026-12-10T15:00:00+05:30",
    time: "3:30 PM onwards",
    place: "The Lotus Courtyard Gardens",
    dressCode: "Pastel Sunshine, Marigold Yellow & Mint Green",
    dressCodeColors: [
      { name: "Marigold", hex: "#f59e0b" },
      { name: "Pastel Yellow", hex: "#fef08a" },
      { name: "Mint Sage", hex: "#6ee7b7" },
      { name: "Ivory", hex: "#faf5ef" },
    ],
    detail:
      "An afternoon filled with fragrant henna swirls, live dhol beats, Rajasthani folk dancers, and cooling lake breezes. Refreshments and traditional delicacies will be served.",
    icon: "🌿",
    dressCodeDetail: "Kurta pyjamas, playful lehengas & vibrant ethnic prints",
  },
  {
    id: "sangeet",
    numeral: "II",
    name: "The Royal Sangeet & Musical Soirée",
    subtitle: "An evening of choreographed dances, palace lights & celebratory waltzes",
    date: "Friday, 11 December 2026",
    dateISO: "2026-12-11T19:00:00+05:30",
    time: "7:00 PM onwards",
    place: "The Grand Chandelier Ballroom & Lake Terrace",
    dressCode: "Glamorous Royal Navy, Velvet Emerald & Shimmering Gold",
    dressCodeColors: [
      { name: "Midnight Navy", hex: "#0f172a" },
      { name: "Emerald", hex: "#065f46" },
      { name: "Glimmer Gold", hex: "#d4af37" },
      { name: "Silver Zari", hex: "#e2e8f0" },
    ],
    detail:
      "Family performances, musical harmonies over the lake waters, cocktails, signature Rajasthani appetizers, and dancing under the crystal chandeliers.",
    icon: "✨",
    dressCodeDetail: "Indo-western tuxedos, mirror-work lehengas & sequined gowns",
  },
  {
    id: "wedding",
    numeral: "III",
    name: "The Sacred Vows & Pheras",
    subtitle: "The sunset Vedic ceremony beside the sacred waters of Lake Pichola",
    date: "Saturday, 12 December 2026",
    dateISO: "2026-12-12T16:00:00+05:30",
    time: "4:00 PM onwards (Baraat at 4:30 PM, Pheras at Sunset)",
    place: "The Floating Marble Mandap",
    dressCode: "Regal Ivory, Powder Blush, Dusty Rose & Gold Zari",
    dressCodeColors: [
      { name: "Ivory Gold", hex: "#fef3c7" },
      { name: "Dusty Rose", hex: "#f43f5e" },
      { name: "Powder Blush", hex: "#fed7aa" },
      { name: "Sandalwood", hex: "#d97706" },
    ],
    detail:
      "The arrival of the Baraat across the lake, exchanging varmalas surrounded by floating lotus lamps, chanting sacred mantras by sunset, and seven vows for a lifetime.",
    icon: "🕊️",
    dressCodeDetail: "Heritage Sherwanis with Safas, Banarasi/Kanjivaram Silk Sarees & Royal Lehengas",
  },
  {
    id: "reception",
    numeral: "IV",
    name: "The Grand Royal Reception Dinner",
    subtitle: "A lavish candlelit banquet celebrating the newly wedded couple",
    date: "Saturday, 12 December 2026",
    dateISO: "2026-12-12T20:00:00+05:30",
    time: "8:00 PM onwards",
    place: "The Palace Lakefront Promenade",
    dressCode: "Black Tie or Royal Indian Formals",
    dressCodeColors: [
      { name: "Classic Onyx", hex: "#020617" },
      { name: "Champagne", hex: "#fde68a" },
      { name: "Royal Gold", hex: "#d4af37" },
      { name: "Pearl White", hex: "#ffffff" },
    ],
    detail:
      "A banquet featuring royal Mewari and international gourmet delicacies, acoustic live instruments, celebratory toasts, and stargazing across Lake Pichola.",
    icon: "👑",
    dressCodeDetail: "Bandhgalas, tuxedos, embroidered evening wear & silk couture",
  },
];

export const venue = {
  name: "The Lake Pavilion & Palace",
  subname: "Taj Lake Palace & Jagmandir Island",
  address: "Pichola, Udaipur, Rajasthan 313001, India",
  city: "Udaipur",
  state: "Rajasthan",
  timing: "Boat transfers available continuously from Bansi Ghat jetty",
  mapUrl: "https://maps.google.com/?q=Taj+Lake+Palace+Udaipur",
  travelTips: [
    {
      title: "Nearest Airport",
      desc: "Maharana Pratap Airport (UDR) is ~40 mins scenic drive to the city jetty.",
    },
    {
      title: "Boat Jetty Transfers",
      desc: "Private royal shikara boats await guests at the Bansi Ghat Jetty throughout the celebrations.",
    },
    {
      title: "December Weather",
      desc: "Pleasantly sunny days (24°C / 75°F) with cool, romantic lake breezes in the evenings (12°C / 54°F). A light shawl or jacket is recommended.",
    },
  ],
};

export const blessingsSeed = [
  {
    message: "May your lives together be as serene, majestic, and graceful as the swans gliding on Lake Pichola.",
    author: "Grandma Kanta & Grandpa Ramesh",
    time: "2 hours ago",
  },
  {
    message: "Wishing dearest Ananya & Rohan a lifetime of laughter, grand adventures, and eternal companionship!",
    author: "Vikram & Tanvi Sharma",
    time: "4 hours ago",
  },
  {
    message: "Heartiest congratulations! We cannot wait to dance at the Sangeet and celebrate this magnificent union.",
    author: "The Verma Family",
    time: "Yesterday",
  },
  {
    message: "May God bless this wonderful pair with everlasting harmony, prosperity, and endless joy.",
    author: "Shashi & Sunita Mehra",
    time: "2 days ago",
  },
];
