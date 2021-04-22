const success = (client, message, hostile, player) => {
    const name = hostile.name
    switch(name) {
        case 'Slime' : 
            client.updateUserInfo(message.member, {"users.$.Slime" : player.Slime += 1});
            switch(player.Slime) {
                case 1 :
                    break;
                case 10 :
                    break;
                case 50 :
                    break;
                case 1000 :
                    break;
            }
            break;
        case 'Goblin' :
            client.updateUserInfo(message.member, {"users.$.Goblin" : player.Goblin += 1});
            break;
        case 'Wildboar' :
            client.updateUserInfo(message.member, {"users.$.Wildboar" : player.Wildboar += 1});
            break;
        case 'Cave Spider' :
            client.updateUserInfo(message.member, {"users.$.Cave_Spider" : player.Cave_Spider += 1});
            break;
        case 'Wolf' :
            client.updateUserInfo(message.member, {"users.$.Wolf" : player.Wolf += 1});
            break;
        case 'Skeleton' :
            client.updateUserInfo(message.member, {"users.$.Skeleton" : player.Skeleton += 1});
            break;
        case 'Shadow' :
            client.updateUserInfo(message.member, {"users.$.Shadow" : player.Shadow += 1});
            break;
        case 'Ogre' :
            client.updateUserInfo(message.member, {"users.$.Ogre" : player.Ogre += 1});
            break;
        case 'Giant Mantis' :
            client.updateUserInfo(message.member, {"users.$.Giant_Mantis" : player.Giant_Mantis += 1});
            break;
        case 'Orc' :
            client.updateUserInfo(message.member, {"users.$.Orc" : player.Orc += 1});
            break;
        case 'Phantomtooth' :
            client.updateUserInfo(message.member, {"users.$.Phantomtooth" : player.Phantomtooth += 1});
            break;
        case 'Vaporhag' :
            client.updateUserInfo(message.member, {"users.$.Vaporhag" : player.Vaporhag += 1});
            break;
        case 'Gloomfang' :
            client.updateUserInfo(message.member, {"users.$.Gloomfang" : player.Gloomfang += 1});
            break;
        case 'Taintscreamer' :
            client.updateUserInfo(message.member, {"users.$.Taintscreamer" : player.Taintscreamer += 1});
            break;
        case 'Cryptsoul' :
            client.updateUserInfo(message.member, {"users.$.Cryptsoul" : player.Cryptsoul += 1});
            break;
        case 'Mimic' :
            client.updateUserInfo(message.member, {"users.$.Mimic" : player.Mimic += 1});
            break;
        case 'Zombie' :
            client.updateUserInfo(message.member, {"users.$.Zombie" : player.Zombie += 1});
            break;
        case 'Becale' :
            client.updateUserInfo(message.member, {"users.$.Becale" : player.Becale += 1});
            break;
        case 'Sopurenne' :
            client.updateUserInfo(message.member, {"users.$.Sopurenne" : player.Sopurenne += 1});
            break;
        case 'Dark timilo' :
            client.updateUserInfo(message.member, {"users.$.Dark_timilo" : player.Dark_timilo += 1});
            break;
        case 'King Slime' :
            client.updateUserInfo(message.member, {"users.$.King_Slime" : player.King_Slime += 1});
            break;
        case 'Moonlight cat' :
            client.updateUserInfo(message.member, {"users.$.Moonlight_cat" : player.Moonlight_cat += 1});
            break;
        case 'Orc Disaster' :
            client.updateUserInfo(message.member, {"users.$.Orc_Disaster" : player.Orc_Disaster += 1});
            break;
        case 'Elyon' :
            client.updateUserInfo(message.member, {"users.$.Goblin" : player.Goblin += 1});
            break;
        case 'Dracula' :
            client.updateUserInfo(message.member, {"users.$.Elyon" : player.Elyon += 1});
            break;
        case 'Bowser' :
            client.updateUserInfo(message.member, {"users.$.Bowser" : player.Bowser += 1});
            break;
        case 'Fake Kami' :
            client.updateUserInfo(message.member, {"users.$.Fake_Kami" : player.Fake_Kami += 1});
            break;
        case 'Shogun' :
            client.updateUserInfo(message.member, {"users.$.Shogun" : player.Shogun += 1});
            break;
        case 'The Gleam Eyes' :
            client.updateUserInfo(message.member, {"users.$.The_Gleam_Eyes" : player.The_Gleam_Eyes += 1});
            break;
        case 'Hellwraith' :
            client.updateUserInfo(message.member, {"users.$.Hellwraith" : player.Hellwraith += 1});
            break;
    }
    switch(name) {
        case 'Vampmask' :
            client.updateUserInfo(message.member, {"users.$.Vampmask" : player.Vampmask += 1});
            break;
        case 'Dreadfang' :
            client.updateUserInfo(message.member, {"users.$.Dreadfang" : player.Dreadfang += 1});
            break;
        case 'Hellstep' :
            client.updateUserInfo(message.member, {"users.$.Hellstep" : player.Hellstep += 1});
            break;
        case 'Wispling' :
            client.updateUserInfo(message.member, {"users.$.Wispling" : player.Wispling += 1});
            break;
        case 'Kae' :
            client.updateUserInfo(message.member, {"users.$.Kae" : player.Kae += 1});
            break;
        case 'Charybdis' :
            client.updateUserInfo(message.member, {"users.$.Charybdis" : player.Charybdis += 1});
            break;
        case 'Yuusha' :
            client.updateUserInfo(message.member, {"users.$.Yuusha" : player.Yuusha += 1});
            break;
        case 'Demon Lord' :
            client.updateUserInfo(message.member, {"users.$.Demon_Lord" : player.Demon_Lord += 1});
            break;
        case 'Maho' :
            client.updateUserInfo(message.member, {"users.$.Maho" : player.Maho += 1});
            break;
        case 'Norico' :
            client.updateUserInfo(message.member, {"users.$.Norico" : player.Norico += 1});
            break;
        case 'Thor' :
            client.updateUserInfo(message.member, {"users.$.Thor" : player.Thor += 1});
            break;
        case 'Odin' :
            client.updateUserInfo(message.member, {"users.$.Odin" : player.Odin += 1});
            break;
        case 'Reaper' :
            client.updateUserInfo(message.member, {"users.$.Reaper" : player.Reaper += 1});
            break;
        case 'Rimuru' :
            client.updateUserInfo(message.member, {"users.$.Rimuru" : player.Rimuru += 1});
            break;
        case 'Skarab' :
            client.updateUserInfo(message.member, {"users.$.Skarab" : player.Skarab += 1});
            break;
        case 'Naminoe' :
            client.updateUserInfo(message.member, {"users.$.Naminoe" : player.Naminoe += 1});
            break;
        case 'Kami' :
            client.updateUserInfo(message.member, {"users.$.Kami" : player.Kami += 1});
            break;
    }
}

module.exports = {
    success
}