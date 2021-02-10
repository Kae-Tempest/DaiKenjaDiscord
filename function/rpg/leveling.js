const leveling = (client, message, player) => {
    function level(lvlmin, lvlmax, exp) {
        if (player.level <= lvlmax && player.level > lvlmin) {
            if(player.prestige === 0 ) {
                if (player.experience >= player.level * exp - 1) {
                    player.experience -= player.level * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 1 ) {
                if (player.experience >= player.level * player.prestige * 10 * exp - 1) {
                    player.experience -= player.level * player.prestige * 10 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 2) {
                if (player.experience >= player.level * player.prestige * 50 * exp - 1) {
                    player.experience -= player.level * player.prestige * 50 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 3) {
                if (player.experience >= player.level * player.prestige * 100 * exp - 1) {
                    player.experience -= player.level * player.prestige * 100 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 4) {
                if (player.experience >= player.level * player.prestige * 150 * exp - 1) {
                    player.experience -= player.level * player.prestige * 150 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 5) {
                if (player.experience >= player.level * player.prestige * 200 * exp - 1) {
                    player.experience -= player.level * player.prestige * 200 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 6) {
                if (player.experience >= player.level * player.prestige * 250 * exp - 1) {
                    player.experience -= player.level * player.prestige * 250 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 7) {
                if (player.experience >= player.level * player.prestige * 300 * exp - 1) {
                    player.experience -= player.level * player.prestige * 300 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 8) {
                if (player.experience >= player.level * player.prestige * 350 * exp - 1) {
                    player.experience -= player.level * player.prestige * 350 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 9) {
                if (player.experience >= player.level * player.prestige * 400 * exp - 1) {
                    player.experience -= player.level * player.prestige * 400 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
            if (player.prestige === 10) {
                if (player.experience >= player.level * player.prestige * 500 * exp - 1) {
                    player.experience -= player.level * player.prestige * 500 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
            }
        }
    }

    level(0, 10, 250);
    level(10, 20, 500);
    level(20, 30, 750);
    level(30, 40, 1000);
    level(40, 50, 3000);
    level(50, 60, 5000);
    level(60, 70, 7000);
    level(70, 80, 9000);
    level(80, 90, 15000);
    level(90, 100, 20000);
    level(100, 110, 30000);
    level(110, 120, 40000);
    level(120, 130, 50000);
    level(130, 140, 60000);
    level(140, 150, 70000);
    level(150, 160, 80000);
    level(160, 170, 90000);
    level(170, 180, 100000);
    level(180, 190, 110000);
    level(190, 200, 120000);
    level(200, 210, 130000);
    level(210, 220, 140000);
    level(220, 230, 150000);
    level(230, 240, 160000);
    level(240, 250, 170000);
    level(250, 260, 180000);
    level(260, 270, 190000);
    level(270, 280, 200000);
    level(280, 290, 210000);
    level(290, 300, 220000);
    level(300, 310, 230000);
    level(310, 320, 240000);
    level(320, 330, 250000);
    level(330, 340, 260000);
    level(340, 350, 270000);
    level(350, 360, 280000);
    level(360, 370, 290000);
    level(370, 380, 300000);
    level(380, 390, 310000);
    level(390, 400, 320000);
    level(400, 410, 330000);
    level(410, 420, 340000);
    level(420, 430, 350000);
    level(430, 440, 360000);
    level(440, 450, 370000);
    level(450, 460, 380000);
    level(460, 470, 390000);
    level(470, 480, 400000);
    level(480, 490, 410000);
    level(490, 500, 420000);
    level(500, 510, 430000);
    level(510, 520, 440000);
    level(520, 530, 450000);
    level(530, 540, 460000);
    level(540, 550, 470000);
    level(550, 560, 480000);
    level(560, 570, 490000);
    level(570, 580, 500000);
    level(580, 590, 510000);
    level(590, 600, 520000);
    level(600, 610, 530000);
    level(610, 620, 540000);
    level(620, 630, 550000);
    level(630, 640, 560000);
    level(640, 650, 570000);
    level(650, 660, 580000);
    level(660, 670, 590000);
    level(670, 680, 600000);
    level(680, 690, 610000);
    level(690, 700, 620000);
    level(700, 710, 630000);
    level(710, 720, 640000);
    level(720, 730, 650000);
    level(730, 740, 660000);
    level(740, 750, 670000);
    level(750, 760, 680000);
    level(760, 770, 690000);
    level(770, 780, 700000);
    level(780, 790, 710000);
    level(790, 800, 720000);
    level(800, 810, 730000);
    level(810, 820, 740000);
    level(820, 830, 750000);
    level(830, 840, 760000);
    level(840, 850, 770000);
    level(850, 860, 780000);
    level(860, 870, 790000);
    level(870, 880, 800000);
    level(880, 890, 810000);
    level(890, 900, 820000);
    level(900, 910, 830000);
    level(910, 920, 840000);
    level(920, 930, 850000);
    level(930, 940, 860000);
    level(940, 950, 870000);
    level(950, 960, 880000);
    level(960, 970, 890000);
    level(970, 980, 900000);
    level(980, 990, 910000);
    level(990, 1000, 920000);

}
const levelingduo = (client, message, player, player2 , user) => {
    function levelduo(lvlmin, lvlmax, exp) {
        if (player.level <= lvlmax && player.level > lvlmin) {
            if(player.prestige === 0 || player2.prestige === 0) {
                if (player.experience >= player.level * exp - 1) {
                    player.experience -= player.level * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * exp - 1) {
                    player2.experience -= player2.level * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 1 || player2.prestige === 1) {
                if (player.experience >= player.level * player.prestige * 10 * exp - 1) {
                    player.experience -= player.level * player.prestige * 10 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 10 * exp - 1) {
                    player2.experience -= player2.level * 10 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 2 || player2.prestige === 2 ) {
                if (player.experience >= player.level * player.prestige * 50 * exp - 1) {
                    player.experience -= player.level * player.prestige * 50 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 50 * exp - 1) {
                    player2.experience -= player2.level * 50 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 3 || player2.prestige === 3 ) {
                if (player.experience >= player.level * player.prestige * 100 * exp - 1) {
                    player.experience -= player.level * player.prestige * 100 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 100 * exp - 1) {
                    player2.experience -= player2.level * 100 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 4 || player2.prestige === 4) {
                if (player.experience >= player.level * player.prestige * 150 * exp - 1) {
                    player.experience -= player.level * player.prestige * 150 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 150 * exp - 1) {
                    player2.experience -= player2.level * 150 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 5 || player2.prestige === 5 ) {
                if (player.experience >= player.level * player.prestige * 200 * exp - 1) {
                    player.experience -= player.level * player.prestige * 200 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 200 * exp - 1) {
                    player2.experience -= player2.level * 200 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 6 || player2.prestige === 6 ) {
                if (player.experience >= player.level * player.prestige * 250 * exp - 1) {
                    player.experience -= player.level * player.prestige * 250 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 250 * exp - 1) {
                    player2.experience -= player2.level * 250 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 7 || player2.prestige === 7 ) {
                if (player.experience >= player.level * player.prestige * 300 * exp - 1) {
                    player.experience -= player.level * player.prestige * 300 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 300 * exp - 1) {
                    player2.experience -= player2.level * 300 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 8 || player2.prestige === 8 ) {
                if (player.experience >= player.level * player.prestige * 350 * exp - 1) {
                    player.experience -= player.level * player.prestige * 350 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 350 * exp - 1) {
                    player2.experience -= player2.level * 350 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 9 || player2.prestige === 9 ) {
                if (player.experience >= player.level * player.prestige * 400 * exp - 1) {
                    player.experience -= player.level * player.prestige * 400 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 400 * exp - 1) {
                    player2.experience -= player2.level * 400 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
            if (player.prestige === 10 || player2.prestige === 10 ) {
                if (player.experience >= player.level * player.prestige * 500 * exp - 1) {
                    player.experience -= player.level * player.prestige * 500 * exp;
                    player.level += 1
                    client.updateUserInfo(message.member, {
                        "users.$.level": player.level,
                        "users.$.experience": player.experience
                    });
                }
                if (player2.experience >= player2.level * 500 * exp - 1) {
                    player2.experience -= player2.level * 500 * exp;
                    player2.level += 1
                    client.updateUserInfo(user, {
                        "users.$.level": player2.level,
                        "users.$.experience": player2.experience
                    });
                }
            }
        }
    }

    levelduo(0, 10, 250);
    levelduo(10, 20, 500);
    levelduo(20, 30, 750);
    levelduo(30, 40, 1000);
    levelduo(40, 50, 3000);
    levelduo(50, 60, 5000);
    levelduo(60, 70, 7000);
    levelduo(70, 80, 9000);
    levelduo(80, 90, 15000);
    levelduo(90, 100, 20000);
    levelduo(100, 110, 30000);
    levelduo(110, 120, 40000);
    levelduo(120, 130, 50000);
    levelduo(130, 140, 60000);
    levelduo(140, 150, 70000);
    levelduo(150, 160, 80000);
    levelduo(160, 170, 90000);
    levelduo(170, 180, 100000);
    levelduo(180, 190, 110000);
    levelduo(190, 200, 120000);
    levelduo(200, 210, 130000);
    levelduo(210, 220, 140000);
    levelduo(220, 230, 150000);
    levelduo(230, 240, 160000);
    levelduo(240, 250, 170000);
    levelduo(250, 260, 180000);
    levelduo(260, 270, 190000);
    levelduo(270, 280, 200000);
    levelduo(280, 290, 210000);
    levelduo(290, 300, 220000);
    levelduo(300, 310, 230000);
    levelduo(310, 320, 240000);
    levelduo(320, 330, 250000);
    levelduo(330, 340, 260000);
    levelduo(340, 350, 270000);
    levelduo(350, 360, 280000);
    levelduo(360, 370, 290000);
    levelduo(370, 380, 300000);
    levelduo(380, 390, 310000);
    levelduo(390, 400, 320000);
    levelduo(400, 410, 330000);
    levelduo(410, 420, 340000);
    levelduo(420, 430, 350000);
    levelduo(430, 440, 360000);
    levelduo(440, 450, 370000);
    levelduo(450, 460, 380000);
    levelduo(460, 470, 390000);
    levelduo(470, 480, 400000);
    levelduo(480, 490, 410000);
    levelduo(490, 500, 420000);
    levelduo(500, 510, 430000);
    levelduo(510, 520, 440000);
    levelduo(520, 530, 450000);
    levelduo(530, 540, 460000);
    levelduo(540, 550, 470000);
    levelduo(550, 560, 480000);
    levelduo(560, 570, 490000);
    levelduo(570, 580, 500000);
    levelduo(580, 590, 510000);
    levelduo(590, 600, 520000);
    levelduo(600, 610, 530000);
    levelduo(610, 620, 540000);
    levelduo(620, 630, 550000);
    levelduo(630, 640, 560000);
    levelduo(640, 650, 570000);
    levelduo(650, 660, 580000);
    levelduo(660, 670, 590000);
    levelduo(670, 680, 600000);
    levelduo(680, 690, 610000);
    levelduo(690, 700, 620000);
    levelduo(700, 710, 630000);
    levelduo(710, 720, 640000);
    levelduo(720, 730, 650000);
    levelduo(730, 740, 660000);
    levelduo(740, 750, 670000);
    levelduo(750, 760, 680000);
    levelduo(760, 770, 690000);
    levelduo(770, 780, 700000);
    levelduo(780, 790, 710000);
    levelduo(790, 800, 720000);
    levelduo(800, 810, 730000);
    levelduo(810, 820, 740000);
    levelduo(820, 830, 750000);
    levelduo(830, 840, 760000);
    levelduo(840, 850, 770000);
    levelduo(850, 860, 780000);
    levelduo(860, 870, 790000);
    levelduo(870, 880, 800000);
    levelduo(880, 890, 810000);
    levelduo(890, 900, 820000);
    levelduo(900, 910, 830000);
    levelduo(910, 920, 840000);
    levelduo(920, 930, 850000);
    levelduo(930, 940, 860000);
    levelduo(940, 950, 870000);
    levelduo(950, 960, 880000);
    levelduo(960, 970, 890000);
    levelduo(970, 980, 900000);
    levelduo(980, 990, 910000);
    levelduo(990, 1000, 920000);

}

module.exports = {
    leveling,
    levelingduo
}