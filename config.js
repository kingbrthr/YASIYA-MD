const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FExh0LjA#Ycl1bCF-Afu8K6HcNBxSb4ZdDYlVvM3m2uM9VaxcznM'
};
