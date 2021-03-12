const fs = require ('fs');
const monster = (client) => {
    function writingDot() {
        fs.appendFileSync('./assets/npc/hostile.json', ",")
    }

    function createMonster(name, difficulty, category, resistance, faiblesse, exp, po, vita, consti, force, agi, intel, loot, last = 0) {
        let monster = {
            name: name,
            difficulty: difficulty,
            category: category,
            type: "hostile",
            experience: exp,
            po: po,
            loot: loot,
            attribut: {
                resistance: resistance,
                faiblesse: faiblesse
            },
            stats: {
                vitality: vita,
                constitution: consti,
                strength: force,
                agility: agi,
                intelligence: intel
            }
        };
        let data = JSON.stringify(monster, null, 2);
        fs.appendFileSync('./assets/npc/hostile.json', data)
        if (!last) writingDot()
    }

    fs.appendFileSync('./assets/npc/hostile.json', "[")

    createMonster("Slime", 0, "Monster", ["None"], ["None"], 5, 10, 10, 1, 1, 0, 0);

    createMonster("Goblin", 0, "Monster", ["None"], ["None"], 10, 12, 8, 0, 2, 1, 0);

    createMonster("Wildboar", 1, "Monster", ["Terre"], ["Feu"], 10, 10, 10, 2, 3, 2, 1);

    createMonster("Cave Spider", 1, "Monster", ["Ténébre"], ["Lumiére","Terre","Feu"], 10, 18, 10, 2, 3, 5, 2);

    createMonster("Wolf", 2, "Monster", ["Terre"], ["Feu"], 25, 25, 15, 8, 5, 10, 5);

    createMonster("Skeleton", 2, "Monster", ["Ténébre","Feu","Foudre"], ["Lumiére","Terre"], 30, 20, 10, 14, 5, 1, 1);

    createMonster("Shadow", 2, "Monster", ["Ténébre"], ["Lumiére"], 30, 28, 10, 14, 5, 10, 5);

    createMonster("Ogre", 3, "Monster", ["None"], ["Terre"], 30, 28, 20, 5, 7, 5, 5);

    createMonster("Giant Mantis", 3, "Monster", ["Terre"], ["Feu"], 45, 30, 25, 5, 7, 3, 7);

    createMonster("Orc", 3, "Monster", ["Terre"], ["Eau","Foudre"], 65, 50, 50, 12, 15, 5, 5);

    createMonster("Phantomtooth", 4, "Monster", ["None"], ["None"], 100, 90, 60, 20, 20, 10, 10);

    createMonster("Vaporhag", 4, "Monster", ["None"], ["None"], 125, 95, 65, 25, 18, 15, 15);

    createMonster("Gloomfang", 4, "Monster", ["None"], ["None"], 150, 100, 70, 22, 22, 20, 15);

    createMonster("Taintscreamer", 4, "Monster", ["None"], ["None"], 150, 100, 65, 25, 25, 20, 20);

    createMonster("Cryptsoul", 4, "Monster", ["None"], ["None"], 175, 115, 70, 25, 25, 20, 20);

    createMonster("Mimic", 5, "Monster", ["None"], ["Lumière"], 300, 250, 500, 35, 15, 0, 50);

    createMonster("Zombie", 5, "Monster", ["Ténébre"], ["Lumière"], 250, 130, 80, 22, 30, 5, 2);

    createMonster("Becale", 6, "Monster", ["None"], ["None"], 300, 250, 100, 30, 50, 30, 20);

    createMonster("Sopurenne", 6, "Monster", ["None"], ["None"], 325, 270, 150, 35, 40, 30, 30);

    createMonster("Dark timilo", 7, "Monster", ["Ténébre"], ["Lumière"], 350, 330, 190, 40, 50, 30, 35);

    createMonster("King Slime", 10, "Boss", ["None"], ["None"], 1000, 500, 500, 40, 45, 20, 50, ["Heroique vitality scroll"]);

    createMonster("Giant armored cave spider", 10, "Boss", ["Ténébre"], ["Lumiére"], 1100, 500, 50, 45, 45, 80, 50, ["Heroique constitution scroll"]);

    createMonster("King Kobold Lord", 11, "Boss", ["Ténébre","Lumiére"], ["Terre","Eau","Air","Foudre","Feu"], 1500, 510, 520, 40, 43, 80, 100, ["Heroique strength scroll"]);

    createMonster("Moonlight cat", 11, "Boss", ["Ténébre","Lumiére"], ["Feu"], 1500, 510, 510, 40, 40, 150, 90, ["Heroique agility scroll"]);

    createMonster("Orc Disaster", 15, "Boss", ["Feu","Ténébre"], ["Lumiére","Foudre"], 2000, 1000, 800, 80, 65, 35, 200, ["Heroique spirit scroll"]);

    createMonster("Elyon", 16, "Boss", ["Lumiére"], ["Ténébre"], 2300, 1300, 1000, 150, 150, 300, 300, ["Heroique intelligence scroll"]);

    createMonster("Dracula", 16, "Boss", ["None"], ["None"], 2500, 1500, 1200, 100, 200, 500, 900, ["Divinity vitality scroll"]);

    createMonster("Bowser", 16, "Boss", ["None"], ["None"], 2500, 1500, 1200, 100, 200, 300, 600, ["Divinity constitution scroll"]);

    createMonster("Fake Kami", 20, "Boss", 3500, 5000, 1500, 300, 300, 1000, 1000, ["Shuto", "Shuta", "Divinity agility scroll"]);

    createMonster("Shogun", 30, "Boss", ["None"], ["None"], 5000, 10000, 2000, 300, 350, 1500, 2000, ["Divinity intelligence scroll"]);

    createMonster("The Gleam Eyes", 40, "Boss", ["None"], ["None"], 10000, 30000, 4000, 200, 500, 1000, 2500, ["Divinity strength scroll"]);

    createMonster("Hellwraith", 50, "Monster", ["None"], ["None"], 15000, 35000, 5000, 280, 500, 3000, 2000);

    createMonster("Vampmask", 60, "Monster", ["None"], ["None"], 20000, 40000, 5000, 300, 600, 3000, 6000);

    createMonster("Dreadfang", 70, "Monster", ["None"], ["None"], 25000, 48000, 6500, 280, 750, 4000, 4000);

    createMonster("Hellstep", 80, "Monster", ["None"], ["None"], 28000, 55000, 8000, 450, 800, 6000, 3000);

    createMonster("Wispling", 90, "Monster", ["None"], ["None"], 30000, 80000, 10000, 500, 750, 1000, 8000);

    createMonster("Kae", 100, "Calamity", ["None"], ["None"], 100000, 100000, 10000, 1000, 1000, 6000, 6000, ["Demoniac strength scroll"]);

    createMonster("Charybdis", 100, "Calimity", ["Terre","Eau","Air","Foudre","Feu"], ["Ténébre","Lumiére"], 100000, 100000, 10000, 1000, 1000, 1000, 10000, ["Demoniac strength scroll"]);

    createMonster("Yuusha", 250, "Héro", ["Lumiére"], ["Ténébre"], 200000, 500000, 25000, 1500, 1500, 10000, 10000, ["Demoniac agility scroll"]);

    createMonster("Demon Lord", 250, "Démon", ["Ténébre"], ["Lumiére"], 215000, 500000, 25000, 1300, 2000, 10000, 10000, ["Demoniac agility scroll"]);

    createMonster("Maho", 300, "Demon", ["Ténébre"], ["Lumiére"], 500000, 750000, 30000, 1500, 2000, 2000, 4000, ["Exa cube", "Exa aura", "Demoniac spirit scroll"]);

    createMonster("Norico", 320, "Calamity", ["None"], ["None"], 750000, 1000000, 35000, 2000, 3000, 3000, 5000, ["Arbalete"]);

    createMonster("Thor", 350, "Divinity", ["Lumiére","Foudre"], ["Ténébre"], 50000000, 5000000, 40000, 2500, 2500, 3000, 3000, ["Mjöllnir"]);

    createMonster("Odin", 400, "divinity", ["Lumiére","Foudre"], ["Ténébre"], 100000000, 10000000, 8000, 4000, 4000, 3000, 3000, ["Gungnir"]);

    createMonster("Reaper", 425, "Demon", ["Ténébre"], ["None"], 500000000, 20000000, 100000, 4500, 6000, 5000, 5000, ["Death Scythe"]);

    createMonster("Rimuru", 500, "Slime", ["None"], ["None"], 1000000000, 50000000, 500000, 1000, 1000, 1000, 1000, ["Demoniac constitution scroll"]);

    createMonster("Skarab", 500, "Maître du JS", ["None"], ["None"], 1000000000, 50000000, 500000, 1000, 1000, 1000, 1000, ["Demoniac vitality scroll"]);

    createMonster("Naminoe", 550, "Graphiste de génie", ["None"], ["None"], 1250000000, 50000000, 750000, 1500, 1500, 1500, 1500, ["Demoniac intelligence scroll"]);

    createMonster("Kami", 600, "Divinity", ["Lumiére"], ["Ténébre"], 1500000000, 75000000, 1000000, 20000, 20000, 20000, 20000, ["Caliburn", "Excalibur", "Aegis", "Divino démoniac armor", "Divino démoniac broach", "Divino démoniac rings", "Divino démoniac earrings", "Divino démoniac belt"], 1);

    fs.appendFileSync('./assets/npc/hostile.json', "]")
}

module.exports = {
    monster
}