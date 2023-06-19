const { createSticker, getImage, getSong, getName, help, ipCalc, gachaWife, getMediaIG, scan } = require('./init');

const handleMsg = (msg, client) => {
    const from = {
        nomor: msg._data.from,
        nama: msg._data.notifyName,
        message: msg.body.toLowerCase(),
    };

    console.log(from);

    if (from.message.startsWith('.')) {
        if (from.message === '.help') {
            return help(msg);
        } else if ((from.message.startsWith('.stiker') && ((msg.type === 'image') || (msg.type === 'video')))) {
            return createSticker(msg, client);
        } else if ((from.message === '.random')) {
            return getImage(msg, client);
        } else if ((msg.body.startsWith('.lagu'))) {
            const url = msg.body.split('-')[1];
            return getSong(msg, client, url);
        } else if ((msg.body.startsWith('.username'))) {
            const [ok, type, id, server] = msg.body.split('-');
            return getName(msg, type, id, server);
            // console.log({ ok, type, id, server });
        } else if ((msg.body.startsWith('.ipCalc'))) {
            const ip = msg.body.split('-')[1];
            return ipCalc(msg, ip);
        } else if ((msg.body.startsWith('.gacha'))) {
            return gachaWife(msg, client);
        } else if ((msg.body.startsWith('.getIG'))) {
            const url = msg.body.split('-')[1];
            return getMediaIG(msg, client, url);
        } else if ((msg.body.startsWith('.scan'))) {
            const url = msg.body.split('-')[1].split('/')[2];
            return scan(msg, url);
        }
    } else if ((from.message === 'assalamualaikum') || (from.message === "assalamu'alaikum")) {
        return msg.reply("Waalaikum'salam");
    } else if (from.message == 'santai') {
        return msg.reply('maafkan saya bang 😢');
    }
}

module.exports = handleMsg;