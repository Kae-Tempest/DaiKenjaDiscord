module.exports = {
    run: async (client, message) => {
    const player = await client.getUser(message.member);
    if (player.stats.vitality === 0) return message.reply("Tu ne peux pas te soigné a l'église ! Tu es mort !")
    if (player.stats.vitality === player.statsMax.vitality) return message.reply("tu as déjà toute ta vie !")
    function heal(lvlMax, lvlMin, healMax, cost) {
        if (player.level <= lvlMax && player.level > lvlMin) {
            if (player.po < cost) {
                message.reply("Tu n'as pas assez de sous pour payer le soin de l'église, essayer de prier plus fort la prochaine fois, peut etre que les dieux seront plus clément")
            } else {
                let heal;
                if (healMax + player.stats.vitality > player.statsMax.vitality) {
                    heal = player.statsMax.vitality - player.stats.vitality;
                } else {
                    heal = healMax
                }
                player.po -= cost
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": player.stats.vitality + heal,
                    "users.$.po": player.po
                })
                message.reply(`Tu as récuperer ${heal}HP grace a la bénédiction des dieux en échange de ${cost}<:GoldCoin:781575067108507648>`)
            }
        }
    }
    heal(10, 0, 50, 50);
    heal(20, 10, 100, 100);
    heal(30, 20, 200, 200);
    heal(40, 30, 300, 300);
    heal(50, 40, 400, 400);
    heal(60, 50, 500, 500);
    heal(70, 60, 600, 600);
    heal(80, 70, 700, 700);
    heal(90, 80, 800, 800);
    heal(99, 90, 900, 900);
    heal(100, 99, 1000, 1000);
    heal(1000, 100, 10000, 50000);
    }, help: {
        name: 'heal',
        aliases: ["heal","Heal","HEAL"],
        category: 'rpg',
        description: 'Soigne le joueur celon son niveaux (Cout : 50 à 50000<:GoldCoin:781575067108507648>) - [Le soin ne donneras pas plus de points de vie que tu peux en avoir]',
        cd: 3,
        usage: "",
        isUserAdmin: false,
        permissions: false,
        args: false,
        profile: true
    }
};