module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    const tirage = Date.now();
    const rdcCD = 2.16e+7;
    const tirageCD = player.rdc + rdcCD;
    const cdTime = rdcCD - (Date.now() - player.rdc)
    if (tirageCD > Date.now() ) return message.reply(`Il reste ${Math.floor(cdTime / (1000*60*60) % 24)} hrs, ${Math.floor(cdTime / (1000*60) % 60)} minutes et ${Math.floor(cdTime / 1000 % 60)} secondes avant de pourvoir relancer la roue !`);

    let random = Math.floor(Math.random() * Math.floor(101))
    const user = message.guild.member(message.member)
    const userPo = await client.getUser(user);

    if (random <= 10) {
        const recompense = 1000
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance,
            "users.$.rdc": tirage
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 20 || random > 10) {
        const recompense = 350
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 30 || random > 20) {
        const recompense = 150
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 40 || random > 30) {
        const recompense = 75
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 50 || random > 40) {
        const recompense = 0
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 60 || random > 50) {
        const recompense = 0
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 70 || random > 60) {
        const recompense = 75
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 80 || random > 70) {
        const recompense = 150
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 90 || random > 80) {
        const recompense = 350
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
        })
        return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
    }
    if (random <= 100 || random > 90) {
        const recompense = 1000
        const newBalance = Number(userPo.po) + recompense;
        client.updateUserInfo(message.member,{
            "users.$.po": newBalance
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
