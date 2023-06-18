const axios = require('axios');

const game = {
    pubg: 'PUBG-mobile',
    ff: 'free-fire',
    hd: 'higgs-domino',
    pb: 'point-blank',
    aov: 'arena-of-valor',
    cod: 'CoD-mobile',
    genshin: 'genshin-impact',
    ml: 'mobile-legends',
    valo: 'valorant'
}

const getName = async (msg, type, id, server) => {
    const url = getURL(type, id, server);

    msg.reply('sabar.....');


    try {
        const response = await axios.request({
            method: 'GET',
            url,
            headers: {
                'X-RapidAPI-Key': 'ae7e55c216mshffe197a2244e85ap1273fbjsn25a411c3f7d7',
                // 'X-RapidAPI-Key': 'e04d860dc6msh606f4456339ce0dp178d80jsn68b2c9166ab6',
                'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
            }
        });
        msg.reply(`Game: ${response.data.data.game}\nUserId: ${response.data.data.userId},\nUsername: ${response.data.data.username}`);
    } catch (error) {
        msg.reply('Limit API Kontol........');
    }
}

const getURL = (type, id, server) => {
    if ((type === 'ml') || (type === 'genshin') || (type === 'valo')) {
        return `https://id-game-checker.p.rapidapi.com/${game[type]}/${id}/${server}`;
    } else {
        return `https://id-game-checker.p.rapidapi.com/${game[type]}/${id}`
    }
}

module.exports = getName;