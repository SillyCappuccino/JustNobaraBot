import fetch from 'node-fetch';

let MessageType = (await import(global.baileys)).default;

let handler = async (m, { conn }) => {
  try {
    // Añadir al mencionado si hay una respuesta a otro mensaje
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);

    // Obtener la imagen de la API
    let res = await fetch('https://nekos.life/api/v2/img/feed');
    let json = await res.json();

    // Verificar si la respuesta es válida
    if (!json.url) {
      return conn.reply(m.chat, 'No se pudo obtener una imagen de la API.', m);
    }

    // Si no se menciona a nadie, alimentar al bot
    if (!m.mentionedJid.length) {
      await conn.sendFile(m.chat, json.url, null, `+${m.sender.split('@')[0]} ha alimentado al bot`, null, null, { viewOnce: false }, m);
    } else {
      // Enviar el GIF a los mencionados
      await conn.sendFile(m.chat, json.url, null, `+${m.sender.split('@')[0]} está alimentando a ${m.mentionedJid.map((user) => (user === m.sender) ? 'alguien' : `+${user.split('@')[0]}`).join(', ')}`, null, null, { viewOnce: false }, m);
    }
    
  } catch (e) {
    console.error(e); // Imprimir el error en la consola para debugging
    conn.reply(m.chat, 'Ocurrió un error al procesar tu solicitud.', m);
  }
};

handler.command = /^(alimentar|food|alimentándose|alimentando|alimentar)$/i;

export default handler;
