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
