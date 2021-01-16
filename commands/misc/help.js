const {MessageEmbed} = require('discord.js');
const {readdirSync} = require('fs')
const categoryList = readdirSync('./commands')


module.exports.run = (client, message, args, settings) => {
    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leurs commandes.\nPour plus d'information sur une commande, tapez \`${client.config.PREFIX}help <command_name>.\``)
        for (const category of categoryList) {
            embed.addField(`${category}`, `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`);
        }

        return message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
        if (!command) return message.reply("cette commande n'existe pas!")
        const embed = new MessageEmbed()
            .setColor("#00FF00")
            .setTitle(`\`${command.help.name}\``)
            .addField("Description:", `${command.help.description} (cd: ${command.help.cd} secs)`)
            .addField("Utilisation", command.help.usage ? `${client.config.PREFIX}${command.help.name} ${command.help.usage}` : `${client.config.PREFIX}${command.help.name}`, true)

        if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true)
        return message.channel.send(embed);
    }
};

module.exports.help = {
    name: "help",
    aliases: ["help","Help","HELP"],
    category: 'misc',
    description: "affiche l'aide",
    cd: 10,
    usage: "",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: false
};