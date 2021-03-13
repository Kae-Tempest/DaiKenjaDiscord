module.exports = {
    run: async (client, message, args) => {
        const user = message.guild.member(message.mentions.users.first())
        const balanceToAdd = parseInt(args[1]);
        const userPo = await client.getUser(user);
        const newBalance = userPo.po + balanceToAdd;
        if (isNaN(balanceToAdd)) return message.reply("Il faut entrer un nombre Aho!");
        client.updateUserInfo(user, {"users.$.po": newBalance});
        message.channel.send(`Vous avez ajouté avec succès ${balanceToAdd}<:GoldCoin:781575067108507648> à l'utilisateur ${user}!`)
    }, help: {
        name: "addbalance",
        aliases: ["addbalance", "addb"],
        category: '',
        description: "Ajoute de l'argent à un utilisateur",
        cd: 10,
        usage: "<@user> <balance>",
        isUserAdmin: false,
        permission: true,
        args: true,
        profile: false
    }
};