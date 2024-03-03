function auxiliary(number){
    return number;
    //return Math.floor(number/2);
}

function play(){

    
    document.getElementById("frame0").remove();
    document.getElementById("frame0-over").remove();

    /*
    document.getElementById("frame1").style.display = "flex";

    document.getElementById("song").play();

    setTimeout(function() {
        document.getElementById("frame1").remove();
        document.getElementById("frame2").style.display = "flex";
    }, auxiliary(2900));
    
    setTimeout(function() {
        document.getElementById("frame2").remove();
        document.getElementById("frame3").style.display = "block";
    }, auxiliary(5800));
    
    setTimeout(function() {
        document.getElementById("frame3").remove();
        document.getElementById("frame4").style.display = "block";
    }, auxiliary(8700));
    
    setTimeout(function() {
        document.getElementById("frame4").remove();
        document.getElementById("frame5").style.display = "block";
    }, auxiliary(11600));
    
    setTimeout(function() {
        document.getElementById("frame5").remove();
        document.getElementById("frame6").style.display = "flex";
    }, auxiliary(14500));
    
    setTimeout(function() {
        // document.getElementById("frame6-skull").remove();
        document.getElementById("frame6-text").style.display = "block"; //I'M
    }, auxiliary(14700));
    
    setTimeout(function() {
        document.getElementById("frame6-2").style.visibility = "visible"; // NOT
    }, auxiliary(15200));
    
    setTimeout(function() {
        document.getElementById("frame6-3").style.visibility = "visible"; //ABOVE
    }, auxiliary(15600));
    
    setTimeout(function() {
        document.getElementById("frame6-4").style.visibility = "visible"; //A
    }, auxiliary(15800));
    
    setTimeout(function() {
        document.getElementById("frame6").remove();
        document.getElementById("frame7").style.display = "flex"; // LOVE
    }, auxiliary(16700));
    
    setTimeout(function() {
        document.getElementById("frame7").remove();
        document.getElementById("frame8").style.display = "flex"; // TO
    }, auxiliary(17200));
    
    setTimeout(function() {
        document.getElementById("frame8").remove();
        document.getElementById("frame9").style.display = "flex"; // CASH
    }, auxiliary(17700));
    
    setTimeout(function() {
        document.getElementById("frame9").remove();
        document.getElementById("frame10").style.display = "flex";
        document.getElementById("frame10-over-frame").style.display = "block";
        document.getElementById("heart1").style.display = "block";
    }, auxiliary(18300));
    
    setTimeout(function() {
        document.getElementById("heart2").style.display = "block";
    }, auxiliary(18332));
    
    setTimeout(function() {
        document.getElementById("heart3").style.display = "block";
    }, auxiliary(18800));
    
    setTimeout(function() {
        document.getElementById("heart4").style.display = "block";
    }, auxiliary(19200));
    setTimeout(function() {
        document.getElementById("heart5").style.display = "block";
    }, auxiliary(19800));
    setTimeout(function() {
        document.getElementById("heart6").style.display = "block";
    }, auxiliary(20400));
    
    setTimeout(function() {
        var hearts = document.getElementsByClassName("frame10-heart")
        var heartsArray = Array.from(hearts);
        heartsArray.forEach(function(element) {
          element.remove();
        });
        document.getElementById("frame10").remove();
        document.getElementById("frame10-over-frame").remove();
    
        document.getElementById("frame11").style.display = "flex";
    }, auxiliary(20800));
    
    setTimeout(function() {
        document.getElementById("frame11-text").remove();
        document.getElementById("frame11-text2").style.display = "block";
    }, auxiliary(21300));
    
    setTimeout(function() {
        document.getElementById("frame11").remove();
        document.getElementById("frame12").style.display = "flex";
        document.getElementById("frame12-over-frame").style.display = "flex";
        document.getElementById("frame12-hearts").style.display = "block";
    }, auxiliary(21800));
    
    setTimeout(function() {
        document.getElementById("frame12-hearts").remove();
        document.getElementById("frame12").remove();
        document.getElementById("frame12-over-frame").remove();
    
        document.getElementById("frame13").style.display = "flex";
        document.getElementById("frame13-over-frame").style.display = "flex";
    }, auxiliary(23000));
    
    
    setTimeout(function() {
        document.getElementById("frame13-over-frame").remove();
        document.getElementById("frame13-over-frame2").style.display = "flex";
    }, auxiliary(23500));
    
    setTimeout(function() {
        document.getElementById("frame13").remove();
        document.getElementById("frame13-over-frame2").remove();
        document.getElementById("frame14").style.display = "flex"; // THOSE
    }, auxiliary(24600));//24000
    
    setTimeout(function() {
        document.getElementById("frame14-text2").style.visibility = "visible"; // FLASHING
    }, auxiliary(25400));
    
    setTimeout(function() {
        document.getElementById("frame14-text3").style.visibility = "visible"; //LIGHTS
    }, auxiliary(27600));
    
    setTimeout(function() {
        document.getElementById("frame14").remove();
        document.getElementById("frame15").style.display = "block"; // ANOTHER
    }, auxiliary(28600)); //correct
    
    setTimeout(function() {
        document.getElementById("frame15-B").style.visibility = "visible"; // ONE
    }, auxiliary(30000));
    
    setTimeout(function() {
        document.getElementById("frame15-C").style.visibility = "visible"; // OF
    }, auxiliary(30500));
    
    setTimeout(function() {
        document.getElementById("frame15-D").style.visibility = "visible"; // THOSE
    }, auxiliary(31000));
    
    setTimeout(function() {
        document.getElementById("frame15").remove();
        document.getElementById("frame16").style.display = "block"; // RUTH
        document.getElementById("frame16-lineA").style.display = "block";
        document.getElementById("frame16-lineB").style.display = "block";
        document.getElementById("frame16-lineC").style.display = "block";
        document.getElementById("frame16-over-frame").style.display = "block";
    }, auxiliary(31600)); //correct
    
    setTimeout(function() {
        document.getElementById("frame16-text1B").style.visibility = "visible"; //LESS
    }, auxiliary(32900));
    
    setTimeout(function() {
        document.getElementById("frame16-text2").style.visibility = "visible"; // NIGHTS
    }, auxiliary(34200));
    
    setTimeout(function() {
        document.getElementById("frame16").remove();
        document.getElementById("frame17").style.display = "block";
        document.getElementById("yeah1").style.display = "block";
    }, auxiliary(35800));
    
    setTimeout(function() {
        document.getElementById("yeah1").remove();
        document.getElementById("yeah2").style.display = "block";
    }, auxiliary(36500));
    
    setTimeout(function() {
        document.getElementById("yeah2").remove();
        document.getElementById("yeah3").style.display = "block";
        document.getElementById("frame17").style.backgroundImage = 'linear-gradient(180deg, #FD2FCC, #BF8BBE)';
    }, auxiliary(36900)); //36800

    setTimeout(function() {
        document.getElementById("yeah3").remove();
        document.getElementById("frame17").remove();
        document.getElementById("frame16-over-frame").remove();
        document.getElementById("frame18").style.display = "block";
        document.getElementById("yeah4").style.display = "block";
    }, auxiliary(37200));
    
    setTimeout(function() {
        document.getElementById("yeah4").remove();
    }, auxiliary(38000));
    
    setTimeout(function() {
        document.getElementById("frame18").remove();
        document.getElementById("frame19").style.display = "flex"; // I SHOUDA
    }, auxiliary(40200));
    
    setTimeout(function() {
        document.getElementById("frame19").remove();
        document.getElementById("frame20").style.display = "flex"; // GUESSED
    }, auxiliary(41000)); 
    
    setTimeout(function() {
    
        document.getElementById("frame20").style.backgroundColor = "black"; // THAT
        document.getElementById("frame20").style.backgroundImage = "none";
        document.getElementById("frame20").style.color = "#C10205";
        document.getElementById("frame20-text").style.visibility = "visible";
    }, auxiliary(41400)); 
    
    setTimeout(function() {
        document.getElementById("frame20").remove();
        document.getElementById("frame20A").style.display = "flex"; // THIS
    }, auxiliary(42200)); 
    
    setTimeout(function() {
        document.getElementById("frame20A").remove();
        document.getElementById("frame21").style.display = "flex"; // WOULD
    }, auxiliary(42400)); 
    
    setTimeout(function() {
        document.getElementById("frame21").remove();
        document.getElementById("frame22").style.display = "flex"; // HAPPEN HAPPEN HAPPEN
    }, auxiliary(43000)); 
    
    setTimeout(function() {
        document.getElementById("frame22").remove();
        document.getElementById("frame23").style.display = "flex";
        document.getElementById("frame23-text0").style.display = "block";
        document.getElementById("frame23-text0A").style.display = "block"; // I
    }, auxiliary(46800)); //46000
    
    setTimeout(function() {
        document.getElementById("frame23-text1").style.display = "block";
        document.getElementById("frame23-text1A").style.display = "block"; // SHOULDA
    }, auxiliary(47200)); //46400
    
    setTimeout(function() {
        document.getElementById("frame23-text2").style.display = "block";
        document.getElementById("frame23-text2A").style.display = "block"; // KNOWN
    }, auxiliary(47600)); //46800
    
    setTimeout(function() {
        document.getElementById("frame23-text3").style.display = "block";
        document.getElementById("frame23-text3A").style.display = "block"; // IT
    }, auxiliary(48000)); //47200
    
    setTimeout(function() {
        document.getElementById("frame23").remove();
        document.getElementById("frame23-over").remove();
        document.getElementById("frame24").style.display = "flex";
        document.getElementById("frame24-text").innerHTML = "WHEN" // WHEN
    }, auxiliary(48200));
    
    setTimeout(function() {
        document.getElementById("frame24-text").innerHTML = "I" // I
        document.getElementById("frame24-text").style.fontSize = "75px";
    }, auxiliary(48700));
    
    setTimeout(function() {
        document.getElementById("frame24-text").innerHTML = "LOOKED" // LOOKED
        document.getElementById("frame24-text").style.fontSize = "90px";
    }, auxiliary(49000)); // correct
    
    setTimeout(function() {
        document.getElementById("frame24-text").innerHTML = "IN" // IN
        document.getElementById("frame24-text").style.fontSize = "115px";
    }, auxiliary(49600));
    
    setTimeout(function() {
        document.getElementById("frame24-text").innerHTML = "YOUR" // YOUR
        document.getElementById("frame24-text").style.fontSize = "140px";
    }, auxiliary(50000));
    
    setTimeout(function() {
        document.getElementById("frame24").remove();
        document.getElementById("frame25").style.display = "flex"; // RED
    }, auxiliary(51000)); 
    
    setTimeout(function() {
        document.getElementById("frame25-text").innerHTML = "HOT"; // HOT
    }, auxiliary(52100));
    
    setTimeout(function() {
        document.getElementById("frame25-text").innerHTML = "EYES"; // EYES
    }, auxiliary(53400)); 
    
    setTimeout(function() {
        document.getElementById("frame25").remove();
        document.getElementById("frame26").style.display = "flex";
        document.getElementById("frame26-over").style.display = "block";
        document.getElementById("frame26-text0").style.display = "block"; // spewing
    }, auxiliary(55000));
    
    setTimeout(function() {
        document.getElementById("frame26-text1").style.display = "block"; // all
    }, auxiliary(55500));
    
    setTimeout(function() {
        document.getElementById("frame261B").style.visibility = "visible"; // your
    }, auxiliary(56000));
    
    setTimeout(function() {
        document.getElementById("frame26").remove();
        document.getElementById("frame26-over").remove();
        document.getElementById("frame27").style.display = "block"; // RED
    }, auxiliary(57500));//57800
    
    setTimeout(function() {
        document.getElementById("frame27").remove();
        document.getElementById("frame28").style.display = "block"; // HOT
    }, auxiliary(58600));
    
    setTimeout(function() {
        document.getElementById("frame28").remove();
        document.getElementById("frame29").style.display = "block"; // LIES
    }, auxiliary(59400));
    
    setTimeout(function() {
        document.getElementById("frame29").remove();
        document.getElementById("frame30").style.display = "block";
    }, auxiliary(61400));
    
    setTimeout(function() {
        document.getElementById("frame30-text").style.fontSize = "100px";
        document.getElementById("frame30-text").style.color = "#F98C8E";
    }, auxiliary(61600)); 
    
    setTimeout(function() {
        document.getElementById("frame30-text").style.fontSize = "150px";
    }, auxiliary(62000)); 
    
    
    setTimeout(function() {
        document.getElementById("frame30-text").style.fontSize = "200px";
        document.getElementById("frame30").style.backgroundImage = 'linear-gradient(180deg, #0E0817, #180D29)';
    }, auxiliary(62400)); 
    
    setTimeout(function() {
        document.getElementById("frame30").remove();
        document.getElementById("frame31").style.display = "flex";
    },auxiliary(63600)); 
    
    setTimeout(function() {
        document.getElementById("frame31-text3").style.display = "block";
    },auxiliary(64600)); 
    
    setTimeout(function() {
        document.getElementById("frame31-text4").style.display = "block";
    },auxiliary(65600)); 
    
    setTimeout(function() {
        document.getElementById("frame31").remove();
        document.getElementById("frame32").style.display = "flex";
        document.getElementById("frame32-text").style.display = "block";
    },auxiliary(66400)); 
    
    setTimeout(function() {
        document.getElementById("frame32-over").style.display = "block";
    },auxiliary(66700));
    
    setTimeout(function() {
        document.getElementById("frame32-textB").style.visibility = "visible";
    },auxiliary(67000));
    
    setTimeout(function() {
        document.getElementById("frame32").remove();
        document.getElementById("frame33").style.display = "block";
    },auxiliary(68000));
    
    setTimeout(function() {
        document.getElementById("frame33").remove();
        document.getElementById("frame34").style.display = "block";
        document.getElementById("frame34-text").style.display = "block"
    },auxiliary(69200));
    
    setTimeout(function() {
        document.getElementById("frame34").remove();
        document.getElementById("frame35").style.display = "flex";
        document.getElementById("frame35-text").style.display = "block";
    },auxiliary(69400));
    
    setTimeout(function() {
        document.getElementById("frame35").remove();
        document.getElementById("frame32-over").remove();
        document.getElementById("frame36").style.display = "flex";
    },auxiliary(71600));
    
    setTimeout(function() {
        document.getElementById("frame36-text").innerHTML = "MYSELF";
        document.getElementById("frame36-text").style.fontSize = "130px";
    },auxiliary(72600));
    
    setTimeout(function() {
        document.getElementById("frame36").remove();
        document.getElementById("frame37").style.display = "flex";
    },auxiliary(75600));
    
    setTimeout(function() {
        document.getElementById("frame37").remove();
        document.getElementById("frame38").style.display = "block";
    },auxiliary(75960));
    
    setTimeout(function() {
        document.getElementById("frame38").innerHTML = '';
        document.getElementById("frame38-over").style.display = "block";
        document.getElementById("frame38B-text").style.display = "block";
    },auxiliary(76600));
    
    setTimeout(function() {
        document.getElementById("frame38").remove();
        document.getElementById("frame38-over").remove();
        document.getElementById("frame39").style.display = "flex";
        document.getElementById("frame39-over").style.display = "block";
    },auxiliary(77600));
    
    setTimeout(function() {
        document.getElementById("frame39").remove();
        document.getElementById("frame39-over").remove();
        document.getElementById("frame40").style.display = "flex";
        document.getElementById("frame40-over").style.display = "block";
    },auxiliary(79000));
    
    setTimeout(function() {
        document.getElementById("frame41-container").style.display = "flex";
        document.getElementById("frame41B-container").style.display = "flex";
        document.getElementById("frame41").style.display = "flex";
        document.getElementById("frame41-text").style.display = "block";
    },auxiliary(83000));
    
    setTimeout(function() {
        document.getElementById("frame40").remove();
        document.getElementById("frame40-over").remove();
        document.getElementById("frame42-container").style.display = "flex";
        document.getElementById("frame42").style.display = "flex";
        document.getElementById("frame41-text").style.fontSize = "120px";
    },auxiliary(83400));
    
    setTimeout(function() {
        document.getElementById("frame41-text").innerHTML = "TO";
        document.getElementById("frame41-text").style.fontSize = "135px";
    },auxiliary(83600));
    
    setTimeout(function() {
        document.getElementById("frame41-text").innerHTML = "THIS";
        document.getElementById("frame41-text").style.fontSize = "135px";
    },auxiliary(84000));
    
    setTimeout(function() {
        document.getElementById("frame43-container").style.display = "flex";
        document.getElementById("frame43").style.display = "block";
    },auxiliary(84200));
    
    setTimeout(function() {
        document.getElementById("frame41-container").remove();
        document.getElementById("frame41B-container").remove();
        document.getElementById("frame42-container").remove();
        document.getElementById("frame43-container").remove();
        document.getElementById("frame44-over").style.display = "block";
        document.getElementById("frame44").style.display = "block";
    },auxiliary(84600));
    
    setTimeout(function() {
        document.getElementById("frame44-over").remove();
        document.getElementById("frame44").remove();
        document.getElementById("frame45-over").style.display = "block";
        document.getElementById("frame45").style.display = "block";
    },auxiliary(85200));
    
    setTimeout(function() {
        document.getElementById("frame45-over").remove();
        document.getElementById("frame45").remove();
        document.getElementById("frame46").style.display = "block";
    },auxiliary(86000));
    
    setTimeout(function() {
        document.getElementById("frame46").remove();
        document.getElementById("frame47").style.display = "flex";
        document.getElementById("frame47-over").style.display = "flex";
        document.getElementById("frame47-text").style.display = "block";
    },auxiliary(86800));
    
    setTimeout(function() {
        document.getElementById("frame47").remove();
        document.getElementById("frame47-over").remove();
        document.getElementById("frame48").style.display = "flex";
        document.getElementById("frame48-over").style.display = "flex";
        document.getElementById("frame48-text").style.display = "block";
    },auxiliary(87600));
    
    setTimeout(function() {
        document.getElementById("frame48-textB").style.visibility = "visible";
    },auxiliary(88400));

    setTimeout(function() {
        document.getElementById("frame48").remove();
        document.getElementById("frame48-over").remove();
        document.getElementById("frame49").style.display = "block";
        document.getElementById("frame49-over").style.display = "flex";
    },auxiliary(89400));

    setTimeout(function() {
        document.getElementById("frame49").remove();
        document.getElementById("frame49-over").remove();
        document.getElementById("frame50").style.display = "block";
        document.getElementById("frame50-over").style.display = "flex";
    },auxiliary(90400));

    setTimeout(function() {
        document.getElementById("frame50").remove();
        document.getElementById("frame50-over").remove();
        document.getElementById("frame51").style.display = "block";
        document.getElementById("frame51-over").style.display = "flex";
    },auxiliary(91400));

    setTimeout(function() {
        document.getElementById("frame51").remove();
        document.getElementById("frame51-over").remove();
        document.getElementById("frame52").style.display = "block";
        document.getElementById("frame52-over").style.display = "flex";
    },auxiliary(92400));

    setTimeout(function() {
        document.getElementById("frame52").remove();
        document.getElementById("frame52-over").remove();
        document.getElementById("frame53").style.display = "block";
        document.getElementById("frame53-overA").style.display = "flex";
        document.getElementById("frame53-overB").style.display = "flex";
        document.getElementById("frame53-textA").style.display = "block";
        document.getElementById("frame53-textB").style.display = "block";
    },auxiliary(93100));

    setTimeout(function() {
        document.getElementById("frame53").remove();
        document.getElementById("frame53-overA").remove();
        document.getElementById("frame53-overB").remove();
        document.getElementById("frame54").style.display = "block";
        document.getElementById("frame54-over").style.display = "flex";
    },auxiliary(94800));

    setTimeout(function() {
        document.getElementById("frame54-text").innerHTML = "NIGHT";
    },auxiliary(95900));

    setTimeout(function() {
        document.getElementById("frame54-text").innerHTML = "I'M";
    },auxiliary(96400));

    setTimeout(function() {
        document.getElementById("frame54-text").innerHTML = "LIVING";
    },auxiliary(96800));

    setTimeout(function() {
        document.getElementById("frame54-text").innerHTML = "LIKE";
    },auxiliary(97800));

    setTimeout(function() {
        document.getElementById("frame54-over").remove();
        document.getElementById("frame54-overB").style.display = "flex";
    },auxiliary(98200));

    setTimeout(function() {
        document.getElementById("frame54").remove();
        document.getElementById("frame54-overB").remove();
        document.getElementById("frame55").style.display = "flex";
    },auxiliary(99400));

    setTimeout(function() {
        document.getElementById("frame55").remove();
        document.getElementById("frame56").style.display = "flex";
    },auxiliary(100200));


    setTimeout(function() {
        document.getElementById("frame56").remove();
        <document.getElementById("frame57").style.display = "flex";

        document.getElementById("frame57-overA").style.display = "block";
        document.getElementById("frame57-overB").style.display = "block";
        document.getElementById("frame57-overC").style.display = "block";
        document.getElementById("frame57-overD").style.display = "block";
        document.getElementById("frame57-overE").style.display = "block";
>
        document.getElementById("frame57E").style.display = "block";
    },auxiliary(102400));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").style.display = "block";
    },auxiliary(102600));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").style.display = "block";

    },auxiliary(102800));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(103000));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(103200));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(103400));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").classList.add("d-flex");
        document.getElementById("frame57D").style.display = "block";
    },auxiliary(103600));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").classList.add("d-flex");
        document.getElementById("frame57C").style.display = "block";
    },auxiliary(103800));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(104000));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(104200));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(104400));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").style.display = "block";
    },auxiliary(104600));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").style.display = "block";

    },auxiliary(104800));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(105000));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(105200));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(105400));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").classList.add("d-flex");
        document.getElementById("frame57D").style.display = "block";
    },auxiliary(105600));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").classList.add("d-flex");
        document.getElementById("frame57C").style.display = "block";
    },auxiliary(105800));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(106000));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(106200));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(106400));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(106600));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").classList.add("d-flex");
        document.getElementById("frame57D").style.display = "block";
    },auxiliary(106800));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").classList.add("d-flex");
        document.getElementById("frame57C").style.display = "block";
    },auxiliary(107000));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(107200));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(107400));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(107600));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").classList.add("d-flex");
        document.getElementById("frame57D").style.display = "block";
    },auxiliary(107800));

    setTimeout(function() {
        document.getElementById("frame57D").classList.remove("d-flex");
        document.getElementById("frame57D").style.display = "none";

        document.getElementById("frame57C").classList.add("d-flex");
        document.getElementById("frame57C").style.display = "block";
    },auxiliary(108000));

    setTimeout(function() {
        document.getElementById("frame57C").classList.remove("d-flex");
        document.getElementById("frame57C").style.display = "none";

        document.getElementById("frame57B").style.display = "block";
    },auxiliary(108200));

    setTimeout(function() {
        document.getElementById("frame57B").classList.remove("d-flex");
        document.getElementById("frame57B").style.display = "none";

        document.getElementById("frame57A").style.display = "block";
    },auxiliary(108400));

    setTimeout(function() {
        document.getElementById("frame57A").classList.remove("d-flex");
        document.getElementById("frame57A").style.display = "none";

        document.getElementById("frame57E").style.display = "block";
    },auxiliary(108600));

    setTimeout(function() {
        document.getElementById("frame57E").classList.remove("d-flex");
        document.getElementById("frame57E").style.display = "none";

        document.getElementById("frame57D").classList.add("d-flex");
        document.getElementById("frame57D").style.display = "block";
    },auxiliary(108800));
    */

    setTimeout(function() {
        // document.getElementById("frame57").remove();
        // document.getElementById("frame57-overA").remove();
        // document.getElementById("frame57-overB").remove();
        // document.getElementById("frame57-overC").remove();
        // document.getElementById("frame57-overD").remove();
        // document.getElementById("frame57-overE").remove();

        document.getElementById("frame58").style.display = "flex";
        document.getElementById("frame58-overA").style.display = "block";
        document.getElementById("frame58-text-block").style.display = "block";
        document.getElementById("frame58-overB").style.display = "block";
        document.getElementById("frame58-dots").style.display = "block";


    },auxiliary(0));

    setTimeout(function() {
        document.getElementById("frame58").remove();
        document.getElementById("frame58-overA").remove();
        document.getElementById("frame58-overB").remove();

        document.getElementById("frame59").style.display = "flex";
        document.getElementById("frame59-overA").style.display = "flex";
        document.getElementById("frame59-overB").style.display = "block";
        document.getElementById("frame59-dots").style.display = "block";
    },auxiliary(2000));

    setTimeout(function() {
        document.getElementById("frame59").remove();
        document.getElementById("frame59-overA").remove();
        document.getElementById("frame59-overB").remove();

        document.getElementById("frame60").style.display = "flex";
        document.getElementById("frame60-overA").style.display = "block";
        document.getElementById("frame60-text-block").style.display = "block";
        document.getElementById("frame60-overB").style.display = "block";
        document.getElementById("frame60-dots").style.display = "block";
    },auxiliary(3000));

    setTimeout(function() {
        document.getElementById("frame60").remove();
        document.getElementById("frame60-overA").remove();
        document.getElementById("frame60-overB").remove();

        document.getElementById("frame61").style.display = "flex";
        document.getElementById("frame61-overA").style.display = "block";
        document.getElementById("frame61-text-block").style.display = "block";
        document.getElementById("frame61-overB").style.display = "block";
        document.getElementById("frame61-dots").style.display = "block";
        document.getElementById("frame62").style.display = "flex";
    },auxiliary(4000));

    setTimeout(function() {
        document.getElementById("frame61").remove();
        document.getElementById("frame61-overB").remove();
    },auxiliary(5000));

    setTimeout(function() {
        document.getElementById("frame61-overA").remove();

        document.getElementById("frame62-over").style.display = "block";
    },auxiliary(8000));

    setTimeout(function() {
        document.getElementById("frame62").style.backgroundImage = 'linear-gradient(180deg, #010103, #1B0F30)';
    },auxiliary(10000));

    setTimeout(function() {
        document.getElementById("frame62-over").style.fontSize = "250px";
        document.getElementById("frame62-over").style.marginTop = "60px";
    },auxiliary(12000));

    setTimeout(function() {
        document.getElementById("frame62-over").style.fontSize = "500px";
        document.getElementById("frame62-over").style.marginTop = "-120px";
    },auxiliary(14000));

    setTimeout(function() {
        document.getElementById("frame62-over").remove();
        document.getElementById("frame62").remove();

        document.getElementById("frame63").style.display = "block";
    },auxiliary(18000));

    setTimeout(function() {
        document.getElementById("frame63B").style.visibility = "visible"
    },auxiliary(18300));

    setTimeout(function() {
        document.getElementById("frame63C").style.visibility = "visible"
    },auxiliary(18600));

    setTimeout(function() {
        document.getElementById("frame63").remove();

        document.getElementById("frame64").style.display = "block";
        document.getElementById("frame64-over").style.display = "block";
        document.getElementById("pentagram").style.display = "block";

    },auxiliary(19000));

}