let sum = 0;
let add = 1;
let cost = 50;
let bonus = 4;

const balanceElement = document.getElementById("balance");
const clickBtn = document.getElementById("btn");
const upgradeBtn = document.getElementById("upgrade");


clickBtn.addEventListener('click', () => {
    sum += add;
    balanceElement.innerHTML = sum;
});


upgradeBtn.addEventListener('click', () => {
    if (sum >= cost) {
        sum -= cost;
        add += bonus;
        balanceElement.innerHTML = sum;

        upgradeBtn.disabled = true; 
        upgradeBtn.innerHTML = "Bought";
        upgradeBtn.style.opacity = "0.5";
        upgradeBtn.style.cursor = "default";
        
        
    } 
    else {
        alert("Not enough money for upgrade!");
    }
});