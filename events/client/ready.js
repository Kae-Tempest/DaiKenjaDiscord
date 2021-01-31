const tokenDB = require('../../config')
const fs = require('fs')
const {monster} = require('../../function/rpg/createMonster')
const {items} = require('../../function/rpg/createItems')
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
    fs.unlink('./assets/npc/hostile.json', (err) => {
        if (err) throw err
    })
    monster(client);
    console.log("Monstres crées !")
    fs.unlink('./assets/shop/shop.json', (err) => {
        if (err) throw err
    })
    fs.unlink('./assets/shop/weapon.json', (err) => {
        if (err) throw err
    })
    fs.unlink('./assets/shop/armor.json', (err) => {
        if (err) throw err
    })
    fs.unlink('./assets/shop/accessory.json', (err) => {
        if (err) throw err
    })
    fs.unlink('./assets/shop/consommable.json', (err) => {
        if (err) throw err
    })
    items(client);
    console.log("Items crées !")
    console.log("I'm ready Ningen");
    client.user.setActivity(`Donner des conseil a Rimuru Tempest`).catch(console.error);
    if (tokenDB.DBCONNECTION !== "mongodb://localhost:27017/test") client.channels.cache.get('769215379238027297').send("Dai Kenja est opérationel!");
    const guild = [];
    client.guilds.cache.map(e => guild.push(e));
    guild.forEach(async g => {
    });
}