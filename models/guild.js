const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    guildID: String,
    prefix: {
        "type": String,
        "default": "!"
    },
    users: []
});

module.exports = mongoose.model("Guild", guildSchema);