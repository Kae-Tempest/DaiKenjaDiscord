module.exports = {
    run: async (client, message, args, userInfo) => {
        const user = message.guild.member(message.mentions.users.first())

        if (args[0]) {
            const mentionedUser = await client.getUser(user);
            message.channel.send(`${user} possède ${mentionedUser.po}<:GoldCoin:781575067108507648>!`)
        } else {
            message.reply(`tu possèdes ${userInfo.po}<:GoldCoin:781575067108507648>`)
        }
    },
    help: {
        name: "userbalance",
        aliases: ["userbalance", "ubalance"],
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