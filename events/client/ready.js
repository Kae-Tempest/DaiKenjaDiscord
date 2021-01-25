const tokenDB = require('../../config')
module.exports = client => {
    client.mongoose = require("../../util/mongoose");
    let Daikenja = {
        'id': client.user.id,
        'username': client.user.username,
        'server_name': client.guilds.cache.map(guild => guild.name)
    };
    let now = new Date().toLocaleString('fr-FR');
    console.clear();
    console.log('\033[2J');
    console.log(`${Daikenja.username} (${Daikenja.id}) connected at ${now} on ${Daikenja.server_name}`);
    client.mongoose.init();
    console.log("I'm ready Ningen");
    client.user.setActivity(`Donner des conseil a Rimuru Tempest`).catch(console.error);
    if (tokenDB.DBCONNECTION !== "mongodb://localhost:27017/test") client.channels.cache.get('769215379238027297').send("Dai Kenja est opérationel!");
}