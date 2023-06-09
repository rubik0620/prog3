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
