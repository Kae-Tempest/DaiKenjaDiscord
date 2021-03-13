const {capitalize} = require('../../function/other/string')
module.exports = {
    run: async (client, message, args, userInfo) => {
        if (userInfo.inventory === undefined) {
            client.createMissingInfoOnUser(message.member, {"users.inventory": {"inventory": []}});
            return message.reply("Ton inventaire est vide !")
        }
        const shop = require('../../assets/shop/shop.json');
        const q = args.join(" ")
        const position = shop.map(e => e.name).indexOf(capitalize(q));
        const item = shop[position];
        const userInventory = userInfo.inventory;
        if (q && position === -1) message.reply('Cet objet n\'existe pas! Vérifie l\'étale l\'ami !')
        if (q && position !== -1) {
            try {
                const check = userInventory.indexOf(capitalize(q));
                if (check === -1) return message.reply("Tu ne possèdes pas cet objet !")
                message.channel.send(`Confirmez-vous la vente de  \`${item.name.toLowerCase()}\` pour \`${item.cost}\`<:GoldCoin:781575067108507648>?! (oui)`);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {max: 1, time: 5000, errors: ['time']});
                if (userEntry.first().content.toLowerCase() === "oui") {
                    const userPo = userInfo.po + item.cost;
                    client.updateUserInfo(message.member, {"users.$.po": userPo});
                    message.channel.send(`Merci de ta vente l'ami! Tu as maintenant \`${userInfo.po + item.cost}\`<:GoldCoin:781575067108507648>`);
                    const userInventory = userInfo.inventory;
                    userInventory.splice(check, 1)
                    client.updateUserInfo(message.member, {"users.$.inventory": userInventory});
                }
                if (userEntry.first().content.toLowerCase() !== "oui") return message.reply("Il faut répondre \`oui\` au bot si tu veux vendre ton objets !")
            } catch (e) {
                message.channel.send(`Vente annulé. Merci de confirmé votre vente en répondant \`oui\` la prochaine fois!`)
            }
        }
    }, help: {
        name: "sell",
        aliases: ["sell", "Sell", "SELL"],
        category: 'economy',
        description: "Permet de vendre un item",
        cd: 3,
        usage: "<object>",
        isUserAdmin: false,
        permission: false,
        args: true,
        profile: true
    }
}
