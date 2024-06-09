const fs = require('fs')

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//General Settings 
global.owner = '6282384461268'
global.prems = '6282384461268'
global.nomerowner = '6282384461268'
global.prem = '6282384461268'
global.prefa = ['','!','.',',','🐤','🗿']
global.ownNumb = '6282384461268' //ganti aj klo mau
global.NamaOwner = '🄺🄴🄼🄰🅃🄸🄰🄽 😈' //gausah diganti 
global.sessionName = 'sesi'
global.namabot = '🄺🄴🄼🄰🅃🄸🄰🄽 😈' //ganti aj klo mau
global.author = '🄺🄴🄼🄰🅃🄸🄰🄽 😈' //ganti aj klo mau
global.packname = '🄺🄴🄼🄰🅃🄸🄰🄽 😈' //ganti aj klo mau
global.yt = 'https://youtube.com' //gausah diganti 

global.mess = {
// bagian ini gausah diganti
ingroup: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
owner: 'Waduhh! ,Lu bukan owner gw bg🗣️',
premium: 'You are not a premium user, Lu gabisa akses fitur ini karna lu bukn preium, aowkawokawok🐦',
seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
usingsetpp: 'Setpp hanya bisa dipake owner, lu kira gw bego? 🤓',
wait: 'Tunggu sedang diproses🕙',
ngebug: '❗Tunggu Sebentar, Pengiriman Bug Ini Akan Memakan Waktu Yang Lumayan Lama🕙'
}


global.unic = {
n1: '🍻°⃟૰-!🄺🄴🄼🄰🅃🄸🄰🄽 😈🍺ꢵ',
n2: `💔'҉༑⃟🄺🄴🄼🄰🅃🄸🄰🄽 😈❤️‍🩹`,
n3: '*👀⃟༑🄺🄴🄼🄰🅃🄸🄰🄽 😈༑⃟♥️*',
n4: '🄺🄴🄼🄰🅃🄸🄰🄽 😈 😈̸̦̣͘ ♣️_🌈̞⃜ ...~',
n5: '༑❄️͜͡•°🄺🄴🄼🄰🅃🄸🄰🄽 😈༐🥶𖫰᷍҉ํ⃟ৣ ̭• 🧊ꫬ—𝅨🌊̨̈ꨲꪾ …',
n6: '*🦠 ༑̶ 𐎟⃟ 🄺🄴🄼🄰🅃🄸🄰🄽 😈 𐎟⃟ ༑̶ 🦠',
n7: '❬༑⿻⃟⭐᪾ᩭ🄺🄴🄼🄰🅃🄸🄰🄽 😈 ✶ 🄺🄴🄼🄰🅃🄸🄰🄽 😈༑🔥⃟᪾⿻❭༉'
}

// Image Quoted > Base64. Mau Ganti? boleeh, yang penting lu tau caranya
global.jpegT = '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'

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})