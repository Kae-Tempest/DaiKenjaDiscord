const {MessageEmbed} = require ('discord.js');

module.exports = {
    run: (client, message) => {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
            .addFields(
                {name:'Serveurs' , value:`${client.guilds.cache.size.toString()}`, inline: true},
                {name:'\u200b' , value:`\u200b`, inline: true},
                {name:'Utilisateurs' , value:`${client.guilds.cache.map(g => g.memberCount).reduce((a,b) => a + b)}`, inline: true},
                {name:'Support' , value:`[Invite](https://discord.gg/WQP2Tt4bwE)`, inline: true},
                {name:'\u200b' , value:`\u200b`, inline: true},
                {name:'Version' , value:`Dai Kenja V5`, inline: true}
            )
        message.channel.send(embed);
    },
    help: {
        name: "botinfo",
        aliases: ["botinfo", "binfo"],
        category:'misc',
        description: "Renvoie des informations sur le bot.",
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
};