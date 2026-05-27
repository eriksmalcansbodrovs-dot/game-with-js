let sum = 0;
let add = 1;


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
