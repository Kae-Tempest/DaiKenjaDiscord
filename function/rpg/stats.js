const getItemInfo = require('../../assets/shop/shop.json');

const calculateUserStatsEquip = async (client, message) => {
    const userInfo = await client.getUser(message.member);
    const userStats = userInfo.stats;
    const userEquipment = userInfo.equipments;

    for (const property in userEquipment) {
        if (userEquipment[property] === 'None') continue;

        const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(userEquipment[property]);
        const itemStats = getItemInfo[itemInfoPosition].stats;
        for (stats in itemStats) {
            switch (stats) {
                case "strength":
                    client.updateUserInfo(message.member, {
                        "users.$.stats.strength": userStats.strength += itemStats[stats],
                    })
                    break;
                case "agility":
                    client.updateUserInfo(message.member, {
                        "users.$.stats.agility": userStats.agility += itemStats[stats],
                    })
                    break;
                case "intelligence":
                    client.updateUserInfo(message.member, {
                        "users.$.stats.intelligence": userStats.intelligence += itemStats[stats],
                    })
                    break;
                case "spirit":
                    client.updateUserInfo(message.member, {
                        "users.$.stats.spirit": userStats.spirit += itemStats[stats],
                    })
                    break;
                case "constitution":
                    client.updateUserInfo(message.member, {
                        "users.$.stats.constitution": userStats.constitution += itemStats[stats],
                    })
                    break;
                case "vitality":
                        client.updateUserInfo(message.member, {
                            "users.$.stats.vitality": userStats.vitality += itemStats[stats],
                            "users.$.statsMax.vitality": userStats.vitality
                        });
                    break;
            }
        }
    }
    return userStats;
};


const calculateUserStatsUequip = async (client, message) => {
    const userInfo = await client.getUser(message.member);
    const userStats2 = userInfo.stats;
    const userEquipment = userInfo.equipments;

    for (const property in userEquipment) {
        if (userEquipment[property] === 'None') continue;

        const itemInfoPosition = getItemInfo.map(e => e.name).indexOf(userEquipment[property]);
        const itemStats = getItemInfo[itemInfoPosition].stats;
        for (stats in itemStats) {
            switch (stats) {
                case "strength":
                    if (userStats2.strength > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.strength": userStats2.strength -= itemStats[stats],
                        })
                    }
                    if (userStats2.strength < 0) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.strength": 0,
                        })
                    }
                    break;
                case "agility":
                    if (userStats2.agility > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.agility": userStats2.agility -= itemStats[stats],
                        })
                    }
                    if (userStats2.agility < 0) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.agility": 0,
                        })
                    }
                    break;
                case "intelligence":
                    if (userStats2.intelligence > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.intelligence": userStats2.intelligence -= itemStats[stats],
                        })
                    }
                    if (userStats2.intelligence < 0) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.intelligence": 0,
                        })
                    }
                    break;
                case "spirit":
                    if (userStats2.spirit > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.spirit": userStats2.spirit -= itemStats[stats],
                        })
                    }
                    if (userStats2.spirit < 0) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.spirit": 0,
                        })
                    }
                    break;
                case "constitution":
                    if (userStats2.constitution > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.constitution": userStats2.constitution -= itemStats[stats],
                        })
                    }
                    if (userStats2.constitution < 0) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.constitution": userStats2.constitution = 0,
                        })
                    }
                    break;
                case "vitality":
                    if (userStats2.vitality > itemStats[stats]) {
                        client.updateUserInfo(message.member, {
                            "users.$.stats.vitality": userStats2.vitality -= itemStats[stats],
                            "users.$.statsMax.vitality": userStats2.vitality
                        })
                    }
                    if (userStats2.vitality < 50) {
                        client.updateUserInfo(message.member, {
                            "users.$.statsMax.vitality": 50
                        })
                    }
                    break;
            }
        }
    }
    return userStats2;
};


module.exports = {
    calculateUserStatsEquip,
    calculateUserStatsUequip
}
