function duckShoot(ammo, aim, ducks){
    let shots = Math.floor(ammo * aim)
    for(let i = 0; i < shots; i++){
        ducks = ducks.replace("2", "X")
    }
    return ducks
}
console.log(duckShoot(9, 0.41, '|~~~~~22~2~~~~~|'), '|~~~~~XX~2~~~~~|');
