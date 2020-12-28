const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNumber1 = e.target.querySelector('#number1');
    const inputNumber2 = e.target.querySelector('#number2');
    const number1 = parseInt(inputNumber1.value);
    const number2 = parseInt(inputNumber2.value);

    if (!number1) {
        setResult('Invalid (Number 1). Please try again!', false);
        return;
    }

    if (!number2) {
        setResult('Invalid (Number 2). Please try again!', false);
        return;
    }

    if (number1 > 100 || number1 < 0) {
        setResult('Number 1 must be a positive number, between 1 and 100', false);
        return;
    }

    if (number2 > 100 || number2 < 0) {
        setResult('Number 2 must be a positive number, between 1 and 100', false);
        return;
    }

    // User input
    const bet = getRandom(number1, number2);
    const animal = getAnimal(bet);

    // Random result
    const drawResult = getRandom(1, 100);
    const animalDrawResult = getAnimal(drawResult);

    let won = `<strong>You won! Your bet: ${bet} (${animal}).<br><strong>Result: ${drawResult} (${animalDrawResult}).</strong>`;
    let lost = `You lost! Your bet: ${bet} (${animal}).<br><strong>Result: ${drawResult} (${animalDrawResult}).</strong>`;

    if (bet === drawResult || animal === animalDrawResult) {
        setResult(won, true);
    } else {
        setResult(lost, false);
    }
});

function getAnimal(bet) {

    const ostrich = [1, 2, 3, 4];
    const eagle = [5, 6, 7, 8];
    const donkey = [9, 10, 11, 12];
    const butterfly = [13, 14, 15, 16];
    const dog = [17, 18, 19, 20];
    const goat = [21, 22, 23, 24];
    const ram = [25, 26, 27, 28];
    const camel = [29, 30, 31, 32];
    const snake = [33, 34, 35, 36];
    const rabbit = [37, 38, 39, 40];
    const horse = [41, 42, 43, 44];
    const elephant = [45, 46, 47, 48];
    const rooster = [49, 50, 51, 52];
    const cat = [53, 54, 55, 56];
    const alligator = [57, 58, 59, 60];
    const lion = [61, 62, 63, 64];
    const monkey = [65, 66, 67, 68];
    const pig = [69, 70, 71, 72];
    const peacock = [73, 74, 75, 76];
    const turkey = [77, 78, 79, 80];
    const bull = [81, 82, 83, 84];
    const tiger = [85, 86, 87, 88];
    const bear = [89, 90, 91, 92];
    const deer = [93, 94, 95, 96];
    const cow = [97, 98, 99, 100];

    if (ostrich.includes(bet)) return 'Ostrich';
    if (eagle.includes(bet)) return 'Eagle';
    if (donkey.includes(bet)) return 'Donkey';
    if (butterfly.includes(bet)) return 'Butterfly';
    if (dog.includes(bet)) return 'Dog';
    if (goat.includes(bet)) return 'Goat';
    if (ram.includes(bet)) return 'Ram';
    if (camel.includes(bet)) return 'Camel';
    if (snake.includes(bet)) return 'Snake';
    if (rabbit.includes(bet)) return 'Rabbit';
    if (horse.includes(bet)) return 'Horse';
    if (elephant.includes(bet)) return 'Elephant';
    if (rooster.includes(bet)) return 'Rooster';
    if (cat.includes(bet)) return 'Cat';
    if (alligator.includes(bet)) return 'Alligator';
    if (lion.includes(bet)) return 'Lion';
    if (monkey.includes(bet)) return 'Monkey';
    if (pig.includes(bet)) return 'Pig';
    if (peacock.includes(bet)) return 'Peacock';
    if (turkey.includes(bet)) return 'Turkey';
    if (bull.includes(bet)) return 'Bull';
    if (tiger.includes(bet)) return 'Tiger';
    if (bear.includes(bet)) return 'Bear';
    if (deer.includes(bet)) return 'Deer';
    if (cow.includes(bet)) return 'Cow';
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function createDiv() {
    const div = document.createElement('div');
    return div;
}

function setResult(msg, isValid) {

    const result = document.querySelector('#result');
    result.innerHTML = '';
    const div = createDiv();

    if (isValid) {
        document.getElementById("result").className = "alert alert-success";
    } else {
        document.getElementById("result").className = "alert alert-warning";
    }

    div.innerHTML += msg;
    result.appendChild(div);
}