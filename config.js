const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~UFIAiRzb#ARZ3C__PNswyww5W-VO00Xg_qnJ-TlhfsIOUKWFSCVg'
};
