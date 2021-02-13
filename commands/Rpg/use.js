const {capitalize} = require('../../function/other/string');
const getItemInfo = require('../../assets/shop/shop.json');

module.exports.run = async (client, message, args, userInfo) => {
    const q = args.join(" ");
    const userInventory = userInfo.inventory
    const userInventoryItemPosition = userInventory.indexOf(capitalize(q))
    if (userInventoryItemPosition === -1) return message.reply("Vous ne possédez pas cet objet dans votre inventaire (ou alors, vous l'avez mal orthographié)");
    const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(capitalize(q));
    let item = getItemInfo[itemInfoPosition].stats;
    const playerStats = userInfo.stats
    const playerStatsMax = userInfo.statsMax
    if (getItemInfo[itemInfoPosition].type === 'scroll') {
        const force = item.strength;
        const agi = item.agility;
        const intel = item.intelligence;
        const spirit = item.spirit
        const consti = item.constitution;
        const vita = item.vitality;

        userInventory.splice(userInventoryItemPosition, 1);
        client.updateUserInfo(message.member,{
            "users.$.inventory": userInventory,
            "users.$.stats.strength": playerStats.strength + force,
            "users.$.stats.agility": playerStats.agility + agi,
            "users.$.stats.intelligence": playerStats.intelligence + intel,
            "users.$.stats.spirit": playerStats.spirit + spirit,
            "users.$.stats.constitution": playerStats.constitution + consti,
            "users.$.stats.vitality": playerStats.vitality + vita,
            "users.$.statsMax.vitality": playerStatsMax.vitality + vita
        });

        if (vita === 0 && consti === 0 && spirit === 0 && intel === 0 && agi === 0) return message.reply(`Tu as gagné ${force} de force`)
        else if (vita === 0 && consti === 0 && spirit === 0 && intel === 0 && force === 0) return message.reply(`Tu as gagné ${agi} d'agilité`)
        else if (vita === 0 && consti === 0 && spirit === 0 && agi === 0 && force === 0) return message.reply(`Tu as gagné ${intel} d'intelligence`)
        else if (vita === 0 && consti === 0 && intel === 0 && agi === 0 && force === 0) return message.reply(`Tu as gagné ${spirit} de spirit`)
        else if (vita === 0 && spirit === 0 && spirit === 0 && agi === 0 && force === 0) return message.reply(`Tu as gagné ${consti} de constitution`)
        else if (consti === 0 && consti === 0 && spirit === 0 && agi === 0 && force === 0) return message.reply(`Tu as gagné ${vita} de vie`)
    }
    if (getItemInfo[itemInfoPosition].type === 'potion') {
        const healPoint = item.vitality;
        let heal
        if (playerStats.vitality === playerStatsMax.vitality) return message.reply('Tu as déjà toute ta vie !');
        if (playerStats.vitality + healPoint > playerStatsMax.vitality) {
            heal = playerStatsMax.vitality - playerStats.vitality;
        } else {
            heal = healPoint
        }
        userInventory.splice(userInventoryItemPosition, 1);
        client.updateUserInfo(message.member, {
            "users.$.inventory": userInventory,
            "users.$.stats.vitality": playerStats.vitality + heal
        });

        return message.reply(`Tu as bien bu ta potion ! tu as récupéré ${heal}HP`);
    } else return message.reply("Tu ne peux pas boire un objet !")
}

module.exports.help = {
    name: 'use',
    aliases: ["use","Use","USE"],
    category: 'rpg',
    description: 'Permet de boire une potion / d\'utiliser un parchemin ( scroll )',
    cd: 3,
    usage: "<object>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
}