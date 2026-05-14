let sum = 0
let add = 1
let cost = 50

const elements = document.getElementById("balance")
const btn = document.getElementById("btn")
const update = document.getElementById("upgrade")

    
    btn.addEventListener('click', () => {
        sum += add
        elements.innerHTML = sum
    })

    upgrade.addEventListener('click', () => {
        if (sum > cost) {
            sum -= cost;
            add++
            cost *= 2;
            elements.innerHTML = sum
            update.disabled = true
            
        }else{
        alert("Not enough money for upgrade!");
    }
    })