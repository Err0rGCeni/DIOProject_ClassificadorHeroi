let hero = {
    name: "",
    xp: 0,
    level: "ferro"
}

function updateHero() {
    const msg = document.getElementById("message");
    msg.innerHTML = `O herói de nome <b>${hero.name}</b> está no nível de <b>${hero.level}</b>`
}

function updateLevel(xp) {
    const progressBar = document.getElementById("progress")
    const maxXP = 10000;
    const percentage = (xp / maxXP) * 100;
    if (percentage > 100) {
        progressBar.style.width = '102%';
    } else {
        progressBar.style.width = `${percentage}%`;
    }

    progressBar.classList.remove('high-level')
    if (xp <= 1000) {
        progressBar.style.backgroundColor = '#d35400';
        hero.level = "Ferro"
    } else if (xp <= 2000) {
        progressBar.style.backgroundColor = '#bdc3c7';
        hero.level = "Bronze"
    } else if (xp <= 5000) {
        progressBar.style.backgroundColor = '#95a5a6';
        hero.level = "Prata"
    } else if (xp <= 7000) {
        progressBar.style.backgroundColor = '#f1c40f';
        hero.level = "Ouro"
    } else if (xp <= 8000) {
        progressBar.style.backgroundColor = '#3498db';
        hero.level = "Platina"
    } else if (xp <= 9000) {
        progressBar.style.backgroundColor = '#7e73c6';
        hero.level = "Ascendente"
    } else if (xp <= 10000) {
        progressBar.style.backgroundColor = '#27ae60';
        progressBar.classList.add('high-level')
        hero.level = "Imortal"
    } else {
        progressBar.style.backgroundColor = '#9b59b6';
        progressBar.classList.add('high-level')
        hero.level = "Radiante"
    }
}


function setHeroName(event) {
    hero.name = event.target.value
    updateHero()
}

function setHeroXP(event) {
    hero.xp = Number(event.target.value)
    updateLevel(hero.xp)
    updateHero()
}
