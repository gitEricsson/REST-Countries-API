import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
  // prettier-ignore
  countriesAlpha3Codes: [{ ABW: 'Aruba' }, { AFG: 'Afghanistan' }, { AGO: 'Angola' }, { AIA: 'Anguilla' }, { ALA: 'Åland Islands' }, { ALB: 'Albania' }, { AND: 'Andorra' }, { ARE: 'United Arab Emirates' }, { ARG: 'Argentina' }, { ARM: 'Armenia' }, { ASM: 'American Samoa' }, { ATA: 'Antarctica' }, { ATF: 'French Southern and Antartic Lands' }, { ATG: 'Antigua and Barbuda' }, { AUS: 'Australia' }, { AUT: 'Austria' }, { AZE: 'Azerbaijan' }, { BDI: 'Burundi' }, { BEL: 'Belgium' }, { BEN: 'Benin' }, { BES: 'Caribbean Netherlands' }, { BFA: 'Burkina Faso' }, { BGD: 'Bangladesh' }, { BGR: 'Bulgaria' }, { BHR: 'Bahrain' }, { BHS: 'Bahamas' }, { BIH: 'Bosnia and Herzegovina' }, { BLM: 'Saint Barthélemy' }, { BLR: 'Belarus' }, { BLZ: 'Belize' }, { BMU: 'Bermuda,' }, { BOL: 'Bolivia' }, { BRA: 'Brazil' }, { BRB: 'Barbados' }, { BRN: 'Brunei Darussalam' }, { BTN: 'Bhutan' }, { BVT: 'Bouvet Island' }, { BWA: 'Botswana' }, { CAF: 'Central African Republic' }, { CAN: 'Canada' }, { CCK: 'Cocos (Keeling) Islands' }, { CHE: 'Switzerland' }, { CHL: 'Chile' }, { CHN: 'China' }, { CIV: "Ivory Coast" }, { CMR: 'Cameroon' }, { COD: 'DR Congo' }, { COG: 'Republic of the Congo' }, { COK: 'Cook Islands' }, { COL: 'Colombia' }, { COM: 'Comoros' }, { CPV: 'Cabo Verde' }, { CRI: 'Costa Rica' }, { CUB: 'Cuba' }, { CUW: 'Curaçao' }, { CXR: 'Christmas Island' }, { CYM: 'Cayman Islands' }, { CYP: 'Cyprus' }, { CZE: 'Czechia' }, { DEU: 'Germany' }, { DJI: 'Djibouti' }, { DMA: 'Dominica' }, { DNK: 'Denmark' }, { DOM: 'Dominican Republic' }, { DZA: 'Algeria' }, { ECU: 'Ecuador' }, { EGY: 'Egypt' }, { ERI: 'Eritrea' }, { ESH: 'Western Sahara' }, { ESP: 'Spain' }, { EST: 'Estonia' }, { ETH: 'Ethiopia' }, { FIN: 'Finland' }, { FJI: 'Fiji' }, { FLK: 'Falkland Islands (Malvinas)' }, { FRA: 'France' }, { FRO: 'Faroe Islands' }, { FSM: 'Micronesia' }, { GAB: 'Gabon' }, { GBR: 'United Kingdom' }, { GEO: 'Georgia' }, { GGY: 'Guernsey' }, { GHA: 'Ghana' }, { GIB: 'Gibraltar' }, { GIN: 'Guinea' }, { GLP: 'Guadeloupe' }, { GMB: 'Gambia' }, { GNB: 'Guinea-Bissau' }, { GNQ: 'Equatorial Guinea' }, { GRC: 'Greece' }, { GRD: 'Grenada' }, { GRL: 'Greenland' }, { GTM: 'Guatemala' }, { GUF: 'French Guiana' }, { GUM: 'Guam' }, { GUY: 'Guyana' }, { HKG: 'Hong Kong' }, { HMD: 'Heard Island and McDonald Islands' }, { HND: 'Honduras' }, { HRV: 'Croatia' }, { HTI: 'Haiti' }, { HUN: 'Hungary' }, { IDN: 'Indonesia' }, { IMN: 'Isle of Man' }, { IND: 'India' }, 
  
  // prettier-ignore
 { IOT: 'British Indian Ocean Territory' }, { IRL: 'Ireland' }, { IRN: 'Iran' }, { IRQ: 'Iraq' }, { ISL: 'Iceland' }, { ISR: 'Israel' }, { ITA: 'Italy' }, { JAM: 'Jamaica' }, { JEY: 'Jersey' }, { JOR: 'Jordan' }, { JPN: 'Japan' }, { KAZ: 'Kazakhstan' }, { KEN: 'Kenya' }, { KGZ: 'Kyrgyzstan' }, { KHM: 'Cambodia' }, { KIR: 'Kiribati' }, { KNA: 'Saint Kitts and Nevis' }, { KOR: 'South Korea' }, { KWT: 'Kuwait' }, { LAO: 'Laos' }, { LBN: 'Lebanon' }, { LBR: 'Liberia' }, { LBY: 'Libya' }, { LCA: 'Saint Lucia' }, { LIE: 'Liechtenstein' }, { LKA: 'Sri Lanka' }, { LSO: 'Lesotho' }, { LTU: 'Lithuania' }, { LUX: 'Luxembourg' }, { LVA: 'Latvia' }, { MAC: 'Macao' }, { MAF: 'Saint Martin' }, { MAR: 'Morocco' }, { MCO: 'Monaco' }, { MDA: 'Moldova' }, { MDG: 'Madagascar' }, { MDV: 'Maldives' }, { MEX: 'Mexico' }, { MHL: 'Marshall Islands' }, { MKD: 'North Macedonia' }, { MLI: 'Mali' }, { MLT: 'Malta' }, { MMR: 'Myanmar' }, { MNE: 'Montenegro' }, { MNG: 'Mongolia' }, { MNP: 'Northern Mariana Islands' }, { MOZ: 'Mozambique' }, { MRT: 'Mauritania' }, { MSR: 'Montserrat' }, { MTQ: 'Martinique' }, { MUS: 'Mauritius' }, { MWI: 'Malawi' }, { MYS: 'Malaysia' }, { MYT: 'Mayotte' }, { NAM: 'Namibia' }, { NCL: 'New Caledonia' }, { NER: 'Niger' }, { NFK: 'Norfolk Island' }, { NGA: 'Nigeria' }, { NIC: 'Nicaragua' }, { NIU: 'Niue' }, { NLD: 'Netherlands' }, { NOR: 'Norway' }, { NPL: 'Nepal' }, { NRU: 'Nauru' }, { NZL: 'New Zealand' }, { OMN: 'Oman' }, { PAK: 'Pakistan' }, { PAN: 'Panama' }, { PCN: 'Pitcairn' }, { PER: 'Peru' }, { PHL: 'Philippines' }, { PLW: 'Palau' }, { PNG: 'Papua New Guinea' }, { POL: 'Poland' }, { PRI: 'Puerto Rico' }, { PRK: 'North Korea' }, { PRT: 'Portugal' }, { PRY: 'Paraguay' }, { PSE: 'Palestine' }, { PYF: 'French Polynesia' }, { QAT: 'Qatar' }, { REU: 'Réunion' }, { ROU: 'Romania' }, { RUS: 'Russia' }, { RWA: 'Rwanda' },

 // prettier-ignore
 { SAU: 'Saudi Arabia' }, { SDN: 'Sudan' }, { SEN: 'Senegal' }, { SGP: 'Singapore' }, { SGS: 'South Georgia and the South Sandwich Islands' }, { SHN: 'Saint Helena, Ascension and Tristan da Cunha' }, { SJM: 'Svalbard and Jan Mayen' }, { SLB: 'Solomon Islands' }, { SLE: 'Sierra Leone' }, { SLV: 'El Salvador' }, { SMR: 'San Marino' }, { SOM: 'Somalia' }, { SPM: 'Saint Pierre and Miquelon' }, { SRB: 'Serbia' }, { SSD: 'South Sudan' }, { STP: 'Sao Tome and Principe' }, { SUR: 'Suriname' }, { SVK: 'Slovakia' }, { SVN: 'Slovenia' }, { SWE: 'Sweden' }, { SWZ: 'Eswatini' }, { SXM: 'Sint Maarten' }, { SYC: 'Seychelles' }, { SYR: 'Syria' }, { TCA: 'Turks and Caicos Islands' }, { TCD: 'Chad' }, { TGO: 'Togo' }, { THA: 'Thailand' }, { TJK: 'Tajikistan' }, { TKL: 'Tokelau' }, { TKM: 'Turkmenistan' }, { TLS: 'Timor-Leste' }, { TON: 'Tonga' }, { TTO: 'Trinidad and Tobago' }, { TUN: 'Tunisia' }, { TUR: 'Türkiye' }, { TUV: 'Tuvalu' }, { TWN: 'Taiwan' }, { TZA: 'Tanzania' }, { UGA: 'Uganda' }, { UKR: 'Ukraine' }, { UMI: 'United States Minor Outlying Islands' }, { URY: 'Uruguay' }, { USA: 'United States' }, { UZB: 'Uzbekistan' }, { VAT: 'Vatican City' }, { VCT: 'Saint Vincent and the Grenadines' }, { VEN: 'Venezuela' }, { VGB: 'British Virgin Islands' }, { VIR: 'United States Virgin Islands' }, { VNM: 'Viet Nam' }, { VUT: 'Vanuatu' }, { WLF: 'Wallis and Futuna' }, { WSM: 'Samoa' }, { YEM: 'Yemen' }, { ZAF: 'South Africa' }, { ZMB: 'Zambia' }, { ZWE: 'Zimbabwe' },
  ],
  search: {
    query: '',
    resultsAll: [],
    resultsRegion: [],
    resultsQuery: [],
  },
};

