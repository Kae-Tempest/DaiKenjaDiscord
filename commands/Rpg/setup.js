const {Guild} = require('../../models/index')

module.exports.run = async (client, message, args, userInfo) => {
    if (userInfo && userInfo.class !== "") return message.reply('tu ne peux pas taper plusieurs fois cette commande!');

    const classes = require("../../assets/rpg/classes.json");
    const q = args.join(" ");
    const position = classes.map(e => e.name.toLowerCase()).indexOf(q.toLowerCase());
    if (q && position === -1) message.reply('cette classe n\'existe pas !');

    if (q && position !== -1) {
        try {
            const classe = classes[position];
            message.channel.send(`Voulez-vous vraiment choisir ${classe.name}? (\`oui\` pour confirmer)`);
            const filter = m => (message.author.id === m.author.id);
            const userEntry = await message.channel.awaitMessages(filter, {
                max: 1, time: 5000, errors: ['time']
            });

            if (userEntry.first().content.toLowerCase() === "oui") {
                message.channel.send(`Votre profil a été crée, vous etes maintenant un \`${classe.name}\`!`);
                if (!userInfo) {
                    Guild.updateOne(
                        {guildID: message.guild.id},
                        {
                            $push: {
                                users: {
                                    id: message.member.id,
                                    username: message.member.user.username,
                                    level: 1,
                                    prestige: 0,
                                    experience: 0,
                                    rdc: 0,
                                    daily: 0,
                                    po: 200,
                                    teams: "None",
                                    class: classe.name,
                                    stats: classe.stats,
                                    statsMax: classe.stats,
                                    inventory: [],
                                    equipments: {
                                        "Mh": "None",
                                        "Oh": "None",
                                        "armor": "None",
                                        "broach": "None",
                                        "rings": "None",
                                        "earrings": "None",
                                        "belt": "None"
                                    }
                                }
                            }
                        }
                    ).then(d => console.log("Ok"));
                } else {
                    client.updateUserInfo(message.member, {
                        "users.$.class": classe.name,
                        "users.$.stats": classe.stats,
                        "users.$.statsMax": classe.stats
                    });
                }
            }
        } catch (e) {
            message.channel.send(`Vous avez pris trop de temps pour choisir votre classe !`)
        }
    } else {
        message.channel.send(`Veuillez choisir votre classe (syntax: \`!setup nom_de_classe\`)! Les classes disposible: ${classes.map(e => `${e.name}`).join(', ')}`);
    }
}

module.exports.help = {
    name: 'setup',
    aliases: ["setup","Setup","SETUP"],
    category: 'rpg',
    description: 'Créer le profile votre personnage',
    cd: 1,
    usage: "<class>",
    isUserAdmin: false,
    permissions: false,
    args: false,
    profile: false
};