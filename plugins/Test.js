import fetch from 'node-fetch'
let MessageType = (await import(global.baileys)).default
let media, msg, type
let handler = async (m, { conn}) => {
try {   
if (command == "test" || command "test2") {
let res = (await axios.get(`https://github.com/SillyCappuccino/JustNobaraBot/blob/master/src/JSON/Slaps.js`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
  await conn.sendFile(m.chat, enlace, null, `, `+${m.sender.split('@')[0]} le dio una bofetada a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}``, null, null, {viewOnce: false}, m)}
  
//if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
//if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
//let stiker = await sticker(null,s[Math.floor(Math.random() * s.length)], `+${m.sender.split('@')[0]} le dio una bofetada a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
//conn.sendFile(m.chat, stiker, null, { asSticker: true })
//} catch (e) { }}
handler.help = ['slapss']
handler.tags = ['General']
handler.command = /^test|test2|test3|abofetear|golpear/i
export default handler

const s = [
"https://media.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif",
"https://img.photobucket.com/albums/v639/aoie_emesai/100handslap.gif",
"https://gifdb.com/images/high/yuruyuri-akari-kyoko-anime-slap-fcacgc0edqhci6eh.gif",
"https://gifdb.com/images/file/anime-sibling-slap-ptjipasdw3i3hsb0.gif",
"https://c.tenor.com/Lc7C5mLIVIQAAAAC/tenor.gif",
"https://i.pinimg.com/originals/71/a5/1c/71a51cd5b7a3e372522b5011bdf40102.gif"
]
