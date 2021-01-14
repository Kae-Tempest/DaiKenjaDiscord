const {Collection} = require('discord.js');
module.exports = async (client, message) => {
    if (message.channel.type === "dm" || message.author.bot || !message.content.startsWith((client.config.PREFIX))) return;

    const data = await client.getGuild(message.guild);
    const position = await data.users.map(e => e.id).indexOf(message.member.id);
    const userInfo = data.users[position];

    if (message.guild && position === -1) client.createUserProfile(message.member, message.guild);

    const args = message.content.slice(client.config.PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

    if (!command) return;

    if (command.help.profile && !userInfo) return message.reply("il faut que tu tape la commande \`setup\` pour créer ton personnage! ");

    if (command.help.permission && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Tu n'as pas les permissions pour taper cette commande");

    if (command.help.args && !args.length) {
        let noArgsReplay = `il nous fait des argument pour cette commande, ${message.author}!`;
        if (command.help.usage) noArgsReplay += `\nVoici comment utiliser la commande: \`${client.config.PREFIX}${command.help.name} ${command.help.usage}\``;
        return message.channel.send(noArgsReplay);
    }

    if (command.help.isUserAdmin && !user) return message.reply("Il faut mentionner un utilisateur");

    if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("Tu ne peux pas utilisé cette commande sur cette utilisateur");

    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }
    /* COOLDOWN */
    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cd || 5) * 1000;
    if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
        if (timeNow < cdExpirationTime) {
            timeLeft = (cdExpirationTime - timeNow) / 1000;
            return message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utilier la command \`${command.help.name}\`.`);
        }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);
    command.run(client, message, args, userInfo);
}