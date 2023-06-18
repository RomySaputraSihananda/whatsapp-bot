const { MessageMedia } = require("whatsapp-web.js");

const getData = async () => {
    const req = await fetch('https://api-blue-archive.vercel.app/api/character/random');
    const res = await req.json();

    return res.data;
}

const gachaStudent = async (msg, client) => {
    const [student] = await getData();
    const img = await MessageMedia.fromUrl(student.photoUrl);
    const caption = `nama : ${student.name} (${student.names.japanName})
age : ${student.age}
birthday : ${student.birthday}
school : ${student.school}`

    client.sendMessage(msg.from, img, {
        caption
    });
}

module.exports = gachaStudent;