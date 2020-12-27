const {capitalize} = require('../../function/string');
const getItemInfo = require('../../assets/shop/shop.json');
const {calculateUserStatsEquip, calculateUserStatsUequip} = require('../../function/stats');

module.exports.run = async (client, message, args, userInfo) => {
    const q = args.join(" ");
    const userEquipment = userInfo.equipments;
    const userInventory = userInfo.inventory;
    const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(capitalize(q));
    if (itemInfoPosition === -1) return message.reply("Cet objet n'existe pas !")
    if (userEquipment[getItemInfo[itemInfoPosition].type] !== capitalize(q)) return message.reply("Cette objet n'est pas équipé");
    userEquipment[getItemInfo[itemInfoPosition].type] = 'None'
    userInventory.push(capitalize(q));
    await calculateUserStatsUequip(client, message);
    client.updateUserInfo(message.member, {
        "users.$.equipments": userEquipment,
        "users.$.inventory": userInventory
    })
    await calculateUserStatsEquip(client, message);
    return message.reply(`Tu as bien enlever l'objet!`);
};

module.exports.help = {
    name: 'uequip',
    aliases: ["uequip", "unequi"],
    category: 'rpg',
    description: 'Range un objet de votre personnage dans l\'inventaire',
    cd: 1,
    usage: "<object>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
};