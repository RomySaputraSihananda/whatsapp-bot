const message =
    `⚛️ .help : help bang

⚛️ .stiker : foto, video, gif

⚛️ .random : random foto wangy wangy

⚛️ .lagu : download lagu from youtube 
[.lagu-linkYoutube]

⚛️ .username : cek username game
[PUBG-mobile : .username-pubg-id]
[free-fire : .username-ff-id]
[higgs-domino : .username-hd-id]
[point-blank : .username-pb-id]
[arena-of-valor : .username-aov-id]
[CoD-mobile : .username-cod-id]
[genshin-impact : .username-genshin-id-server]
[mobile-legends : .username-ml-id-server]
[valorant : .username-valo-id-tag]

⚛️ .ipCalc : ip calculator
[.ipCalc-ip/prefix]

⚛️ .jav : random jav (sabar)

⚛️ .nhentai : dowmload nhentai from kode nuklir (sabar)

⚛️ .spam : spam nomor target (sabar)`

const help = msg => {
    return msg.reply(message);
}

module.exports = help;