const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message) => {

    const items = [];
    const shop = require('../../assets/shop/accessory.json');
    const embed = new MessageEmbed()
        .setTitle('Bienvenue dans notre shop !')
        .setColor('RANDOM')
    shop.map(e => items.push(`${e.label}.**${e.name}** *(${e.cost})*`));
    embed.setDescription(`Voici les differents accesoires disponible :\n${items.map(item => `${item}`).join("\n")}`)
    embed.setFooter('pensez à regarder le détail des objets ! ');
    message.channel.send(embed)
}

module.exports.help = {
    name: "accessory",
    aliases: ["accessory","acc","ACCESSORY","ACC","Accessory","Acc"],
    category: 'economy',
    description: "affiche les accesoires",
    cd: 3,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: false
};