const { MessageEmbed } = require("discord.js");

module.exports = {
    run: async (client, message, args, player) => {
        const embed = new MessageEmbed()
            .setTitle("Success List")
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())
            .addField("SUCCESS (\*Monster\*):",
                `Tueur de Slime ${player.success.Slime === true ? ' ✅' : " ❌" }
                 Tueur de Goblin ${player.success.Goblin === true ? ' ✅' : " ❌" }
                 Tueur de Wildboar ${player.success.Wildboar === true ? ' ✅' : " ❌" }
                 Tueur de Cave Spider ${player.success.Cave_Spider === true ? ' ✅' : " ❌" }
                 Tueur de Wolf ${player.success.Wolf === true ? ' ✅' : " ❌" }
                 Tueur de Skeleton ${player.success.Skeleton === true ? ' ✅' : " ❌" }
                 Tueur de Shadow ${player.success.Shadow === true ? ' ✅' : " ❌" }
                 Tueur d'Ogre ${player.success.Ogre === true ? ' ✅' : " ❌" }
                 Tueur de Giant Mantis ${player.success.Giant_Mantis === true ? ' ✅' : " ❌" }
                 Tueur d'Orc ${player.success.orc === true ? ' ✅' : " ❌" }
                 Tueur de Phantomtooth ${player.success.Phantomtooth === true ? ' ✅' : " ❌" }
                 Tueur de Vaporhag ${player.success.Vaporhag === true ? ' ✅' : " ❌" }
                 Tueur de Gloomfang ${player.success.Gloomfang === true ? ' ✅' : " ❌" }
                 Tueur de Taintscreamer ${player.success.Taintscreamer === true ? ' ✅' : " ❌" }
                 Tueur de Cryptsoul ${player.success.Cryptsoul === true ? ' ✅' : " ❌" }
                 Tueur de Mimic ${player.success.Mimic === true ? ' ✅' : " ❌" }
                 Tueur de Zombie ${player.success.Zombie === true ? ' ✅' : " ❌" }
                 Tueur de Becale ${player.success.Becale === true ? ' ✅' : " ❌" }
                 Tueur de Sopurenne ${player.success.Sopurenne === true ? ' ✅' : " ❌" }
                 Tueur de Dark timilo ${player.success.Dark_timilo === true ? ' ✅' : " ❌" }
                 Tueur de Hellwraith ${player.success.Hellwraith === true ? ' ✅' : " ❌" }
                 Tueur de Vampmask ${player.success.Vampmask === true ? ' ✅' : " ❌" }
                 Tueur de Dreadfang ${player.success.Dreadfang === true ? ' ✅' : " ❌" }
                 Tueur de Hellstep ${player.success.Hellstep === true ? ' ✅' : " ❌" }
                 Tueur de Wispling ${player.success.Wispling === true ? ' ✅' : " ❌" }
                 `)
                 .addField("SUCCESS (\*Boss\*) :",`
                 Tueur de King Slime ${player.success.King_Slime === true ? ' ✅' : " ❌" }
                 Tueur de Giant Armored Cave Spider ${player.success.Giant_Armored_Cave_Spider === true ? ' ✅' : " ❌" }
                 Tueur de King Kobold Lord ${player.success.King_Kobold_Lord === true ? ' ✅' : " ❌" }
                 Tueur de Moonlight Cat ${player.success.Moonlight_cat === true ? ' ✅' : " ❌" }
                 Tueur d'Orc Disaster ${player.success.Orc_Disaster === true ? ' ✅' : " ❌" }
                 Tueur d'Elyon ${player.success.Elyon === true ? ' ✅' : " ❌" }
                 Tueur de Dracula ${player.success.Dracula === true ? ' ✅' : " ❌" }
                 Tueur de Bowser ${player.success.Bowser === true ? ' ✅' : " ❌" }
                 Tueur de Shogun ${player.success.Shogun === true ? ' ✅' : " ❌" }
                 Tueur de Fake Kami ${player.success.Fake_Kami === true ? ' ✅' : " ❌" }
                 Tueur de The Gleam Eyes ${player.success.The_Gleam_Eyes === true ? ' ✅' : " ❌" }
                 Tueur de Kae ${player.success.Kae === true ? ' ✅' : " ❌" }
                 Tueur de Charybdis ${player.success.Charybdis === true ? ' ✅' : " ❌" }
                 Tueur de Yuusha ${player.success.Yuusha === true ? ' ✅' : " ❌" }
                 Tueur de Demon Lord ${player.success.Demon_Lord === true ? ' ✅' : " ❌" }
                 Tueur de Maho ${player.success.Maho === true ? ' ✅' : " ❌" }
                 Tueur de Norico ${player.success.Norico === true ? ' ✅' : " ❌" }
                 Tueur de Thor ${player.success.Thor === true ? ' ✅' : " ❌" }
                 Tueur d'Odin ${player.success.Odin === true ? ' ✅' : " ❌" }
                 Tueur de Reaper ${player.success.Reaper === true ? ' ✅' : " ❌" }
                 Tueur de Rimuru ${player.success.Rimuru === true ? ' ✅' : " ❌" }
                 Tueur de Skarab ${player.success.Skarab === true ? ' ✅' : " ❌" }
                 Tuer de Naminoe ${player.success.Naminoe === true ? ' ✅' : " ❌" }
                 Tueur de Kami ${player.success.Kami === true ? ' ✅' : " ❌" }
                `
            )
        message.channel.send(embed);
    }, help: {
        name: "success",
        aliases: ["success","Success","SUCCESS","exploit","Exploit","EXPLOIT"],
        category: 'rpg',
        description: "affiche les exploit",
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
};