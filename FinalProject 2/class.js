class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.energy = 5;
        this.directions = [];
    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 10) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var newGrassEater = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrassEater);
            this.energy = 5;
        }
    }
    eat() {
        var food = random(this.chooseCell(1));

        if (food) {
            matrix[this.y][this.x] = 0;
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2
        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        if (empty) {
            matrix[this.y][this.x] = 0;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}
class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.energy = 5;
        this.directions = [];
    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 10) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newPredator = new Predator(newX, newY, 3);
            predatorArr.push(newPredator);
            this.energy = 5;
        }
    }
    eat() {
        var food = random(this.chooseCell(2));

        if (food) {
            matrix[this.y][this.x] = 0;
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2
        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        if (empty) {
            matrix[this.y][this.x] = 0;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in predatorArr) {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}
class Vilt {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index
        this.energy = 10;
        this.directions = [];
    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char1, char2) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 15) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var newVilt = new Vilt(newX, newY, 4);
            viltArr.push(newVilt);
            this.energy = 10;
        }
    }
    eat() {
        var food = random(this.chooseCell(1));

        if (food) {
            matrix[this.y][this.x] = 0;
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 3
        }
    }
    move() {
        var empty = random(this.chooseCell(1, 0));
        if (empty) {
            matrix[this.y][this.x] = 0;
            var newX = empty[0];
            var newY = empty[1];
            if (matrix[newY][newX] == 0) {
                matrix[newY][newX] = 4;
                this.x = newX;
                this.y = newY;
                this.energy--;
            }
            else {
                for (var i in viltArr) {
                    if (viltArr[i].x == this.x && viltArr[i].y == this.y) {
                        viltArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr[i].energy--;
                        break;
                    }
                }
            }

        }
        this.energy--;
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in viltArr) {
                if (viltArr[i].x == this.x && viltArr[i].y == this.y) {
                    viltArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}
class Fire {
    destroy(){
        var qanak =0;
        for (var y = 0; y < matrix.length; ++y) {
            for (var x = 0; x < matrix[y].length; ++x) {
               if(matrix[y][x] == 1){
                   qanak ++
               }
               if(qanak == 5){
                 var sharq = floor(random(1, 22));   
                 for (var d = 0; d < matrix[sharq].length; d++) {
                     if(matrix[sharq][d] == 1){
                        for (var i in grassArr) {
                            if (d == grassArr[i].x && sharq == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                     }
                     else if(matrix[sharq][d] == 2){
                        for (var i in grassEaterArr) {
                            if (d == grassEaterArr[i].x && sharq == grassEaterArr[i].y) {
                                grassEaterArr.splice(i, 1);
                                break;
                            }
                        }
                     }
                     else if(matrix[sharq][d] == 3){
                        for (var i in predatorArr) {
                            if (d == predatorArr[i].x && sharq == predatorArr[i].y) {
                                predatorArr.splice(i, 1);
                                break;
                            }
                        }
                     }
                     else  if(matrix[sharq][d] == 4){
                        for (var i in viltArr) {
                            if (d == viltArr[i].x && sharq == viltArr[i].y) {
                                viltArr.splice(i, 1);
                                break;
                            }
                        }
                     }
                     matrix[sharq][d] = 0
                }               
               }
               
            }
        }
       

    }
}

