import inquirer from "inquirer";
import { initialOptions } from "./prompt/inquirerOptions.js";
import { mainHandle } from "./prompt/mainHandle.js";

async function init() {
  try {
    const response = await inquirer.prompt(initialOptions);
    await mainHandle(response.firstOptions);
  } catch (err) {
    console.log(err);
  }
}

init();
