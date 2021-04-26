const success = (client, message, hostile, player) => {
    const name = hostile.name
    switch(name) {
        case 'Slime' : 
            client.updateUserInfo(message.member, {"users.$.Slime" : player.monster.Slime += 1});
            switch(player.monster.Slime) {
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Slime" : true})
                    break;
            }
            break;
        case 'Goblin' :
            client.updateUserInfo(message.member, {"users.$.Goblin" : player.monster.Goblin += 1});
            switch(player.monster.Goblin){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Goblin" : true})
                    break;
            }
            break;
        case 'Wildboar' :
            client.updateUserInfo(message.member, {"users.$.Wildboar" : player.monster.Wildboar += 1});
            switch(player.monster.Wildboar){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Wildboar" : true})
                    break;
            }
            break;
        case 'Cave Spider' :
            client.updateUserInfo(message.member, {"users.$.Cave_Spider" : player.monster.Cave_Spider += 1});
            switch(player.monster.Cave_Spider){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Cave_Spider" : true})
                    break;
            }
            break;
        case 'Wolf' :
            client.updateUserInfo(message.member, {"users.$.Wolf" : player.monster.Wolf += 1});
            switch(player.monster.Wolf){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Wolf" : true})
                    break;
            }
            break;
        case 'Skeleton' :
            client.updateUserInfo(message.member, {"users.$.Skeleton" : player.monster.Skeleton += 1});
            switch(player.monster.Skeleton) {
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Skeleton" : true})
                    break;
            }
            break;
        case 'Shadow' :
            client.updateUserInfo(message.member, {"users.$.Shadow" : player.monster.Shadow += 1});
            switch(player.monster.Shadow){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Shadow" : true})
                    break;
            }
            break;
        case 'Ogre' :
            client.updateUserInfo(message.member, {"users.$.Ogre" : player.monster.Ogre += 1});
            switch(player.monster.Ogre){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Ogre " : true})
                    break;
            }
            break;
        case 'Giant Mantis' :
            client.updateUserInfo(message.member, {"users.$.Giant_Mantis" : player.monster.Giant_Mantis += 1});
            switch(player.monster.Giant_Mantis){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Giant_Mantis" : true})
                    break;
            }
            break;
        case 'Orc' :
            client.updateUserInfo(message.member, {"users.$.Orc" : player.monster.Orc += 1});
            switch(player.Orc){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Orc" : true})
                    break;
            }
            break;
        case 'Phantomtooth' :
            client.updateUserInfo(message.member, {"users.$.Phantomtooth" : player.monster.Phantomtooth += 1});
            switch(player.monster.Phantomtooth){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Phantomtooth" : true})
                    break;
            }
            break;
        case 'Vaporhag' :
            client.updateUserInfo(message.member, {"users.$.Vaporhag" : player.monster.Vaporhag += 1});
            switch(player.monster.Vaporhag){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Vaporhag" : true})
                    break;
            }
            break;
        case 'Gloomfang' :
            client.updateUserInfo(message.member, {"users.$.Gloomfang" : player.monster.Gloomfang += 1});
            switch(player.monster.Gloomfang){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Gloomfang" : true})
                    break;
            }
            break;
        case 'Taintscreamer' :
            client.updateUserInfo(message.member, {"users.$.Taintscreamer" : player.monster.Taintscreamer += 1});
            switch(player.monster.Taintscreamer){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Taintscreamer" : true})
                    break;
            }
            break;
        case 'Cryptsoul' :
            client.updateUserInfo(message.member, {"users.$.Cryptsoul" : player.monster.Cryptsoul += 1});
            switch(player.monster.Cryptsoul){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Cryptsoul" : true})
                    break;
            }
            break;
        case 'Mimic' :
            client.updateUserInfo(message.member, {"users.$.Mimic" : player.monster.Mimic += 1});
            switch(player.monster.Mimic){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Mimic" : true})
                    break;
            }
            break;
        case 'Zombie' :
            client.updateUserInfo(message.member, {"users.$.Zombie" : player.monster.Zombie += 1});
            switch(player.monster.Zombie){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Zombie" : true})
                    break;
            }
            break;
        case 'Becale' :
            client.updateUserInfo(message.member, {"users.$.Becale" : player.monster.Becale += 1});
            switch(player.monster.Becale){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Becale" : true})
                    break;
            }
            break;
        case 'Sopurenne' :
            client.updateUserInfo(message.member, {"users.$.Sopurenne" : player.monster.Sopurenne += 1});
            switch(player.monster.Sopurenne){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Sopurenne" : true})
                    break;
            }
            break;
        case 'Dark timilo' :
            client.updateUserInfo(message.member, {"users.$.Dark_timilo" : player.monster.Dark_timilo += 1});
            switch(player.monster.Dark_timilo){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Dark_timilo" : true})
                    break;
            }
            break;
        case 'King Slime' :
            client.updateUserInfo(message.member, {"users.$.King_Slime" : player.monster.King_Slime += 1});
            switch(player.monster.King_Slime){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.King_Slime" : true})
                    break;
            }
            break;
        case 'Moonlight cat' :
            client.updateUserInfo(message.member, {"users.$.Moonlight_cat" : player.monster.Moonlight_cat += 1});
            switch(player.monster.Moonlight_cat){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Moonlight_cat" : true})
                    break;
            }
            break;
        case 'Orc Disaster' :
            client.updateUserInfo(message.member, {"users.$.Orc_Disaster" : player.monster.Orc_Disaster += 1});
            switch(player.monster.Orc_Disaster){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Orc_Disaster" : true})
                    break;
            }
            break;
        case 'Elyon' :
            client.updateUserInfo(message.member, {"users.$.Elyon" : player.monster.Elyon += 1});
            switch(player.monster.Elyon){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Elyon" : true})
                    break;
            }
            break;
        case 'Dracula' :
            client.updateUserInfo(message.member, {"users.$.Dracula" : player.monster.Dracula += 1});
            switch(player.monster.Dracula) {
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Dracula" : true})
                    break;
            }
            break;
        case 'Bowser' :
            client.updateUserInfo(message.member, {"users.$.Bowser" : player.monster.Bowser += 1});
            switch(player.monster.Bowser){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Bowser" : true})
                    break;
            }
            break;
        case 'Fake Kami' :
            client.updateUserInfo(message.member, {"users.$.Fake_Kami" : player.monster.Fake_Kami += 1});
            switch(player.monster.Fake_Kami){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Fake_Kami" : true})
                    break;
            }
            break;
        case 'Shogun' :
            client.updateUserInfo(message.member, {"users.$.Shogun" : player.monster.Shogun += 1});
            switch(player.monster.Shogun){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Shogun" : true})
                    break;
            }
            break;
        case 'The Gleam Eyes' :
            client.updateUserInfo(message.member, {"users.$.The_Gleam_Eyes" : player.monster.The_Gleam_Eyes += 1});
            switch(player.monster.The_Gleam_Eyes){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.The_Gleam_Eyes" : true})
                    break;
            }
            break;
        case 'Hellwraith' :
            client.updateUserInfo(message.member, {"users.$.Hellwraith" : player.monster.Hellwraith += 1});
            switch(player.monster.Hellwraith){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Hellwraith" : true})
                    break;
            }
            break;
    }
    switch(name) {
        case 'Vampmask' :
            client.updateUserInfo(message.member, {"users.$.Vampmask" : player.monster.Vampmask += 1});
            switch(player.monster.Vampmask){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Vampmask" : true})
                    break;
            }
            break;
        case 'Dreadfang' :
            client.updateUserInfo(message.member, {"users.$.Dreadfang" : player.monster.Dreadfang += 1});
            switch(player.monster.Dradfang){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Dreadfang" : true})
                    break;
            }
            break;
        case 'Hellstep' :
            client.updateUserInfo(message.member, {"users.$.Hellstep" : player.monster.Hellstep += 1});
            switch(player.monster.Hellstep) {
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.hellstep" : true})
                    break;
            }
            break;
        case 'Wispling' :
            client.updateUserInfo(message.member, {"users.$.Wispling" : player.Wispling += 1});
            switch(player.Wispling) {
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Wispling" : true})
                    break;
            }
            break;
        case 'Kae' :
            client.updateUserInfo(message.member, {"users.$.Kae" : player.monster.Kae += 1});
            switch(player.monster.Kae){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Kae" : true})
                    break;
            }
            break;
        case 'Charybdis' :
            client.updateUserInfo(message.member, {"users.$.Charybdis" : player.monster.Charybdis += 1});
            switch(player.monster.Charybdis){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Charybdis" : true})
                    break;
            }
            break;
        case 'Yuusha' :
            client.updateUserInfo(message.member, {"users.$.Yuusha" : player.monster.Yuusha += 1});
            switch(player.monster.Yuusha){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Yuusha" : true})
                    break;
            }
            break;
        case 'Demon Lord' :
            client.updateUserInfo(message.member, {"users.$.Demon_Lord" : player.monster.Demon_Lord += 1});
            switch(player.monster.Demon_Lord){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Demon_Lord" : true})
                    break;
            }
            break;
        case 'Maho' :
            client.updateUserInfo(message.member, {"users.$.Maho" : player.monster.Maho += 1});
            switch(player.monster.Maho){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Maho" : true})
                    break;
            }
            break;
        case 'Norico' :
            client.updateUserInfo(message.member, {"users.$.Norico" : player.monster.Norico += 1});
            switch(player.monster.Norico){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Norico" : true})
                    break;
            }
            break;
        case 'Thor' :
            client.updateUserInfo(message.member, {"users.$.Thor" : player.monster.Thor += 1});
            switch(player.monster.Thor){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Thor" : true})
                    break;
            }
            break;
        case 'Odin' :
            client.updateUserInfo(message.member, {"users.$.Odin" : player.monster.Odin += 1});
            switch(player.monster.Odin){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Odin" : true})
                    break;
            }
            break;
        case 'Reaper' :
            client.updateUserInfo(message.member, {"users.$.Reaper" : player.monster.Reaper += 1});
            switch(player.monster.Reaper){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Reaper" : true})
                    break;
            }
            break;
        case 'Rimuru' :
            client.updateUserInfo(message.member, {"users.$.Rimuru" : player.monster.Rimuru += 1});
            switch(player.monster.Rimuru){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Rimuru" : true})
                    break;
            }
            break;
        case 'Skarab' :
            client.updateUserInfo(message.member, {"users.$.Skarab" : player.monster.Skarab += 1});
            switch(player.monster.Skarab){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Skarab" : true})
                    break;
            }
            break;
        case 'Naminoe' :
            client.updateUserInfo(message.member, {"users.$.Naminoe" : player.monster.Naminoe += 1});
            switch(player.monster.Naminoe){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Naminoe" : true})
                    break;
            }
            break;
        case 'Kami' :
            client.updateUserInfo(message.member, {"users.$.Kami" : player.monster.Kami += 1});
            switch(player.monster.Kami){
                case 1 :
                    message.channel.send(`${player.username} tu as tué ton premier ${name}`)
                    break;
                case 10 :
                    message.channel.send(`${player.username}, C'est ton 10ème ${name} tué ! Bien joué`)
                    break;
                case 50 :
                    message.channel.send(`${player.username}, Tu as tué 50 ${name} ! Tu te rapproche du titre !`)
                    break;
                case 1000 :
                    message.reply(`Tu obtien le titre \`Tueur de ${name}\` pour en avoir tué 1000 !`);
                    client.updateUserInfo(message.member, {"users.$.success.Kami" : true})
                    break;
            }
            break;
    }
}

module.exports = {
    success
}