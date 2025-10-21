const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JZZAzK5R#kl2hdthAT6WfVFHje0cz-C4Z6o8fPyiFplVy5C4xlBA'
};
