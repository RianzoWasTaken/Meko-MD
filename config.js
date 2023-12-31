global.owner = ['6282393307733']  
global.mods = ['6281395861695'] 
global.prems = ['6281395861695']
global.nameowner = 'Rey'
global.numberowner = '6282393307733' 
global.mail = 'support@tioprm.my.id' 
global.gc = 'https://chat.whatsapp.com/Da1lNTDwJIUHZOTd5uCTuv'
global.instagram = 'https://instagram.com/meko_md'
global.wm = '©meko-md'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Dibuat Dengan'
global.author = 'Meko-MD :3'
global.maxwarn = '3' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '5MSiYTMI' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'KLWJcZYg'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': '5MSiYTMI' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
