const {levelup} = require('./levelup');

const battle = async (client, message, player, hostile, userInfo) => {
    if (player.stats.vitality <= 0) return message.reply('Tu ne peux pas combattre sans HP');

    async function level() {
        while (player.level !== 0 && player.level !== 1001) {
            if (player.level <= 10) {
                if (player.experience < player.level * 250 - 1) break;
                if (player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 250 - 1) break;
                if (player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 250 - 1) break;
                if (player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 250 - 1) break;
                if (player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 250 - 1) break;
                if (player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 250 - 1) break;
                if (player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 250 - 1) break;
                if (player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 250 - 1) break;
                if (player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 250 - 1) break;
                if (player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 250 - 1) break;
                if (player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 250 - 1) break;
            } else if (player.level <= 20 && player.level > 10) {
                if (player.experience < player.level * 500 - 1) break;
                 if (player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 500 - 1) break;
                 if (player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 500 - 1) break;
                 if (player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 500 - 1) break;
                 if (player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 500 - 1) break;
                 if (player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 500 - 1) break;
                 if (player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 500 - 1) break;
                 if (player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 500 - 1) break;
                 if (player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 500 - 1) break;
                 if (player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 500 - 1) break;
                 if (player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 500 - 1) break;
            } else if (player.level <= 30 && player.level > 20) {
                if (player.experience < player.level * 750 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 750 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 750 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 750 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 750 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 750 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 750 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 750 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 750 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 750 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 750 - 1) break;
            } else if (player.level <= 40 && player.level > 30) {
                if (player.experience < player.level * 1000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 1000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 1000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 1000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 1000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 1000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 1000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 1000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 1000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 1000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 1000 - 1) break;
            } else if (player.level <= 50 && player.level > 40) {
                if (player.experience < player.level * 3000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 3000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 3000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 3000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 3000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 3000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 3000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 3000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 3000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 3000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 3000 - 1) break;
            } else if (player.level <= 60 && player.level > 50) {
                if (player.experience < player.level * 5000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 5000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 5000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 5000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 5000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 5000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 5000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 5000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 5000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 5000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 5000 - 1) break;
            } else if (player.level <= 70 && player.level > 60) {
                if (player.experience < player.level * 7000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 7000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 7000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 7000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 7000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 7000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 7000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 7000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 7000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 7000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 7000 - 1) break;
            } else if (player.level <= 80 && player.level > 70) {
                if (player.experience < player.level * 9000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 9000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 9000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 9000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 9000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 9000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 9000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 9000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 9000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 9000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 9000 - 1) break;
            } else if (player.level <= 90 && player.level > 80) {
                if (player.experience < player.level * 15000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 15000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 15000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 15000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 15000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 15000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 15000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 15000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 15000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 15000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 15000 - 1) break;
            } else if (player.level <= 100 && player.level > 90) {
                if (player.experience < player.level * 20000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 20000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 20000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 20000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 20000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 20000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 20000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 20000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 20000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 20000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 20000 - 1) break;
            } else if (player.level <= 110 && player.level > 100) {
                if (player.experience < player.level * 30000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 30000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 30000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 30000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 30000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 30000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 30000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 30000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 30000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 30000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 30000 - 1) break;
            } else if (player.level <= 120 && player.level > 110) {
                if (player.experience < player.level * 40000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 40000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 40000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 40000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 40000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 40000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 40000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 40000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 40000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 40000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 40000 - 1) break;
            } else if (player.level <= 130 && player.level > 120) {
                if (player.experience < player.level * 50000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 50000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 50000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 50000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 50000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 50000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 50000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 50000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 50000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 50000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 50000 - 1) break;
            } else if (player.level <= 140 && player.level > 130) {
                if (player.experience < player.level * 60000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 60000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 60000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 60000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 60000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 60000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 60000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 60000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 60000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 60000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 60000 - 1) break;
            } else if (player.level <= 150 && player.level > 140) {
                if (player.experience < player.level * 70000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 70000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 70000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 70000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 70000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 70000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 70000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 70000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 70000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 70000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 70000 - 1) break;
            } else if (player.level <= 160 && player.level > 150) {
                if (player.experience < player.level * 80000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 80000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 80000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 80000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 80000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 80000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 80000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 80000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 80000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 80000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 80000 - 1) break;
            } else if (player.level <= 170 && player.level > 160) {
                if (player.experience < player.level * 90000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 90000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 90000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 90000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 90000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 90000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 90000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 90000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 90000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 90000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 90000 - 1) break;
            } else if (player.level <= 180 && player.level > 170) {
                if (player.experience < player.level * 100000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 100000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 100000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 100000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 100000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 100000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 100000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 100000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 100000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 100000 - 1) break;
                if( player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 100000 - 1) break;
            } else if (player.level <= 190 && player.level > 180) {
                if (player.experience < player.level * 110000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 110000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 110000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 110000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 110000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 110000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 110000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 110000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 110000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 110000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 110000 - 1) break;
            } else if (player.level <= 200 && player.level > 190) {
                if (player.experience < player.level * 120000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 120000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 120000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 120000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 120000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 120000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 120000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 120000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 120000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 120000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 120000 - 1) break;
            } else if (player.level <= 210 && player.level > 200) {
                if (player.experience < player.level * 130000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 130000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 130000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 130000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 130000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 130000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 130000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 130000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 130000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 130000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 130000 - 1) break;
            } else if (player.level <= 220 && player.level > 210) {
                if (player.experience < player.level * 140000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 140000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 140000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 140000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 140000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 140000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 140000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 140000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 140000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 140000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 140000 - 1) break;
            } else if (player.level <= 230 && player.level > 220) {
                if (player.experience < player.level * 150000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 150000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 150000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 150000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 150000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 150000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 150000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 150000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 150000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 150000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 150000 - 1) break;
            } else if (player.level <= 240 && player.level > 230) {
                if (player.experience < player.level * 160000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 160000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 160000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 160000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 160000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 160000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 160000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 160000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 160000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 160000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 160000 - 1) break;
            } else if (player.level <= 250 && player.level > 240) {
                if (player.experience < player.level * 170000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 170000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 170000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 170000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 170000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 170000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 170000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 170000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 170000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 170000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 170000 - 1) break;
            } else if (player.level <= 260 && player.level > 250) {
                if (player.experience < player.level * 180000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 180000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 180000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 180000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 180000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 180000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 180000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 180000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 180000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 180000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 180000 - 1) break;
            } else if (player.level <= 270 && player.level > 260) {
                if (player.experience < player.level * 190000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 190000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 190000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 190000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 190000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 190000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 190000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 190000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 190000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 190000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 190000 - 1) break;
            } else if (player.level <= 280 && player.level > 270) {
                if (player.experience < player.level * 200000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 200000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 200000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 200000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 200000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 200000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 200000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 200000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 200000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 200000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 200000 - 1) break;
            } else if (player.level <= 290 && player.level > 280) {
                if (player.experience < player.level * 210000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 210000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 210000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 210000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 210000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 210000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 210000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 210000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 210000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 210000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 210000 - 1) break;
            } else if (player.level <= 300 && player.level > 290) {
                if (player.experience < player.level * 220000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 220000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 220000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 220000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 220000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 220000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 220000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 220000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 220000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 220000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 220000 - 1) break;
            } else if (player.level <= 310 && player.level > 300) {
                if (player.experience < player.level * 230000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 230000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 230000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 230000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 230000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 230000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 230000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 230000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 230000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 230000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 230000 - 1) break;
            } else if (player.level <= 320 && player.level > 310) {
                if (player.experience < player.level * 240000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 240000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 240000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 240000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 240000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 240000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 240000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 240000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 240000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 240000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 240000 - 1) break;
            } else if (player.level <= 330 && player.level > 320) {
                if (player.experience < player.level * 250000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 250000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 250000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 250000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 250000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 250000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 250000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 250000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 250000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 250000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 250000 - 1) break;
            } else if (player.level <= 340 && player.level > 330) {
                if (player.experience < player.level * 260000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 260000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 260000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 260000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 260000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 260000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 260000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 260000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 260000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 260000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 260000 - 1) break;
            } else if (player.level <= 350 && player.level > 340) {
                if (player.experience < player.level * 270000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 270000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 270000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 270000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 270000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 270000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 270000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 270000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 270000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 270000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 270000 - 1) break;
            } else if (player.level <= 360 && player.level > 350) {
                if (player.experience < player.level * 280000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 280000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 280000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 280000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 280000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 280000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 280000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 280000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 280000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 280000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 280000 - 1) break;
            } else if (player.level <= 370 && player.level > 360) {
                if (player.experience < player.level * 290000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 290000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 290000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 290000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 290000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 290000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 290000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 290000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 290000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 290000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 290000 - 1) break;
            } else if (player.level <= 380 && player.level > 370) {
                if (player.experience < player.level * 300000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 300000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 300000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 300000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 300000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 300000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 300000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 300000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 300000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 300000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 300000 - 1) break;
            } else if (player.level <= 390 && player.level > 380) {
                if (player.experience < player.level * 310000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 310000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 310000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 310000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 310000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 310000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 310000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 310000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 310000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 310000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 310000 - 1) break;
            } else if (player.level <= 400 && player.level > 390) {
                if (player.experience < player.level * 320000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 320000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 320000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 320000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 320000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 320000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 320000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 320000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 320000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 320000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 320000 - 1) break;
            } else if (player.level <= 410 && player.level > 400) {
                if (player.experience < player.level * 330000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 330000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 330000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 330000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 330000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 330000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 330000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 330000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 330000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 330000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 330000 - 1) break;
            } else if (player.level <= 420 && player.level > 410) {
                if (player.experience < player.level * 340000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 340000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 340000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 340000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 340000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 340000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 340000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 340000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 340000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 340000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 340000 - 1) break;
            } else if (player.level <= 430 && player.level > 420) {
                if (player.experience < player.level * 350000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 350000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 350000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 350000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 350000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 350000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 350000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 350000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 350000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 350000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 350000 - 1) break;
            } else if (player.level <= 440 && player.level > 430) {
                if (player.experience < player.level * 360000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 360000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 360000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 360000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 360000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 360000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 360000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 360000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 360000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 360000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 360000 - 1) break;
            } else if (player.level <= 450 && player.level > 440) {
                if (player.experience < player.level * 370000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 370000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 370000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 370000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 370000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 370000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 370000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 370000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 370000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 370000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 370000 - 1) break;
            } else if (player.level <= 460 && player.level > 450) {
                if (player.experience < player.level * 380000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 380000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 380000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 380000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 380000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 380000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 380000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 380000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 380000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 380000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 380000 - 1) break;
            } else if (player.level <= 470 && player.level > 460) {
                if (player.experience < player.level * 390000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 390000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 390000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 390000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 390000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 390000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 390000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 390000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 390000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 390000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 390000 - 1) break;
            } else if (player.level <= 480 && player.level > 470) {
                if (player.experience < player.level * 400000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 400000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 400000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 400000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 400000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 400000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 400000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 400000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 400000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 400000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 400000 - 1) break;
            } else if (player.level <= 490 && player.level > 480) {
                if (player.experience < player.level * 410000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 410000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 410000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 410000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 410000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 410000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 410000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 410000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 410000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 410000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 410000 - 1) break;
            } else if (player.level <= 500 && player.level > 490) {
                if (player.experience < player.level * 420000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 420000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 420000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 420000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 420000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 420000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 420000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 420000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 420000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 420000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 420000 - 1) break;
            } else if (player.level <= 510 && player.level > 500) {
                if (player.experience < player.level * 430000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 430000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 430000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 430000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 430000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 430000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 430000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 430000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 430000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 430000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 430000 - 1) break;
            } else if (player.level <= 520 && player.level > 510) {
                if (player.experience < player.level * 440000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 440000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 440000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 440000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 440000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 440000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 440000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 440000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 440000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 440000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 440000 - 1) break;
            } else if (player.level <= 530 && player.level > 520) {
                if (player.experience < player.level * 450000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 450000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 450000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 450000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 450000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 450000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 450000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 450000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 450000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 450000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 450000 - 1) break;
            } else if (player.level <= 540 && player.level > 530) {
                if (player.experience < player.level * 460000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 460000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 460000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 460000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 460000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 460000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 460000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 460000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 460000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 460000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 460000 - 1) break;
            } else if (player.level <= 550 && player.level > 540) {
                if (player.experience < player.level * 470000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 470000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 470000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 470000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 470000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 470000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 470000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 470000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 470000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 470000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 470000 - 1) break;
            } else if (player.level <= 560 && player.level > 550) {
                if (player.experience < player.level * 480000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 480000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 480000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 480000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 480000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 480000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 480000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 480000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 480000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 480000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 480000 - 1) break;
            } else if (player.level <= 570 && player.level > 560) {
                if (player.experience < player.level * 490000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 490000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 490000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 490000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 490000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 490000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 490000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 490000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 490000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 490000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 490000 - 1) break;
            } else if (player.level <= 580 && player.level > 570) {
                if (player.experience < player.level * 500000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 500000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 500000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 500000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 500000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 500000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 500000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 500000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 500000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 500000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 500000 - 1) break;
            } else if (player.level <= 590 && player.level > 580) {
                if (player.experience < player.level * 510000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 510000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 510000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 510000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 510000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 510000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 510000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 510000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 510000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 510000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 510000 - 1) break;
            } else if (player.level <= 600 && player.level > 590) {
                if (player.experience < player.level * 520000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 520000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 520000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 520000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 520000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 520000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 520000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 520000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 520000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 520000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 520000 - 1) break;
            } else if (player.level <= 610 && player.level > 600) {
                if (player.experience < player.level * 530000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 530000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 530000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 530000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 530000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 530000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 530000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 530000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 530000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 530000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 530000 - 1) break;
            } else if (player.level <= 620 && player.level > 610) {
                if (player.experience < player.level * 540000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 540000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 540000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 540000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 540000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 540000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 540000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 540000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 540000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 540000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 540000 - 1) break;
            } else if (player.level <= 630 && player.level > 620) {
                if (player.experience < player.level * 550000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 550000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 550000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 550000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 550000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 550000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 550000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 550000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 550000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 550000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 550000 - 1) break;
            } else if (player.level <= 640 && player.level > 630) {
                if (player.experience < player.level * 560000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 560000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 560000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 560000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 560000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 560000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 560000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 560000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 560000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 560000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 560000 - 1) break;
            } else if (player.level <= 650 && player.level > 640) {
                if (player.experience < player.level * 570000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 570000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 570000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 570000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 570000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 570000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 570000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 570000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 570000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 570000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 570000 - 1) break;
            } else if (player.level <= 660 && player.level > 650) {
                if (player.experience < player.level * 580000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 580000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 580000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 580000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 580000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 580000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 580000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 580000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 580000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 580000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 580000 - 1) break;
            } else if (player.level <= 670 && player.level > 660) {
                if (player.experience < player.level * 590000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 590000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 590000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 590000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 590000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 590000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 590000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 590000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 590000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 590000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 590000 - 1) break;
            } else if (player.level <= 680 && player.level > 670) {
                if (player.experience < player.level * 600000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 600000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 600000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 600000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 600000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 600000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 600000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 600000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 600000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 600000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 600000 - 1) break;
            } else if (player.level <= 690 && player.level > 680) {
                if (player.experience < player.level * 610000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 610000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 610000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 610000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 610000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 610000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 610000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 610000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 610000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 610000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 610000 - 1) break;
            } else if (player.level <= 700 && player.level > 690) {
                if (player.experience < player.level * 620000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 620000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 620000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 620000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 620000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 620000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 620000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 620000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 620000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 620000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 620000 - 1) break;
            } else if (player.level <= 710 && player.level > 700) {
                if (player.experience < player.level * 630000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 630000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 630000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 630000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 630000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 630000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 630000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 630000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 630000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 630000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 630000 - 1) break;
            } else if (player.level <= 720 && player.level > 710) {
                if (player.experience < player.level * 640000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 640000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 640000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 640000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 640000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 640000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 640000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 640000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 640000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 640000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 640000 - 1) break;
            } else if (player.level <= 730 && player.level > 720) {
                if (player.experience < player.level * 650000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 650000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 650000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 650000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 650000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 650000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 650000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 650000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 650000 - 1) break; 
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 650000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 650000 - 1) break;
            } else if (player.level <= 740 && player.level > 730) {
                if (player.experience < player.level * 660000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 660000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 660000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 660000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 660000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 660000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 660000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 660000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 660000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 660000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 660000 - 1) break;
            } else if (player.level <= 750 && player.level > 740) {
                if (player.experience < player.level * 670000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 670000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 670000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 670000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 670000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 670000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 670000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 670000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 670000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 670000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 670000 - 1) break;
            } else if (player.level <= 760 && player.level > 750) {
                if (player.experience < player.level * 680000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 680000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 680000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 680000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 680000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 680000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 680000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 680000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 680000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 680000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 680000 - 1) break;
            } else if (player.level <= 770 && player.level > 760) {
                if (player.experience < player.level * 690000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 690000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 690000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 690000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 690000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 690000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 690000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 690000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 690000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 690000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 690000 - 1) break;
            } else if (player.level <= 780 && player.level > 770) {
                if (player.experience < player.level * 700000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 700000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 700000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 700000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 700000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 700000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 700000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 700000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 700000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 700000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 700000 - 1) break;
            } else if (player.level <= 790 && player.level > 780) {
                if (player.experience < player.level * 710000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 710000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 710000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 710000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 710000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 710000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 710000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 710000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 710000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 710000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 710000 - 1) break;
            } else if (player.level <= 800 && player.level > 790) {
                if (player.experience < player.level * 720000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 720000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 720000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 720000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 720000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 720000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 720000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 720000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 720000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 720000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 720000 - 1) break;
            } else if (player.level <= 810 && player.level > 800) {
                if (player.experience < player.level * 730000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 730000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 730000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 730000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 730000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 730000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 730000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 730000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 730000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 730000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 730000 - 1) break;
            } else if (player.level <= 820 && player.level > 810) {
                if (player.experience < player.level * 740000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 740000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 740000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 740000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 740000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 740000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 740000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 740000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 740000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 740000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 740000 - 1) break;
            } else if (player.level <= 830 && player.level > 820) {
                if (player.experience < player.level * 750000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 750000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 750000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 750000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 750000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 750000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 750000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 750000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 750000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 750000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 750000 - 1) break;
            } else if (player.level <= 840 && player.level > 830) {
                if (player.experience < player.level * 760000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 760000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 760000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 760000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 760000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 760000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 760000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 760000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 760000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 760000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 760000 - 1) break;
            } else if (player.level <= 850 && player.level > 840) {
                if (player.experience < player.level * 770000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 770000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 770000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 770000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 770000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 770000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 770000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 770000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 770000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 770000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 770000 - 1) break;
            } else if (player.level <= 860 && player.level > 850) {
                if (player.experience < player.level * 780000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 780000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 780000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 780000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 780000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 780000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 780000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 780000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 780000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 780000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 780000 - 1) break;
            } else if (player.level <= 870 && player.level > 860) {
                if (player.experience < player.level * 790000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 790000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 790000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 790000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 790000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 790000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 790000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 790000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 790000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 790000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 790000 - 1) break;
            } else if (player.level <= 880 && player.level > 870) {
                if (player.experience < player.level * 800000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 800000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 800000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 800000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 800000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 800000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 800000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 800000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 800000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 800000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 800000 - 1) break;
            } else if (player.level <= 890 && player.level > 880) {
                if (player.experience < player.level * 810000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 810000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 810000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 810000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 810000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 810000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 810000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 810000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 810000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 810000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 810000 - 1) break;
            } else if (player.level <= 900 && player.level > 890) {
                if (player.experience < player.level * 820000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 820000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 820000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 820000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 820000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 820000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 820000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 820000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 820000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 820000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 820000 - 1) break;
            } else if (player.level <= 910 && player.level > 900) {
                if (player.experience < player.level * 830000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 830000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 830000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 830000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 830000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 830000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 830000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 830000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 830000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 830000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 830000 - 1) break;
            } else if (player.level <= 920 && player.level > 910) {
                if (player.experience < player.level * 840000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 840000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 840000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 840000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 840000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 840000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 840000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 840000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 840000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 840000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 840000 - 1) break;
            } else if (player.level <= 930 && player.level > 920) {
                if (player.experience < player.level * 850000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 850000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 850000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 850000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 850000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 850000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 850000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 850000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 850000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 850000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 850000 - 1) break;
            } else if (player.level <= 940 && player.level > 930) {
                if (player.experience < player.level * 860000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 860000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 860000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 860000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 860000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 860000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 860000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 860000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 860000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 860000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 860000 - 1) break;
            } else if (player.level <= 950 && player.level > 940) {
                if (player.experience < player.level * 870000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 870000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 870000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 870000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 870000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 870000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 870000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 870000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 870000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 870000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 870000 - 1) break;
            } else if (player.level <= 960 && player.level > 950) {
                if (player.experience < player.level * 880000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 880000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 880000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 880000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 880000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 880000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 880000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 880000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 880000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 880000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 880000 - 1) break;
            } else if (player.level <= 970 && player.level > 960) {
                if (player.experience < player.level * 890000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 890000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 890000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 890000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 890000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 890000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 890000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 890000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 890000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 890000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 890000 - 1) break;
            } else if (player.level <= 980 && player.level > 970) {
                if (player.experience < player.level * 900000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 900000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 900000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 900000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 900000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 900000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 900000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 900000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 900000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 900000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 900000 - 1) break;
            } else if (player.level <= 990 && player.level > 980) {
                if (player.experience < player.level * 910000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 910000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 910000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 910000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 910000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 910000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 910000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 910000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 910000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 910000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 910000 - 1) break;
            } else if (player.level <= 999 && player.level > 990) {
                if (player.experience < player.level * 920000 - 1) break;
                if(player.prestige === 1 && player.experience < player.level * player.prestige * 10 * 920000 - 1) break;
                if(player.prestige === 2 && player.experience < player.level * player.prestige * 50 * 920000 - 1) break;
                if(player.prestige === 3 && player.experience < player.level * player.prestige * 100 * 920000 - 1) break;
                if(player.prestige === 4 && player.experience < player.level * player.prestige * 150 * 920000 - 1) break;
                if(player.prestige === 5 && player.experience < player.level * player.prestige * 200 * 920000 - 1) break;
                if(player.prestige === 6 && player.experience < player.level * player.prestige * 250 * 920000 - 1) break;
                if(player.prestige === 7 && player.experience < player.level * player.prestige * 300 * 920000 - 1) break;
                if(player.prestige === 8 && player.experience < player.level * player.prestige * 350 * 920000 - 1) break;
                if(player.prestige === 9 && player.experience < player.level * player.prestige * 400 * 920000 - 1) break;
                if(player.prestige === 10 && player.experience < player.level * player.prestige * 500 * 920000 - 1) break;
            } else {
                client.updateUserInfo(message.member, {
                    "users.$.level": 1000,
                    "users.$.experience": 0
                });
                break;
            }
            await levelup(client, message, player);
        }
        if (player.level !== 1000 && player!== 1) {
            message.channel.send('Calcule du level en cours....')
            message.channel.send(`Tu es maintenant level => ***${player.level}***`);
        }
    }


    const strength = player.stats.strength
    const spirit = player.stats.spirit
    const consti = player.stats.constitution;
    const agility = player.stats.agility
    const intelligence = player.stats.intelligence

    let hostileStrengh = hostile.stats.strength + (player.prestige * 10500);
    let hostileHP = hostile.stats.vitality + (player.prestige * 10500);
    let hostileConsti = hostile.stats.constitution + (player.prestige * 10500);
    let hostileAgility = hostile.stats.agility + (player.prestige * 10500);
    let hostileIntel = hostile.stats.intelligence + (player.prestige * 10500);
    let hostilePo = hostile.po;
    let hostileExp = hostile.experience ;

    if (player.level <= 500 && player.prestige !== 0) {
        hostileExp = hostile.experience + (hostile.experience * player.prestige) * 1750
        hostilePo = hostile.po * player.prestige
    } else if (player.level >= 500 && player.prestige !== 0){
        hostileExp = hostile.experience + (hostile.experience * player.prestige - hostile.experience) * 1750
        hostilePo = hostile.po * player.prestige
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
                        if (hostileAtk === 0) client.channels.cache.get("778288246806806558").send(`tour ${i}: Tu as esquivé le coup !`);
                    }
                }
            }
            if (hostileAgility > agility) {
                if (PlayerAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (hostileAgility - (hostileAgility / 2)) + 1) === 0) {
                        PlayerAtk = 0
                        if (PlayerAtk === 0) client.channels.cache.get("778288246806806558").send(`tour ${i}: ${hostile.name} a esquivé le coup !`);
                    }
                }
            }
            if (intelligence > hostileIntel) {
                hostileHP -= PlayerAtk
                playerHP -= hostileAtk
                if (hostileHP <= 0) hostileHP = 0;
                const playerMessage = `tour ${i}: la bataille fait rage. ${player.username} attaque pour ${PlayerAtk} dégâts et le ${hostile.name} riposte pour ${hostileAtk} de dégâts! Il te reste ${playerHP}HP et il reste ${hostileHP}HP à ${hostile.name}`
                client.channels.cache.get("778288246806806558").send(playerMessage)
            } else {
                playerHP -= hostileAtk
                hostileHP -= PlayerAtk
                const playerMessage = `tour ${i}: la bataille fait rage. ${hostile.name} attaque pour ${hostileAtk} de dégâts et ${player.username} riposte pour ${PlayerAtk} dégâts! Il reste ${hostileHP}HP à ${hostile.name} et il te reste ${playerHP}HP`
                client.channels.cache.get("778288246806806558").send(playerMessage)
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
                    const loot = Math.floor(Math.random() * Math.floor(101))
                    if (loot > 99 - player.prestige) {
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
                    return client.channels.cache.get("778288246806806558").send(`Félicitation, la bataille est terminée après ${i - 1} tours, ${player.username}, il te reste ${playerHP}HP. Tu gagne ${hostilePo}<:GoldCoin:781575067108507648> et ${hostileExp}exp !`);
                } else {
                    await level();
                    return client.channels.cache.get("778288246806806558").send(`Félicitation, la bataille est terminée après ${i} tours, ${player.username}, il te reste ${playerHP}HP. Tu gagne ${hostilePo}<:GoldCoin:781575067108507648> et ${hostileExp}exp !`);
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