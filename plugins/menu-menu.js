import fetch from 'node-fetch'
import fs from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()
let emoj = `${pickRandom(['☰','☰','☰'])}`

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://youtu.be/CkX3lS0B4FY","https://youtu.be/CkX3lS0B4FY","https://youtu.be/CkX3lS0B4FY"]
     
  let cap = `*${htki} Information ${htka}*
*🏷️ ɴᴀᴍᴀ:* *(${ɴᴀᴍᴇ})*
*💰 ʙᴀʟᴀɴᴄᴇ:* *ʀᴘ* ${ᴍᴏɴᴇʏ}
*🏆 ʟᴇᴠᴇʟ* ${ʟᴇᴠᴇʟ}
*🎋 ʀᴏʟᴇ:* ${ʀᴏʟᴇ}
*🧬 xᴘ:* ᴛᴏᴛᴀʟ ${ᴇxᴘ} (${ᴇxᴘ - ᴍɪɴ} / ${xᴘ}) [${ᴍᴀᴛʜ <= 0 ? `ꜱɪᴀᴘ ᴜɴᴛᴜᴋ *${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ʟᴇᴠᴇʟᴜᴘ*` : `${ᴍᴀᴛʜ} xᴘ ʟᴀɢɪ ᴜɴᴛᴜᴋ ʟᴇᴠᴇʟᴜᴘ`}]
*📨 ᴛᴇʀᴅᴀꜰᴛᴀʀ:* ${ʀᴇɢɪꜱᴛᴇʀᴇᴅ ? 'ʏᴀ (' + ɴᴇᴡ ᴅᴀᴛᴇ(ʀᴇɢᴛɪᴍᴇ).ᴛᴏʟᴏᴄᴀʟᴇꜱᴛʀɪɴɢ() + ')' : 'ᴛɪᴅᴀᴋ'} ${ʟᴀꜱᴛᴄʟᴀɪᴍ > 0 ? '\ɴ*⏱️ᴛᴇʀᴀᴋʜɪʀ ᴋʟᴀɪᴍ:* ' + ɴᴇᴡ ᴅᴀᴛᴇ(ʟᴀꜱᴛᴄʟᴀɪᴍ).ᴛᴏʟᴏᴄᴀʟᴇꜱᴛʀɪɴɢ() : ''}\ɴ\ɴ ᴋᴇᴛɪᴋ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ɪɴᴠ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ɪɴᴠᴇɴᴛᴏʀʏ ʀᴘɢ`

let weem = `Barudak Ngawi😁`

  let buttonMessage= {
'document': {'url': sgc},
'mimetype': mim_.getRandom(),
'fileName': 'Silahkan Pilih Menu Dibawah.',
'fileLength': fsizedoc,
'pageCount': fpagedoc,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': lin_.getRandom(),
'mediaType': 2,
'previewType': 'pdf',
'title': '👋 Hai, ' + name ,
'body': 'Role ' + role + ' bang',
'thumbnail': await( await fetch(pp)).buffer(),
'sourceUrl': sgc}},
'caption': cap,
'footer': weem,
'buttons': [
{'buttonId': usedPrefix + 'allmenu','buttonText': {'displayText': `${emoj} All Menu`},'type': 1},
{'buttonId': usedPrefix + 'menulist','buttonText': {'displayText': `${emoj} List Menu`},'type': 1}
],
'headerType': 6}
    await conn.sendMessage(m.chat, buttonMessage, fdoc)
    
}

handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
