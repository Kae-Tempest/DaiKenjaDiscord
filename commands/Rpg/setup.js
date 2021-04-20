const {Guild} = require ('../../models/index');
module.exports = {
    run: async (client, message, args, userInfo) => {
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
                const userEntry = await message.channel.awaitMessages(filter, {max: 1, time: 5000, errors: ['time']});
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
                                        race: "",
                                        level: 1,
                                        prestige: 0,
                                        experience: 0,
                                        rdc: 0,
                                        daily: 0,
                                        po: 200,
                                        evolve: 0,
                                        teams: "None",
                                        attribut: ["None"],
                                        class: classe.name,
                                        stats: classe.stats,
                                        statsMax: classe.stats,
                                        inventory: ["None"],
                                        bank: ["None"],
                                        equipments: {
                                            "Mh": "None",
                                            "Oh": "None",
                                            "armor": "None",
                                            "broach": "None",
                                            "rings": "None",
                                            "earrings": "None",
                                            "belt": "None"
                                        },
                                        Slime : 0,
                                        Goblin : 0,
                                        Wildboard : 0,
                                        Cave_Spider : 0,
                                        Wolf : 0,
                                        Skeleton : 0,
                                        Shadow : 0,
                                        Ogre : 0,
                                        Giant_Mantis : 0,
                                        Orc : 0,
                                        Phantomtooth : 0,
                                        Vaporhag : 0,
                                        Gloomfang : 0,
                                        Taintscreamer : 0,
                                        Cryptsoul : 0,
                                        Mimic : 0,
                                        Zombie : 0,
                                        Becale : 0,
                                        Sopurenne : 0,
                                        Dark_timilo : 0,
                                        King_Slime : 0,
                                        Giant_Kobold_Lord : 0,
                                        Moonlight_cat : 0,
                                        Orc_Disaster : 0,
                                        Elyon : 0,
                                        Dracula : 0,
                                        Bowser : 0,
                                        Fake_Kami : 0,
                                        Shogun : 0,
                                        The_Gleam_eyes : 0,
                                        Hellwraith : 0,
                                        Vampmask : 0,
                                        Dreadfang : 0,
                                        Hellstep : 0,
                                        Wispling : 0,
                                        Kae : 0,
                                        Chartbdis : 0,
                                        Yuusha : 0,
                                        Demon_Lord : 0,
                                        Maho : 0,
                                        Norico : 0,
                                        Thor : 0,
                                        Odin : 0,
                                        Reaper : 0,
                                        Rimuru : 0,
                                        Skarab : 0,
                                        Naminoe : 0,
                                        Kami : 0
                                    }
                                }
                            }
                        ).then(d => console.log(Ok));
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
        } else message.channel.send(`Veuillez choisir votre classe (syntax: \`!setup nom_de_classe\`)! Les classes disposible: ${classes.map(e => `${e.name}`).join(', ')} `);
    }, help: {
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
    }
};