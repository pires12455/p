const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://youtube.com/c/lowoijo
Instagram: https://instagram.com/ridho_setiawan02

Best regards, ridho.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! ðï¸
âââââââââââ¶.â·ââââââââ
âã INFORMAÃÃES ã
â
â ð *Pires BOT* 
â ð ðððð: PIRES
â ð *wa.me/+556996103915*
â ð ðððððð: ON
    ð· ðð§ð¬ð­ðð ð«ðð¦:_ @pireskkkk
â _ðªðð«ð®ð©ð¨ ðð¨ ð°ð©ð©:_
â _*ðhttps://chat.whatsapp.com/CWDE10hFK31JwBN79IWJLBð*
Creator:
-â¥ *${prefix}sticker*
-â¥ *${prefix}stickergif*
-â¥ *${prefix}stickergiphy*
-â¥ *${prefix}meme*
-â¥ *${prefix}quotemaker*
-â¥ *${prefix}nulis*

islamismo:
-â¥ *${prefix}infosurah*
-â¥ *${prefix}surah*
-â¥ *${prefix}tafsir*
-â¥ *${prefix}ALaudio*
-â¥ *${prefix}jsolat*

18+:
-â¥ *${prefix}nekopoi*

Menu divertido (Group):
-â¥ *${prefix}simisimi*
-â¥ *${prefix}katakasar*
-â¥ *${prefix}klasmen*

Download:
-â¥ *${prefix}ytmp3*
-â¥ *${prefix}ytmp4*
-â¥ *${prefix}facebook*

Primbon:
-â¥ *${prefix}artinama*
-â¥ *${prefix}cekjodoh*

Pesquisar qualquer:
-â¥ *${prefix}images*
-â¥ *${prefix}sreddit*
-â¥ *${prefix}resep*
-â¥ *${prefix}stalkig*
-â¥ *${prefix}wiki*
-â¥ *${prefix}cuaca*
-â¥ *${prefix}chord*
-â¥ *${prefix}lirik*
-â¥ *${prefix}ss*
-â¥ *${prefix}play*
-â¥ *${prefix}movie*
-â¥ *${prefix}whatanime*

Texto AleatÃ³rio:
-â¥ *${prefix}fakta*
-â¥ *${prefix}pantun*
-â¥ *${prefix}katabijak*
-â¥ *${prefix}quote*
-â¥ *${prefix}cerpen*
-â¥ *${prefix}cersex*
-â¥ *${prefix}puisi*

Imagens aleatÃ³rias:
-â¥ *${prefix}anime*
-â¥ *${prefix}kpop*
-â¥ *${prefix}memes*

Outros:
-â¥ *${prefix}tts*
-â¥ *${prefix}translate*
-â¥ *${prefix}resi*
-â¥ *${prefix}covidindo*
-â¥ *${prefix}ceklokasi*
-â¥ *${prefix}shortlink*
-â¥ *${prefix}bapakfont*

Sobre o barco:
-â¥ *${prefix}tnc*
-â¥ *${prefix}donasi*
-â¥ *${prefix}botstat*
-â¥ *${prefix}ownerbot*
-â¥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

ProprietÃ¡rio do bot:
-â¥ *${prefix}ban* - banned
-â¥ *${prefix}bc* - promosi
-â¥ *${prefix}leaveall* - keluar semua grup
-â¥ *${prefix}clearall* - hapus semua chat

Espero que vocÃª tenha um Ã³timo dia! â¨`
}

/*


*/

exports.textAdmin = () => {
    return `
â  [ *Admin Group Only* ] â  
Aqui estÃ£o os recursos de administraÃ§Ã£o de grupo deste bot!

-â¥ *${prefix}add*
-â¥ *${prefix}kick* @tag
-â¥ *${prefix}promote* @tag
-â¥ *${prefix}demote* @tag
-â¥ *${prefix}mutegrup*
-â¥ *${prefix}tagall*
-â¥ *${prefix}setprofile*
-â¥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

â  [ *Owner Group Only* ] â 
A seguir estÃ¡ o recurso de proprietÃ¡rio do grupo no bot esta!
-â¥ *${prefix}kickall*
*O grupo proprietÃ¡rio Ã© um criador do grupo. *
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

via dana/pulsa : 081289096745
via shopeepay : bri 112082390009516 A.N ridho040203
via rekening BRI : 753501017096533 A.N : RIDHO SETIAWAN

NB : DONASI DARI KALIAN UNTUK PERKEMBANGAN BOT INI KEDEPANNYA, TETIMA KASIH

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ridho`
}
