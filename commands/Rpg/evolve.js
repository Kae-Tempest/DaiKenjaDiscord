module.exports = {
    run: async (client, message, args, userInfo) => {
        if(userInfo && userInfo.class === "") return message.reply("tu doit d'abord te créer un personnage");
        if(userInfo.level !== 1000 && userInfo.prestige !== 10) return message.reply("Tu n'as pas le niveaux nécessaire pour faire évoluer ta classe");
        const classes = require("../../assets/rpg/evolveclasses.json");
        const q = args.join(" ");
        const position = classes.map(e => e.name.toLowerCase()).indexOf(q.toLowerCase());
        if (q && position === -1) return message.reply("cette classe n'existe pas !");
        if (q && position !== -1) {
            try{
                const classe = classes[position];
                message.channel.send(`Voulez-vous vraiment choisir ${classe.name}? (\`oui\` pour confirmer)`);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {max: 1, time: 5000, errors: ['time']});
                if (userEntry.first().content.toLowerCase() === "oui") {
                    message.channel.send(`Vous etes un \`${classe.name}\`!`);
                    client.updateUserInfo(message.member, {
                        "users.$.level": 1,
                        "users.$.prestige": 1,
                        "users.$.class": classe.name,
                        "users.$.stats": classe.stats,
                        "users.$.statsMax": classe.stats,
                        "users.$.evolve": userInfo.evolve += 1
                    });
                }
            } catch(e) {
                message.channel.send(`Vous avez pris trop de temps pour choisir votre classe !`)
            }
        } else message.channel.send(`Veuillez choisir votre classe (syntax: \`!setup nom_de_classe\`)! Les classes disposible: ${classes.map(e => `${e.name}`).join(', ')}`);
    }, help: {
        name: "evolve",
        aliases: ["evolve","Evolve","EVOLVE"],
        category: 'rpg',
        description: "Permet de changer sa classe en classe supérieur",
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
};