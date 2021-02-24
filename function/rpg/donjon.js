const { levelup, isWhithin, prestigeForest } = require('./levelup');
const hostile = require('../../assets/npc/hostile.json');
const { capitalize } = require('../other/string');


const donjon = (client, message, player) => {
    if (player.stats.vitality <= 0) return message.reply('Tu ne peux pas combattre sans HP');

    async function level() {
        let levelsend = false
        while (player.level !== 0 && player.level !== 1000) {
            if (isWhithin(player, 0, 10)) {if (prestigeForest(player, 250)) break;} 
            else if (isWhithin(player, 10, 20)) {if (prestigeForest(player, 500)) break;} 
            else if (isWhithin(player, 20, 30)) {if (prestigeForest(player, 750)) break;} 
            else if (isWhithin(player, 30, 40)) {if (prestigeForest(player, 1000)) break;} 
            else if (isWhithin(player, 40, 50)) {if (prestigeForest(player, 3000)) break;}
            else if (isWhithin(player, 50, 60)) {if (prestigeForest(player, 5000)) break;} 
            else if (isWhithin(player, 60, 70)) {if (prestigeForest(player, 7000)) break;} 
            else if (isWhithin(player, 70, 80)) {if (prestigeForest(player, 9000)) break;} 
            else if (isWhithin(player, 80, 90)) {if (prestigeForest(player, 15000)) break;} 
            else if (isWhithin(player, 90, 100)) {if (prestigeForest(player, 20000)) break;} 
            else if (isWhithin(player, 100, 110)) {if (prestigeForest(player, 30000)) break;} 
            else if (isWhithin(player, 110, 120)) {if (prestigeForest(player, 40000)) break;} 
            else if (isWhithin(player, 120, 130)) {if (prestigeForest(player, 50000)) break;} 
            else if (isWhithin(player, 130, 140)) {if (prestigeForest(player, 60000)) break;} 
            else if (isWhithin(player, 140, 150)) {if (prestigeForest(player, 70000)) break;} 
            else if (isWhithin(player, 150, 160)) {if (prestigeForest(player, 80000)) break;}
            else if (isWhithin(player, 160, 170)) {if (prestigeForest(player, 90000)) break;} 
            else if (isWhithin(player, 170, 180)) {if (prestigeForest(player, 100000)) break;}
            else if (isWhithin(player, 180, 190)) {if (prestigeForest(player, 110000)) break;}
            else if (isWhithin(player, 190, 200)) {if (prestigeForest(player, 120000)) break;}
            else if (isWhithin(player, 200, 210)) {if (prestigeForest(player, 130000)) break;}
            else if (isWhithin(player, 210, 220)) {if (prestigeForest(player, 140000)) break;}
            else if (isWhithin(player, 220, 230)) {if (prestigeForest(player, 150000)) break;}
            else if (isWhithin(player, 230, 240)) {if (prestigeForest(player, 160000)) break;}
            else if (isWhithin(player, 240, 250)) {if (prestigeForest(player, 170000)) break;}
            else if (isWhithin(player, 250, 260)) {if (prestigeForest(player, 180000)) break;}
            else if (isWhithin(player, 260, 270)) {if (prestigeForest(player, 190000)) break;}
            else if (isWhithin(player, 270, 280)) {if (prestigeForest(player, 200000)) break;}
            else if (isWhithin(player, 280, 290)) {if (prestigeForest(player, 210000)) break;}
            else if (isWhithin(player, 290, 300)) {if (prestigeForest(player, 220000)) break;}
            else if (isWhithin(player, 300, 310)) {if (prestigeForest(player, 230000)) break;}
            else if (isWhithin(player, 310, 320)) {if (prestigeForest(player, 240000)) break;}
            else if (isWhithin(player, 320, 330)) {if (prestigeForest(player, 250000)) break;}
            else if (isWhithin(player, 330, 340)) {if (prestigeForest(player, 260000)) break;}
            else if (isWhithin(player, 340, 350)) {if (prestigeForest(player, 270000)) break;}
            else if (isWhithin(player, 350, 360)) {if (prestigeForest(player, 280000)) break;}
            else if (isWhithin(player, 360, 370)) {if (prestigeForest(player, 290000)) break;}
            else if (isWhithin(player, 370, 380)) {if (prestigeForest(player, 300000)) break;}
            else if (isWhithin(player, 380, 390)) {if (prestigeForest(player, 310000)) break;}
            else if (isWhithin(player, 390, 400)) {if (prestigeForest(player, 320000)) break;}
            else if (isWhithin(player, 400, 410)) {if (prestigeForest(player, 330000)) break;}
            else if (isWhithin(player, 410, 420)) {if (prestigeForest(player, 340000)) break;}
            else if (isWhithin(player, 420, 430)) {if (prestigeForest(player, 350000)) break;}
            else if (isWhithin(player, 430, 440)) {if (prestigeForest(player, 360000)) break;}
            else if (isWhithin(player, 440, 450)) {if (prestigeForest(player, 370000)) break;}
            else if (isWhithin(player, 450, 460)) {if (prestigeForest(player, 380000)) break;}
            else if (isWhithin(player, 460, 470)) {if (prestigeForest(player, 390000)) break;}
            else if (isWhithin(player, 470, 480)) {if (prestigeForest(player, 400000)) break;}
            else if (isWhithin(player, 480, 490)) {if (prestigeForest(player, 410000)) break;}
            else if (isWhithin(player, 490, 500)) {if (prestigeForest(player, 420000)) break;}
            else if (isWhithin(player, 500, 510)) {if (prestigeForest(player, 430000)) break;}
            else if (isWhithin(player, 510, 520)) {if (prestigeForest(player, 440000)) break;}
            else if (isWhithin(player, 520, 530)) {if (prestigeForest(player, 450000)) break;}
            else if (isWhithin(player, 530, 540)) {if (prestigeForest(player, 460000)) break;}
            else if (isWhithin(player, 540, 550)) {if (prestigeForest(player, 470000)) break;}
            else if (isWhithin(player, 550, 560)) {if (prestigeForest(player, 480000)) break;}
            else if (isWhithin(player, 560, 570)) {if (prestigeForest(player, 490000)) break;}
            else if (isWhithin(player, 570, 580)) {if (prestigeForest(player, 500000)) break;}
            else if (isWhithin(player, 580, 590)) {if (prestigeForest(player, 510000)) break;}
            else if (isWhithin(player, 590, 600)) {if (prestigeForest(player, 520000)) break;}
            else if (isWhithin(player, 600, 610)) {if (prestigeForest(player, 530000)) break;}
            else if (isWhithin(player, 610, 620)) {if (prestigeForest(player, 540000)) break;}
            else if (isWhithin(player, 620, 630)) {if (prestigeForest(player, 550000)) break;}
            else if (isWhithin(player, 630, 640)) {if (prestigeForest(player, 560000)) break;}
            else if (isWhithin(player, 640, 650)) {if (prestigeForest(player, 570000)) break;}
            else if (isWhithin(player, 650, 660)) {if (prestigeForest(player, 580000)) break;}
            else if (isWhithin(player, 660, 670)) {if (prestigeForest(player, 590000)) break;}
            else if (isWhithin(player, 670, 680)) {if (prestigeForest(player, 600000)) break;}
            else if (isWhithin(player, 680, 690)) {if (prestigeForest(player, 610000)) break;}
            else if (isWhithin(player, 690, 700)) {if (prestigeForest(player, 620000)) break;}
            else if (isWhithin(player, 700, 710)) {if (prestigeForest(player, 630000)) break;}
            else if (isWhithin(player, 710, 720)) {if (prestigeForest(player, 640000)) break;}
            else if (isWhithin(player, 720, 730)) {if (prestigeForest(player, 650000)) break;}
            else if (isWhithin(player, 730, 740)) {if (prestigeForest(player, 660000)) break;}
            else if (isWhithin(player, 740, 750)) {if (prestigeForest(player, 670000)) break;}
            else if (isWhithin(player, 750, 760)) {if (prestigeForest(player, 680000)) break;}
            else if (isWhithin(player, 760, 770)) {if (prestigeForest(player, 690000)) break;}
            else if (isWhithin(player, 770, 780)) {if (prestigeForest(player, 700000)) break;}
            else if (isWhithin(player, 780, 790)) {if (prestigeForest(player, 710000)) break;}
            else if (isWhithin(player, 790, 800)) {if (prestigeForest(player, 720000)) break;}
            else if (isWhithin(player, 800, 810)) {if (prestigeForest(player, 730000)) break;}
            else if (isWhithin(player, 810, 820)) {if (prestigeForest(player, 740000)) break;}
            else if (isWhithin(player, 820, 830)) {if (prestigeForest(player, 750000)) break;}
            else if (isWhithin(player, 830, 840)) {if (prestigeForest(player, 760000)) break;}
            else if (isWhithin(player, 840, 850)) {if (prestigeForest(player, 770000)) break;}
            else if (isWhithin(player, 850, 860)) {if (prestigeForest(player, 780000)) break;}
            else if (isWhithin(player, 860, 870)) {if (prestigeForest(player, 790000)) break;}
            else if (isWhithin(player, 870, 880)) {if (prestigeForest(player, 800000)) break;}
            else if (isWhithin(player, 880, 890)) {if (prestigeForest(player, 810000)) break;}
            else if (isWhithin(player, 890, 900)) {if (prestigeForest(player, 820000)) break;}
            else if (isWhithin(player, 900, 910)) {if (prestigeForest(player, 830000)) break;}
            else if (isWhithin(player, 910, 920)) {if (prestigeForest(player, 840000)) break;}
            else if (isWhithin(player, 920, 930)) {if (prestigeForest(player, 850000)) break;}
            else if (isWhithin(player, 930, 940)) {if (prestigeForest(player, 860000)) break;}
            else if (isWhithin(player, 940, 950)) {if (prestigeForest(player, 870000)) break;}
            else if (isWhithin(player, 950, 960)) {if (prestigeForest(player, 880000)) break;}
            else if (isWhithin(player, 960, 970)) {if (prestigeForest(player, 890000)) break;}
            else if (isWhithin(player, 970, 980)) {if (prestigeForest(player, 900000)) break;}
            else if (isWhithin(player, 980, 990)) {if (prestigeForest(player, 910000)) break;}
            else if (isWhithin(player, 990, 999)) {if (prestigeForest(player, 920000)) break;}
            else {
                client.updateUserInfo(message.member, {
                    "users.$.level": 1000,
                    "users.$.experience": 0
                });
                break;
            }
            await levelup(client, message, player);
            levelsend = true
        }
        if (player.level !== 1000 && player !== 1 && levelsend === true) {
            message.channel.send('Calcule du level en cours....')
            message.reply(`Tu es maintenant level => ***${player.level}***`);
        }
    }

   function setBoss(name) {
        let BossName = name
        const position = hostile.map(n => n.name).indexOf(capitalize(BossName))
        const Boss = hostile[position]
        return Boss
    }


    const strength = player.stats.strength;
    const spirit = player.stats.spirit;
    const consti = player.stats.constitution;
    const agility = player.stats.agility;
    const intelligence = player.stats.intelligence;
    const attribut = player.attribut
    const nameOfBoss = hostile.map(n => n.name)
    
        async function dj (atk){
        for(let i = 1; playerHP > 0 ; i++) {
            let playerHP = player.stats.vitality;
            let floorBoss = nameOfBoss[Math.floor(Math.random() * (nameOfBoss.length - 1) )]
            const boss = setBoss(floorBoss)
            client.channels.cache.get("813056123216330763").send(`Vous etes étages ${i} et vous tombez sur ***${floorBoss}***`)
            let bossHP = boss.stats.vitality + (player.prestige * 12500);
            let bossStrength = boss.stats.strength + (player.prestige * 12500);
            let bossConsti = boss.stats.constitution + (player.prestige * 12500);
            let bossAgility = boss.stats.agility + (player.prestige * 12500);
            let bossIntel = boss.stats.intelligence + (player.prestige * 12500);
            let bossPo = boss.po;
            let bossExp = boss.experience;
            if (player.level <= 500 && player.prestige !== 0) {
                bossExp = boss.experience + (boss.experience * player.prestige) * 1750
                bossPo = boss.po * player.prestige
            } else if (player.level >= 500 && player.prestige !== 0) {
                bossExp = boss.experience + (boss.experience * player.prestige - boss.experience) * 1750
                bossPo = boss.po * player.prestige
            }
            let bossAtk = bossStrength - consti
            let hostileResistance = boss.attribut.resistance;
            let hostileResi = attribut.find(element => element === hostileResistance[0])
            let hostileFaiblesse = boss.attribut.faiblesse;
            let hostileFaib = attribut.find(element => element === hostileFaiblesse[0])
            let playerAtk;
            if (hostileResi !== undefined) playerAtk = (atk - bossConsti) / 2;
            if (hostileFaib !== undefined) playerAtk = (atk - bossConsti) * 2;
            if (hostileResi === undefined && hostileFaib === undefined) playerAtk = atk - bossConsti;
            if (hostileResi !== undefined && hostileFaib !== undefined) playerAtk = atk - bossConsti;

            if (player.level <= 500 && player.prestige !== 0) {
                hostileExp = hostile.experience + (hostile.experience * player.prestige) * 1750
                hostilePo = hostile.po * player.prestige
            } else if (player.level >= 500 && player.prestige !== 0) {
                hostileExp = hostile.experience + (hostile.experience * player.prestige - hostile.experience) * 1750
                hostilePo = hostile.po * player.prestige
            }

            if (bossAtk < 0 ) bossATK = 0;
            if (playerAtk < 0 ) playerAtk = 0;
            if (playerAtk === 0 && bossAtk === 0){
                 message.reply(`Vous et ${floorBoss} perrisez a l'étage ${i}`)
                 client.updateUserInfo(message.member,{
                     "users.$.stats.vitality": 0
                });
            }
            if (agility > bossAgility) {
                if(bossAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (agility - (agility / 2)) + 1) === 0) {
                        bossAtk = 0 
                        client.channels.cache.get("813056123216330763").send(`tour ${i}: Tu as esquivé le coup !`);
                    }
                }
            }
            if (intelligence > bossIntel) {
                bossHP -= playerAtk
                playerHP -= bossAtk
            } else {
                playerHP -= bossAtk
                bossHP -= playerAtk
            }
            if (playerHP <= 0) {
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": 0
                });
                return message.reply("Tu es mort");
            }
            if (bossHP <= 0) {
                player.po += bossPo;
                player.experience += bossExp;
                if (hostile.category !== "Monster") {
                    const loot = Math.floor(Math.random() * Math.floor(101))
                    if (loot > 89 - player.prestige) {
                        const userInventory = player.inventory
                        if (boss.loot !== undefined) {
                            const drop = boss.loot[Math.round(Math.random() * (boss.loot.length - 1))]
                            userInventory.push(drop)
                            client.updateUserInfo(message.member, {
                                "users.$.inventory": userInventory
                            });
                            message.reply(`Tu viens de looter sur \`${floorBoss}\` => **${drop}**`);
                        }
                    }
                }
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": playerHP,
                    "users.$.po": player.po,
                    "users.$.experience": player.experience
                });
                if (intelligence > bossIntel) {
                    await level();
                    await client.channels.cache.get("813056123216330763").send(`Félicitation, la bataille est terminée après ${i - 1} tours, ${player.username}, il te reste ${playerHP}HP. Tu gagne ${bossPo.toLocaleString({ minimumFractionDigits: 2 })}<:GoldCoin:781575067108507648> et ${bossExp.toLocaleString({ minimumFractionDigits: 2 })}exp !`);
                } else {
                    await level();
                    await client.channels.cache.get("813056123216330763").send(`Félicitation, la bataille est terminée après ${i} tours, ${player.username}, il te reste ${playerHP}HP. Tu gagne ${bossPo.toLocaleString({ minimumFractionDigits: 2 })}<:GoldCoin:781575067108507648> et ${bossExp.toLocaleString({ minimumFractionDigits: 2 })}exp !`);
                }
            }
            if( i === 100) return message.reply(`Vous avez finis les 100 étages du donjon ! Il vous reste ${playerHP}HP`)
            if ( i % 10 === 0 ) {
                try {
                    message.reply(`Voulez vous quitter le donjon a l'étage ${i} ? (240s)`);
                    const filter = m => (message.author.id === m.author.id);
                    const userEntry = await message.channel.awaitMessages(filter, {
                        max: 1, time: 240000, errors: ['time']
                    });
                    if (userEntry.first().content.toLowerCase() === "oui") {
                       return message.reply(`Vous quittez le donjon à l'étage ${i}. Il vous reste ${playerHP}HP`)
                    } else throw errors
                } catch (e) {
                    message.reply("Vous continuez le combat !")
                }
            }
        }
    }
    if (player.class === "Mage") {
        dj(spirit);
    } else {
        dj(strength);
    }
}
module.exports = {donjon}