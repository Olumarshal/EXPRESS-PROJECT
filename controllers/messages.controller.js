const path = require("path");

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "images", "Screenshot (1).png"));
    // res.send('<ul><li>Hello Albert!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}