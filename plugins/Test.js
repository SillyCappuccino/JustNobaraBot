import axios from "axios"
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    
    try {
        if (['test', 'test2', 'test3', 'abofetear', 'golpear'].includes(m.command)) {
            // Obtiene imágenes desde el repositorio de GitHub
            let res = (await axios.get(`https://github.com/SillyCappuccino/JustNobaraBot/blob/master/src/JSON/Slaps.js`)).data  
            let enlace = await res[Math.floor(res.length * Math.random())];

            const mentionedUsers = m.mentionedJid.map((jid) => jid.split('@')[0]).join(', ');
            const senderName = m.sender.split('@')[0]; // Obtiene el nombre del usuario que dio la bofetada
            
            // Envío del GIF y mensaje
            await conn.sendFile(m.chat, enlace, null, `${senderName} le dio una bofetada a ${mentionedUsers}`, null, null, { viewOnce: false }, m);
        }
    } catch (e) {
        console.error(e); // Para facilitar el diagnóstico de errores, si los hay
    }
}

handler.help = ['slapss']
handler.tags = ['General']
handler.command = /^(test|test2|test3|abofetear|golpear)$/i
handler.register = true

export default handler
