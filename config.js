const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~gUYDFTLJ#r9yMJcriLh7Yd955v6jEJIgL8GzZwH_3tETqGWQKq9c'
};
