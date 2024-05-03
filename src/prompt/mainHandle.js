import inquirer from "inquirer";
import { qrCodeOptions } from "./inquirerOptions.js";
import { generateQRCode } from "../qrcode/generateQRCode.js";

export async function mainHandle(option) {
  if (option === "QRCode") {
    const response = await inquirer.prompt(qrCodeOptions);
    generateQRCode(response);
  } else {
    console.log("Senha Gerada!");
  }
}
