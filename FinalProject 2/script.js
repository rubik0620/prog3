var matrix = [
    [1, 1, 1, 2, 1, 2, 1, 2, 3, 2, 1, 2, 0, 0, 1, 0, 2, 3, 2, 1, 0, 1, 1, 0, 2, 3, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 2, 3, 2, 1, 0, 3, 4, 2, 3, 2, 1, 0, 0, 1, 4, 3, 2, 1, 1, 0, 0, 0, 2, 3, 2],
    [0, 0, 1, 1, 0, 2, 3, 1, 0, 1, 1, 0, 2, 3, 1, 1, 1, 0, 0, 1, 2, 3, 1, 0, 2, 4, 2, 1, 1, 0],
    [1, 4, 0, 0, 4, 1, 0, 2, 3, 1, 2, 3, 2, 4, 0, 3, 0, 1, 1, 4, 0, 3, 1, 2, 0, 1, 0, 1, 4, 1],
    [0, 1, 1, 1, 0, 2, 3, 2, 1, 0, 3, 0, 1, 3, 2, 1, 1, 0, 1, 0, 1, 2, 0, 4, 0, 1, 1, 0, 3, 0],
    [1, 0, 1, 2, 1, 3, 0, 1, 0, 4, 1, 4, 2, 3, 1, 2, 1, 3, 0, 4, 0, 0, 1, 1, 2, 3, 1, 1, 2, 2],
    [0, 1, 2, 0, 1, 2, 3, 2, 1, 1, 3, 0, 2, 3, 2, 1, 0, 3, 1, 3, 1, 1, 1, 0, 0, 1, 0, 2, 3, 1],
    [1, 1, 0, 1, 1, 1, 0, 2, 3, 1, 0, 2, 3, 2, 1, 2, 1, 1, 4, 0, 0, 1, 0, 2, 3, 1, 1, 1, 0, 0],
    [1, 1, 1, 4, 0, 3, 1, 2, 0, 0, 3, 0, 2, 3, 2, 1, 0, 0, 1, 2, 0, 4, 1, 4, 1, 2, 2, 1, 3, 1],
    [0, 0, 1, 0, 1, 3, 1, 2, 0, 1, 0, 1, 0, 0, 3, 0, 1, 1, 0, 1, 4, 1, 1, 0, 1, 0, 2, 3, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 2, 3, 1, 2, 3, 2, 4, 0, 3, 0, 1, 0, 1, 1, 2, 3, 2, 1, 1, 3, 1, 4, 0],
    [1, 1, 1, 1, 0, 0, 0, 2, 3, 2, 1, 2, 1, 0, 1, 0, 4, 3, 2, 1, 1, 1, 0, 2, 3, 2, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 2, 3, 2, 1, 0, 3, 4, 2, 4, 2, 1, 0, 0, 1, 2, 0, 0, 1, 0, 2, 3, 1, 1, 1, 3],
    [1, 0, 1, 1, 0, 2, 3, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 0, 1, 0, 4, 3, 1, 2, 0, 1, 3, 0, 2, 3],
    [1, 1, 0, 0, 1, 1, 0, 2, 3, 1, 2, 3, 2, 1, 4, 3, 1, 1, 0, 1, 0, 2, 3, 2, 1, 0, 1, 1, 2, 0],
    [0, 1, 2, 3, 1, 2, 3, 2, 1, 0, 3, 1, 2, 3, 2, 1, 0, 3, 0, 3, 3, 4, 1, 1, 0, 1, 0, 4, 3, 1],
    [1, 4, 4, 0, 1, 1, 0, 2, 3, 4, 0, 2, 3, 2, 1, 2, 4, 0, 1, 4, 2, 3, 1, 2, 3, 2, 1, 0, 3, 0],
    [1, 1, 1, 0, 1, 3, 1, 2, 1, 0, 3, 1, 2, 3, 2, 1, 1, 0, 1, 2, 1, 0, 1, 1, 2, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 3, 1, 4, 4, 1, 3, 0, 2, 3, 2, 1, 0, 1, 1, 2, 3, 1, 0, 4, 1, 0, 2, 3, 1, 1],
    [0, 4, 1, 0, 1, 3, 1, 2, 0, 1, 0, 1, 0, 1, 4, 0, 1, 1, 0, 1, 4, 0, 1, 0, 2, 3, 2, 1, 4, 3],
    [1, 1, 0, 1, 0, 4, 0, 2, 3, 1, 2, 4, 2, 1, 0, 3, 4, 1, 1, 1, 1, 1, 4, 0, 3, 1, 4, 4, 2, 1],
    [1, 1, 1, 4, 1, 1, 0, 4, 3, 1, 2, 3, 2, 1, 1, 3, 0, 01, 1, 0, 1, 1, 3, 0, 1, 0, 0, 1, 1, 3],
];
var count = 0
var side = 30;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var viltArr = [];
var fireArr = [];

function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3);
                predatorArr.push(predator);

            }
            else if (matrix[y][x] == 4) {
                var vilt = new Vilt(x, y, 4);
                viltArr.push(vilt);

            }
        }
    }

}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
            }

            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {

        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }

    for (var i in predatorArr) {

        predatorArr[i].eat();
        predatorArr[i].move();
        predatorArr[i].mul();
        predatorArr[i].die();
    }

    for (var i in viltArr) {
        viltArr[i].eat();
        viltArr[i].move();
        if (viltArr[i] != undefined) {
            viltArr[i].mul();
            viltArr[i].die();
        }

    }
    count++
    if (count > 10) {
        var fier = new Fire()
        fier.destroy()
        count = 0
    }

    if(grassEaterArr.length == 0){
        for(var i = 0; i < 40; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var greater = new GrassEater(x, y, 1)
            grassEaterArr.push(greater) 
        }
    }
    if(predatorArr.length == 0){
        for(var i = 0; i < 40; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var pred = new Predator(x, y, 1)
            predatorArr.push(pred) 
        }
    }
    if(grassArr.length == 0){
        for(var i = 0; i < 400; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr) 
        }
    }
    if(viltArr.length == 0){
        for(var i = 0; i < 40; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var vl = new Vilt(x, y, 1)
            viltArr.push(vl) 
        }
    }
}
