const {MessageEmbed} = require ('discord.js');
const { capitalize } = require ('../../function/other/string');
module.exports = {
    run: (client, message, args) => {
    const monsters = [];
    const hostile = require('../../assets/npc/hostile.json');
    hostile.map(e => monsters.push(`**${e.name} (${e.category})** *Difficulty:${e.difficulty}*`));
    if(args[0] === "show"){
        const q = args.slice(1).join(" ")
        const position = hostile.map(n => n.name).indexOf(capitalize(q))
        const hostiles = hostile[position]
        if(q && position === -1) return message.reply("Ce monstre n'existe pas !")
        const showEmbed = new MessageEmbed()
        .setTitle(`${hostiles.name} `)
        .setColor('RANDOM')
        .addField("Type:", `${hostiles.type}`)
        .addField("stats:", `${Object.entries(hostiles.stats).map(([key, value]) => `${capitalize(key)}: ${value}`).join(' | ')}`)
        .addField("stats:", `${Object.entries(hostiles.attribut).map(([key, value]) => `${capitalize(key)}: ${value}`).join(' | ')}`)
    message.channel.send(showEmbed);
    } else {
    const embed = new MessageEmbed()
        .setTitle('Liste des monstres !')
        .setColor('RANDOM')
        .setDescription(`Voici les differents monstre combattable :\n${monsters.map(monster => `${monster}`).join("\n")}`)
        .setFooter(`Kono sekai no kamigami ni yoru to`)
    message.channel.send(embed)
    }
    }, help: {
        name: 'monsterlist',
        aliases: ["monsterlist", "ml", "MONSTERLIST","ML","Monsterlist","Ml"],
        category: 'rpg',
        description: "Affiche la liste des monstres",
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
}