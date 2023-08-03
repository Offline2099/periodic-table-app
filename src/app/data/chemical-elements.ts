import { ChemicalElement } from '../interfaces';

/**
 *  Data values used for convenience:
 * 
 *  • For all lanthanides, the group is set to -1.
 *  • For all actinides, the group is set to -2.
 *  • For elements known since ancient times, the year of discovery is set to 0.
 *  • If the melting or boiling temperature is unknown, it is set to -274.
 *  
 **/

const NoImageReasons: string[] = [
  'A sample of the pure element has never been assembled. Any macroscopic specimen would be immediately vaporized by the heat of its radioactivity.',
  'Although theoretically possible, a sample of pure element has never been prepared yet.',
  'The element can only be produced in particle accelerators.'
];

export const Elements: ChemicalElement[] = [
  {
    number: 1,
    symbol: 'H',
    name: 'Hydrogen',
    group: 1,
    period: 1,
    weight: 1.008,
    density: 0.0898,
    melt: -258.99,
    boil: -252.72,
    discovery: 1776
  },
  {
    number: 2,
    symbol: 'He',
    name: 'Helium',
    group: 18,
    period: 1,
    weight: 4.0026,
    density: 0.1785,
    melt: -273.15,
    boil: -268.78,
    discovery: 1895
  },
  {
    number: 3,
    symbol: 'Li',
    name: 'Lithium',
    group: 1,
    period: 2,
    weight: 6.94,
    density: 534,
    melt: 181,
    boil: 1342,
    discovery: 1817
  },
  {
    number: 4,
    symbol: 'Be',
    name: 'Beryllium',
    group: 2,
    period: 2,
    weight: 9.0122,
    density: 1850,
    melt: 1287,
    boil: 2469,
    discovery: 1797
  },
  {
    number: 5,
    symbol: 'B',
    name: 'Boron',
    group: 13,
    period: 2,
    weight: 10.81,
    density: 2340,
    melt: 2076,
    boil: 3927,
    discovery: 1808
  },
  {
    number: 6,
    symbol: 'C',
    name: 'Carbon',
    group: 14,
    period: 2,
    weight: 12.011,
    density: 2267,
    melt: 3227,
    boil: 4027,
    discovery: 1694
  },
  {
    number: 7,
    symbol: 'N',
    name: 'Nitrogen',
    group: 15,
    period: 2,
    weight: 14.007,
    density: 1.2506,
    melt: -209.85,
    boil: -195.64,
    discovery: 1772
  },
  {
    number: 8,
    symbol: 'O',
    name: 'Oxygen',
    group: 16,
    period: 2,
    weight: 15.999,
    density: 1.429,
    melt: -218.6,
    boil: -182.8,
    discovery: 1774
  },
  {
    number: 9,
    symbol: 'F',
    name: 'Fluorine',
    group: 17,
    period: 2,
    weight: 18.998,
    density: 1.696,
    melt: -219.47,
    boil: -187.97,
    discovery: 1886
  },
  {
    number: 10,
    symbol: 'Ne',
    name: 'Neon',
    group: 18,
    period: 2,
    weight: 20.18,
    density: 0.9002,
    melt: -248.44,
    boil: -245.93,
    discovery: 1898
  },
  {
    number: 11,
    symbol: 'Na',
    name: 'Sodium',
    group: 1,
    period: 3,
    weight: 22.99,
    density: 968,
    melt: 98,
    boil: 883,
    discovery: 1807
  },
  {
    number: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    group: 2,
    period: 3,
    weight: 24.305,
    density: 1738,
    melt: 650,
    boil: 1090,
    discovery: 1755
  },
  {
    number: 13,
    symbol: 'Al',
    name: 'Aluminium',
    group: 13,
    period: 3,
    weight: 26.982,
    density: 2700,
    melt: 660,
    boil: 2519,
    discovery: 1825
  },
  {
    number: 14,
    symbol: 'Si',
    name: 'Silicon',
    group: 14,
    period: 3,
    weight: 28.085,
    density: 2329,
    melt: 1414,
    boil: 3265,
    discovery: 1824
  },
  {
    number: 15,
    symbol: 'P',
    name: 'Phosphorus',
    group: 15,
    period: 3,
    weight: 30.974,
    density: 1823,
    melt: 44,
    boil: 277,
    discovery: 1669
  },
  {
    number: 16,
    symbol: 'S',
    name: 'Sulfur',
    group: 16,
    period: 3,
    weight: 32.06,
    density: 2070,
    melt: 115,
    boil: 445,
    discovery: 0
  },
  {
    number: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    group: 17,
    period: 3,
    weight: 35.45,
    density: 3.2,
    melt: -101.4,
    boil: -33.9,
    discovery: 1774
  },
  {
    number: 18,
    symbol: 'Ar',
    name: 'Argon',
    group: 18,
    period: 3,
    weight: 39.95,
    density: 1.784,
    melt: -189.2,
    boil: -185.7,
    discovery: 1894
  },
  {
    number: 19,
    symbol: 'K',
    name: 'Potassium',
    group: 1,
    period: 4,
    weight: 39.098,
    density: 890,
    melt: 63.5,
    boil: 759,
    discovery: 1807
  },
  {
    number: 20,
    symbol: 'Ca',
    name: 'Calcium',
    group: 2,
    period: 4,
    weight: 40.078,
    density: 1550,
    melt: 842,
    boil: 1484,
    discovery: 1879
  },
  {
    number: 21,
    symbol: 'Sc',
    name: 'Scandium',
    group: 3,
    period: 4,
    weight: 44.956,
    density: 2985,
    melt: 1541,
    boil: 2836,
    discovery: 1791
  },
  {
    number: 22,
    symbol: 'Ti',
    name: 'Titanium',
    group: 4,
    period: 4,
    weight: 47.867,
    density: 4506,
    melt: 1668,
    boil: 3287,
    discovery: 1830
  },
  {
    number: 23,
    symbol: 'V',
    name: 'Vanadium',
    group: 5,
    period: 4,
    weight: 50.942,
    density: 6110,
    melt: 1910,
    boil: 3407,
    discovery: 1797
  },
  {
    number: 24,
    symbol: 'Cr',
    name: 'Chromium',
    group: 6,
    period: 4,
    weight: 51.996,
    density: 7150,
    melt: 1907,
    boil: 2671,
    discovery: 1774
  },
  {
    number: 25,
    symbol: 'Mn',
    name: 'Manganese',
    group: 7,
    period: 4,
    weight: 54.938,
    density: 7210,
    melt: 1246,
    boil: 2061,
    discovery: 1774
  },
  {
    number: 26,
    symbol: 'Fe',
    name: 'Iron',
    group: 8,
    period: 4,
    weight: 55.845,
    density: 7874,
    melt: 1538,
    boil: 2861,
    discovery: 1735
  },
  {
    number: 27,
    symbol: 'Co',
    name: 'Cobalt',
    group: 9,
    period: 4,
    weight: 58.933,
    density: 8900,
    melt: 1495,
    boil: 2927,
    discovery: 1751
  },
  {
    number: 28,
    symbol: 'Ni',
    name: 'Nickel',
    group: 10,
    period: 4,
    weight: 58.693,
    density: 8908,
    melt: 1455,
    boil: 2913,
    discovery: 1751
  },
  {
    number: 29,
    symbol: 'Cu',
    name: 'Copper',
    group: 11,
    period: 4,
    weight: 63.546,
    density: 8960,
    melt: 1085,
    boil: 2562,
    discovery: 0
  },
  {
    number: 30,
    symbol: 'Zn',
    name: 'Zinc',
    group: 12,
    period: 4,
    weight: 65.38,
    density: 7140,
    melt: 420,
    boil: 907,
    discovery: 1746
  },
  {
    number: 31,
    symbol: 'Ga',
    name: 'Gallium',
    group: 13,
    period: 4,
    weight: 69.723,
    density: 5910,
    melt: 29.9,
    boil: 2400,
    discovery: 1886
  },
  {
    number: 32,
    symbol: 'Ge',
    name: 'Germanium',
    group: 14,
    period: 4,
    weight: 72.63,
    density: 5323,
    melt: 938,
    boil: 2833,
    discovery: 1886
  },
  {
    number: 33,
    symbol: 'As',
    name: 'Arsenic',
    group: 15,
    period: 4,
    weight: 74.922,
    density: 5727,
    melt: 817,
    boil: 614,
    discovery: 1817
  },
  {
    number: 34,
    symbol: 'Se',
    name: 'Selenium',
    group: 16,
    period: 4,
    weight: 78.971,
    density: 4810,
    melt: 180,
    boil: 685,
    discovery: 1826
  },
  {
    number: 35,
    symbol: 'Br',
    name: 'Bromine',
    group: 17,
    period: 4,
    weight: 79.904,
    density: 3103,
    melt: -7.2,
    boil: 59,
    discovery: 1825
  },
  {
    number: 36,
    symbol: 'Kr',
    name: 'Krypton',
    group: 18,
    period: 4,
    weight: 83.798,
    density: 3.749,
    melt: -157.21,
    boil: -153.07,
    discovery: 1898
  },
  {
    number: 37,
    symbol: 'Rb',
    name: 'Rubidium',
    group: 1,
    period: 5,
    weight: 85.468,
    density: 1532,
    melt: 39.5,
    boil: 688,
    discovery: 1861
  },
  {
    number: 38,
    symbol: 'Sr',
    name: 'Strontium',
    group: 2,
    period: 5,
    weight: 87.62,
    density: 2640,
    melt: 777,
    boil: 1382,
    discovery: 1790
  },
  {
    number: 39,
    symbol: 'Y',
    name: 'Yttrium',
    group: 3,
    period: 5,
    weight: 88.906,
    density: 4472,
    melt: 1526,
    boil: 3336,
    discovery: 1794
  },
  {
    number: 40,
    symbol: 'Zr',
    name: 'Zirconium',
    group: 4,
    period: 5,
    weight: 91.224,
    density: 6520,
    melt: 1855,
    boil: 4409,
    discovery: 1789
  },
  {
    number: 41,
    symbol: 'Nb',
    name: 'Niobium',
    group: 5,
    period: 5,
    weight: 92.906,
    density: 8570,
    melt: 2477,
    boil: 4744,
    discovery: 1801
  },
  {
    number: 42,
    symbol: 'Mo',
    name: 'Molybdenum',
    group: 6,
    period: 5,
    weight: 95.95,
    density: 10280,
    melt: 2623,
    boil: 4639,
    discovery: 1781
  },
  {
    number: 43,
    symbol: 'Tc',
    name: 'Technetium',
    group: 7,
    period: 5,
    weight: 97,
    density: 11000,
    melt: 2157,
    boil: 4265,
    discovery: 1937
  },
  {
    number: 44,
    symbol: 'Ru',
    name: 'Ruthenium',
    group: 8,
    period: 5,
    weight: 101.07,
    density: 12450,
    melt: 2334,
    boil: 4150,
    discovery: 1844
  },
  {
    number: 45,
    symbol: 'Rh',
    name: 'Rhodium',
    group: 9,
    period: 5,
    weight: 102.91,
    density: 12410,
    melt: 1964,
    boil: 3695,
    discovery: 1803
  },
  {
    number: 46,
    symbol: 'Pd',
    name: 'Palladium',
    group: 10,
    period: 5,
    weight: 106.42,
    density: 12023,
    melt: 1555,
    boil: 2963,
    discovery: 1803
  },
  {
    number: 47,
    symbol: 'Ag',
    name: 'Silver',
    group: 11,
    period: 5,
    weight: 107.87,
    density: 10490,
    melt: 962,
    boil: 2162,
    discovery: 0
  },
  {
    number: 48,
    symbol: 'Cd',
    name: 'Cadmium',
    group: 12,
    period: 5,
    weight: 112.41,
    density: 8650,
    melt: 321,
    boil: 767,
    discovery: 1817
  },
  {
    number: 49,
    symbol: 'In',
    name: 'Indium',
    group: 13,
    period: 5,
    weight: 114.82,
    density: 7310,
    melt: 157,
    boil: 2072,
    discovery: 1863
  },
  {
    number: 50,
    symbol: 'Sn',
    name: 'Tin',
    group: 14,
    period: 5,
    weight: 118.71,
    density: 7265,
    melt: 232,
    boil: 2602,
    discovery: 0
  },
  {
    number: 51,
    symbol: 'Sb',
    name: 'Antimony',
    group: 15,
    period: 5,
    weight: 121.76,
    density: 6697,
    melt: 631,
    boil: 1587,
    discovery: 0
  },
  {
    number: 52,
    symbol: 'Te',
    name: 'Tellurium',
    group: 16,
    period: 5,
    weight: 127.6,
    density: 6240,
    melt: 450,
    boil: 988,
    discovery: 1782
  },
  {
    number: 53,
    symbol: 'I',
    name: 'Iodine',
    group: 17,
    period: 5,
    weight: 126.9,
    density: 4933,
    melt: 113.8,
    boil: 184.4,
    discovery: 1811
  },
  {
    number: 54,
    symbol: 'Xe',
    name: 'Xenon',
    group: 18,
    period: 5,
    weight: 131.29,
    density: 5.894,
    melt: -111.6,
    boil: -107.9,
    discovery: 1898
  },
  {
    number: 55,
    symbol: 'Cs',
    name: 'Caesium',
    group: 1,
    period: 6,
    weight: 132.91,
    density: 1930,
    melt: 28.6,
    boil: 671,
    discovery: 1860
  },
  {
    number: 56,
    symbol: 'Ba',
    name: 'Barium',
    group: 2,
    period: 6,
    weight: 137.33,
    density: 3510,
    melt: 727,
    boil: 1897,
    discovery: 1808
  },
  {
    number: 57,
    symbol: 'La',
    name: 'Lanthanum',
    group: -1,
    period: 6,
    weight: 138.91,
    density: 6162,
    melt: 920,
    boil: 3464,
    discovery: 1839
  },
  {
    number: 58,
    symbol: 'Ce',
    name: 'Cerium',
    group: -1,
    period: 6,
    weight: 140.12,
    density: 6770,
    melt: 795,
    boil: 3443,
    discovery: 1803
  },
  {
    number: 59,
    symbol: 'Pr',
    name: 'Praseodymium',
    group: -1,
    period: 6,
    weight: 140.91,
    density: 6770,
    melt: 935,
    boil: 3520,
    discovery: 1885
  },
  {
    number: 60,
    symbol: 'Nd',
    name: 'Neodymium',
    group: -1,
    period: 6,
    weight: 144.24,
    density: 7010,
    melt: 1024,
    boil: 3074,
    discovery: 1885
  },
  {
    number: 61,
    symbol: 'Pm',
    name: 'Promethium',
    group: -1,
    period: 6,
    weight: 145,
    density: 7260,
    melt: 1042,
    boil: 3000,
    discovery: 1945
  },
  {
    number: 62,
    symbol: 'Sm',
    name: 'Samarium',
    group: -1,
    period: 6,
    weight: 150.36,
    density: 7520,
    melt: 1072,
    boil: 1794,
    discovery: 1879
  },
  {
    number: 63,
    symbol: 'Eu',
    name: 'Europium',
    group: -1,
    period: 6,
    weight: 151.96,
    density: 5244,
    melt: 826,
    boil: 1529,
    discovery: 1901
  },
  {
    number: 64,
    symbol: 'Gd',
    name: 'Gadolinium',
    group: -1,
    period: 6,
    weight: 157.25,
    density: 7900,
    melt: 1312,
    boil: 3273,
    discovery: 1880
  },
  {
    number: 65,
    symbol: 'Tb',
    name: 'Terbium',
    group: -1,
    period: 6,
    weight: 158.93,
    density: 8230,
    melt: 1356,
    boil: 3230,
    discovery: 1843
  },
  {
    number: 66,
    symbol: 'Dy',
    name: 'Dysprosium',
    group: -1,
    period: 6,
    weight: 162.5,
    density: 8540,
    melt: 1407,
    boil: 2567,
    discovery: 1886
  },
  {
    number: 67,
    symbol: 'Ho',
    name: 'Holmium',
    group: -1,
    period: 6,
    weight: 164.93,
    density: 8790,
    melt: 1461,
    boil: 2720,
    discovery: 1867
  },
  {
    number: 68,
    symbol: 'Er',
    name: 'Erbium',
    group: -1,
    period: 6,
    weight: 167.26,
    density: 9066,
    melt: 1529,
    boil: 2868,
    discovery: 1842
  },
  {
    number: 69,
    symbol: 'Tm',
    name: 'Thulium',
    group: -1,
    period: 6,
    weight: 168.93,
    density: 9320,
    melt: 1545,
    boil: 1950,
    discovery: 1879
  },
  {
    number: 70,
    symbol: 'Yb',
    name: 'Ytterbium',
    group: -1,
    period: 6,
    weight: 173.05,
    density: 6900,
    melt: 824,
    boil: 1196,
    discovery: 1878
  },
  {
    number: 71,
    symbol: 'Lu',
    name: 'Lutetium',
    group: 3,
    period: 6,
    weight: 174.97,
    density: 9841,
    melt: 1652,
    boil: 3402,
    discovery: 1907
  },
  {
    number: 72,
    symbol: 'Hf',
    name: 'Hafnium',
    group: 4,
    period: 6,
    weight: 178.49,
    density: 13310,
    melt: 2233,
    boil: 4603,
    discovery: 1923
  },
  {
    number: 73,
    symbol: 'Ta',
    name: 'Tantalum',
    group: 5,
    period: 6,
    weight: 180.95,
    density: 16690,
    melt: 3017,
    boil: 5458,
    discovery: 1802
  },
  {
    number: 74,
    symbol: 'W',
    name: 'Tungsten',
    group: 6,
    period: 6,
    weight: 183.84,
    density: 19250,
    melt: 3422,
    boil: 5555,
    discovery: 1783
  },
  {
    number: 75,
    symbol: 'Re',
    name: 'Rhenium',
    group: 7,
    period: 6,
    weight: 186.21,
    density: 21020,
    melt: 3186,
    boil: 5596,
    discovery: 1925
  },
  {
    number: 76,
    symbol: 'Os',
    name: 'Osmium',
    group: 8,
    period: 6,
    weight: 190.23,
    density: 22590,
    melt: 3033,
    boil: 5012,
    discovery: 1803
  },
  {
    number: 77,
    symbol: 'Ir',
    name: 'Iridium',
    group: 9,
    period: 6,
    weight: 192.22,
    density: 22560,
    melt: 2446,
    boil: 4428,
    discovery: 1803
  },
  {
    number: 78,
    symbol: 'Pt',
    name: 'Platinum',
    group: 10,
    period: 6,
    weight: 195.08,
    density: 21450,
    melt: 1768,
    boil: 3825,
    discovery: 1735
  },
  {
    number: 79,
    symbol: 'Au',
    name: 'Gold',
    group: 11,
    period: 6,
    weight: 196.97,
    density: 19300,
    melt: 1064,
    boil: 2856,
    discovery: 0
  },
  {
    number: 80,
    symbol: 'Hg',
    name: 'Mercury',
    group: 12,
    period: 6,
    weight: 200.59,
    density: 13534,
    melt: -38.57,
    boil: 356.88,
    discovery: 0
  },
  {
    number: 81,
    symbol: 'Tl',
    name: 'Thallium',
    group: 13,
    period: 6,
    weight: 204.38,
    density: 11850,
    melt: 304,
    boil: 1473,
    discovery: 1861
  },
  {
    number: 82,
    symbol: 'Pb',
    name: 'Lead',
    group: 14,
    period: 6,
    weight: 207.2,
    density: 11340,
    melt: 328,
    boil: 1749,
    discovery: 0
  },
  {
    number: 83,
    symbol: 'Bi',
    name: 'Bismuth',
    group: 15,
    period: 6,
    weight: 208.98,
    density: 9780,
    melt: 272,
    boil: 1564,
    discovery: 1400
  },
  {
    number: 84,
    symbol: 'Po',
    name: 'Polonium',
    group: 16,
    period: 6,
    weight: 209,
    density: 9196,
    melt: 254,
    boil: 962,
    discovery: 1898
  },
  {
    number: 85,
    symbol: 'At',
    name: 'Astatine',
    group: 17,
    period: 6,
    weight: 210,
    density: 8930,
    melt: 302,
    boil: 337,
    discovery: 1940,
    noImage: true,
    noImageText: NoImageReasons[0]
  },
  {
    number: 86,
    symbol: 'Rn',
    name: 'Radon',
    group: 18,
    period: 6,
    weight: 222,
    density: 9.73,
    melt: -71.1,
    boil: -61.7,
    discovery: 1900
  },
  {
    number: 87,
    symbol: 'Fr',
    name: 'Francium',
    group: 1,
    period: 7,
    weight: 223,
    density: 2480,
    melt: 8,
    boil: 617,
    discovery: 1939,
    noImage: true,
    noImageText: NoImageReasons[0]
  },
  {
    number: 88,
    symbol: 'Ra',
    name: 'Radium',
    group: 2,
    period: 7,
    weight: 226,
    density: 5500,
    melt: 700,
    boil: 1737,
    discovery: 1898
  },
  {
    number: 89,
    symbol: 'Ac',
    name: 'Actinium',
    group: -2,
    period: 7,
    weight: 227,
    density: 10000,
    melt: 1050,
    boil: 3198,
    discovery: 1899
  },
  {
    number: 90,
    symbol: 'Th',
    name: 'Thorium',
    group: -2,
    period: 7,
    weight: 232.04,
    density: 11700,
    melt: 1842,
    boil: 4788,
    discovery: 1829
  },
  {
    number: 91,
    symbol: 'Pa',
    name: 'Protactinium',
    group: -2,
    period: 7,
    weight: 231.04,
    density: 15370,
    melt: 1568,
    boil: 4027,
    discovery: 1913
  },
  {
    number: 92,
    symbol: 'U',
    name: 'Uranium',
    group: -2,
    period: 7,
    weight: 238.03,
    density: 19100,
    melt: 1132,
    boil: 4131,
    discovery: 1789
  },
  {
    number: 93,
    symbol: 'Np',
    name: 'Neptunium',
    group: -2,
    period: 7,
    weight: 237,
    density: 20450,
    melt: 644,
    boil: 4000,
    discovery: 1940
  },
  {
    number: 94,
    symbol: 'Pu',
    name: 'Plutonium',
    group: -2,
    period: 7,
    weight: 244,
    density: 19850,
    melt: 639,
    boil: 3228,
    discovery: 1940
  },
  {
    number: 95,
    symbol: 'Am',
    name: 'Americium',
    group: -2,
    period: 7,
    weight: 243,
    density: 12000,
    melt: 1176,
    boil: 2607,
    discovery: 1944
  },
  {
    number: 96,
    symbol: 'Cm',
    name: 'Curium',
    group: -2,
    period: 7,
    weight: 247,
    density: 13510,
    melt: 1340,
    boil: 3110,
    discovery: 1944
  },
  {
    number: 97,
    symbol: 'Bk',
    name: 'Berkelium',
    group: -2,
    period: 7,
    weight: 247,
    density: 14780,
    melt: 986,
    boil: 2627,
    discovery: 1949
  },
  {
    number: 98,
    symbol: 'Cf',
    name: 'Californium',
    group: -2,
    period: 7,
    weight: 251,
    density: 15100,
    melt: 900,
    boil: 1470,
    discovery: 1950
  },
  {
    number: 99,
    symbol: 'Es',
    name: 'Einsteinium',
    group: -2,
    period: 7,
    weight: 252,
    density: 8840,
    melt: 860,
    boil: 996,
    discovery: 1952
  },
  {
    number: 100,
    symbol: 'Fm',
    name: 'Fermium',
    group: -2,
    period: 7,
    weight: 257,
    density: 9700,
    melt: 852,
    boil: -274,
    discovery: 1952,
    noImage: true,
    noImageText: NoImageReasons[1]
  },
  {
    number: 101,
    symbol: 'Md',
    name: 'Mendelevium',
    group: -2,
    period: 7,
    weight: 258,
    density: 10300,
    melt: 827,
    boil: -274,
    discovery: 1955,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 102,
    symbol: 'No',
    name: 'Nobelium',
    group: -2,
    period: 7,
    weight: 259,
    density: 9900,
    melt: 827,
    boil: -274,
    discovery: 1958,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 103,
    symbol: 'Lr',
    name: 'Lawrencium',
    group: 3,
    period: 7,
    weight: 266,
    density: 14400,
    melt: 1627,
    boil: -274,
    discovery: 1961,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 104,
    symbol: 'Rf',
    name: 'Rutherfordium',
    group: 4,
    period: 7,
    weight: 267,
    density: 17000,
    melt: 2127,
    boil: 5527,
    discovery: 1964,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 105,
    symbol: 'Db',
    name: 'Dubnium',
    group: 5,
    period: 7,
    weight: 268,
    density: 21600,
    melt: -274,
    boil: -274,
    discovery: 1967,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 106,
    symbol: 'Sg',
    name: 'Seaborgium',
    group: 6,
    period: 7,
    weight: 269,
    density: 23500,
    melt: -274,
    boil: -274,
    discovery: 1974,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 107,
    symbol: 'Bh',
    name: 'Bohrium',
    group: 7,
    period: 7,
    weight: 270,
    density: 26500,
    melt: -274,
    boil: -274,
    discovery: 1981,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 108,
    symbol: 'Hs',
    name: 'Hassium',
    group: 8,
    period: 7,
    weight: 269,
    density: 28000,
    melt: -274,
    boil: -274,
    discovery: 1984,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 109,
    symbol: 'Mt',
    name: 'Meitnerium',
    group: 9,
    period: 7,
    weight: 278,
    density: 27500,
    melt: -274,
    boil: -274,
    discovery: 1982,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 110,
    symbol: 'Ds',
    name: 'Darmstadtium',
    group: 10,
    period: 7,
    weight: 281,
    density: 26500,
    melt: -274,
    boil: -274,
    discovery: 1994,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 111,
    symbol: 'Rg',
    name: 'Roentgenium',
    group: 11,
    period: 7,
    weight: 282,
    density: 23000,
    melt: -274,
    boil: -274,
    discovery: 1994,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 112,
    symbol: 'Cn',
    name: 'Copernicium',
    group: 12,
    period: 7,
    weight: 285,
    density: 14000,
    melt: 10,
    boil: 67,
    discovery: 1996,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 113,
    symbol: 'Nh',
    name: 'Nihonium',
    group: 13,
    period: 7,
    weight: 286,
    density: 16000,
    melt: 427,
    boil: 1127,
    discovery: 1998,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 114,
    symbol: 'Fl',
    name: 'Flerovium',
    group: 14,
    period: 7,
    weight: 289,
    density: 11400,
    melt: 11,
    boil: -274,
    discovery: 1999,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 115,
    symbol: 'Mc',
    name: 'Moscovium',
    group: 15,
    period: 7,
    weight: 290,
    density: 13500,
    melt: 427,
    boil: 1127,
    discovery: 2004,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 116,
    symbol: 'Lv',
    name: 'Livermorium',
    group: 16,
    period: 7,
    weight: 293,
    density: 12900,
    melt: 427,
    boil: 827,
    discovery: 2000,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 117,
    symbol: 'Ts',
    name: 'Tennessine',
    group: 17,
    period: 7,
    weight: 294,
    density: 7200,
    melt: 427,
    boil: 610,
    discovery: 2010,
    noImage: true,
    noImageText: NoImageReasons[2]
  },
  {
    number: 118,
    symbol: 'Og',
    name: 'Oganesson',
    group: 18,
    period: 7,
    weight: 294,
    density: 7000,
    melt: 52,
    boil: 177,
    discovery: 1999,
    noImage: true,
    noImageText: NoImageReasons[2]
  }
];
