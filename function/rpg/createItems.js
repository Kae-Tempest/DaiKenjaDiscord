const fs = require('fs')
const items = (client) => {
    function writingDot(file) {
        fs.appendFileSync("./assets/shop/" + file, ",");
    }

    function createItems(name, rank, classe, label, type, desc, cost, force, agi, intel, spirit, vita, consti, last = 0, shoplast = 0) {
        let items = {
            name: name,
            rank: rank,
            class: classe,
            label: label,
            type: type,
            description: desc,
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
        if(!last || !shoplast) {
            writingDot("shop.json");
        }
        if (type === "Mh" || type === "Oh") {
            fs.appendFileSync('./assets/shop/weapon.json', data);
            if(!last) writingDot("weapon.json");
        }
        if (type === "armor") {
            fs.appendFileSync('./assets/shop/armor.json', data);
            if(!last) writingDot("armor.json")
        }
        if (type === "rings" || type === "earrings" || type === "belt" || type === "broach") {
            fs.appendFileSync('./assets/shop/accessory.json', data);
            if(!last) writingDot("accessory.json")
        }
    }

    fs.appendFileSync('./assets/shop/shop.json', '[');
    fs.appendFileSync('./assets/shop/weapon.json', '[');
    fs.appendFileSync('./assets/shop/armor.json', '[');
    fs.appendFileSync('./assets/shop/accessory.json', '[');

    createItems("Short sword", "commun", "Voleur", "1", "Mh", "Epée courte", 200, 1, 1, 0, 0, 0, 0);

    createItems("Dague", "commun", "Voleur", "2", "Mh", "Dague", 200, 1, 1, 0, 0, 0, 0);

    createItems("Longue sword", "commun", "Barbare", "3", "Mh", "Epée longue", 200, 2, 0, 0, 0, 0, 0);

    createItems("Bouclier en fer", "commun", "toute classe", "4", "Oh", "Bouclier en fer", 200, 0, 0, 0, 0, 0, 2);

    createItems("Arc", "commun", "Chasseur", "5", "Mh", "Arc", 200, 1, 0, 1, 0, 0, 0);

    createItems("Masse", "commun", "Paladin", "6", "Mh", "Masse", 300, 4, -1, 0, 1, 0, 0);

    createItems("Baton", "commun", "Mage", "7", "Mh", "Baton magique", 200, 0, 0, 2, 2, 0, 0);

    createItems("Magic aura", "commun", "Mage", "8", "Oh", "Magic aura", 200, 0, 0, 1, 1, 0, 2);

    createItems("Epée courte en fer blanc", "rare", "Voleur", "9", "Mh", "Epée courte en fer blanc", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Dague en fer blanc d", "rare", "Voleur", "10", "Mh", "Dague en fer blanc pour la Main hand", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Dague en fer blanc g", "rare", "Voleur", "11", "Oh", "Dague en fer blanc pour la Off hand", 1000, 5, 5, 0, 0, 0, 0);

    createItems("Epée longue en fer blanc", "rare", "Barbare, Paladin", "12", "Mh", "Epée longue en fer blanc", 1000, 8, 0, 0, 0, 0, 0);

    createItems("Bouclier en fer blanc", "rare", "toute classe", "13", "Oh", "Bouclier en fer blanc", 1000, 0, 0, 0, 0, 0, 8);

    createItems("Arc en chêne rouge", "rare", "Chasseur", "14", "Mh", "Arc en chêne rouge", 1000, 5, 0, 5, 0, 0, 0);

    createItems("Masse lourde", "rare", "Paladin", "15", "Mh", "Masse lourde", 1000, 12, -3, 0, 0, 0, 0);

    createItems("Bâton magique", "rare", "Mage", "16", "Mh", "Bâton magique", 1000, 0, 0, 8, 8, 0, 0);

    createItems("Magic shield", "rare", "Mage", "17", "Oh", "Magic shield", 1000, 0, 0, 5, 5, 0, 10);

    createItems("Epée courte en mythril", "legendaire", "Voleur", "18", "Mh", "Epée  courte en mythril", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Dague en mythril d", "legendaire", "Voleur", "19", "Mh", "Dague en mythril pour Main hand", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Dague en mythril g", "legendaire", "Voleur", "20", "Oh", "Dague en mythril pour Off hand", 3500, 15, 15, 0, 0, 0, 0);

    createItems("Epée longue en mythril", "legendaire", "Barbare, Paladin", "21", "Mh", "Epée longue en mythril", 3500, 20, 0, 0, 0, 0, 0);

    createItems("Bouclier en mythril", "legendaire", "toute classe", "22", "Oh", "Bouclier en mythril", 3500, 0, 0, 0, 0, 0, 20);

    createItems("Arc en fer à poulis", "legendaire", "Chasseur", "23", "Mh", "Arc en fer à poulis", 3500, 18, 0, 18, 0, 0, 0);

    createItems("Masse en mythril", "legendaire", "Paladin", "24", "Mh", "Masse en mythril", 3500, 25, -7, 0, 0, 0, 0);

    createItems("Vaton en chêne rouge magique", "legendaire", "Mage", "25", "Mh", "Bâton en chêne rouge magique", 3500, 0, 0, 20, 20, 0, 0);

    createItems("Divin aura", "legendaire", "Mage", "26", "Oh", "Divin aura", 3500, 0, 0, 10, 10, 0, 25);

    createItems("Elucidator", "heroique", "Barbare", "27", "Mh", "Premiere Epée de Kirito !", 10000, 200, 0, 0, 0, 100, 0);

    createItems("Dark repulser", "heroique", "Barbare", "27", "Oh", "Seconde Epée de Kirito", 10000, 200, 0, 0, 0, 100, 0);

    createItems("Master sword", "heroique", "Barbare", "29", "Mh", "Epée de Link !", 20000, 300, 0, 0, 0, 150, 0);

    createItems("New moon", "heroique", "Paladin et Voleur", "30", "Mh", "Epée courte de Maple", 20000, 150, 150, 0, 150, 150, 0);

    createItems("Mirror of the dark night", "heroique", "toute classe", "31", "Oh", "Bouclier de Maple", 20000, 0, 0, 0, 0, 175, 300);

    createItems("Athamé", "heroique", "Voleur", "32", "Mh", "Dague d'une voleuse qui accompgna un héro !", 10000, 100, 100, 0, 0, 100, 0);

    createItems("Tantō", "heroique", "Voleur", "33", "Oh", "Dague d'une voleuse qui accompgna un héro !", 10000, 100, 100, 0, 0, 100, 0);

    createItems("Khukuri", "heroique", "Voleur", "34", "Mh", "Dague d'une Héroïne", 20000, 150, 150, 0, 0, 150, 0);

    createItems("Kusanagi", "heroique", "Voleur", "35", "Oh", "Dague d'une Héroïne", 20000, 150, 150, 0, 0, 150, 0);

    createItems("Baguette de sureau", "heroique", "Mage", "36", "Mh", "Baguette de Harry Potter", 20000, 0, 0, 150, 150, 150, 0);

    createItems("Bouclier d'athena", "heroique", "toute classe", "37", "Oh", "Bouclier d'Athéna", 21000, 0, 0, 0, 0, 200, 300);

    createItems("Evansmana", "Divin", "Barbare", "38", "Mh", "Evansmana épée spation-temporelle", 50000, 500, 0, 0, 0, 350, 0);

    createItems("Venuzdnor", "Demoniaque", "Barbare", "39", "Mh", "Venuzdnor epée de Anos Voldigoad", 750000, 800, 0, 0, 0, 400, 0);

    createItems("Chu'zhi", "Divino-legendaire", "Voleur", "40", "Mh", "Dague permetant des fantastiques attaques élémentaires, elle scintille d’un vert de Jade.", 375000, 250, 250, 0, 0, 400, 0);

    createItems("Chi'zhu", "Divino-legendaire", "Voleur", "41", "Oh", "Dague permetant des fantastiques attaques élémentaires, elle scintille d’un vert de Malachite.", 375000, 250, 250, 0, 0, 400, 0);

    createItems("Typhoon", "Divino-Legendaire", "toute classe", "42", "Oh", "Bouclier qui absorbe des typhoons", 750000, 0, 0, 0, 0, 800, 800);

    createItems("Crimson book", "Divino-legendaire", "Mage", "43", "Mh", "Livre Magique", 750000, 0, 0, 250, 250, 300, 0);

    createItems("Demoniac Bow", "Demoniac", "Chasseur", "44", "Mh", "Arc démoniaque", 750000, 250, 0, 250, 0, 300, 0);

    createItems("Demoniac hammer", "Demoniac", "Paladin", "45", "Mh", "Marteau démioniaque", 750000, 250, 0, 0, 250, 300, 0);

    createItems("Armure en cuir", "commun", "Barbare, Voleur, Paladin, Chasseur", "46", "armor", "Armure en cuir", 350, 0, 2, 0, 0, 30, 9);

    createItems("Armure legère en fer", "commun", "Voleur, Chasseur", "47", "armor", "Armure legère en fer", 400, 0, 1, 0, 0, 35, 10);

    createItems("Armure lourde en fer", "commun", "Barbare, Paladin", "48", "armor", "Armure Lourde en fer", 400, 0, -1, 0, 0, 35, 11);

    createItems("Cotte de maille", "commun", "toute classe", "49", "armor", "Cotte de maille", 300, 0, 0, 0, 0, 30, 9);

    createItems("Toge", "commun", "Mage", "50", "armor", "Toge magique", 300, 0, 0, 2, 2, 35, 7);

    createItems("Armure en cuir renforcé", "rare", "Barbare, Voleur, Paladin, Chasseur", "51", "armor", "Amure en cuir renforcé", 1250, 0, 6, 0, 0, 55, 20);

    createItems("Armure legère en fer blanc", "rare", "Voleur, Chasseur", "52", "armor", "Armure legère en fer blanc", 1300, 0, 5, 0, 0, 60, 22);

    createItems("Armure lourde en fer blanc", "rare", "Barbare, Paladin", "53", "armor", "Armure lourde en fer blanc", 1400, 0, -3, 0, 0, 60, 25);

    createItems("Cotte de maille en fer blanc", "rare", "toute classe", "54", "armor", "Cotte de maille en fer blanc", 1200, 0, 4, 0, 0, 60, 16);

    createItems("Magic toge", "rare", "Mage", "55", "armor", "Toge magique", 1200, 0, 0, 8, 8, 60, 16);

    createItems("Armure en crocodile rendorcé", "legendaire", "Barbare, Voleur, Paladin, Chasseur", "56", "armor", "Armure en cuir de crocodile renforcé", 3750, 0, 13, 0, 0, 75, 35);

    createItems("Armure legère en mythril", "legendaire", "Voleur, Chasseur", "57", "armor", "Armure legère en mythril", 3800, 0, 10, 0, 0, 80, 38);

    createItems("Armure lourde en mythril", "legendaire", "Barbare, Paladin", "58", "armor", "Armure lourde en mythril", 3900, 0, -8, 0, 0, 80, 42);

    createItems("Cotte de maille en mythril", "legendaire", "toute classe", "59", "armor", "Cotte de maille en mythril", 3700, 0, 6, 0, 0, 75, 35);

    createItems("Benny hill toge", "legendaire", "Mage", "60", "armor", "Toge béni", 3700, 0, 0, 15, 15, 80, 30);

    createItems("Bestial armor", "heroique", "toute classe", "61", "armor", "Armure bestial", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Black rose armor", "heroique", "toute classe", "62", "armor", "Armure de Maple", 20000, 0, 0, 0, 0, 200, 200);

    createItems("God armor", "heroique", "toute classe", "63", "armor", "Armure de dieux", 500000, 0, 0, 0, 0, 800, 400);

    createItems("Demoniac armor", "heroique", "toute classe", "64", "armor", "Armure du roi démon", 750000, 0, 0, 0, 0, 1200, 600, 1);

    createItems("Iron rings", "commun", "toute classe", "65", "rings", "Anneaux en fer", 200, 0, 0, 0, 0, 20, 5);

    createItems("Gold rings", "rare", "toute classe", "66", "rings", "Anneaux en or", 1000, 0, 0, 0, 0, 50, 20);

    createItems("Titanium rings", "legendaire", "toute classe", "67", "rings", "Anneaux en titanium", 3500, 0, 0, 0, 0, 80, 40);

    createItems("Diamond rings", "heroique", "toute classe", "68", "rings", "Anneaux en diamant", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Emerald rings", "heroique", "toute classe", "69", "rings", "Anneaux en emeraude", 20000, 0, 0, 0, 0, 200, 200);

    createItems("Divin rings", "Divinity", "toute classe", "70", "rings", "Anneaux de dieu", 75000, 0, 0, 0, 0, 500, 375);

    createItems("Demoniac rings", "Demoniaque", "toute classe", "71", "rings", "Anneaux du roi démon", 150000, 0, 0, 0, 0, 600, 800);

    createItems("Iron earrings", "commun", "toute classe", "72", "earrings", "Boucle d'oreils en fer", 200, 5, 5, 5, 5, 20, 0);

    createItems("Gold earrings", "rare", "toute classe", "73", "earrings", "bloucle d'oreils en or", 1000, 10, 10, 10, 10, 40, 0);

    createItems("Titanium earrings", "legendaire", "toute classe", "74", "earrings", "boucles d'oreils en titanium", 3500, 15, 15, 15, 15, 60, 0);

    createItems("Diamond earrings", "heroique", "toute classe", "75", "earrings", "Boucles d'oreils en diamant", 10000, 50, 50, 50, 50, 200, 0);

    createItems("Emerald earrings", "heroique", "toute classe", "76", "earrings", "Boucles d'oreils en emeraude", 20000, 100, 100, 100, 100, 400, 0);

    createItems("Divin earrings", "Divinity", "toute classe", "77", "earrings", "Boucles d'oreils de dieu", 75000, 300, 300, 300, 300, 1200, 0);

    createItems("Demoniac earrings", "Demoniaque", "toute classe", "78", "earrings", "Boucles d'oreils du roi démon", 150000, 500, 500, 500, 500, 2000, 0);

    createItems("Iron belt", "commun", "toute classe", "79", "belt", "Ceinture en fer", 200, 0, 0, 0, 0, 20, 20);

    createItems("Gold belt", "rare", "toute classe", "80", "belt", "Ceinture en or", 1000, 0, 0, 0, 0, 60, 60);

    createItems("Titanium belt", "legendaire", "toute classe", "81", "belt", "Ceinture en titanium", 3500, 0, 0, 0, 0, 80, 80);

    createItems("Diamond belt", "heroique", "toute classe", "82", "belt", "Ceinture en diamant", 10000, 0, 0, 0, 0, 150, 150);

    createItems("Emerald belt", "heroique", "toute classe", "83", "belt", "Ceinture en emeraude", 20000, 0, 0, 0, 0, 200, 200);

    createItems("Divin belt", "Divinity", "toute classe", "84", "belt", "Ceinture de dieu", 75000, 0, 0, 0, 0, 400, 400);

    createItems("Demoniac belt", "Demoniaque", "toute classe", "85", "belt", "Ceinture du roi démon", 150000, 0, 0, 0, 0, 600, 600);

    createItems("Iron broach", "commun", "toute classe", "86", "broach", "Broche en fer", 200, 30, 30, 30, 30, 30, 30,0);

    createItems("Gold broach", "commun", "toute classe", "87", "broach", "Broche en or", 1000, 60, 60, 60, 60, 60, 60);

    createItems("Titanium broach", "commun", "toute classe", "88", "broach", "Broche en titanium", 3500, 80, 80, 80, 80, 80, 80);

    createItems("Diamond broach", "commun", "toute classe", "89", "broach", "Broche en diamant", 10000, 150, 150, 150, 150, 150, 150);

    createItems("Emerald broach", "commun", "toute classe", "90", "broach", "Broche en emeraude", 20000, 200, 200, 200, 200, 200, 200);

    createItems("Divin broach", "commun", "toute classe", "91", "broach", "Broche de dieu", 150000, 500, 500, 500, 500, 500, 500);

    createItems("Demoniac broach", "commun", "toute classe", "92", "broach", "Broche du roi démon", 1000000, 1000, 1000, 1000, 1000, 1000, 1000, 1  );

    createItems("Shuto","drop","Voleur","65148","Mh","Coup de karaté contenue dans une lame",1000000,2500,2000,1000,0,1500,100,0,0);

    createItems("Shuta","drop","Voleur","964871","Oh","Coup de karaté contenue dans une lame",1000000,2500,2000,1000,0,1500,1000,0,0);

    createItems("Arbalete","drop","Chasseur","648153","Mh","Arbalete",2000000,5000,4000,2000,0,3000,2000,1,1)

    fs.appendFileSync('./assets/shop/shop.json', ']');
    fs.appendFileSync('./assets/shop/weapon.json', ']');
    fs.appendFileSync('./assets/shop/armor.json', ']');
    fs.appendFileSync('./assets/shop/accessory.json', ']');

}


module.exports = {
    items
}