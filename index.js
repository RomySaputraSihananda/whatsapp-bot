const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const createSticker = require('./utils/stiker');
const getImage = require('./utils/getImage');
const getSong = require('./utils/getSong');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    const from = {
        nomor: msg._data.from,
        nama: msg._data.notifyName,
        message: msg.body.toLowerCase(),
    };
    console.log(from);
    if ((from.message === 'assalamualaikum') || (from.message === "assalamu'alaikum")) {
        return msg.reply("Waalaikum'salam");
    } else if ((from.message.startsWith('stiker') && ((msg.type === 'image') || (msg.type === 'video')))) {
        return createSticker(msg, client);
    } else if ((from.message === 'random')) {
        return getImage(msg, client);
    } else if ((msg.body.startsWith('lagu'))) {
        const url = msg.body.split('-')[1];
        getSong(msg, client, url);
    }
});

client.initialize();
