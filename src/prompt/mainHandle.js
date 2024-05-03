import inquirer from "inquirer";
import { qrCodeOptions } from "./inquirerOptions.js";
import { generateQRCode } from "../qrcode/generateQRCode.js";
import { generatePassword } from "../password/generatePassword.js";

export async function mainHandle(option) {
  if (option === "QRCode") {
    const response = await inquirer.prompt(qrCodeOptions);
    generateQRCode(response);
  } else {
    generatePassword();
  }
}
