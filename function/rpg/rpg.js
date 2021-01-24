const {levelup} = require('./levelup');

const battle = async (client, message, player, hostile, userInfo) => {
    if (player.stats.vitality <= 0) return message.reply('Tu ne peux pas combattre sans HP');

    async function level() {
        while (player.level !== 0 && player.level !== 1001) {
            if (player.level <= 10) {
                if (player.experience < player.level * 250 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 250 - 1) break;
            } else if (player.level <= 20 && player.level > 10) {
                if (player.experience < player.level * 500 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 500 - 1) break;
            } else if (player.level <= 30 && player.level > 20) {
                if (player.experience < player.level * 750 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 750 - 1) break;
            } else if (player.level <= 40 && player.level > 30) {
                if (player.experience < player.level * 1000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 1000 - 1) break;
            } else if (player.level <= 50 && player.level > 40) {
                if (player.experience < player.level * 3000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 3000 - 1) break;
            } else if (player.level <= 60 && player.level > 50) {
                if (player.experience < player.level * 5000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 5000 - 1) break;
            } else if (player.level <= 70 && player.level > 60) {
                if (player.experience < player.level * 7000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 7000 - 1) break;
            } else if (player.level <= 80 && player.level > 70) {
                if (player.experience < player.level * 9000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 9000 - 1) break;
            } else if (player.level <= 90 && player.level > 80) {
                if (player.experience < player.level * 15000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 15000 - 1) break;
            } else if (player.level <= 100 && player.level > 90) {
                if (player.experience < player.level * 20000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 20000 - 1) break;
            } else if (player.level <= 110 && player.level > 100) {
                if (player.experience < player.level * 30000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 30000 - 1) break;
            } else if (player.level <= 120 && player.level > 110) {
                if (player.experience < player.level * 40000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 40000 - 1) break;
            } else if (player.level <= 130 && player.level > 120) {
                if (player.experience < player.level * 50000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 50000 - 1) break;
            } else if (player.level <= 140 && player.level > 130) {
                if (player.experience < player.level * 60000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 60000 - 1) break;
            } else if (player.level <= 150 && player.level > 140) {
                if (player.experience < player.level * 70000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 70000 - 1) break;
            } else if (player.level <= 160 && player.level > 150) {
                if (player.experience < player.level * 80000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 80000 - 1) break;
            } else if (player.level <= 170 && player.level > 160) {
                if (player.experience < player.level * 90000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 90000 - 1) break;
            } else if (player.level <= 180 && player.level > 170) {
                if (player.experience < player.level * 100000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 100000 - 1) break;
            } else if (player.level <= 190 && player.level > 180) {
                if (player.experience < player.level * 110000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 110000 - 1) break;
            } else if (player.level <= 200 && player.level > 190) {
                if (player.experience < player.level * 120000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 120000 - 1) break;
            } else if (player.level <= 210 && player.level > 200) {
                if (player.experience < player.level * 130000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 130000 - 1) break;
            } else if (player.level <= 220 && player.level > 210) {
                if (player.experience < player.level * 140000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 140000 - 1) break;
            } else if (player.level <= 230 && player.level > 220) {
                if (player.experience < player.level * 150000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 150000 - 1) break;
            } else if (player.level <= 240 && player.level > 230) {
                if (player.experience < player.level * 160000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 160000 - 1) break;
            } else if (player.level <= 250 && player.level > 240) {
                if (player.experience < player.level * 170000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 170000 - 1) break;
            } else if (player.level <= 260 && player.level > 250) {
                if (player.experience < player.level * 180000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 180000 - 1) break;
            } else if (player.level <= 270 && player.level > 260) {
                if (player.experience < player.level * 190000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 190000 - 1) break;
            } else if (player.level <= 280 && player.level > 270) {
                if (player.experience < player.level * 200000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 200000 - 1) break;
            } else if (player.level <= 290 && player.level > 280) {
                if (player.experience < player.level * 210000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 210000 - 1) break;
            } else if (player.level <= 300 && player.level > 290) {
                if (player.experience < player.level * 220000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 220000 - 1) break;
            } else if (player.level <= 310 && player.level > 300) {
                if (player.experience < player.level * 230000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 230000 - 1) break;
            } else if (player.level <= 320 && player.level > 310) {
                if (player.experience < player.level * 240000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 240000 - 1) break;
            } else if (player.level <= 330 && player.level > 320) {
                if (player.experience < player.level * 250000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 250000 - 1) break;
            } else if (player.level <= 340 && player.level > 330) {
                if (player.experience < player.level * 260000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 260000 - 1) break;
            } else if (player.level <= 350 && player.level > 340) {
                if (player.experience < player.level * 270000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 270000 - 1) break;
            } else if (player.level <= 360 && player.level > 350) {
                if (player.experience < player.level * 280000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 280000 - 1) break;
            } else if (player.level <= 370 && player.level > 360) {
                if (player.experience < player.level * 290000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 290000 - 1) break;
            } else if (player.level <= 380 && player.level > 370) {
                if (player.experience < player.level * 300000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 300000 - 1) break;
            } else if (player.level <= 390 && player.level > 380) {
                if (player.experience < player.level * 310000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 310000 - 1) break;
            } else if (player.level <= 400 && player.level > 390) {
                if (player.experience < player.level * 320000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 320000 - 1) break;
            } else if (player.level <= 410 && player.level > 400) {
                if (player.experience < player.level * 330000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 330000 - 1) break;
            } else if (player.level <= 420 && player.level > 410) {
                if (player.experience < player.level * 340000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 340000 - 1) break;
            } else if (player.level <= 430 && player.level > 420) {
                if (player.experience < player.level * 350000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 350000 - 1) break;
            } else if (player.level <= 440 && player.level > 430) {
                if (player.experience < player.level * 360000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 360000 - 1) break;
            } else if (player.level <= 450 && player.level > 440) {
                if (player.experience < player.level * 370000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 370000 - 1) break;
            } else if (player.level <= 460 && player.level > 450) {
                if (player.experience < player.level * 380000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 380000 - 1) break;
            } else if (player.level <= 470 && player.level > 460) {
                if (player.experience < player.level * 390000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 390000 - 1) break;
            } else if (player.level <= 480 && player.level > 470) {
                if (player.experience < player.level * 400000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 400000 - 1) break;
            } else if (player.level <= 490 && player.level > 480) {
                if (player.experience < player.level * 410000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 410000 - 1) break;
            } else if (player.level <= 500 && player.level > 490) {
                if (player.experience < player.level * 420000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 420000 - 1) break;
            } else if (player.level <= 510 && player.level > 500) {
                if (player.experience < player.level * 430000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 430000 - 1) break;
            } else if (player.level <= 520 && player.level > 510) {
                if (player.experience < player.level * 440000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 440000 - 1) break;
            } else if (player.level <= 530 && player.level > 520) {
                if (player.experience < player.level * 450000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 450000 - 1) break;
            } else if (player.level <= 540 && player.level > 530) {
                if (player.experience < player.level * 460000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 460000 - 1) break;
            } else if (player.level <= 550 && player.level > 540) {
                if (player.experience < player.level * 470000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 470000 - 1) break;
            } else if (player.level <= 560 && player.level > 550) {
                if (player.experience < player.level * 480000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 480000 - 1) break;
            } else if (player.level <= 570 && player.level > 560) {
                if (player.experience < player.level * 490000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 490000 - 1) break;
            } else if (player.level <= 580 && player.level > 570) {
                if (player.experience < player.level * 500000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 500000 - 1) break;
            } else if (player.level <= 590 && player.level > 580) {
                if (player.experience < player.level * 510000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 510000 - 1) break;
            } else if (player.level <= 600 && player.level > 590) {
                if (player.experience < player.level * 520000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 520000 - 1) break;
            } else if (player.level <= 610 && player.level > 600) {
                if (player.experience < player.level * 530000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 530000 - 1) break;
            } else if (player.level <= 620 && player.level > 610) {
                if (player.experience < player.level * 540000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 540000 - 1) break;
            } else if (player.level <= 630 && player.level > 620) {
                if (player.experience < player.level * 550000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 550000 - 1) break;
            } else if (player.level <= 640 && player.level > 630) {
                if (player.experience < player.level * 560000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 560000 - 1) break;
            } else if (player.level <= 650 && player.level > 640) {
                if (player.experience < player.level * 570000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 570000 - 1) break;
            } else if (player.level <= 660 && player.level > 650) {
                if (player.experience < player.level * 580000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 580000 - 1) break;
            } else if (player.level <= 670 && player.level > 660) {
                if (player.experience < player.level * 590000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 590000 - 1) break;
            } else if (player.level <= 680 && player.level > 670) {
                if (player.experience < player.level * 600000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 600000 - 1) break;
            } else if (player.level <= 690 && player.level > 680) {
                if (player.experience < player.level * 610000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 610000 - 1) break;
            } else if (player.level <= 700 && player.level > 690) {
                if (player.experience < player.level * 620000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 620000 - 1) break;
            } else if (player.level <= 710 && player.level > 700) {
                if (player.experience < player.level * 630000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 630000 - 1) break;
            } else if (player.level <= 720 && player.level > 710) {
                if (player.experience < player.level * 640000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 640000 - 1) break;
            } else if (player.level <= 730 && player.level > 720) {
                if (player.experience < player.level * 650000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 650000 - 1) break;
            } else if (player.level <= 740 && player.level > 730) {
                if (player.experience < player.level * 660000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 660000 - 1) break;
            } else if (player.level <= 750 && player.level > 740) {
                if (player.experience < player.level * 670000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 670000 - 1) break;
            } else if (player.level <= 760 && player.level > 750) {
                if (player.experience < player.level * 680000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 680000 - 1) break;
            } else if (player.level <= 770 && player.level > 760) {
                if (player.experience < player.level * 690000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 690000 - 1) break;
            } else if (player.level <= 780 && player.level > 770) {
                if (player.experience < player.level * 700000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 700000 - 1) break;
            } else if (player.level <= 790 && player.level > 780) {
                if (player.experience < player.level * 710000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 710000 - 1) break;
            } else if (player.level <= 800 && player.level > 790) {
                if (player.experience < player.level * 720000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 720000 - 1) break;
            } else if (player.level <= 810 && player.level > 800) {
                if (player.experience < player.level * 730000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 730000 - 1) break;
            } else if (player.level <= 820 && player.level > 810) {
                if (player.experience < player.level * 740000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 740000 - 1) break;
            } else if (player.level <= 830 && player.level > 820) {
                if (player.experience < player.level * 750000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 750000 - 1) break;
            } else if (player.level <= 840 && player.level > 830) {
                if (player.experience < player.level * 760000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 760000 - 1) break;
            } else if (player.level <= 850 && player.level > 840) {
                if (player.experience < player.level * 770000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 770000 - 1) break;
            } else if (player.level <= 860 && player.level > 850) {
                if (player.experience < player.level * 780000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 780000 - 1) break;
            } else if (player.level <= 870 && player.level > 860) {
                if (player.experience < player.level * 790000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 790000 - 1) break;
            } else if (player.level <= 880 && player.level > 870) {
                if (player.experience < player.level * 800000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 800000 - 1) break;
            } else if (player.level <= 890 && player.level > 880) {
                if (player.experience < player.level * 810000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 810000 - 1) break;
            } else if (player.level <= 900 && player.level > 890) {
                if (player.experience < player.level * 820000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 820000 - 1) break;
            } else if (player.level <= 910 && player.level > 900) {
                if (player.experience < player.level * 830000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 830000 - 1) break;
            } else if (player.level <= 920 && player.level > 910) {
                if (player.experience < player.level * 840000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 840000 - 1) break;
            } else if (player.level <= 930 && player.level > 920) {
                if (player.experience < player.level * 850000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 850000 - 1) break;
            } else if (player.level <= 940 && player.level > 930) {
                if (player.experience < player.level * 860000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 860000 - 1) break;
            } else if (player.level <= 950 && player.level > 940) {
                if (player.experience < player.level * 870000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 870000 - 1) break;
            } else if (player.level <= 960 && player.level > 950) {
                if (player.experience < player.level * 880000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 880000 - 1) break;
            } else if (player.level <= 970 && player.level > 960) {
                if (player.experience < player.level * 890000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 890000 - 1) break;
            } else if (player.level <= 980 && player.level > 970) {
                if (player.experience < player.level * 900000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 900000 - 1) break;
            } else if (player.level <= 990 && player.level > 980) {
                if (player.experience < player.level * 910000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 910000 - 1) break;
            } else if (player.level <= 999 && player.level > 990) {
                if (player.experience < player.level * 920000 - 1) break;
                if (player.experience < player.level * player.prestige * 10 * 920000 - 1) break;
            } else {
                client.updateUserInfo(message.member, {
                    "users.$.level": 1000,
                    "users.$.experience": 0
                });
                break;
            }
            await levelup(client, message, player);
        }
        if(player.level !== 1000) {
            message.reply('Calcule du level en cours....')
            if (player.level !== 1) {
                message.reply(`Tu es maintenant level => ${player.level}`);
            }
        }
    }


    const strength = player.stats.strength
    const spirit = player.stats.spirit
    const consti = player.stats.constitution;
    const agility = player.stats.agility
    const intelligence = player.stats.intelligence

    let hostileStrengh = hostile.stats.strength + (player.prestige * 10000);
    let hostileHP = hostile.stats.vitality + (player.prestige * 10000);
    let hostileConsti = hostile.stats.constitution + (player.prestige * 10000);
    let hostileAgility = hostile.stats.agility + (player.prestige * 10000);
    let hostileIntel = hostile.stats.intelligence + (player.prestige * 10000);
    let hostilePo = hostile.po;
    let hostileExp = hostile.experience * 2500 ;

    if (player.level >= 500) {
        hostileExp = hostile.experience * 2;
        if (player.prestige !== 0) {
            hostileExp = hostile.experience + (hostile.experience * player.prestige) * 2500
        }
    }
    if (player.prestige !== 0 && player.level < 500) {
        hostileExp = hostile.experience + (hostile.experience * player.prestige - hostile.experience) * 2500
    }

    async function fight(atk) {
        let playerHP = player.stats.vitality;
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
                if (hostileHP <= 0) hostileHP = 0;
                const playerMessage = `tour ${i}: la bataille fait rage. ${player.username} attaque pour ${PlayerAtk} dégâts et le ${hostile.name} riposte pour ${hostileAtk} de dégâts! Il te reste ${playerHP}HP et il reste ${hostileHP}HP à ${hostile.name}`
                client.channels.cache.get("800027258379042886").send(playerMessage + '\n' + "--------")
            } else {
                playerHP -= hostileAtk
                hostileHP -= PlayerAtk
                const playerMessage = `tour ${i}: la bataille fait rage. ${hostile.name} attaque pour ${hostileAtk} de dégâts et ${player.username} riposte pour ${PlayerAtk} dégâts! Il reste ${hostileHP}HP à ${hostile.name} et il te reste ${playerHP}HP`
                client.channels.cache.get("800027258379042886").send(playerMessage)
            }
            if (playerHP <= 0) {
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": 0
                });
                return message.reply("Tu es mort");
            }
            if (hostileHP <= 0) {
                playerHP += hostileAtk
                player.po += hostilePo;
                player.experience += hostileExp;
                if (hostile.category !== "Monster") {
                    const loot = Math.floor(Math.random() * Math.floor(101 * (player.prestige + 1)))
                    if (loot > 90 * (player.prestige + 1)) {
                        const userInventory = userInfo.inventory
                        if (hostile.loot !== undefined) {
                            const drop = hostile.loot[Math.round(Math.random() * (hostile.loot.length - 1))]
                            userInventory.push(drop)
                            client.updateUserInfo(message.member, {
                                "users.$.inventory": userInventory
                            });
                            message.reply(`Tu viens de looter sur \`${hostile.name}\` => **${drop}**`);
                        }
                    }
                }
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": playerHP,
                    "users.$.po": player.po,
                    "users.$.experience": player.experience
                });
                if (intelligence > hostileIntel) {
                    await level();
                    return client.channels.cache.get("781579158437888081").send(`Félicitation, la bataille est terminée après ${i - 1} tours, ${player.username}, il te reste ${playerHP}HP et tu gagne ${hostilePo}<:GoldCoin:781575067108507648> et tu gagne ${hostileExp}exp !`);
                } else {
                    await level();
                    return client.channels.cache.get("781579158437888081").send(`Félicitation, la bataille est terminée après ${i} tours, ${player.username}, il te reste ${playerHP}HP et tu gagne ${hostilePo}<:GoldCoin:781575067108507648> et tu gagne ${hostileExp}exp !`);
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
}
module.exports = {
    battle
}