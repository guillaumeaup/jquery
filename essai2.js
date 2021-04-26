window.onload = function () {

    let r = Math.random(1)
    let b = r < 0.5? 2 : 4;
    let c = r < 0.5? 0 : 2;


    
    var row0 = [2,2,3,4]
    var row1 = [1,2,3,4]
    var row2 = [1,2,3,4]
    var row3 = [1,2,3,4]





    var col0 = [row0[0], row1[0], row2[0], row3[0]]
    var col1 = [row0[1], row1[1], row2[1], row3[1]]
    var col2 = [row0[2], row1[2], row2[2], row3[2]]
    var col3 = [row0[3], row1[3], row2[3], row3[3]]



    $('body').append('<table></table>')
    $('table').append('<tr></tr><tr></tr><tr></tr><tr></tr>')
    $('tr').append('<td></td><td></td><td></td><td></td>')
    $("td").css("width", "50px").css("height", "50px").css("background-color", "gray")

    //row0
    $('td:eq(0)').text(row0[0])
    $('td:eq(1)').text(row0[1])
    $('td:eq(2)').text(row0[2])
    $('td:eq(3)').text(row0[3])
    //row1
    $('td:eq(4)').text(row1[0])
    $('td:eq(5)').text(row1[1])
    $('td:eq(6)').text(row1[2])
    $('td:eq(7)').text(row1[3])
    //row2
    $('td:eq(8)').text(row2[0])
    $('td:eq(9)').text(row2[1])
    $('td:eq(10)').text(row2[2])
    $('td:eq(11)').text(row2[3])
    //row3
    $('td:eq(12)').text(row3[0])
    $('td:eq(13)').text(row3[1])
    $('td:eq(14)').text(row3[2])
    $('td:eq(15)').text(row3[3])




    function combineLeftUp (a) {
        for (let i = 3; i >= 0; i--) {
            if (a[i] == a[i +1]) {
                a[i] = (a[i]*2)
                a[i + 1] = 0;
            }
        }
    }

    function combineRightDown (a) {
        for (let i = 3; i >= 0; i--) {
            if (a[i] == a[i - 1]) {
                a[i] = (a[i]*2) 
                a[i - 1] = 0
            }
        }
    }

    function moveZeroToTheLeftOrUp (arr) { 
        for (let i = 2; i >= 0; i--) {
            if (arr[i] == 0 && (arr[i - 1] != 0 || arr[i + 1] != 0)) {
                arr[i] = arr[i + 1];
                arr[i +1] = 0
            }
        }
    }

    function moveZeroToTheRightOrDown (arr) {
        for (let i = 1; i < 4; i++) {
            if (arr[i] == 0 && arr[i - 1] != 0 ) {
                arr[i] = arr[i - 1]
                arr[i - 1] = 0
            } 
        }
    }


    function doItFoForRightDown(a)    { //When I clik on Right or Down touch
        combineRightDown(a)
        combineRightDown(a)
        moveZeroToTheRightOrDown (a)
        moveZeroToTheRightOrDown (a)

        for (var a = 0; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row0[[a]])
        }
        for (var a = 4; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row1[[a]-4])
        }
        for (var a = 8; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row2[[a]-8])
        }
        for (var a = 12; a <=16; a++)    {
            $('td:eq('+[a]+')').text(row3[[a]-12])
        }
    }

    function doItFoForLeftUp(a)    { //When I clik on Left or Up touch
        combineLeftUp(a)
        combineLeftUp(a)
        moveZeroToTheLeftOrUp (a)
        moveZeroToTheLeftOrUp (a)

        for (var a = 0; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row0[[a]])
        }
        for (var a = 4; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row1[[a]-4])
        }
        for (var a = 8; a <=15; a++)    {
            $('td:eq('+[a]+')').text(row2[[a]-8])
        }
        for (var a = 12; a <=16; a++)    {
            $('td:eq('+[a]+')').text(row3[[a]-12])
        }
    }


    // $("body").keydown(function(e) {
    //     if(e.keyCode == 38) { // up
    //         doItFoForLeftUp(col0)
    //         doItFoForLeftUp(col1)
    //         doItFoForLeftUp(col2)
    //         doItFoForLeftUp(col3)
    //     }
    // })

    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // left
            doItFoForLeftUp(row0)
            doItFoForLeftUp(row1)
            doItFoForLeftUp(row2)
            doItFoForLeftUp(row3)
         }
    })

    // $("body").keydown(function(e) {
    //     if(e.keyCode == 40) { // down
    //         doItFoForRightDown(col0)
    //         doItFoForRightDown(col1)
    //         doItFoForRightDown(col2)
    //         doItFoForRightDown(col3)
    //     }
    // })

    $("body").keydown(function(e) {
        if(e.keyCode == 39) { // right
            doItFoForRightDown(row0)
            doItFoForRightDown(row1)
            doItFoForRightDown(row2)
            doItFoForRightDown(row3)
        }
    })


}
