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
