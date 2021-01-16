module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    const user = message.guild.member(message.member)
    const userPo = await client.getUser(user);
    const tirage = Date.now();
    const rdcCD = 2.16e+7;
    const tirageCD = player.rdc + rdcCD;
    const cdTime = rdcCD - (Date.now() - player.rdc)
    if (tirageCD > Date.now()) return message.reply(`Il reste ${Math.floor(cdTime / (1000 * 60 * 60) % 24)} hrs, ${Math.floor(cdTime / (1000 * 60) % 60)} minutes et ${Math.floor(cdTime / 1000 % 60)} secondes avant de pourvoir relancer la roue !`);
    let random = Math.floor(Math.random() * Math.floor(101))
    let recompense;

    function roue(po, min, max) {
        if (random <= max && random > min) {
            if (player.prestige === 0) {
                recompense = po
            } else {
                recompense = po + (player.prestige * po - po)
            }
            const newBalance = Number(userPo.po) + recompense;
            client.updateUserInfo(message.member, {
                "users.$.po": newBalance,
                "users.$.rdc": tirage
            })
            return message.reply(`Tu as gagné ${recompense}<:GoldCoin:781575067108507648>`);
        }
    }
    roue(1000, 0, 10);
    roue(350, 10, 20);
    roue(150, 20, 30);
    roue(75, 30, 40);
    roue(0, 40, 50);
    roue(0, 50, 60);
    roue(75, 60, 70);
    roue(150, 70, 80);
    roue(350, 80, 90);
    roue(1000, 90, 100);


};

module.exports.help = {
    name: "roue",
    aliases: ["roue", "rdc","Roue","Rdc","ROUE","RDC"],
    category: 'misc',
    description: 'lance la roue de la chance',
    cd: 1,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: true
};
