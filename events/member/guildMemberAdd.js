const {MessageEmbed} = require("discord.js")

module.exports = async (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#00FF00")
        .setFooter("Un utilisateur a rejoint !")
        .setTimestamp()

    client.channels.cache.get("769215379238027297").send(embed);

    await client.createUserProfile(member, member.guild);

}