const { IPv4 } = require('ipv4-calc');

// const respone = {
//     ip: `${network.decHost} [ ${formatNumber(network.binHost)} ]`,
//     netmask: `${network.decMask} / ${network.cidr} [ ${formatNumber(network.binMask)} ]`,
//     networkID: network.decNetwork,
//     broadcast: network.decBroadcast,
//     range: `${network.decFirstAddress} - ${network.decLastAddress}`,
//     host: network.numberOfUsableHosts,
//     increment: network.increment,
//     subnet: formatSubnet(netmask)
// }

const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{8})+(?!\d))/g, '$1.')
}

const formatSubnet = netmask => {
    const subnet = netmask.map(net => {
        // return {
        //     networkID: net.decNetwork,
        //     broadcast: net.decBroadcast,
        //     range: `${net.decFirstAddr} - ${net.decLastAddr}`
        // }
        return `=========================
networkID: ${net.decNetwork}
broadcast: ${net.decBroadcast}

range: ${net.decFirstAddr} - ${net.decLastAddr}
=========================
/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/  \n`
    })

    return subnet;
}

const ipCalc = (msg, ipUse) => {
    const ip = new IPv4(ipUse);
    const network = ip.getNetworkInfo();
    const netmask = ip.getSubNetworksInfo();

    const respone = `ip: ${network.decHost} 
${formatNumber(network.binHost)}

netmask: ${network.decMask} / ${network.cidr} 
${formatNumber(network.binMask)}

networkID: ${network.decNetwork}
broadcast: ${network.decBroadcast}

range: ${network.decFirstAddress} - ${network.decLastAddress}

host: ${network.numberOfUsableHosts}
increment: ${network.increment}

Block Subnet
${formatSubnet(netmask).join('')}`

    msg.reply(respone);
}

module.exports = ipCalc;