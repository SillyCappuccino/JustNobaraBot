let handler = async (m) => {
    if (m.text.startsWith('!skibidi')) {
        console.log('Comando recibido: !skibidi'); // Verificación
        await conn.reply(m.chat, '¡Comando test ejecutado correctamente!', m);
    }
}

handler.command = /^skibidi/i; // Comando registrado
export default handler;
