module.exports.run = async (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first())
    const balanceToRemove = parseInt(args[1]);
    const userPo = await client.getUser(user);
    const newBalance = userPo.po - balanceToRemove;

    if (isNaN(balanceToRemove)) return message.reply("Il faut entrer un nombre Aho!");
    client.updateUserInfo(user, {
        "users.$.po": newBalance
    });
    message.channel.send(`Vous avez retirer avec succès ${balanceToRemove}<:GoldCoin:781575067108507648> à l'utilisateur ${user}!`)
}

module.exports.help = {
    name: "removebalance",
    aliases: ["removebalance", "rembalance"],
    category: '',
    description: "Enlève de l'argent de manière journalière",
    cd: 10,
    usage: "<@user> <balance>",
    isUserAdmin: false,
    permission: true,
    args: true,
    profile: false
};