const ytdl = require('ytdl-core');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');

const getTitle = async url => {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title;
    return title;
}

const downloadAudio = async (url, title) => {
    ytdl(url, { filter: 'audioonly' })
        .pipe(fs.createWriteStream(`assets/song/${title}.mp3`));
    return new Promise((resolve, reject) => {
        ytdl(url, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(`assets/song/${title}.mp3`))
            .on('finish', () => {
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

const getSong = async (msg, client, url) => {
    try {
        const title = await getTitle(url);
        await downloadAudio(url, title);

        const song = await new Promise((resolve, reject) => {
            fs.readFile(`assets/song/${title}.mp3`, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(MessageMedia.fromFilePath(`assets/song/${title}.mp3`));
                }
            });
        });

        await client.sendMessage(msg.from, song, {
            sendMediaAsDocument: true,
            caption: title
        });

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

module.exports = getSong;