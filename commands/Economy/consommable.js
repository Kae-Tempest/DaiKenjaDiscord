const {MessageEmbed} = require('discord.js');
module.exports = {
    run: async message => {
        const items = [];
        const shop = require('../../assets/shop/consommable.json');
        const embed = new MessageEmbed()
            .setTitle('Bienvenue dans notre shop !')
            .setColor('RANDOM')
        shop.map(e => items.push(`${e.label}.**${e.name}** *(${e.cost})*`));
        embed.setDescription(`Voici les differentes potions disponible :\n${items.map(item => `${item}`).join("\n")}`)
        embed.setFooter('pensez à regarder le détail des objets ! ');
        message.channel.send(embed)
    }, help: {
        name: "consomable",
        aliases: ["consomable", "cons", "Consomable", "Cons", "CONSOMABLE", "CONS"],
        category: 'economy',
        description: "affiche les potions",
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
}