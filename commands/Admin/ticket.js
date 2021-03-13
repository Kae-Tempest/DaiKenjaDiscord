const {MessageEmbed} = require("discord.js");
module.exports = {
    run: (client, message, args) => {
        const user = message.author;
        const q = args.join(" ")
        if (user.bot) return;

        const embed = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`)
            .setColor("#FF8C00")
            .setDescription(`**Action**: ouverture ticket\n**Raison**: ${q}\n**Utilisateur**: ${user}`)
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setFooter(user.username, user.avatarURL());

        message.channel.send("Nous avons reçu votre ticket, on vous répondra dès que possible!");
        client.channels.cache.get('781573805004816414').send(embed);
    },
    help: {
        name: "ticket",
        aliases: ["ticket", "Ticket", "TICKET"],
        category: 'admin',
        description: "Envoie un ticket au staff",
        cd: 500,
        usage: "<args_of_ticket>",
        isUserAdmin: false,
        permission: false,
        args: true,
        profil: false
    }
};