const fs = require ('fs');
const items = (client) => {
    function writingDot(file) {
        fs.appendFileSync("./assets/shop/" + file, ",");
    }

    function createItems(name, rank, classe, label, type, desc, element, cost, force, agi, intel, spirit, vita, consti, last = 0, shoplast = 0) {
        let items = {
            name: name,
            rank: rank,
            class: classe,
            label: label,
            type: type,
            description: desc,
            attribut: element,
            cost: cost,
            stats: {
                vitality: vita,
                constitution: consti,
                strength: force,
                agility: agi,
                intelligence: intel,
                spirit: spirit,
            }
        };

        let data = JSON.stringify(items, null, 2);

        fs.appendFileSync('./assets/shop/shop.json', data);
        if (!last || !shoplast) {
            writingDot("shop.json");
        }
        if (type === "Mh" || type === "Oh") {
            fs.appendFileSync('./assets/shop/weapon.json', data);
            if (!last) writingDot("weapon.json");
        }
        if (type === "armor") {
            fs.appendFileSync('./assets/shop/armor.json', data);
            if (!last) writingDot("armor.json")
        }
        if (type === "rings" || type === "earrings" || type === "belt" || type === "broach") {
            fs.appendFileSync('./assets/shop/accessory.json', data);
            if (!last) writingDot("accessory.json")
        }
        if (type === "potion" || type === "scroll") {
            fs.appendFileSync('./assets/shop/consommable.json', data);
            if (!last) writingDot("consommable.json")
        }
    }

    fs.appendFileSync('./assets/shop/shop.json', '[');
    fs.appendFileSync('./assets/shop/weapon.json', '[');
    fs.appendFileSync('./assets/shop/armor.json', '[');
    fs.appendFileSync('./assets/shop/accessory.json', '[');
    fs.appendFileSync('./assets/shop/consommable.json', '[');

    //ARMES

    createItems("Short sword", "commun", "Voleur", "1", "Mh", "Epée courte", "None", 200, 1, 1, 0, 0, 0, 0);

    createItems("Dague", "commun", "Voleur", "2", "Mh", "Dague", "None", 200, 1, 1, 0, 0, 0, 0);

    createItems("Longue sword", "commun", "Barbare", "3", "Mh", "Epée longue", "None", 200, 2, 0, 0, 0, 0, 0);

    createItems("Bouclier en fer", "commun", "toute classe", "4", "Oh", "Bouclier en fer", "None", 200, 0, 0, 0, 0, 0, 2);

    createItems("Arc", "commun", "Chasseur", "5", "Mh", "Arc", "None", 200, 1, 0, 1, 0, 0, 0);

    createItems("Masse", "commun", "Paladin", "6", "Mh", "Masse", "None", 300, 4, -1, 0, 1, 0, 0);

    createItems("Baton", "commun", "Mage", "7", "Mh", "Baton magique", "None", 200, 0, 0, 2, 2, 0, 0);

    createItems("Magic aura", "commun", "Mage", "8", "Oh", "Magic aura", "None", 200, 0, 0, 1, 1, 0, 2);

    createItems("Epée courte en fer blanc", "rare", "Voleur", "9", "Mh", "Epée courte en fer blanc", "None", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Dague en fer blanc d", "rare", "Voleur", "10", "Mh", "Dague en fer blanc pour la Main hand", "None", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Dague en fer blanc g", "rare", "Voleur", "11", "Oh", "Dague en fer blanc pour la Off hand", "None", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Epée longue en fer blanc", "rare", "Barbare, Paladin", "12", "Mh", "Epée longue en fer blanc", "None", 1000, 8, 0, 0, 0, 0, 0);

    createItems("Bouclier en fer blanc", "rare", "toute classe", "13", "Oh", "Bouclier en fer blanc", "None", 1000, 0, 0, 0, 0, 0, 8);

    createItems("Arc en chêne rouge", "rare", "Chasseur", "14", "Mh", "Arc en chêne rouge", "None", 1000, 5, 0, 5, 0, 0, 0);

    createItems("Masse lourde", "rare", "Paladin", "15", "Mh", "Masse lourde", "None", 1000, 12, -3, 0, 0, 0, 0);

    createItems("Bâton magique", "rare", "Mage", "16", "Mh", "Bâton magique", "None", 1000, 0, 0, 8, 8, 0, 0);

    createItems("Magic shield", "rare", "Mage", "17", "Oh", "Magic shield", "None", 1000, 0, 0, 5, 5, 0, 10);

    createItems("Epée courte en mythril", "legendaire", "Voleur", "18", "Mh", "Epée  courte en mythril", "None", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Dague en mythril d", "legendaire", "Voleur", "19", "Mh", "Dague en mythril pour Main hand", "None", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Dague en mythril g", "legendaire", "Voleur", "20", "Oh", "Dague en mythril pour Off hand", "None", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Epée longue en mythril", "legendaire", "Barbare, Paladin", "21", "Mh", "Epée longue en mythril", "None", 3500, 20, 0, 0, 0, 0, 0);

    createItems("Bouclier en mythril", "legendaire", "toute classe", "22", "Oh", "Bouclier en mythril", "None", 3500, 0, 0, 0, 0, 0, 20);

    createItems("Arc en fer à poulis", "legendaire", "Chasseur", "23", "Mh", "Arc en fer à poulis", "None", 3500, 18, 0, 18, 0, 0, 0);

    createItems("Masse en mythril", "legendaire", "Paladin", "24", "Mh", "Masse en mythril", "None", 3500, 25, -7, 0, 0, 0, 0);

    createItems("Baton en chêne rouge magique", "legendaire", "Mage", "25", "Mh", "Bâton en chêne rouge magique", "None", 3500, 0, 0, 20, 20, 0, 0);

    createItems("Divin aura", "legendaire", "Mage", "26", "Oh", "Divin aura", "None", 3500, 0, 0, 10, 10, 0, 25);

    createItems("Elucidator", "heroique", "Barbare", "27", "Mh", "Premiere Epée de Kirito !", "Feu", 10000, 200, 0, 0, 0, 100, 0);

    createItems("Dark repulser", "heroique", "Barbare", "28", "Oh", "Seconde Epée de Kirito", "Eau", 10000, 200, 0, 0, 0, 100, 0);

    createItems("Master sword", "heroique", "Barbare", "29", "Mh", "Epée de Link !", "Lumiére", 20000, 300, 0, 0, 0, 150, 0);

    createItems("New moon", "heroique", "Paladin et Voleur", "30", "Mh", "Epée courte de Maple", "Ténébre", 20000, 150, 150, 0, 150, 150, 0);

    createItems("Mirror of the dark night", "heroique", "toute classe", "31", "Oh", "Bouclier de Maple", "Ténébre", 20000, 0, 0, 0, 0, 175, 300);

    createItems("Athamé", "heroique", "Voleur", "32", "Mh", "Dague d'une voleuse qui accompgna un héros !", "Terre", 10000, 100, 100, 0, 0, 100, 0);

    createItems("Tantō", "heroique", "Voleur", "33", "Oh", "Dague d'une voleuse qui accompgna un héros !", "Air", 10000, 100, 100, 0, 0, 100, 0);

    createItems("Khukuri", "heroique", "Voleur", "34", "Mh", "Dague d'une Héroïne", "Feu", 20000, 150, 150, 0, 0, 150, 0);

    createItems("Kusanagi", "heroique", "Voleur", "35", "Oh", "Dague d'une Héroïne", "Eau", 20000, 150, 150, 0, 0, 150, 0);

    createItems("Baguette de sureau", "heroique", "Mage", "36", "Mh", "Baguette de Harry Potter", "Foudre", 20000, 0, 0, 150, 150, 150, 0);

    createItems("Bouclier d'athena", "heroique", "toute classe", "37", "Oh", "Bouclier d'Athéna", "Terre", 21000, 0, 0, 0, 0, 200, 300);

    createItems("Evansmana", "Divin", "Barbare", "38", "Mh", "Evansmana épée spation-temporelle", "Lumiére", 50000, 500, 0, 0, 0, 350, 0);

    createItems("Venuzdnor", "Demoniaque", "Barbare", "39", "Mh", "Venuzdnor epée de Anos Voldigoad", "Ténébre", 750000, 800, 0, 0, 0, 400, 0);

    createItems("Chu'zhi", "Divino-legendaire", "Voleur", "40", "Mh", "Dague permettant des fantastiques attaques élémentaires, elle scintille d’un vert de Jade.", "Terre", 375000, 250, 250, 0, 0, 400, 0);

    createItems("Chi'zhu", "Divino-legendaire", "Voleur", "41", "Oh", "Dague permettant des fantastiques attaques élémentaires, elle scintille d’un vert de Malachite.", "Terre", 375000, 250, 250, 0, 0, 400, 0);

    createItems("Typhoon", "Divino-Legendaire", "toute classe", "42", "Oh", "Bouclier qui absorbe des typhoons", "Eau", 750000, 0, 0, 0, 0, 800, 800);

    createItems("Crimson book", "Divino-legendaire", "Mage", "43", "Mh", "Livre Magique", "Feu", 750000, 0, 0, 250, 250, 300, 0);

    createItems("Demoniac Bow", "Demoniac", "Chasseur", "44", "Mh", "Arc démoniaque", "Ténébre", 750000, 250, 0, 250, 0, 300, 0);

    createItems("Demoniac hammer", "Demoniac", "Paladin", "45", "Mh", "Marteau démioniaque", "Ténébre", 750000, 250, 0, 0, 250, 300, 0);

    //ARMURE

    createItems("Armure en cuir", "commun", "Barbare, Voleur, Paladin, Chasseur", "46", "armor", "Armure en cuir", "None", 350, 0, 2, 0, 0, 30, 9);

    createItems("Armure legère en fer", "commun", "Voleur, Chasseur", "47", "armor", "Armure legère en fer", "None", 400, 0, 1, 0, 0, 35, 10);

    createItems("Armure lourde en fer", "commun", "Barbare, Paladin", "48", "armor", "Armure Lourde en fer", "None", 400, 0, -1, 0, 0, 35, 11);

    createItems("Cotte de maille", "commun", "toute classe", "49", "armor", "Cotte de maille", "None", 300, 0, 0, 0, 0, 30, 9);

    createItems("Toge", "commun", "Mage", "50", "armor", "Toge magique", "None", 300, 0, 0, 2, 2, 35, 7);

    createItems("Armure en cuir renforcé", "rare", "Barbare, Voleur, Paladin, Chasseur", "51", "armor", "Amure en cuir renforcé", "None", 1250, 0, 6, 0, 0, 55, 20);

    createItems("Armure legère en fer blanc", "rare", "Voleur, Chasseur", "52", "armor", "Armure legère en fer blanc", "None", 1300, 0, 5, 0, 0, 60, 22);

    createItems("Armure lourde en fer blanc", "rare", "Barbare, Paladin", "53", "armor", "Armure lourde en fer blanc", "None", 1400, 0, -3, 0, 0, 60, 25);

    createItems("Cotte de maille en fer blanc", "rare", "toute classe", "54", "armor", "Cotte de maille en fer blanc", "None", 1200, 0, 4, 0, 0, 60, 16);

    createItems("Magic toge", "rare", "Mage", "55", "armor", "Toge magique", "None", 1200, 0, 0, 8, 8, 60, 16);

    createItems("Armure en crocodile renforcé", "legendaire", "Barbare, Voleur, Paladin, Chasseur", "56", "armor", "Armure en cuir de crocodile renforcé", "None", 3750, 0, 13, 0, 0, 75, 35);

    createItems("Armure legère en mythril", "legendaire", "Voleur, Chasseur", "57", "armor", "Armure legère en mythril", "None", 3800, 0, 10, 0, 0, 80, 38);

    createItems("Armure lourde en mythril", "legendaire", "Barbare, Paladin", "58", "armor", "Armure lourde en mythril", "None", 3900, 0, -8, 0, 0, 80, 42);

    createItems("Cotte de maille en mythril", "legendaire", "toute classe", "59", "armor", "Cotte de maille en mythril", "None", 3700, 0, 6, 0, 0, 75, 35);

    createItems("Benny hill toge", "legendaire", "Mage", "60", "armor", "Toge béni", "None", 3700, 0, 0, 15, 15, 80, 30);

    createItems("Bestial armor", "heroique", "toute classe", "61", "armor", "Armure bestial", "None", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Black rose armor", "heroique", "toute classe", "62", "armor", "Armure de Maple", "None", 20000, 0, 0, 0, 0, 200, 200);

    createItems("God armor", "heroique", "toute classe", "63", "armor", "Armure de dieux", "None", 500000, 0, 0, 0, 0, 800, 400);

    createItems("Demoniac armor", "heroique", "toute classe", "64", "armor", "Armure du roi démon", "None", 750000, 0, 0, 0, 0, 1200, 600);

    //ACCESSOIRES

    createItems("Iron rings", "commun", "toute classe", "65", "rings", "Anneaux en fer", "None", 200, 0, 0, 0, 0, 20, 5);

    createItems("Gold rings", "rare", "toute classe", "66", "rings", "Anneaux en or", "None", 1000, 0, 0, 0, 0, 50, 20);

    createItems("Titanium rings", "legendaire", "toute classe", "67", "rings", "Anneaux en titanium", "None", 3500, 0, 0, 0, 0, 80, 40);

    createItems("Diamond rings", "heroique", "toute classe", "68", "rings", "Anneaux en diamant", "None", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Emerald rings", "heroique", "toute classe", "69", "rings", "Anneaux en emeraude", "None", 20000, 0, 0, 0, 0, 200, 200);

    createItems("Divin rings", "Divinity", "toute classe", "70", "rings", "Anneaux de dieu", "None", 75000, 0, 0, 0, 0, 500, 375);

    createItems("Demoniac rings", "Demoniaque", "toute classe", "71", "rings", "Anneaux du roi démon", "None", 150000, 0, 0, 0, 0, 600, 800);

    createItems("Iron earrings", "commun", "toute classe", "72", "earrings", "Boucle d'oreils en fer", "None", 200, 5, 5, 5, 5, 20, 0);

    createItems("Gold earrings", "rare", "toute classe", "73", "earrings", "bloucle d'oreils en or", "None", 1000, 10, 10, 10, 10, 40, 0);

    createItems("Titanium earrings", "legendaire", "toute classe", "74", "earrings", "boucles d'oreils en titanium", "None", 3500, 15, 15, 15, 15, 60, 0);

    createItems("Diamond earrings", "heroique", "toute classe", "75", "earrings", "Boucles d'oreils en diamant", "None", 10000, 50, 50, 50, 50, 200, 0);

    createItems("Emerald earrings", "heroique", "toute classe", "76", "earrings", "Boucles d'oreils en emeraude", "None", 20000, 100, 100, 100, 100, 400, 0);

    createItems("Divin earrings", "Divinity", "toute classe", "77", "earrings", "Boucles d'oreils de dieu", "None", 75000, 300, 300, 300, 300, 1200, 0);

    createItems("Demoniac earrings", "Demoniaque", "toute classe", "78", "earrings", "Boucles d'oreils du roi démon", "None", 150000, 500, 500, 500, 500, 2000, 0);

    createItems("Iron belt", "commun", "toute classe", "79", "belt", "Ceinture en fer", "None", 200, 0, 0, 0, 0, 20, 20);

    createItems("Gold belt", "rare", "toute classe", "80", "belt", "Ceinture en or", "None", 1000, 0, 0, 0, 0, 60, 60);

    createItems("Titanium belt", "legendaire", "toute classe", "81", "belt", "Ceinture en titanium", "None", 3500, 0, 0, 0, 0, 80, 80);

    createItems("Diamond belt", "heroique", "toute classe", "82", "belt", "Ceinture en diamant", "None", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Emerald belt", "heroique", "toute classe", "83", "belt", "Ceinture en emeraude", "None", 20000, 0, 0, 0, 0, 200, 200);

    createItems("Divin belt", "Divinity", "toute classe", "84", "belt", "Ceinture de dieu", "None", 75000, 0, 0, 0, 0, 400, 400);

    createItems("Demoniac belt", "Demoniaque", "toute classe", "85", "belt", "Ceinture du roi démon", "None", 150000, 0, 0, 0, 0, 600, 600);

    createItems("Iron broach", "commun", "toute classe", "86", "broach", "Broche en fer", "None", 200, 30, 30, 30, 30, 30, 30, 0);

    createItems("Gold broach", "commun", "toute classe", "87", "broach", "Broche en or", "None", 1000, 60, 60, 60, 60, 60, 60);

    createItems("Titanium broach", "commun", "toute classe", "88", "broach", "Broche en titanium", "None", 3500, 80, 80, 80, 80, 80, 80);

    createItems("Diamond broach", "commun", "toute classe", "89", "broach", "Broche en diamant", "None", 10000, 150, 150, 150, 150, 150, 150);

    createItems("Emerald broach", "commun", "toute classe", "90", "broach", "Broche en emeraude", "None", 20000, 200, 200, 200, 200, 200, 200);

    createItems("Divin broach", "commun", "toute classe", "91", "broach", "Broche de dieu", "None", 150000, 500, 500, 500, 500, 500, 500);

    createItems("Demoniac broach", "commun", "toute classe", "92", "broach", "Broche du roi démon", "None", 1000000, 1000, 1000, 1000, 1000, 1000, 1000);

    //CONSOMABLE

    createItems("Potion basic", "commun", "toute classe", "93", "potion", "Heal de 50 HP", "None", 50, 0, 0, 0, 0, 50, 0);

    createItems("Potion medium", "rare", "toute classe", "94", "potion", "Heal de 500 HP", "None", 500, 0, 0, 0, 0, 500, 0);

    createItems("Legendary potion", "lengendaire", "toute classe", "95", "potion", "heal de 1500 HP", "None", 5000, 0, 0, 0, 0, 1500, 0)

    createItems("Slime potion", "heroique", "toute classe", "96", "potion", "heal de 5000 HP", "None", 30000, 0, 0, 0, 0, 5000, 0)

    createItems("Divin potion", "Divinity", "toute classe", "97", "potion", "heal de 10000 HP", "None", 100000, 0, 0, 0, 0, 10000, 0);

    createItems("Demoniac potion", "Demoniaque", "toute classe", "98", "potion", "heal de 50000 HP", "None", 1000000, 0, 0, 0, 0, 50000);

    //SCROLL

    createItems("Basic strength scroll", "commun", "toute classe", "99", "scroll", "Augmente la force de 50", "None", 100000, 50, 0, 0, 0, 0, 0);

    createItems("Basic agility scroll", "commun", "toute classe", "100", "scroll", "Augmente la agility de 50", "None", 100000, 0, 50, 0, 0, 0, 0);

    createItems("Basic intelligence scroll", "commun", "toute classe", "101", "scroll", "Augmente la intelligence de 50", "None", 100000, 0, 0, 50, 0, 0, 0);

    createItems("Basic spirit scroll", "commun", "toute classe", "102", "scroll", "Augmente la spirit de 50", "None", 100000, 0, 0, 0, 50, 0, 0);

    createItems("Basic vitality scroll", "commun", "toute classe", "103", "scroll", "Augmente la vitality de 50", "None", 100000, 0, 0, 0, 0, 50, 0);

    createItems("Basic constitution scroll", "commun", "toute classe", "104", "scroll", "Augmente la constitution de 50", "None", 100000, 0, 0, 0, 0, 0, 50);

    createItems("Rare strength scroll", "rare", "toute classe", "105", "scroll", "Augmente la force de 200", "None", 500000, 200, 0, 0, 0, 0, 0);

    createItems("Rare agility scroll", "rare", "toute classe", "106", "scroll", "Augmente la agility de 200", "None", 500000, 0, 200, 0, 0, 0, 0);

    createItems("Rare intelligence scroll", "rare", "toute classe", "107", "scroll", "Augmente la intelligence de 200", "None", 500000, 0, 0, 200, 0, 0, 0);

    createItems("Rare spirit scroll", "rare", "toute classe", "108", "scroll", "Augmente la spirit de 200", "None", 500000, 0, 0, 0, 200, 0, 0);

    createItems("Rare vitality scroll", "rare", "toute classe", "109", "scroll", "Augmente la vitality de 200", "None", 500000, 0, 0, 0, 0, 200, 0);

    createItems("Rare constitution scroll", "rare", "toute classe", "110", "scroll", "Augmente la constitution de 200", "None", 500000, 0, 0, 0, 0, 0, 200);

    createItems("Lengendaire strength scroll", "lengendaire", "toute classe", "111", "scroll", "Augmente la force de 1000", "None", 1000000, 1000, 0, 0, 0, 0, 0);

    createItems("Lengendaire agility scroll", "lengendaire", "toute classe", "112", "scroll", "Augmente la agility de 1000", "None", 1000000, 0, 1000, 0, 0, 0, 0);

    createItems("Lengendaire intelligence scroll", "lengendaire", "toute classe", "113", "scroll", "Augmente la intelligence de 1000", "None", 1000000, 0, 0, 1000, 0, 0, 0);

    createItems("Lengendaire spirit scroll", "lengendaire", "toute classe", "114", "scroll", "Augmente la spirit de 1000", "None", 1000000, 0, 0, 0, 1000, 0, 0);

    createItems("Lengendaire vitality scroll", "lengendaire", "toute classe", "115", "scroll", "Augmente la vitality de 1000", "None", 1000000, 0, 0, 0, 0, 1000, 0);

    createItems("Lengendaire constitution scroll", "lengendaire", "toute classe", "116", "scroll", "Augmente la constitution de 1000", "None", 1000000, 0, 0, 0, 0, 0, 1000);

    createItems("Heroique strength scroll", "heroique", "toute classe", "117", "scroll", "Augmente la force de 10000", "None", 50000000, 10000, 0, 0, 0, 0, 0);

    createItems("Heroique agility scroll", "heroique", "toute classe", "118", "scroll", "Augmente la agility de 10000", "None", 50000000, 0, 10000, 0, 0, 0, 0);

    createItems("Heroique intelligence scroll", "heroique", "toute classe", "118", "scroll", "Augmente la intelligence de 10000", "None", 50000000, 0, 0, 10000, 0, 0, 0);

    createItems("Heroique spirit scroll", "heroique", "toute classe", "119", "scroll", "Augmente la spirit de 10000", "None", 50000000, 0, 0, 0, 10000, 0, 0);

    createItems("Heroique vitality scroll", "heroique", "toute classe", "120", "scroll", "Augmente la vitality de 10000", "None", 50000000, 0, 0, 0, 0, 10000, 0);

    createItems("Heroique constitution scroll", "heroique", "toute classe", "121", "scroll", "Augmente la constitution de 10000", "None", 50000000, 0, 0, 0, 0, 0, 10000);

    createItems("Divinity strength scroll", "Divinity", "toute classe", "122", "scroll", "Augmente la force de 50000", "None", 100000000, 50000, 0, 0, 0, 0, 0);

    createItems("Divinity agility scroll", "Divinity", "toute classe", "123", "scroll", "Augmente la agility de 50000", "None", 100000000, 0, 50000, 0, 0, 0, 0);

    createItems("Divinity intelligence scroll", "Divinity", "toute classe", "124", "scroll", "Augmente la intelligence de 50000", "None", 100000000, 0, 0, 50000, 0, 0, 0);

    createItems("Divinity spirit scroll", "Divinity", "toute classe", "125", "scroll", "Augmente la spirit de 50000", "None", 100000000, 0, 0, 0, 50000, 0, 0);

    createItems("Divinity vitality scroll", "Divinity", "toute classe", "126", "scroll", "Augmente la vitality de 50000", "None", 100000000, 0, 0, 0, 0, 50000, 0);

    createItems("Divinity constitution scroll", "Divinity", "toute classe", "127", "scroll", "Augmente la constitution de 50000", "None", 100000000, 0, 0, 0, 0, 0, 50000);

    createItems("Demoniac strength scroll", "Démoniaque", "toute classe", "128", "scroll", "Augmente la force de 100000", "None", 5000000000, 100000, 0, 0, 0, 0, 0);

    createItems("Demoniac agility scroll", "Démoniaque", "toute classe", "129", "scroll", "Augmente la agility de 100000", "None", 5000000000, 0, 100000, 0, 0, 0, 0);

    createItems("Demoniac intelligence scroll", "Démoniaque", "toute classe", "130", "scroll", "Augmente la intelligence de 100000", "None", 5000000000, 0, 0, 100000, 0, 0, 0);

    createItems("Demoniac spirit scroll", "Démoniaque", "toute classe", "131", "scroll", "Augmente la spirit de 100000", "None", 5000000000, 0, 0, 0, 100000, 0, 0);

    createItems("Demoniac vitality scroll", "Démoniaque", "toute classe", "132", "scroll", "Augmente la vitality de 100000", "None", 5000000000, 0, 0, 0, 0, 100000, 0);

    createItems("Demoniac constitution scroll", "Démoniaque", "toute classe", "133", "scroll", "Augmente la constitution de 100000", "None", 5000000000, 0, 0, 0, 0, 0, 100000, 1);

    //DROP ITEMS

    createItems("Shuto", "drop", "Voleur", null, "Mh", "Coup de karaté contenue dans une lame", "Terre", 1000000, 2500, 2000, 1000, 0, 1500, 100);

    createItems("Shuta", "drop", "Voleur", null, "Oh", "Coup de karaté contenue dans une lame", "Air", 1000000, 2500, 2000, 1000, 0, 1500, 1000);

    createItems("Arbalete", "drop", "Chasseur", null, "Mh", "Arbalete", "Terre", 2000000, 5000, 4000, 2000, 0, 3000, 2000);

    createItems("Exa cube", "drop", "Mage", null, "Mh", "Cube magique", "Feu", 2000000, 0, 4000, 2000, 5000, 3000, 2000);

    createItems("Exa aura", "drop", "Mage", null, "Oh", "Aura magique", "Foudre", 2000000, 0, 4000, 2000, 5000, 2000, 3000);

    createItems("Gungnir", "drop", "Chasseur, Barbare", null, "Mh", "Lance de Odin", "Foudre", 5000000, 10000, 5000, 5000, 5000, 7000, 10000);

    createItems("Mjöllnir", "drop", "Paladin, Barbare", null, "Mh", "Marteau de Thor", "Foudre", 5000000, 10000, 5000, 5000, 5000, 7000, 10000);

    createItems("Death Scythe", "drop", "toute classe", null, "Mh", "Faux de la mort", "Ténébre", 10000000, 12500, 5000, 5000, 12500, 10000, 10000);

    createItems("Caliburn", "drop", "Barbare, Paladin", null, "Mh", "Epée du roi Arthur obtenue par Kirito dans une quete", "Lumiére", 10000000, 15000, 10000, 10000, 0, 12500, 12500);

    createItems("Excalibur", "drop", "Barbare, Paladin", null, "Mh", "Ancienne épée du roi Arthur", "Lumiére", 10000000, 15000, 10000, 10000, 0, 12500, 12500);

    createItems("Aegis", "drop", "toute classe", null, "Oh", "Bouclier divin", "Air", 10000000, 0, 0, 0, 0, 10000, 10000, 1);

    createItems("Divino démoniac armor", "drop", "toute classe", null, "armor", "Armure Divino Démoniaque", "None", 10000000, 0, 10000, 10000, 0, 30000, 30000, 1);

    createItems("Divino démoniac broach", "drop", "toute classe", null, "broach", "Broche Divino Démoniaque", "None", 15000000, 10000, 10000, 10000, 10000, 10000, 10000);

    createItems("Divino démoniac rings", "drop", "toute classe", null, "rings", "Anneaux Divino Démoniaque", "None", 15000000, 10000, 10000, 10000, 1000, 0, 0)

    createItems("Divino démoniac earrings", "drop", "toute classe", null, "earrings", "Boucles d'oreilles Divino Démoniaque", "None", 15000000, 10000, 10000, 10000, 1000, 0, 0);

    createItems("Divino démoniac belt", "drop", "toute classe", null, "belt", "Ceinture Divino Démoniaque", "None", 20000000, 0, 0, 0, 0, 15000, 15000, 1, 1)

    fs.appendFileSync('./assets/shop/shop.json', ']');
    fs.appendFileSync('./assets/shop/weapon.json', ']');
    fs.appendFileSync('./assets/shop/armor.json', ']');
    fs.appendFileSync('./assets/shop/accessory.json', ']');
    fs.appendFileSync('./assets/shop/consommable.json', ']');
}


module.exports = {
    items
}