const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'VISPER-MD&y4wXhBwK#2hD1kbqyhnSc68n5l_lt-R1_osg-cYeWERsShKuAtWg'
};
