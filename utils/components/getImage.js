const { MessageMedia } = require("whatsapp-web.js");

const getImage = async (msg, client, type) => {
  msg.reply("sabar.....");
  const req = await fetch(`https://wibu-api.eu.org/api/anime/nsfw/${type}`);
  const res = await req.json();

  const img = await MessageMedia.fromUrl(res.url);
  client.sendMessage(msg.from, msg.reply(img));
};

module.exports = getImage;
