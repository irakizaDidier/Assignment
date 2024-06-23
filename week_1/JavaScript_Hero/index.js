function Character(name, health, type) {
    this.name = name;
    this.health = health;
    this.type = type;
}

Character.prototype.takeDamage = function (damage) {
    this.health = Math.max(this.health - damage, 0);
};

Character.prototype.heal = function (amount) {
    this.health = Math.min(this.health + amount, 100);
};

const hero = new Character("Shadow Avenger", 100, "hero");
const villain = new Character("Dark Shadow", 100, "villain");

function updateHealth() {
    document.getElementById("hero-health").innerText = hero.health;
    document.getElementById("villain-health").innerText = villain.health;
    document.getElementById("hero-health-bar").style.width = hero.health + '%';
    document.getElementById("villain-health-bar").style.width = villain.health + '%';
}

function logAction(action) {
    const log = document.getElementById("battleLog");
    log.innerHTML += action + "<br>";
    log.scrollTop = log.scrollHeight;
}

function attack() {
    const heroDamage = Math.floor(Math.random() * 20) + 5;
    const villainDamage = Math.floor(Math.random() * 20) + 5;

    villain.takeDamage(heroDamage);
    hero.takeDamage(villainDamage);

    logAction(`Hero attacks! Deals ${heroDamage} damage.`);
    logAction(`Villain retaliates! Deals ${villainDamage} damage.`);

    updateHealth();
    checkGameOver();
}

function defend() {
    const healAmount = Math.floor(Math.random() * 10) + 5;

    hero.heal(healAmount);

    logAction(`Hero defends and heals for ${healAmount} health.`);

    updateHealth();
}

function checkGameOver() {
    if (hero.health === 0 || villain.health === 0) {
        document.getElementById("attack-btn").disabled = true;
        document.getElementById("defend-btn").disabled = true;
        document.getElementById("reset-btn").disabled = false;

        if (hero.health === 0 && villain.health === 0) {
            logAction("It's a draw!");
        } else if (hero.health === 0) {
            logAction("Villain wins!");
        } else {
            logAction("Hero wins!");
        }
    }
}

function reset() {
    hero.health = 100;
    villain.health = 100;

    updateHealth();

    document.getElementById("battleLog").innerHTML = "";
    document.getElementById("attack-btn").disabled = false;
    document.getElementById("defend-btn").disabled = false;
    document.getElementById("reset-btn").disabled = true;

    logAction("The battle has been reset.");
}

updateHealth();