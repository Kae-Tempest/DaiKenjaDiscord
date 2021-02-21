const {MessageEmbed} = require('discord.js');
module.exports = {
    run: message => {
    const monsters = [];
    const hostile = require('../../assets/npc/hostile.json');
    hostile.map(e => monsters.push(`**${e.name} (${e.category})** *Difficulty:${e.difficulty}*`));

    const embed = new MessageEmbed()
        .setTitle('Liste des monstres !')
        .setColor('RANDOM')
        .setDescription(`Voici les differents monstre combattable :\n${monsters.map(monster => `${monster}`).join("\n")}`)
        .setFooter(`Kono sekai no kamigami ni yoru to`)
    message.channel.send(embed)
    }, help: {
        name: 'monsterlist',
        aliases: ["monsterlist", "ml", "MONSTERLIST","ML","Monsterlist","Ml"],
        category: 'rpg',
        description: "affiche la liste des monstres",
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
}