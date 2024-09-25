let handler = async (m, { conn }) => {
    let caption = `🎟️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 : 𝙑𝙄𝙋 𝙐𝙎𝙀𝙍𝙎
*╭•·–––––––––––––––––––·•*
│ *Total : 0 Usuarios* 
*╰•·–––––––––––––––––––·•*\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ❌\n${wm}`
    
    await conn.reply(m.chat, caption, m);
}

handler.command = /^(listapremium|listpremium)$/i;

export default handler;
