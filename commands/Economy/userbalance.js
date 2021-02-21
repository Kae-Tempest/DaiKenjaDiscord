module.exports = {
    run: async (client, message, args, userInfo) => {
        const user = message.guild.member(message.mentions.users.first())
        if (user === undefined) return message.reply("Cette personne n'est pas sur le serveur !")
        if (args[0]) {
            const mentionedUser = await client.getUser(user);
            message.channel.send(`${user} possède ${mentionedUser.po}<:GoldCoin:781575067108507648>!`)
        } else message.reply(`tu possèdes ${userInfo.po}<:GoldCoin:781575067108507648>`)
    }, help: {
        name: "userbalance",
        aliases: ["userbalance", "ubalance", "Userbalance", "Ubalance", "USERBALANCE", "UBALANCE"],
        category: 'economy',
        description: "Affiche le porte monnaie de l'utilisateur",
        cd: 10,
        usage: "[<@user>]",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
}