const { levelup, isWhithin, prestigeForest } = require('./levelupduo');

const battleduo = async (client, message, player, player2, hostile, user) => {
    if (player.stats.vitality <= 0) return message.reply('Tu ne peux pas combattre sans HP');

    async function level() {
        while (player.level !== 0 && player.level !== 1000 && player2.level !== 0 && player2.level !== 1000) {
            if (isWhithin(player, 0, 10) || isWhithin(player2, 0, 10)) {
                if (prestigeForest(player, 250) && prestigeForest(player2, 250)) break;
            } else if (isWhithin(player, 10, 20) || isWhithin(player2, 10, 20)) {
                if (prestigeForest(player, 500) && prestigeForest(player2, 500)) break;
            } else if (isWhithin(player, 20, 30) || isWhithin(player2, 20, 30)) {
                if (prestigeForest(player, 750) && prestigeForest(player2, 750)) break;
            } else if (isWhithin(player, 30, 40) || isWhithin(player2, 30, 40)) {
                if (prestigeForest(player, 1000) && prestigeForest(player2, 1000)) break;
            } else if (isWhithin(player, 40, 50) || isWhithin(player2, 40, 50)) {
                if (prestigeForest(player, 3000) && prestigeForest(player2, 3000)) break;
            } else if (isWhithin(player, 50, 60) || isWhithin(player2, 50, 60)) {
                if (prestigeForest(player, 5000) && prestigeForest(player2, 5000)) break;
            } else if (isWhithin(player, 60, 70) || isWhithin(player2, 60, 70)) {
                if (prestigeForest(player, 7000) && prestigeForest(player2, 7000)) break;
            } else if (isWhithin(player, 70, 80) || isWhithin(player2, 70, 80)) {
                if (prestigeForest(player, 9000) && prestigeForest(player2, 9000)) break;
            } else if (isWhithin(player, 80, 90) || isWhithin(player2, 80, 90)) {
                if (prestigeForest(player, 15000) && prestigeForest(player, 15000)) break;
            } else if (isWhithin(player, 90, 100) || isWhithin(player2, 90, 100)) {
                if (prestigeForest(player, 20000) && prestigeForest(player2, 20000)) break;
            } else if (isWhithin(player, 100, 110) || isWhithin(player2, 100, 110)) {
                if (prestigeForest(player, 30000) && prestigeForest(player2, 30000)) break;
            } else if (isWhithin(player, 110, 120) || isWhithin(player2, 110, 120)) {
                if (prestigeForest(player, 40000) && prestigeForest(player2, 40000)) break;
            } else if (isWhithin(player, 120, 130) || isWhithin(player2, 120, 130)) {
                if (prestigeForest(player, 50000) && prestigeForest(player2, 50000)) break;
            } else if (isWhithin(player, 130, 140) || isWhithin(player2, 130, 140)) {
                if (prestigeForest(player, 60000) && prestigeForest(player2, 60000)) break;
            } else if (isWhithin(player, 140, 150) || isWhithin(player2, 140, 150)) {
                if (prestigeForest(player, 70000) && prestigeForest(player2, 70000)) break;
            } else if (isWhithin(player, 150, 160) || isWhithin(player2, 150, 160)) {
                if (prestigeForest(player, 80000) && prestigeForest(player2, 80000)) break;
            } else if (isWhithin(player, 160, 170) || isWhithin(player2, 160, 170)) {
                if (prestigeForest(player, 90000) && prestigeForest(player2, 90000)) break;
            } else if (isWhithin(player, 170, 180) || isWhithin(player2, 170, 180)) {
                if (prestigeForest(player, 100000) && prestigeForest(player2, 100000)) break;
            } else if (isWhithin(player, 180, 190) || isWhithin(player2, 180, 190)) {
                if (prestigeForest(player, 110000) && prestigeForest(player2, 110000)) break;
            } else if (isWhithin(player, 190, 200) || isWhithin(player2, 190, 200)) {
                if (prestigeForest(player, 120000) && prestigeForest(player2, 120000)) break;
            } else if (isWhithin(player, 200, 210) || isWhithin(player2, 200, 210)) {
                if (prestigeForest(player, 130000) && prestigeForest(player2, 130000)) break;
            } else if (isWhithin(player, 210, 220) || isWhithin(player2, 210, 220)) {
                if (prestigeForest(player, 140000) && prestigeForest(player2, 140000)) break;
            } else if (isWhithin(player, 220, 230) || isWhithin(player2, 220, 230)) {
                if (prestigeForest(player, 150000) && prestigeForest(player2, 150000)) break;
            } else if (isWhithin(player, 230, 240) || isWhithin(player2, 230, 240)) {
                if (prestigeForest(player, 160000) && prestigeForest(player2, 160000)) break;
            } else if (isWhithin(player, 240, 250) || isWhithin(player2, 240, 250)) {
                if (prestigeForest(player, 170000) && prestigeForest(player2, 170000)) break;
            } else if (isWhithin(player, 250, 260) || isWhithin(player2, 250, 260)) {
                if (prestigeForest(player, 180000) && prestigeForest(player2, 180000)) break;
            } else if (isWhithin(player, 260, 270) || isWhithin(player2, 260, 270)) {
                if (prestigeForest(player, 190000) && prestigeForest(player2, 190000)) break;
            } else if (isWhithin(player, 270, 280) || isWhithin(player2, 270, 280)) {
                if (prestigeForest(player, 200000) && prestigeForest(player2, 200000)) break;
            } else if (isWhithin(player, 280, 290) || isWhithin(player2, 280, 290)) {
                if (prestigeForest(player, 210000) && prestigeForest(player2, 210000)) break;
            } else if (isWhithin(player, 290, 300) || isWhithin(player2, 290, 300)) {
                if (prestigeForest(player, 220000) && prestigeForest(player2, 220000)) break;
            } else if (isWhithin(player, 300, 310) || isWhithin(player2, 300, 310)) {
                if (prestigeForest(player, 230000) && prestigeForest(player2, 230000)) break;
            } else if (isWhithin(player, 310, 320) || isWhithin(player2, 310, 320)) {
                if (prestigeForest(player, 240000) && prestigeForest(player2, 240000)) break;
            } else if (isWhithin(player, 320, 330) || isWhithin(player2, 320, 330)) {
                if (prestigeForest(player, 250000) && prestigeForest(player2, 250000)) break;
            } else if (isWhithin(player, 330, 340) || isWhithin(player2, 330, 340)) {
                if (prestigeForest(player, 260000) && prestigeForest(player2, 260000)) break;
            } else if (isWhithin(player, 340, 350) || isWhithin(player2, 340, 350)) {
                if (prestigeForest(player, 270000) && prestigeForest(player2, 270000)) break;
            } else if (isWhithin(player, 350, 360) || isWhithin(player2, 350, 360)) {
                if (prestigeForest(player, 280000) && prestigeForest(player2, 280000)) break;
            } else if (isWhithin(player, 360, 370) || isWhithin(player2, 360, 370)) {
                if (prestigeForest(player, 290000) && prestigeForest(player2, 290000)) break;
            } else if (isWhithin(player, 370, 380) || isWhithin(player2, 370, 380)) {
                if (prestigeForest(player, 300000) && prestigeForest(player2, 300000)) break;
            } else if (isWhithin(player, 380, 390) || isWhithin(player2, 380, 390)) {
                if (prestigeForest(player, 310000) && prestigeForest(player2, 310000)) break;
            } else if (isWhithin(player, 390, 400) || isWhithin(player2, 390, 400)) {
                if (prestigeForest(player, 320000) && prestigeForest(player2, 320000)) break;
            } else if (isWhithin(player, 400, 410) || isWhithin(player2, 400, 410)) {
                if (prestigeForest(player, 330000) && prestigeForest(player2, 330000)) break;
            } else if (isWhithin(player, 410, 420) || isWhithin(player2, 410, 420)) {
                if (prestigeForest(player, 340000) && prestigeForest(player2, 340000)) break;
            } else if (isWhithin(player, 420, 430) || isWhithin(player2, 420, 430)) {
                if (prestigeForest(player, 350000) && prestigeForest(player2, 350000)) break;
            } else if (isWhithin(player, 430, 440) || isWhithin(player2, 430, 440)) {
                if (prestigeForest(player, 360000) && prestigeForest(player2, 360000)) break;
            } else if (isWhithin(player, 440, 450) || isWhithin(player2, 440, 450)) {
                if (prestigeForest(player, 370000) && prestigeForest(player2, 370000)) break;
            } else if (isWhithin(player, 450, 460) || isWhithin(player2, 450, 460)) {
                if (prestigeForest(player, 380000) && prestigeForest(player2, 380000)) break;
            } else if (isWhithin(player, 460, 470) || isWhithin(player2, 460, 470)) {
                if (prestigeForest(player, 390000) && prestigeForest(player2, 390000)) break;
            } else if (isWhithin(player, 470, 480) || isWhithin(player2, 470, 480)) {
                if (prestigeForest(player, 400000) && prestigeForest(player2, 400000)) break;
            } else if (isWhithin(player, 480, 490) || isWhithin(player2, 480, 490)) {
                if (prestigeForest(player, 410000) && prestigeForest(player2, 410000)) break;
            } else if (isWhithin(player, 490, 500) || isWhithin(player2, 490, 500)) {
                if (prestigeForest(player, 420000) && prestigeForest(player2, 420000)) break;
            } else if (isWhithin(player, 500, 510) || isWhithin(player2, 500, 510)) {
                if (prestigeForest(player, 430000) && prestigeForest(player2, 430000)) break;
            } else if (isWhithin(player, 510, 520) || isWhithin(player2, 510, 520)) {
                if (prestigeForest(player, 440000) && prestigeForest(player2, 440000)) break;
            } else if (isWhithin(player, 520, 530) || isWhithin(player2, 520, 530)) {
                if (prestigeForest(player, 450000) && prestigeForest(player2, 450000)) break;
            } else if (isWhithin(player, 530, 540) || isWhithin(player2, 530, 540)) {
                if (prestigeForest(player, 460000) && prestigeForest(player2, 460000)) break;
            } else if (isWhithin(player, 540, 550) || isWhithin(player2, 540, 550)) {
                if (prestigeForest(player, 470000) && prestigeForest(player2, 470000)) break;
            } else if (isWhithin(player, 550, 560) || isWhithin(player2, 550, 560)) {
                if (prestigeForest(player, 480000) && prestigeForest(player2, 480000)) break;
            } else if (isWhithin(player, 560, 570) || isWhithin(player2, 560, 570)) {
                if (prestigeForest(player, 490000) && prestigeForest(player2, 490000)) break;
            } else if (isWhithin(player, 570, 580) || isWhithin(player2, 570, 580)) {
                if (prestigeForest(player, 500000) && prestigeForest(player2, 500000)) break;
            } else if (isWhithin(player, 580, 590) || isWhithin(player2, 580, 590)) {
                if (prestigeForest(player, 510000) && prestigeForest(player2, 510000)) break;
            } else if (isWhithin(player, 590, 600) || isWhithin(player2, 590, 600)) {
                if (prestigeForest(player, 520000) && prestigeForest(player2, 520000)) break;
            } else if (isWhithin(player, 600, 610) || isWhithin(player2, 600, 610)) {
                if (prestigeForest(player, 530000) && prestigeForest(player2, 530000)) break;
            } else if (isWhithin(player, 610, 620) || isWhithin(player2, 610, 620)) {
                if (prestigeForest(player, 540000) && prestigeForest(player2, 540000)) break;
            } else if (isWhithin(player, 620, 630) || isWhithin(player2, 620, 630)) {
                if (prestigeForest(player, 550000) && prestigeForest(player2, 550000)) break;
            } else if (isWhithin(player, 630, 640) || isWhithin(player2, 630, 640)) {
                if (prestigeForest(player, 560000) && prestigeForest(player2, 560000)) break;
            } else if (isWhithin(player, 640, 650) || isWhithin(player2, 640, 650)) {
                if (prestigeForest(player, 570000) && prestigeForest(player2, 570000)) break;
            } else if (isWhithin(player, 650, 660) || isWhithin(player2, 650, 660)) {
                if (prestigeForest(player, 580000) && prestigeForest(player2, 580000)) break;
            } else if (isWhithin(player, 660, 670) || isWhithin(player2, 660, 670)) {
                if (prestigeForest(player, 590000) && prestigeForest(player2, 590000)) break;
            } else if (isWhithin(player, 670, 680) || isWhithin(player2, 670, 680)) {
                if (prestigeForest(player, 600000) && prestigeForest(player2, 600000)) break;
            } else if (isWhithin(player, 680, 690) || isWhithin(player2, 680, 690)) {
                if (prestigeForest(player, 610000) && prestigeForest(player2, 610000)) break;
            } else if (isWhithin(player, 690, 700) || isWhithin(player2, 690, 700)) {
                if (prestigeForest(player, 620000) && prestigeForest(player2, 620000)) break;
            } else if (isWhithin(player, 700, 710) || isWhithin(player2, 700, 710)) {
                if (prestigeForest(player, 630000) && prestigeForest(player2, 630000)) break;
            } else if (isWhithin(player, 710, 720) || isWhithin(player2, 710, 720)) {
                if (prestigeForest(player, 640000) && prestigeForest(player2, 640000)) break;
            } else if (isWhithin(player, 720, 730) || isWhithin(player2, 720, 730)) {
                if (prestigeForest(player, 650000) && prestigeForest(player2, 650000)) break;
            } else if (isWhithin(player, 730, 740) || isWhithin(player2, 730, 740)) {
                if (prestigeForest(player, 660000) && prestigeForest(player2, 660000)) break;
            } else if (isWhithin(player, 740, 750) || isWhithin(player2, 740, 750)) {
                if (prestigeForest(player, 670000) && prestigeForest(player2, 670000)) break;
            } else if (isWhithin(player, 750, 760) || isWhithin(player2, 750, 760)) {
                if (prestigeForest(player, 680000) && prestigeForest(player2, 680000)) break;
            } else if (isWhithin(player, 760, 770) || isWhithin(player2, 760, 770)) {
                if (prestigeForest(player, 690000) && prestigeForest(player2, 690000)) break;
            } else if (isWhithin(player, 770, 780) || isWhithin(player2, 770, 780)) {
                if (prestigeForest(player, 700000) && prestigeForest(player2, 700000)) break;
            } else if (isWhithin(player, 780, 790) || isWhithin(player2, 780, 790)) {
                if (prestigeForest(player, 710000) && prestigeForest(player2, 710000)) break;
            } else if (isWhithin(player, 790, 800) || isWhithin(player2, 790, 800)) {
                if (prestigeForest(player, 720000) && prestigeForest(player2, 720000)) break;
            } else if (isWhithin(player, 800, 810) || isWhithin(player2, 800, 810)) {
                if (prestigeForest(player, 730000) && prestigeForest(player2, 730000)) break;
            } else if (isWhithin(player, 810, 820) || isWhithin(player2, 810, 820)) {
                if (prestigeForest(player, 740000) && prestigeForest(player2, 740000)) break;
            } else if (isWhithin(player, 820, 830) || isWhithin(player2, 820, 830)) {
                if (prestigeForest(player, 750000) && prestigeForest(player2, 750000)) break;
            } else if (isWhithin(player, 830, 840) || isWhithin(player2, 830, 840)) {
                if (prestigeForest(player, 760000) && prestigeForest(player2, 760000)) break;
            } else if (isWhithin(player, 840, 850) || isWhithin(player2, 840, 850)) {
                if (prestigeForest(player, 770000) && prestigeForest(player2, 770000)) break;
            } else if (isWhithin(player, 850, 860) || isWhithin(player2, 850, 860)) {
                if (prestigeForest(player, 780000) && prestigeForest(player2, 780000)) break;
            } else if (isWhithin(player, 860, 870) || isWhithin(player2, 860, 870)) {
                if (prestigeForest(player, 790000) && prestigeForest(player2, 790000)) break;
            } else if (isWhithin(player, 870, 880) || isWhithin(player2, 870, 880)) {
                if (prestigeForest(player, 800000) && prestigeForest(player2, 800000)) break;
            } else if (isWhithin(player, 880, 890) || isWhithin(player2, 880, 890)) {
                if (prestigeForest(player, 810000) && prestigeForest(player2, 810000)) break;
            } else if (isWhithin(player, 890, 900) || isWhithin(player2, 890, 900)) {
                if (prestigeForest(player, 820000) && prestigeForest(player2, 820000)) break;
            } else if (isWhithin(player, 900, 910) || isWhithin(player2, 900, 910)) {
                if (prestigeForest(player, 830000) && prestigeForest(player2, 830000)) break;
            } else if (isWhithin(player, 910, 920) || isWhithin(player2, 910, 920)) {
                if (prestigeForest(player, 840000) && prestigeForest(player2, 840000)) break;
            } else if (isWhithin(player, 920, 930) || isWhithin(player2, 920, 930)) {
                if (prestigeForest(player, 850000) && prestigeForest(player2, 850000)) break;
            } else if (isWhithin(player, 930, 940) || isWhithin(player2, 930, 940)) {
                if (prestigeForest(player, 860000) && prestigeForest(player2, 860000)) break;
            } else if (isWhithin(player, 940, 950) || isWhithin(player2, 940, 950)) {
                if (prestigeForest(player, 870000) && prestigeForest(player2, 870000)) break;
            } else if (isWhithin(player, 950, 960) || isWhithin(player2, 950, 960)) {
                if (prestigeForest(player, 880000) && prestigeForest(player2, 880000)) break;
            } else if (isWhithin(player, 960, 970) || isWhithin(player2, 960, 970)) {
                if (prestigeForest(player, 890000) && prestigeForest(player2, 890000)) break;
            } else if (isWhithin(player, 970, 980) || isWhithin(player2, 970, 980)) {
                if (prestigeForest(player, 900000) && prestigeForest(player2, 900000)) break;
            } else if (isWhithin(player, 980, 990) || isWhithin(player2, 980, 990)) {
                if (prestigeForest(player, 910000) && prestigeForest(player2, 910000)) break;
            } else if (isWhithin(player, 990, 999) || isWhithin(player2, 990, 999)) {
                if (prestigeForest(player, 920000) && prestigeForest(player2, 920000)) break;
            } else if (player.level >= 1000){
                client.updateUserInfo(message.member, {
                    "users.$.level": 1000,
                    "users.$.experience": 0
                });
            } else if (player2.level >= 1000) {
                client.updateUserInfo(user,{
                    "users.$.level": 1000,
                    "users.$.experience": 0
                })
            } else if (player.level >= 1000 && player2.level >= 1000) {
                client.updateUserInfo(message.member, {
                    "users.$.level": 1000,
                    "users.$.experience": 0
                });
                client.updateUserInfo(user,{
                    "users.$.level": 1000,
                    "users.$.experience": 0
                })
                break;
            }
            await levelup(client, message, player, player2, user);
        }
        if (player.level !== 1000 && player.level !== 1 || player2.level !== 1000 && player.level !== 1) {
            message.channel.send('Calcule du level en cours....')
            message.channel.send(`${player.username} est maintenant level => ***${player.level}***`);
            message.channel.send(`${player2.username} est maintenant level => ***${player2.level}***`);
        }
    }


    const strength = player.stats.strength + player2.stats.strength;
    const spirit = player.stats.spirit + player2.stats.spirit;
    const consti = player.stats.constitution + player2.stats.constitution;
    const agility = player.stats.agility + player2.stats.agility;
    const intelligence = player.stats.intelligence + player2.stats.intelligence;
    const prestige = player.prestige + player2.prestige

    let hostileStrengh = (hostile.stats.strength * 2) + (prestige * 10500);
    let hostileHP = (hostile.stats.vitality * 2) + (prestige * 10500);
    let hostileConsti = (hostile.stats.constitution * 2) + (prestige * 10500);
    let hostileAgility = (hostile.stats.agility * 2) + (prestige * 10500);
    let hostileIntel = (hostile.stats.intelligence * 2) + (prestige * 10500);
    let hostilePo = hostile.po;
    let hostileExp = hostile.experience;

    if (player.level <= 500 && player.prestige !== 0) {
        hostileExp = hostile.experience + (hostile.experience * prestige) * 1750
        hostilePo = hostile.po * prestige
    } else if (player.level >= 500 && prestige !== 0) {
        hostileExp = hostile.experience + (hostile.experience * prestige - hostile.experience) * 1750
        hostilePo = hostile.po * prestige
    }
    async function fight(atk) {
        let playerHP = player.stats.vitality + player2.stats.vitality;
        let player1HP = player.stats.vitality;
        let player2HP = player2.stats.vitality;
        for (let i = 1; hostileHP > 0; i++) {
            let hostileAtk = hostileStrengh - consti;
            let PlayerAtk = atk - hostileConsti
            if (hostileAtk < 0) hostileAtk = 0;
            if (PlayerAtk < 0) PlayerAtk = 0;
            if (PlayerAtk === 0 && hostileAtk === 0) return message.reply("Vous vous entretuez ( ou pas ) !")

            if (agility > hostileAgility) {
                if (hostileAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (agility - (agility / 2)) + 1) === 0) {
                        hostileAtk = 0
                        if (hostileAtk === 0) client.channels.cache.get("800027258379042886").send(`tour ${i}: Tu as esquivé le coup !`);
                    }
                }
            }
            if (hostileAgility > agility) {
                if (PlayerAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (hostileAgility - (hostileAgility / 2)) + 1) === 0) {
                        PlayerAtk = 0
                        if (PlayerAtk === 0) client.channels.cache.get("800027258379042886").send(`tour ${i}: ${hostile.name} a esquivé le coup !`);
                    }
                }
            }
            if (intelligence > hostileIntel) {
                hostileHP -= PlayerAtk
                playerHP -= hostileAtk
                player1HP -= (hostileAtk / 2)
                player2HP -= (hostileAtk / 2)
                if (hostileHP <= 0) hostileHP = 0;
                const playerMessage = `tour ${i}: la bataille fait rage. ${player.username} & ${player2.username} attaque pour ${PlayerAtk} dégâts et le ${hostile.name} riposte pour ${hostileAtk} de dégâts! Ils vous restent ${playerHP}HP et il reste ${hostileHP}HP à ${hostile.name}`
                client.channels.cache.get("800027258379042886").send(playerMessage)
            } else {
                playerHP -= hostileAtk
                player1HP -= (hostileAtk / 2)
                player2HP -= (hostileAtk / 2)
                hostileHP -= PlayerAtk
                const playerMessage = `tour ${i}: la bataille fait rage. ${hostile.name} attaque pour ${hostileAtk} de dégâts et ${player.username} & ${player2.username} riposte pour ${PlayerAtk} dégâts! Il reste ${hostileHP}HP à ${hostile.name} et ils vous restent ${playerHP}HP`
                client.channels.cache.get("800027258379042886").send(playerMessage)
            }

            if (player1HP <= 0 || player2HP <= 0) {
                if (player1HP <= 0) {
                    try {
                        message.channel.send(`Souhaitez vous prendre la fuite face à ${hostile.name} (oui) (30 secondes pour répondre)`);
                        const filter = m => (user.id === m.author.id);
                        const userEntry = await message.channel.awaitMessages(filter, {
                            max: 1, time: 30000, errors: ['time']
                        });
                        if (userEntry.first().content.toLowerCase() === "oui") {
                            client.updateUserInfo(message.member, {
                                "users.$.stats.vitality": 0
                            });
                            return message.reply(`Vous prenez la fuite ${player.username} est mort, ${player2.username} fuis en prennant son compagnon avec lui !`)
                        }
                    } catch (e) {
                        message.reply(`${player2.username} n'a pas répondu assez vite donc le combat continie !`)
                    }
                }
                if (player2HP <= 0) {
                    try {
                        message.channel.send(`Souhaitez vous prendre la fuite face à ${hostile.name} (oui) (30 secondes pour répondre)`);
                        const filter = m => (message.author.id === m.author.id);
                        const userEntry = await message.channel.awaitMessages(filter, {
                            max: 1, time: 30000, errors: ['time']
                        });
                        if (userEntry.first().content.toLowerCase() === "oui") {
                            client.updateUserInfo(user, {
                                "users.$.stats.vitality": 0
                            });
                            return message.reply(`Vous prenez la fuite ${player.username} est mort, ${player2.username} fuis en prennant son compagnon avec lui !`)
                        }
                    } catch (e) {
                        message.reply(`${player2.username} n'a pas répondu assez vite donc le combat continie !`)
                    }
                }
            }
            if (playerHP <= 0) {
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": 0
                });
                client.updateUserInfo(user, {
                    "users.$.stats.vitality": 0
                });
                return message.reply("vous etes mort");
            }
            if (hostileHP <= 0) {
                playerHP += hostileAtk
                player.po += hostilePo;
                player.experience += hostileExp;
                player2.po += hostilePo;
                player2.experience += hostileExp;
                if (hostile.category !== "Monster") {
                    const loot = Math.floor(Math.random() * Math.floor(101))
                    if (loot > 99 - (prestige / 2) ) {
                        const player1Inventory = player.inventory
                        const player2Inventory = player2.inventory
                        if (hostile.loot !== undefined) {
                            const drop = hostile.loot[Math.round(Math.random() * (hostile.loot.length - 1))]
                            userInventory.push(drop)
                            client.updateUserInfo(message.member, {
                                "users.$.inventory": player1Inventory
                            });
                            client.updateUserInfo(user, {
                                "users.$.inventory": player2Inventory
                            });
                            message.reply(`Vous venez de looter sur \`${hostile.name}\` => **${drop}**`);
                        }
                    }
                }
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": playerHP,
                    "users.$.po": player.po,
                    "users.$.experience": player.experience
                });
                client.updateUserInfo(user, {
                    "users.$.stats.vitality": playerHP,
                    "users.$.po": player2.po,
                    "users.$.experience": player2.experience
                });
                if (intelligence > hostileIntel) {
                    await level();
                    return client.channels.cache.get("781579158437888081").send(`Félicitation, la bataille est terminée après ${i - 1} tours, ${player.username}, il te reste ${player1HP}HP et il reste ${player2HP}HP à ${player2.username}. Vous gagne ${hostilePo.toLocaleString({ minimumFractionDigits: 2 })}<:GoldCoin:781575067108507648> et ${hostileExp.toLocaleString({ minimumFractionDigits: 2 })}exp !`);
                } else {
                    await level();
                    return client.channels.cache.get("781579158437888081").send(`Félicitation, la bataille est terminée après ${i} tours, ${player.username}, il te reste ${player1HP}HP et il reste ${player2HP}HP à ${player2.username}. Vous gagne ${hostilePo.toLocaleString({ minimumFractionDigits: 2 })}<:GoldCoin:781575067108507648> et ${hostileExp.toLocaleString({ minimumFractionDigits: 2 })}exp !`);
                }
            }
        }
    }

    if (player.class === "Mage") {
        await fight(spirit);
    } else {
        await fight(strength);
    }
    if (player.level === 1000 && player.prestige === 10) {
        client.updateUserInfo(message.member, {
            "users.$.experience": 0
        })
    }
    if (player2.level === 1000 && player2.prestige === 10) {
        client.updateUserInfo(user, {
            "users.$.experience": 0
        })
    }
}
module.exports = {
    battleduo
}