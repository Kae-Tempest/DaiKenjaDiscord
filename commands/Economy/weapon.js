const {MessageEmbed} = require('discord.js');
module.exports = {
    run: async message => {
        const items = [];
        const shop = require('../../assets/shop/weapon.json');
        const embed = new MessageEmbed()
            .setTitle('Bienvenue dans notre shop !')
            .setColor('RANDOM')
        shop.map(e => items.push(`${e.label}.**${e.name}** *(${e.cost})*`));
        embed.setDescription(`Voici les differentes armes disponible :\n${items.map(item => `${item}`).join("\n")}`)
        embed.setFooter('pensez à regarder le détail des objets ! ');
        message.channel.send(embed)
    }, help: {
        name: "weapon",
        aliases: ["weapon", "Weapon", "WEAPON"],
        category: 'economy',
        description: "affiche les armes",
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
}