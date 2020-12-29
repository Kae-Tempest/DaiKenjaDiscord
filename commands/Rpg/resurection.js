module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    let PlayerHP = player.stats.vitality;
    let PlayerMaxHP = player.statsMax.vitality;

    if (PlayerHP > 0) return message.reply("Tu es déjà vivant, n'abuse pas des pouvoir des pourvoir de Dieu");

    function ressurection(lvlmin, lvlmax, cost) {
        if (player.level <= lvlmax && player.level > lvlmin) {
            if (player.po < cost) {
                message.reply("Tu n'as pas assez de <:GoldCoin:781575067108507648> pour te résuciter ! (Tu peux aller vendre des items pour en avoir assez)")
            } else {
                player.po -= cost
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": PlayerMaxHP,
                    "userS.po": player.po
                });
                return message.reply("Bon retourn parmis nous ! Fait pmus attetion la prochaine fois");
            }
        }
    }

    ressurection(0, 10, 250);
    ressurection(10, 20, 1000);
    ressurection(20, 30, 5000);
    ressurection(30, 40, 8000);
    ressurection(40, 50, 10000);
    ressurection(50, 60, 12000);
    ressurection(60, 70, 15000);
    ressurection(70, 80, 18000);
    ressurection(80, 90, 20000);
    ressurection(90, 100, 50000);
    ressurection(100, 200, 100000);
    ressurection(200, 300, 200000);
    ressurection(300, 400, 300000);
    ressurection(400, 500, 400000);
    ressurection(500, 600, 500000);
    ressurection(600, 700, 600000);
    ressurection(700, 800, 700000);
    ressurection(800, 900, 800000);
    ressurection(900, 999, 900000);
    ressurection(999, 1000, 1000000);
};

module.exports.help = {
    name: 'resurection',
    aliases: ["resurection", "res", "rez"],
    category: 'rpg',
    description: 'Rend la vie au joueur (Cout : 250<:GoldCoin:781575067108507648>)',
    cd: 3,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false,
    profile: true
};