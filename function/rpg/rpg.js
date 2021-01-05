const {level} = require('./level');
const {deleting} = require('./delete');

const battle = async (client, message, player, hostile) => {
    if (player.stats.vitality <= 0) return message.reply('Tu ne peux pas combattre sans HP');

    const strength = player.stats.strength
    const spirit = player.stats.spirit
    const PlayerConsti = player.stats.constitution;
    const agility = player.stats.agility
    const intelligence = player.stats.intelligence

    let strengthH = hostile.stats.strength + (player.prestige * 10000);
    let HostileHP = hostile.stats.vitality + (player.prestige * 10000);
    let HostileConsti = hostile.stats.constitution + (player.prestige * 10000);
    let agilityH = hostile.stats.agility + (player.prestige * 10000);
    let intelH = hostile.stats.intelligence + (player.prestige * 10000);
    let hostilepo = hostile.po;
    let hostileexp = hostile.experience;

    if (player.level >= 500) {
        hostileexp = hostile.experience * 2;
        if (player.prestige !== 0) {
            hostileexp = hostile.experience + (hostile.experience * player.prestige)
        }
    }
    if (player.prestige !== 0 && player.level < 500) {
        hostileexp = hostile.experience + (hostile.experience * player.prestige - hostile.experience)
    }

    async function fight(atk) {
        let PlayerHP = player.stats.vitality;
        for (let i = 1; HostileHP > 0; i++) {
            let HostileAtk = strengthH - PlayerConsti;
            let PlayerAtk = atk - HostileConsti
            if (HostileAtk < 0) HostileAtk = 0;
            if (PlayerAtk < 0) PlayerAtk = 0;
            if (PlayerAtk === 0 && HostileAtk === 0) return message.reply("Vous vous entretuez ( ou pas ) !")

            if (agility > agilityH) {
                if (HostileAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (agility - (agility / 2)) + 1) === 0) {
                        HostileAtk = 0
                        if (HostileAtk === 0) message.channel.send(`tour ${i}: Tu as esquivé le coup !`);
                    }
                }
            }
            if (agilityH > agility) {
                if (PlayerAtk !== 0) {
                    if (agility % Math.floor(Math.random() * (agilityH - (agilityH / 2)) + 1) === 0) {
                        PlayerAtk = 0
                        if (PlayerAtk === 0) message.channel.send(`tour ${i}: ${hostile.name} a esquivé le coup !`);
                    }
                }
            }
            await deleting(message, i);
            if (intelligence > intelH) {
                HostileHP -= PlayerAtk
                PlayerHP -= HostileAtk
                if (HostileHP <= 0) HostileHP = 0;
                const playerMessage = `tour ${i}: la bataille fait rage. Tu attaque pour ${PlayerAtk} dégâts et le ${hostile.name} riposte pour ${HostileAtk} de dégâts! Il te reste ${PlayerHP}HP et il reste ${HostileHP}HP à ${hostile.name}`
                await message.channel.send(playerMessage)
                if (PlayerAtk === 0 && HostileAtk === 0) await message.channel.bulkDelete(1);
            } else {
                PlayerHP -= HostileAtk
                HostileHP -= PlayerAtk
                const playerMessage = `tour ${i}: la bataille fait rage. ${hostile.name} attaque pour ${HostileAtk} de dégâts et tu riposte pour ${PlayerAtk} dégâts! Il reste ${HostileHP}HP à ${hostile.name} et il te reste ${PlayerHP}HP`
                await message.channel.send(playerMessage)
                if (PlayerAtk === 0 && HostileAtk === 0) await message.channel.bulkDelete(1);
            }
            if (PlayerHP <= 0) {
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": 0
                });
                if (PlayerHP <= 0) await message.channel.bulkDelete(1);
                return message.reply("Tu es mort");
            }
            if (HostileHP <= 0) {
                PlayerHP += HostileAtk
                player.po += hostilepo;
                player.experience += hostileexp;
                client.updateUserInfo(message.member, {
                    "users.$.stats.vitality": PlayerHP,
                    "users.$.po": player.po,
                    "users.$.experience": player.experience
                });
                if (intelligence > intelH) {
                    if (HostileHP <= 0) await message.channel.bulkDelete(1);
                    await level(client, message, player);
                    return message.channel.send(`Félicitation, la bataille est terminée après ${i - 1} tours, il te reste ${PlayerHP}HP et tu gagne ${hostilepo}<:GoldCoin:781575067108507648> et tu gagne ${hostileexp}exp !`);
                } else {
                    if (HostileHP <= 0) await message.channel.bulkDelete(1)
                    await level(client, message, player);
                    return message.channel.send(`Félicitation, la bataille est terminée après ${i} tours, il te reste ${PlayerHP}HP et tu gagne ${hostilepo}<:GoldCoin:781575067108507648> et tu gagne ${hostileexp}exp !`);
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