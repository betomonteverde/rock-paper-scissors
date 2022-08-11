//Constantes

const rock    = "rock";
const paper   = "paper";
const scissor = "scissor";

const tie     = 0;
const win     = 1;
const lost    = 2

// Selecciones:

const btnRock    = document.getElementById("rock");
const btnPaper   = document.getElementById("paper");
const btnScissor = document.getElementById("scissor");
const selectText = document.getElementById("select-text");
const playerImg  = document.getElementById("player-img");
const pcImg      = document.getElementById("pc-img");

//Funcion para recibir elección del jugador:

btnRock.addEventListener("click", () => {
    played(rock);
});

btnPaper.addEventListener("click", () => {
    played(paper);
});

btnScissor.addEventListener("click", () => {
    played(scissor);
});

//Función para comparar elecciones:

function compareOptions(player, pc){

    if ( player == pc ) {
        return tie;
    } else if ( player == rock && pc == scissor) {
        return win;
    } else if ( player == paper && pc == rock) {
        return win;
    } else if ( player == scissor && pc == paper) {
        return win;
    } else {
        return lost;
    }

}

//Función jugada:

function played(player){

    playerImg.src = "./assets/img/" + player + ".svg";

    selectText.innerHTML = "Eligiendo";

    const changing = setInterval(function() {

        const pc = pcOption();
        pcImg.src     = "./assets/img/" + pc + ".svg";
        
    }, 150);

    setTimeout(function() {

        clearInterval(changing);

        const pc = pcOption();
    
        pcImg.src     = "./assets/img/" + pc + ".svg";

        const result = compareOptions(player, pc);

        switch (result) {
            case tie:
                selectText.innerHTML = "¡Empate!"
                break;
            case win:
                selectText.innerHTML = "¡Ganaste!"
                break;
            case lost:
                selectText.innerHTML = "¡Perdiste!"
                break;
        }
        
    }, 1000);
}

function pcOption(){
    const pcSelection = Math.floor(Math.random() * 3 + 1);

    switch (pcSelection) {
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissor;
    }
}






//PC:

// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let pc = getRandomNum(1, 3);




