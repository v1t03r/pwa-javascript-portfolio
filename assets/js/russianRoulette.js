function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
    let shot = getRandomIntInclusive(1, 6);
    for (let cylinder = 1; cylinder <= 6; cylinder++) {
        if (cylinder === shot) {
            document.querySelector("#game").innerHTML += (`<p class="alert alert-danger" role="alert"><strong>Ok, Now You're dead. Game over!</strong></p>`);
            break;
        }
        else {
            if(cylinder === 1){
                document.querySelector("#game").innerHTML += (`<p class="alert alert-success" role="alert"><strong>Brave!</strong> Pulled the trigger <strong>${cylinder} time!</strong></p>`);
            }else{
                document.querySelector("#game").innerHTML += (`<p class="alert alert-success" role="alert"><strong>Brave!</strong> Pulled the trigger <strong>${cylinder} times!</strong></p>`);
            }
        }
    }
}

function resetGame() {
    reset = document.querySelector("#game").innerHTML = '';
    return reset;
}