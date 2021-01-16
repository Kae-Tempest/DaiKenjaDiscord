const {capitalize} = require('../../function/other/string');
const getItemInfo = require('../../assets/shop/shop.json');

module.exports.run = async (client, message, args, userInfo) => {
    const q = args.join(" ");
    const userInventory = userInfo.inventory
    const userInventoryItemPosition = userInventory.indexOf(capitalize(q))
    if (userInfo.stats.vitality === userInfo.statsMax.vitality) return message.reply('Tu as déjà toute ta vie !');
    if (userInventoryItemPosition === -1) return message.reply("Vous ne possédez pas cet objet dans votre inventaire (ou alors, vous l'avez mal orthographié)");
    const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(capitalize(q));
    const healPoint = getItemInfo[itemInfoPosition].stats.vitality;
    let heal
    if (userInfo.stats.vitality + healPoint > userInfo.statsMax.vitality) {
        heal = userInfo.statsMax.vitality - userInfo.stats.vitality;
    } else {
        heal = healPoint
    }
    if (q[getItemInfo[itemInfoPosition].type] === 'potion') return message.reply("Tu ne peux pas boire un objet !")
    userInventory.splice(userInventoryItemPosition, 1);
    client.updateUserInfo(message.member, {
        "users.$.inventory": userInventory,
        "users.$.stats.vitality": userInfo.stats.vitality + heal
    });

    return message.reply(`Tu as bien bu ta potion ! tu as récupéré ${heal}HP`);

}

module.exports.help = {
    name: 'use',
    aliases: ["use","Use","USE"],
    category: 'rpg',
    description: 'Permet de boire une potion',
    cd: 1,
    usage: "<object>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
}