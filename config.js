const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~pJAzxYBa#srPFCc2rX0PXfN_VWDkR6koOKhj-XGS-EXmFP0Tw7SE'
};
