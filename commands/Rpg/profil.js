const {MessageEmbed} = require('discord.js');
const {capitalize} = require('../../function/string');
const classes = require("../../assets/rpg/classes.json");


module.exports.run = async (client, message, args, userInfo) => {
    if (!userInfo.class === "") return message.reply('tu dois d\'abord utiliser la commande \`setup\` pour créer ton personnage');

    const position = classes.map(e => e.name.toLowerCase()).indexOf(userInfo.class.toLowerCase());
    const classe = classes[position];
    const embed = new MessageEmbed()
        .setAuthor(`${message.author.username} | ${userInfo.class} de niveaux ${userInfo.level} et de prestige ${userInfo.prestige}`, message.author.displayAvatarURL())
        .setThumbnail(classe.icon)
        .setDescription(`${userInfo.description !== "" ? classe.description : userInfo.description}`)
        .addField("Statistique :",
            `${Object.entries(userInfo.stats).map(([key, value]) => `**${capitalize(key)}:** ${value}`).join('\n')}
            ${userInfo.experience} points d'experience`
        )
        .addField("Inventaire :",
            `${userInfo.po}<:GoldCoin:781575067108507648>
                   ${userInfo.inventory.lenght !== 0 ? userInfo.inventory.join(", ") : "L'iventaire est vide"}`
        )
        .addField("Equipement :", `${Object.entries(userInfo.equipments).map(([key, value]) => `**${capitalize(key)}:** ${value}`).join(' \n ')}`)

    message.channel.send(embed);
};

module.exports.help = {
    name: 'profile',
    aliases: ["profile", "profil"],
    category: 'rpg',
    description: 'Renvoie le profile de votre personnage',
    cd: 5,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false,
    profile: true
};