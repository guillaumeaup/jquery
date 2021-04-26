window.onload = function () {


    $('p:first').text('You may now play !').css("fontSize", "50px").css("text-align", "center")
    // var table = $('<table class="table"> </table>');
    // $("body").append(table); 
    // var tr = $('<tr></tr><tr></tr>');
    // $(".table").append(tr);
    // let r = Math.random(1)
    // let x = Math.random(100)
    // let b = r < 0.5? 0 : 4;
    // let y = x > 50? 2 : 0;
    // var td = $('<td>4</td><td>0</td><td>2</td><td>2</td>');
    // $("tr").append(td);
    // $("td").css("width", "50px").css("height", "50px").css("background-color", "gray")



            
    // var arr=[];
    // $("td").each(function(){
    //     arr.push($(this).text());


    let r = Math.random(1)
    let b = r < 0.5? 2 : 4;
    var row0 = [0,0,0,0]
    var row1 = [4,2,2,2]
    var row2 = [4,2,2,2]
    var row3 = [2,2,2,2]

    var col0 = [row0[0], row1[0], row2[0], row3[0]]
    var col1 = [row0[1], row1[1], row2[1], row3[1]]
    var col2 = [row0[2], row1[2], row2[2], row3[2]]
    var col3 = [row0[3], row1[3], row2[3], row3[3]]

    function combine (a) {
        for (let i = 3; i >= 0; i--) {
            if (a[i] == a[i +1]) {
                a[i] = (a[i]*2)
                a[i + 1] = 0;
            }
        }
    }

    function moveZeroToTheLeftOrUp
     (arr) {
        for (let i = 2; i >= 0; i--) {
            if (arr[i] == 0 && (arr[i - 1] != 0 || arr[i + 1] != 0)) {
                arr[i] = arr[i + 1];
                arr[i +1] = 0
            }
        }
    }

    function doIt(a)    {
        $('body').append('<br><br>' +a)
        combine(a)
        combine(a)
        moveZeroToTheLeftOrUp (a)
        moveZeroToTheLeftOrUp (a)
        $('body').append('<br>'+ a)
    }


    $("body").keydown(function(e) {

        if(e.keyCode == 38) { // up

            doIt(col0)
            doIt(col1)
            doIt(col2)
            doIt(col3)
        }
    })


        $("body").keydown(function(e) {

            if(e.keyCode == 37) { // left

                doIt(row0)
                doIt(row1)
                doIt(row2)
                doIt(row3)












                
                // var case0 = ($('td:eq(0)').text())
                // var case1 = ($('td:eq(1)').text())
                // var case2 = ($('td:eq(2)').text())
                // var case3 = ($('td:eq(3)').text())
                // var case4 = ($('td:eq(0)').text())
                // var case5 = ($('td:eq(1)').text())
                // var case6 = ($('td:eq(2)').text())
                // var case7 = ($('td:eq(3)').text())
                // var case8 = ($('td:eq(0)').text())
                // var case9 = ($('td:eq(1)').text())
                // var case10 = ($('td:eq(2)').text())
                // var case11 = ($('td:eq(3)').text())
                // var case12 = ($('td:eq(0)').text())
                // var case13 = ($('td:eq(1)').text())
                // var case14 = ($('td:eq(2)').text())
                // var case15 = ($('td:eq(3)').text())
                

            //     if ( ($('td:eq(3)').text()) ==  ($('td:eq(2)').text()))   {
            //         combine(3, 2)
            //    }

                //row 4
                // if( case15 == case14 )   {
                //     combine(15, 14)
                // }
                // if( case14 == case13 )   {
                //    combine(14, 13)
                // }
                // if( case13 == case12 )   { 
                //     combine(13, 12)
                // }
                // // row 3
                // if( case11 == case10 )   { 
                //     combine(11, 10)
                // }
                // if( case10 == case9 )   {
                //     combine(10, 9)
                // }
                // if( case9 == case8 )   {
                //     combine(9, 8)
                // }
                // //row 2
                // if( case7 == case6 )   { 
                //     combine(7, 6)
                // }
                // if( case6 == case5 )   { 
                //     combine(6, 5)
                // }
                // if( case5 == case4 )   { 
                //     combine(5, 4)
                // }
                //row1


                

            //     if( case3 == case2 )   { 
            //         combine(3, 2)
                

            //         if( case2 == case1 )   { 
            //             combine(2, 1)
                    
                    
            //         if( case1 == case0 )   { 
            //             combine(1, 0)
            //         } 
            //     }
            // }
           
                    // if( case2 == case1 && case1 == case0 )   { 
                    //     $('td:eq(0)').text(($('td:eq(1)').text())*2);
                    //     $('td:eq(2)').text(0)

                    // } 

                
                // if (case0, case1, case2 == case3)   {
                //     $('td:eq(0)').text(($('td:eq(1)').text())*4);
                //     $('td:eq(1)').text(0)
                //     $('td:eq(2)').text(0)
                //     $('td:eq(3)').text(0)

                // }

                // if ((case0, case1 == case2) || (case1, case2 == case3))  {
                //     if (case0 == case1 && case1 == case2)  {
                //         $('td:eq(0)').text(($('td:eq(1)').text())*2);
                //         $('td:eq(2)').text(0);
                //     }
                //     if (case1 == case2 && case2== case3)  {
                //         $('td:eq(1)').text(($('td:eq(2)').text())*2);
                //         $('td:eq(3)').text(0);
                //     }
                // }


                // if (case2 == 0)  {
                //     moveLeft(2, 3)
                // }

                // if (case1 == 0) {
                //     moveleft2Cases(1, 2, 3)
                // }

                // if (case0 ==0)  {
                //     moveLeft3Cases (0, 1, 2, 3)                
                // }

                // function moveLeft3Cases (a, b, c, d)    {
                //     $('td:eq('+a+')').text($('td:eq('+b+')').text());
                //     $('td:eq('+b+')').text($('td:eq('+c+')').text());
                //     $('td:eq('+c+')').text($('td:eq('+d+')').text());
                //     $('td:eq('+d+')').text(0);
                // }



                // function moveleft2Cases (a, b, c)    {
                //     $('td:eq('+a+')').text($('td:eq('+b+')').text());
                //     $('td:eq('+b+')').text($('td:eq('+c+')').text());
                //     $('td:eq('+c+')').text(0);
                // }

                // function moveLeft(a, b) {
                //     $('td:eq('+a+')').text($('td:eq('+b+')').text());
                //     $('td:eq('+b+')').text(0)
                // }



 


                // function combine (a, b) {
                //     $('td:eq('+b+')').text(($('td:eq('+a+')').text())*2);
                //     $('td:eq('+a+')').text(0)




                // }   




            }
        })
    // })
}
