import axios from "axios"
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let MessageType = (await import(global.baileys)).default
let handler = async (m, {usedPrefix, command, conn}) => {
//let frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeGB.smsCont18Porn2(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(img16)).buffer() }}}
let user = global.db.data.users[m.sender]

try {
if (command == 'test' || command == 'test2') {
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
handler.register = true
export default handler
