module.exports = {
    run: async (message, args) => {
        function clean(text) {
            if (typeof text === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            return text;
        }
        if (message.author.id !== "401337448120057859") return channel.send("tu n'as pas les droits pour utilisé cette commande !");
        const code = args.join(" ");
        const evaled = eval(code);
        const cleanCode = await clean(evaled);
        message.channel.send(cleanCode, {code: "js"});
    },
    help: {
        name: "eval",
        aliases: ["eval"],
        category: '',
        description: "Renvoie un code js testé",
        cd: 1,
        usage: "<code_to_test>",
        isUserAdmin: false,
        permission: true,
        args: true
    }
};