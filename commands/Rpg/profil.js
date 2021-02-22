const {MessageEmbed, User} = require('discord.js');
const {capitalize} = require('../../function/other/string');
const classes = require("../../assets/rpg/classes.json");

module.exports = {
    run: async (client, message, userInfo) => {
        if (userInfo.class === "") return message.reply('tu dois d\'abord utiliser la commande \`setup\` pour créer ton personnage');
        const player = await client.getUser(message.member);
        function exp(lvlmin, lvlmax, exp) {
            if (player.level <= lvlmax && player.level > lvlmin) {
                if(player.prestige === 0) if (player.experience < player.level * exp - 1) return  player.level * exp
                if (player.prestige === 1) if (player.experience < player.level * player.prestige * 10 * exp - 1) return  player.level * player.prestige * 10 * exp;
                if (player.prestige === 2) if (player.experience < player.level * player.prestige * 50 * exp - 1) return  player.level * player.prestige * 50 * exp;
                if (player.prestige === 3) if (player.experience < player.level * player.prestige * 100 * exp - 1) return  player.level * player.prestige * 100 * exp;
                if (player.prestige === 4) if (player.experience < player.level * player.prestige * 150 * exp - 1) return  player.level * player.prestige * 150 * exp;
                if (player.prestige === 5) if (player.experience < player.level * player.prestige * 200 * exp - 1) return player.level * player.prestige * 200 * exp
                if (player.prestige === 6) if (player.experience < player.level * player.prestige * 250 * exp - 1) return  player.level * player.prestige * 250 * exp;
                if (player.prestige === 7) if (player.experience < player.level * player.prestige * 300 * exp - 1) return  player.level * player.prestige * 300 * exp;
                if (player.prestige === 8) if (player.experience < player.level * player.prestige * 350 * exp - 1) return  player.level * player.prestige * 350 * exp;
                if (player.prestige === 9) if (player.experience < player.level * player.prestige * 400 * exp - 1) return  player.level * player.prestige * 400 * exp;
                if (player.prestige === 10) if (player.experience < player.level * player.prestige * 500 * exp - 1) return player.level * player.prestige * 500 * exp;
            }
            return 0;
        }
        exptotal = [
            exp(0, 10, 250),exp(10, 20, 500),exp(30, 40, 1000),exp(40, 50, 3000),exp(50, 60, 5000),exp(60, 70, 7000),exp(70, 80, 9000),exp(80, 90, 15000),exp(90, 100, 20000),
            exp(100, 110, 30000),exp(110, 120, 40000),exp(120, 130, 50000),exp(130, 140, 60000),exp(140, 150, 70000),exp(150, 160, 80000),exp(160, 170, 90000),exp(170, 180, 100000),
            exp(180, 190, 110000),exp(190, 200, 120000),exp(200, 210, 130000),exp(210, 220, 140000),exp(220, 230, 150000),exp(230, 240, 160000),exp(240, 250, 170000),exp(250, 260, 180000),
            exp(260, 270, 190000),exp(270, 280, 200000),exp(280, 290, 210000),exp(290, 300, 220000),exp(300, 310, 230000),exp(310, 320, 240000),exp(320, 330, 250000),exp(330, 340, 260000),
            exp(340, 350, 270000),exp(350, 360, 280000),exp(360, 370, 290000),exp(370, 380, 300000),exp(380, 390, 310000),exp(390, 400, 320000),exp(400, 410, 330000),exp(410, 420, 340000),
            exp(420, 430, 350000),exp(430, 440, 360000),exp(440, 450, 370000),exp(450, 460, 380000),exp(460, 470, 390000),exp(470, 480, 400000),exp(480, 490, 410000),exp(490, 500, 420000),
            exp(500, 510, 430000),exp(510, 520, 440000),exp(520, 530, 450000),exp(530, 540, 460000),exp(540, 550, 470000),exp(550, 560, 480000),exp(560, 570, 490000),exp(570, 580, 500000),
            exp(580, 590, 510000),exp(590, 600, 520000),exp(600, 610, 530000),exp(610, 620, 540000),exp(620, 630, 550000),exp(630, 640, 560000),exp(640, 650, 570000),exp(650, 660, 580000),
            exp(660, 670, 590000),exp(670, 680, 600000),exp(680, 690, 610000),exp(690, 700, 620000),exp(700, 710, 630000),exp(710, 720, 640000),exp(720, 730, 650000),exp(730, 740, 660000),
            exp(740, 750, 670000),exp(750, 760, 680000),exp(760, 770, 690000),exp(770, 780, 700000),exp(780, 790, 710000),exp(790, 800, 720000),exp(800, 810, 730000),exp(810, 820, 740000),
            exp(820, 830, 750000),exp(830, 840, 760000),exp(840, 850, 770000),exp(850, 860, 780000),exp(860, 870, 790000),exp(870, 880, 800000),exp(880, 890, 810000),exp(890, 900, 820000),
            exp(900, 910, 830000),exp(910, 920, 840000),exp(920, 930, 850000),exp(930, 940, 860000),exp(940, 950, 870000),exp(950, 960, 880000),exp(960, 970, 890000),exp(970, 980, 900000),
            exp(980, 990, 910000),exp(990, 1000, 920000)
        ]
        let exptotalFinal = 0
        exptotal.forEach(exp => {
            exptotalFinal += exp
        })
        const position = classes.map(e => e.name.toLowerCase()).indexOf(player.class.toLowerCase());
        const classe = classes[position];
        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} | ${player.class} de niveau ${player.level} et de prestige ${player.prestige}`, message.author.displayAvatarURL())
            .setThumbnail(classe.icon)
            .setDescription(`${player.description !== "" ? classe.description : player.description}`)
            .addField("Statistique :",
                `${Object.entries(player.stats).map(([key, value]) => `**${capitalize(key)}:** ${value}`).join('\n')}
                ${player.experience} points d'experiences (${player.experience === 0 ? 0 : (( player.experience / exptotalFinal) * 100).toFixed(2)}%)`
            )
            .addField("Inventaire :",
                `${player.po}<:GoldCoin:781575067108507648>
                    ${player.inventory.length !== 0 ? player.inventory.join(", ") : "L'inventaire est vide"}`
            )
            .addField("Equipement :", `${Object.entries(player.equipments).map(([key, value]) => `**${capitalize(key)}:** ${value}`).join(' \n ')}`)
        message.channel.send(embed);
    }, help: {
        name: 'profile',
        aliases: ["profile", "profil","Profile","Profil","PROFILE","PROFIL"],
        category: 'rpg',
        description: 'Renvoie le profile de votre personnage',
        cd: 5,
        usage: "",
        isUserAdmin: false,
        permissions: false,
        args: false,
        profile: true
    }
};