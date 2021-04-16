const evolveClasses = require ("../../assets/rpg/evolveclasses.json");
const {capitalize} = require ('../../function/other/string');
const classes = require ("../../assets/rpg/classes.json");
const {createCanvas, loadImage} = require ('canvas');
const { MessageAttachment } = require ('discord.js');

module.exports = {
    run: async (client, message, userInfo) => {
        if (userInfo.class === "") return message.reply('tu dois d\'abord utiliser la commande \`setup\` pour créer ton personnage');
        const player = await client.getUser(message.member);
        function exp(lvlmin, lvlmax, xp) {
            if (player.level <= lvlmax && player.level > lvlmin) {
                if(player.prestige === 0) if (player.experience < player.level * xp - 1) return  player.level * xp
                if (player.prestige === 1) if (player.experience < player.level * player.prestige * 10 * xp - 1) return player.level * player.prestige * 10 * xp;
                if (player.prestige === 2) if (player.experience < player.level * player.prestige * 50 * xp - 1) return player.level * player.prestige * 50 * xp;
                if (player.prestige === 3) if (player.experience < player.level * player.prestige * 100 * xp - 1) return player.level * player.prestige * 100 * xp;
                if (player.prestige === 4) if (player.experience < player.level * player.prestige * 150 * xp - 1) return player.level * player.prestige * 150 * xp;
                if (player.prestige === 5) if (player.experience < player.level * player.prestige * 200 * xp - 1) return player.level * player.prestige * 200 * xp
                if (player.prestige === 6) if (player.experience < player.level * player.prestige * 250 * xp - 1) return player.level * player.prestige * 250 * xp;
                if (player.prestige === 7) if (player.experience < player.level * player.prestige * 300 * xp - 1) return player.level * player.prestige * 300 * xp;
                if (player.prestige === 8) if (player.experience < player.level * player.prestige * 350 * xp - 1) return player.level * player.prestige * 350 * xp;
                if (player.prestige === 9) if (player.experience < player.level * player.prestige * 400 * xp - 1) return player.level * player.prestige * 400 * xp;
                if (player.prestige === 10) if (player.experience < player.level * player.prestige * 500 * xp - 1) return player.level * player.prestige * 500 * xp;
            }
            return 0;
        }
        let exptotal = [
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
        exptotal.forEach(e => {
            exptotalFinal += exp
        })

        let position = classes.map(e => e.name.toLowerCase()).indexOf(player.class.toLowerCase());
        let classe = classes[position];
        if (position === -1) {
            position = evolveClasses.map(e => e.name.toLowerCase()).indexOf(player.class.toLowerCase());
            classe = evolveClasses[position];
        }
        const canvas = createCanvas(1204,1504);
        const ctx = canvas.getContext('2d');
        const classIcon = await loadImage(classe.icon);
        const GoldCoin = await loadImage("https://cdn.discordapp.com/attachments/587692066411249688/819592773861900328/I_GoldCoin.png")

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF"
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "#222";
        ctx.fillRect(2,2,1200,1500);
        ctx.globalAlpha = 1;
        ctx.strokeRect(2,2,1200,1500);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText(`${message.author.username} | ${player.class} de niveau ${player.level} et de prestige ${player.prestige}`,30,50);
        ctx.drawImage(classIcon,990 ,10 ,210, 360);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("Statistique :", 30,150);
        ctx.fillText(`${Object.entries(player.stats).map(([key, value]) => `${capitalize(key)}: ${value}`).join('\n')}`,40, 190);

        ctx.fillText("Expérience :", 30,430);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF"
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "#222";
        ctx.fillRect(30,450,1140,30);
        ctx.globalAlpha = 1;
        ctx.strokeRect(30,450,1140,30);

        ctx.fillStyle = "#FF0000";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(30,451, (player.experience / exptotalFinal ) * 1140, 27);

        ctx.globalAlpha = 1;
        ctx.textAlign = "center"
        ctx.fillStyle = "#FFF";
        ctx.fillText(`${player.experience === 0 ? 0 : (( player.experience / exptotalFinal) * 100).toFixed(2)}%`, 630,475)

        ctx.textAlign = "start"
        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("Attribut :", 30,550);
        ctx.fillText(`${player.attribut.length !== 0 ? player.attribut.join(" | ") : "Vous n'avez aucun attribut"}`, 40,600);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("Equipement :", 30,640);
        ctx.fillText(`${Object.entries(player.equipments).map(([key, value]) => `${capitalize(key)}: ${value}`).join('\n')}`, 40,690);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("Inventaire :", 550,550);
        ctx.drawImage(GoldCoin,560,575)
        ctx.fillText(`${player.po}`, 595,603);
        ctx.font = "24px Arial";
        ctx.fillText(`${player.inventory.length > 31 ? "Votre inventaire est plein" : `${player.inventory.length !== 0 ? player.inventory.join("\n") : "L'inventaire est vide"}`}`, 560, 635)

        
        const attachment = new MessageAttachment(canvas.toBuffer(), "exp.png");
        message.channel.send(attachment)

    }, help: {
        name: 'profile',
        aliases: ["profile", "profil","Profile","Profil","PROFILE","PROFIL"],
        category: 'rpg',
        description: 'Affiche le profile de votre personnage',
        cd: 5,
        usage: "",
        isUserAdmin: false,
        permissions: false,
        args: false,
        profile: true
    }
};