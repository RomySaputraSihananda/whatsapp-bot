const NetworkScanner = require('network-scanner-js')
const Evilscan = require('evilscan');
const netScan = new NetworkScanner()

const config = {
    repeat: 1,
    size: 80,
    timeout: 1
};

const ping = async url => {
    const poll = await netScan.poll(url, config)
    return poll;
}

const getPort = async (msg, target) => {
    const options = {
        target,
        port: '0-1000',
        status: 'TROU',
        banner: true
    };

    const evilscan = new Evilscan(options);

    evilscan.on('result', data => {
        if ((data.status !== 'closed (timeout)') && (data.status !== 'closed (refused)') && (data.status !== 'read ECONNRESET') && (data.banner !== '')) {
            let banner = data.banner.split('\\r').join('').split('\\n');
            const message = `port : ${data.port}
status : ${data.status}
banner : 
${banner}`;
            msg.reply(message);
        }
    });

    evilscan.run();
}

const scan = async (msg, url) => {
    try {
        const poll = await ping(url);
        const message = `host : ${poll.host}
ip address : ${poll.ip_address}
status : ${poll.status}`;
        msg.reply(message);

        getPort(msg, poll.ip_address);
    } catch (err) {
        console.log(err);
    }
}

module.exports = scan;