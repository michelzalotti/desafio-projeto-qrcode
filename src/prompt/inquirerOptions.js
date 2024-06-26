import chalk from "chalk";

const initialOptions = [
  {
    type: "list",
    name: "firstOptions",
    message: "Escolha uma das opções:",
    choices: ["QRCode", "Password"],
  },
];

const qrCodeOptions = [
  {
    type: "input",
    name: "qrCodeContent",
    message: chalk.bgBlueBright("Informe o link para gerar o QRCode:"),
    validate: function (input) {
      try {
        new URL(input);
        return true;
      } catch (e) {
        return chalk.red("Endereço inválido.");
      }
    },
  },
  {
    type: "list",
    name: "qrCodeType",
    message: "Que tipo de QRCode deseja gerar?",
    choices: ["Imagem", "Terminal"],
  },
];

export { initialOptions, qrCodeOptions };
