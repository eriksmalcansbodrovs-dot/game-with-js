let sum = 0;
let add = 1;

let level = 1;
let minus = 1;

let cost1 = 50;
let bonus1 = 4;

let cost2 = 500;
let bonus2 = 15;

let cost3 = 1000;

const balanceElement = document.getElementById("balance");
const clickBtn = document.getElementById("btn");
const upgradeBtn = document.getElementById("upgrade");
const updateBtn = document.getElementById("update");
const procentBtn = document.getElementById("procent");
const levelBtn = document.getElementById("level");
const levelText = document.getElementById("level_up");



levelBtn.innerHTML = "Level up (2000 coins)";


function updateShop() {

    upgradeBtn.innerHTML = `Cost: ${cost1} coins (upgrade +5 coins)`;

    updateBtn.innerHTML = `Cost: ${cost2} coins (upgrade +15 coins)`;

    procentBtn.innerHTML = `Cost: ${cost3} coins (upgrade +30% coins)`;

}



clickBtn.addEventListener('click', () => {

    sum += add;

    balanceElement.innerHTML = sum;

});



upgradeBtn.addEventListener('click', () => {

    if (sum >= cost1) {

        sum -= cost1;

        add += bonus1;

        balanceElement.innerHTML = sum;

        upgradeBtn.disabled = true;

        upgradeBtn.innerHTML = "Bought (+5)";

    } else {

        alert("Not enough money!");

    }

});



updateBtn.addEventListener('click', () => {

    if (sum >= cost2) {

        sum -= cost2;

        add += bonus2;

        balanceElement.innerHTML = sum;

        updateBtn.disabled = true;

        updateBtn.innerHTML = "Bought (+15)";

    } else {

        alert("Not enough money!");

    }

});



procentBtn.addEventListener('click', () => {

    if (sum >= cost3) {

        sum -= cost3;

        add = Math.round(add * 1.3);

        balanceElement.innerHTML = sum;

        procentBtn.disabled = true;

        procentBtn.innerHTML = "Bought (+30%)";

    } else {

        alert("Not enough money!");

    }

});



levelBtn.addEventListener('click', () => {

    if (level === 1 && sum >= 2000) {

        sum -= 2000;

        level = 2;

        add = Math.max(1, add - 5);

        minus = 2;


        cost1 = 150;
        cost2 = 1000;
        cost3 = 2500;

        levelText.innerHTML = "LEVEL 2";

        levelBtn.innerHTML = "Level up (5000 coins)";


        upgradeBtn.disabled = false;
        updateBtn.disabled = false;
        procentBtn.disabled = false;

        updateShop();

        balanceElement.innerHTML = sum;

        alert("Welcome to LEVEL 2!");

    }


    else if (level === 2 && sum >= 5000) {

        sum -= 5000;

        level = 3;

        add = Math.max(1, add - 10);

        minus = 5;


        cost1 = 300;
        cost2 = 3000;
        cost3 = 5000;

        levelText.innerHTML = "LEVEL 3";

        // ВКЛЮЧАЕМ МАГАЗИН
        upgradeBtn.disabled = false;
        updateBtn.disabled = false;
        procentBtn.disabled = false;

        updateShop();

        levelBtn.innerHTML = "MAX LEVEL";

        levelBtn.disabled = true;

        balanceElement.innerHTML = sum;

        alert("Welcome to LEVEL 3!");

    }

    else {

        alert("Not enough coins for level up!");

    }

});


setInterval(() => {

    if (sum > 0) {

        sum -= minus;

        if (sum < 0) {

            sum = 0;

        }

        balanceElement.innerHTML = sum;

    }

}, 1000);



updateShop();