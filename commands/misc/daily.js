module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    const daily = Date.now();
    const dayCD = 8.64e+7;
    const dailyCD = player.daily + dayCD;
    const cdTime = dayCD - (Date.now() - player.daily)
    if (dailyCD > Date.now()) return message.reply(`Il reste ${Math.floor(cdTime / (1000 * 60 * 60) % 24)} hrs, ${Math.floor(cdTime / (1000 * 60) % 60)} minutes et ${Math.floor(cdTime / 1000 % 60)} secondes avant de pourvoir recupérer la prochaine récompense !`);

    function recompense() {
        let pay;
        if (player.prestige === 0) {
            pay = 250
        } else {
            pay = 250 * (player.prestige +1 )
        }
        return pay
    }

    const newBalance = player.po + recompense();

    client.updateUserInfo(message.member, {
        "users.$.po": newBalance,
        "users.$.daily": daily
    })
    return message.reply("Tu as bien pris ta récompense journalière de 250<:GoldCoin:781575067108507648> ! À demain :)")
};

module.exports.help = {
    name: "daily",
    aliases: ["daily"],
    category: 'misc',
    description: 'Paye pour les combatant !',
    cd: 1,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: true
};
