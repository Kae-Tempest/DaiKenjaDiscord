module.exports = {
    run: async (client, message, args, userInfo) => {
        const races = require("../../assets/rpg/race.json");
        const q = args.join()
        const position = races.map(e => e.name.toLowerCase()).indexOf(q);
        if (q === "") return message.channel.send(`Veuillez choisir votre race (syntax: \`!race nom_de_race\`)! Les races disposible: ${races.map(e => `${e.name}`).join(', ')} `);
        if (q && position === -1) message.reply("Cette race n'existe pas !")
        if (q && position !== -1) {
            try {
                if (userInfo.race !== "") return message.reply(`tu es déjà un ${userInfo.race} !`)
                const race = races[position];
                message.channel.send(`Voulez-vous vraiment etre un ${race.name}? (\`oui\` pour confirmer)`);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {max: 1, time: 5000, errors: ['time']});
                if(userEntry.first().content.toLowerCase() === "oui") {
                    client.updateUserInfo(message.member, {
                        "users.$.race": race.name
                    })
                    message.channel.send(`Vous etes un ${race.name}`);
                }
            } catch (e) {
                message.channel.send(`Vous avez pris trop de temps pour choisir votre race !`);
            }
        } 
    }, help: {
        name: "race",
        aliases: ["race","Race","RACE"],
        category: 'rpg',
        description: "Permet de choisir sa race",
        cd: 5,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: true
    }
};