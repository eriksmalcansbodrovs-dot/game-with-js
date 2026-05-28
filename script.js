let sum = 0;
let add = 1;

let level = 1;
let minus = 1;

let cost1 = 50;
let bonus1 = 4;

let cost2 = 500;
let bonus2 = 15;

let cost3 = 1000;

let rebirth = 10000;
let rebirthCount = 0;

const balanceElement = document.getElementById("balance");
const clickBtn = document.getElementById("btn");
const upgradeBtn = document.getElementById("upgrade");
const updateBtn = document.getElementById("update");
const procentBtn = document.getElementById("procent");
const levelBtn = document.getElementById("level");
const levelText = document.getElementById("level_up");
const rebirthBtn = document.getElementById("rebirth");

levelBtn.innerHTML = "Level up (2000 coins)";

function scalePrice(price) {

    return price * (rebirthCount + 1);

}

function checkRebirth() {

    if (upgradeBtn.disabled && updateBtn.disabled && procentBtn.disabled && level === 3) {

        rebirthBtn.style.display = "block";

    }

}

function updateShop() {

    upgradeBtn.innerHTML =
        `Cost: ${cost1} coins (upgrade +5 coins)`;

    updateBtn.innerHTML =
        `Cost: ${cost2} coins (upgrade +15 coins)`;

    procentBtn.innerHTML =
        `Cost: ${cost3} coins (upgrade +30% coins)`;

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

        checkRebirth();

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

        checkRebirth();

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

        checkRebirth();

    } else {

        alert("Not enough money!");

    }

});

levelBtn.addEventListener('click', () => {
    if (level === 1 && sum >= 2000) {

        sum = 0;
        level = 2;
        add = Math.max(1, add - 5);
        minus = 2;

        cost1 = scalePrice(350);
        cost2 = scalePrice(1000);
        cost3 = scalePrice(3000);

        levelText.innerHTML = "LEVEL 2 | REBIRTH ${rebirthCount}";
        levelBtn.innerHTML = "Level up (5000 coins)";

        upgradeBtn.disabled = false;
        updateBtn.disabled = false;
        procentBtn.disabled = false;

        updateShop();

        balanceElement.innerHTML = sum;

        alert("Welcome to LEVEL 2!");

    }
    else if (level === 2 && sum >= 5000) {

        sum = 0;

        level = 3;

        add = Math.max(1, add - 10);

        minus = 5;

        cost1 = scalePrice(750);
        cost2 = scalePrice(3500);
        cost3 = scalePrice(6000);

        levelText.innerHTML = "LEVEL 3 | REBIRTH ${rebirthCount}";

        upgradeBtn.disabled = false;
        updateBtn.disabled = false;
        procentBtn.disabled = false;

        updateShop();

        levelBtn.innerHTML = "MAX LEVEL";
        levelBtn.disabled = true;

        balanceElement.innerHTML = sum;

        checkRebirth();

        alert("Welcome to LEVEL 3!");

    }

    else {

        alert("Not enough coins for level up!");

    }

});

rebirthBtn.addEventListener('click', () => {

    if (sum >= rebirth) {

        rebirthCount++;
        rebirth = rebirth * 2;

        rebirthBtn.innerHTML = `Rebirth (Cost: ${rebirth} Bonus: x${rebirthCount + 1})`;

        sum = 0;
        level = 1
        minus = 1 + rebirthCount;
        add = 1 + rebirthCount * 2;

        cost1 = scalePrice(50);
        cost2 = scalePrice(500);
        cost3 = scalePrice(1000);

        upgradeBtn.disabled = false;
        updateBtn.disabled = false;
        procentBtn.disabled = false;

        updateShop();

        levelBtn.disabled = false;
        levelBtn.innerHTML = "Level up (2000 coins)";
        levelText.innerHTML = `LEVEL 1 | REBIRTH ${rebirthCount}`;

        balanceElement.innerHTML = sum;

        rebirthBtn.style.display = "none";

        alert(`REBIRTH ${rebirthCount} SUCCESS!`);

    }

    else {

        alert("Not enough money for rebirth!");

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