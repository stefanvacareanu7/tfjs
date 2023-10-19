export enum Language {
  German = 'de',
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  Italian = 'it',
}

export const allLanguageCodes: Array<string> = [
  Language.German,
  Language.English,
  Language.Spanish,
  Language.French,
  Language.Italian,
];
// the above is an array of the language codes that will be used for translations

export const defaultLanguage = Language.English; // default language is english
