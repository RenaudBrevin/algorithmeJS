bouton = document.querySelector(".ButtonRetire")
section = document.querySelector("#game");
tourPlayer = document.querySelector("h3");
player=0;
batonSelectList = []

// Créer les batons

function create(){
    for (let index = 0; index < 20; index++) {
        document.querySelector("#beforeGame").style.display = "none";
        var div = document.createElement('div');
        div.id = "baton_"  + index;
        div.className = "baton";
        div.addEventListener("click", function(divSelect){
            selectBaton(divSelect);
        });
        section.appendChild(div);
    }
}

// Selection de baton et gestion bouton 

function selectBaton(divSelect){
    if(batonSelectList.includes(divSelect.target)){
        batonSelectList = batonSelectList.filter((element) => element !== divSelect.target)
        divSelect.target.style.border = "none";
        if(verifySelection()){
            bouton.style.backgroundColor = "transparent";
        }
        return;
    }
    divSelect.target.style.border = "2px solid rgb(240, 171, 154)";
    batonSelectList.push(divSelect.target);
    if(verifySelection()){
        bouton.style.backgroundColor = "transparent";
    } else{
        bouton.style.backgroundColor = "rgb(131, 122, 120)";
    }
}


// Confirmation suppression

bouton.addEventListener("click", function(){
    if(verifySelection()){
        batonSelectList.forEach(element => {
            section.removeChild(document.querySelector("#" + element.id));
        });
        batonSelectList.length = 0;
        player++;
        playerNumber = player%2+1
        tourPlayer.innerHTML = "Au tour du joueur " + playerNumber;
        if(isWinner()){
            alert("Bravo joueur " + playerNumber + " tu as gagné ! \n On rejoue une partie ?");
            location.reload();
        }
    }
});


// Vérifs

function verifySelection(){
    return (0 < batonSelectList.length && batonSelectList.length < 4)
}

function isWinner(){
    allBaton = document.querySelectorAll(".baton");
    return allBaton.length === 0;
}
