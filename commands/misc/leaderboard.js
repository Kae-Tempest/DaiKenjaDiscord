const { MessageEmbed, Guild } = require("discord.js");
let now = new Date().toLocaleString('fr-FR');
module.exports.run = async (client, message) => {
    const players = await client.getGuild(message.guild);
    const playersInfo = players.users.map(p => p.username + " => level " + p.level + ' (presitge '+ p.prestige +')');
    const user = message.author;
    const embed = new MessageEmbed()
        .setTitle("LeaderBoard")
        .setColor("RANDOM")
        .setDescription("Panneaux d'affichage des meilleurs joueurs du serveur ♥")
        .setThumbnail(user.avatarURL())
        .setFooter(user.username, user.avatarURL())
        .setTimestamp()
        .addField("ranking",`${playersInfo.join("\n")}`)
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