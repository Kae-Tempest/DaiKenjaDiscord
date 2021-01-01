const {MessageEmbed} = require('discord.js');
const {capitalize} = require('../../function/other/string');

module.exports.run = async (client, message, args, userInfo) => {
    if (userInfo.inventory === undefined) {
        client.createMissingInfoOnUser(message.member, {
            "users.inventory": {"inventory": []}
        });
    }
    const shop = require('../../assets/shop/shop.json');
    const q = args.slice(1).join(" ")
    const position = shop.map(e => e.label).indexOf(q.toLowerCase());
    const item = shop[position];
    const userInventory = userInfo.inventory;

    if (q && position === -1) message.reply('Cet objet n\'existe pas! Vérifie l\'étale l\'ami !')

    if (q && position !== -1) {
        if (args[0] === "show") {
            const showEmbed = new MessageEmbed()
                .setTitle(`${item.name} `)
                .setColor('RANDOM')
                .setDescription(`**${item.description} (${item.cost}<:GoldCoin:781575067108507648>)** \n *L'item est de rang ${item.rank} et il est conseillé pour ${item.class}*`)
                .addField("Type:", `${item.type}`)
                .addField("stats:", `${Object.entries(item.stats).map(([key, value]) => `${capitalize(key)}: ${value}`).join(' | ')}`)
            message.channel.send(showEmbed);
        }
        if (args[0] === "buy") {
            try {
                message.channel.send(`Confirmez-vous l'achat de  \`${item.name.toLowerCase()}\` pour \`${item.cost}\`<:GoldCoin:781575067108507648>?! (oui)`);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {
                    max: 1, time: 5000, errors: ['time']
                });
                if (userInfo.po < item.cost) return message.reply("Tu n'as pas assez de <:GoldCoin:781575067108507648>");
                if (userEntry.first().content.toLowerCase() === "oui") {
                    const userPo = userInfo.po - item.cost;
                    client.updateUserInfo(message.member, {
                        "users.$.po": userPo
                    });
                    message.channel.send(`Merci de ton achat l'ami! Tu n'as plus que \`${userInfo.po - item.cost}\`<:GoldCoin:781575067108507648>`);
                    userInventory.push(item.name)
                    client.updateUserInfo(message.member, {
                        "users.$.inventory": userInventory
                    });
                }
                if (userEntry.first().content.toLowerCase() !== "oui") return message.reply ("Il faut répondre \`oui\` au bot si tu veux acheter l\'objets !")
            } catch (e) {
                message.channel.send(`Achat annulé. Merci de confirmé votre achat en répondant \`oui\` la prochaine fois!`)
            }
        }
    }
}

module.exports.help = {
    name: "shop",
    aliases: ["shop"],
    category: 'economy',
    description: "affiche le shop",
    cd: 3,
    usage: "[buy/show][<object>]",
    isUserAdmin: false,
    permission: false,
    args: true,
    profile: true
};