module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    const tirage = Date.now();
    const rdcCD = 2.16e+7;
    const tirageCD = player.rdc + rdcCD;
    const cdTime = rdcCD - (Date.now() - player.rdc)
    if (tirageCD > Date.now()) return message.reply(`Il reste ${Math.floor(cdTime / (1000 * 60 * 60) % 24)} hrs, ${Math.floor(cdTime / (1000 * 60) % 60)} minutes et ${Math.floor(cdTime / 1000 % 60)} secondes avant de pourvoir relancer la roue !`);

    let random = Math.floor(Math.random() * Math.floor(101))
    const user = message.guild.member(message.member)
    const userPo = await client.getUser(user);
    let recompense;
    if (random <= 10) {
        if (player.prestige === 0) {
            recompense = 1000
        } else {
            recompense = 1000 + (user.prestige * 1000 - 1000)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 20 || random > 10) {
        if (player.prestige) {
            recompense = 350
        } else {
            recompense = 350 + (user.prestige * 350 - 350)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 30 || random > 20) {
        if (player.prestige) {
            recompense = 150
        } else {
            recompense = 150 + (user.prestige * 150 - 150)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 40 || random > 30) {
        if (player.prestige === 0) {
            recompense = 75
        } else {
            recompense = 75 + (user.prestige * 75 - 75)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 50 || random > 40) {
        recompense = 0
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 60 || random > 50) {
        recompense = 0
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 70 || random > 60) {
        if (player.prestige === 0) {
            recompense = 75
        } else {
            recompense = 75 + (user.prestige * 75 - 75)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 80 || random > 70) {
        if (player.prestige === 0) {
            recompense = 150
        } else {
            recompense = 150 + (user.prestige * 150 - 150)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 90 || random > 80) {
        if (player.prestige === 0) {
            recompense = 350
        } else {
            recompense = 350 + (user.prestige * 350 - 350)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 100 || random > 90) {
        if (player.prestige === 0) {
            recompense = 1000
        } else {
            recompense = 1000 + (user.prestige * 1000 - 1000)
        }
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member, {
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
};

module.exports.help = {
    name: "roue",
    aliases: ["roue", "rdc"],
    category: 'misc',
    description: 'lance la roue de la chance',
    cd: 10,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: true
};
