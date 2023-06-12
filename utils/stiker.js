const createSticker = async (msg, client) => {
    const media = await msg.downloadMedia();
    client.sendMessage(msg.from, media, {
        sendMediaAsSticker: true,
        stickerAutor: 'Romyyyyy...',
        stickerName: 'Sayang kamu.....'
    })
}

module.exports = createSticker;