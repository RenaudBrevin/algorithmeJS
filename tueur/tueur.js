class Killer {
    constructor() {
        this.name = "Jason";
        this.health = 100;
    }
}

class Caracteristique{
    constructor(death, hit, hitDeath) {
        this.death = death;
        this.hit = hit;
        this.hitDeath = hitDeath;
    }
}

class Survivant{
    constructor(name, death, hit, hitDeath) {
        this.name = name;
        this.caracteristique = new Caracteristique(death, hit, hitDeath)
    }
}

let allCaracteristique = [];
let nameCaracteristique=["hugoChienChien", "MarvinBouffeur", "QuentinPachaClub", "ArthurCasseDent", "AmbreCTou", "BrevinAkaBreuuvin","PierrickArduino"];


for (let index = 0; index < 5; index++) {
    // Définir toutes les variables de caractéristique de façon random
    let rand = Math.floor(Math.random() * (nameCaracteristique.length));
    let name = nameCaracteristique[rand];
    let d = Math.random().toFixed(2);
    let h = Math.random().toFixed(2);
    let hd = ((1-d-h)).toFixed(2);

    let caractere = new Survivant(name,d,h,hd);
    nameCaracteristique.splice(rand, 1)
    allCaracteristique.push(caractere);
}

let tueur = new Killer();

while(tueur.health > 0 && allCaracteristique.length!=0){

    let victime = Math.floor(Math.random() * (allCaracteristique.length));
    let proba = Math.random();

    if(proba < allCaracteristique[victime].caracteristique.death ){
        console.log("Le survivant " + allCaracteristique[victime].name + " meurt");
        allCaracteristique.splice(victime, 1);
    } 
    else if(proba > allCaracteristique[victime].caracteristique.hit){
        console.log("Le survivant " + allCaracteristique[victime].name + " inflige 10 de dégats");
        tueur.health -= 10;
    } 
    else{
        console.log("Le survivant " + allCaracteristique[victime].name + " meurt mais inflige 15 de dégats")
        tueur.health -= 15;
        allCaracteristique.splice(victime, 1);
    }
}

if(tueur.health <=0)
    console.log("Les survivants ont gagné Bravo !");
else
    console.log("Le tueur a tué tout le monde... Il lui restait " + tueur.health + " points de vie.");