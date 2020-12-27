const {monster} = require("../../function/createMonster");
const {items} = require("../../function/createItems");
const fs = require('fs');
module.exports = client => {
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
    items(client);
    console.log("Items crées !")
    console.log("I'm ready Ningen");
    client.user.setActivity(`Donner des conseil a Rimuru Tempest`).catch(console.error);
    //client.channels.cache.get('769215379238027297').send("Dai Kenja est opérationel!");
    const guild = [];
    client.guilds.cache.map(e => guild.push(e));
    guild.forEach(async g => {
        const data = await client.getGuild(g);
        if (!data) client.createGuild({guildID: g.id});
    });

}