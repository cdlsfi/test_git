let players = [];

createBeforeStartConrainer();

function createBeforeStartConrainer() {
    
    
    /*divContainer.id = "monId" */

    const divContainer = document.createElement("div");
    const divTirageAuSort = document.createElement("div");
    const h1TirageAuSort = document.createElement("h1");
    const btnCommencer = document.createElement("button");


    divContainer.classList.add("container");
    divTirageAuSort.classList.add("start_the_game");
    document.body.appendChild(divContainer);
    
    divContainer.appendChild(divTirageAuSort);
    divTirageAuSort.appendChild(h1TirageAuSort);
    divTirageAuSort.appendChild(btnCommencer);
    
    btnCommencer.innerText = "Commencer";
    btnCommencer.classList.add("btn-red");
    h1TirageAuSort.innerText = "Tirage au sort";

    btnCommencer.onclick = () => {
        divContainer.remove();
        createGameZone();
    }
}

function createGameZone() { 
    

    const divgame_zone = document.createElement("div");
    const divbtns_mode = document.createElement("div");
    const divpModeJeu = document.createElement("div");
    const btnsElection = document.createElement("button");
    const btnsClassement = document.createElement("button");
    const btnsQuestion = document.createElement("button");

    const iplus = document.createElement("i");
    
    const iplay = document.createElement("i");
    const istop = document.createElement("i");
    const irotate = document.createElement("i");

    const divgame_content = document.createElement("div");
    const h3QuiSeraElu = document.createElement("h3");
    const divplayer_content = document.createElement("div");
    //const arNomDuJoueur = document.createElement("article");
    //const btnsplayer_content_NomDuJoueur_red = document.createElement("button");
    const pModeJeu = document.createElement("p");
    const divwarning = document.createElement("div");
    const pVeuillezInserer = document.createElement("p");
    const divQuatresbtns = document.createElement("div");
    const btnsPlus = document.createElement("button");
    btnsPlus.id = "btn-plus";
    const btnsPlay = document.createElement("button");
    btnsPlay.id = "btn-play";
    const btnsRotate = document.createElement("button");
    btnsRotate.id = "btn-retry";
    const btnsStop = document.createElement("button");
    btnsStop.id = "btn-stop";

    //const h3NomDuJoueur = document.createElement("h3");

    document.body.appendChild(divgame_zone) ;
    divgame_zone.append(divbtns_mode, divgame_content, divwarning, divQuatresbtns);
    divbtns_mode.append(pModeJeu, btnsElection, btnsClassement, btnsQuestion);
    divgame_content.append(h3QuiSeraElu, divplayer_content); 
    //divplayer_content.append(arNomDuJoueur); 
    //arNomDuJoueur.append(h3NomDuJoueur, btnsplayer_content_NomDuJoueur_red);
    divwarning.appendChild(pVeuillezInserer);
    divQuatresbtns.append(btnsPlus, btnsPlay, btnsRotate, btnsStop); 

    
    //btnsplayer_content_NomDuJoueur_red.classList.add("btn-red");
    divQuatresbtns.id = "btns-game-status";
    btnsPlus.classList.add("btn-green");
    btnsRotate.classList.add("btn-green");
    btnsStop.classList.add("btn-red");
    btnsPlay.classList.add("btn-red");

  
    h3QuiSeraElu.innerText = "Qui sera l'Elu?";
    pVeuillezInserer.innerText = "Veuiilez nsérer au moins 2 joueurs pour débuter la partie.";
    //h3NomDuJoueur.innerText = "Nom du joueur";
    pModeJeu.innerText = "Mode de jeu";
    btnsClassement.innerText = "Classement";
    btnsElection.innerText = "Election";
    btnsQuestion.innerText = "Question";
    //btnsplayer_content_NomDuJoueur_red.innerText = "-";

    divgame_zone.id = "game-zone";
    divbtns_mode.id = "btns-mode";
    divgame_content.id = "game-content";
    divplayer_content.id = "players-content";
    //arNomDuJoueur.id = "NomDuJoueur";
    divwarning.id = "warning";

    btnsPlus.appendChild(iplus);
    btnsPlay.appendChild(iplay);
    btnsRotate.appendChild(irotate);
    btnsStop.appendChild(istop);

    btnsPlus.onclick = createNewPlayer

    iplus.classList.add("fa-solid", "fa-circle-plus", "fa-2x");
    iplay.classList.add("fa-solid", "fa-play", "fa-2x");
    irotate.classList.add("fa-solid", "fa-rotate", "fa-2x");
    istop.classList.add("fa-solid", "fa-stop", "fa-2x");

}

function createNewPlayer() {
    let playerName = prompt("Quel est votre nom ?\nLes caractères spéciaux ne sont pas admis");
    let playerAlreadyExist = false;
    console.log(players);


    //playerName = michel
    //players = ['Jean', 'Michel']
    if (playerName) {
        for (const player of players) {
            if (player.toLowerCase() == playerName.toLowerCase()) {
                alert("Le joueur existe déjà");
                playerAlreadyExist = true;
                createNewPlayer();
            }
        }
    
        if (!playerAlreadyExist){
            players.push(playerName);
            createCard(playerName);
        }
    }

    console.log("lol");
    // alert("Attention, ce nom existe deja");
}


function createCard(playerName){
    const divPlayersContent = document.getElementById("players-content")
    const arNomDuJoueur = document.createElement("article");
    const btnRemove = document.createElement("button");
    const h3NomDuJoueur = document.createElement("h3");
    divPlayersContent.append(arNomDuJoueur); 
    arNomDuJoueur.append(h3NomDuJoueur, btnRemove);
    h3NomDuJoueur.innerText = playerName;
    btnRemove.innerText = "-";
    btnRemove.classList.add("btn-red")
    arNomDuJoueur.id = playerName;
    divPlayersContent.id = "players-content";

    btnRemove.onclick = () => {
        checkToBegin();
        //Appel à ce moment au checkToBegin()
        arNomDuJoueur.remove();
        removePlayer(playerName);
        console.log(players.playerName);
    }
    checkToBegin ();
    
    function btnsPlayorNot () {
        if (players.length >= 2) {
            document.getElementById("btn-play").style.visibility = "visible";
        }
        else {
            document.getElementById("btn-play").style.visibility = "hidden"
            document.getElementById("btn-retry").style.visibility = "hidden"
            document.getElementById("btn-stop").style.visibility = "hidden"
        }
    }

    btnsPlayorNot();
}
   

    //Appel à ce moment au checkToBegin()
function checkToBegin() {
    if (players.length >= 2) {
        console.log("heyy");
        document.getElementById("warning").style.visibility = "hidden";
    }
    else {
        document.getElementById("warning").style.visibility = "visible";
    }
}


//playerList = ["zeyd", "michel"]
//playerList[0] = "zeyd"
function choosePlayer() {
    const indexPlayer = Math.floor(Math.random() * players.length);

    PlayerList[indexPlayer].id = "playerName";
    
    document.getElementById("playerName");
    setTimeout(choosePlayer, 500);

    //getByID(playerList[indexPlayer])


    //setTimeout(choosePlayer, 500)
}


function removePlayer(playerName) {

    const personIndex = players.indexOf(playerName);
    players.splice(personIndex, 1)
    checkToBegin();






    // for (let index = 0; index < players.length; index++) {
    //     if (players[index] == playerName) {
    //         players.splice[index];
    //     }        
    // }

//     if players.length >= 2 ;
// pVeuillezInserer.remove();


}






































/*beforeStartContainer()

function beforeStartContainer() {

}*/