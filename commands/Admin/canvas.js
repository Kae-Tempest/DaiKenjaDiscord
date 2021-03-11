const { MessageAttachment } = require('discord.js');
const {createCanvas, loadImage} = require ('canvas');
const classes = require("../../assets/rpg/classes.json");
const {capitalize} = require('../../function/other/string');


module.exports = {
    run: async (client, message, args) => {
        const player = await client.getUser(message.member);
        const position = classes.map(e => e.name.toLowerCase()).indexOf(player.class.toLowerCase());
        const classe = classes[position];
        const canvas = createCanvas(1204,1504);
        const ctx = canvas.getContext('2d');
        const classIcon = await loadImage(classe.icon)

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF"
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "#222";
        ctx.fillRect(2,2,1200,1500);
        ctx.globalAlpha = 1;
        ctx.strokeRect(2,2,1200,1500);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText(`${message.author.username} | ${player.class} de niveau ${player.level} et de prestige ${player.prestige}`,30,50);
        ctx.drawImage(classIcon,990 ,10 ,210, 360);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("Statistique :", 30,150);
        ctx.fillText(`${Object.entries(player.stats).map(([key, value]) => `${capitalize(key)}: ${value}`).join('\n')}`,30, 190);


        ctx.fillText("Expérience :", 30,430);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF"
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "#222";
        ctx.fillRect(30,450,1140,30);
        ctx.globalAlpha = 1;
        ctx.strokeRect(30,450,1140,30);

        
        const attachment = new MessageAttachment(canvas.toBuffer(), "exp.png");
        message.channel.send(attachment)
    },
    help: {
        name: "canvas",
        aliases: ["canvas"],
        category: '',
        description: "test canvas",
        cd: 1,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false
    }
};