const createCountriesObject = function (count) {
  // console.log(
  //   count.name.nativeName === undefined
  //     ? 'nil'
  //     : Object.values(count.name.nativeName).map(nat => nat.official)
  // );
  console.log(
    count.languages === undefined ? 'nil' : Object.values(count.languages)
  );
  return {
    name: count.name.common,

    population: count.population.toLocaleString(),

    region: count.region,

    capital: count.capital === undefined ? 'nil' : count.capital[0],

    flag: count.flags.svg,

    subRegion: count.subregion === undefined ? 'nil' : count.subregion,

    tld: count.tld === undefined ? 'nil' : count.tld[0],

    currencies:
      count.currencies === undefined
        ? 'nil'
        : Object.values(count.currencies).map(curr => curr.name),

    languages:
      count.languages === undefined ? 'nil' : Object.values(count.languages),

    borders: count.borders === undefined ? 'nil' : count.borders,

    nativeName:
      count.name.nativeName === undefined
        ? 'nil'
        : Object.values(count.name.nativeName).map(nat => nat.official),
  };
};

export const loadResults = async function (filter, query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}${filter}${query}`);

    if (filter === 'all') {
      state.search.resultsAll = data.map(createCountriesObject);
    }
    if (filter === 'region') {
      state.search.resultsRegion = data.map(createCountriesObject);
    }
    if (filter === 'name') {
      state.search.resultsQuery = data.map(createCountriesObject);
    }
  } catch (err) {
    throw err;
  }
};

export const searchData = function (name) {
  const data = state.search.resultsAll.find(count => count.name === name);
  return data;
};

export const searchBorders = function (bordersCode) {
  if (bordersCode === 'nil') return ['nil'];
  const borders = bordersCode
    .map(bCode =>
      Object.values(state.countriesAlpha3Codes.find(code => code[bCode]))
    )
    .flat();
  return borders;
};

export const editData = function (data, borders) {
  const newData = JSON.parse(JSON.stringify(data));
  newData.borders = borders;

  return newData;
};
