module.exports.run = async (client, message) => {
    const player = await client.getUser(message.member);
    let PlayerHP = player.stats.vitality;
    let PlayerMaxHP = player.statsMax.vitality;

    if (PlayerHP > 0) return message.reply("Tu es déjà vivant, n'abuse pas des pouvoir des pourvoir de Dieu");

    function ressurection(lvlmin, lvlmax, cost) {
        if (player.level >= lvlmax && player.level < lvlmin) {
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

    //let rez = [{lvlmin:0,lvlmax:10,cost:250}];
    //$res = array( 0 => array(10,250), 10 => array(20, 1000), 20 , 30);

    ressurection(0, 10, 250);
    ressurection(10, 20, 1000);
    ressurection(20, 30, 5000);
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