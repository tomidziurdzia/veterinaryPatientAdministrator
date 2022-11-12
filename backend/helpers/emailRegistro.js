import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;
  // Enviando email
  const info = await transporter.sendMail({
    from: '"Administrador de Pacientes de Veterinaria"', // sender address
    to: email, // list of receivers
    subject: "Comprueba tu cuenta", // Subject line
    text: "Comprueba tu cuenta", // plain text body
    html: `<p>Hola ${nombre}, comprueba tu cuenta en APV</p>
            <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace
              <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar cuenta</a>
            </p>
            <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

export default emailRegistro;
