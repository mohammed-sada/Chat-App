function generateMessage(text) {
    return {
        text,
        createdAt: new Date().getTime()
    };
}
function generateLocationMessage(url) {
    return {
        url,
        createdAt: new Date().getTime()
    };
}

module.exports = {
    generateMessage,
    generateLocationMessage
};