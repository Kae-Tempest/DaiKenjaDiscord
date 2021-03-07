
module.exports = {
    run: async (client, message) => {
        const words = require('../../assets/game/pendu.json');
        let word = Math.round(Math.random() * words.length - 1)
        let soluce = words[word].toLowerCase();
        console.log(soluce)
        let life = 10
        let affichage = ""
        let letter_found = ""
        let propostitions = ""

        await message.reply("Bienvenue dans le jeu du Pendu")

        for (l in soluce) {
            affichage = affichage + "- "
        }
        await message.channel.send(`Mot à deviner :  ${affichage}`)
        while (life >= 0) {
            await message.reply("Proposé une lettre !")
            try{
                const filter = m => (message.author.id === m.author.id);
                const propostition = await message.channel.awaitMessages(filter,{
                    max: 1 ,errors:['max']
                });
            if (soluce.search(propostition) !== undefined) {
                letter_found = letter_found + propostitions
                message.reply("Bien joué")
            } else {
                life -= 1
                message.reply("Loupé ! Cherche encore ! ")
                if (life === 0 ) message.reply(`tu as ${life}vie ! tu as perdu !`)
            }
            propostitions = propostitions + propostition
            message.reply(`tu as déjà proposé ${propostitions}`)

            affichage = ""
            for (x in soluce) {
                if (letter_found.search(propostitions)) affichage += propostitions + " "
                else affichage += "- "
            }
            if(affichage === soluce) {
                message.reply(`Tu as trouver le mot => ${soluce}`)
                break;
            }
        } catch (e) {
            console.error(e);
            message.reply("tu ne peux proposer qu'une lettre a la fois")
        }
        }

    }, help: {
        name: "pendu",
        aliases: ["pendu","Pendu","PENDU"],
        category: 'game',
        description: "Jeux du pendu",
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
}