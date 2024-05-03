import { passwordConfig } from "./config/passwordConfig.js";

export function generatePassword() {
  let password = "";
  let chars = [];

  if (passwordConfig.upperCase) {
    chars.push(...passwordConfig.letters.split(""));
  }

  if (passwordConfig.lowerCase) {
    chars.push(...passwordConfig.letters.toLowerCase().split(""));
  }

  if (passwordConfig.numbers) {
    chars.push(...passwordConfig.numerics.split(""));
  }

  if (passwordConfig.specialsChars) {
    chars.push(...passwordConfig.specials.split(""));
  }

  for (let i = 0; i < passwordConfig.length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  console.log(`Senha gerada: ${password}`);
}
