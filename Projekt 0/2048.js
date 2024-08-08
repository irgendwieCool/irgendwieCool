var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }

}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}

document.addEventListener('keydown', (e)=> {
    if(e.code == 'KeyA'|| e.code == 'ArrowLeft'){
        console.log('1')
        links()
        fuegeHinzu()
    }
    if(e.code == 'KeyD'|| e.code == 'ArrowRight'){
        console.log('2')
        rechts()
        fuegeHinzu()
    }
    if(e.code == 'KeyW'|| e.code == 'ArrowUp'){
        console.log('3')
        hoch()
        fuegeHinzu()
    }
    if(e.code == 'KeyS'|| e.code == 'ArrowDown'){
        console.log('4')
        runter()
        fuegeHinzu()
    }
})

function verschieben(column){
    column = filterZero(column)
    for(r= 0; r < column.length;r++){
        if(column[r]=== column[r+1]){
            column[r] = column[r]*2
            column[r+1] = 0
        }
    }
    console.log(column)
    column = filterZero(column)
    while(column.length < 4){
        column.push(0)
    }
    return column
}

function links(){
    for(let i =0; i< columns; i++){
        let column = board[i]
        column = verschieben(column)
        board[i] = column
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }

}

function rechts(){
    for(let i = columns -1; i > -1; i--){
        let column = board[i]
        column = verschieben(column)
        column = filterZero(column)
        while(column.length < 4){
            column.unshift(0)
        }
        board[i] = column
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function hoch(){
    for(let i =0; i< columns; i++){
        let column = []
        column[0] = board[0] [i]
        column[1] = board[1] [i]
        column[2] = board[2] [i]
        column[3] = board[3] [i]
        console.log(column)
        column = verschieben(column)
        board[0] [i] = column[0]
        board[1] [i] = column[1]
        board[2] [i] = column[2]
        board[3] [i] = column[3]
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }

}

function runter(){
    for(let i =0; i< columns; i++){
        let column = []
        column[3] = board[0] [i]
        column[2] = board[1] [i]
        column[1] = board[2] [i]
        column[0] = board[3] [i]
        console.log(column)
        column = verschieben(column)
        board[0] [i] = column[3]
        board[1] [i] = column[2]
        board[2] [i] = column[1]
        board[3] [i] = column[0]
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }

}

function filterZero(row){
    return row.filter(num => num != 0);
}

function fuegeHinzu(){
    let oI = alleOhneInhallt()
    random = Math.floor(Math.random()*oI.length)
    console.log(random)
    console.log(oI[random][0])
    if(oI.length >= 0){
        let tile = document.getElementById(oI[random][0].toString() + "-" + oI[random][1].toString());
        board[oI[random][0]][oI[random][1]] = 2
        let num = 2
        tile.innerText = "2";
        tile.classList.add("x2");
            updateTile(tile, num);
    }
}

function alleOhneInhallt(){
    let ohneInhallt = []
    menge = 0;
    for(i= 0; i < columns; i++){
        for(a= 0; a < rows; a++){
            if(board[i][a] === 0) {
                ohneInhallt[menge] = [i,a]
                menge++
            }
        }
    }
    console.log(1)
    console.log(ohneInhallt)
    return ohneInhallt
}