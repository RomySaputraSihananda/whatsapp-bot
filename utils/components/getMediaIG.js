const { MessageMedia } = require("whatsapp-web.js");
const snapsave = require("snapsave-downloader");

const getData = async url => {
    const res = await snapsave(url);
    const jumlahPhoto = Math.sqrt(res.data.length);
    const data = [];

    for (let i = 0; i < jumlahPhoto; i++) {
        // if (i % jumlahPhoto == 0) data.push(res.data[i].url);
        data.push(res.data[i].url);
    }

    return data;
}

const getMediaIG = async (msg, client, url) => {
    try {
        const data = await getData(url);
        for (let i = 0; i < data.length; i++) {
            const img = await MessageMedia.fromUrl(data[i]);
            client.sendMessage(msg.from, msg.reply(img));
        }
    } catch (err) {
        console.log(err);
    }
}


module.exports = getMediaIG;