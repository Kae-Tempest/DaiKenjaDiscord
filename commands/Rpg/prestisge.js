module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    let cost;
    for (let i = 0; i <= 9; i++) {
        if (i === player.prestige) {
            cost = (i + 1) * 1000000000
        }
        if (i === 0) {
            cost = 1000000000
        }
    }

    if (player.level !== 1000) return message.reply(`tu ne peux pas monter en prestige car ton niveaux est trop faible ${player.level} < 1000`);
    if (player.po < cost) return message.reply(`tu n'as pas assez de <:GoldCoin:781575067108507648> pour passer un prestige`)
    if (player.prestige === 10) return message.reply("Tu as atteint le prestige max !")

    if (player.level === 1000 && player.po >= cost) {
        try {
            message.channel.send(`Voulez-vous monter en prestige et reset votre niveaux en payant ${cost}<:GoldCoin:781575067108507648>?! \`(oui)\``);
            const filter = m => (message.author.id === m.author.id);
            const userEntry = await message.channel.awaitMessages(filter, {
                max: 1, time: 5000, errors: ['time']
            });
            if (userEntry.first().content.toLowerCase() === "oui") {
                client.updateUserInfo(message.member, {
                    "users.$.level": 1,
                    "users.$.prestige": player.prestige += 1,
                    "users.$.po": player.po -= cost
                });
                return message.reply(`Tu es maintenant prestige ${player.prestige}`);
            }
            if (userEntry.first().content.toLowerCase() !== "oui") return message.reply("Il faut répondre \`oui\` au bot si tu veux monter en prestige !")
        } catch (e) {
            message.channel.send(`Montée en prestige annulé, répond \`oui\` la prochaine fois!`)
        }
    }
};

module.exports.help = {
    name: 'prestige',
    category: 'rpg',
    description: 'Permet de reset le niveaux de la classe mais en gardant les stats',
    cd: 1,
    usage: "<object>",
    isUserAdmin: false,
    permissions: false,
    args: false,
    profile: true
};