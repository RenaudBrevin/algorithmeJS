class Personnage {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

class Taxi{
    constructor(musiques, feux, playMusique) {
        this.musiques = musiques;
        this.feux = feux;
        this.playMusique = playMusique;
        this.changement = 0;
    }

    musicPlay(client){    
        if(this.musiques[this.playMusique] === 'Anissa - Wejdene'){
            console.log(client.name + " à entendu Anissa, il perd en santé mental et change de taxi")
            this.playMusique = Math.floor(Math.random() * (4 - 0 + 1) + 0);
            client.health--;
            this.changement++;
        }
    }
}

let John = new Personnage("John", 10);

let trajet = new Taxi(
    ['anaisse - Weldom','anna - wekmo','Anahess - Wejwej','Anas - Wejdeeem','Anissa - Wejdene'],
    30,
    Math.floor(Math.random() * (4 + 1))
);

while (John.health != 0 && trajet.feux != 0){
    trajet.feux--;
    console.log("Lancement de la musique " + trajet.musiques[trajet.playMusique]); 
    trajet.musicPlay(John);
    trajet.playMusique++;
    if(trajet.playMusique==5){
        trajet.playMusique=0;
    }
}

console.log("\n\n")

if(John.health == 0){
    console.log(John.name + " est mort avant d'arrivé chez lui. Pensez à payer sa course de taxi svp, le chauffeur attend");
} else{
    console.log(John.name + " est arrivé chez lui sans encombre avec encore " + John.health + " point de vie. Il lui a fallut " + trajet.changement + " changements");
}