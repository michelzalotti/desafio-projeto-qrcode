export const passwordConfig = {
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numerics: "0123456789",
  specials: "!@#$%¨&*()_-+=\"'^~;][}{,.:`*\\/",
  upperCase: process.env.UPPERCASE_CHARACTERES,
  lowerCase: process.env.LOWERCASE_CHARACTERES,
  numbers: process.env.NUMBERS,
  specialsChars: process.env.SPECIAL_CHARACTERES,
  length: process.env.PASSWORD_LENGTH,
};
