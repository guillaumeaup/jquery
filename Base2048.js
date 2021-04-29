window.onload = function () {

    $('.lol').click(function(){
        window.location.href='http://www.guillaumeaupretre.com';
     })
    
    $('.Games').append('<table></table>')
    $('table').append('<tr></tr><tr></tr><tr></tr><tr></tr>')
    $('tr').append('<td></td><td></td><td></td><td></td>')
    $("td").hide().css("width", "110px").css("height", "110px").css("background-color", "#D3D3D3").css("color", "black").css("font-size", "2.5em")
    $('p:eq(1)').hide()
    $('.reset').hide()
    $('.newGame').css("font-size", "25px")
    $('.pregame').hide()
    
    $('.newGame').click( function ()    {
        
        $('.pregame').show().css("border", "15px solid #778899")
        $('td').show()
        $('p:eq(0)').hide()
        $('p:eq(1)').show()
        $('.reset').show().css("font-size", "19px").css("width", "100px").css("height", "35px")
        $('.newGame').hide()
        $('#history').hide()
        $('.reset').click( function ()    {
            location.replace("http:///www.guillaumeaupretre.com/jquery");
        })
    })

//Set ramdom values to the grid
    var arrayInitial = [0,0,0,0,0,0,0,0,0,2,0,2,2,4,0,4]
    var tab = []
    for (var p = 0; p<16 ; p++)   {
        var randomItem = arrayInitial[Math.floor(Math.random()*arrayInitial.length)];
        tab[p] = randomItem
    }
    for (let a = 0; a<=15; a++) {
        $('td:eq('+[a]+')').text(tab[a])
    }    
    
// Start of combine cases functions ...
    function combineUporDown()   {
        for (var o = 0; o <9; o++)  { 
            for (var i = 0 ; i < 16; i++)    {
                if (tab[i] == tab[i + 4])   {
                    tab [i] *=2;
                    tab [i + 4] = 0
                }
            }
        }
    }
    function combineLeftOrRight()   {
        for (var o = 0; o <9; o++)  { 
            for (var i = 0 ; i < 4; i++)    {
                if (tab[i] == tab[i + 1])    {
                    tab[i] *= 2;
                    tab[i + 1] = 0
                }
            }
            for (var i = 4 ; i < 8; i++)    {
                if (tab[i] == tab[i + 1])    {
                    tab[i] *= 2;
                    tab[i + 1] = 0
                }
            }
            for (var i = 8 ; i < 12; i++)    {
                if (tab[i] == tab[i + 1])    {
                    tab[i] *= 2;
                    tab[i + 1] = 0
                }
            }
            for (var i = 12 ; i <= 15; i++)    {
                if (tab[i] == tab[i + 1])    {
                    tab[i] *= 2;
                    tab[i + 1] = 0
                }
            }
        }
    }
// End of combine cases functions ...

// Start of move zeros functions ...
    function moveZeroRight () {
        for (let a = 0; a <= 4; a++)    { 
            for (let i = 3; i >0; i--) {
                if (tab[i] == 0 && tab[i - 1] != 0 ) {
                    tab[i] = tab[i - 1]
                    tab[i - 1] = 0
                }
            }
            for (let i = 7; i >=5; i--) {
                if (tab[i] == 0 && tab[i - 1] != 0 ) {
                    tab[i] = tab[i - 1]
                    tab[i - 1] = 0
                }
            }
            for (let i = 11; i >=9; i--) {
                if (tab[i] == 0 && tab[i - 1] != 0 ) {
                    tab[i] = tab[i - 1]
                    tab[i - 1] = 0
                }
            }
            for (let i = 15; i >=13; i--) {
                if (tab[i] == 0 && tab[i - 1] != 0 ) {
                    tab[i] = tab[i - 1]
                    tab[i - 1] = 0
                }
            }
            for (var i = 0; i<=15; i++ )    {
                $('td:eq('+[i]+')').text(tab[i])
            }
        }
    }
    function moveZeroLeft () {
        for (let a = 0; a <= 4; a++)    { 
            for (let i = 3; i >=1; i--) {
                if (tab[i] != 0 && tab[i - 1] == 0 ) {
                    tab[i - 1] = tab[i]
                    tab[i] = 0
                }
            }
            for (let i = 7; i >=5; i--) {
                if (tab[i] != 0 && tab[i - 1] == 0 ) {
                    tab[i - 1] = tab[i]
                    tab[i] = 0
                }
            }
            for (let i = 11; i >=9; i--) {
                if (tab[i] != 0 && tab[i - 1] == 0 ) {
                    tab[i - 1] = tab[i]
                    tab[i] = 0
                }
            }
            for (let i = 15; i >=13; i--) {
                if (tab[i] != 0 && tab[i - 1] == 0 ) {
                    tab[i - 1] = tab[i]
                    tab[i] = 0
                }
            }
            for (var i = 0; i<=15; i++ )    {
                $('td:eq('+[i]+')').text(tab[i])
            }
        }
    }
    function moveZeroUp () {
        for (let b = 0; b <4; b++)  {
            for (let i = 0; i <=11; i++) {
                if (tab[i] == 0 && tab[i + 4] != 0 ) {
                    tab[i] = tab[i + 4]
                    tab[i + 4] = 0
                }
            }
            for (var i = 0; i<=15; i++ )    {
                $('td:eq('+[i]+')').text(tab[i])
            }
        }
    }
    function moveZeroDown() {
        for (let b = 0; b <4; b++)  {
            for (let i = 15; i >=4; i--) {
                if (tab[i] == 0 && tab[i - 4] != 0 ) {
                    tab[i] = tab[i - 4]
                    tab[i - 4] = 0
                }
            }
            for (var i = 0; i<=15; i++ )    {
                $('td:eq('+[i]+')').text(tab[i])
            }
        }
    }
// End of move zeros functions ...

//When a player hits 2048
    function won () { 
        for (let i = 0; i <16; i++) {
            if (tab[i] === 2048) { 
                $('body').hide()
                alert('You won the game !!!!!')
                $('.pregame').append('<span>$("span").text()</span>')
                location.replace("http:///www.guillaumeaupretre.com/jquery");
            }
        }
    }

// When a select key will be press
    $("body").keydown(function(e) {
        nbOfClick()
        gameOver ()
        won()



    // Adds a 2 or 4 evrytime a key is pressed
        function addOne ()  {
            let random = Math.random(1)
            var randomCase = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
            let randomValueBetweenTwoOrFour = random < 0.5? 2 : 4;
    
            if ($('td:eq('+[randomCase]+')').text() == 0)   {
                $('td:eq('+[randomCase]+')').text(randomValueBetweenTwoOrFour)
                tab[randomCase] = $('td:eq('+[randomCase]+')').text()
            }   
            else    {
                addOne()
            }
        }

    // When press key up
        if(e.keyCode == 38) { 
            for (let up = 0; up <=4; up++) {
                moveZeroUp()
                combineUporDown()
            }

            addOne()
            switchColorWhite()
        }

    // When press key left
        if(e.keyCode == 37) { 
            for (let left = 0; left <=4; left++) {
                moveZeroLeft()
                combineLeftOrRight()
            }
            addOne()
            switchColorWhite()
        }

    // When press key down        
        if(e.keyCode == 40) { 
            for (let down = 0; down <=4; down++) {
                moveZeroDown()
                combineUporDown()
            }
            addOne()
            switchColorWhite()
        }

    // When press key right        
        if(e.keyCode == 39) { 
            for (let right = 0; right <=4; right++) {
                moveZeroRight()
                combineLeftOrRight()
            }
            addOne()
            switchColorWhite()
        }

    // Give opacity to zeros
        function getWHite() {   
            for (var v = 0; v < 16; v++)    {
                if (($('td:eq('+[v]+')').text()) == 0)     {
                    $('td:eq('+[v]+')').animate({
                        opacity: 0,
                    }, 50)    
                }
            }
        }

    // Take out opacity to zeros        
        function getColor() {   
            for (var v = 0; v < 16; v++)    {
                if (($('td:eq('+[v]+')').text()) != 0)     {
                    $('td:eq('+[v]+')').animate({
                        opacity: 1,
                    },50)    
                }
            }
        }

        function switchColorWhite(){
            getColor()
            getWHite()
        }

    // Count the number of clicks
        function nbOfClick ()   {
            m = 1;
            $("body").keydown(function(){
                if(e.keyCode == 37) {
                    $("span").text(m += 1);
                }   if(e.keyCode == 38) {
                    $("span").text(m += 1);
                }   if(e.keyCode == 39) {
                    $("span").text(m += 1);
                }   if(e.keyCode == 40) {
                    $("span").text(m += 1);
                }
            })
        }
    }) // End of keydown

// makes all the zeros invisible at the page launch
    for (var v = 0; v < 16; v++)    {
        if (($('td:eq('+[v]+')').text()) == 0)     {
            $('td:eq('+[v]+')').animate({
                opacity: 0,
            }, 50)    
        }
    }

// Game is over if no slide possible
    function gameOver ()  { 
        if ((tab[0] != tab[1]) && (tab[1] != tab[2]) && (tab[2] != tab[3]) 
            && (tab[0] != 0) && (tab[1] != 0) && (tab[2] != 0) && (tab[3] != 0)
            && (tab[4] != tab[5]) && (tab[5] != tab[6]) && (tab[6] != tab[7])
            && (tab[4] != 0) && (tab[5] != 0) && (tab[6] != 0) && (tab[7] != 0)
            && (tab[8] != tab[9]) && (tab[9] != tab[10]) && (tab[10] != tab[11])
            && (tab[8] != 0) && (tab[9] != 0) && (tab[10] != 0) && (tab[11] != 0)
            && (tab[12] != tab[13]) && (tab[13] != tab[14]) && (tab[14] != tab[15])
            && (tab[12] != 0) && (tab[13] != 0) && (tab[14] != 0) && (tab[15] != 0)
            && (tab[0] != tab[4]) && (tab[4] != tab[8]) && (tab[8] != tab[12])
            && (tab[1] != tab[5]) && (tab[5] != tab[9]) && (tab[9] != tab[13])
            && (tab[2] != tab[6]) && (tab[6] != tab[10]) && (tab[10] != tab[14])
            && (tab[3] != tab[7]) && (tab[7] != tab[11]) && (tab[11] != tab[15])  )  {
                alert("Game Over !")
                location.replace("http:///www.guillaumeaupretre.com/jquery");
        }
    }
}