const instagramGetUrl = require("instagram-get-url");

const getLink = async () => {
    try {
        const data = await instagramGetUrl("https://www.instagram.com/p/CobGyByv57kvhi5PXEcmniXT29lH0xtBkwen280/?igshid=MTc4MmM1YmI2Ng==");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


getLink();
