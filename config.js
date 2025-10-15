0const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD&KY9X1K4S#INNle3xyI8Di22paNo9wOH4Y4Ew0I4rDd9B9w9WLCnI'
};
