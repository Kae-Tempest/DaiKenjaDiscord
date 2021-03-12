import {MessageEmbed} from 'discord.js';
module.exports = {
    run :  async (client, message, args) => {
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100')
    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id
    });
    message.delete();
    await message.channel.bulkDelete(messages);
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor('#FF0000')
        .setDescription(`**Action**: Purge\n**Nbr de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
        client.channels.cache.get("769215379238027297").send(embed)
    }, help : {
        name: "purge",
        aliases: ["purge"],
        category: '',
        description: 'Purge les messages',
        cd: 1,
        usage: "<Nbr_msg>",
        isUserAdmin: false,
        permission: true,
        args: true,
        profile: false
    }
};