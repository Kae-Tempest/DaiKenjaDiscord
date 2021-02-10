const { MessageEmbed, MessageAttachment } = require("discord.js");
const leaderboard = new MessageAttachment('./imgembed/leaderboard.png');
module.exports.run = async (client, message) => {
    const players = await client.getGuild(message.guild);
    players.users.sort((a, b) => b.prestige - a.prestige, (c,d) => c.level - d.level);
    const playerInfo = players.users.map(p => "***"+p.username + "*** => level : " + p.level + " | ( prestige : " + p.prestige + " )" ).slice(0,9)

    const user = message.author;
    const embed = new MessageEmbed()
        .attachFiles(leaderboard)
        .setTitle("LeaderBoard")
        .setColor("RANDOM")
        .setDescription("Panneaux d'affichage des 10 meilleurs joueurs du serveur ♥")
        .setThumbnail(`attachment://leaderboard.png`)
        .setFooter(`Leaderboard`, user.avatarURL())
        .setTimestamp()
        .addField("ranking",`${playerInfo.join("\n")}`)
    message.channel.send(embed);
};

module.exports.help = {
    name: "leaderboard",
    aliases: ["leaderboard","Leaderboard","LEADERBOARD","ld","Ld","LD"],
    category: 'misc',
    description: "affiche le Leaderboard",
    cd: 10,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: false
};