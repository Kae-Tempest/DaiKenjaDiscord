const {MessageEmbed} = require('discord.js');
module.exports = {
    run: async (client, message) => {
        const items = [];
        const shop = require('../../assets/shop/consommable.json');
        const embed = new MessageEmbed()
            .setTitle('Bienvenue dans notre shop !')
            .setColor('RANDOM')
        shop.map(e => items.push(`${e.label}.**${e.name}** *(${e.cost})*`));
        embed.setDescription(`Voici les differentes armures disponible :\n${items.map(item => `${item}`).join("\n")}`)
        embed.setFooter('pensez à regarder le détail des objets ! ');
        client.channels.cache.get('781579158437888081').send(embed);
    }, help: {
        name: "armor",
        aliases: ["armor", "Armor", "ARMOR"],
        category: 'economy',
        description: "Affiche les armures",
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
}