const {capitalize} = require('../../function/other/string');
const getItemInfo = require('../../assets/shop/shop.json');
const {calculateUserStatsEquip, calculateUserStatsUequip} = require('../../function/rpg/stats')

module.exports.run = async (client, message, args, userInfo) => {
    const q = args.join(" ");
    const userEquipment = userInfo.equipments;
    const userInventory = userInfo.inventory;
    const userInventoryItemPosition = userInventory.indexOf(capitalize(q))
    if (userInventoryItemPosition === -1) return message.reply("Vous ne possédez pas cet objet dans votre inventaire (ou alors, vous l'avez mal orthographié)");
    const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(capitalize(q));
    if (userEquipment[getItemInfo[itemInfoPosition].type] !== 'None') return message.reply("Tu as déjà un objet de ce type d'équiper !")
    await calculateUserStatsUequip(client, message);
    userEquipment[getItemInfo[itemInfoPosition].type] = userInventory[userInventoryItemPosition];
    userInventory.splice(userInventoryItemPosition, 1);
    client.updateUserInfo(message.member, {
        "users.$.equipments": userEquipment,
        "users.$.inventory": userInventory
    })
    await calculateUserStatsEquip(client, message);
    return message.reply(`Tu as bien équipé l'object !`)
};

module.exports.help = {
    name: 'equip',
    aliases: ["Equip","equip","EQUIP"],
    category: 'rpg',
    description: 'Equipe un objet sur votre personnage',
    cd: 1,
    usage: "<object>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
};