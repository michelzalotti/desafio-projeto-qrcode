import qr from "qrcode-terminal";

export function generateQRCode({ qrCodeContent, qrCodeType }) {
  const small = qrCodeType === "Imagem" ? false : true;

  qr.generate(qrCodeContent, { small }, function (qrcode) {
    console.log(qrcode);
  });
}
